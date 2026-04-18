#!/usr/bin/env python3
"""Fetch full CONICET publication data and emit a local JS data bundle."""

from __future__ import annotations

import html
import json
import re
from dataclasses import dataclass
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import urlopen


PROFILE_ID = 20046
BASE_URL = (
    "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id="
    f"{PROFILE_ID}&{{kind}}=yes"
)
OUTPUT_PATH = Path(__file__).with_name("publications-data.js")


CHAR_REPLACEMENTS = str.maketrans(
    {
        "\u0091": "'",
        "\u0092": "'",
        "\u0093": '"',
        "\u0094": '"',
        "\u0096": "-",
        "\u0097": "-",
        "\u00a0": " ",
    }
)


def clean_text(value: str) -> str:
    value = html.unescape(value).translate(CHAR_REPLACEMENTS)
    return re.sub(r"\s+", " ", value).strip()


@dataclass
class ParsedItem:
    lines: list[str]
    href: str | None


class ConicetSectionParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.items: list[ParsedItem] = []
        self._inside_item = False
        self._depth = 0
        self._capture_line = False
        self._current_lines: list[str] = []
        self._current_href: str | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attrs_dict = dict(attrs)

        if tag == "div" and attrs_dict.get("class") == "contenido_item":
            self._inside_item = True
            self._depth = 1
            self._capture_line = False
            self._current_lines = []
            self._current_href = None
            return

        if not self._inside_item:
            return

        if tag == "div":
            self._depth += 1
            if attrs_dict.get("class") == "contenido_renglon":
                self._capture_line = True
                self._current_lines.append("")
        elif tag == "a" and attrs_dict.get("href"):
            self._current_href = "https://www.conicet.gov.ar/new_scp/" + attrs_dict["href"]

    def handle_endtag(self, tag: str) -> None:
        if not self._inside_item:
            return

        if tag == "div":
            if self._capture_line:
                self._capture_line = False
            self._depth -= 1
            if self._depth == 0:
                lines = [clean_text(line) for line in self._current_lines if clean_text(line)]
                if lines:
                    self.items.append(ParsedItem(lines=lines, href=self._current_href))
                self._inside_item = False
                self._current_lines = []
                self._current_href = None

    def handle_data(self, data: str) -> None:
        if self._capture_line and self._current_lines:
            self._current_lines[-1] += data


def fetch_html(kind: str) -> str:
    with urlopen(BASE_URL.format(kind=kind), timeout=30) as response:
        return response.read().decode("utf-8", "replace")


def parse_items(kind: str) -> list[ParsedItem]:
    parser = ConicetSectionParser()
    parser.feed(fetch_html(kind))
    return parser.items


def parse_year(value: str) -> int | None:
    match = re.search(r"Año:\s*(\d{4})", value)
    return int(match.group(1)) if match else None


def strip_year_fragment(value: str) -> str:
    return clean_text(re.sub(r";?\s*Año:\s*\d{4}.*$", "", value).strip(" ;"))


def build_articles() -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []
    for item in parse_items("articulos"):
        if len(item.lines) < 3:
            continue
        venue_line = item.lines[2]
        rows.append(
            {
                "year": parse_year(venue_line),
                "title": item.lines[1],
                "authors": item.lines[0],
                "venue": strip_year_fragment(venue_line),
                "url": item.href,
            }
        )
    return rows


def build_books() -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []
    for item in parse_items("libros"):
        if len(item.lines) < 3:
            continue
        meta_line = item.lines[2]
        rows.append(
            {
                "year": parse_year(meta_line),
                "title": item.lines[1],
                "authors": item.lines[0],
                "meta": re.sub(r"\bAño:\s*\d{4};?\s*", "", meta_line).strip(" ;"),
                "url": item.href,
            }
        )
    return rows


def build_chapters() -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []
    for item in parse_items("capitulos"):
        if len(item.lines) < 4:
            continue
        meta_line = item.lines[3]
        row: dict[str, object] = {
            "year": parse_year(meta_line),
            "title": item.lines[1],
            "authors": item.lines[0],
            "book": item.lines[2],
            "url": item.href,
        }
        meta = re.sub(r"\bAño:\s*\d{4};?\s*", "", meta_line).strip(" ;")
        if meta:
            row["meta"] = meta
        rows.append(row)
    return rows


def main() -> None:
    payload = {
        "articles": build_articles(),
        "books": build_books(),
        "chapters": build_chapters(),
    }

    OUTPUT_PATH.write_text(
        "window.PUBLICATIONS_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )

    print(
        f"Wrote {len(payload['articles'])} articles, "
        f"{len(payload['books'])} books, and "
        f"{len(payload['chapters'])} chapters to {OUTPUT_PATH}"
    )


if __name__ == "__main__":
    main()
