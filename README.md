# Çarlı İnşaat Yapı Market — Corporate Web Platform

**Çarlı İnşaat Yapı Market** is a responsive corporate web platform and digital product/service catalog built for a construction materials and contracting company based in Gaziantep, Türkiye.

- **Live Website:** [https://carliinsaatyapimarkettt.vercel.app](https://carliinsaatyapimarkettt.vercel.app)

---

## Overview

The platform presents the company's construction material inventory (ready-mixed concrete, aggregates, cement/rebar, briquettes, plaster, paint, insulation) and turnkey renovation services, providing customers with direct WhatsApp order/quote initiation and mobile-friendly navigation.

---

## Features

- **Product & Service Catalog:** Categorized showcase of construction materials and contracting services with quick inquiry triggers.
- **Direct WhatsApp & Phone Integration:** Pre-filled WhatsApp inquiry links (`wa.me`) and click-to-call actions for rapid customer quotes.
- **Responsive Mobile-First Layout:** Custom CSS3 grid/flexbox layout optimized for smartphones, tablets, and desktop screens.
- **SEO & Social Metadata:** Structured Open Graph (`og:*`), Twitter Cards, canonical URLs, and `robots.txt` configuration.
- **Legal & Compliance Pages:** Dedicated Privacy Policy (`privacy.html`) and Terms of Service (`terms.html`) pages.

---

## Tech Stack

- **Markup & Styling:** Semantic HTML5, Vanilla CSS3 (custom properties, responsive grid)
- **Interactivity:** Vanilla JavaScript (`script.js` — navigation, smooth scrolling, and interactive UI handlers)
- **Deployment:** Vercel (`vercel.json`)

---

## Project Structure

```text
Carli-Insaat-Yapi-Market/
├── image/                  # Product, brand logo, and hero imagery
├── index.html              # Main landing page, product catalog & contact section
├── privacy.html            # Privacy policy page
├── terms.html              # Terms of use page
├── styles.css              # Responsive stylesheet and design tokens
├── script.js               # Client-side interactive behaviors
├── robots.txt              # Search engine crawler rules
└── vercel.json             # Vercel routing configuration
```

---

## Running Locally

Because the project has zero external build dependencies, it can be served with any static HTTP server:

```bash
# Clone the repository
git clone https://github.com/mert-carli/Carli-Insaat-Yapi-Market.git
cd Carli-Insaat-Yapi-Market

# Serve locally using Python
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

---

## Author

**Mevlana Mert Çarlı**  
- GitHub: [@mert-carli](https://github.com/mert-carli)  
- Portfolio: [mert-carli-cvu9.vercel.app](https://mert-carli-cvu9.vercel.app)
