/* =========================================================
   JAVASCRIPT INTERACTIVO - DSI Y IA
   Multi-idioma, Calculadora 50/20/30 e Visor Modal de Láminas
   ========================================================= */

const dictionary = {
  es: {
    heroTitle: "Inteligencia Artificial y Doctrina Social para el Desarrollo",
    heroSub: "El Renacimiento Económico y Social en la Era 4.0",
    btnExplore: "Explorar Modelo 70/30",
    btnQR: "Ver Códigos QR de Adquisición",
    secSchemeTitle: "El Esquema Dual 70/30 con Cupo Preferencial del 20%",
    secSchemeSub: "Modelo matemático de soberanía productiva y justicia distributiva local",
    calcTitle: "Simulador de Precios e Impacto Económico",
    lblCost: "Costo de Producción + Mantenimiento ($/un):",
    lblMarket: "Precio de Mercado Abierto ($/un):",
    lblUnits: "Producción Total Mensual (Unidades):",
    resSocial: "Precio Sector Social (50% Stock):",
    resInvestor: "Precio Preferencial Inversor (20% Stock):",
    resMarket: "Precio Mercado Abierto (30% Stock):",
    resSavings: "Ahorro Ciudadano e Inversor Liberado:",
    resMargin: "Superávit Operating del Fideicomiso:",
    galleryTitle: "Galería de Láminas e Infografías Conceptual",
    gallerySub: "Haz clic en cualquier lámina para ampliarla en alta resolución HD",
    qrTitle: "Códigos QR Directos de Adquisición en Amazon",
    qrSub: "Obtén el libro en formato electrónico Kindle o edición impresa"
  },
  en: {
    heroTitle: "Artificial Intelligence & Social Doctrine for Development",
    heroSub: "The Economic and Social Renaissance in the 4.0 Era",
    btnExplore: "Explore 70/30 Model",
    btnQR: "Purchase QR Codes",
    secSchemeTitle: "The Dual 70/30 Scheme with 20% Investor Preference",
    secSchemeSub: "Mathematical model of productive sovereignty and local distributive justice",
    calcTitle: "Price & Economic Impact Simulator",
    lblCost: "Production + Maintenance Cost ($/unit):",
    lblMarket: "Open Market Price ($/unit):",
    lblUnits: "Monthly Total Output (Units):",
    resSocial: "Social Sector Price (50% Stock):",
    resInvestor: "Investor Preferential Price (20% Stock):",
    resMarket: "Open Market Price (30% Stock):",
    resSavings: "Released Community & Investor Savings:",
    resMargin: "Trust Fund Operating Surplus:",
    galleryTitle: "Conceptual Infographic & Plates Gallery",
    gallerySub: "Click on any plate to expand in HD full-resolution modal",
    qrTitle: "Direct Amazon Acquisition QR Codes",
    qrSub: "Get the book in Kindle e-book or paperback edition"
  },
  it: {
    heroTitle: "Intelligenza Artificiale e Dottrina Sociale per lo Sviluppo",
    heroSub: "Il Rinascimento Economico e Sociale nell'Era 4.0",
    btnExplore: "Esplora Modello 70/30",
    btnQR: "Codici QR Acquisto",
    secSchemeTitle: "Lo Schema Duale 70/30 con Quota Preferenziale 20%",
    secSchemeSub: "Modello matematico di sovranità produttiva e giustizia distributiva locale",
    calcTitle: "Simulatore di Prezzi e Impatto Economico",
    lblCost: "Costo Produzione + Manutenzione ($/unità):",
    lblMarket: "Prezzo Mercato Aperto ($/unità):",
    lblUnits: "Produzione Totale Mensile (Unità):",
    resSocial: "Prezzo Settore Sociale (50% Stock):",
    resInvestor: "Prezzo Preferenziale Investitore (20% Stock):",
    resMarket: "Prezzo Mercato Aperto (30% Stock):",
    resSavings: "Risparmio Cittadino e Investitori Liberato:",
    resMargin: "Surplus Operativo Fondo Fiduciario:",
    galleryTitle: "Galleria d'Infografiche e Tavole Concettuali",
    gallerySub: "Clicca su qualsiasi tavola per ingrandirla ad alta risoluzione HD",
    qrTitle: "Codici QR Diretti per l'Acquisto su Amazon",
    qrSub: "Ottieni il libro in formato Kindle o cartaceo"
  },
  de: {
    heroTitle: "Künstliche Intelligenz und Katholische Soziallehre für Entwicklung",
    heroSub: "Die wirtschaftliche und soziale Renaissance im Zeitalter 4.0",
    btnExplore: "70/30-Modell erkunden",
    btnQR: "QR-Codes kaufen",
    secSchemeTitle: "Das Duale 70/30-Schema mit 20% Investorenvorzug",
    secSchemeSub: "Mathematisches Modell lokaler produktiver Souveränität",
    calcTitle: "Preis- und Wirtschaftsauswirkungssimulator",
    lblCost: "Produktions- + Wartungskosten ($/Stk):",
    lblMarket: "Offener Marktpreis ($/Stk):",
    lblUnits: "Monatliche Gesamtproduktion (Stück):",
    resSocial: "Preis Sozialer Sektor (50% Stock):",
    resInvestor: "Vorzugspreis Investor (20% Stock):",
    resMarket: "Offener Marktpreis (30% Stock):",
    resSavings: "Freigesetzte Einsparungen Bürger & Investoren:",
    resMargin: "Betriebsüberschuss des Treuhandfonds:",
    galleryTitle: "Galerie von Infografiken und Konzepttafeln",
    gallerySub: "Klicken Sie auf eine Tafel, um sie in hoher HD-Auflösung zu vergrößern",
    qrTitle: "Direkte QR-Codes für den Kauf bei Amazon",
    qrSub: "Holen Sie sich das Buch im Kindle-E-Book- oder Taschenbuchformat"
  },
  ru: {
    heroTitle: "Искусственный Интеллект и Социальное Учение для Развития",
    heroSub: "Экономическое и социальное возрождение в эпоху 4.0",
    btnExplore: "Изучить модель 70/30",
    btnQR: "QR-коды покупки",
    secSchemeTitle: "Двойная схема 70/30 с 20% преференциальной долей инвестора",
    secSchemeSub: "Математическая модель местного продуктивного суверенитета",
    calcTitle: "Симулятор цен и экономического эффекта",
    lblCost: "Затраты на производство + обслуживание ($/ед):",
    lblMarket: "Цена открытого рынка ($/ед):",
    lblUnits: "Ежемесячный объем производства (ед):",
    resSocial: "Цена социального сектора (50% запаса):",
    resInvestor: "Льготная цена инвестора (20% запаса):",
    resMarket: "Цена открытого рынка (30% запаса):",
    resSavings: "Высвобожденная экономия граждан и инвесторов:",
    resMargin: "Операционный профицит трастового фонда:",
    galleryTitle: "Галерея инфографики и концептуальных иллюстраций",
    gallerySub: "Нажмите на любую иллюстрацию для полноэкранного просмотра в HD",
    qrTitle: "Прямые QR-коды для покупки на Amazon",
    qrSub: "Получите книгу в формате e-book Kindle или в бумажном переплете"
  },
  zh: {
    heroTitle: "人工智能与天主教社会思想促进发展",
    heroSub: "4.0时代的经济与社会复兴",
    btnExplore: "探索 70/30 模式",
    btnQR: "购买二维码",
    secSchemeTitle: "包含 20% 投资者优先份额的 70/30 双重模式",
    secSchemeSub: "本地生产主权与分配正义的数学模型",
    calcTitle: "价格与经济影响模拟器",
    lblCost: "生产与维护成本 ($/件):",
    lblMarket: "公开市场价格 ($/件):",
    lblUnits: "每月总产量 (件):",
    resSocial: "社会部门价格 (50% 份额):",
    resInvestor: "投资者优惠价格 (20% 份额):",
    resMarket: "公开市场价格 (30% 份额):",
    resSavings: "释放的公民与投资者节省资金:",
    resMargin: "信托基金运营盈余:",
    galleryTitle: "概念图解与图表画廊",
    gallerySub: "点击任意图表即可在HD高清弹窗中放大查看",
    qrTitle: "亚马逊直接购买二维码",
    qrSub: "获取 Kindle 电子书或纸质版图书"
  }
};

let currentLang = 'es';

function changeLanguage(lang) {
  currentLang = lang;
  const t = dictionary[lang] || dictionary.es;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });
  
  calculateValues();
}

function calculateValues() {
  const cost = parseFloat(document.getElementById('inputCost').value) || 100;
  const marketPrice = parseFloat(document.getElementById('inputMarket').value) || 200;
  const units = parseFloat(document.getElementById('inputUnits').value) || 10000;

  // Formula exactness:
  // Social price = Cost + 10%
  const socialPrice = cost * 1.10;
  
  // Investor preferential price = (Social + Market) / 2
  const investorPrice = (socialPrice + marketPrice) / 2;

  const socialUnits = units * 0.50;
  const investorUnits = units * 0.20;
  const marketUnits = units * 0.30;

  // Released savings vs open market
  const communitySavings = (marketPrice - socialPrice) * socialUnits;
  const investorSavings = (marketPrice - investorPrice) * investorUnits;
  const totalSavings = communitySavings + investorSavings;

  // Total income vs total cost
  const totalIncome = (socialPrice * socialUnits) + (investorPrice * investorUnits) + (marketPrice * marketUnits);
  const totalCost = cost * units;
  const operatingSurplus = totalIncome - totalCost;

  document.getElementById('resSocialPrice').textContent = `$${socialPrice.toFixed(2)}`;
  document.getElementById('resInvestorPrice').textContent = `$${investorPrice.toFixed(2)}`;
  document.getElementById('resMarketPrice').textContent = `$${marketPrice.toFixed(2)}`;
  document.getElementById('resSavingsTotal').textContent = `$${totalSavings.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  document.getElementById('resMarginTotal').textContent = `$${operatingSurplus.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

function openModal(imgSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  modalImg.src = imgSrc;
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
  calculateValues();
  
  document.getElementById('inputCost').addEventListener('input', calculateValues);
  document.getElementById('inputMarket').addEventListener('input', calculateValues);
  document.getElementById('inputUnits').addEventListener('input', calculateValues);

  document.getElementById('imageModal').addEventListener('click', (e) => {
    if (e.target.id === 'imageModal' || e.target.classList.contains('modal-close')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
