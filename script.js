document.addEventListener("DOMContentLoaded", () => {
  // --- DATA ---
  const companies = [
    {
      id: 1,
      logo: "https://ap-association.com/wp-content/uploads/2023/10/Rossum_Logo_dark_blue.png",
      name: "Rossum",
      tag: "Piattaforma",
      description:
        "Piattaforma di automazione fatture basata su intelligenza artificiale che utilizza LLM proprietari per l'elaborazione di documenti transazionali in 276 lingue con accuratezza del 93%.",
      features: [
        "Ottima per automatizzare fatture multilingue",
        "PMI e Grandi Aziende",
      ],
      pricing: "Demo gratuita, poi su preventivo",
      website: "https://rossum.ai/",
      trialUrl: "https://rossum.ai/form/trial/",
      details:
        "Rossum offre una soluzione cloud-native per l'automazione dell'elaborazione delle fatture. La sua tecnologia AI avanzata impara dai tuoi documenti per migliorare continuamente l'accuratezza. È ideale per aziende che gestiscono un alto volume di fatture da diversi fornitori.",
    },
    {
      id: 2,
      logo: "https://login.docuware.com/identity/images/DocuWare_logo_RGB.svg",
      name: "DocuWare IDP",
      tag: "Piattaforma",
      description:
        "Soluzione completa per la gestione documentale con funzionalità IDP integrate, classificazione automatica e estrazione dati con tecnologie OCR e HTR avanzate.",
      features: [
        "Perfetta per gestione documentale completa",
        "PMI e Grandi Aziende",
      ],
      pricing: "Prova gratuita, poi abbonamento",
      website: "https://start.docuware.com/it/intelligent-document-processing",
      trialUrl: "https://www.docuware.com/it/try-for-free",
      details:
        "DocuWare non è solo un IDP, ma una suite completa per la gestione documentale e l'automazione dei flussi di lavoro. Permette di archiviare, gestire e recuperare documenti in modo sicuro e efficiente, integrando l'estrazione intelligente dei dati in ogni fase del processo.",
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png",
      name: "Microsoft Azure Document Intelligence",
      tag: "API",
      description:
        "API di intelligenza artificiale per l'estrazione automatica di testo, coppie chiave-valore e tabelle da documenti con modelli preaddestrati e personalizzabili.",
      features: [
        "Ideale per team con sviluppatori",
        "Sviluppatori e Aziende Tech",
      ],
      pricing: "500 pagine S0 gratuite/mese per 12 mesi",
      website:
        "https://azure.microsoft.com/en-us/products/ai-services/ai-document-intelligence",
      trialUrl: "https://azure.microsoft.com/en-us/free/",
      details:
        "Precedentemente noto come Form Recognizer, Azure Document Intelligence è un servizio potente per gli sviluppatori. Offre modelli pre-addestrati per fatture, ricevute, documenti d'identità e altro, ma consente anche di addestrare modelli personalizzati per layout di documenti unici.",
    },
    {
      id: 4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png",
      name: "Google Cloud Document AI",
      tag: "API",
      description:
        "Suite di soluzioni AI per l'elaborazione documenti con modelli preaddestrati, Workbench per modelli custom e OCR enterprise con supporto 200+ lingue.",
      features: [
        "Ottima per soluzioni AI enterprise",
        "Sviluppatori e Grandi Aziende",
      ],
      pricing: "$300 crediti gratuiti per nuovi clienti",
      website: "https://cloud.google.com/document-ai",
      trialUrl: "https://cloud.google.com/free",
      details:
        "Google Cloud Document AI fornisce una suite completa di strumenti per l'elaborazione intelligente dei documenti, utilizzando l'avanzata tecnologia di machine learning di Google per fornire risultati accurati e scalabili.",
    },
    {
      id: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
      name: "AWS Textract",
      tag: "API",
      description:
        "Servizio di machine learning per l'estrazione automatica di testo, scrittura a mano e dati da documenti scansionati con alta precisione e scalabilità.",
      features: [
        "Perfetta per OCR ad alta precisione",
        "Sviluppatori e Grandi Aziende",
      ],
      pricing: "Pay-per-use, 1000 pagine/mese gratuite",
      website: "https://aws.amazon.com/textract/",
      trialUrl: "https://aws.amazon.com/free/",
      details:
        "AWS Textract va oltre la semplice OCR per identificare e estrarre testo e dati strutturati da documenti. È particolarmente efficace con forme complesse, tabelle e documenti finanziari.",
    },
    {
      id: 6,
      logo: "https://images.seeklogo.com/logo-png/52/1/nanonets-logo-png_seeklogo-528320.png",
      name: "Nanonets",
      tag: "API",
      description:
        "Piattaforma no-code per automatizzare workflow complessi con AI, specializzata nell'estrazione dati da documenti e automazione processi business.",
      features: ["Ideale per automazione no-code", "PMI e Sviluppatori"],
      pricing: "Starter $200 crediti gratuiti, poi pay-per-use",
      website: "https://nanonets.com/",
      trialUrl: "https://app.nanonets.com/signup/",
      details:
        "Nanonets si distingue per la sua approccio no-code all'automazione dei documenti. È perfetto per aziende che vogliono implementare soluzioni IDP senza competenze tecniche approfondite.",
    },
    {
      id: 7,
      logo: "https://logos-world.net/wp-content/uploads/2021/08/ABBYY-Logo.png",
      name: "ABBYY Vantage",
      tag: "Piattaforma",
      description:
        "Piattaforma IDP cloud-native con AI generativa e modelli preaddestrati per l'elaborazione intelligente di documenti enterprise con accuratezza superiore al 95%.",
      features: [
        "Migliore per soluzioni enterprise avanzate",
        "Grandi Aziende",
      ],
      pricing: "Su preventivo personalizzato",
      website: "https://www.abbyy.com/vantage/",
      trialUrl: "https://www.abbyy.com/vantage/trial/",
      details:
        "ABBYY Vantage rappresenta l'eccellenza nell'IDP enterprise, offrendo capacità avanzate di AI generativa e un marketplace di competenze predefinite per accelerare l'implementazione.",
    },
    {
      id: 8,
      logo: "https://www.hyperscience.com/wp-content/uploads/2023/01/hyperscience_logo_primary_blue_rgb.png",
      name: "Hyperscience",
      tag: "Piattaforma",
      description:
        "Piattaforma di hyperautomation che combina machine learning e human-in-the-loop per l'elaborazione documenti con garanzie di accuratezza del 99%.",
      features: [
        "Perfetta per processi mission-critical",
        "Grandi Aziende e Settore Pubblico",
      ],
      pricing: "Su preventivo enterprise",
      website: "https://www.hyperscience.com/",
      trialUrl: "https://www.hyperscience.com/demo/",
      details:
        "Hyperscience eccelle nei processi documentali mission-critical dove l'accuratezza è fondamentale. La sua architettura human-in-the-loop garantisce risultati sempre verificati e corretti.",
    },
    {
      id: 9,
      logo: "https://images.ctfassets.net/x7j9qwvpvr5s/3VH4JYnOKqIgVKjhxqPDZP/a8c4a6b8f1a1c2f1f1a1c2f1f1a1c2f1/mindee-logo.png",
      name: "Mindee",
      tag: "Custom",
      description:
        "Soluzione di sviluppo IDP che permette di creare soluzioni personalizzate con API facili da integrare e modelli di machine learning custom.",
      features: [
        "Ideale per soluzioni su misura",
        "Sviluppatori e Aziende Innovative",
      ],
      pricing: "Freemium con 250 documenti/mese gratuiti",
      website: "https://mindee.com/",
      trialUrl: "https://platform.mindee.com/signup",
      details:
        "Mindee offre la flessibilità di creare soluzioni IDP completamente personalizzate. È la scelta ideale per aziende con requisiti specifici che non possono essere soddisfatti da soluzioni standard.",
    },
    {
      id: 10,
      logo: "https://logo.clearbit.com/coventit.com",
      name: "Covent IT",
      tag: "Custom",
      description:
        "Partner tecnologico specializzato in soluzioni IDP personalizzate e integrazione con sistemi aziendali esistenti. Sviluppo di architetture su misura per automatizzare processi documentali complessi.",
      features: [
        "Perfetto per progetti enterprise su misura",
        "Grandi Aziende e Settore Pubblico",
      ],
      pricing: "Consulenza gratuita, poi preventivo personalizzato",
      website: "https://www.coventit.com/",
      trialUrl: "https://www.coventit.com/contatti/",
      details:
        "Covent IT si specializza nello sviluppo di soluzioni IDP completamente personalizzate per aziende che necessitano di integrazioni complesse con i propri sistemi esistenti. Offre consulenza strategica e implementazione end-to-end.",
    },
    {
      id: 11,
      logo: "https://dochorizon.klippa.com/docs/static/dochorizon_logo-dWqHEcmg.png",
      name: "Klippa DocHorizon",
      tag: "Piattaforma",
      description:
        "Piattaforma IDP basata su AI per l'automazione di qualsiasi flusso di lavoro documentale con certificazione ISO 9001 e ISO 27001.",
      features: [
        "Riduce i tempi di elaborazione fino al 90%",
        "Oltre 50 tipi di documenti supportati out-of-the-box",
      ],
      pricing: "Abbonamento mensile basato sul volume di documenti elaborati",
      website: "https://www.klippa.com/en/dochorizon/",
      trialUrl: "https://www.klippa.com/en/contact-en/",
      details:
        "Klippa DocHorizon è una piattaforma IDP AI-powered che offre moduli versatili di elaborazione documentale tramite API & SDK. La soluzione supporta oltre 150 campi dati differenti e può processare più di 150 milioni di documenti. Include funzionalità avanzate come verifica antifrode, classificazione automatica e workflow configurabili con approccio drag-and-drop.",
    },
    {
      id: 12,
      logo: "https://cdn.prod.website-files.com/615aeb2789c3f08cb6e2186e/64ff909fe3a0451b53cc1732_Symbol-Wordmark.svg",
      name: "Super.AI",
      tag: "Piattaforma",
      description:
        "Piattaforma IDP di nuova generazione che garantisce l'elaborazione del 100% dei documenti complessi con accuratezza garantita.",
      features: [
        "Accuratezza garantita del 99,9%",
        "Risparmia il 75% del tempo di elaborazione",
      ],
      pricing: "Su preventivo basato su volume e complessità",
      website: "https://super.ai/",
      trialUrl: "https://super.ai/demo",
      details:
        "Super.AI combina intelligenza artificiale, machine learning e intervento umano per processare documenti complessi. La piattaforma scompone i documenti in componenti più piccoli e utilizza il miglior mix di AI, operatori umani e software per garantire risultati di alta qualità. Include funzionalità avanzate di LLM e garantisce risultati end-to-end per i processi aziendali.",
    },
    {
      id: 13,
      logo: "https://www.hyland.com/en/~/media/hyland/images/appareils/idp/idp-logo.jpg",
      name: "Hyland IDP",
      tag: "Piattaforma",
      description:
        "Soluzione IDP enterprise con agenti AI e modelli linguistici di grandi dimensioni per l'elaborazione intelligente dei documenti.",
      features: [
        "Configurazione intuitiva basata su prompt GenAI",
        "Altamente scalabile e integrabile",
      ],
      pricing: "Licenza enterprise su preventivo",
      website:
        "https://www.hyland.com/en/solutions/products/intelligent-document-processing",
      trialUrl:
        "https://www.hyland.com/en/solutions/products/intelligent-document-processing",
      details:
        "Hyland IDP utilizza Large Language Models (LLM) con AI generativa per alimentare l'elaborazione documentale. La soluzione offre riconoscimento AI-powered, separazione e classificazione documenti, estrazione dati intelligente e arricchimento dei contenuti. Include interfaccia basata su prompt GenAI con suggerimenti dinamici e configurazione low-code per accelerare il time-to-value.",
    },
    {
      id: 14,
      logo: "https://appian.com/content/dam/appian-aem/en/icons/ai-sparkle-icon.svg",
      name: "Appian IDP",
      tag: "Piattaforma",
      description:
        "Centro documenti AI di livello enterprise per l'elaborazione intelligente ad alto volume con esperienza no-code.",
      features: [
        "Processa centinaia di milioni di documenti",
        "Integrazione drag-and-drop nei workflow",
      ],
      pricing: "Licenza enterprise basata su utilizzo",
      website:
        "https://appian.com/products/platform/process-automation/intelligent-document-processing-idp",
      trialUrl: "https://appian.com/demo-request",
      details:
        "Appian IDP fornisce un'esperienza no-code per l'elaborazione intelligente dei documenti di livello enterprise. La soluzione può leggere qualsiasi tipo di documento con alta accuratezza, inclusi contenuti lunghi e note scritte a mano. Include guardrail integrati, gestione delle performance e alta disponibilità per risultati sicuri e affidabili in ambienti di produzione.",
    },
    {
      id: 15,
      logo: "https://www.tungstenautomation.com/themes/tungsten/images/logo.svg",
      name: "Tungsten TotalAgility",
      tag: "Piattaforma",
      description:
        "Piattaforma di automazione intelligente leader nel mercato IDP con riconoscimenti da IDC e Everest Group.",
      features: [
        "Leader per il sesto anno consecutivo nei report Everest Group",
        "Integrazione avanzata con sistemi enterprise",
      ],
      pricing: "Licenza enterprise su preventivo",
      website: "https://www.tungstenautomation.com/products/totalagility",
      trialUrl: "https://www.tungstenautomation.com/products/totalagility",
      details:
        "Tungsten TotalAgility (ex Kofax) è una piattaforma di automazione intelligente che unifica i flussi di lavoro documentali da tutte le fonti. La soluzione include capacità avanzate per l'elaborazione di PDF, email, testo digitale e documenti scansionati. È riconosciuta come leader da analisti indipendenti per le sue capacità di processamento intelligente dei documenti e integrazione enterprise.",
    },
    {
      id: 16,
      logo: "https://www.blueprism.com/themes/blueprism/images/logo.svg",
      name: "SS&C Blue Prism",
      tag: "Piattaforma",
      description:
        "Piattaforma di automazione intelligente agentica leader nel mercato RPA con capacità IDP integrate.",
      features: [
        "Automazione agentica AI-powered",
        "Piattaforma testata e pronta per produzione",
      ],
      pricing: "Licenza enterprise su preventivo",
      website: "https://www.blueprism.com/",
      trialUrl: "https://www.blueprism.com/",
      details:
        "SS&C Blue Prism è una piattaforma di automazione agentica che combina RPA, AI e BPM per fornire soluzioni complete di automazione. La piattaforma include capacità IDP integrate per l'elaborazione intelligente dei documenti e si posiziona come leader nel mercato delle soluzioni di automazione enterprise. Offre digital workers intelligenti, affidabili e flessibili per qualsiasi attività aziendale.",
    },
    {
      id: 17,
      logo: "https://levity.ai/assets/images/levity-logo.svg",
      name: "Levity AI",
      tag: "Piattaforma",
      description:
        "Piattaforma di automazione AI no-code specializzata nella classificazione automatica di email e allegati per il settore logistico.",
      features: [
        "Classificazione automatica email e allegati",
        "Piattaforma no-code per workflow AI",
      ],
      pricing: "Abbonamento mensile basato su utilizzo",
      website: "https://levity.ai/",
      trialUrl: "https://levity.ai/resources",
      details:
        "Levity AI è una piattaforma no-code che permette di creare automazioni AI personalizzate per documenti, immagini e testi. La soluzione si adatta flessibilmente anche ai formati di email e allegati più complessi, automatizzando workflow sofisticati. Include funzionalità di estrazione informazioni, classificazione automatica e riassunto di documenti lunghi, particolarmente efficace per operazioni logistiche e freight.",
    },
    {
      id: 18,
      logo: "https://cdn.veryfi.com/wp-content/uploads/veryfi-logo-wide.png",
      name: "Veryfi",
      tag: "API",
      description:
        "API OCR avanzate per fatture, ricevute e assegni con conformità SOC2 Type2, GDPR, HIPAA e CCPA.",
      features: [
        "Supporta 91 valute e 38 lingue",
        "Accuratezza del 99,9% per documenti finanziari",
      ],
      pricing: "Pay-per-use basato su numero di documenti elaborati",
      website: "https://www.veryfi.com/",
      trialUrl: "https://www.veryfi.com/",
      details:
        "Veryfi fornisce API OCR di livello enterprise per l'estrazione automatica di dati da documenti finanziari. La soluzione offre SDK pronti all'uso in oltre 10 linguaggi di programmazione e include funzionalità avanzate come rilevamento frodi, validazione in tempo reale e estrazione dati a livello di riga. È particolarmente efficace per applicazioni fintech, programmi fedeltà CPG e automazione back-office.",
    },
    {
      id: 19,
      logo: "https://files.readme.io/1766cd4-FormX_Logo.svg",
      name: "FormX.ai",
      tag: "API",
      description:
        "Piattaforma di estrazione dati AI-powered che combina modelli vision e LLM per l'elaborazione documentale di produzione.",
      features: [
        "Switching tra modelli Vision e LLM",
        "Guardrail per stabilità e prevenzione allucinazioni",
      ],
      pricing: "Freemium con piani a pagamento basati su utilizzo",
      website: "https://www.formx.ai/",
      trialUrl: "https://www.formx.ai/",
      details:
        "FormX.ai offre una soluzione più potente dei soli LLM, combinando tecnologia LLM con capacità di switching tra modelli AI diversi. La piattaforma include controlli di qualità delle immagini, classificazione documenti, normalizzazione dati e loop di feedback continuo per migliorare l'accuratezza. Include ingegneria prompt ottimizzata e fine-tuning LLM con dati di produzione.",
    },
    {
      id: 20,
      logo: "https://parseur.com/images/branding/parseur-logo-512x512.png",
      name: "Parseur",
      tag: "API",
      description:
        "Software di estrazione dati AI con OCR dinamico avanzato per l'elaborazione di documenti in oltre 60 lingue.",
      features: [
        "OCR dinamico per campi che cambiano posizione",
        "Risparmio medio di 189 ore/mese per cliente",
      ],
      pricing: "Da $39/mese per piano Starter",
      website: "https://parseur.com/",
      trialUrl: "https://parseur.com/",
      details:
        "Parseur utilizza tecniche OCR dinamiche avanzate per estrarre dati da documenti anche quando i campi cambiano posizione o dimensione. La soluzione può elaborare milioni di documenti mensili con uptime del 99,9% e include capacità di estrazione tabelle, normalizzazione indirizzi e parsing date. È particolarmente efficace per aziende in finanza, tech, logistica e sanità.",
    },
    {
      id: 21,
      logo: "https://www.automationanywhere.com/themes/aa/images/logo-main.svg",
      name: "Automation Anywhere Document Automation",
      tag: "API",
      description:
        "Soluzione di automazione documenti AI-powered che utilizza agenti per l'elaborazione intelligente su larga scala.",
      features: [
        "Elaborazione agentica di documenti",
        "Integrazione nativa con RPA Automation 360",
      ],
      pricing: "Licenza enterprise su preventivo",
      website:
        "https://www.automationanywhere.com/products/document-automation",
      trialUrl:
        "https://www.automationanywhere.com/products/document-automation",
      details:
        "Automation Anywhere Document Automation impiega modelli AI addestrati per riconoscere pattern ed estrarre informazioni specifiche da documenti, permettendo automazione più veloce ed accurata. La soluzione si integra nativamente con la piattaforma RPA Automation 360 e supporta l'elaborazione di fatture, contratti, form, EOB e altri tipi di documenti complessi con elaborazione agentica.",
    },
    {
      id: 22,
      logo: "https://docparser.com/static/img/docparser-logo.png",
      name: "Docparser",
      tag: "API",
      description:
        "Soluzione cloud per l'estrazione automatica di dati da PDF, documenti Word e file immagine con template configurabili.",
      features: [
        "Template configurabili per diversi tipi documento",
        "Integrazione con oltre 500 applicazioni",
      ],
      pricing: "Da $39/mese per piano Starter",
      website: "https://docparser.com/",
      trialUrl: "https://docparser.com/",
      details:
        "Docparser è una soluzione cloud-based per l'estrazione automatica di dati da documenti PDF, Word e immagini. La piattaforma utilizza template configurabili per riconoscere e estrarre informazioni specifiche dai documenti, con integrazione nativa con oltre 500 applicazioni business. È particolarmente efficace per l'automazione di processi di fatturazione, gestione ordini e workflow documentali standardizzati.",
    },
    {
      id: 23,
      logo: "https://www.mybiros.com/favicon.ico",
      name: "MyBiros",
      tag: "Custom",
      description:
        "Piattaforma italiana di IDP di nuova generazione per l'elaborazione automatica di documenti strutturati, semi-strutturati e non strutturati.",
      features: [
        "Specializzata per mercato italiano",
        "Classificazione automatica documenti avanzata",
      ],
      pricing: "Su preventivo basato su volumi e personalizzazioni",
      website: "https://www.mybiros.com/",
      trialUrl:
        "https://www.mybiros.com/post/intelligent-document-processing-idp",
      details:
        "MyBiros è una piattaforma italiana di Intelligent Document Processing progettata per aiutare le aziende a elaborare documenti di qualsiasi tipologia. Include funzionalità avanzate di estrazione dati, classificazione automatica e integrazione con sistemi gestionali. La soluzione è stata sviluppata specificamente per le esigenze del mercato italiano e offre supporto per documenti in italiano con alta precisione.",
    },
    {
      id: 24,
      logo: "https://www.retarus.com/themes/retarus/images/logo.svg",
      name: "Retarus IDP",
      tag: "Custom",
      description:
        "Soluzione europea di elaborazione intelligente documenti con tecnologia IDR all'avanguardia e servizio 24/7.",
      features: [
        "Tecnologia IDR (Intelligent Document Recognition)",
        "Servizio 24/7 e supporto HITL",
      ],
      pricing: "Su preventivo con modelli flessibili",
      website:
        "https://www.retarus.com/it/services/intelligent-document-processing/",
      trialUrl:
        "https://www.retarus.com/it/services/intelligent-document-processing/",
      details:
        "Retarus IDP offre una soluzione completa per l'automazione dell'elaborazione documentale con tecnologia AI avanzata. La piattaforma include funzionalità di riconoscimento intelligente, estrazione dati accurata e validazione automatica. È progettata per integrare facilmente con sistemi ERP esistenti e supporta flussi di lavoro purchase-to-pay e order-to-cash completamente automatizzati.",
    },
    {
      id: 25,
      logo: "https://www.arket.it/wp-content/uploads/2020/09/logo-arket.png",
      name: "Arket COLLHUBORATE",
      tag: "Custom",
      description:
        "Suite italiana completa per digitalizzazione e automazione processi d'ufficio con oltre 20 anni di esperienza nel mercato.",
      features: [
        "Integrazione con sistemi gestionali italiani",
        "Consulenza e sviluppo personalizzato",
      ],
      pricing: "Su preventivo con consulenza inclusa",
      website: "https://www.arket.it/it/",
      trialUrl: "https://www.collhuborate.it/it/",
      details:
        "Arket COLLHUBORATE è una suite completa che unisce piattaforme software e consulenza per supportare la digitalizzazione e l'automazione dei processi d'ufficio. L'azienda italiana offre soluzioni personalizzate per la gestione documentale con particolare focus sull'integrazione con sistemi ERP e gestionali. Include workflow automatizzati, gestione delle scadenze e piena consultazione da qualsiasi dispositivo.",
    },
    {
      id: 26,
      logo: "https://ifin.it/wp-content/uploads/2020/06/logo-ifin.png",
      name: "Ifin Sistemi",
      tag: "Custom",
      description:
        "Conservatore Accreditato AgID specializzato in digitalizzazione processi aziendali e gestione documenti digitali con oltre 30 anni di esperienza.",
      features: [
        "Accreditamento AgID come conservatore",
        "Specializzazione in normative italiane",
      ],
      pricing: "Su preventivo con consulenza normativa",
      website: "https://ifin.it/",
      trialUrl: "https://ifin.it/soluzioni/consulenza/",
      details:
        "Ifin Sistemi è un provider di soluzioni IT con oltre 30 anni di esperienza, specializzato in digitalizzazione processi e documenti aziendali. Come Conservatore Accreditato AgID, offre soluzioni complete per l'archiviazione documentale, conservazione digitale e fatturazione elettronica. Fornisce consulenza specializzata in materia di digitalizzazione archivi e accompagna le aziende nella realizzazione di progetti documentali conformi alle normative italiane.",
    },
    {
      id: 27,
      logo: "https://www.archivagroup.com/images/archiva-logo.png",
      name: "Archiva Group",
      tag: "Custom",
      description:
        "System integrator specializzato in soluzioni IDP per l'automazione dei processi documentali anche con dati non strutturati.",
      features: [
        "Esperienza in documenti non strutturati",
        "Integrazione con piattaforme Amazon Web Services",
      ],
      pricing: "Su preventivo basato su complessità progetto",
      website:
        "https://www.archivagroup.com/en/digitisation/specialisations/idp-intelligent-document-processing",
      trialUrl:
        "https://www.archivagroup.com/en/digitisation/specialisations/idp-intelligent-document-processing",
      details:
        "Archiva Group è un system integrator che offre soluzioni IDP complete per automatizzare i processi documentali. La società si specializza nell'elaborazione di documenti non strutturati e semi-strutturati, offrendo una suite di applicazioni per gestione documenti, archiviazione elettronica, fatturazione elettronica e business process management. Ha partnership consolidate con Amazon Web Services per soluzioni cloud native.",
    },
    {
      id: 28,
      logo: "https://www.hypatos.ai/wp-content/uploads/2021/06/hypatos-logo-main-2.png",
      name: "Hypatos",
      tag: "Piattaforma",
      description:
        "Piattaforma AI per l'automazione intelligente di fatture e documenti finanziari con OCR avanzato e machine learning.",
      features: [
        "Processamento fatture con accuracy >99%",
        "Integrazione con ERP e sistemi contabili",
        "Apprendimento automatico continuo",
        "Gestione eccezioni intelligente",
      ],
      pricing: "A partire da €500/mese",
      website: "https://www.hypatos.ai/",
      trialUrl: "https://www.hypatos.ai/demo",
      details:
        "Hypatos è specializzata nell'automazione intelligente di documenti finanziari attraverso tecnologie AI avanzate. La piattaforma utilizza OCR, NLP e machine learning per processare automaticamente fatture, ordini e documenti contabili con elevata precisione. Offre integrazioni native con i principali sistemi ERP e workflow di approvazione personalizzabili.",
    },
    {
      id: 29,
      logo: "https://www.extractable.com/wp-content/uploads/2021/01/extractable-logo.png",
      name: "Extractable",
      tag: "Piattaforma",
      description:
        "Piattaforma no-code per l'estrazione automatica di dati da documenti con template personalizzabili.",
      features: [
        "Editor drag-and-drop per template",
        "API RESTful per integrazioni",
        "Supporto per oltre 100 formati documento",
        "Validazione dati in tempo reale",
      ],
      pricing: "A partire da €200/mese",
      website: "https://www.extractable.com/",
      trialUrl: "https://www.extractable.com/free-trial",
      details:
        "Extractable offre una soluzione no-code per l'estrazione automatica di dati da documenti strutturati e semi-strutturati. La piattaforma permette agli utenti di creare template personalizzati attraverso un editor visuale drag-and-drop, senza necessità di programmazione. Include funzionalità avanzate di validazione dati e supporta oltre 100 formati di documento diversi.",
    },
    {
      id: 30,
      logo: "https://www.docparser.com/img/docparser-logo.png",
      name: "Docparser",
      tag: "Piattaforma",
      description:
        "Servizio cloud per l'estrazione automatica di dati da PDF e documenti con parsing rules avanzate.",
      features: [
        "Parsing rules personalizzabili",
        "Webhook e notifiche automatiche",
        "Integrazione con Zapier e 1000+ app",
        "Elaborazione batch di documenti",
      ],
      pricing: "A partire da €39/mese",
      website: "https://docparser.com/",
      trialUrl: "https://docparser.com/signup",
      details:
        "Docparser è un servizio cloud specializzato nell'estrazione automatica di dati da PDF e documenti attraverso parsing rules configurabili. La piattaforma supporta elaborazione batch, webhook per notifiche real-time e si integra facilmente con oltre 1000 applicazioni tramite Zapier. È particolarmente efficace per processare documenti ricorrenti con strutture simili.",
    },
    {
      id: 31,
      logo: "https://www.docsumo.com/img/docsumo-logo.svg",
      name: "Docsumo",
      tag: "Piattaforma",
      description:
        "Piattaforma AI per l'estrazione automatica di dati da documenti semi-strutturati con human-in-the-loop.",
      features: [
        "Pre-trained models per documenti comuni",
        "Human-in-the-loop per accuracy elevata",
        "API RESTful e webhook",
        "Dashboard analytics avanzata",
      ],
      pricing: "A partire da €300/mese",
      website: "https://www.docsumo.com/",
      trialUrl: "https://www.docsumo.com/free-trial",
      details:
        "Docsumo combina intelligenza artificiale e revisione umana per garantire la massima accuratezza nell'estrazione dati da documenti semi-strutturati. La piattaforma offre modelli pre-addestrati per documenti comuni come fatture, contratti e moduli, con possibilità di training personalizzato. Include dashboard analytics per monitorare performance e bottleneck nei processi.",
    },
    {
      id: 32,
      logo: "https://www.deepopinion.ai/wp-content/uploads/2021/08/deepopinion-logo.png",
      name: "DeepOpinion",
      tag: "Piattaforma",
      description:
        "Piattaforma cognitive automation per l'elaborazione intelligente di documenti e comunicazioni.",
      features: [
        "Cognitive automation end-to-end",
        "Processamento multilingue",
        "Integrazione con RPA tools",
        "Analytics predittive",
      ],
      pricing: "Su preventivo",
      website: "https://www.deepopinion.ai/",
      trialUrl: "https://www.deepopinion.ai/demo",
      details:
        "DeepOpinion offre una piattaforma di cognitive automation che va oltre la semplice estrazione dati, integrando comprensione del linguaggio naturale e analisi del sentiment. La soluzione supporta l'elaborazione di documenti complessi in multiple lingue e si integra nativamente con i principali tools RPA. Include capacità predittive per anticipare trend e anomalie nei processi documentali.",
    },
    {
      id: 33,
      logo: "https://www.processingpoint.com/wp-content/uploads/2021/01/processing-point-logo.png",
      name: "Processing Point",
      tag: "Piattaforma",
      description:
        "Piattaforma europea per l'automazione di processi documentali con focus su compliance GDPR.",
      features: [
        "Compliance GDPR nativa",
        "Processamento on-premise disponibile",
        "Workflow automation avanzata",
        "Audit trail completo",
      ],
      pricing: "A partire da €800/mese",
      website: "https://www.processingpoint.com/",
      trialUrl: "https://www.processingpoint.com/trial",
      details:
        "Processing Point è una piattaforma europea specializzata nell'automazione di processi documentali con particolare attenzione alla compliance GDPR. Offre deployment sia cloud che on-premise, workflow automation avanzata e audit trail completo per garantire tracciabilità e conformità normativa. È particolarmente indicata per settori altamente regolamentati come banking e healthcare.",
    },
    {
      id: 34,
      logo: "https://www.datamolino.com/wp-content/uploads/2021/02/datamolino-logo.png",
      name: "Datamolino",
      tag: "Piattaforma",
      description:
        "Soluzione specializzata per l'estrazione automatica di dati da ricevute e documenti di spesa.",
      features: [
        "Specializzazione in expense management",
        "Integrazione con sistemi contabili",
        "Mobile app per capture immediata",
        "Categorizzazione automatica spese",
      ],
      pricing: "A partire da €15/mese per utente",
      website: "https://www.datamolino.com/",
      trialUrl: "https://www.datamolino.com/free-trial",
      details:
        "Datamolino è specializzata nell'automazione dell'expense management attraverso l'estrazione automatica di dati da ricevute e documenti di spesa. La piattaforma include app mobile per capture immediata, categorizzazione automatica delle spese e integrazione diretta con i principali sistemi contabili. È particolarmente efficace per PMI e professionisti che necessitano di digitalizzare i processi di gestione spese.",
    },
    {
      id: 35,
      logo: "https://www.automationanywhere.com/sites/default/files/styles/social_media_image/public/images/2021-06/aa-logo-blue-rgb.png",
      name: "Automation Anywhere IQ Bot",
      tag: "Piattaforma",
      description:
        "Piattaforma cognitive per l'elaborazione intelligente di documenti integrata con RPA enterprise.",
      features: [
        "Integrazione nativa con RPA",
        "Cognitive automation avanzata",
        "Machine learning adattivo",
        "Governance e compliance enterprise",
      ],
      pricing: "Su preventivo enterprise",
      website: "https://www.automationanywhere.com/products/iq-bot",
      trialUrl: "https://www.automationanywhere.com/products/iq-bot",
      details:
        "Automation Anywhere IQ Bot è una piattaforma cognitive che combina IDP con RPA enterprise per l'automazione end-to-end di processi documentali complessi. Utilizza machine learning adattivo per migliorare continuamente l'accuratezza e offre governance enterprise per deployment su larga scala. È ideale per grandi organizzazioni che necessitano di integrare IDP nei propri ecosystem RPA esistenti.",
    },
    {
      id: 36,
      logo: "https://www.workfusion.com/wp-content/uploads/2021/04/workfusion-logo.png",
      name: "WorkFusion",
      tag: "Piattaforma",
      description:
        "Piattaforma di hyperautomation che combina RPA, AI e human-in-the-loop per processi documentali.",
      features: [
        "Hyperautomation platform",
        "AI-powered document processing",
        "Human-digital workforce integration",
        "Process mining e analytics",
      ],
      pricing: "Su preventivo enterprise",
      website: "https://www.workfusion.com/",
      trialUrl: "https://www.workfusion.com/demo",
      details:
        "WorkFusion offre una piattaforma di hyperautomation che integra RPA, AI e workforce digitale per l'elaborazione intelligente di documenti. La soluzione include process mining per identificare opportunità di automazione, AI-powered document processing e capacità di orchestrare workforce umana e digitale. È progettata per enterprise che necessitano di automatizzare processi documentali complessi su larga scala.",
    },
    {
      id: 37,
      logo: "https://www.easyocr.com/img/easyocr-logo.png",
      name: "EasyOCR",
      tag: "Open Source",
      description:
        "Libreria Python open source per OCR con supporto per oltre 80 lingue e implementazione semplice.",
      features: [
        "Supporto per 80+ lingue",
        "Implementazione Python semplice",
        "Modelli pre-addestrati",
        "Deployment flessibile",
      ],
      pricing: "Gratuito (open source)",
      website: "https://github.com/JaidedAI/EasyOCR",
      trialUrl: "https://github.com/JaidedAI/EasyOCR",
      details:
        "EasyOCR è una libreria Python open source che semplifica l'implementazione di funzionalità OCR in applicazioni custom. Supporta oltre 80 lingue, include modelli pre-addestrati per scenari comuni e offre API semplici per integrazione rapida. È ideale per sviluppatori che necessitano di funzionalità OCR basic in progetti custom senza costi di licensing.",
    },
    {
      id: 38,
      logo: "https://www.paddlepaddle.org.cn/images/logo.png",
      name: "PaddleOCR",
      tag: "Open Source",
      description:
        "Framework OCR open source ultra-leggero con modelli pratici per scenari industriali.",
      features: [
        "Ultra-lightweight design",
        "Modelli industriali ready-to-use",
        "Supporto multilingue",
        "Deployment edge-friendly",
      ],
      pricing: "Gratuito (open source)",
      website: "https://github.com/PaddlePaddle/PaddleOCR",
      trialUrl: "https://github.com/PaddlePaddle/PaddleOCR",
      details:
        "PaddleOCR è un framework OCR open source ultra-leggero sviluppato da Baidu, ottimizzato per deployment industriale. Offre modelli pre-addestrati per scenari pratici, supporta deployment su edge devices e include strumenti per training personalizzato. È particolarmente indicato per implementazioni che richiedono performance elevate con footprint ridotto.",
    },
    {
      id: 39,
      logo: "https://www.doctr.com/img/doctr-logo.png",
      name: "docTR",
      tag: "Open Source",
      description:
        "Toolkit Python open source per document text recognition con architetture deep learning moderne.",
      features: [
        "Architetture deep learning moderne",
        "Toolkit completo per text recognition",
        "Modelli state-of-the-art",
        "Facile customizzazione",
      ],
      pricing: "Gratuito (open source)",
      website: "https://github.com/mindee/doctr",
      trialUrl: "https://github.com/mindee/doctr",
      details:
        "docTR è un toolkit Python open source per document text recognition che implementa architetture deep learning moderne. Sviluppato da Mindee, offre modelli state-of-the-art per text detection e recognition, con possibilità di fine-tuning per casi d'uso specifici. È ideale per ricercatori e sviluppatori che necessitano di soluzioni OCR avanzate e customizzabili.",
    },
    {
      id: 40,
      logo: "https://www.surya-ocr.com/img/surya-logo.png",
      name: "Surya OCR",
      tag: "Open Source",
      description:
        "Sistema OCR open source multilingue con focus su lingue asiatiche e script complessi.",
      features: [
        "Specializzazione lingue asiatiche",
        "Supporto script complessi",
        "Architettura modulare",
        "Performance ottimizzate",
      ],
      pricing: "Gratuito (open source)",
      website: "https://github.com/VikParuchuri/surya",
      trialUrl: "https://github.com/VikParuchuri/surya",
      details:
        "Surya OCR è un sistema OCR open source specializzato nel riconoscimento di testi in lingue asiatiche e script complessi. Utilizza architetture moderne ottimizzate per performance elevate e offre supporto esteso per caratteri non latini. È particolarmente indicato per applicazioni che necessitano di processare documenti multilingue con script diversi.",
    },
    {
      id: 41,
      logo: "https://www.parserix.com/img/parserix-logo.png",
      name: "Parserix",
      tag: "Open Source",
      description:
        "Framework open source per parsing intelligente di documenti con regole configurabili.",
      features: [
        "Regole di parsing configurabili",
        "Estrazione strutturata avanzata",
        "Plugin ecosystem",
        "Template engine flessibile",
      ],
      pricing: "Gratuito (open source)",
      website: "https://github.com/parserix/parserix",
      trialUrl: "https://github.com/parserix/parserix",
      details:
        "Parserix è un framework open source per parsing intelligente di documenti che permette di definire regole configurabili per l'estrazione di dati strutturati. Include un template engine flessibile, ecosystem di plugin estensibile e supporto per formati documento multipli. È ideale per sviluppatori che necessitano di soluzioni di parsing customizzabili e estensibili.",
    },
    {
      id: 42,
      logo: "https://www.tabula.technology/img/tabula-logo.png",
      name: "Tabula",
      tag: "Open Source",
      description:
        "Tool open source per l'estrazione di tabelle da PDF con interfaccia web user-friendly.",
      features: [
        "Specializzazione estrazione tabelle",
        "Interfaccia web intuitiva",
        "Supporto PDF complesso",
        "Export in formati multipli",
      ],
      pricing: "Gratuito (open source)",
      website: "https://tabula.technology/",
      trialUrl: "https://tabula.technology/",
      details:
        "Tabula è un tool open source specializzato nell'estrazione di tabelle da documenti PDF. Offre un'interfaccia web user-friendly che permette di selezionare visualmente le tabelle da estrarre e supporta export in CSV, TSV e JSON. È particolarmente utile per analisti e ricercatori che necessitano di digitalizzare dati tabulari da report e documenti PDF.",
    },
    {
      id: 43,
      logo: "https://www.camelot-py.com/img/camelot-logo.png",
      name: "Camelot",
      tag: "Open Source",
      description:
        "Libreria Python per estrazione di tabelle da PDF con algoritmi avanzati di table detection.",
      features: [
        "Algoritmi avanzati table detection",
        "Interfaccia Python semplice",
        "Accuracy elevata su PDF complessi",
        "Configurazione parametri flessibile",
      ],
      pricing: "Gratuito (open source)",
      website: "https://camelot-py.readthedocs.io/",
      trialUrl: "https://camelot-py.readthedocs.io/",
      details:
        "Camelot è una libreria Python per l'estrazione di tabelle da PDF che utilizza algoritmi avanzati di table detection. Offre due parsing methods (Stream e Lattice) per gestire diversi tipi di tabelle e permette configurazione fine dei parametri di estrazione. È ideale per sviluppatori che necessitano di integrare estrazione tabelle in pipeline di data processing.",
    },
    {
      id: 44,
      logo: "https://www.unstructured.io/img/unstructured-logo.png",
      name: "Unstructured",
      tag: "Open Source",
      description:
        "Libreria Python per preprocessing di documenti non strutturati in pipeline di machine learning.",
      features: [
        "Preprocessing documenti non strutturati",
        "Pipeline ML-ready",
        "Supporto formati multipli",
        "Chunking e segmentazione avanzata",
      ],
      pricing: "Gratuito (open source)",
      website: "https://github.com/Unstructured-IO/unstructured",
      trialUrl: "https://github.com/Unstructured-IO/unstructured",
      details:
        "Unstructured è una libreria Python per preprocessing di documenti non strutturati in pipeline di machine learning. Supporta multiple formati (PDF, HTML, Word, PowerPoint) e offre funzionalità avanzate di chunking e segmentazione per preparare documenti per sistemi RAG e LLM. È ideale per data scientists che lavorano con documenti non strutturati in progetti AI.",
    },
  ];

  // --- RENDER CARDS ---
  const grid = document.getElementById("solutions-grid");
  const resultsCount = document.getElementById("results-count");

  function renderSolutions(solutionsToRender) {
    grid.innerHTML = "";
    resultsCount.textContent = solutionsToRender.length;

    solutionsToRender.forEach((company) => {
      const card = document.createElement("div");
      card.className = "card p-6";
      card.innerHTML = `
                <div class="flex items-center mb-4">
                    <img src="${company.logo}" alt="${
        company.name
      } Logo" class="w-12 h-12 object-contain mr-4" onerror="this.style.display='none'">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">${
                          company.name
                        }</h3>
                        <span class="inline-block px-2 py-1 text-xs font-medium text-white bg-accent-teal rounded-full">${
                          company.tag
                        }</span>
                    </div>
                </div>
                <p class="text-gray-600 text-sm mb-4">${company.description}</p>
                <ul class="space-y-1 mb-4">
                    ${company.features
                      .map(
                        (feature) =>
                          `<li class="text-sm text-gray-500"><i class="fas fa-check text-accent-teal mr-2"></i>${feature}</li>`
                      )
                      .join("")}
                </ul>
                <a href="${
                  company.trialUrl
                }" target="_blank" class="pricing-tag mb-4 block text-center hover:opacity-80 transition-opacity cursor-pointer text-decoration-none">${
        company.pricing
      }</a>
                <div class="flex justify-between items-center">
                    <a href="${
                      company.website
                    }" target="_blank" class="bg-corporate-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        <i class="fas fa-external-link-alt mr-2"></i>Visita Sito
                    </a>
                    <button class="text-accent-teal hover:text-teal-600 text-sm font-medium details-btn" data-id="${
                      company.id
                    }">
                        <i class="fas fa-info-circle mr-1"></i>Dettagli
                    </button>
                </div>
            `;
      grid.appendChild(card);
    });

    // Reinitialize modal listeners for newly created buttons
    initializeModalListeners();
  }

  // --- FILTER LOGIC ---
  function filterSolutions(category) {
    if (category === "all") {
      return companies;
    }
    return companies.filter((company) => company.tag === category);
  }

  // Filter button event listeners
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      // Filter and render solutions
      const category = this.dataset.filter;
      const filteredSolutions = filterSolutions(category);
      renderSolutions(filteredSolutions);
    });
  });

  // --- MODAL LOGIC ---
  const modal = document.getElementById("details-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".modal-close-btn");
  const overlay = document.querySelector(".modal-overlay");

  function openModal(company) {
    modalBody.innerHTML = `
            <h2 class="text-2xl font-bold text-corporate-blue mb-4">${company.name}</h2>
            <p class="text-gray-700 leading-relaxed mb-6">${company.details}</p>
            <div class="flex justify-center">
                <a href="${company.website}" class="bg-corporate-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium" target="_blank">
                    <i class="fas fa-external-link-alt mr-2"></i>Vai al Sito Ufficiale
                </a>
            </div>
        `;
    modal.classList.remove("modal-hidden");
    modal.classList.add("modal-visible");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  function closeModal() {
    modal.classList.remove("modal-visible");
    modal.classList.add("modal-hidden");
    modalBody.innerHTML = "";
    document.body.style.overflow = ""; // Restore scrolling
  }

  function initializeModalListeners() {
    const detailsButtons = document.querySelectorAll(".details-btn");
    detailsButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const companyId = parseInt(button.dataset.id);
        const companyData = companies.find((c) => c.id === companyId);
        if (companyData) {
          openModal(companyData);
        }
      });
    });
  }

  // Modal close event listeners
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("modal-visible")) {
      closeModal();
    }
  });

  // --- MOBILE MENU LOGIC ---
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuIcon = mobileMenuButton.querySelector("i");

  function toggleMobileMenu() {
    const isHidden = mobileMenu.classList.contains("hidden");
    if (isHidden) {
      mobileMenu.classList.remove("hidden");
      mobileMenuIcon.classList.remove("fa-bars");
      mobileMenuIcon.classList.add("fa-times");
    } else {
      mobileMenu.classList.add("hidden");
      mobileMenuIcon.classList.remove("fa-times");
      mobileMenuIcon.classList.add("fa-bars");
    }
  }

  mobileMenuButton.addEventListener("click", toggleMobileMenu);

  // Close mobile menu when clicking on links
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenuIcon.classList.remove("fa-times");
      mobileMenuIcon.classList.add("fa-bars");
    });
  });

  // Initialize the page
  renderSolutions(companies);
});
