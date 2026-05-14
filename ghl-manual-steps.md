# GHL Manual Steps — 3 Actions, ~10 Minutes Total
# Do these in your MAIN GHL browser tab (the one showing agency_launchpad)
# Location: Willis Advocacy Group | inU91vb1yP7OCnvlJKcm

---

## ACTION 1: Publish WEBSITE LEADS Workflow (30 seconds)
1. In your GHL tab → click "Click here to switch" in the left sidebar
2. Select **Willis Advocacy Group** sub-account
3. Go to: Automation → Workflows
4. Find the workflow named **WEBSITE LEADS** (status: Draft)
5. Click the toggle to switch it from Draft → Published
✅ Done. That workflow will now fire when website leads come in.

---

## ACTION 2: Import Nurture Sequences (5 minutes)
GHL doesn't have a direct JSON import for workflows via UI, so create these manually OR use the Workflow template approach:

**Medicare 7-Touch Sequence** — already built at:
C:\Users\UhiaWillis\willisadvocacygroup\ghl-config\ghl-medicare-nurture-sequence.json

**Life Insurance 7-Touch Sequence** — at:
C:\Users\UhiaWillis\willisadvocacygroup\ghl-config\ghl-life-insurance-nurture-sequence.json

To import: In GHL → Automation → Workflows → click the 3-dot menu → Import (if available) OR rebuild using these files as reference.

---

## ACTION 3: A2P 10DLC Registration (5 minutes)
**Your EIN: 33-2857577**
**Business: UKW Consulting Inc.**

1. In GHL (Willis Advocacy Group sub-account) → Settings → Phone Numbers
2. Look for **A2P Registration** or **Trust Center** or **Compliance**
3. Click **Register Brand**
4. Fill in:
   - Business Name: UKW Consulting Inc.
   - EIN: 33-2857577
   - Business Type: Private For-Profit
   - Industry: Insurance
   - Website: willisadvocacygroup.com
   - Business Address: Webster, MA
5. Submit → wait 24-48 hours for approval

---

## ACTION 4: Buy Phone Number (after A2P approved)
1. GHL → Settings → Phone Numbers → Buy Number
2. Area code: 774 or 508 (Massachusetts)
3. Select a number → Purchase
4. Assign to Willis Advocacy Group location

---

## ACTION 5: GHL API Key (for future API access)
1. GHL (Willis Advocacy Group sub-account) → Settings → API
2. Click **Generate Private Integration Token** (or **Create API Key**)
3. Name it: "Willis Advocacy Webhook"
4. Copy the key → save it somewhere secure
5. Go to Railway → meticulous-rebirth project → Variables
6. Update GHL_API_KEY with the new key if needed

---

*All configuration files are at: C:\Users\UhiaWillis\willisadvocacygroup\*
