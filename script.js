/* ── TRADUCTIONS ── */
const i18n = {
  fr: {
    'nav.about': 'À propos', 'nav.research': 'Recherche', 'nav.news': 'Actualités',
    'nav.projects': 'Projets', 'nav.publications': 'Publications',
    'nav.education': 'Formation', 'nav.contact': 'Contact',
    'banner.welcome': 'Bienvenue sur la page web personnelle de',
    'about.title': 'À propos',
    'about.status': "À la recherche d'un contrat doctoral",
    'about.lang-title': 'Langues',
    'about.languages': "Français : Courant\nAnglais : Professionnel\nArabe : Courant\nWolof : Natif",
    'about.link.email': 'E-mail', 'about.link.cv': 'Télécharger le CV',
    'research.title': 'Axes de recherche',
    'news.title': 'Actualités',
    'projects.title': 'Projets', 'projects.live': 'Site en ligne', 'projects.code': 'Code',
    'publications.title': 'Publications',
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
    'about.status': 'Seeking a doctoral contract',
    'about.lang-title': 'Languages',
    'about.languages': "French : Fluent\nEnglish : Professional\nArabic : Fluent\nWolof : Native",
    'about.link.email': 'E-mail', 'about.link.cv': 'Download CV',
    'research.title': 'Research',
    'news.title': 'News',
    'projects.title': 'Projects', 'projects.live': 'Live site', 'projects.code': 'Code',
    'publications.title': 'Publications',
    'education.title': 'Education',
    'contact.title': 'Contact',
    'contact.text': 'Feel free to reach out for any collaboration opportunity, research inquiry, or doctoral contract.',
  },
}

/* ── DONNÉES ── */
const aboutData = {
  fr: {
    greeting: 'Bonjour,',
    intro: "Je suis Mouhamed Mbaye, ingénieur en Traitement Automatique des Langues, diplômé en 2025 de l'Université Marie et Louis Pasteur de Besançon.",
    status: "Je suis actuellement à la recherche d'un contrat doctoral dans le domaine du TAL.",
    interestsTitle: 'Intérêts de recherche',
    interests: [
      {
        title: "Recherche et Extraction d'Information",
        body: "La recherche d'information (IR) vise à retrouver les documents pertinents au sein de grandes collections de données. L'extraction d'information (IE) consiste à identifier et structurer automatiquement des éléments précis dans du texte : entités nommées, relations entre entités, événements ou attributs clés. Ces tâches peuvent être abordées par des approches classiques de Machine Learning (CRF, SVM), des architectures Transformers (BERT, RoBERTa), ou des méthodes zero-shot et few-shot avec les LLMs permettant des résultats compétitifs même avec très peu de données annotées.",
      },
      {
        title: "Exploitation des grands modèles de langue (LLMs)",
        body: "Je m'intéresse en particulier à la Génération Augmentée par Récupération (RAG) : une approche qui enrichit les réponses d'un LLM en les ancrant dans des sources documentaires externes, pour des réponses plus fiables et vérifiables. Plus largement, je m'intéresse aux méthodes d'adaptation et de spécialisation des LLMs pour des domaines et des tâches spécifiques.",
      },
      {
        title: "Traitement des langues à faibles ressources",
        body: "Les langues dites « à faibles ressources » disposent de peu de données numériques (corpus annotés, lexiques, modèles pré-entraînés) par rapport aux langues dominantes. Locuteur natif du wolof, je suis convaincu que les avancées en TAL doivent aussi profiter à ces langues peu dotées. J'ai notamment travaillé sur la reconnaissance vocale du wolof et sur un système RAG dédié aux documents officiels sénégalais.",
      },
    ],
  },
  en: {
    greeting: 'Hello,',
    intro: "I am Mouhamed Mbaye, a Natural Language Processing engineer, graduated in 2025 from Université Marie et Louis Pasteur in Besançon.",
    status: "I am currently seeking a doctoral contract in the field of NLP.",
    interestsTitle: 'Research Interests',
    interests: [
      {
        title: "Information Retrieval and Extraction",
        body: "Information Retrieval (IR) aims to identify relevant documents within large data collections. Information Extraction (IE) consists of automatically identifying and structuring specific elements in text: named entities, entity relations, events, or key attributes. These tasks can be tackled using classical Machine Learning approaches (CRF, SVM), Transformer architectures (BERT, RoBERTa), or zero-shot and few-shot methods with LLMs, yielding competitive results even with very little annotated data.",
      },
      {
        title: "Leveraging Large Language Models (LLMs)",
        body: "I am particularly interested in Retrieval-Augmented Generation (RAG): an approach that enhances LLM responses by grounding them in external documentary sources, producing more reliable and verifiable answers. More broadly, I am interested in methods for adapting and specialising LLMs for specific domains and tasks.",
      },
      {
        title: "Low-Resource Language Processing",
        body: "Low-resource languages have limited digital data (annotated corpora, lexicons, pre-trained models) compared to dominant languages. As a native Wolof speaker, I believe that NLP advances must also benefit these underserved languages. I have worked on automatic speech recognition for Wolof and on a RAG system dedicated to official Senegalese documents.",
      },
    ],
  },
}

const researchAxes = {
  fr: [
    {
      title: 'Langues à faibles ressources & traitement de la parole',
      body: "Les langues africaines, dont le wolof ma langue maternelle, restent largement sous-représentées dans les ressources numériques. Mes travaux visent à construire des modèles adaptés à ces langues : fine-tuning de Whisper Small sur 3 400 échantillons wolof annotés manuellement (WER de 12,07 % après 500 steps), constitution de corpus et développement de pipelines de bout en bout pour des langues peu dotées.",
      tags: ['ASR', 'Wolof', 'Whisper', 'Annotation', 'HuggingFace'],
      projectRef: 'ASR Wolof — Whisper Fine-tuné',
    },
    {
      title: "Génération Augmentée par Récupération (RAG) & extraction d'information",
      body: "Comment rendre un corpus documentaire interrogeable par des non-experts ? C'est la question centrale qui a guidé KNOW-SN RAG, un système combinant recherche vectorielle (ChromaDB) et génération contextualisée (GPT-4o-mini) sur les documents officiels sénégalais. Cette problématique rejoint également IMGT-NER-APP, où la Reconnaissance d'Entités Nommées dans un domaine très contraint (la nomenclature DCI des anticorps monoclonaux) exige une précision terminologique élevée.",
      tags: ['RAG', 'NER', 'ChromaDB', 'LangChain', 'BiLSTM-CRF'],
      projectRef: 'KNOW-SN RAG · IMGT-NER-APP',
    },
    {
      title: 'Grands Modèles de Langue (LLMs) & systèmes multi-agents',
      body: "Les LLMs ouvrent des possibilités inédites pour l'analyse documentaire et le raisonnement automatisé. Je m'intéresse à leur déploiement local et souverain (Ollama, Llama 3.2) pour des contextes à faible connectivité ou exigeant la confidentialité des données, ainsi qu'à leur orchestration dans des architectures multi-agents autonomes.",
      tags: ['LLMs', 'Ollama', 'Llama 3.2', 'Multi-agents', 'Souveraineté des données'],
      projectRef: 'AI Orchestrator',
    },
    {
      title: 'NLP biomédical & terminologie spécialisée',
      body: "Le NLP médical pose des défis spécifiques : vocabulaire très contraint, données rares et étiquetage coûteux. Mon stage à l'IMGT (IGH, CNRS) m'a permis d'explorer ces enjeux à travers la conception de modèles BiLSTM-CRF pour l'extraction automatique d'entités dans les descriptions d'anticorps monoclonaux, en collaboration avec les équipes de l'OMS.",
      tags: ['NLP Biomédical', 'NER', 'BiLSTM-CRF', 'CNRS', 'spaCy'],
      projectRef: 'IMGT-NER-APP',
    },
  ],
  en: [
    {
      title: 'Low-Resource Languages & Speech Processing',
      body: "African languages, including Wolof my mother tongue, remain largely underrepresented in digital resources. My work aims to build models adapted to these languages: fine-tuning Whisper Small on 3,400 manually annotated Wolof samples (12.07% WER after 500 training steps), building corpora, and developing end-to-end pipelines for underserved languages.",
      tags: ['ASR', 'Wolof', 'Whisper', 'Annotation', 'HuggingFace'],
      projectRef: 'ASR Wolof — Fine-tuned Whisper',
    },
    {
      title: 'Retrieval-Augmented Generation (RAG) & Information Extraction',
      body: "How can a documentary corpus be made queryable by non-experts? This is the central question behind KNOW-SN RAG, a system combining vector search (ChromaDB) and contextualised generation (GPT-4o-mini) on official Senegalese documents. The same challenge underpins IMGT-NER-APP, where Named Entity Recognition in a highly constrained domain (monoclonal antibody INN nomenclature) demands high terminological precision.",
      tags: ['RAG', 'NER', 'ChromaDB', 'LangChain', 'BiLSTM-CRF'],
      projectRef: 'KNOW-SN RAG · IMGT-NER-APP',
    },
    {
      title: 'Large Language Models (LLMs) & Multi-Agent Systems',
      body: "LLMs open unprecedented possibilities for document analysis and automated reasoning. My interest lies in their local and sovereign deployment (Ollama, Llama 3.2) for low-connectivity or data-confidential contexts, as well as their orchestration within autonomous multi-agent architectures.",
      tags: ['LLMs', 'Ollama', 'Llama 3.2', 'Multi-agents', 'Data Sovereignty'],
      projectRef: 'AI Orchestrator',
    },
    {
      title: 'Biomedical NLP & Specialised Terminology',
      body: "Medical NLP poses specific challenges: highly constrained vocabulary, scarce data, and costly annotation. My internship at IMGT (IGH, CNRS) allowed me to explore these issues through the design of BiLSTM-CRF models for automated entity extraction in monoclonal antibody descriptions, in collaboration with WHO teams.",
      tags: ['Biomedical NLP', 'NER', 'BiLSTM-CRF', 'CNRS', 'spaCy'],
      projectRef: 'IMGT-NER-APP',
    },
  ],
}

const publications = {
  fr: [
    {
      type: 'Rapport de stage · Master II TAL',
      title: "Développement de IMGT-NER-APP : extraction automatique d'entités nommées pour les anticorps monoclonaux",
      venue: 'IMGT (IGH, CNRS), Montpellier, Université Marie et Louis Pasteur, Besançon',
      year: '2025',
      note: "Rapport de fin de stage de M2 : conception, entraînement et déploiement d'un modèle BiLSTM-CRF.",
      pdf: 'public/Rapport de stage M2_Mouhamed.pdf',
      pdfLabel: 'Lire le rapport',
    },
  ],
  en: [
    {
      type: 'Internship Report · Master II NLP',
      title: 'Development of IMGT-NER-APP: Automated Named Entity Extraction for Monoclonal Antibodies',
      venue: 'IMGT (IGH, CNRS), Montpellier, Université Marie et Louis Pasteur, Besançon',
      year: '2025',
      note: 'M2 end-of-internship report: design, training, and deployment of a BiLSTM-CRF model.',
      pdf: 'public/Rapport de stage M2_Mouhamed.pdf',
      pdfLabel: 'Read the report',
    },
  ],
}

const news = {
  fr: [
    { date: 'Juil. 2025',      text: "Diplômé du Master II TAL, Université Marie et Louis Pasteur, Besançon, France" },
    { date: 'Jan.–Juil. 2025', text: "Stage ingénieur NLP à l'IMGT (IGH, CNRS), Montpellier : développement de IMGT-NER-APP pour l'extraction automatique d'entités nommées dans les anticorps monoclonaux" },
    { date: '2024',            text: "Diplômé du Master II Data Science & NLP, Université Mohammed V, Rabat, Maroc" },
    { date: 'Jan.–Juin 2024',  text: "Stage ingénieur NLP à l'Université Mohammed V, Rabat : conception de pipelines NLP multilingues (LSTM, BERT)" },
  ],
  en: [
    { date: 'Jul. 2025',      text: "Graduated with Master II in NLP, Université Marie et Louis Pasteur, Besançon, France" },
    { date: 'Jan.–Jul. 2025', text: "NLP Engineering Internship at IMGT (IGH, CNRS), Montpellier: developed IMGT-NER-APP for automated named entity extraction in monoclonal antibody descriptions" },
    { date: '2024',           text: "Graduated with Master II in Data Science & NLP, Mohammed V University, Rabat, Morocco" },
    { date: 'Jan.–Jun. 2024', text: "NLP Engineering Internship at Mohammed V University, Rabat: designed multilingual NLP pipelines (LSTM, BERT)" },
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
    { degree: 'Master II en Traitement Automatique des Langues', institution: 'Université Marie et Louis Pasteur, Besançon, France', year: '2025' },
    { degree: 'Master II en Data Science & NLP',                institution: 'Université Mohammed V, Rabat, Maroc',                  year: '2024' },
    { degree: 'Licence en Infolinguistique',                    institution: 'Université Cady Ayyad, Marrakech, Maroc',              year: '2022' },
    { degree: 'Baccalauréat, Mention Très Bien',                institution: 'AAII, Kaolack, Sénégal',                              year: '2019' },
  ],
  en: [
    { degree: 'Master II in Natural Language Processing', institution: 'Université Marie et Louis Pasteur, Besançon, France', year: '2025' },
    { degree: 'Master II in Data Science & NLP',          institution: 'Mohammed V University, Rabat, Morocco',              year: '2024' },
    { degree: "Bachelor's in Infolinguistics",            institution: 'Cady Ayyad University, Marrakech, Morocco',          year: '2022' },
    { degree: 'Baccalaureate, Highest Honours',           institution: 'AAII, Kaolack, Senegal',                            year: '2019' },
  ],
}

/* ── RENDU ── */
function renderAbout(lang) {
  const d = aboutData[lang]
  document.getElementById('about-content').innerHTML = `
    <p class="about-greeting">${d.greeting}</p>
    <p class="about-intro">${d.intro}</p>
    <p class="about-status-line">${d.status}</p>
    <h3 class="about-interests-title">${d.interestsTitle}</h3>
    ${d.interests.map(item => `
      <div class="about-interest">
        <h4 class="about-interest-title">${item.title}</h4>
        <p class="about-interest-body">${item.body}</p>
      </div>`).join('')}
  `
}

function renderResearch(lang) {
  document.getElementById('research-content').innerHTML = researchAxes[lang].map(axis => `
    <div class="research-axis">
      <h3 class="research-axis-title">${axis.title}</h3>
      <p class="research-axis-body">${axis.body}</p>
      <p class="research-tags">${axis.tags.map(t => `<span class="research-tag">${t}</span>`).join('')}</p>
      <p class="research-project-ref">→ Projet : ${axis.projectRef}</p>
    </div>`).join('')
}

function renderPublications(lang) {
  document.getElementById('publications-list').innerHTML = publications[lang].map(pub => `
    <div class="publication-entry">
      <p class="pub-meta"><span class="pub-type">${pub.type}</span> <span class="pub-year">${pub.year}</span></p>
      <p class="pub-title">${pub.title}</p>
      ${pub.venue ? `<p class="pub-venue">${pub.venue}</p>` : ''}
      <p class="pub-note">${pub.note}</p>
      ${pub.pdf ? `<p><a href="${pub.pdf}" target="_blank" rel="noopener noreferrer" class="content-link">↓ ${pub.pdfLabel}</a></p>` : ''}
    </div>`).join('')
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
          <span class="project-cat">· ${p.category[lang]}</span>
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
  renderAbout(lang)
  renderNews(lang)
  renderProjects(lang)
  renderEducation(lang)
  renderPublications(lang)

  /* Boutons actifs */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang)
  })
}

/* ── INIT ── */
document.getElementById('year').textContent = new Date().getFullYear()
setLang('fr')
showSection('about')
