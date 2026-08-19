/*
const articles = [
  {
    year: 2025,
    title:
      "Las interacciones mediadas por tecnologías en el nivel inicial: un estudio cualitativo de los intercambios contingentes entre niños y maestras ante los desafíos de la comunicación por videollamada",
    authors: "Ibáñez, M. I.; Rosemberg, C. R.",
    venue: "Revista Argentina de Investigación Educativa (RAIE)",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12801933",
  },
  {
    year: 2025,
    title:
      "Language and literacy abilities in Qom/Toba children: A bilingual digital programme within a sociocultural perspective",
    authors: "Junyent, A.; Rosemberg, C. R.; Cuneo, P.",
    venue: "Interdisciplinaria",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12304744",
  },
  {
    year: 2025,
    title:
      "Signos prelingüísticos y desarrollo temprano de funciones ejecutivas: la importancia de las intervenciones adultas durante el juego en el hogar",
    authors: "González Lynn, E.; De Benedictis, C.; Stein, A.; Rosemberg, C. R.",
    venue: "Pensamiento Educativo",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12492343",
  },
  {
    year: 2025,
    title:
      "Características cuantitativas del habla docente en situaciones de enseñanza presenciales y virtuales en el jardín maternal y de infantes",
    authors: "Ibáñez, M. I.; Rosemberg, C. R.; Alam, F.; Migdalek, M.",
    venue: "Cuadernos de Investigación Educativa",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12519665",
  },
  {
    year: 2025,
    title:
      "De caídas y lastimaduras: análisis etnopoético de narrativas de experiencia personal en niños argentinos hispanohablantes",
    authors: "Franco Accinelli, A. P.; Stein, A.; Rosemberg, C. R.; Poveda Bicknell, D.",
    venue: "IICE (Buenos Aires)",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12519695",
  },
  {
    year: 2025,
    title:
      "Putting multiparty interactions back into multimodal language development studies: A commentary on Karadöller, Sümer, and Özyürek",
    authors: "Rosemberg, C. R.; Alam, F.; Moreno-Núñez, A.; Casla, M.",
    venue: "First Language",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12636583",
  },
  {
    year: 2025,
    title:
      "La lectura compartida con niños pequeños: explorando la construcción del discurso explicativo desde una perspectiva multimodal",
    authors: "Gonzalez Lynn, E.; Rosemberg, C. R.",
    venue: "Confluencia",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12682840",
  },
  {
    year: 2024,
    title: "A cross-linguistic examination of young children’s everyday language experiences",
    authors:
      "Bunce, J.; Soderstrom, M.; Bergelson, E.; Rosemberg, C. R.; Stein, A.; Alam, F.; Migdalek, M. J.; Casillas, M.",
    venue: "Journal of Child Language",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12137079",
  },
  {
    year: 2024,
    title:
      "Assessment of vocabulary comprehension in Bilingual Qom - Spanish Indigenous children in Northern Argentina: Evidence for education, language preservation, and psycholinguistic theory",
    authors:
      "Rosemberg, C. R.; Ojea, G.; Alam, F.; Garber, L.; Stein, A.; De Benedictis, C.; Jackson Maldonado, D.; Friend, M.",
    venue: "Cognitive Development",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12137042",
  },
  {
    year: 2024,
    title: "How teachers emphasize their speech: gestures and self-repetitions during group interaction with toddlers",
    authors: "Casla, M.; Moreno Núñez, A.; Alam, F.; Rosemberg, C. R.",
    venue: "Language and Education",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=11781248",
  },
  {
    year: 2024,
    title:
      "¿Qué, dónde, cómo, cuándo, por qué? La construcción de la coherencia causal en relatos infantiles de experiencia personal",
    authors: "Franco Accinelli, A. P.; Stein, A.; Rosemberg, C. R.",
    venue: "Revista de Estudos da Linguagem",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12304753",
  },
  {
    year: 2024,
    title: "La realización lingüística de pedidos en el habla dirigida a niños y niñas pequeños de Argentina",
    authors: "Ramírez, L.; Rosemberg, C. R.; De Benedictis, C.",
    venue: "RASAL Lingüística",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12304755",
  },
  {
    year: 2024,
    title: "Gesture and speech in variation sets directed to Spanish learning toddlers in adult-child interactions",
    authors: "Alam, F.; Casla, M.; Ibáñez, M. I.; Rosemberg, C. R.",
    venue: "First Language",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12304760",
  },
  {
    year: 2023,
    title:
      "Producción narrativa en el contexto del aislamiento social por COVID-19: un estudio exploratorio de interacciones niño-adulto mediadas por tecnologías",
    authors:
      "Franco Accinelli, A. P.; Audisio, C.; González Lynn, E.; Ramírez, M. L.; Ibáñez, M. I.; Quiroga, M. S.; Lewinsky, V.; Rosemberg, C. R.",
    venue: "Cuadernos de Investigación Educativa",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=11075696",
  },
  {
    year: 2023,
    title:
      "Lexical Composition of the Vocabulary of Four-Year-Old Children From Different Social Groups and its Relationship to the Linguistic Environment",
    authors: "Quiroga, M. S.; Rosemberg, C. R.; Alam, F.",
    venue: "Revista de Estudos da Linguagem",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=10677662",
  },
  {
    year: 2023,
    title:
      "Las relaciones entre habilidades narrativas y funciones ejecutivas en la infancia. Una revisión sistemática",
    authors:
      "Moreira Tricot, K.; Tomás Llerena, C.; Vercellino Dessent, V.; Rivera Ibaceta, J.; Dávila Sasía, P.; Quiles, S.; Tresso González, F.; Rosemberg, C. R.",
    venue: "Revista Argentina de Ciencias del Comportamiento",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=10850152",
  },
  {
    year: 2023,
    title:
      "Are there socioeconomic differences in the lexical diversity and syntactic complexity of child directed utterances with different pragmatic functions?",
    authors: "Ramírez, L.; Rosemberg, C. R.; Migdalek, M. J.",
    venue: "Early Child Development and Care",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12274494",
  },
  {
    year: 2023,
    title:
      "Disputas entre niños de distintos grupos sociales: complejidad argumentativa, evaluación y evidencialidad",
    authors: "Migdalek, M. J.; Rosemberg, C. R.; Shiro, M.; Fernandez Meijide, D.",
    venue: "Alpha",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12304763",
  },
  {
    year: 2023,
    title:
      "Impacto de las actividades cotidianas, las circunstancias socioeconómicas y el input lingüístico en el vocabulario de niños argentinos de 4 años",
    authors: "Quiroga, M. S.; Rosemberg, C. R.; Alam, F.",
    venue: "Lingüística y Literatura",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12304765",
  },
  {
    year: 2022,
    title:
      "La coherencia causal en relatos infantiles de experiencia personal. Un estudio con niños argentinos hablantes de español",
    authors: "Franco Accinelli, A. P.; Stein, A.; Rosemberg, C. R.",
    venue: "Textos en proceso",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=10293363",
  },
  {
    year: 2022,
    title: "Word order in the input to Argentinian Spanish-learning children",
    authors: "Audisio, C. P.; Quiroga, M. S.; Ramírez, M. L.; Rosemberg, C. R.",
    venue: "Language, Interaction and Acquisition",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=10350783",
  },
  {
    year: 2022,
    title: "Variation sets in the speech directed to toddlers in Argentinian households. SES and type of activity effects",
    authors: "Alam, F.; Rosemberg, C. R.; Garber, L.; Stein, A.",
    venue: "Journal of Child Language",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12274545",
  },
  {
    year: 2022,
    title: "Activity Contexts and Child-Directed Speech in Socioeconomically Diverse Argentinian Households",
    authors: "Rosemberg, C. R.; Alam, F.; Ramírez, M. L.; Ibáñez, M. I.",
    venue: "International Journal of Early Childhood",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12274553",
  },
  {
    year: 2022,
    title:
      "Diferencias en la complejidad sintáctica y diversidad léxica de enunciados con distinta función pragmática en el habla dirigida a bebés argentinos",
    authors: "Ramírez, M. L.; Migdalek, M. J.; Rosemberg, C. R.",
    venue: "Estudos da Linguagem",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&articulos=yes&detalles=yes&art_id=12304770",
  },
];

const books = [
  {
    year: 2023,
    title: "Interacción social, desarrollo y aprendizaje",
    authors: "Rosemberg, C. R.; Barreiro, A.",
    meta: "Ciudad Autónoma de Buenos Aires · 303 páginas",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&libros=yes&detalles=yes&lib_id=12304810",
  },
  {
    year: 2015,
    title: "Dale que? Juego dramático y el desarrollo del lenguaje en niños pequeños",
    authors: "Sarlé, P.; Rosemberg, C. R.",
    meta: "Buenos Aires · 170 páginas",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&libros=yes&detalles=yes&lib_id=12304813",
  },
  {
    year: 2010,
    title: "Aprender a leer desde las culturas: Las aventuras de Huaqagñe. Manual para educadores y comunidades",
    authors: "Rosemberg, C. R.; Ojea, G.",
    meta: "Madrid · 70 páginas",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&libros=yes&detalles=yes&lib_id=12274837",
  },
  {
    year: 2004,
    title: "Niños y maestros por el camino de la alfabetización",
    authors: "Borzone, A. M.; Rosemberg, C. R.; Silvestri, A.; Diuk, B.",
    meta: "Buenos Aires · 214 páginas",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&libros=yes&detalles=yes&lib_id=12278007",
  },
  {
    year: 2000,
    title: "¿Qué aprenden los niños cuando aprenden a hablar? Desarrollo lingüístico y cognitivo en los primeros años",
    authors: "Borzone, A. M.; Rosemberg, C. R.",
    meta: "Buenos Aires · 200 páginas",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&libros=yes&detalles=yes&lib_id=12275986",
  },
  {
    year: 2000,
    title: "Leer y escribir entre dos culturas. El caso de las comunidades kollas",
    authors: "Borzone, A. M.; Rosemberg, C. R.",
    meta: "Buenos Aires · 158 páginas",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&libros=yes&detalles=yes&lib_id=12274929",
  },
];

const chapters = [
  {
    year: 2025,
    title: "Input: Quantity and Quality, Variety and Repetition",
    authors: "Rosemberg, C. R.; Stein, A.; Alam, F.; Migdalek, M.",
    book: "International Encyclopedia of Language and Linguistics, 3rd Edition",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&capitulos=yes&detalles=yes&capit_id=12281985",
  },
  {
    year: 2025,
    title: "Teaching of literacy in two Latin-American countries: a Comparative analysis",
    authors: "Rosemberg, C. R.",
    book: "International Handbook of Litercy Teaching",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&capitulos=yes&detalles=yes&capit_id=12629694",
  },
  {
    year: 2025,
    title:
      "The study of children’s household and community contexts as the base for an intercultural and bilingual early literacy programme",
    authors: "Rosemberg, C. R.; Stein, A.; Alam, F.; Migdalek, M. J.; Ojea, G.",
    book: "Family and intergenerational literacy and learning: International perspectives",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&capitulos=yes&detalles=yes&capit_id=12641666",
  },
  {
    year: 2023,
    title:
      "Los libros infantiles etnográficos en la promoción del desarrollo lingüístico y la alfabetización",
    authors: "Rosemberg, C. R.",
    book: "Prácticas de Leitura: um mosaico de experiências em diferentes países",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&capitulos=yes&detalles=yes&capit_id=12276256",
  },
  {
    year: 2022,
    title: "Alfabetización",
    authors: "Rosemberg, C. R.",
    book: "Diccionario vivo de la niñez",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&capitulos=yes&detalles=yes&capit_id=12276436",
  },
  {
    year: 2021,
    title:
      "Prácticas esenciales para la formación inicial de educadoras de párvulos en interacciones que favorecen el aprendizaje",
    authors: "Lagos, C.; Rosemberg, C.",
    book: "¿Cómo enseñar a enseñar lenguaje?",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&capitulos=yes&detalles=yes&capit_id=12299497",
  },
  {
    year: 2021,
    title:
      "Hogar dulce hogar: oportunidades para el desarrollo del vocabulario y la alfabetización temprana en el contexto lingüístico del hogar",
    authors: "Rosemberg, C. R.",
    book: "La ciencia de la lectura. Los desafíos de leer y comprender textos",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&capitulos=yes&detalles=yes&capit_id=12304825",
  },
  {
    year: 2019,
    title: "Entorno lingüístico y aprendizaje de vocabulario",
    authors: "Rosemberg, C. R.; Stein, A.; Alam, F.; Migdalek, M. J.; Menti, A.",
    book: "Práticas educativas no contexto do Pacto Nacional pela Alfabetização na Idade Certa",
    url: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=20046&capitulos=yes&detalles=yes&capit_id=12304829",
  },
];

*/
const publicationData = window.PUBLICATIONS_DATA || {
  articles: [],
  books: [],
  chapters: [],
};

const articles = publicationData.articles;
const books = publicationData.books;
const chapters = publicationData.chapters;

const transferGroups = [
  {
    id: "huaqajne",
    image: "./transfers/huaqajne.png",
    title: {
      es: "Las aventuras de Huaqajñe",
      en: "Las aventuras de Huaqajñe",
    },
    body: {
      es: "Material desarrollado junto a comunidades kollas del noroeste argentino. Las aventuras del personaje Huaqajñe funcionan como puerta de entrada a la lectura y la escritura desde las historias, lenguas y tradiciones propias de las comunidades. También publicado como manual para educadores y comunidades (Madrid, 2010).",
      en: "Material developed with Kolla communities of northwestern Argentina. Huaqajñe's adventures offer children an entry point into reading and writing grounded in the communities' own stories, languages and traditions. Also published as a manual for educators and communities (Madrid, 2010).",
    },
    links: [
      {
        label: { es: "Libro de lectura", en: "Reading book" },
        url: "https://drive.google.com/file/d/1xYWrgp0N2YwxGjvsiL09CcI3VK3vhMN0/view?usp=sharing",
      },
      {
        label: { es: "Libro de actividades", en: "Activity book" },
        url: "https://drive.google.com/file/d/1uPD8i3EpREvr86Bu3qmdv2ORvyV1X1w8/view?usp=sharing",
      },
    ],
  },
  {
    id: "daviaxaiqui",
    image: "./transfers/daviaxaiqui.png",
    title: {
      es: "En la comunidad Daviaxaiqui",
      en: "En la comunidad Daviaxaiqui",
    },
    body: {
      es: "Serie ambientada en la comunidad qom Daviaxaiqui, en Derqui (Gran Buenos Aires). «El abuelo Valentín», «En la casa de Ana» y «Los nietos de Ramón» recogen escenas cotidianas de la comunidad y funcionan como base para la alfabetización intercultural bilingüe qom–español.",
      en: "A series set in the Qom community of Daviaxaiqui, in Derqui (Greater Buenos Aires). 'El abuelo Valentín', 'En la casa de Ana' and 'Los nietos de Ramón' gather everyday scenes from the community as a starting point for intercultural bilingual literacy in Qom and Spanish.",
    },
    links: [
      {
        label: { es: "El abuelo Valentín", en: "El abuelo Valentín" },
        url: "https://drive.google.com/file/d/1ArbYhekDXQqS8ZQR1vLCTe6OIigZBp1q/view?usp=sharing",
      },
      {
        label: { es: "En la casa de Ana", en: "En la casa de Ana" },
        url: "https://drive.google.com/file/d/11HIVV_H8F_y_b6j2mOgX3jAOaNvqYeOW/view?usp=sharing",
      },
      {
        label: { es: "Los nietos de Ramón", en: "Los nietos de Ramón" },
        url: "https://drive.google.com/file/d/1Nl1n27kEkfyhu4-_lqNNJOrewcgoLsUR/view?usp=sharing",
      },
    ],
  },
  {
    id: "cintia",
    image: "./transfers/cintia.png",
    title: {
      es: "Cintia",
      en: "Cintia",
    },
    body: {
      es: "Libro de lectura y cuadernillo de actividades centrados en la niña Cintia y su vida familiar. Pensado para el trabajo con niñas y niños pequeños, dialoga con versiones en lenguas indígenas desarrolladas por el equipo junto a comunidades bilingües.",
      en: "A reading book and an activity workbook built around the character Cintia and her family life. Designed for work with young children, the material is paired with indigenous-language versions developed by the team with bilingual communities.",
    },
    links: [
      {
        label: { es: "Libro de lectura", en: "Reading book" },
        url: "https://drive.google.com/file/d/1w8O0XP6uzLcZAPZWQVOyLJtH_O7Vi-qc/view?usp=sharing",
      },
      {
        label: { es: "Libro de actividades", en: "Activity book" },
        url: "https://drive.google.com/file/d/1I4t-hiySytGXB95pdWFfpmT9uA03atl3/view?usp=sharing",
      },
    ],
  },
  {
    id: "dany",
    image: "./transfers/dany.png",
    title: {
      es: "Dany",
      en: "Dany",
    },
    body: {
      es: "Material de alfabetización bilingüe qom–español. El libro en castellano se acompaña de la versión «Dany Na'aqtaguec, Na'qaatqa, Relatos, Tolhomtes» en lengua qom, y de dos guías para docentes que orientan el trabajo en aula con niñas y niños de comunidades qom.",
      en: "Bilingual Qom–Spanish literacy material. The Spanish-language book is accompanied by the Qom-language version 'Dany Na'aqtaguec, Na'qaatqa, Relatos, Tolhomtes' and two teachers' guides for classroom work with Qom children.",
    },
    links: [
      {
        label: { es: "Dany (castellano)", en: "Dany (Spanish)" },
        url: "https://drive.google.com/file/d/1wutcHZXl9kiijm9LSa9DI-cOq_2ir8Tc/view?usp=sharing",
      },
      {
        label: { es: "Dany (lengua qom)", en: "Dany (Qom language)" },
        url: "https://drive.google.com/file/d/1O1ZlBY8vVK8z0rCKSc628rd7fNQ-ykoY/view?usp=sharing",
      },
      {
        label: { es: "Guía para docentes 0", en: "Teacher's guide 0" },
        url: "https://www.ciipme-conicet.gov.ar/wp-content/uploads/2021/12/Guia-0.pdf",
      },
      {
        label: { es: "Guía para docentes 1", en: "Teacher's guide 1" },
        url: "https://www.ciipme-conicet.gov.ar/wp-content/uploads/2021/12/Guia-1-.pdf",
      },
    ],
  },
  {
    id: "oscarcito",
    image: "./transfers/oscarcito.jpg",
    title: {
      es: "En la casa de Oscarcito",
      en: "En la casa de Oscarcito",
    },
    body: {
      es: "Serie de doce libros ilustrados para niñas y niños de 3 a 5 años en barrios populares del Área Metropolitana de Buenos Aires. Cada libro explora situaciones cotidianas que potencian el vocabulario, la narración y la comunicación temprana. Elaborada por el equipo de investigadoras del CIIPME y promovida por Elke Rottgardt y Horst Schroth a través de la Fundación Care (Alemania). Se complementa con «Los cuentos de Oscarcito».",
      en: "A twelve-book illustrated series for children aged 3 to 5 in working-class neighborhoods of the Buenos Aires metropolitan area. Each book explores everyday situations that foster vocabulary, narration and early communication. Developed by the CIIPME research team and promoted by Elke Rottgardt and Horst Schroth through the Fundación Care (Germany). Complemented by 'Los cuentos de Oscarcito'.",
    },
    links: [
      {
        label: { es: "Ver la serie en CIIPME", en: "View the series on CIIPME" },
        url: "https://www.ciipme-conicet.gov.ar/wordpress/vinculacion/materiales-de-transferencia/",
      },
      {
        label: { es: "Los cuentos de Oscarcito", en: "Los cuentos de Oscarcito" },
        url: "https://drive.google.com/file/d/1j5sYrQtyIk6YildcLMzf5LHCooQqV5RX/view?usp=sharing",
      },
    ],
  },
  {
    id: "jardin",
    image: "./transfers/leer-escribir-jardin.jpg",
    title: {
      es: "Leer y escribir en el jardín",
      en: "Leer y escribir en el jardín",
    },
    body: {
      es: "Serie de siete títulos basada en observaciones etnográficas de la vida cotidiana de niñas y niños en barrios humildes. Pensada para acompañar los primeros pasos en la lectura y la escritura en el nivel inicial. También promovida a través de la Fundación Care (Alemania).",
      en: "Seven-book series based on ethnographic observations of children's daily life in low-income neighborhoods. Designed to support the first steps into reading and writing at preschool level. Also promoted through the Fundación Care (Germany).",
    },
    links: [
      {
        label: { es: "Ver la serie en CIIPME", en: "View the series on CIIPME" },
        url: "https://www.ciipme-conicet.gov.ar/wordpress/vinculacion/materiales-de-transferencia/",
      },
    ],
  },
  {
    id: "familias",
    image: null,
    monogram: "MF",
    title: {
      es: "Módulos para familias",
      en: "Family modules",
    },
    body: {
      es: "Tres cuadernillos breves pensados para familias: «La lectura de cuentos en el hogar», «Aprender a escribir las primeras palabras en el hogar» y «Aprender el lenguaje conversando en el hogar». Sugerencias concretas para acompañar el desarrollo del lenguaje y la alfabetización en el día a día.",
      en: "Three short booklets designed for families: 'Reading stories at home', 'Learning to write first words at home', and 'Learning language through conversation at home'. Concrete suggestions to support language development and literacy in everyday life.",
    },
    links: [
      {
        label: {
          es: "La lectura de cuentos en el hogar",
          en: "Reading stories at home",
        },
        url: "https://drive.google.com/open?id=1-BApQ1-QMmZaD6c9Kltd_QoctBiv49_m",
      },
      {
        label: {
          es: "Aprender a escribir las primeras palabras",
          en: "Learning to write first words",
        },
        url: "https://drive.google.com/open?id=1MoM81hRbINa7iePlrfRwzNUyOGPus7oj",
      },
      {
        label: {
          es: "Aprender el lenguaje conversando",
          en: "Learning language through conversation",
        },
        url: "https://drive.google.com/open?id=1ClHIJpWiW992WZvbPDT1O46CF2fyC41q",
      },
    ],
  },
  {
    id: "tomas",
    image: "./transfers/tomas.jpg",
    title: {
      es: "Tomás y sus amigos exploran el mundo",
      en: "Tomás y sus amigos exploran el mundo",
    },
    body: {
      es: "Libro infantil publicado en 2023 que invita a niñas y niños a explorar el mundo de la mano de Tomás y sus amigos. Continúa la línea de trabajo del equipo en materiales de alfabetización temprana.",
      en: "Children's book published in 2023 inviting young readers to explore the world with Tomás and his friends. Continues the team's ongoing line of work on early literacy materials.",
    },
    links: [
      {
        label: { es: "Ver el libro", en: "View the book" },
        url: "https://drive.google.com/file/d/1RmdacusRfGyOE8Mge1CEpxgfv4uupuWc/view?usp=drive_link",
      },
    ],
  },
];

const corpora = [
  {
    title: "Los entornos lingüísticos de niños pequeños en Argentina",
    team: "Rosemberg, C. R.; Alam, F.; Stein, A.; Migdalek, M. J.; Menti, A.; Ojea, G.",
    period: "2015–2016",
    typeKey: "corpus.typeLinguistic",
  },
  {
    title: "Variaciones socioeconómicas y culturales en las experiencias lingüísticas tempranas",
    team: "Rosemberg, C. R.; Alam, F.; Ramírez, M. L.; Ibáñez, I.; Ojea, G.; Barrial, E.",
    period: "2018–2019",
    typeKey: "corpus.typeLinguistic",
  },
  {
    title: "Los entornos lingüísticos en el hogar de niños argentinos de 4 años",
    team: "Rosemberg, C. R.; Arrúe, J.; Alam, F.",
    period: "2005–2012",
    typeKey: "corpus.typeLinguistic",
  },
  {
    title: "Los entornos de desarrollo infantil en comunidades collas",
    team: "Rosemberg, C. R.; Borzone, A. M.",
    period: "1995–1997",
    typeKey: "corpus.typeLinguistic",
  },
  {
    title: "Producción de narrativas a partir de imágenes en niños y adolescentes",
    team: "Rosemberg, C. R.",
    period: "1998–1999",
    typeKey: "corpus.typeNarratives",
  },
  {
    title: "Los entornos de desarrollo infantil en comunidades qom",
    team: "Rosemberg, C. R.; Ojea, G.; Alam, F.",
    period: "2010–2011",
    typeKey: "corpus.typeLinguistic",
  },
  {
    title: "Situaciones de alfabetización temprana en jardín de infantes de Entre Ríos",
    team: "Rosemberg, C. R.; Stein, A.",
    period: "2012",
    typeKey: "corpus.typeLinguistic",
  },
  {
    title: "Situaciones de alfabetización temprana y familiar en Buenos Aires",
    team: "Rosemberg, C. R.; Stein, A.; Migdalek, M.",
    period: "2003–2008",
    typeKey: "corpus.typeLinguistic",
  },
  {
    title: "Narrativas pasadas y futuras del día del niño",
    team: "Rosemberg, C. R.; Alam, F.",
    period: "2009–2012",
    typeKey: "corpus.typeNarratives",
  },
  {
    title: "De niño/a a niño/a: situaciones de alfabetización entre niños/as",
    team: "Rosemberg, C. R.; Alam, F.",
    period: "2009, 2016",
    typeKey: "corpus.typeLinguistic",
  },
  {
    title: "Narraciones de experiencia personal en poblaciones urbano marginadas del AMBA",
    team: "Rosemberg, C. R.; Stein, A.; Alam, F.; Migdalek, M.",
    period: "2015–2016",
    typeKey: "corpus.typeNarratives",
  },
];

// ---------- i18n ----------

const i18n = {
  es: {
    "brand.aria": "Ir al inicio",
    "brand.subtitle": "Investigadora superior · CONICET",
    "nav.aria": "Principal",
    "nav.home": "Inicio",
    "nav.publications": "Publicaciones",
    "nav.library": "Libros",
    "nav.contact": "Contacto",
    "lang.aria": "Idioma / Language",
    "hero.eyebrow": "Lenguaje · Infancia · Alfabetización",
    "hero.lede":
      "Investigadora superior del CONICET en el CIIPME. Estudia cómo los niños pequeños aprenden a hablar, a narrar y a leer en sus hogares, jardines y comunidades.",
    "hero.cv": "Ver CV",
    "portrait.alt": "Retrato de Celia Rosemberg",
    "bio.label": "Biografía",
    "bio.p1":
      "Doctora de la Facultad de Filosofía y Letras de la Universidad de Buenos Aires (UBA), licenciada y profesora en Ciencias de la Educación. Es investigadora superior del CONICET y profesora titular de Metodología de la Investigación en la UBA. Desarrolla su trabajo en el Centro Interdisciplinario de Investigaciones en Psicología Matemática y Experimental (CIIPME), con sede en el CCT CABA Sur.",
    "bio.p2":
      "Su agenda combina el análisis psicolingüístico con una mirada ecológica y sociocultural del aprendizaje. Estudia cómo los entornos cotidianos —hogares, jardines maternales, escuelas y comunidades— moldean la forma en que las niñas y los niños aprenden a hablar, a narrar y a leer. Dirige proyectos sobre vocabulario, discurso, multimodalidad y alfabetización temprana.",
    "bio.p3.pre": "Publica regularmente en revistas internacionales como ",
    "bio.p3.conj": " y ",
    "bio.p3.post":
      ". Parte de su investigación se realiza junto a comunidades bilingües qom-español del norte argentino, articulando ciencia, educación intercultural y formación docente.",
    "panel.aria": "Datos académicos",
    "panel.rank": "Categoría",
    "panel.rankValue": "Investigadora superior · CONICET",
    "panel.institution": "Institución",
    "panel.institutionValue": "CIIPME · CCT CABA Sur",
    "panel.teaching": "Docencia",
    "panel.teachingValue": "Profesora titular · Metodología de la Investigación (UBA)",
    "panel.education": "Formación",
    "panel.educationValue": "Doctora · Facultad de Filosofía y Letras (UBA)",
    "panel.areas": "Áreas",
    "panel.areasValue": "Desarrollo del lenguaje · Alfabetización temprana · Interacción",
    "pubs.label": "Publicaciones",
    "pubs.heading": "Publicaciones",
    "pubs.lede":
      "El archivo completo de artículos cargado en la página a partir de la ficha oficial de CONICET. Podés recorrerlo completo, filtrarlo por año o buscar por título, revista o palabra clave.",
    "pubs.searchSr": "Buscar publicaciones",
    "pubs.searchPlaceholder": "Buscar por título, revista o palabra clave",
    "pubs.filterAria": "Filtrar por año",
    "pubs.filterLabel": "Año",
    "pubs.filterAll": "Todos",
    "pubs.summary": "Mostrando {count} {unit} del archivo completo de {total}.",
    "pubs.summaryUnitSingular": "artículo",
    "pubs.summaryUnitPlural": "artículos",
    "pubs.sourceLink": "Listado completo en CONICET →",
    "pubs.copyApa": "Cita APA",
    "pubs.copyApaDone": "Copiado",
    "pubs.noResultsMeta1": "Sin coincidencias",
    "pubs.noResultsMeta2": "Ver archivo completo",
    "pubs.noResultsTitle": "No encontré resultados con ese filtro.",
    "pubs.noResultsBody":
      "Podés limpiar la búsqueda o abrir el listado completo en CONICET.",
    "lib.label": "Libros y capítulos",
    "lib.heading": "Libros y capítulos",
    "lib.lede":
      "El listado completo de libros y capítulos cargado desde la ficha pública de CONICET.",
    "lib.booksTitle": "Libros",
    "lib.booksCountSingular": "libro",
    "lib.booksCountPlural": "libros",
    "lib.chaptersTitle": "Capítulos",
    "lib.chaptersCountSingular": "capítulo",
    "lib.chaptersCountPlural": "capítulos",
    "lib.bookLabel": "Libro",
    "lib.chapterLabel": "Capítulo",
    "contact.label": "Contacto",
    "contact.heading": "Para consultas académicas e invitaciones.",
    "contact.lede":
      "Las consultas institucionales pueden canalizarse a través del CIIPME (CONICET), en la Ciudad Autónoma de Buenos Aires, o por medio de la ficha pública del CONICET.",
    "contact.aria": "Contacto institucional",
    "contact.institution": "Institución",
    "contact.institutionValue": "CIIPME · CCT CABA Sur · CONICET",
    "contact.location": "Ubicación",
    "contact.locationValue": "Ciudad Autónoma de Buenos Aires, Argentina",
    "contact.cta": "Perfil en CONICET",
    "nav.transfers": "Transferencias",
    "nav.corpora": "Corpus",
    "nav.project": "Proyecto Alfabetización Familiar",
    "project.href": "./alfabetizacion-familiar/",
    "transfers.label": "Transferencias",
    "transfers.heading": "Materiales de transferencia",
    "transfers.sourceLink": "Ver en el sitio del CIIPME →",
    "transfers.typeBook": "Libro infantil",
    "transfers.typeActivity": "Cuadernillo de actividades",
    "transfers.typeSeries": "Serie",
    "transfers.typeFamily": "Módulo para familias",
    "transfers.typeTeacherGuide": "Guía para docentes",
    "corpus.label": "Corpus",
    "corpus.heading": "Corpus de investigación",
    "corpus.sourceLink": "Ver detalles en CIIPME →",
    "corpus.typeLinguistic": "Corpus lingüístico",
    "corpus.typeNarratives": "Narrativas",
  },
  en: {
    "brand.aria": "Go to home",
    "brand.subtitle": "Investigadora superior · CONICET",
    "nav.aria": "Main",
    "nav.home": "Home",
    "nav.publications": "Publications",
    "nav.library": "Books",
    "nav.contact": "Contact",
    "lang.aria": "Language / Idioma",
    "hero.eyebrow": "Language · Childhood · Literacy",
    "hero.cv": "View CV",
    "portrait.alt": "Portrait of Celia Rosemberg",
    "bio.p1":
      "PhD from the Facultad de Filosofía y Letras of the Universidad de Buenos Aires (UBA), Licenciada and Profesora in Ciencias de la Educación. She is an Investigadora superior at CONICET and Profesora titular of Metodología de la Investigación at UBA. She works at the Centro Interdisciplinario de Investigaciones en Psicología Matemática y Experimental (CIIPME), based at the CCT CABA Sur.",
    "bio.p2":
      "Her work combines psycholinguistic analysis with an ecological and sociocultural approach to learning. She studies how everyday settings —homes, nurseries, schools, and communities— shape the way girls and boys learn to speak, narrate, and read. She leads projects on vocabulary, discourse, multimodality, and early literacy.",
    "bio.p3.pre": "Her work appears regularly in international journals such as ",
    "bio.p3.conj": ", and ",
    "bio.p3.post":
      ". Part of her research is carried out with Qom–Spanish bilingual communities in northern Argentina, bringing together science, intercultural education, and teacher training.",
    "panel.aria": "Academic details",
    "panel.rank": "Rank",
    "panel.rankValue": "Investigadora superior · CONICET",
    "panel.institution": "Institution",
    "panel.institutionValue": "CIIPME · CCT CABA Sur",
    "panel.teaching": "Teaching",
    "panel.teachingValue": "Profesora titular · Metodología de la Investigación (UBA)",
    "panel.education": "Education",
    "panel.educationValue": "PhD · Facultad de Filosofía y Letras (UBA)",
    "panel.areas": "Areas",
    "panel.areasValue": "Language development · Early literacy · Interaction",
    "pubs.label": "Publications",
    "pubs.heading": "Publications",
    "pubs.lede":
      "The complete article archive loaded into the page from the official CONICET profile. You can browse the full list, filter by year, or search by title, journal, or keyword.",
    "pubs.searchSr": "Search publications",
    "pubs.searchPlaceholder": "Search by title, journal, or keyword",
    "pubs.filterAria": "Filter by year",
    "pubs.filterLabel": "Year",
    "pubs.filterAll": "All",
    "pubs.summary": "Showing {count} {unit} from the full archive of {total}.",
    "pubs.summaryUnitSingular": "article",
    "pubs.summaryUnitPlural": "articles",
    "pubs.sourceLink": "Full listing on CONICET →",
    "pubs.copyApa": "APA Citation",
    "pubs.copyApaDone": "Copied",
    "pubs.noResultsMeta1": "No matches",
    "pubs.noResultsMeta2": "See full archive",
    "pubs.noResultsTitle": "No results for that filter.",
    "pubs.noResultsBody":
      "You can clear the search or open the full listing on CONICET.",
    "lib.label": "Books & chapters",
    "lib.heading": "Books and chapters",
    "lib.lede":
      "The complete list of books and chapters loaded from the public CONICET profile.",
    "lib.booksTitle": "Books",
    "lib.booksCountSingular": "book",
    "lib.booksCountPlural": "books",
    "lib.chaptersTitle": "Chapters",
    "lib.chaptersCountSingular": "chapter",
    "lib.chaptersCountPlural": "chapters",
    "lib.bookLabel": "Book",
    "lib.chapterLabel": "Chapter",
    "contact.label": "Contact",
    "contact.heading": "For academic inquiries and invitations.",
    "contact.lede":
      "Institutional inquiries can be directed through CIIPME (CONICET), in the Autonomous City of Buenos Aires, or via the public CONICET profile.",
    "contact.aria": "Institutional contact",
    "contact.institution": "Institution",
    "contact.institutionValue": "CIIPME · CCT CABA Sur · CONICET",
    "contact.location": "Location",
    "contact.locationValue": "Ciudad Autónoma de Buenos Aires, Argentina",
    "contact.cta": "CONICET profile",
    "nav.transfers": "Resources",
    "nav.corpora": "Corpora",
    "nav.project": "Proyecto Alfabetización Familiar",
    "project.href": "./alfabetizacion-familiar/en/",
    "transfers.label": "Transfer materials",
    "transfers.heading": "Transfer materials",
    "transfers.sourceLink": "View on the CIIPME site →",
    "transfers.typeBook": "Children's book",
    "transfers.typeActivity": "Activity book",
    "transfers.typeSeries": "Series",
    "transfers.typeFamily": "Family guide",
    "transfers.typeTeacherGuide": "Teacher's guide",
    "corpus.label": "Research data",
    "corpus.heading": "Research corpora",
    "corpus.sourceLink": "View details on CIIPME →",
    "corpus.typeLinguistic": "Language corpus",
    "corpus.typeNarratives": "Narratives",
  },
};

const BIO_JOURNALS = [
  "First Language",
  "Journal of Child Language",
  "Cognitive Development",
  "Early Child Development and Care",
];

const LANG_STORAGE_KEY = "webpage_mama_lang";
const supportedLangs = ["es", "en"];
let currentLang = (() => {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored && supportedLangs.includes(stored)) return stored;
  const browser = (navigator.language || "es").slice(0, 2).toLowerCase();
  return supportedLangs.includes(browser) ? browser : "es";
})();

function t(key) {
  return i18n[currentLang]?.[key] ?? i18n.es[key] ?? key;
}

function countLabel(count, singularKey, pluralKey) {
  const unit = count === 1 ? t(singularKey) : t(pluralKey);
  return `${count} ${unit}`;
}

// ---------- DOM helpers ----------

function createEl(tag, options) {
  const el = document.createElement(tag);
  if (!options) return el;
  if (options.class) el.className = options.class;
  if (options.text !== undefined) el.textContent = String(options.text);
  if (options.attrs) {
    for (const key of Object.keys(options.attrs)) {
      el.setAttribute(key, options.attrs[key]);
    }
  }
  return el;
}

function createLink(url, children) {
  const link = createEl("a", {
    attrs: { href: url, target: "_blank", rel: "noreferrer" },
  });
  children.forEach((child) => link.append(child));
  return link;
}

// ---------- Rendering ----------

const publicationList = document.querySelector("#publication-list");
const publicationSummary = document.querySelector("#publication-summary");
const searchInput = document.querySelector("#publication-search");
const yearFilter = document.querySelector("#publication-year-filter");
const bookList = document.querySelector("#book-list");
const chapterList = document.querySelector("#chapter-list");
const booksCount = document.querySelector("#books-count");
const chaptersCount = document.querySelector("#chapters-count");
const transfersShowcase = document.querySelector("#transfers-showcase");
const corporaList = document.querySelector("#corpora-list");

let activeYear = "all";
let activeQuery = "";

function normalizeText(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getAvailableYears() {
  return [...new Set(articles.map((item) => item.year).filter(Boolean))].sort(
    (a, b) => b - a
  );
}

function renderYearFilters() {
  if (!yearFilter) return;

  const options = [];
  options.push(
    createEl("option", {
      text: t("pubs.filterAll"),
      attrs: { value: "all" },
    })
  );

  getAvailableYears().forEach((year) => {
    options.push(
      createEl("option", {
        text: String(year),
        attrs: { value: String(year) },
      })
    );
  });

  yearFilter.replaceChildren(...options);
  yearFilter.value = activeYear;
}

function toApaAuthors(authors) {
  const list = authors
    .split(";")
    .map((a) => a.trim())
    .filter(Boolean);
  if (list.length === 0) return "";
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]}, & ${list[1]}`;
  return `${list.slice(0, -1).join(", ")}, & ${list[list.length - 1]}`;
}

function buildApaCitation(item) {
  const authorStr = toApaAuthors(item.authors || "");
  const parts = [];
  if (authorStr) parts.push(`${authorStr} (${item.year}).`);
  else parts.push(`(${item.year}).`);
  if (item.title) parts.push(`${item.title}.`);
  if (item.venue) parts.push(`${item.venue}.`);
  if (item.url) parts.push(item.url);
  return parts.join(" ");
}

async function copyApaCitation(item, button) {
  const citation = buildApaCitation(item);
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(citation);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = citation;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    button.textContent = t("pubs.copyApaDone");
    button.classList.add("is-copied");
    setTimeout(() => {
      button.textContent = t("pubs.copyApa");
      button.classList.remove("is-copied");
    }, 1800);
  } catch (err) {
    console.error("Failed to copy citation:", err);
  }
}

function createPublicationItem(item) {
  const meta = createEl("div", { class: "publication-item__meta" });
  meta.append(createEl("span", { text: item.year }));
  meta.append(createEl("span", { text: item.venue }));

  const title = createEl("h3", {
    class: "publication-item__title",
    text: item.title,
  });

  const authors = createEl("p", {
    class: "publication-item__authors",
    text: item.authors,
  });

  const copyBtn = createEl("button", {
    class: "publication-item__copy",
    text: t("pubs.copyApa"),
    attrs: { type: "button" },
  });
  copyBtn.addEventListener("click", () => {
    copyApaCitation(item, copyBtn);
  });

  const footer = createEl("div", { class: "publication-item__footer" });
  footer.append(authors, copyBtn);

  const article = createEl("article", { class: "publication-item" });
  article.append(createLink(item.url, [meta, title]));
  article.append(footer);

  return article;
}

function createStackItem(item, extraLabel) {
  const meta = createEl("div", { class: "stack-item__meta" });
  meta.append(createEl("span", { text: item.year }));
  meta.append(createEl("span", { text: extraLabel }));

  const title = createEl("h3", {
    class: "stack-item__title",
    text: item.title,
  });

  const authors = createEl("p", {
    class: "stack-item__authors",
    text: item.authors,
  });

  const detailText = [item.book, item.meta].filter(Boolean).join(" · ");
  const book = createEl("p", {
    class: "stack-item__book",
    text: detailText,
  });

  const article = createEl("article", { class: "stack-item" });
  article.append(createLink(item.url, [meta, title, authors, book]));
  return article;
}

function createNoResultsItem() {
  const meta = createEl("div", { class: "publication-item__meta" });
  meta.append(createEl("span", { text: t("pubs.noResultsMeta1") }));
  meta.append(createEl("span", { text: t("pubs.noResultsMeta2") }));

  const title = createEl("h3", {
    class: "publication-item__title",
    text: t("pubs.noResultsTitle"),
  });

  const body = createEl("p", {
    class: "publication-item__authors",
    text: t("pubs.noResultsBody"),
  });

  const article = createEl("article", { class: "publication-item" });
  article.append(
    createLink(
      "https://www.conicet.gov.ar/new_scp/detalle.php?id=20046&articulos=yes",
      [meta, title, body]
    )
  );
  return article;
}

function renderArticles() {
  const filtered = articles.filter((item) => {
    const matchesYear = activeYear === "all" || item.year === Number(activeYear);
    const haystack = normalizeText(`${item.title} ${item.authors} ${item.venue}`);
    const matchesQuery = haystack.includes(activeQuery);
    return matchesYear && matchesQuery;
  });

  publicationList.replaceChildren();

  if (!filtered.length) {
    publicationList.append(createNoResultsItem());
  } else {
    filtered.forEach((item) => publicationList.append(createPublicationItem(item)));
  }

  const unit =
    filtered.length === 1
      ? t("pubs.summaryUnitSingular")
      : t("pubs.summaryUnitPlural");
  publicationSummary.textContent = t("pubs.summary")
    .replace("{count}", filtered.length)
    .replace("{unit}", unit)
    .replace("{total}", articles.length);
}

function renderLibrary() {
  bookList.replaceChildren();
  chapterList.replaceChildren();

  books.forEach((item) => {
    bookList.append(createStackItem(item, t("lib.bookLabel")));
  });

  chapters.forEach((item) => {
    chapterList.append(createStackItem(item, t("lib.chapterLabel")));
  });

  if (booksCount) {
    booksCount.textContent = countLabel(
      books.length,
      "lib.booksCountSingular",
      "lib.booksCountPlural"
    );
  }
  if (chaptersCount) {
    chaptersCount.textContent = countLabel(
      chapters.length,
      "lib.chaptersCountSingular",
      "lib.chaptersCountPlural"
    );
  }
}

function createShowcaseItem(group) {
  const article = createEl("article", { class: "showcase-item" });

  const body = createEl("div", { class: "showcase-item__body" });
  body.append(
    createEl("h3", {
      class: "showcase-item__title",
      text: group.title[currentLang] || group.title.es,
    })
  );
  body.append(
    createEl("p", {
      class: "showcase-item__text",
      text: group.body[currentLang] || group.body.es,
    })
  );

  if (group.links && group.links.length) {
    const list = createEl("ul", { class: "showcase-item__links" });
    group.links.forEach((link) => {
      const li = document.createElement("li");
      const a = createEl("a", {
        text: link.label[currentLang] || link.label.es,
        attrs: {
          href: link.url,
          target: "_blank",
          rel: "noreferrer",
        },
      });
      li.append(a);
      list.append(li);
    });
    body.append(list);
  }

  const figure = createEl("figure", { class: "showcase-item__figure" });
  if (group.image) {
    figure.append(
      createEl("img", {
        attrs: {
          src: group.image,
          alt: group.title[currentLang] || group.title.es,
          loading: "lazy",
        },
      })
    );
  } else {
    const placeholder = createEl("div", {
      class: "showcase-item__placeholder",
      text: group.monogram || "·",
    });
    figure.append(placeholder);
  }

  article.append(body, figure);
  return article;
}

function createCorpusItem(item) {
  const meta = createEl("div", { class: "stack-item__meta" });
  meta.append(createEl("span", { text: item.period }));
  meta.append(createEl("span", { text: t(item.typeKey) }));

  const title = createEl("h3", {
    class: "stack-item__title",
    text: item.title,
  });

  const team = createEl("p", {
    class: "stack-item__authors",
    text: item.team,
  });

  const article = createEl("article", { class: "stack-item" });
  if (item.url) {
    article.append(createLink(item.url, [meta, title, team]));
  } else {
    const wrapper = createEl("div", { class: "stack-item__inner" });
    wrapper.append(meta, title, team);
    article.append(wrapper);
  }
  return article;
}

function renderTransfers() {
  if (!transfersShowcase) return;
  transfersShowcase.replaceChildren();
  transferGroups.forEach((group) => {
    transfersShowcase.append(createShowcaseItem(group));
  });
}

function renderCorpora() {
  if (!corporaList) return;
  corporaList.replaceChildren();
  corpora.forEach((item) => {
    corporaList.append(createCorpusItem(item));
  });
}

function renderBioP3() {
  const target = document.querySelector('[data-i18n-html="bio.p3"]');
  if (!target) return;

  target.replaceChildren();
  target.append(document.createTextNode(t("bio.p3.pre")));

  BIO_JOURNALS.forEach((journal, index) => {
    if (index > 0) {
      const isLast = index === BIO_JOURNALS.length - 1;
      target.append(document.createTextNode(isLast ? t("bio.p3.conj") : ", "));
    }
    target.append(createEl("em", { text: journal }));
  });

  target.append(document.createTextNode(t("bio.p3.post")));
}

searchInput.addEventListener("input", (event) => {
  activeQuery = normalizeText(event.target.value.trim());
  renderArticles();
});

yearFilter?.addEventListener("change", (event) => {
  activeYear = event.target.value;
  renderArticles();
});

// ---------- Language toggle ----------

function applyLanguage(lang) {
  if (!supportedLangs.includes(lang)) lang = "es";
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const active = btn.dataset.langBtn === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  renderBioP3();
  renderYearFilters();
  renderArticles();
  renderLibrary();
  renderTransfers();
  renderCorpora();
}

document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.dataset.langBtn);
  });
});

applyLanguage(currentLang);

// ---------- Tab navigation ----------

const views = document.querySelectorAll(".view");
const viewLinks = document.querySelectorAll("[data-view-link]");
const validViews = new Set(Array.from(views).map((view) => view.dataset.view));
const defaultView = "inicio";

function showView(name) {
  const target = validViews.has(name) ? name : defaultView;

  views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === target);
  });

  viewLinks.forEach((link) => {
    const active = link.dataset.viewLink === target;
    link.classList.toggle("is-active", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function navigate(name) {
  const target = validViews.has(name) ? name : defaultView;
  const hash = `#${target}`;
  if (window.location.hash !== hash) {
    history.pushState(null, "", hash);
  }
  showView(target);
}

viewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navigate(link.dataset.viewLink);
  });
});

window.addEventListener("popstate", () => {
  const name = window.location.hash.slice(1) || defaultView;
  showView(name);
});

const initialView = window.location.hash.slice(1) || defaultView;
showView(initialView);
