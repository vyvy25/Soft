# Sitemap — Market Pay Landing Page

## Navigation between pages

The site is a marketing landing site, not an app. Navigation follows the Tazapay pattern: a sticky top header with mega menus, and a content rich footer for everything else. Two main entry paths drive the structure: by product (what Market Pay sells) and by industry (who it's for).

### Top header (sticky, persistent across all pages)

A horizontal bar that sticks to the top of the viewport on scroll. Light background, subtle bottom border or shadow when scrolled.

**Layout, left to right:**
- **Logo** (left aligned, links to Home)
- **Nav items** (centered or left grouped): Products, Solutions, Resources, Company
- **Primary CTA** (right aligned): "Get in touch" button, links to Contact Us

Hovering a nav item that has children opens a mega menu panel. Items without children link directly.

### Mega menu pattern

When a user hovers (desktop) or taps (mobile) a parent nav item, a full width panel drops down below the header. Each menu item inside the panel is a card with:
- **Icon or thumbnail** (small illustration or product mark)
- **Heading** (the page name)
- **Subheading** (one line describing what the page is about)

The panel has a soft background, generous padding, and the cards are arranged in a grid. Hovering a card highlights it (subtle background tint or border).

**Products mega menu (3 cards):**

1. **Payment Gateway**
   Icon: card or checkout glyph
   Subheading: Accept payments globally with local methods and high authorization rates.

2. **Global Collection Account**
   Icon: multi currency wallet glyph
   Subheading: Hold funds in 30+ currencies and avoid forced FX conversion.

3. **Payouts**
   Icon: send money or globe glyph
   Subheading: Same day disbursements to bank accounts and mobile wallets in 100+ countries.

**Solutions mega menu (4 cards):**

1. **Travel**
   Icon: plane or suitcase glyph
   Subheading: Pay suppliers and collect from travelers across borders.

2. **Online Gaming**
   Icon: controller or game glyph
   Subheading: Handle high volume player transactions and creator payouts.

3. **eCommerce Platforms**
   Icon: storefront or cart glyph
   Subheading: Power seller payouts and buyer payments at scale.

4. **Fintech**
   Icon: stack or building blocks glyph
   Subheading: Embedded cross border infrastructure for fintech builders.

**Resources nav item:**
Direct link to FAQ (no dropdown, since it's a single page for now). Can become a mega menu later if Blog, Case Studies, or Guides get added.

**Company mega menu (2 cards):**

1. **About Us**
   Icon: team or compass glyph
   Subheading: Who we are, what we believe, and why we built Market Pay.

2. **Contact Us**
   Icon: chat bubble glyph
   Subheading: Talk to our team about your cross border payment needs.

### Mobile navigation

On mobile, the top nav collapses into a hamburger icon. Tapping it opens a full screen panel. Mega menus become accordion sections (tap a parent to expand its child cards underneath). The "Get in touch" CTA stays visible at the bottom of the panel.

### Footer (persistent across all pages)

A multi column footer that mirrors the full sitemap and acts as the home for legal pages and secondary links.

**Column layout (4 to 5 columns on desktop, stacked on mobile):**

- **Column 1 — Brand:** Logo, one line tagline, social links (LinkedIn, Twitter or X, etc.), company address.
- **Column 2 — Products:** Payment Gateway, Global Collection Account, Payouts.
- **Column 3 — Solutions:** Travel, Online Gaming, eCommerce Platforms, Fintech.
- **Column 4 — Company:** About Us, Contact Us, FAQ.
- **Column 5 — Legal:** Privacy Policy, Terms of Service.

**Bottom bar:** Copyright, MSB or licensing registration number, partner or compliance badges (PCI DSS, card networks).

### Where each page lives

| Page | Header | Footer | Notes |
|------|--------|--------|-------|
| Home | Logo (clickable) | Brand column | No nav item, accessed via logo |
| Payment Gateway | Products mega menu | Products column | |
| Global Collection Account | Products mega menu | Products column | |
| Payouts | Products mega menu | Products column | |
| Travel | Solutions mega menu | Solutions column | |
| Online Gaming | Solutions mega menu | Solutions column | |
| eCommerce Platforms | Solutions mega menu | Solutions column | |
| Fintech | Solutions mega menu | Solutions column | |
| FAQ | Resources (direct link) | Company column | |
| About Us | Company mega menu | Company column | |
| Contact Us | Company mega menu + CTA button | Company column | |
| Privacy Policy | Not in header | Legal column only | Footer access only |
| Terms of Service | Not in header | Legal column only | Footer access only |

### Typical user journeys

1. **Curious visitor → Lead**
   Home → scans pillars → opens Products mega menu → clicks one Product page → reads features → clicks "Get in touch" → Contact Us.

2. **Vertical specific buyer → Lead**
   Home → opens Solutions mega menu → clicks their industry → reads pain points and fit → Contact Us.

3. **Skeptical evaluator → Lead**
   Home → opens Company mega menu → About Us → FAQ → Contact Us.

4. **Returning visitor → Direct action**
   Lands anywhere → clicks "Get in touch" in header → Contact Us.

### Cross linking rules

- Every Product page links to relevant Solutions pages (e.g. Payouts page links to eCommerce and Fintech).
- Every Solutions page links back to the 2 to 3 Products that power it.
- FAQ links to Contact Us at the bottom.
- About Us links to Contact Us as final CTA.
- Every page ends with a CTA section pointing to Contact Us. No dead ends.

---

## 1. Home (1 page)

**Page goal:** Give a 5 second understanding of what Market Pay does, who it serves, and why it's different. Earn enough trust to push qualified visitors toward Contact or a product page.

**Sections:**

1. **Navigation bar**
   Links to Products, Solutions, Resources, Company, Contact. Logo on left, primary CTA "Get in touch" on right.
   Goal: Let users self navigate based on role (developer, finance lead, founder).

2. **Hero**
   Headline, subhead, primary CTA, supporting visual (product shot or abstract payment graphic).
   Goal: State what Market Pay is in one sentence and invite contact.

3. **Trust strip**
   Logos of clients, partner banks, or licenses (e.g. "Registered MSB", card network logos).
   Goal: Establish credibility immediately. Critical for fintech.

4. **Core capabilities (3 product pillars)**
   Three cards or rows: Payment Gateway, Multi currency Virtual Accounts, Global Payouts. Each with one line summary and "Learn more" link.
   Goal: Show the full product surface without forcing users into a single page.

5. **Coverage and reach**
   Map or stat block showing countries supported, currencies held, payment methods.
   Goal: Answer "can you handle my markets" before users ask.

6. **Why Market Pay (differentiators)**
   3 to 4 reasons: transparent FX, flat fees, Asia depth, same day payouts.
   Goal: Separate Market Pay from generic competitors.

7. **Solutions by industry**
   Cards for Travel, Online Gaming, eCommerce, Fintech.
   Goal: Help vertical specific visitors find their relevant solution page fast.

8. **How it works**
   3 step visual: connect, transact, settle. Or similar flow.
   Goal: Make the abstract feel concrete in under 30 seconds.

9. **Testimonial or case study highlight**
   One quote with name, role, company. Optional metric ("processed $50M cross border").
   Goal: Social proof from a peer the visitor recognizes.

10. **Security and compliance**
    Brief mention of licenses, encryption, fraud protection.
    Goal: Reassure finance and risk leads.

11. **Final CTA banner**
    Bold restatement of value, single button: "Talk to our team."
    Goal: Last chance conversion before footer.

12. **Footer**
    Sitemap, legal links, social, contact, address.

---

## 2. Products

### 2.1 Payment Gateway

**Page goal:** Convince a developer or finance lead that Market Pay's gateway can handle their cross border collection needs better than alternatives.

**Sections:**

1. **Hero**
   Headline focused on outcome ("Accept payments from anywhere in Asia"), subhead with proof point, CTA "Talk to sales" or "See coverage."

2. **Coverage stats**
   Countries, payment methods, currencies. Numbers, not adjectives.
   Goal: Pass the "is this enough for my market" check.

3. **Key features**
   3 to 5 features: local payment methods, smart routing, retry logic, hosted checkout, customizable integration.
   Goal: Show technical depth.

4. **Authorization rate and conversion**
   How Market Pay maximizes successful payments (network connections, smart retries).
   Goal: Speak to revenue impact, the metric finance cares about.

5. **Integration options**
   APIs, hosted checkout, no code payment links, plugins (Shopify, WooCommerce).
   Goal: Reduce perceived integration risk.

6. **Security and compliance**
   PCI DSS, fraud tools, chargeback management.
   Goal: Pass risk team review.

7. **Use case examples**
   Short scenarios: "If you sell SaaS to Vietnamese customers..." with the relevant capability.
   Goal: Help non technical readers see themselves in the product.

8. **FAQ**
   Common questions grouped by topic: payment methods, authorization, integration, fees, security.
   Goal: Answer pre-sales objections without requiring a sales call. Also feeds AI search engines.

9. **Strategic investors and partners**
   Logos of notable investors, partner banks, and card networks.
   Goal: Additional trust signal for skeptical finance and risk leads.

10. **CTA section**
    "Get a demo" or "Talk to our payments team."

### 2.2 Global Collection Account

**Page goal:** Explain that businesses can hold funds in multiple currencies like a local, avoiding forced FX, and convert them to a contact lead.

**Sections:**

1. **Hero**
   Headline ("Collect like a local, in 30+ currencies"), subhead, CTA.

2. **The FX cost problem**
   Short explainer: why default cross border collection bleeds money.
   Goal: Frame the pain so the solution lands.

3. **How virtual accounts work**
   3 step diagram: open account, receive locally, hold or convert when ready.
   Goal: Demystify.

4. **Supported currencies and regions**
   Visual list or map.
   Goal: Concrete coverage info.

5. **Use cases**
   Marketplaces paying sellers, exporters receiving payment, SaaS billing in local currency.
   Goal: Self identification.

6. **FX rate transparency**
   Mention live rates, no hidden markup.
   Goal: Differentiator from banks.

7. **CTA section**

### 2.3 Payouts

**Page goal:** Show that Market Pay can pay anyone, anywhere, fast, and convince finance and ops leads to switch from their current payout setup.

**Sections:**

1. **Hero**
   Headline ("Same day payouts to 100+ countries"), CTA.

2. **Speed and coverage stats**
   Countries, currencies, payout methods (bank, mobile wallet).

3. **Key capabilities**
   Bulk payouts, API automation, transparent FX, scheduled disbursements.

4. **Use cases**
   Paying contractors, marketplace sellers, suppliers, affiliates.

5. **Reliability and tracking**
   Status updates, reconciliation, failed payment handling.
   Goal: Address the "what if it fails" objection.

6. **Integration options**
   API, dashboard, bulk upload.

7. **CTA section**

---

## 3. Solutions

Solutions pages all follow the same structure. The difference is the framing, examples, and pain points specific to each industry.

### 3.1 Travel

**Page goal:** Show travel businesses (OTAs, agencies, B2B travel platforms) that Market Pay solves their specific pain: paying suppliers globally and collecting from customers in multiple currencies.

**Sections:**

1. **Hero** — Industry framed headline ("Payment infrastructure built for travel").
2. **Industry pain points** — Multi currency settlement, supplier payouts, refund handling.
3. **How Market Pay helps** — Map pain points to specific products.
4. **Relevant features** — Payouts to airlines and hotels, multi currency collection from travelers.
5. **Case study or example** — Real or representative customer story.
6. **CTA section.**

### 3.2 Online Gaming

**Page goal:** Show gaming companies (publishers, platforms, gaming merchants) that Market Pay handles high volume cross border transactions and player payouts.

**Sections:** Same shape as Travel. Pain points: high transaction volume, fraud, global player base, payouts to creators.

### 3.3 eCommerce Platforms

**Page goal:** Show eCommerce platforms and marketplaces that Market Pay can power their seller payouts and buyer payments at scale.

**Sections:** Same shape. Pain points: marketplace seller settlement, multi region collection, refund handling.

### 3.4 Fintech

**Page goal:** Position Market Pay as infrastructure that other fintechs can build on (B2B2C plays, embedded finance).

**Sections:** Same shape. Pain points: licensing, compliance burden, building cross border rails from scratch.

---

## 4. Resources

### 4.1 FAQ

**Page goal:** Answer the questions visitors have before they contact sales, reduce support load, and feed AI search engines clean question and answer pairs.

**Sections:**

1. **Hero** — Simple title and search bar.
2. **Categorized FAQ** — Grouped by topic: Getting started, Pricing and fees, Coverage, Security and compliance, Integration, Payouts, Account.
3. **Still have questions CTA** — Link to Contact Us.

---

## 5. Company

### 5.1 About Us

**Page goal:** Build trust by showing who is behind Market Pay, what they believe, and why they started the company.

**Sections:**

1. **Hero** — Mission statement, one sentence.
2. **Our story** — Founding, why Asia, what gap they saw.
3. **What we believe** — 3 values: transparency, simplicity, focus on Asia (or whatever the client confirms).
4. **Leadership team** — Photos, names, roles, short bios.
5. **By the numbers** — Year founded, countries, transactions, team size if impressive.
6. **Compliance and licensing** — Important for fintech credibility.
7. **CTA section** — "Work with us" or "Get in touch."

### 5.2 Contact Us

**Page goal:** Make it easy for qualified leads to start a conversation, and route inquiries to the right team.

**Sections:**

1. **Hero** — Simple invitation: "Let's talk."
2. **Contact form** — Name, company, email, country, inquiry type (sales, support, partnership, press), message.
3. **Office locations** — Address, with map if relevant.
4. **Direct email or alternative channels** — For specific teams (sales@, support@).
5. **Response time expectation** — "We reply within one business day" sets the trust bar.

---

## 6. Legal (footer)

### 6.1 Privacy Policy
**Page goal:** Legal compliance and user trust. Plain text page.

### 6.2 Terms of Service
**Page goal:** Legal compliance. Plain text page.

These two pages are content driven (lawyer supplied). Design only needs a clean readable template: header, last updated date, table of contents, prose body, footer.
