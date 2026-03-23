/* ── TRADUCTIONS ── */
const i18n = {
  fr: {
    'nav.about': 'À propos', 'nav.research': 'Recherche', 'nav.news': 'Actualités',
    'nav.projects': 'Projets', 'nav.publications': 'Publications',
    'nav.education': 'Formation', 'nav.contact': 'Contact',
    'banner.welcome': 'Bienvenue sur la page web personnelle de',
    'about.title': 'À propos',
    'about.bio': "Récemment diplômé d'un Master II en Traitement Automatique des Langues (TAL), je suis à la recherche d'un contrat doctoral. Mes travaux portent sur la conception de pipelines NLP robustes, l'exploitation de modèles de langue (LLMs) et des architectures comme la Génération Augmentée par Récupération (RAG) et la Reconnaissance d'Entités Nommées (NER). Locuteur natif du wolof, je m'intéresse particulièrement au traitement des langues à faibles ressources.",
    'about.status': "À la recherche d'un contrat doctoral",
    'about.lang-title': 'Langues',
    'about.languages': "Français : Courant\nAnglais : Professionnel\nArabe : Courant\nWolof : Natif",
    'about.link.email': 'E-mail', 'about.link.cv': 'Télécharger le CV',
    'research.title': 'Intérêts de recherche',
    'news.title': 'Actualités',
    'projects.title': 'Projets', 'projects.live': 'Site en ligne', 'projects.code': 'Code',
    'publications.title': 'Publications',
    'publications.text': "Aucune publication pour l'instant. En cours de préparation.",
    'education.title': 'Formation',
    'contact.title': 'Contact',
    'contact.text': "N'hésitez pas à me contacter pour toute opportunité de collaboration, de recherche ou de contrat doctoral.",
  },
  en: {
    'nav.about': 'About', 'nav.research': 'Research', 'nav.news': 'News',
    'nav.projects': 'Projects', 'nav.publications': 'Publications',
    'nav.education': 'Education', 'nav.contact': 'Contact',
    'banner.welcome': 'Welcome to the personal webpage of',
    'about.title': 'About',
    'about.bio': "Recently graduated with a Master's degree in Natural Language Processing (NLP), I am currently seeking a doctoral contract. My work focuses on designing robust NLP pipelines, leveraging Large Language Models (LLMs) and architectures such as Retrieval-Augmented Generation (RAG) and Named Entity Recognition (NER). As a native Wolof speaker, I am particularly interested in low-resource language processing.",
    'about.status': 'Seeking a doctoral contract',
    'about.lang-title': 'Languages',
    'about.languages': "French : Fluent\nEnglish : Professional\nArabic : Fluent\nWolof : Native",
    'about.link.email': 'E-mail', 'about.link.cv': 'Download CV',
    'research.title': 'Research Interests',
    'news.title': 'News',
    'projects.title': 'Projects', 'projects.live': 'Live site', 'projects.code': 'Code',
    'publications.title': 'Publications',
    'publications.text': 'No publications yet. In preparation.',
    'education.title': 'Education',
    'contact.title': 'Contact',
    'contact.text': 'Feel free to reach out for any collaboration opportunity, research inquiry, or doctoral contract.',
  },
}

/* ── DONNÉES ── */
const research = {
  fr: ['Traitement Automatique des Langues (TAL/NLP)', 'Modèles de Langue (LLMs)', 'Génération Augmentée par Récupération (RAG)', "Reconnaissance d'Entités Nommées (NER)", "Fouille de textes & Extraction d'information", 'Langues à faibles ressources', 'Reconnaissance Automatique de la Parole (ASR)', 'Annotation de données linguistiques'],
  en: ['Natural Language Processing (NLP)', 'Large Language Models (LLMs)', 'Retrieval-Augmented Generation (RAG)', 'Named Entity Recognition (NER)', 'Text Mining & Information Extraction', 'Low-Resource Languages', 'Automatic Speech Recognition (ASR)', 'Linguistic Data Annotation'],
}

const news = {
  fr: [
    { date: 'Juil. 2025',      text: "Diplômé du Master II TAL — Université Marie et Louis Pasteur, Besançon, France" },
    { date: 'Jan.–Juil. 2025', text: "Stage ingénieur NLP à l'IMGT (IGH, CNRS), Montpellier — développement de IMGT-NER-APP pour l'extraction automatique d'entités nommées dans les anticorps monoclonaux" },
    { date: '2025',            text: "Développement de KNOW-SN RAG, système de recherche documentaire IA sur les documents officiels sénégalais" },
    { date: '2025',            text: "Fine-tuning de Whisper Small sur 3 400 échantillons audio wolof — WER de 12,07 % après 500 steps d'entraînement" },
    { date: '2024',            text: "Diplômé du Master II Data Science & NLP — Université Mohammed V, Rabat, Maroc" },
    { date: 'Jan.–Juin 2024',  text: "Stage ingénieur NLP à l'Université Mohammed V, Rabat — conception de pipelines NLP multilingues (LSTM, BERT)" },
  ],
  en: [
    { date: 'Jul. 2025',      text: "Graduated with Master II in NLP — Université Marie et Louis Pasteur, Besançon, France" },
    { date: 'Jan.–Jul. 2025', text: "NLP Engineering Internship at IMGT (IGH, CNRS), Montpellier — developed IMGT-NER-APP for automated named entity extraction in monoclonal antibody descriptions" },
    { date: '2025',           text: "Developed KNOW-SN RAG, an AI-powered documentary search system for official Senegalese documents" },
    { date: '2025',           text: "Fine-tuned Whisper Small on 3,400 Wolof audio samples — achieved 12.07% WER after 500 training steps" },
    { date: '2024',           text: "Graduated with Master II in Data Science & NLP — Mohammed V University, Rabat, Morocco" },
    { date: 'Jan.–Jun. 2024', text: "NLP Engineering Internship at Mohammed V University, Rabat — designed multilingual NLP pipelines (LSTM, BERT)" },
  ],
}

const projects = [
  {
    title: 'KNOW-SN RAG', year: '2025',
    category: { fr: 'IA Générative', en: 'Generative AI' },
    description: {
      fr: "Système de recherche documentaire par IA utilisant la technologie RAG pour interroger les documents officiels du Sénégal. Combine recherche vectorielle (ChromaDB) et génération de texte (GPT-4o-mini) pour fournir des réponses précises et contextualisées.",
      en: "AI-powered documentary search system using RAG technology to query official Senegalese documents. Combines vector search (ChromaDB) and text generation (GPT-4o-mini) to provide precise, contextualised answers.",
    },
    technologies: ['Python', 'FastAPI', 'ChromaDB', 'LangChain', 'GPT-4o-mini', 'Streamlit', 'Sentence Transformers', 'Docker'],
    liveUrl: 'https://know-sn-rag-861961046598.europe-west1.run.app/',
  },
  {
    title: 'IMGT-NER-APP', year: '2025',
    category: { fr: 'NLP Biomédical', en: 'Biomedical NLP' },
    description: {
      fr: "Outil d'extraction automatique d'entités nommées pour les descriptions d'anticorps monoclonaux, spécialisé dans la nomenclature DCI de l'OMS. Utilise des modèles BiLSTM-CRF pour identifier les chaînes lourdes/légères, espèces d'origine et modificateurs structuraux.",
      en: "Automated named entity extraction tool for monoclonal antibody descriptions, specialised in WHO INN nomenclature. Uses BiLSTM-CRF models to identify heavy/light chains, species origin, and structural modifiers.",
    },
    technologies: ['Python', 'Streamlit', 'BiLSTM-CRF', 'spaCy', 'TensorFlow', 'scikit-learn', 'Label-Studio'],
    liveUrl: 'https://www.imgt.org/nerapp/',
  },
  {
    title: 'UniRec-SN', year: '2025',
    category: { fr: 'IA & Recommandation', en: 'AI & Recommendation' },
    description: {
      fr: "Système de recommandation universitaire par IA pour le Sénégal. Intègre recherche sémantique (pgvector), analyse de profils PDF et algorithme de scoring hybride. Données synthétiques générées avec NVIDIA NeMo Data Designer.",
      en: "AI-driven university recommendation system for Senegal. Features semantic search (pgvector), PDF profile analysis, and a hybrid scoring algorithm. Synthetic datasets generated with NVIDIA NeMo Data Designer.",
    },
    technologies: ['Python', 'FastAPI', 'Docker', 'GCP', 'PostgreSQL', 'pgvector', 'Sentence-Transformers', 'React'],
    liveUrl: 'https://rec-sys-frontend-523522346470.europe-west1.run.app/',
  },
  {
    title: 'ASR Wolof — Whisper Fine-tuné', year: '2025',
    category: { fr: 'Parole & NLP', en: 'Speech & NLP' },
    description: {
      fr: "Fine-tuning de Whisper Small sur 3 400 échantillons audio wolof, langue à faibles ressources. WER de 12,07 % obtenu après 500 steps d'entraînement.",
      en: "Fine-tuning of Whisper Small on 3,400 Wolof audio samples, a low-resource language. 12.07% WER achieved after 500 training steps.",
    },
    technologies: ['Python', 'PyTorch', 'HuggingFace Transformers', 'Whisper', 'Gradio'],
    liveUrl: 'https://huggingface.co/spaces/mbaye930/whisper-wolof-demo',
    githubUrl: 'https://huggingface.co/mbaye930/whisper-small-wolof',
  },
  {
    title: 'AI Orchestrator', year: '2025',
    category: { fr: 'IA Générative', en: 'Generative AI' },
    description: {
      fr: "Système multi-agents autonome auto-hébergé pour l'analyse documentaire et le raisonnement stratégique. Exploite des LLMs locaux (Ollama) pour garantir la souveraineté des données.",
      en: "Self-hosted autonomous multi-agent system for document analysis and strategic reasoning. Leverages local LLMs (Ollama) to ensure data sovereignty.",
    },
    technologies: ['Python', 'Ollama', 'Llama 3.2', 'Streamlit', 'PyPDF'],
    githubUrl: 'https://github.com/M-mbaye30/Perso_AI_AGENT',
  },
  {
    title: 'Library Management System', year: '2023',
    category: { fr: 'Gestion de données', en: 'Data Management' },
    description: {
      fr: "Application de gestion centralisée de bibliothèques, livres et prix internationaux. Interface CRUD complète et recherche avancée.",
      en: "Centralised library management application for books, libraries, and international awards. Full CRUD interface with advanced search.",
    },
    technologies: ['Flask', 'SQLite3', 'HTML', 'Jinja2'],
    githubUrl: 'https://github.com/M-mbaye30/myprojectsqlite',
  },
]

const education = {
  fr: [
    { degree: 'Master II — Traitement Automatique des Langues', institution: 'Université Marie et Louis Pasteur, Besançon, France', year: '2025' },
    { degree: 'Master II — Data Science & NLP',                institution: 'Université Mohammed V, Rabat, Maroc',                  year: '2024' },
    { degree: 'Licence — Infolinguistique',                    institution: 'Université Cady Ayyad, Marrakech, Maroc',              year: '2022' },
    { degree: 'Baccalauréat — Mention Très Bien',              institution: 'AAII, Kaolack, Sénégal',                              year: '2019' },
  ],
  en: [
    { degree: 'Master II — Natural Language Processing', institution: 'Université Marie et Louis Pasteur, Besançon, France', year: '2025' },
    { degree: 'Master II — Data Science & NLP',          institution: 'Mohammed V University, Rabat, Morocco',              year: '2024' },
    { degree: "Bachelor's — Infolinguistics",            institution: 'Cady Ayyad University, Marrakech, Morocco',          year: '2022' },
    { degree: 'Baccalaureate — Highest Honours',         institution: 'AAII, Kaolack, Senegal',                            year: '2019' },
  ],
}

/* ── RENDU ── */
function renderResearch(lang) {
  document.getElementById('research-content').textContent = research[lang].join(', ')
}

function renderNews(lang) {
  document.getElementById('news-list').innerHTML = news[lang].map(item => `
    <li class="news-item">
      <span class="news-date">${item.date}</span>
      <span class="news-text">${item.text}</span>
    </li>`).join('')
}

function renderProjects(lang) {
  const live = i18n[lang]['projects.live']
  const code = i18n[lang]['projects.code']
  document.getElementById('projects-list').innerHTML = projects.map(p => {
    const links = [
      p.liveUrl   ? `<a href="${p.liveUrl}"   target="_blank" rel="noopener noreferrer" class="content-link">${live}</a>` : '',
      p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="content-link">${code}</a>` : '',
    ].filter(Boolean).join(' · ')
    return `
      <div class="project-entry">
        <p class="project-header">
          <strong class="project-title">${p.title}</strong>
          <span class="project-year">${p.year}</span>
          <span class="project-cat">— ${p.category[lang]}</span>
        </p>
        <p class="project-desc">${p.description[lang]}</p>
        <p class="project-techs">${p.technologies.join(' · ')}</p>
        ${links ? `<p>${links}</p>` : ''}
      </div>`
  }).join('')
}

function renderEducation(lang) {
  document.getElementById('education-list').innerHTML = education[lang].map(d => `
    <li class="education-item">
      <span class="education-year">${d.year}</span>
      <div>
        <div class="education-degree">${d.degree}</div>
        <div class="education-institution">${d.institution}</div>
      </div>
    </li>`).join('')
}

/* ── NAVIGATION PAR SECTION (une section à la fois) ── */
let currentSection = 'about'
let currentLang    = 'fr'

const bannerTitle = document.getElementById('banner-title')

function showSection(sectionId) {
  /* Masquer toutes les sections, afficher la cible */
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'))
  document.getElementById(sectionId).classList.add('active')

  /* Mettre à jour la bannière */
  bannerTitle.textContent = i18n[currentLang][`nav.${sectionId}`]

  /* Lien actif dans la navbar */
  document.querySelectorAll('.navbar-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === sectionId)
  })

  currentSection = sectionId
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/* Attacher les clics de la navbar */
document.querySelectorAll('.navbar-links a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault()
    showSection(a.dataset.section)
  })
})

/* ── CHANGEMENT DE LANGUE ── */
function setLang(lang) {
  currentLang = lang
  document.documentElement.lang = lang

  /* Textes statiques */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = i18n[lang][el.dataset.i18n]
    if (v !== undefined) el.textContent = v
  })

  /* Bannière (tenir compte de la section active) */
  bannerTitle.textContent = i18n[lang][`nav.${currentSection}`]

  /* Sections dynamiques */
  renderResearch(lang)
  renderNews(lang)
  renderProjects(lang)
  renderEducation(lang)

  /* Boutons actifs */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang)
  })
}

/* ── INIT ── */
document.getElementById('year').textContent = new Date().getFullYear()
setLang('fr')
showSection('about')
