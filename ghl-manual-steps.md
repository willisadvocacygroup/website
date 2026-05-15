# GHL Manual Steps — Willis Advocacy Group
# Location: Willis Advocacy Group | inU91vb1yP7OCnvlJKcm

---

## ✅ ACTION 1: Publish WEBSITE LEADS Workflow — DONE (May 15 2026)
Workflow is live. Fires on every website form submission.

---

## ACTION 2: Build Nurture Sequences (15–20 min total, both workflows)
NOTE: SMS steps won't fire until A2P 10DLC is approved (Action 3 below).

GHL → Automation → Workflows → + Create Workflow → Start from Scratch

---

### WORKFLOW A: Medicare Lead — 7-Touch Nurture Sequence

**Step 1: Name and trigger**
- Name the workflow: `Medicare Lead — 7-Touch Nurture Sequence`
- Click "Add New Trigger" → Choose: **Contact Tag Added**
- Tag filter: `medicare`
- Save trigger

**Step 2: Add steps in order (click the "+" after each step)**

---

**STEP 1 — SMS (Immediate, 0 delay)**
Type: Send SMS
Delay: 0 minutes (immediate)
Message:
```
Hi {{contact.first_name}}! 👋 This is Willis Advocacy Group — we got your Medicare review request. Uhia will call you within 1 business hour. Zero cost, no obligation.

— Willis Advocacy Group | (774) 446-0701 | Not a government agency.
```

---

**STEP 2 — Email (1 hour delay)**
Type: Send Email
Delay: 1 hour after previous step
Subject: `Your Free Medicare Review — Willis Advocacy Group`
Body:
```
Hi {{contact.first_name}},

Thank you for reaching out to Willis Advocacy Group. Uhia Willis is a licensed Medicare broker based in Webster, MA — and he will personally review your situation.

Here's what happens next:
→ Uhia will call you at {{contact.phone}} within 1 business hour
→ He'll review every plan available in {{contact.state}} for your situation
→ Zero cost. Zero pressure. Zero obligation.

Questions before the call? Reply to this email or call (774) 446-0701.

People Over Profits. Always.

---
Uhia Willis
Licensed Medicare & Life Insurance Broker
Willis Advocacy Group | UKW Consulting Inc.
(774) 446-0701 | info@willisadvocacygroup.com
willisadvocacygroup.com
Webster, MA | Licensed in MA, CT, NJ, NY, FL, TX, NC
"People Over Profits."
---
Willis Advocacy Group (UKW Consulting Inc.) is not affiliated with or endorsed by Medicare, Medicaid, or any government agency. We do not offer every plan available in your area. Contact Medicare.gov or 1-800-MEDICARE for information on all options.

Language assistance services, free of charge, are available. Call (774) 446-0701.
```

---

**STEP 3 — SMS (48 hours after trigger)**
Type: Send SMS
Delay: 2 days after previous step
Message:
```
{{contact.first_name}} — quick question: Did you know if you have BOTH Medicare AND Medicaid, you may qualify for a $0 plan with free dental, vision & transportation? Most people who qualify have no idea. Uhia can check in 10 minutes — free. Call or reply YES.

— Willis Advocacy Group | (774) 446-0701 | Not a government agency.
```

---

**STEP 4 — Email (96 hours / 4 days after trigger)**
Type: Send Email
Delay: 2 days after previous step
Subject: `What most Medicare beneficiaries don't know`
Body:
```
Hi {{contact.first_name}},

I want to share something most Medicare beneficiaries never hear from their broker.

There's a type of Medicare plan called a Dual Special Needs Plan (D-SNP). It's designed specifically for people who have BOTH Medicare AND Medicaid. These plans often have:

→ $0 monthly premium
→ $0 copays for primary care
→ Dental and vision coverage
→ Free rides to doctor appointments
→ Over-the-counter medicine allowances

Most people who qualify have never been told these plans exist.

If you receive Medicaid benefits in addition to Medicare — you may qualify right now. And there's no cost to find out.

Reply to this email or call (774) 446-0701.

---
Uhia Willis
Licensed Medicare & Life Insurance Broker
Willis Advocacy Group | UKW Consulting Inc.
(774) 446-0701 | info@willisadvocacygroup.com
willisadvocacygroup.com
Webster, MA | Licensed in MA, CT, NJ, NY, FL, TX, NC
"People Over Profits."
---
Willis Advocacy Group (UKW Consulting Inc.) is not affiliated with or endorsed by Medicare, Medicaid, or any government agency. We do not offer every plan available in your area. Contact Medicare.gov or 1-800-MEDICARE for information on all options.

Language assistance services, free of charge, are available. Call (774) 446-0701.
```

---

**STEP 5 — SMS (168 hours / 7 days after trigger)**
Type: Send SMS
Delay: 3 days after previous step
Message:
```
{{contact.first_name}} — just checking in. Medicare enrollment windows don't stay open forever. Missing them could mean 12 months on the wrong plan. Uhia reviews your options free — takes 20 min. Reply CALL or call us.

— Willis Advocacy Group | (774) 446-0701 | Not a government agency.
```

---

**STEP 6 — Email (240 hours / 10 days after trigger)**
Type: Send Email
Delay: 3 days after previous step
Subject: `The Medicare question I get asked most often`
Body:
```
Hi {{contact.first_name}},

The most common question I get: "Is there really a plan that costs me $0 per month?"

The honest answer: yes, for many people — but it depends on your specific situation, state, and what other coverage you receive.

That's exactly why I do free reviews. Because the answer is different for every person.

I've helped clients in {{contact.state}} find plans that completely changed their situation. And I've also told people honestly when their current plan was already their best option.

That's what "People Over Profits" means in practice.

Ready to find out where you stand? Call (774) 446-0701 or reply to this email.

---
Uhia Willis
Licensed Medicare & Life Insurance Broker
Willis Advocacy Group | UKW Consulting Inc.
(774) 446-0701 | info@willisadvocacygroup.com
willisadvocacygroup.com
Webster, MA | Licensed in MA, CT, NJ, NY, FL, TX, NC
"People Over Profits."
---
Willis Advocacy Group (UKW Consulting Inc.) is not affiliated with or endorsed by Medicare, Medicaid, or any government agency. We do not offer every plan available in your area. Contact Medicare.gov or 1-800-MEDICARE for information on all options.

Language assistance services, free of charge, are available. Call (774) 446-0701.
```

---

**STEP 7 — SMS (336 hours / 14 days after trigger)**
Type: Send SMS
Delay: 4 days after previous step
Message:
```
{{contact.first_name}} — last check in. Is there anything stopping you from getting a free Medicare review? No commitment, no cost, just clarity on where you stand. Reply YES or call us.

— Willis Advocacy Group | (774) 446-0701 | Not a government agency.
```

**After Step 7: Click Save → then toggle Draft → Publish**

---
---

### WORKFLOW B: Life Insurance Lead — 7-Touch Nurture Sequence

GHL → Automation → Workflows → + Create Workflow → Start from Scratch

**Step 1: Name and trigger**
- Name: `Life Insurance Lead — 7-Touch Nurture Sequence`
- Trigger: **Contact Tag Added**
- Tag filter: `life`
- Save trigger
- NOTE: Website form sends interest value `life` → webhook adds tag `life`. Use `life` not `life-insurance`.

---

**STEP 1 — SMS (Immediate)**
Type: Send SMS
Delay: 0 minutes (immediate)
Message:
```
Hi {{contact.first_name}}! This is Willis Advocacy Group — we received your life insurance inquiry. Uhia will call you within 1 business hour. He specializes in coverage for clients with health conditions. Zero cost, no obligation.

— Willis Advocacy Group | (774) 446-0701 | Not a government agency.
```

---

**STEP 2 — Email (1 hour delay)**
Type: Send Email
Delay: 1 hour
Subject: `About your life insurance inquiry — Willis Advocacy Group`
Body:
```
Hi {{contact.first_name}},

Thank you for reaching out.

Uhia Willis specializes in one thing most brokers won't touch: finding life insurance for clients with preexisting health conditions. That includes:

→ Diabetes (Type 1 and Type 2)
→ Heart disease and cardiac history
→ COPD and lung conditions
→ HIV — yes, including HIV
→ Cancer history and remission
→ Stroke history
→ And many other complex conditions

If you've been declined before — that's actually the situation Uhia was built for.

He'll call you shortly at {{contact.phone}}. If you want to reach him directly: (774) 446-0701.

People Over Profits.

---
Uhia Willis
Licensed Medicare & Life Insurance Broker
Willis Advocacy Group | UKW Consulting Inc.
(774) 446-0701 | info@willisadvocacygroup.com
willisadvocacygroup.com
Webster, MA | Licensed in MA, CT, NJ, NY, FL, TX, NC
"People Over Profits."
---
Not affiliated with or endorsed by Medicare or any government agency.
```

---

**STEP 3 — SMS (48 hours)**
Type: Send SMS
Delay: 2 days
Message:
```
{{contact.first_name}} — did you know there are life insurance policies with NO medical exam and NO health questions? Guaranteed issue policies can't turn you down. Uhia can explain your options in 10 minutes. Free call — reply YES.

— Willis Advocacy Group | (774) 446-0701 | Not a government agency.
```

---

**STEP 4 — Email (96 hours)**
Type: Send Email
Delay: 2 days
Subject: `The life insurance truth most brokers won't tell you`
Body:
```
Hi {{contact.first_name}},

Here's something the insurance industry doesn't advertise:

Guaranteed issue life insurance policies exist specifically for people who've been declined for standard coverage. No medical exam. No health questions. Acceptance is guaranteed for those who meet basic age and residency requirements.

The trade-off is typically a graded benefit during the first 2-3 years — meaning if something happens in that window, the payout is limited. After that period, the full benefit applies.

For many of my clients, this is the difference between leaving their family with nothing and leaving them with real protection.

Want to understand exactly how this would work for your situation? I'll walk through it clearly, with no pressure.

Call (774) 446-0701 or reply to this email.

---
Uhia Willis
Licensed Medicare & Life Insurance Broker
Willis Advocacy Group | UKW Consulting Inc.
(774) 446-0701 | info@willisadvocacygroup.com
willisadvocacygroup.com
Webster, MA | Licensed in MA, CT, NJ, NY, FL, TX, NC
"People Over Profits."
---
Not affiliated with or endorsed by Medicare or any government agency.
```

---

**STEP 5 — SMS (168 hours / 7 days)**
Type: Send SMS
Delay: 3 days
Message:
```
{{contact.first_name}} — I want to ask you something direct: If your family had to pay your funeral expenses next year, could they do it without financial hardship? Most families can't. Final expense policies start under $1/day. Uhia can find your options free.

— Willis Advocacy Group | (774) 446-0701 | Not a government agency.
```

---

**STEP 6 — Email (240 hours / 10 days)**
Type: Send Email
Delay: 3 days
Subject: `For clients who've been told no`
Body:
```
Hi {{contact.first_name}},

I built Willis Advocacy Group around one belief: the people who need coverage the most are the ones who keep getting turned away.

If you've been declined for life insurance before — because of a health condition, a diagnosis, or a complicated medical history — I want you to know: that's not the end of the conversation. It's the beginning of mine.

I've found coverage for clients with:
- Congestive heart failure
- Stage 4 cancer in remission
- Controlled HIV
- Uncontrolled diabetes
- Previous stroke

Not every case gets approved. But every case gets a real review — and an honest answer.

People Over Profits. That means I tell you the truth even when it's not the answer you hoped for.

Call (774) 446-0701. No pressure. Just clarity.

---
Uhia Willis
Licensed Medicare & Life Insurance Broker
Willis Advocacy Group | UKW Consulting Inc.
(774) 446-0701 | info@willisadvocacygroup.com
willisadvocacygroup.com
Webster, MA | Licensed in MA, CT, NJ, NY, FL, TX, NC
"People Over Profits."
---
Not affiliated with or endorsed by Medicare or any government agency.
```

---

**STEP 7 — SMS (336 hours / 14 days)**
Type: Send SMS
Delay: 4 days
Message:
```
{{contact.first_name}} — final check in. Your family's protection matters. If you'd like a free, no-pressure review of your life insurance options — including if you have a health condition — reply YES.

— Willis Advocacy Group | (774) 446-0701 | Not a government agency.
```

**After Step 7: Save → toggle Draft → Publish**

---

## ⚠️ IMPORTANT: Tag Routing for "Both" Leads

Leads who select "Both Medicare and Life Insurance" get tag `both` from the webhook — NOT `medicare` or `life`. These leads won't auto-trigger either nurture sequence.

**Options:**
1. In GHL, open the WEBSITE LEADS workflow → add a step: If tag = `both`, add tags `medicare` AND `life` → then both nurture sequences will fire
2. Or manually add `medicare` + `life` tags to any `both` contact in GHL Contacts view

**Also:** The 3 existing Medicare leads already in GHL (from May 14-15) have the `medicare` tag but the nurture sequence wasn't built yet. After you build and publish it, go to Contacts → filter tag = `medicare` → manually re-add the `medicare` tag to trigger the sequence, OR use Workflow → "Run for existing contacts."

---

## ACTION 3: A2P 10DLC Registration (5 minutes) — DO THIS BEFORE SMS STEPS FIRE

**Your EIN: 33-2857577**
**Business: UKW Consulting Inc.**

1. GHL (Willis Advocacy Group sub-account) → Settings → Phone Numbers
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
3. Purchase → Assign to Willis Advocacy Group location

---

*All config files: C:\Users\UhiaWillis\willisadvocacygroup\ghl-config\*
