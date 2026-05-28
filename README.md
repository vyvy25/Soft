# MarketGrid LLC — Marketing Website

Marketing website for **MarketGrid**, a US-incorporated IT outsourcing agency delivering full-cycle web & mobile development, QA testing, and IT consulting for growth-stage companies.

## Tech stack

- Plain HTML, CSS, JavaScript (no framework)
- Custom design system (`styles.css`)
- Google Fonts — Barlow
- Node.js local dev server (`serve.mjs`)

## Run locally

**Requirement:** Node.js installed.

```bash
node serve.mjs
```

Then open http://localhost:3000 in your browser.

## Project structure

```
website/
├── index.html                  # Home
├── industries.html             # Industries
├── case-studies.html           # Case Studies
├── contact.html                # Contact
├── styles.css                  # Shared stylesheet
├── services/
│   ├── web-mobile.html         # Web & Mobile App Development
│   ├── qa-testing.html         # QA & Testing
│   └── it-consulting.html      # IT Consulting
├── case-studies/
│   └── detail.html             # Case Study Detail (JS-rendered)
└── 6-assets/
    ├── logo/                   # Logo files
    └── img/                    # Images and card thumbnails
```

## Pages

| Page | URL |
|---|---|
| Home | `/` |
| Industries | `/industries.html` |
| Case Studies | `/case-studies.html` |
| Case Study Detail | `/case-studies/detail.html?id={id}` |
| Web & Mobile Dev | `/services/web-mobile.html` |
| QA & Testing | `/services/qa-testing.html` |
| IT Consulting | `/services/it-consulting.html` |
| Contact | `/contact.html` |
