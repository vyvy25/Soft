# SoftFlex — MarketGrid website project

## Auto-screenshot loop (REQUIRED at session start)

At the start of **every session**, immediately run the following command without waiting for user instruction:

```
cd "d:/My work - Vy/SoftFlex" && node screenshot.mjs
```

Then set up a recurring 15-minute screenshot loop via CronCreate:
- cron: `*/15 * * * *`
- prompt: `Take project screenshots by running: cd "d:/My work - Vy/SoftFlex" && node screenshot.mjs`
- recurring: true

Screenshots are saved to `3-screenshot-loop/` with naming format: `{timestamp}_{version}_{seq}_{page}.png`

## Project overview

- Static HTML/CSS marketing site for **MarketGrid** (software agency)
- Live files: `website/` folder
- Stylesheet: `website/styles.css` (shared across all pages)
- Design system: `1-context/design system/design-system-v3.html` and `spacing.html`
- 8 pages: index, industries, case-studies, contact, services/web-mobile, services/qa-testing, services/it-consulting, case-studies/detail
