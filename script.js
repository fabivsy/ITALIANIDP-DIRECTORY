// Dati delle soluzioni IDP
const soluzioni = [
  {
    id: 1,
    nome: "Rossum",
    logo_url:
      "https://ap-association.com/wp-content/uploads/2023/10/Rossum_Logo_dark_blue.png",
    categoria: "Piattaforma",
    descrizione:
      "Piattaforma di automazione fatture basata su intelligenza artificiale che utilizza LLM proprietari per l'elaborazione di documenti transazionali in 276 lingue con accuratezza del 93%.",
    target: "PMI e Grandi Aziende",
    pricing: "Demo gratuita, poi su preventivo",
    sito_url: "https://rossum.ai/",
    is_featured: false,
    best_for: "Ottima per automatizzare fatture multilingue",
  },
  {
    id: 2,
    nome: "DocuWare IDP",
    logo_url:
      "https://login.docuware.com/identity/images/DocuWare_logo_RGB.svg",
    categoria: "Piattaforma",
    descrizione:
      "Soluzione completa per la gestione documentale con funzionalità IDP integrate, classificazione automatica e estrazione dati con tecnologie OCR e HTR avanzate.",
    target: "PMI e Grandi Aziende",
    pricing: "Prova gratuita, poi abbonamento",
    sito_url: "https://start.docuware.com/it/intelligent-document-processing",
    is_featured: false,
    best_for: "Perfetta per gestione documentale completa",
  },
  {
    id: 3,
    nome: "Microsoft Azure Document Intelligence",
    logo_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png",
    categoria: "API",
    descrizione:
      "API di intelligenza artificiale per l'estrazione automatica di testo, coppie chiave-valore e tabelle da documenti con modelli preaddestrati e personalizzabili.",
    target: "Sviluppatori e Aziende Tech",
    pricing: "500 pagine S0 gratuite/mese per 12 mesi",
    sito_url:
      "https://azure.microsoft.com/en-us/products/ai-services/ai-document-intelligence",
    is_featured: false,
    best_for: "Ideale per team con sviluppatori",
  },
  {
    id: 4,
    nome: "Google Cloud Document AI",
    logo_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png",
    categoria: "API",
    descrizione:
      "Suite di soluzioni AI per l'elaborazione documenti con modelli preaddestrati, Workbench per modelli custom e OCR enterprise con supporto 200+ lingue.",
    target: "Sviluppatori e Grandi Aziende",
    pricing: "$300 crediti gratuiti per nuovi clienti",
    sito_url: "https://cloud.google.com/document-ai",
    is_featured: false,
    best_for: "Ottima per soluzioni AI enterprise",
  },
  {
    id: 5,
    nome: "AWS Textract",
    logo_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
    categoria: "API",
    descrizione:
      "Servizio di machine learning per l'estrazione automatica di testo, scrittura a mano e dati da documenti scansionati con alta precisione e scalabilità.",
    target: "Sviluppatori e Grandi Aziende",
    pricing: "Pay-per-use, 1000 pagine/mese gratuite",
    sito_url: "https://aws.amazon.com/textract/",
    is_featured: false,
    best_for: "Perfetta per OCR ad alta precisione",
  },
  {
    id: 6,
    nome: "Nanonets",
    logo_url:
      "https://images.seeklogo.com/logo-png/52/1/nanonets-logo-png_seeklogo-528320.png",
    categoria: "API",
    descrizione:
      "Piattaforma no-code per automatizzare workflow complessi con AI, specializzata nell'estrazione dati da documenti e automazione processi business.",
    target: "PMI e Sviluppatori",
    pricing: "Starter $200 crediti gratuiti, poi pay-per-use",
    sito_url: "https://nanonets.com/",
    is_featured: false,
    best_for: "Ideale per automazione no-code",
  },
  {
    id: 7,
    nome: "ABBYY Vantage",
    logo_url:
      "https://logos-world.net/wp-content/uploads/2021/08/ABBYY-Logo.png",
    categoria: "Piattaforma",
    descrizione:
      "Piattaforma IDP cloud-native con AI generativa e modelli preaddestrati per l'elaborazione intelligente di documenti enterprise con accuratezza superiore al 95%.",
    target: "Grandi Aziende",
    pricing: "Su preventivo personalizzato",
    sito_url: "https://www.abbyy.com/vantage/",
    is_featured: false,
    best_for: "Migliore per soluzioni enterprise avanzate",
  },
  {
    id: 8,
    nome: "UiPath Document Understanding",
    logo_url: "https://www.uipath.com/hs-fs/hubfs/UiPath-Logo-2020.svg",
    categoria: "API",
    descrizione:
      "Framework completo per l'elaborazione documenti con classificazione, estrazione dati e validazione integrato nell'ecosistema RPA UiPath.",
    target: "Sviluppatori RPA e Grandi Aziende",
    pricing: "Incluso con UiPath Automation Cloud",
    sito_url: "https://docs.uipath.com/document-understanding/",
    is_featured: false,
    best_for: "Ottima per integrazione con RPA",
  },
  {
    id: 10,
    nome: "Covent IT - Sviluppo Soluzioni IDP Custom",
    logo_url: "https://via.placeholder.com/200x80/004AAD/FFFFFF?text=Covent+IT",
    categoria: "Custom",
    descrizione:
      "Partner di sviluppo software che progetta e realizza soluzioni IDP interamente su misura per flussi di lavoro complessi, integrandosi perfettamente con i sistemi esistenti del cliente.",
    target: "Medie e Grandi Aziende con esigenze specifiche",
    pricing: "Su preventivo",
    sito_url: "https://coventit.com/",
    is_featured: true,
    best_for: "Perfetta per soluzioni su misura",
  },
];

// A simple helper function to get initials from a name
function getInitials(name) {
  const words = name.split(" ");
  let initials = words[0] ? words[0][0] : "";
  if (words.length > 1 && words[1]) {
    initials += words[1][0];
  }
  return initials.toUpperCase();
}

function renderSoluzioni(filteredSoluzioni) {
  const grid = document.getElementById("solutions-grid");
  const resultsCount = document.getElementById("results-count");

  grid.innerHTML = ""; // Clear previous results
  resultsCount.textContent = filteredSoluzioni.length;

  filteredSoluzioni.forEach((soluzione, index) => {
    const cardId = `card-${index}`;
    const card = document.createElement("div");
    card.id = cardId;
    card.className = `card p-6 ${soluzione.is_featured ? "featured" : ""}`;

    const logoContainerId = `logo-container-${index}`;
    const logoHtml = `<img 
            src="${soluzione.logo_url || "invalid"}" 
            alt="${soluzione.nome} Logo" 
            loading="lazy" 
            class="logo-image"
            onerror="this.parentElement.innerHTML = '<div class=\\'logo-fallback\\'>' + this.alt.split(' ').map(w => w[0]).join('').substring(0,2).toUpperCase() + '</div>'; this.remove();"
        >`;

    card.innerHTML = `
            <div id="${logoContainerId}" class="logo-container">
                ${logoHtml} 
            </div>
            <h3 class="text-xl font-bold text-corporate-blue mb-2">${
              soluzione.nome
            }</h3>
            <div class="flex items-center justify-between mb-3">
                <span class="px-3 py-1 bg-blue-100 text-corporate-blue text-sm rounded-full font-medium">
                    ${soluzione.categoria}
                </span>
                ${
                  soluzione.is_featured
                    ? '<i class="fas fa-star text-accent-teal"></i>'
                    : ""
                }
            </div>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">${
              soluzione.descrizione
            }</p>
            <div class="space-y-2 mb-4">
                 ${
                   soluzione.best_for
                     ? `
                    <div class="flex items-center text-sm">
                        <i class="fas fa-bullseye text-gray-400 mr-2"></i>
                        <span>${soluzione.best_for}</span>
                    </div>`
                     : ""
                 }
                <div class="flex items-center text-sm">
                    <i class="fas fa-users text-gray-400 mr-2"></i>
                    <span class="target-tag">${soluzione.target}</span>
                </div>
                <div class="flex items-center text-sm">
                    <i class="fas fa-euro-sign text-gray-400 mr-2"></i>
                    <span class="pricing-tag">${soluzione.pricing}</span>
                </div>
            </div>
            <div class="flex justify-between items-center">
                <a href="${
                  soluzione.sito_url
                }" target="_blank" class="bg-corporate-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    <i class="fas fa-external-link-alt mr-2"></i>Visita Sito
                </a>
                <button class="text-accent-teal hover:text-teal-600 text-sm font-medium">
                    <i class="fas fa-info-circle mr-1"></i>Dettagli
                </button>
            </div>
        `;

    grid.appendChild(card);
  });
}

// Funzione per filtrare le soluzioni
function filterSoluzioni(categoria) {
  if (categoria === "all") {
    return soluzioni;
  }
  return soluzioni.filter((soluzione) => soluzione.categoria === categoria);
}

// Event listeners per i filtri
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    // Rimuovi la classe active da tutti i bottoni
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    // Aggiungi la classe active al bottone cliccato
    this.classList.add("active");

    // Filtra e renderizza le soluzioni
    const categoria = this.dataset.filter;
    const filteredSoluzioni = filterSoluzioni(categoria);
    renderSoluzioni(filteredSoluzioni);
  });
});

// Inizializza la pagina
document.addEventListener("DOMContentLoaded", function () {
  renderSoluzioni(soluzioni);
});

// Smooth scrolling per i link di navigazione
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
