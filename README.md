# Centuries Mutual — Corporate Web Platform

**Repository:** Private — Authorized personnel only  

Centuries Mutual is a **Next.js** web application supporting the firm’s digital presence: community brokerage positioning, structured product education, trust-centric experiences, document workflows, and client-facing tooling.  

This README is maintained for **technical due diligence**, **vendor onboarding**, and **internal governance** (“bank-ready”: accurate, sober, audit-friendly—not marketing copy).

---

## 1. Executive summary

| Item | Detail |
|------|--------|
| **Purpose** | Public and authenticated web experiences for Centuries Mutual; marketing, disclosures, integrations, and operational UI |
| **Runtime** | Node.js (LTS recommended), React 18, Next.js 14 App Router |
| **Primary hosting model** | Static + server-rendered routes; optimized for **[Vercel](https://vercel.com)**-style deployment with environment-based configuration |

---

## 2. Capability overview (high level)

- **Marketing & informational pages:** Services, landlord/tenant/host/trust narratives, downloads, equity and learning content  
- **Identity & sessions:** Authentication patterns via **Supabase Auth** (`@supabase/supabase-js`); alternate enterprise identity options may be layered per environment (`@auth0/nextjs-auth0` present where applicable)  
- **Operational UI:** Claims, disputes, enrollment, security narratives, audits, utilities, messaging, AI/technology exposition  
- **Documents & signatures:** Digital document flows with PDF generation tooling (`jspdf`, `pdfkit`) and signing components (`signature_pad`, `react-signature-canvas`)  
- **Search:** Meilisearch client available where search-backed features are deployed  
- **Asset storage / content:** Box SDK (`box-node-sdk`) supports enterprise content workflows where configured  

> **Disclaimer:** Capability descriptions describe **technical affordances** in this codebase. Regulatory status, licensing, and product approvals are governed by Centuries Mutual policies and applicable law—not by this README.

---

## 3. Technology stack

| Layer | Technology |
|-------|-------------|
| **Framework** | Next.js 14, React 18 |
| **Styling / UI** | Bootstrap 5, Bootstrap Icons, Tailwind-compatible utilities (`tailwind.config.js`), Framer Motion |
| **Auth / data** | Supabase (`@supabase/supabase-js`); Auth0 SDK where enabled |
| **Analytics** | Vercel Analytics (`@vercel/analytics`) |
| **3D / visualization** | Three.js, React Three Fiber, Drei (select experiences) |

---

## 4. Prerequisites

- **Node.js** 18.x or 20.x (LTS)  
- **npm** (bundled with Node)  

Optional integrations require separate accounts and secrets (Supabase project, OAuth/Auth0 tenant, Box, Meilisearch, etc.) provisioned according to enterprise policy.

---

## 5. Local development

Clone the repository (authorized credentials only):

```bash
git clone https://github.com/centuriesmutual/CenturiesMutual.git
cd CenturiesMutual
npm install
```

### Environment variables

Secrets **must never** be committed. Create `.env.local` (ignored by Git) for local development:

| Variable | Role |
|---------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon (public) key for browser-safe operations |

Additional variables apply per feature (Auth0, Box, Meilisearch, etc.); coordinate with engineering for the authoritative checklist for your deployment environment.

### Commands

```bash
npm run dev      # Development server — default script uses port 3030 per package.json
npm run build    # Production build verification
npm run start    # Production server (after build)
npm run lint     # ESLint — Next.js
```

Resolve `npm run build` warnings before tagging releases promoted to staging or production.

---

## 6. Repository layout (abbreviated)

```
app/              # Routes (App Router), layouts, metadata
components/       # React components (UI sections, dashboards, Navbar, Footer, etc.)
lib/              # Shared utilities (e.g. Supabase client)
public/           # Static assets (images, favicon)
```

---

## 7. Security & compliance posture (documentation)

This section documents **engineering expectations** consistent with regulated environments:

| Topic | Guidance |
|--------|----------|
| **Secrets** | Store only in environment variables or approved secret managers |
| **Transport** | Enforce HTTPS in production; TLS termination at hosting edge |
| **Dependencies** | Run `npm audit` and remediation on a recurring cadence; pin critical upgrades outside patch releases |
| **PII / payments** | No cardholder data (PCI) belongs in frontend env vars or this repo |
| **Access** | Principle of least privilege for Git ownership, CI keys, Supabase RBAC |

---

## 8. Operational ownership

| Role | Responsibility |
|------|----------------|
| **Product / business** | Content accuracy of public disclosures |
| **Engineering** | Releases, branching, CVE response, infra alignment |
| **Security / Risk** | Sign-off for third-party integrations and data classification |

Support and escalation contacts are internal to Centuries Mutual and are **not** published in this README.

---

## 9. License & confidentiality

Unless a separate **`LICENSE`** file states otherwise:  
**© Centuries Mutual. All rights reserved.**  

Unlicensed redistribution, cloning for external publication, or use outside authorized employment or contractor engagements is prohibited.

---

## 10. Document control

| Version | Date | Notes |
|---------|------|-------|
| 1.0 | 2026-04 | Initial institutional README |

*Maintained by Centuries Mutual engineering.*
