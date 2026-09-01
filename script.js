/* ══════════════════════════════════════════════════
   Mouhamed Mbaye — Page Académique
   Script partagé : layout, i18n, données, HAL API
   ══════════════════════════════════════════════════ */

let currentLang = localStorage.getItem('lang') || 'fr'
let currentTheme = localStorage.getItem('theme') || 'light'
document.documentElement.setAttribute('data-theme', currentTheme)

const cvUrl = {
  fr: 'public/CvTAL.pdf',
  en: 'public/CvTAL.pdf' // Modifiable par l'utilisateur plus tard (ex: 'public/CvTAL_EN.pdf')
}

const metaData = {
  fr: {
    accueil: { title: "Mouhamed Mbaye - Accueil", desc: "Page académique de Mouhamed Mbaye, Ingénieur en TAL/NLP." },
    actualites: { title: "Mouhamed Mbaye - Actualités", desc: "Actualités et nouveautés de Mouhamed Mbaye : GalsenAI Lab, évènements, diplômes." },
    rechercheareas: { title: "Mouhamed Mbaye - Axes de recherche", desc: "Axes de recherche de Mouhamed Mbaye : Recherche et extraction de connaissances, langues à faibles ressources, GenAI." },
    publications: { title: "Mouhamed Mbaye - Publications", desc: "Publications et rapports de recherche de Mouhamed Mbaye. Index HAL et ORCID." },
    logiciels: { title: "Mouhamed Mbaye - Logiciels", desc: "Logiciels et applications développés par Mouhamed Mbaye : AI Orchestrator, KNOW-SN RAG, IMGT-NER-APP." },
    formation: { title: "Mouhamed Mbaye - Formation", desc: "Parcours de formation de Mouhamed Mbaye : Master TAL Besançon, Master Data Science-NLP Rabat, Licence Linguistique Marrakech." },
  },
  en: {
    accueil: { title: "Mouhamed Mbaye - Home", desc: "Academic webpage of Mouhamed Mbaye, NLP/TAL Engineer." },
    actualites: { title: "Mouhamed Mbaye - News", desc: "News and updates from Mouhamed Mbaye: GalsenAI Lab, events, degrees." },
    rechercheareas: { title: "Mouhamed Mbaye - Research Areas", desc: "Research interests of Mouhamed Mbaye: Information retrieval and extraction, low-resource languages, GenAI." },
    publications: { title: "Mouhamed Mbaye - Publications", desc: "Publications and research reports of Mouhamed Mbaye. HAL and ORCID index." },
    logiciels: { title: "Mouhamed Mbaye - Software", desc: "Software and applications developed by Mouhamed Mbaye: AI Orchestrator, KNOW-SN RAG, IMGT-NER-APP." },
    formation: { title: "Mouhamed Mbaye - Education", desc: "Education path of Mouhamed Mbaye: Master NLP Besançon, Master Data Science-NLP Rabat, Bachelor Linguistics Marrakech." },
  }
}

/* ══════════════════════════════════════
   TRADUCTIONS
   ══════════════════════════════════════ */
const i18n = {
  fr: {
    'header.welcome': 'Bienvenue sur ma page personnelle',
    'nav.accueil': 'Accueil',
    'nav.actualites': 'Actualités',
    'nav.rechercheareas': 'Axes de recherche',
    'nav.publications': 'Publications',
    'nav.logiciels': 'Logiciels',
    'nav.formation': 'Formation',
    'sidebar.status': "Ingénieur TAL @ GalsenAI Lab",
    'sidebar.lang-title': 'Langues',
    'sidebar.contact-title': 'Profils & Contact',
    'sidebar.news-title': 'Actualités',
    'link.email': 'E-mail',
    'link.cv': 'Télécharger le CV',
  },
  en: {
    'header.welcome': 'Welcome to my personal page',
    'nav.accueil': 'Home',
    'nav.actualites': 'News',
    'nav.rechercheareas': 'Research Areas',
    'nav.publications': 'Publications',
    'nav.logiciels': 'Software',
    'nav.formation': 'Education',
    'sidebar.status': "NLP Engineer @ GalsenAI Lab",
    'sidebar.lang-title': 'Languages',
    'sidebar.contact-title': 'Profiles & Contact',
    'sidebar.news-title': 'News',
    'link.email': 'Email',
    'link.cv': 'Download CV',
  },
}

/* ══════════════════════════════════════
   DONNÉES
   ══════════════════════════════════════ */

const aboutData = {
  fr: {
    greeting: 'Bonjour,',
    intro: "Je suis Mouhamed Mbaye, ingénieur en Traitement Automatique des Langues (TAL / NLP) et membre chercheur au sein de GalsenAI Lab.",
    motivation: "Je suis passionné par la R&D en TAL, notamment dans la recherche et l'extraction d'information, la génération augmentée par récupération (RAG), et le traitement des langues à faibles ressources.",
    interestsTitle: 'Intérêts de recherche',
    interests: [
      { title: "Recherche et Extraction d'Information", body: "La Reconnaissance d'Entités Nommées et l'extraction de relations dans les textes, la liaison d'entités..." },
      { title: "Génération Augmentée par Récupération (RAG)", body: "LangChain, LangGraph, ChromaDB, etc." },
      { title: "Traitement des langues à faibles ressources", body: "Constitution de ressources linguistiques pour le wolof." }
    ],
  },
  en: {
    greeting: 'Hello,',
    intro: "I am Mouhamed Mbaye, a Natural Language Processing (NLP) engineer and research member at GalsenAI Lab.",
    motivation: "I am passionate about R&D in NLP, particularly in information retrieval and extraction, retrieval-augmented generation (RAG), and low-resource language processing.",
    interestsTitle: 'Research Interests',
    interests: [
      { title: "Information Retrieval and Extraction", body: "Named Entity Recognition and relation extraction in texts, entity linking..." },
      { title: "Retrieval-Augmented Generation (RAG)", body: "LangChain, LangGraph, ChromaDB, etc." },
      { title: "Low-Resource NLP", body: "Building linguistic resources for Wolof." }
    ],
  },
}

const languagesData = {
  fr: "Wolof : Natif\nFrançais : Courant\nArabe : Courant\nAnglais : Professionnel",
  en: "Wolof: Native\nFrench: Fluent\nArabic: Fluent\nEnglish: Professional",
}

const news = {
  fr: [
    {
      date: 'Août 2026',
      text: "Papier accepté à NL4AI 2026 : « Known but Unreachable: A Diagnostic Evaluation of Wolof Entity Linking against Wikidata ».",
      details: "Mon article de recherche sur l'évaluation diagnostique de la liaison d'entités (Entity Linking) en wolof vers Wikidata a été accepté pour publication dans les actes et présentation orale lors du 9e workshop NL4AI 2026 (co-localisé avec AI*IA 2026 à Pérouse, Italie). Retrouvez l'appel à papiers et les détails sur le site du workshop : <a href=\"http://sag.art.uniroma2.it/NL4AI/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"footer-link-web\">sag.art.uniroma2.it/NL4AI ↗</a>."
    },
    {
      date: 'Juil. 2026',
      text: "Intégration de GalsenAI Lab en tant que chercheur et membre actif sur le pôle TAL.",
      details: "GalsenAI est la communauté et le laboratoire de recherche de référence en intelligence artificielle au Sénégal. J'y contribue activement en menant des travaux de recherche axés sur le traitement automatique des langues locales (comme le Wolof) et l'intégration de technologies d'IA générative."
    },
    {
      date: 'Mai 2026',
      text: "Prépublication (Preprint) : « MudawanSn: A Gold-Standard Wolof–Arabic Parallel Corpus for Machine Translation ».",
      details: "Parution du pré-tirage de notre article co-écrit (avec Thierno Diop) présentant MudawanSn, un corpus parallèle de référence de 1 271 paires de phrases Wolof–Arabe alignées et traduites manuellement. Évaluation comparative sur NLLB-200, mT5 et AfriNLLB. Le papier, le dataset et le code source sont disponibles sur le site."
    },
    {
      date: 'Juil. 2025',
      text: "Diplômé du Master 2 TAL, Université Marie et Louis Pasteur, Besançon.",
      details: "Spécialisation poussée en traitement automatique des langues (TAL), modélisation linguistique computationnelle, sémantique formelle, et apprentissage automatique appliqué aux données textuelles."
    },
    {
      date: 'Jan.–Juil. 2025',
      text: "Stage de recherche NLP au CNRS (IMGT), Montpellier : IMGT-NER-APP.",
      details: "Conception et implémentation de l'application IMGT-NER-APP au sein du laboratoire CNRS IGH. Ce système permet l'extraction automatique d'entités médicales et cliniques complexes d'intérêt (anticorps monoclonaux) depuis la littérature scientifique."
    },
    {
      date: 'Juin 2024',
      text: "Diplômé du Master 2 Data Science-NLP, Université Mohammed V, Rabat.",
      details: "Formation pluridisciplinaire avancée en apprentissage profond (Deep Learning), architectures de réseaux de neurones (Transformers), Big Data, et techniques modernes de traitement automatique du langage naturel."
    },
    {
      date: 'Jan.–Juin 2024',
      text: "Stage Data Scientist-NLP à l'Université Mohammed V : pipelines multilingues.",
      details: "Développement et déploiement de modèles d'extraction d'information et alignement de documents académiques multilingues pour enrichir la recherche et les outils d'aide à la décision institutionnels."
    },
  ],
  en: [
    {
      date: 'Aug. 2026',
      text: "Paper accepted at NL4AI 2026: \"Known but Unreachable: A Diagnostic Evaluation of Wolof Entity Linking against Wikidata\".",
      details: "My research paper on the diagnostic evaluation of Wolof entity linking against Wikidata has been accepted for publication in the proceedings and oral presentation at the 9th NL4AI 2026 workshop (co-located with AI*IA 2026 in Perugia, Italy). See the workshop call for papers and details: <a href=\"http://sag.art.uniroma2.it/NL4AI/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"footer-link-web\">sag.art.uniroma2.it/NL4AI ↗</a>."
    },
    {
      date: 'Jul. 2026',
      text: "Joined GalsenAI Lab as a member and active researcher on the NLP track.",
      details: "GalsenAI is the leading community and research laboratory for artificial intelligence in Senegal. I actively contribute to the NLP track, conducting research on local language models (especially Wolof) and generative AI applications."
    },
    {
      date: 'May 2026',
      text: "Preprint: \"MudawanSn: A Gold-Standard Wolof–Arabic Parallel Corpus for Machine Translation\".",
      details: "Preprint release for our co-authored paper (with Thierno Diop) presenting MudawanSn, a gold-standard resource of 1,271 manually translated and sentence-aligned Wolof–Arabic pairs. Benchmark evaluation across NLLB-200, mT5, and AfriNLLB. Paper, dataset, and codebase are publicly available."
    },
    {
      date: 'Jul. 2025',
      text: "Graduated - Master II NLP, Université Marie et Louis Pasteur, Besançon.",
      details: "Advanced specialization in natural language processing (NLP), computational linguistics, formal semantics, and machine learning applied to textual datasets."
    },
    {
      date: 'Jan.–Jul. 2025',
      text: "NLP Research Internship at CNRS (IMGT), Montpellier: IMGT-NER-APP.",
      details: "Design and implementation of the IMGT-NER-APP within the CNRS IGH laboratory. This web application automates the extraction of complex clinical and biological entities (monoclonal antibodies) from academic publications."
    },
    {
      date: 'Jun. 2024',
      text: "Graduated - Master 2 Data Science-NLP, Mohammed V University, Rabat.",
      details: "Advanced training in deep learning, transformer-based neural architectures, Big Data systems, and state-of-the-art NLP techniques for mass-scale textual data."
    },
    {
      date: 'Jan.–Jun. 2024',
      text: "Data Scientist-NLP Internship at Mohammed V University: multilingual pipelines.",
      details: "Development and deployment of information extraction models and multilingual academic document alignment pipelines to enhance institutional decision support tools."
    },
  ],
}

const researchAxes = {
  fr: [
    {
      title: "Recherche et Extraction d'Information",
      body: "Cet axe de recherche se concentre sur l'identification, la structuration et la désambiguïsation de l'information contenue dans les textes, qu'ils soient de domaine général ou hautement spécialisés (comme le domaine biomédical ou juridique). Les problématiques abordées incluent la Reconnaissance d'Entités Nommées (NER), l'extraction de relations entre ces entités, ainsi que la liaison d'entités (Entity Linking), en s'appuyant sur des architectures neuronales profondes et des grands modèles de langue (LLMs).",
      tags: ['NER', 'Extraction de relations', 'Entity Linking', 'Extraction d\'information']
    },
    {
      title: "Génération Augmentée par Récupération (RAG)",
      body: "La recherche autour du RAG vise à résoudre les limites des modèles de langue génératifs, telles que les hallucinations et le manque de connaissances spécifiques. Les travaux dans ce domaine explorent l'optimisation des pipelines de recherche sémantique vectorielle, le chaînage d'agents autonomes, et la garantie de la traçabilité de l'information pour rendre les systèmes de question-réponse plus fiables et interprétables sur des bases documentaires complexes.",
      tags: ['RAG', 'Recherche sémantique', 'LLMs', 'Systèmes de Q/A']
    },
    {
      title: "Traitement des langues à faibles ressources",
      body: "Le développement des technologies du langage pour les langues peu dotées, avec un intérêt particulier pour le wolof et les langues africaines, nécessite de repenser les approches standards gourmandes en données. Cet axe englobe la création de nouvelles ressources linguistiques fondamentales (corpus parallèles, datasets pour la liaison d'entités, données vocales annotées) et l'adaptation de modèles (fine-tuning, approches zero-shot) pour rendre le NLP accessible à ces langues.",
      tags: ['Wolof', 'Corpus parallèles', 'Langues peu dotées', 'Création de ressources']
    },
  ],
  en: [
    {
      title: "Information Retrieval and Extraction",
      body: "This research axis focuses on identifying, structuring, and disambiguating information within both open-domain and highly specialized texts (such as biomedical or legal documents). Core challenges addressed include Named Entity Recognition (NER), relation extraction, and entity linking, leveraging deep neural architectures and Large Language Models (LLMs).",
      tags: ['NER', 'Relation Extraction', 'Entity Linking', 'Information Extraction']
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      body: "Research in RAG aims to mitigate the limitations of generative language models, such as hallucinations and lack of domain-specific knowledge. Work in this area explores the optimization of semantic vector search pipelines, autonomous agent chaining, and information provenance tracking to build reliable and interpretable question-answering systems over complex document bases.",
      tags: ['RAG', 'Semantic Search', 'LLMs', 'Q/A Systems']
    },
    {
      title: "Low-Resource Language Processing",
      body: "Developing language technologies for under-resourced languages, with a particular focus on Wolof and African languages, requires rethinking standard data-heavy approaches. This axis involves the creation of foundational linguistic resources (parallel corpora, entity linking datasets, annotated speech data) and the adaptation of models (fine-tuning, zero-shot learning) to make NLP accessible to these languages.",
      tags: ['Wolof', 'Parallel Corpora', 'Low-Resource', 'Resource Creation']
    },
  ],
}

const publications = [
  {
    authors: 'Mouhamed Mbaye, Thierno Diop',
    title: {
      fr: "MudawanSn: A Gold-Standard Wolof–Arabic Parallel Corpus for Machine Translation",
      en: "MudawanSn: A Gold-Standard Wolof–Arabic Parallel Corpus for Machine Translation"
    },
    type: {
      fr: 'Preprint',
      en: 'Preprint'
    },
    venue: 'Preprint',
    year: '2026',
    pdf: 'public/MudawanSn.pdf',
    githubUrl: 'https://github.com/M-mbaye30/MudawanSn',
    datasetUrl: 'https://huggingface.co/datasets/mbaye930/wolof-arabic-parallel-corpus',
    abstract: {
      fr: "MudawanSn est une ressource de référence de 1 271 paires de phrases traduites manuellement du wolof vers l'arabe standard (MSA), dérivées du corpus MasakhaNER. Nous évaluons et benchmarquons quatre architectures de traduction automatique (NLLB-200, mT5-base et deux variantes d'AfriNLLB), montrant que le fine-tuning sur MudawanSn améliore significativement la qualité de traduction.",
      en: "MudawanSn is a gold-standard resource of 1,271 sentence-aligned pairs manually translated from Wolof into Modern Standard Arabic (MSA). We benchmark four machine translation architectures (NLLB-200, mT5-base, and two AfriNLLB variants), showing that fine-tuning on MudawanSn yields substantial improvements in both translation directions."
    }
  },
  {
    authors: 'Mouhamed Mbaye',
    title: {
      fr: "Known but Unreachable: A Diagnostic Evaluation of Wolof Entity Linking against Wikidata",
      en: "Known but Unreachable: A Diagnostic Evaluation of Wolof Entity Linking against Wikidata"
    },
    type: {
      fr: 'Actes NL4AI 2026 (Accepté)',
      en: 'NL4AI 2026 Proceedings (Accepted)'
    },
    venue: 'Ninth Workshop on Natural Language for Artificial Intelligence (NL4AI 2026) co-located with AI*IA 2026, Perugia, Italy',
    year: '2026',
    url: 'http://sag.art.uniroma2.it/NL4AI/',
    pdf: 'public/final%20submission_23.pdf',
    abstract: {
      fr: "Évaluation diagnostique de la liaison d'entités (Entity Linking) pour la langue wolof par rapport à la base de connaissances Wikidata, présentée au workshop NL4AI 2026.",
      en: "Diagnostic evaluation of Wolof Entity Linking against Wikidata, presented at the NL4AI 2026 workshop."
    }
  },
  {
    authors: 'Mouhamed Mbaye',
    title: { fr: "Développement de IMGT-NER-APP : extraction automatique d'entités nommées pour les anticorps monoclonaux", en: "Development of IMGT-NER-APP: Automated Named Entity Extraction for Monoclonal Antibodies" },
    type: { fr: 'Rapport de stage de Master II TAL', en: 'Master II NLP End-of-Internship Report' },
    venue: 'IMGT (IGH, CNRS) - Université Marie et Louis Pasteur, Besançon',
    year: '2025',
    pdf: 'public/Rapport-de-stage-M2-Mouhamed.pdf',
    abstract: { fr: "Ce rapport présente le développement de IMGT-NER-APP, une application d'extraction automatique d'entités nommées spécialisée dans la nomenclature de l'OMS (DCI) pour les anticorps monoclonaux, utilisant des architectures d'apprentissage profond BiLSTM-CRF et développée en collaboration avec le CNRS.", en: "This report presents the development of IMGT-NER-APP, an automated named entity extraction tool specialized in WHO INN nomenclature for monoclonal antibodies, leveraging BiLSTM-CRF sequence labeling models in collaboration with CNRS." }
  }
]

const software = [
  {
    title: 'AI Orchestrator',
    description: {
      fr: "Système multi-agents autonome pour le raisonnement et l'analyse documentaire intelligente.",
      en: "Autonomous multi-agent system for intelligent document analysis and reasoning."
    },
    technologies: ['Python', 'LangGraph', 'Ollama', 'Llama 3'],
    liveUrl: 'https://agentic-ai-orchestrator-181631404910.europe-west1.run.app/',
    githubUrl: 'https://github.com/M-mbaye30/Perso_AI_AGENT',
  },
  {
    title: 'KNOW-SN RAG',
    description: { fr: "Système de question-réponse sur les textes législatifs sénégalais. Recherche sémantique vectorielle (ChromaDB) combinée à GPT-4o-mini.", en: "Q&A system for Senegalese legislative texts. Semantic vector search (ChromaDB) combined with GPT-4o-mini." },
    technologies: ['Python', 'ChromaDB', 'LangChain', 'FastAPI'],
    liveUrl: 'https://know-sn-rag-861961046598.europe-west1.run.app/',
    githubUrl: null,
  },
  {
    title: 'IMGT-NER-APP',
    description: { fr: "Application d'extraction automatique d'entités nommées pour les anticorps monoclonaux, spécialisée dans la nomenclature DCI de l'OMS.", en: "Automated named entity extraction tool for monoclonal antibodies, specialized in WHO INN nomenclature." },
    technologies: ['Python', 'BiLSTM-CRF', 'spaCy', 'TensorFlow'],
    liveUrl: 'https://www.imgt.org/nerapp/',
    githubUrl: null,
  },
]

const datasets = [
  {
    title: { fr: 'Wolof Entity Linking', en: 'Wolof Entity Linking' },
    description: { fr: "Dataset pour la tâche de liaison d'entités (Entity Linking) en langue wolof.", en: "Dataset for the Entity Linking task in the Wolof language." },
    type: { fr: 'Dataset NLP', en: 'NLP Dataset' },
    url: 'https://huggingface.co/datasets/mbaye930/WolofEntityLinking',
    tags: ['Wolof', 'Entity Linking', 'NER'],
  },
  {
    title: { fr: 'Wolof-Arabic Parallel Corpus', en: 'Wolof-Arabic Parallel Corpus' },
    description: { fr: "Corpus parallèle wolof-arabe pour l'entraînement de modèles de traduction automatique et l'alignement de textes.", en: "Wolof-Arabic parallel corpus for training machine translation models and text alignment." },
    type: { fr: 'Corpus parallèle', en: 'Parallel corpus' },
    url: 'https://huggingface.co/datasets/mbaye930/wolof-arabic-parallel-corpus',
    tags: ['Wolof', 'Arabic', 'Parallel Corpus', 'Machine Translation'],
  },
]

const education = {
  fr: [
    { year: '2025', degree: 'Master 2 Traitement Automatique des Langues (TAL)', institution: "Université Marie et Louis Pasteur, Besançon, France" },
    { year: '2024', degree: 'Master 2 Data Science-NLP', institution: "Université Mohammed V, Rabat, Maroc" },
    { year: '2022', degree: "Licence de Linguistique", institution: "Université Cady Ayaad de Marrakech, Maroc" },
  ],
  en: [
    { year: '2025', degree: 'Master 2 in Natural Language Processing (NLP)', institution: "Marie and Louis Pasteur University, Besançon, France" },
    { year: '2024', degree: 'Master 2 in Data Science & NLP', institution: "Mohammed V University, Rabat, Morocco" },
    { year: '2022', degree: "Bachelor's in Linguistics", institution: "Cady Ayaad University, Marrakech, Morocco" },
  ],
}

const certifications = {
  fr: [
    {
      year: '2025',
      title: "Retrieval Augmented Generation (RAG)",
      issuer: "DeepLearning.AI",
      details: "Conception, implémentation et déploiement de systèmes RAG complets et fiables, adaptés aux domaines d'application spécifiques."
    },
    {
      year: '2025',
      title: "Text Mining for Marketing",
      issuer: "O.P. Jindal Global University",
      details: "Acquisition des bases du Text Mining et identification des meilleures pratiques en analyse textuelle pour la prise de décision."
    },
    {
      year: '2024',
      title: "Natural Language Processing with Probabilistic Models",
      issuer: "DeepLearning.AI",
      details: "Maîtrise des modèles probabilistes, incluant les N-grammes, l'étiquetage de séquences et les algorithmes d'auto-complétion."
    },
    {
      year: '2024',
      title: "Natural Language Processing with Classification and Vector Spaces",
      issuer: "DeepLearning.AI",
      details: "Techniques fondamentales du TAL : analyse de sentiment, espaces vectoriels et plongements de mots (word embeddings)."
    },
    {
      year: '2024',
      title: "Elements of AI",
      issuer: "University of Helsinki & MinnaLearn",
      details: "Compréhension fondamentale des concepts de l'IA : machine learning, réseaux de neurones et implications sociétales."
    }
  ],
  en: [
    {
      year: '2025',
      title: "Retrieval Augmented Generation (RAG)",
      issuer: "DeepLearning.AI",
      details: "Design, implementation, and deployment of complete and reliable RAG systems, tailored to specific application domains."
    },
    {
      year: '2025',
      title: "Text Mining for Marketing",
      issuer: "O.P. Jindal Global University",
      details: "Acquisition of the fundamentals of Text Mining and identification of best practices in textual analysis for decision-making."
    },
    {
      year: '2024',
      title: "Natural Language Processing with Probabilistic Models",
      issuer: "DeepLearning.AI",
      details: "Mastery of probabilistic models, including N-grams, sequence labeling, and autocomplete algorithms."
    },
    {
      year: '2024',
      title: "Natural Language Processing with Classification and Vector Spaces",
      issuer: "DeepLearning.AI",
      details: "Fundamental NLP techniques: sentiment analysis, vector spaces, and word embeddings."
    },
    {
      year: '2024',
      title: "Elements of AI",
      issuer: "University of Helsinki & MinnaLearn",
      details: "Fundamental understanding of AI concepts: machine learning, neural networks, and societal implications."
    }
  ]
}


/* ══════════════════════════════════════
   LAYOUT BUILDER - Shared across pages
   ══════════════════════════════════════ */

const navPages = [
  { id: 'accueil', file: 'index.html' },
  { id: 'rechercheareas', file: 'rechercheareas.html' },
  { id: 'publications', file: 'publications.html' },
  { id: 'logiciels', file: 'logiciels.html' },
  { id: 'formation', file: 'formation.html' },
  { id: 'actualites', file: 'actualites.html' },
]

function buildLayout(activePageId) {
  const lang = currentLang

  /* Document Meta (Title, Description, Open Graph & Twitter) */
  if (metaData[lang] && metaData[lang][activePageId]) {
    const pageTitle = metaData[lang][activePageId].title
    const pageDesc = metaData[lang][activePageId].desc
    document.title = pageTitle

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', pageDesc)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', pageTitle)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', pageDesc)

    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) ogLocale.setAttribute('content', lang === 'fr' ? 'fr_FR' : 'en_US')

    const twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', pageTitle)

    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', pageDesc)
  }

  /* Header */
  const headerEl = document.getElementById('site-header')
  if (headerEl) {
    headerEl.innerHTML = `
      <div>
        <h2 id="header-welcome">${i18n[lang]['header.welcome']}</h2>
        <h1>Mouhamed Mbaye</h1>
      </div>
    `
  }

  /* Navbar */
  const navEl = document.getElementById('site-nav')
  if (navEl) {
    navEl.innerHTML = `
      <div class="nav-links">
        ${navPages.map(p => `<a href="${p.file}" class="${p.id === activePageId ? 'active' : ''}" id="nav-${p.id}">${i18n[lang]['nav.' + p.id]}</a>`).join('')}
      </div>
      <div class="navbar-actions">
        <div class="theme-toggle">
          <button id="theme-btn" onclick="toggleTheme()"></button>
        </div>
        <div class="lang-toggle">
          <button class="${lang === 'fr' ? 'active' : ''}" onclick="setLang('fr')" aria-label="Passer le site en français" aria-pressed="${lang === 'fr'}">FR</button>
          <button class="${lang === 'en' ? 'active' : ''}" onclick="setLang('en')" aria-label="Switch site to English" aria-pressed="${lang === 'en'}">EN</button>
        </div>
      </div>
    `
    updateThemeIcon()
  }

  /* Sidebar */
  const sideEl = document.getElementById('site-sidebar')
  if (sideEl) {
    if (activePageId !== 'accueil') {
      sideEl.style.display = 'none'
    } else {
      sideEl.style.display = 'block'
      const statusText = i18n[lang]['sidebar.status'].replace(/\n/g, '<br>')
      const langs = languagesData[lang].replace(/\n/g, '<br>')
      sideEl.innerHTML = `
        <div class="profile-section">
          <img src="public/profile-photo.jpg" alt="Mouhamed Mbaye" class="profile-photo"
            onerror="this.style.display='none'; document.getElementById('photo-ph').style.display='flex'">
          <div id="photo-ph" class="photo-placeholder" style="display:none">MM</div>
          <div>
            <div class="profile-name">Mouhamed Mbaye</div>
            <div class="profile-status">${statusText}</div>
          </div>
        </div>
        <hr>
        <p class="section-label">${i18n[lang]['sidebar.lang-title']}</p>
        <div class="languages">${langs}</div>
        <hr>
        <p class="section-label">${i18n[lang]['sidebar.contact-title']}</p>
        <nav class="sidebar-links">
          <a href="mailto:mouhamed.mbaye@galsen.ai">
            <svg viewBox="0 0 24 24" fill="none" stroke="#d93025" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            ${i18n[lang]['link.email']}
          </a>
          <a href="https://github.com/M-mbaye30" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mouhamed-mbaye-nlp-tal/" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
          <a href="https://huggingface.co/mbaye930" target="_blank" rel="noopener noreferrer" class="hf-sidebar-badge">
            <img src="public/huggingface.png" alt="Hugging Face" class="hf-icon">
            <span>HuggingFace</span>
          </a>
          <a href="https://cv.hal.science/mouhamed-mbaye" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            HAL
          </a>
          <a href="https://orcid.org/0009-0002-1841-5418" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 256 256" fill="#a6ce39"><path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zM70.7 200.3H52.3V85.3h18.4v115zm-9.2-132.1c-6.2 0-11.2-5-11.2-11.2s5-11.2 11.2-11.2 11.2 5 11.2 11.2-5 11.2-11.2 11.2z"/></svg>
            ORCID
          </a>
        </nav>
        <hr>
        <a href="${cvUrl[lang]}" target="_blank" rel="noopener noreferrer" class="btn-cv">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          ${i18n[lang]['link.cv']}
        </a>
      `
    }
  }

  /* Footer */
  const footerEl = document.getElementById('site-footer')
  if (footerEl) {
    if (activePageId !== 'accueil') {
      footerEl.style.display = 'none'
    } else {
      footerEl.style.display = 'block'
      const isFr = (lang === 'fr')
      const mailIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
      footerEl.innerHTML = `
        <div class="footer-container">
          <div class="footer-col footer-col-brand">
            <a href="https://galsen.ai/" target="_blank" rel="noopener noreferrer" class="footer-logo-link">
              <img src="public/galsenAI.png" alt="GalsenAI Lab" class="footer-logo-img">
            </a>
            <p class="footer-caption">${isFr ? 'Dakar, Sénégal' : 'Dakar, Senegal'} · <a href="https://galsen.ai/" target="_blank" rel="noopener noreferrer" class="footer-link-web">galsen.ai ↗</a></p>
          </div>
          <div class="footer-col footer-col-contact">
            <a href="mailto:mouhamed.mbaye@galsen.ai" class="footer-email-link">${mailIcon}mouhamed.mbaye@galsen.ai</a>
            <a href="mailto:mouhamedmbaye371@gmail.com" class="footer-email-link">${mailIcon}mouhamedmbaye371@gmail.com</a>
          </div>
        </div>
        <div class="footer-copyright">
          © ${new Date().getFullYear()} Mouhamed Mbaye · ${isFr ? 'Ingénieur TAL' : 'NLP Engineer'}
        </div>
      `
    }
  }
}

/* ══════════════════════════════════════
   PAGE-SPECIFIC RENDERERS
   ══════════════════════════════════════ */

function renderAccueil(lang) {
  const d = aboutData[lang]
  const el = document.getElementById('page-body')
  if (!el) return
  const skills = [...new Set(software.flatMap(s => s.technologies))]
  el.innerHTML = `
    <h2 class="page-title">${lang === 'fr' ? 'À propos' : 'About'}</h2>
    <div class="about-text">
      <p class="greeting">${d.greeting}</p>
      <p>${d.intro}</p>
      <p class="motivation">${d.motivation}</p>
    </div>

    <h3 class="sub-heading">${d.interestsTitle}</h3>
    ${d.interests.map(item => `
      <div class="content-entry">
        <h4>${item.title}</h4>
        <p>${item.body}</p>
      </div>
    `).join('')}

    <h3 class="sub-heading">${lang === 'fr' ? 'Compétences techniques' : 'Technical Skills'}</h3>
    <div class="tag-list">
      ${skills.map(s => `<span class="tag">${s}</span>`).join('')}
    </div>
  `
}

function renderActualites(lang) {
  const el = document.getElementById('page-body')
  if (!el) return
  el.innerHTML = `
    <h2 class="page-title">${lang === 'fr' ? 'Actualités' : 'News'}</h2>
    <div class="news-list-container">
      ${news[lang].map(item => `
        <div class="news-list-entry">
          <div class="news-list-date">${item.date}</div>
          <div class="news-list-content">
            <div class="news-list-text">${item.text}</div>
            ${item.details ? `<div class="news-list-details">${item.details}</div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `
}

function renderRecherche(lang) {
  const el = document.getElementById('page-body')
  if (!el) return
  el.innerHTML = `
    <h2 class="page-title">${lang === 'fr' ? 'Axes de recherche' : 'Research Areas'}</h2>
    ${researchAxes[lang].map(axis => `
      <div class="content-entry">
        <h4>${axis.title}</h4>
        <p>${axis.body}</p>
        <div class="tag-list">${axis.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    `).join('')}
  `
}

function renderPublications(lang) {
  const el = document.getElementById('page-body')
  if (!el) return

  const papersTitle = lang === 'fr' ? 'Papiers et Rapports' : 'Papers and Reports'
  const datasetsTitle = lang === 'fr' ? 'Datasets' : 'Datasets'
  const accessLabel = lang === 'fr' ? 'Accéder' : 'Access'

  // Render datasets HTML as HuggingFace style cards
  const datasetsHtml = datasets.length > 0 ? datasets.map(r => {
    // Extract the HuggingFace repo name (e.g. "mbaye930/WolofEntityLinking")
    const repoName = r.url.includes('datasets/') ? r.url.split('datasets/')[1] : r.title[lang];

    return `
    <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="hf-card">
      <div class="hf-card-header">
        <img src="public/huggingface.png" alt="Hugging Face" width="18" height="18" style="vertical-align: middle; border-radius: 2px;">
        Hugging Face Dataset
      </div>
      <div class="hf-card-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
        ${repoName}
      </div>
      <p class="hf-card-desc">${r.description[lang]}</p>
      <div class="hf-card-footer">
        ${r.tags.map(t => `<span class="tag" style="background:#f3f4f6; color:#374151; border:1px solid #e5e7eb;">${t}</span>`).join('')}
      </div>
    </a>
  `}).join('') : `<p class="empty-note">${lang === 'fr' ? 'Prochainement.' : 'Coming soon.'}</p>`

  el.innerHTML = `
    <h2 class="page-title">${lang === 'fr' ? 'Publications & Ressources' : 'Publications & Resources'}</h2>
    <div class="pub-profiles">
      ${lang === 'fr' ? "Retrouvez l'index complet de mes travaux sur" : 'Full index of my work available on'}
      <a href="https://cv.hal.science/mouhamed-mbaye" target="_blank">HAL</a> ·
      <a href="https://orcid.org/0009-0002-1841-5418" target="_blank">ORCID</a>
      <span class="orcid-id">0009-0002-1841-5418</span>
    </div>

    <h3 class="section-heading" style="margin-top: 2rem;">${papersTitle}</h3>
    <div id="publications-list"></div>

    <h3 class="section-heading" style="margin-top: 3rem;">${datasetsTitle}</h3>
    <div id="datasets-list" class="hf-grid">
      ${datasetsHtml}
    </div>
  `
  loadHALPublications()
}

function renderLogiciels(lang) {
  const el = document.getElementById('page-body')
  if (!el) return
  const liveLabel = lang === 'fr' ? 'Accéder' : 'Access'
  const codeLabel = lang === 'fr' ? 'Code source' : 'Source code'
  el.innerHTML = `
    <h2 class="page-title">${lang === 'fr' ? 'Logiciels & Applications' : 'Software & Applications'}</h2>
    <p class="page-intro">${lang === 'fr'
      ? "Applications et outils développés dans le cadre de mes projets de recherche et d'ingénierie."
      : 'Applications and tools developed as part of my research and engineering projects.'
    }</p>
    <div class="software-grid">
      ${software.map(s => `
        <div class="software-card">
          <div class="software-card-title">
            ${s.title}
          </div>
          <p class="software-card-desc">${s.description[lang]}</p>
          <div class="software-card-techs">
            ${s.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <div class="software-card-links">
            ${s.liveUrl ? `<a href="${s.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-link" style="flex:1; text-align:center;">${liveLabel} ↗</a>` : ''}
            ${s.githubUrl ? `<a href="${s.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-link btn-outline" style="flex:1; text-align:center;">${codeLabel} ↗</a>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `
}
function renderFormation(lang) {
  const el = document.getElementById('page-body')
  if (!el) return
  el.innerHTML = `
    <h2 class="page-title">${lang === 'fr' ? 'Formation & Certifications' : 'Education & Certifications'}</h2>
    
    <h3 class="section-heading">${lang === 'fr' ? 'Parcours Académique' : 'Academic Path'}</h3>
    <ul class="education-list">
      ${education[lang].map(d => `
        <li class="education-entry">
          <span class="year">${d.year}</span>
          <div>
            <div class="degree">${d.degree}</div>
            <div class="institution">${d.institution}</div>
          </div>
        </li>
      `).join('')}
    </ul>

    <h3 class="section-heading" style="margin-top: 3rem;">Certifications</h3>
    <ul class="education-list">
      ${certifications[lang].map(c => `
        <li class="education-entry">
          <span class="year">${c.year}</span>
          <div>
            <div class="degree">${c.title}</div>
            <div class="institution" style="font-weight: 500; margin-bottom: 0.25rem;">${c.issuer}</div>
            <div class="cert-details" style="font-size: 0.92rem; line-height: 1.5; color: var(--text-color); opacity: 0.85;">${c.details}</div>
          </div>
        </li>
      `).join('')}
    </ul>
  `
}

/* ── News (sidebar cards) ── */
function renderNews(lang) {
  const el = document.getElementById('news-cards')
  if (!el) return
  el.innerHTML = news[lang].map(item => `
    <div class="news-card">
      <div class="news-date">${item.date}</div>
      <div class="news-text">${item.text}</div>
    </div>
  `).join('')
}

/* ── Publications (HAL + local fallback) ── */
async function loadHALPublications() {
  const el = document.getElementById('publications-list')
  if (!el) return
  try {
    el.innerHTML = `<p class="loading-text">${currentLang === 'fr' ? 'Chargement depuis HAL…' : 'Loading from HAL…'}</p>`
    const url = `https://api.archives-ouvertes.fr/search/?q=authIdHal_s:%22mouhamed-mbaye%22&wt=json&fl=title_s,authFullName_s,producedDateY_i,docType_s,uri_s,journalTitle_s,bookTitle_s,abstract_s,files_s`
    const response = await fetch(url)
    if (!response.ok) throw new Error('HAL error')
    const data = await response.json()
    const docs = data.response && data.response.docs
    if (docs && docs.length > 0) {
      renderHALPubs(docs)
    } else {
      renderLocalPubs()
    }
  } catch {
    renderLocalPubs()
  }
}

function fadeInEl(el) {
  el.classList.remove('fade-in')
  void el.offsetWidth
  el.classList.add('fade-in')
}

function injectPublicationSchema(items) {
  const existing = document.getElementById('pub-schema')
  if (existing) existing.remove()
  if (!items.length) return
  const schema = {
    '@context': 'https://schema.org',
    '@graph': items.map(it => ({
      '@type': 'ScholarlyArticle',
      headline: it.title,
      author: { '@type': 'Person', name: 'Mouhamed Mbaye' },
      ...(it.year ? { datePublished: String(it.year) } : {}),
      ...(it.venue ? { isPartOf: { '@type': 'PublicationVolume', name: it.venue } } : {}),
      ...(it.url ? { url: it.url } : {}),
    })),
  }
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = 'pub-schema'
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
}

function copyCitation(btn) {
  const text = decodeURIComponent(btn.dataset.citation)
  const original = btn.textContent
  const showCopied = () => {
    btn.textContent = currentLang === 'fr' ? 'Copié ✓' : 'Copied ✓'
    setTimeout(() => { btn.textContent = original }, 1800)
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showCopied)
  }
}

function renderLocalPubs() {
  const el = document.getElementById('publications-list')
  if (!el) return
  const lang = currentLang
  el.innerHTML = publications.map(pub => {
    const formattedAuthors = pub.authors.split(', ').map(author => {
      const trimmed = author.trim()
      return trimmed === 'Mouhamed Mbaye' ? `<span class="pub-author-self">${trimmed}</span>` : trimmed
    }).join(', ')
    const citation = `${pub.authors} (${pub.year}). ${pub.title[lang]}. ${pub.type[lang]}, ${pub.venue}.`
    return `
      <div class="content-entry">
        <p class="pub-citation">
          ${formattedAuthors}. <strong>${pub.title[lang]}</strong>. <em>${pub.type[lang]}</em>, ${pub.venue}, ${pub.year}.
        </p>
        <div class="entry-links">
          ${pub.pdf ? `<a href="${pub.pdf}" target="_blank" rel="noopener noreferrer" class="btn-link">PDF</a>` : ''}
          ${pub.url ? `<a href="${pub.url}" target="_blank" rel="noopener noreferrer" class="btn-link btn-outline">Workshop NL4AI ↗</a>` : ''}
          ${pub.datasetUrl ? `<a href="${pub.datasetUrl}" target="_blank" rel="noopener noreferrer" class="btn-link btn-outline">Dataset ↗</a>` : ''}
          ${pub.githubUrl ? `<a href="${pub.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-link btn-outline">GitHub ↗</a>` : ''}
          <button class="btn-link btn-outline" onclick="copyCitation(this)" data-citation="${encodeURIComponent(citation)}">${lang === 'fr' ? 'Citer' : 'Cite'}</button>
          ${pub.abstract && pub.abstract[lang] ? `<button class="btn-link btn-outline" onclick="toggleAbstract(this)">${lang === 'fr' ? 'Résumé' : 'Abstract'}</button>` : ''}
        </div>
        ${pub.abstract && pub.abstract[lang] ? `<div class="abstract-text">${pub.abstract[lang]}</div>` : ''}
      </div>
    `
  }).join('')
  fadeInEl(el)
  injectPublicationSchema(publications.map(pub => ({ title: pub.title[lang], year: pub.year, venue: pub.venue, url: pub.pdf })))
}

function renderHALPubs(docs) {
  const el = document.getElementById('publications-list')
  if (!el) return
  const lang = currentLang
  el.innerHTML = docs.map(doc => {
    const title = doc.title_s ? doc.title_s[0] : 'Untitled'
    const authors = doc.authFullName_s ? doc.authFullName_s.join(', ') : 'Unknown'
    const formattedAuthors = authors.split(', ').map(author => {
      const trimmed = author.trim()
      return trimmed === 'Mouhamed Mbaye' ? `<span class="pub-author-self">${trimmed}</span>` : trimmed
    }).join(', ')
    const year = doc.producedDateY_i || 'n.d.'
    const venueVal = doc.journalTitle_s ? doc.journalTitle_s[0] : (doc.bookTitle_s ? doc.bookTitle_s[0] : '')
    const docType = doc.docType_s || ''

    let venueHtml = ''
    if (docType) venueHtml += `<em>${docType}</em>`
    if (venueVal) venueHtml += (venueHtml ? ', ' : '') + venueVal

    const abstract = doc.abstract_s ? doc.abstract_s[0] : null
    const citation = `${authors} (${year}). ${title}.${venueVal ? ' ' + venueVal + '.' : ''}`
    return `
      <div class="content-entry">
        <p class="pub-citation">
          ${formattedAuthors}. <strong>${title}</strong>. ${venueHtml ? venueHtml + ', ' : ''}${year}.
        </p>
        <div class="entry-links">
          <a href="${doc.uri_s}" target="_blank" rel="noopener noreferrer" class="btn-link">HAL</a>
          ${doc.files_s ? `<a href="${doc.files_s[0]}" target="_blank" rel="noopener noreferrer" class="btn-link">PDF</a>` : ''}
          <button class="btn-link btn-outline" onclick="copyCitation(this)" data-citation="${encodeURIComponent(citation)}">${lang === 'fr' ? 'Citer' : 'Cite'}</button>
          ${abstract ? `<button class="btn-link btn-outline" onclick="toggleAbstract(this)">${lang === 'fr' ? 'Résumé' : 'Abstract'}</button>` : ''}
        </div>
        ${abstract ? `<div class="abstract-text">${abstract}</div>` : ''}
      </div>
    `
  }).join('')
  fadeInEl(el)
  injectPublicationSchema(docs.map(doc => ({
    title: doc.title_s ? doc.title_s[0] : 'Untitled',
    year: doc.producedDateY_i,
    venue: doc.journalTitle_s ? doc.journalTitle_s[0] : (doc.bookTitle_s ? doc.bookTitle_s[0] : null),
    url: doc.uri_s,
  })))
}

function toggleAbstract(btn) {
  const abstractEl = btn.closest('.content-entry').querySelector('.abstract-text')
  if (!abstractEl) return
  const isVisible = abstractEl.classList.contains('visible')
  abstractEl.classList.toggle('visible')
  btn.textContent = isVisible
    ? (currentLang === 'fr' ? 'Résumé' : 'Abstract')
    : (currentLang === 'fr' ? 'Masquer' : 'Hide')
}

/* ══════════════════════════════════════
   PAGE INIT
   ══════════════════════════════════════ */

const pageRenderers = {
  accueil: renderAccueil,
  actualites: renderActualites,
  rechercheareas: renderRecherche,
  publications: renderPublications,
  logiciels: renderLogiciels,
  formation: renderFormation,
}

function initPage(pageId) {
  window._currentPage = pageId
  buildLayout(pageId)
  if (pageRenderers[pageId]) pageRenderers[pageId](currentLang)
}

function setLang(lang) {
  currentLang = lang
  localStorage.setItem('lang', lang)
  document.documentElement.lang = lang
  buildLayout(window._currentPage)
  if (pageRenderers[window._currentPage]) pageRenderers[window._currentPage](lang)
}

function toggleTheme() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'
  currentTheme = newTheme
  localStorage.setItem('theme', newTheme)
  document.documentElement.setAttribute('data-theme', newTheme)
  updateThemeIcon()
}

function updateThemeIcon() {
  const btn = document.getElementById('theme-btn')
  if (!btn) return
  const isDark = currentTheme === 'dark'
  btn.setAttribute('aria-label', isDark
    ? (currentLang === 'fr' ? 'Activer le mode clair' : 'Switch to light mode')
    : (currentLang === 'fr' ? 'Activer le mode sombre' : 'Switch to dark mode'))
  if (isDark) {
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
  } else {
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
  }
  const metaTheme = document.querySelector('meta[name="theme-color"]')
  if (metaTheme) metaTheme.setAttribute('content', isDark ? '#121212' : '#1a5c52')
}
