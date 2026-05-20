# R.E.B.U.I.L.D. Method & Willis Advocacy Group — Project Briefing

> **Paste this into Claude Chat.** This is a self-contained handoff document. You will not have access to the source repo, so everything Claude Chat needs to help is in this file.

---

## 0. Orientation for Claude Chat

You're being briefed on a two-brand solo business run by **Uhia Willis** out of Webster, MA. The repo behind everything lives at `willisadvocacygroup/website` on GitHub and ships two sites to a Hostinger shared host via GitHub Actions FTP deploys.

**The two brands:**

| Brand | Domain | Entity | Purpose |
|---|---|---|---|
| **Willis Advocacy Group (WAG)** | willisadvocacygroup.com | UKW Consulting Inc. (EIN 33-2857577) | Licensed Medicare + life-insurance brokerage. Lead-gen → AI/human qualification → enrollment. Licensed in MA, CT, NJ, NY, FL, TX, NC, GA (8 states). |
| **The R.E.B.U.I.L.D. Method** | uhiawillis.com | UKW Consulting Inc. (same entity) | Uhia's personal speaker/coaching brand. Identity-reconstruction framework for men after collapse. Funnel: free guide → $47 challenge → $197 blueprint → cohort/mastermind/ambassador. |

The same person, the same legal entity, two completely separate audiences. They share a logo system and an FTP credential set; almost nothing else.

**The R.E.B.U.I.L.D. acronym (7 phases):**
- **R** — Recognize the Collapse
- **E** — Evaluate What Remains
- **B** — Believe
- **U** — Upgrade Your Identity
- **I** — Ignite Your Purpose
- **L** — Lead Yourself First
- **D** — Design Your Legacy

**Tone / brand voice:** Direct. Built from lived experience. No hype. "People Over Profits." (WAG tagline.) Targets men ~30–55 post-collapse (divorce, business failure, public crisis, addiction recovery, identity loss).

---

## 1. Tech Architecture (one paragraph)

Two static sites in one git repo, both deployed via GitHub Actions FTP to Hostinger. There is one backend API at `api.willisadvocacygroup.com` (Node service deployed separately on Railway from a `webhook-server/` folder that is `.gitignore`d and lives outside this repo). The backend exposes `/api/lead`, `/api/soa`, `/api/stats`, `/api/leads/recent` and pushes leads into **GoHighLevel (GHL)** CRM. GHL is the orchestration hub — workflows there fan out to **MailerLite** (for R.E.B.U.I.L.D. nurture), GHL-native email/SMS (for WAG nurture), and a **Synthflow webhook** that triggers an outbound AI voice call from "Aria" (after-hours voice agent). Lead form generates a **TrustedForm** consent certificate before submission. Social publishing is **Buffer Free** (3 channels). Internal KPI view is `dashboard.html` (polls the backend every 60s; currently shows zeros).

```
[Visitor]
   │
   ├─→ willisadvocacygroup.com (Hostinger)
   │      │
   │      ├── GHL embedded form widget  ──→  GHL CRM (location inU91vb1yP7OCnvlJKcm)
   │      └── Custom POST /api/lead    ──→  Railway backend
   │                                          │
   │                                          ├──→ TrustedForm cert capture
   │                                          ├──→ GHL contact create + tag
   │                                          │       │
   │                                          │       ├──→ GHL Workflow A: Medicare 7-touch nurture
   │                                          │       ├──→ GHL Workflow B: Life-insurance 7-touch nurture
   │                                          │       └──→ Synthflow webhook → Aria outbound call
   │                                          └──→ leads.log (backup)
   │
   └─→ uhiawillis.com (Hostinger)
          │
          ├── Free-guide opt-in (MailerLite form)
          │      └──→ MailerLite "lead, rebuild-method, free-guide" tags
          │              └──→ 7-email nurture (Day 0/1/2/3/5/7/9)  ⚠ NOT YET BUILT IN MAILERLITE
          │
          ├── $47 Challenge purchase  ──→  MailerLite group "Challenge Buyers" (Automation 187460907234756580)
          │                                     └──→ Emails 2/3/4 (24h/3d/7d)  ⚠ ONLY EMAIL 1 EXISTS
          │
          └── $197 Blueprint purchase ──→  MailerLite group "Blueprint Buyers" (Automation 187461681584014420)
                                                └──→ Emails 2/3/4/5 (24h/4d/10d/21d)  ⚠ ONLY EMAIL 1 EXISTS
```

---

## 2. Status — What's Done

### 2a. Live and shipping
- ✅ **Both websites deployed.** `deploy.yml` ships repo root → Hostinger `/public_html/` on push to `main`. `deploy-uhia-willis-site.yml` ships `uhiawillis-site/**` → `/domains/uhiawillis.com/public_html/` on path-scoped push.
- ✅ **`willisadvocacygroup.com` — full site:** home, blog (5 SEO articles), privacy, terms, SOA (CMS-required Scope of Appointment), thank-you, 404, internal workflow doc (excluded from deploy), internal dashboard. Includes Meta Pixel, GA4, Schema.org JSON-LD, OG/Twitter cards, canonical URLs, TrustedForm JS.
- ✅ **`uhiawillis.com` — full site:** speaker home, free-guide opt-in, $47 challenge sales page + full content, $197 blueprint sales page + 95KB content deliverable, cohort + mastermind + ambassador application pages, corporate engagement page, speaker one-sheet, package breakdown, brand board.
- ✅ **GHL location provisioned** (`inU91vb1yP7OCnvlJKcm`). "WEBSITE LEADS" workflow is live as of May 15 2026 — fires on every website form submission.
- ✅ **Backend API live** at `api.willisadvocacygroup.com` (Railway). Routes used by the live sites: `/api/lead`, `/api/soa`, `/api/stats`, `/api/leads/recent`. (Code is not in this repo.)
- ✅ **GHL embedded form widget live** on the WAG home page (replaced an older custom form). ID: `6aeSjIVXiOVDYEUVekUX`.
- ✅ **TCPA dual-consent checkboxes** added to lead form.
- ✅ **A2P 10DLC compliance review findings addressed** in the lead form copy and ToS. (Registration submission still pending — see §3.)
- ✅ **Aria voice-agent script complete** (`synthflow-aria-full-script.md`, 12 KB) — system prompt + 10 conversation flows, plus ToS disclosure paragraph.
- ✅ **Logo system locked.** 8 SVG masters + 40-size PNG bundle (canva, dark, light, nav, email, social, favicon, icon variants). Puppeteer renderer at `images/logos/convert-to-png.js`.
- ✅ **Brand board** published at `/brand/brand-board.html`.
- ✅ **MailerLite forms live** for free-guide opt-in (REBUILD universal JS embedded on `uhiawillis-site/index.html` and `free-guide.html`).
- ✅ **MailerLite automations created** for both paid products — Email 1 (purchase confirmation) exists in each. Group structure set: "Challenge Buyers" + "Blueprint Buyers."
- ✅ **Social copy written** for all three platforms (FB page, LinkedIn profile, Instagram bio).
- ✅ **Facebook covers (4 variants) produced** in `images/social/`.
- ✅ **Buffer queue populated through ~June 26, 2026** (18 posts across 6 weeks, plus 3 overflow posts, all written in `buffer-posts-queue.md`). Posts 1–12 already queued in Buffer per the doc.
- ✅ **Podcast pitch contact list assembled** (`podcast-pitch-contacts.txt`).
- ✅ **WAG legal:** Privacy Policy and Terms of Service published. ToS includes A2P SMS terms + Aria AI disclosure.

### 2b. Drafted, paste-ready, but not yet activated (awaiting manual action)
- ⏸ **GHL Workflow A: Medicare 7-touch nurture** — full SMS+email content written in `ghl-manual-steps.md` (Steps 1–7). Not built in GHL yet.
- ⏸ **GHL Workflow B: Life-insurance 7-touch nurture** — full SMS+email content written. Not built in GHL yet.
- ⏸ **MailerLite Challenge sequence (Emails 2–4)** — bodies + subjects written in `mailerlite-email-sequences.md`. Not pasted into MailerLite yet.
- ⏸ **MailerLite Blueprint sequence (Emails 2–5)** — bodies + subjects written. Not pasted into MailerLite yet.
- ⏸ **REBUILD lead-magnet 7-email nurture (Days 0/1/2/3/5/7/9)** — full sequence written in `uhiawillis-site/email-nurture-sequence.txt` (374 lines). Not built in MailerLite yet.
- ⏸ **A2P 10DLC brand registration** — runbook ready (`ghl-manual-steps.md` Action 3). Needs to be submitted in GHL → Settings → Phone Numbers → Trust Center. EIN, business name, and details all assembled. 24–48 hr approval window.
- ⏸ **GHL phone number purchase** — runbook ready (Action 4). Must happen after A2P approval. Area code 774 or 508.
- ⏸ **Social profile updates** — FB page bio, LinkedIn headline/about/experience, all copy paste-ready in `social-profiles-update.md`. Not yet applied to live profiles.
- ⏸ **Buffer overflow + Weeks 5–6 posts** — written in `buffer-posts-queue.md`, queued for when slots free up after Weeks 1/3/4 publish.
- ⏸ **Kaydem escalation email** — Day 6 / Final Notice draft, dated for May 19, 2026 send. Today is **May 20, 2026** — past the planned send date (see Risk #1).

---

## 3. Status — What's Left To Do

### 3a. Immediate / blocking
1. **Submit A2P 10DLC registration in GHL.** Without it, the SMS steps in both 7-touch nurture sequences cannot fire. 5-minute submission, 24–48 hour approval. Runbook in `ghl-manual-steps.md` §Action 3.
2. **Purchase GHL phone number** (after A2P approval). 5 minutes. Runbook §Action 4.
3. **Decide on Kaydem escalation email.** The drafted final-notice send date (May 19) has passed by one day. Either send today with updated date or escalate to whatever the next step in that process is.

### 3b. CRM build-out (~30 min total)
4. **Build GHL Workflow A** (Medicare 7-touch). Copy/paste from `ghl-manual-steps.md` Step 1–7. Set tag trigger `medicare`. Publish.
5. **Build GHL Workflow B** (Life-insurance 7-touch). Same process. Tag trigger `life`. Note: form field "life" not "life-insurance."
6. **Tag-routing fix for "both" leads.** Either add a step to "WEBSITE LEADS" workflow that, on tag `both`, adds both `medicare` and `life` tags — or batch-fix manually. Three existing Medicare leads from May 14–15 need their tag re-added to trigger the new sequence.

### 3c. Email automation build-out (~45 min total)
7. **MailerLite — Challenge sequence Emails 2–4.** Paste bodies from `mailerlite-email-sequences.md` into Automation `187460907234756580`. Delays 24h / 3d / 7d. Replace `[INSERT CHALLENGE CONTENT LINK]` and `[INSERT BLUEPRINT PURCHASE LINK]` placeholders.
8. **MailerLite — Blueprint sequence Emails 2–5.** Paste into Automation `187461681584014420`. Delays 24h / 4d / 10d / 21d. Replace `[INSERT BLUEPRINT ACCESS LINK]` placeholder.
9. **MailerLite — Free-guide 7-email nurture.** Build the entire automation from `uhiawillis-site/email-nurture-sequence.txt` (7 emails, Day 0/1/2/3/5/7/9). From: uhiawillis@... (or interim `info@willisadvocacygroup.com`). Tags on opt-in: `lead, rebuild-method, free-guide`. Tags on Email 7 click: `ready-to-buy, challenge-interest`.

### 3d. Social activation (~30 min total)
10. **Update FB page bio + category + about + website + phone + email.** Copy in `social-profiles-update.md`.
11. **Update LinkedIn — headline, about, current position, featured links, skills.** Copy ready.
12. **Update Instagram @uhiawillis** (already has branded bio per Buffer-setup-guide).
13. **Switch Instagram to Creator account** if it's currently Personal (required for Buffer publishing).
14. **Confirm Buffer channel connections** — FB page, LinkedIn personal, Instagram Creator (3 of 3 free-plan slots). TikTok requires the $6/mo Essentials upgrade.
15. **Ongoing: queue Weeks 5–6 + overflow posts** as Buffer slots free up (Mon/Wed/Fri publishing cycle).

### 3e. SEO / discoverability
16. **Update `sitemap.xml`.** Currently only lists `willisadvocacygroup.com/` plus three anchors. Add `/blog/`, all 5 blog post URLs, `/privacy-policy.html`, `/terms-of-service.html`, `/soa.html`, `/thank-you.html`. Update `lastmod` dates.
17. **Create `uhiawillis.com/sitemap.xml` + `robots.txt`.** Neither exists. Should list all 11 uhiawillis-site pages.
18. **Submit both sitemaps to Google Search Console.**

### 3f. Outreach
19. **Send podcast pitches** from `podcast-pitch-contacts.txt`. Send-from: `websterhome25@gmail.com` or `uhia@uhiawillis.com`. Pitch copy referenced as "written and ready" but the body text itself isn't in this file — locate or recreate the pitch templates before sending.
20. **Activate `uhia@uhiawillis.com` mailbox** (referenced as the eventual From for REBUILD nurture). Currently sequences route through `info@willisadvocacygroup.com`.

### 3g. Data / dashboard
21. **Feed `dashboard-data.json`.** Currently all zeros. Either edit manually after each client interaction, or wire a Zapier "GHL contact updated → update JSON via GitHub API" automation (mentioned but not built). Currently the dashboard's `/api/stats` call probably also returns zeros — verify.
22. **Verify backend `/api/stats` and `/api/leads/recent` actually return live data** from GHL. (Backend code is out-of-repo, so this needs to be checked on Railway directly.)

### 3h. Product/funnel completion
23. **Hosting for $47 Challenge content** — `uhiawillis-site/products/challenge-content.html` (50 KB) exists but the MailerLite emails reference `[INSERT CHALLENGE CONTENT LINK]`. Confirm whether the URL is `uhiawillis.com/products/challenge-content.html` (publicly accessible, no auth) or a gated/Gumroad page. If public-by-URL, that's fine for a $47 product but consider obfuscation.
24. **Hosting for $197 Blueprint** — same question. The content file is 95 KB. Decide: bare URL, Gumroad-style gate, or members area.
25. **Hosting for free-guide PDF/HTML** — `free-guide-content.html` (29 KB) exists. Decide if it ships as the MailerLite Email 1 attachment, a download link, or in-email content.
26. **Checkout setup for $47 + $197.** No payment processor is referenced anywhere in the repo (no Stripe/Gumroad/ThriveCart code, no checkout pages). The MailerLite sequences key off "Joins group 'Challenge Buyers'" / "Blueprint Buyers" — so whatever processor is used must trigger that group-join. This is **the largest unspecified piece** of the REBUILD funnel.
27. **Decide cohort cadence + waitlist mechanism.** `cohort.html` is application-only; no calendar of cohort start dates is wired up.

---

## 4. Open Decisions (needs Uhia's input)

| # | Decision | Why it matters |
|---|---|---|
| D1 | **Payment processor for $47 + $197.** Stripe? Gumroad? GHL native payments? ThriveCart? | Blocks the entire REBUILD revenue path. The MailerLite group-join trigger needs whichever processor fires it. |
| D2 | **Aria vs. Iris naming.** The deployed script and ToS say "Aria." The internal workflow doc still says "Iris." | Pick one and reconcile. |
| D3 | **Buffer plan.** Stay on Free (3 channels, 10-post queue) or upgrade to Essentials ($6/mo) for TikTok + bigger queue? | Affects scheduling rhythm. Currently overflow workflow is fragile. |
| D4 | **`info@willisadvocacygroup.com` vs `uhia@uhiawillis.com`** as the From for REBUILD emails. | Affects brand separation. Currently everything routes through the WAG inbox. |
| D5 | **Tag routing for "both" leads** — auto-add both tags in GHL, or hand-route? | Three existing leads + every future "both" lead. |
| D6 | **Cohort schedule** — set fixed quarterly start dates or run by application + waitlist? | Affects the Day-10 Blueprint email's "next cohort opens soon" claim. |
| D7 | **Image dedup** — `images/uhia-willis.jpg` is byte-identical (same MD5) to two copies under `uhiawillis-site/images/` (3× 12 MB stored). Worth consolidating? | Repo/deploy weight only — not user-visible. |
| D8 | **PNG logo bundle in git** — `images/logos/png/` (40 files, ~5 MB) is tracked but excluded from FTP deploy. Reproducible from SVG via `convert-to-png.js`. Keep in git or drop? | Repo size + reproducibility tradeoff. |

---

## 5. Risks & Loose Ends

1. **Kaydem escalation past send date.** Drafted to send May 19, 2026 — today is May 20. Either send today (updating the date stamp) or determine the next escalation step.
2. **Aria/Iris naming drift.** `Willis-Advocacy-Group-System-Workflow.html:983` calls the agent "Iris." The ToS, script, and product reality all use "Aria."
3. **`dashboard-data.json` is initialized but unfed.** Self-comment promises "Zapier will update" but the Zap is not in evidence. Dashboard renders zeros.
4. **One FTP credential set serves both Hostinger sites.** `deploy.yml` and `deploy-uhia-willis-site.yml` share `FTP_SERVER` / `FTP_USERNAME` / `FTP_PASSWORD`. Works only if the same FTP user can write to both `/public_html/` and `/domains/uhiawillis.com/public_html/`. Single point of failure for both domains.
5. **WAG sitemap is stale; uhiawillis.com has no sitemap at all.** SEO impact compounding over time.
6. **Three existing Medicare leads (May 14–15) won't trigger the new nurture sequence automatically** unless someone re-applies the `medicare` tag after Workflow A is published, or uses GHL's "Run for existing contacts" toggle.
7. **No source code for the backend is in this repo.** Anything `/api/*` does is undocumented from a code perspective. If it goes down, only the maintainer of the Railway service knows. Worth pulling that repo into the same audit scope eventually.
8. **No payment processor anywhere in the codebase.** REBUILD funnel can't currently take money based on what's deployed.
9. **`leads.log` is a server-side flat file** per the system workflow doc. No mention of retention, rotation, backup, or PII-redaction policy. With TCPA dual-consent + TrustedForm certs, this log is regulatory evidence — needs a backup strategy.
10. **No automated test or lint setup** in the repo. Every change ships on push to main. No staging environment.
11. **Buffer Free plan = 10-post queue cap.** Documented workaround is manual ("queue Week 5 after Week 3 publishes"). Easy to forget.

---

## 6. What Claude Chat Can Help With

If you're picking this up as Claude Chat, these are the highest-leverage things you can do **without seeing the codebase**:

- **Write the missing pieces:**
  - Sales page for the $47 Challenge (rewrite or sharpen `challenge.html` copy)
  - Sales page for the $197 Blueprint (same for `blueprint.html`)
  - Cohort application page conversion-optimization
  - Speaker one-sheet polish
  - Podcast pitch templates (referenced as "ready" but body copy isn't in the file)
  - Buffer posts for Weeks 7+
  - LinkedIn long-form content built off the blog topics
  - Lead-magnet upsell sequence past Email 7

- **Plan the missing infrastructure:**
  - Concrete payment-processor recommendation (Stripe vs Gumroad vs GHL-native) for the $47 + $197 products, including how the group-join trigger gets fired in MailerLite
  - Schema for `leads.log` retention/backup
  - Zapier zap design for `dashboard-data.json`
  - Cohort cadence + waitlist mechanism

- **Audit the writing:**
  - Compliance review of GHL nurture sequence copy (TCPA, CMS Medicare marketing rules — Medicare brokers have specific opt-in disclosure requirements)
  - Brand-voice consistency check across REBUILD pages
  - SEO review of the 5 blog posts

- **Strategy:**
  - Sequencing the punch list in §3 by leverage (what to do first)
  - Pricing ladder review ($0 guide → $47 → $197 → cohort → mastermind → ambassador → corporate)
  - Audience segmentation between WAG (insurance, 50+) and REBUILD (men 30–55 post-collapse) — do they ever overlap?

- **What Claude Chat *cannot* do from this prop:**
  - See or modify code in the repo (no file access)
  - Trigger any deploy
  - Touch GHL, MailerLite, Buffer, Synthflow, or any external service
  - See live lead data or dashboard values

For anything in the "cannot do" list, Claude Chat should give Uhia paste-ready output and a clear "do this in [tool]" instruction.

---

## Appendix A — File Inventory (summary)

Full inventory with sizes, types, and per-file purpose was committed alongside this briefing as `REBUILD_Method_Inventory.md`. Highlights:

- **104 tracked files**, 42 commits. Clean working tree. Nothing local-only.
- **No `.env`, no databases, no Python/shell scripts, no cron jobs, no TODO markers, no empty folders, no zero-byte files** anywhere in the repo.
- **One automation script:** `images/logos/convert-to-png.js` (Puppeteer SVG→PNG renderer, manual).
- **Two GitHub Actions workflows** (FTP deploy, push-triggered, no schedule).
- **One JSON data file:** `dashboard-data.json` (1 KB, all zeros).
- **One AI agent definition:** `synthflow-aria-full-script.md` (Aria voice agent on Synthflow).

## Appendix B — Key URLs and IDs

| Thing | Value |
|---|---|
| WAG site | https://willisadvocacygroup.com |
| REBUILD site | https://uhiawillis.com |
| Backend API | https://api.willisadvocacygroup.com (Railway, code out-of-repo) |
| GHL location ID | `inU91vb1yP7OCnvlJKcm` |
| GHL embedded form ID | `6aeSjIVXiOVDYEUVekUX` |
| MailerLite Challenge automation | `187460907234756580` |
| MailerLite Blueprint automation | `187461681584014420` |
| Meta Pixel | `614379199982364` |
| Entity / EIN | UKW Consulting Inc. / `33-2857577` |
| Phone | (774) 446-0701 |
| WAG inbox | `info@willisadvocacygroup.com` |
| REBUILD inbox (pending activation) | `uhia@uhiawillis.com` |
| Send-from for outreach | `websterhome25@gmail.com` |

## Appendix C — Voice & Positioning

- **WAG tagline:** "People Over Profits."
- **WAG positioning:** Independent licensed broker for clients other brokers turn away — preexisting conditions for life insurance (diabetes, heart disease, **HIV**, cancer history, COPD, stroke), and D-SNP plans for dual-eligibles (Medicare + Medicaid).
- **WAG required disclosure:** "Willis Advocacy Group (UKW Consulting Inc.) is not affiliated with or endorsed by Medicare, Medicaid, or any government agency."
- **REBUILD positioning:** A construction-engineering metaphor for identity after collapse. Anti-motivation, anti-recovery, pro-construction. "Recovery is backwards. Rebuild is forward." Built from Uhia's own lived experience, not from a certification.
- **REBUILD audience:** Men ~30–55 post-collapse (divorce, business failure, public reputational damage, identity loss). Often men whose old narrative got ahead of them — the "court case where you are both defendant and attorney."

---

*End of briefing. Paste this whole file into Claude Chat as your opening message.*
