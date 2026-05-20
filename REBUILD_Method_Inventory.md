# REBUILD_Method — Repository Inventory

**Audit date:** 2026-05-20
**Repo root:** `/home/user/website`
**Branch:** `claude/audit-rebuild-method-MXLAK`
**Remote:** `willisadvocacygroup/website` (via local proxy)
**Total tracked files:** 104 (all working-tree files are tracked — nothing local-only)
**Total commits on main lineage:** 42

> Scope note: The repository hosts **two related projects**.
> 1. **Willis Advocacy Group** (Medicare/life-insurance brokerage) — files at repo root.
> 2. **Uhia Willis / The R.E.B.U.I.L.D. Method** (speaker + identity-reconstruction program) — files under `uhiawillis-site/`.
>
> The "REBUILD_Method" deliverables live primarily in `uhiawillis-site/`, with cross-supporting content (Aria voice script, MailerLite sequences, Buffer queue, logo assets, brand board) at the root.

---

## 1. Folder Tree With File Sizes

```
website/                                                          (repo root)
├── .github/
│   └── workflows/
│       ├── deploy.yml                                    1,764 B   CI
│       └── deploy-uhia-willis-site.yml                   1,159 B   CI
├── blog/
│   ├── index.html                                       10,691 B
│   ├── dsnp-dual-eligible-medicare-medicaid.html        11,429 B
│   ├── life-insurance-preexisting-conditions.html       16,935 B
│   ├── medicare-advantage-massachusetts-2025.html       10,520 B
│   ├── medicare-advantage-vs-medicare-supplement.html   15,491 B
│   └── what-is-a-dsnp-plan.html                         16,254 B
├── images/
│   ├── uhia-willis.jpg                              12,598,338 B   (12.0 MB)
│   ├── logos/
│   │   ├── LOGO-USAGE-GUIDE.md                           5,488 B
│   │   ├── convert-to-png.js                             5,824 B
│   │   ├── package.json                                    234 B
│   │   ├── logo-dark.svg                                 2,614 B
│   │   ├── logo-email.svg                                2,362 B
│   │   ├── logo-favicon.svg                                915 B
│   │   ├── logo-icon-teal.svg                            2,061 B
│   │   ├── logo-icon.svg                                 1,411 B
│   │   ├── logo-light.svg                                2,646 B
│   │   ├── logo-nav.svg                                  2,135 B
│   │   ├── logo-social.svg                               3,501 B
│   │   └── png/                                                    (40 PNGs, see §1a)
│   └── social/
│       ├── fb-cover-1.png                               75,438 B
│       ├── fb-cover-2.png                               59,205 B
│       ├── fb-cover-3.png                              207,013 B
│       └── fb-cover-4.png                              116,016 B
├── uhiawillis-site/                                              ★ R.E.B.U.I.L.D. site root
│   ├── ambassador.html                                  11,572 B
│   ├── blueprint.html                                   15,441 B
│   ├── challenge.html                                   13,575 B
│   ├── cohort.html                                      10,851 B
│   ├── corporate.html                                   17,877 B
│   ├── email-nurture-sequence.txt                       17,939 B
│   ├── free-guide.html                                  22,968 B
│   ├── index.html                                       39,221 B
│   ├── mastermind.html                                   9,447 B
│   ├── package-breakdown.html                           20,844 B
│   ├── speaker-one-sheet.html                           10,423 B
│   ├── brand/
│   │   ├── brand-board.html                             22,360 B
│   │   └── logo.svg                                      1,538 B
│   ├── images/
│   │   ├── uhia-headshot.jpg                        12,598,338 B   (identical bytes to uhia-willis.jpg)
│   │   └── uhia-willis.jpg                          12,598,338 B   (identical to /images/uhia-willis.jpg)
│   └── products/
│       ├── blueprint-content.html                       95,144 B
│       ├── challenge-content.html                       50,834 B
│       └── free-guide-content.html                      29,193 B
├── .gitignore                                              207 B
├── .htaccess                                             1,045 B
├── 404.html                                              2,235 B
├── Willis-Advocacy-Group-System-Workflow.html           79,844 B
├── buffer-posts-queue.md                                13,066 B
├── buffer-setup-guide.md                                 2,906 B
├── dashboard-data.json                                   1,000 B
├── dashboard.html                                       27,654 B
├── ghl-manual-steps.md                                  13,967 B
├── index.html                                           90,207 B
├── kaydem-escalation-email.md                            3,446 B
├── kaydem-escalation-email.txt                           2,768 B
├── mailerlite-email-sequences.md                        10,735 B
├── podcast-pitch-contacts.txt                            1,749 B
├── privacy-policy.html                                  19,952 B
├── robots.txt                                              135 B
├── sitemap.xml                                             808 B
├── soa.html                                             22,029 B
├── social-profiles-update.md                             4,194 B
├── synthflow-aria-full-script.md                        12,195 B
├── terms-of-service.html                                31,809 B
└── thank-you.html                                        8,155 B
```

### 1a. `images/logos/png/` — generated PNG bundle (40 files)

| File | Bytes |
|---|---:|
| logo-canva-1-1000.png | 413,330 |
| logo-canva-2-1000.png | 375,454 |
| logo-canva-3-1000.png | 347,767 |
| logo-canva-3b-1000.png | 347,767 |
| logo-canva-4-1000.png | 353,403 |
| logo-canva-4b-1000.png | 353,403 |
| logo-dark-1000.png | 42,985 |
| logo-dark-340.png | 11,381 |
| logo-dark-500.png | 17,725 |
| logo-dark-680.png | 25,427 |
| logo-email-220.png | 8,144 |
| logo-email-440-2x.png | 19,309 |
| logo-favicon-16.png | 528 |
| logo-favicon-32.png | 1,037 |
| logo-favicon-48.png | 1,580 |
| logo-favicon-64.png | 2,064 |
| logo-favicon-96.png | 3,024 |
| logo-favicon-180.png | 5,722 |
| logo-favicon-192.png | 5,900 |
| logo-favicon-512.png | 18,386 |
| logo-icon-32.png | 1,755 |
| logo-icon-64.png | 4,499 |
| logo-icon-128.png | 12,280 |
| logo-icon-256.png | 33,607 |
| logo-icon-512.png | 101,384 |
| logo-icon-1024.png | 335,982 |
| logo-icon-teal-200.png | 24,044 |
| logo-icon-teal-400.png | 69,931 |
| logo-icon-teal-512.png | 104,949 |
| logo-icon-teal-800.png | 219,265 |
| logo-icon-teal-1024.png | 329,775 |
| logo-light-340.png | 12,668 |
| logo-light-500.png | 20,621 |
| logo-light-680.png | 29,794 |
| logo-light-1000.png | 53,028 |
| logo-nav-260.png | 7,219 |
| logo-nav-520-2x.png | 16,508 |
| logo-social-400.png | 68,226 |
| logo-social-800.png | 228,459 |
| logo-social-1080.png | 365,827 |

---

## 2. File-by-File Inventory

### CI / Deploy configs

| File | Type | Purpose |
|---|---|---|
| `.github/workflows/deploy.yml` | config | GitHub Actions: FTP-deploy repo root to Hostinger `/public_html/` on push to `main`. Excludes `uhiawillis-site/**`, workflow doc, PNG bundle, kaydem txt. |
| `.github/workflows/deploy-uhia-willis-site.yml` | config | GitHub Actions: FTP-deploy `uhiawillis-site/` to `/domains/uhiawillis.com/public_html/` on path-scoped push to `main`. |
| `.gitignore` | config | Excludes `webhook-server/`, `tools/`, `ghl-config/`, logs, OS junk. |
| `.htaccess` | config | Apache rules served by Hostinger: force HTTPS + `www`, clean URLs, security headers, asset caching, gzip. |
| `robots.txt` | config | Crawler allow rules; disallows `/admin/`, `/api/`, `/leads.log`. |
| `sitemap.xml` | config | Sitemap of WAG root URL + 3 anchors. (Last-mod 2026-05-09; does **not** list any of the new blog/legal/SOA/thank-you pages.) |
| `images/logos/package.json` | config | npm manifest for `convert-to-png.js` — declares Puppeteer 21 as the only dependency. |

### Willis Advocacy Group (insurance) site — root pages

| File | Type | Purpose |
|---|---|---|
| `index.html` | code+content | Main WAG website home page (Medicare + life insurance lead-gen). Embeds GHL form widget + custom lead POST. |
| `dashboard.html` | code | Internal KPI dashboard; pulls JSON from `api.willisadvocacygroup.com` and from `dashboard-data.json`. Polls every 60 s. |
| `dashboard-data.json` | data | Static JSON used by `dashboard.html` (manually-edited or Zapier-updated). All counters currently zeroed. |
| `soa.html` | code | CMS-required Scope-of-Appointment form. Posts to `api.willisadvocacygroup.com/api/soa`. |
| `thank-you.html` | content | Post-submission confirmation page. Includes Meta Pixel. |
| `404.html` | content | Custom 404 page. |
| `privacy-policy.html` | doc | Privacy Policy. |
| `terms-of-service.html` | doc | Terms of Service (includes Aria AI disclosure §). |
| `Willis-Advocacy-Group-System-Workflow.html` | doc | Internal 10-phase visual workflow diagram (excluded from deploy). |

### Blog (WAG)

| File | Type | Purpose |
|---|---|---|
| `blog/index.html` | content | Blog hub listing all 5 posts. |
| `blog/dsnp-dual-eligible-medicare-medicaid.html` | content | Article: D-SNP for dual-eligibles. |
| `blog/life-insurance-preexisting-conditions.html` | content | Article: Life insurance + pre-existing conditions. |
| `blog/medicare-advantage-massachusetts-2025.html` | content | Article: MA Medicare Advantage 2025. |
| `blog/medicare-advantage-vs-medicare-supplement.html` | content | Article: MA vs Medigap. |
| `blog/what-is-a-dsnp-plan.html` | content | Article: D-SNP basics. |

### ★ R.E.B.U.I.L.D. site (`uhiawillis-site/`)

| File | Type | Purpose |
|---|---|---|
| `uhiawillis-site/index.html` | code+content | Main speaker site / R.E.B.U.I.L.D. Method home. Includes MailerLite universal JS. |
| `uhiawillis-site/free-guide.html` | code+content | "7 Signs Your Identity Has Collapsed" lead-magnet opt-in (MailerLite form). |
| `uhiawillis-site/challenge.html` | content | $47 7-Day R.E.B.U.I.L.D. Challenge sales page. |
| `uhiawillis-site/blueprint.html` | content | $197 R.E.B.U.I.L.D. Blueprint sales page. |
| `uhiawillis-site/cohort.html` | content | R.E.B.U.I.L.D. Cohort application page. |
| `uhiawillis-site/ambassador.html` | content | Ambassador Track application page. |
| `uhiawillis-site/mastermind.html` | content | Closed-door Mastermind page. |
| `uhiawillis-site/corporate.html` | content | Organizations & Leaders / corporate-engagement page. |
| `uhiawillis-site/speaker-one-sheet.html` | content | Speaker one-sheet (booking collateral). |
| `uhiawillis-site/package-breakdown.html` | content | Comparison of all program tiers. |
| `uhiawillis-site/email-nurture-sequence.txt` | content | 7-email post-opt-in nurture sequence copy. |
| `uhiawillis-site/products/free-guide-content.html` | content | Full lead-magnet body ("7 Signs"). |
| `uhiawillis-site/products/challenge-content.html` | content | Full $47 Challenge curriculum (deliverable). |
| `uhiawillis-site/products/blueprint-content.html` | content | Full $197 Blueprint field manual (deliverable). |
| `uhiawillis-site/brand/brand-board.html` | doc | Brand-system reference page. |
| `uhiawillis-site/brand/logo.svg` | asset | Uhia Willis logomark. |
| `uhiawillis-site/images/uhia-willis.jpg` | asset | Hero portrait (12 MB). |
| `uhiawillis-site/images/uhia-headshot.jpg` | asset | **Byte-identical duplicate** of `uhia-willis.jpg` (same MD5). |

### Cross-supporting content (root)

| File | Type | Purpose |
|---|---|---|
| `synthflow-aria-full-script.md` | content | Full prompt + flow script for **Aria**, the Synthflow voice agent that answers after-hours WAG calls. |
| `mailerlite-email-sequences.md` | content | Paste-ready MailerLite sequences for the $47 + $197 products (R.E.B.U.I.L.D. funnel). |
| `buffer-posts-queue.md` | content | 15 social posts scheduled for Buffer (Mon/Wed/Fri 11:00 ET). |
| `buffer-setup-guide.md` | doc | Step-by-step Buffer account/channel-connect runbook. |
| `ghl-manual-steps.md` | doc | GoHighLevel CRM build runbook (workflows, A2P 10DLC, SMS sequences). |
| `social-profiles-update.md` | doc | Copy/paste social-profile bios + cover-image instructions. |
| `kaydem-escalation-email.md` | content | Drafted escalation email (Day 6 / final notice). |
| `kaydem-escalation-email.txt` | content | Plain-text version of the same email. (Excluded from deploy.) |
| `podcast-pitch-contacts.txt` | content | Podcast outreach contact list for Uhia. |

### Brand / asset files (root)

| File | Type | Purpose |
|---|---|---|
| `images/uhia-willis.jpg` | asset | 12 MB portrait. Byte-identical to the two copies under `uhiawillis-site/images/`. |
| `images/social/fb-cover-{1..4}.png` | asset | Four Facebook cover-image variants. |
| `images/logos/logo-*.svg` (8 files) | asset | Master SVG logo set: icon, icon-teal, light/dark horizontal, nav, email, social, favicon. |
| `images/logos/png/*.png` (40 files) | asset | Generated PNG renders. **Excluded from FTP deploy** but tracked in git. |
| `images/logos/LOGO-USAGE-GUIDE.md` | doc | Usage guide for the logo system. |
| `images/logos/convert-to-png.js` | code | Puppeteer script — renders all SVG logos to PNGs in `./png/`. (See §3 Automation.) |

---

## 3. Identified Systems & Integrations

### 3a. Deployed sites / running services

| Site | Source path | How it ships | Notes |
|---|---|---|---|
| **willisadvocacygroup.com** | repo root (excl. `uhiawillis-site/**`, workflow doc, PNG bundle, kaydem txt) | `deploy.yml` → SamKirkland FTP-Deploy-Action → Hostinger `/public_html/` | Triggered on every push to `main`. Auth via `FTP_SERVER` / `FTP_USERNAME` / `FTP_PASSWORD` GitHub Secrets. |
| **uhiawillis.com** | `uhiawillis-site/` | `deploy-uhia-willis-site.yml` → SamKirkland FTP-Deploy-Action → Hostinger `/domains/uhiawillis.com/public_html/` | Path-scoped trigger (only when `uhiawillis-site/**` changes). Same FTP secrets. |
| **api.willisadvocacygroup.com** | **Not in this repo** | Referenced by `dashboard.html`, `soa.html`, `index.html`, and the workflow doc as a separate backend. `.gitignore` excludes `webhook-server/`. Per `dashboard.html:396`, it lives in `webhook-server/.env` and (per repo `.gitignore` comment) is "deployed separately on Railway." | Provides `/api/lead`, `/api/soa`, `/api/stats`, `/api/leads/recent`. **No source code in this repo.** |

### 3b. Automation scripts

| Script | Lang | Trigger | Purpose |
|---|---|---|---|
| `images/logos/convert-to-png.js` | Node.js (Puppeteer) | Manual: `npm run convert` (inside `images/logos/`) | Renders every SVG logo at every size into `images/logos/png/`. |

No Python, no shell scripts, no other `.js` files anywhere in the tree.

### 3c. AI agents / LLM integrations

| Agent | Where defined | Vendor | What it does |
|---|---|---|---|
| **Aria** (voice agent) | `synthflow-aria-full-script.md` — full system prompt + 10 conversation flows | **Synthflow** (markdown footer says built for fine-tuner.ai / Synthflow) | Answers WAG inbound calls after-hours, qualifies callers, schedules Uhia's callback. Disclosed in `terms-of-service.html:491` ("Aria is powered by Synthflow AI technology"). |
| WAG → Aria call trigger | Documented in `Willis-Advocacy-Group-System-Workflow.html:983` | GoHighLevel webhook → Synthflow | "GHL workflow detects new contact → fires Synthflow webhook → Iris AI agent calls the lead's phone number." (Note: the workflow doc calls it "Iris"; the published script calls it "Aria" — a naming drift worth flagging.) |

No OpenAI / Anthropic / GPT direct API integrations found in any source file.

### 3d. APIs, webhooks, backend endpoints

| Endpoint | Called from | Verb | Purpose |
|---|---|---|---|
| `https://api.willisadvocacygroup.com/api/lead` | `index.html:2013` | POST | Submit WAG lead form (with TrustedForm cert URL). |
| `https://api.willisadvocacygroup.com/api/soa` | `soa.html:550` | POST | Submit Scope-of-Appointment form. |
| `https://api.willisadvocacygroup.com/api/stats` | `dashboard.html:594` | GET | Dashboard summary stats. |
| `https://api.willisadvocacygroup.com/api/leads/recent` | `dashboard.html:605` | GET (with admin key) | Recent leads list for dashboard. |
| `https://api.leadconnectorhq.com/widget/form/6aeSjIVXiOVDYEUVekUX` | `index.html:1569` | iframe | Embedded GoHighLevel lead form widget. |
| `https://api.trustedform.com/trustedform.js` | `index.html:1935` | script | TrustedForm consent-cert generation. |
| `https://assets.mailerlite.com/js/universal.js` | `uhiawillis-site/index.html:283`, `uhiawillis-site/free-guide.html:123` | script | MailerLite universal JS (opt-in forms). |
| GHL → Synthflow webhook | Documented (not coded) in workflow HTML | webhook | Fires Aria outbound call on new lead. |

### 3e. Databases / data stores

- **No SQLite, no JSON databases, no CSVs used as data stores** in this repo.
- The only structured data file is `dashboard-data.json` (1 KB, manually-edited KPI snapshot, currently zeroed).
- `robots.txt` references `/leads.log` (a server-side log on the backend) and the workflow doc mentions a "Local leads.log backup" — both live on the backend, **not in this repo**.

### 3f. `.env` files

- **None present** in the working tree.
- `.gitignore` excludes `webhook-server/` (which the dashboard comment says contains a `.env`) — confirming the backend `.env` is intentionally outside this repo.
- No `.env`, `.env.local`, `.env.example`, or similar in the tree.

### 3g. Cron jobs / scheduled tasks

- **No cron or scheduler in this repo.**
- `dashboard.html:755` uses `setInterval(loadAll, 60000)` — a client-side 60-second poll, not a server cron.
- `soa.html:440` uses `setInterval(updateTimestamp, 1000)` — a client-side clock tick.
- The two GitHub Actions workflows are **push-triggered**, not scheduled (no `schedule:` keys).
- Scheduling that exists is **external**:
  - Buffer queue (Mon/Wed/Fri 11:00 ET) — `buffer-posts-queue.md`.
  - GHL nurture sequences — `ghl-manual-steps.md`.
  - MailerLite sequences — `mailerlite-email-sequences.md`.

---

## 4. Version Control vs. Local Only

- `git status` is clean; no untracked or modified files.
- `git ls-files` count (104) **equals** the count of files in the working tree — **everything in the tree is tracked**.
- Branch `claude/audit-rebuild-method-MXLAK` is checked out; `main` exists locally and on `origin`.
- Excluded by `.gitignore` (none present locally): `webhook-server/`, `tools/`, `ghl-config/`, `*.log`, OS-junk.
- Excluded from FTP deploy but **still in git**: `images/logos/png/**`, `Willis-Advocacy-Group-System-Workflow.html`, `kaydem-escalation-email.txt`, `uhiawillis-site/**` (only excluded from the WAG workflow — has its own).

**Conclusion:** nothing in this working tree is local-only. The only "local-only" surface is the backend `webhook-server/` which lives in a separate Railway deploy, plus any unstaged ideas in directories listed in `.gitignore` (none of which are checked out here).

---

## 5. Started-but-Abandoned / Half-built / TODO markers

- **No `TODO` / `FIXME` / `XXX` / `HACK` markers** anywhere in `*.html`, `*.md`, `*.js`, `*.json`, or `*.yml`.
- **No empty directories.**
- **No zero-byte files.**

Observations that look like loose ends (informational only — not modified per audit-only instructions):

1. **`sitemap.xml` is stale.** Lists only the home page + 3 anchors. Does not include `/blog/`, `/privacy-policy.html`, `/terms-of-service.html`, `/thank-you.html`, `/soa.html`, `/404.html`, or any blog post. Lastmod is 2026-05-09, but several pages have been added since.
2. **`uhiawillis.com` has no sitemap or robots file.** The WAG `robots.txt` and `sitemap.xml` reference only `willisadvocacygroup.com`.
3. **Image duplication.** `images/uhia-willis.jpg`, `uhiawillis-site/images/uhia-willis.jpg`, and `uhiawillis-site/images/uhia-headshot.jpg` are byte-identical (same MD5 `148bd7ea…`) — 12 MB stored three times (~38 MB of identical data in git).
4. **PNG logo bundle in git but excluded from deploy.** 40 PNGs in `images/logos/png/` (~5 MB) are tracked in git but the deploy workflow excludes them via `**/images/logos/png/**`. They are reproducible from SVGs via `convert-to-png.js`.
5. **Voice-agent naming drift.** The deployed script and ToS call the agent **Aria**; the internal workflow HTML still calls it **Iris** (`Willis-Advocacy-Group-System-Workflow.html:983`).
6. **`dashboard-data.json` is initialized but unfed.** All counters zero, last touched 2026-05-09, with a self-note "Edit this file manually or update it via Zapier" — no Zapier wiring is present in the repo.
7. **Backend repo not present here.** Routes `/api/lead`, `/api/soa`, `/api/stats`, `/api/leads/recent` are called by site code but their implementation lives in the separately-deployed `webhook-server/` on Railway. From this repo alone, the backend is a black box.
8. **Two GitHub Actions workflows share one FTP credential set.** Both `deploy.yml` and `deploy-uhia-willis-site.yml` use the same `FTP_SERVER` / `FTP_USERNAME` / `FTP_PASSWORD` secrets — works only if the same FTP user has access to both `/public_html/` and `/domains/uhiawillis.com/public_html/`.
9. **`kaydem-escalation-email.txt` is dated for SEND on May 19, 2026** (`kaydem-escalation-email.md` line 2). Today is 2026-05-20 — the send date is one day past.
10. **`images/social/` covers exist but no social automation pulls them in.** They're produced assets without a referenced consumer in code; Buffer/socials use them manually per `social-profiles-update.md` + `buffer-setup-guide.md`.

---

## Appendix — Git history snapshot

Last 10 commits on this branch:

```
3298e7e Fix stat counter: 7 → 8 states licensed (MA, CT, NJ, NY, FL, TX, NC, GA)
a64a764 QA fixes: deploy orphaned blog posts + fix main-content anchor
943b364 Deploy updated R.E.B.U.I.L.D. site pages with locked brand system
95cc4e2 Replace lead form with GHL embedded form (live CRM integration)
c1372d2 Address A2P 10DLC compliance review findings
46217ed Add TCPA-compliant dual consent checkboxes to lead form
c7c3f44 Add Privacy Policy and Terms of Service pages; update footer links
bd755d4 Add blog, expanded FAQ, Google reviews section, CMS compliance, Aria script
9c7e63e Add complete MailerLite email sequences for $47 + $197 products
ef1fe90 Add refined versions of logo concepts 3 and 4
```

42 commits total since initial deploy (`53d48f6 Initial deploy — Willis Advocacy Group website`).
