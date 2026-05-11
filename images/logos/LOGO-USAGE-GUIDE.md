# Willis Advocacy Group — Logo Usage Guide

## Files in This Folder

| File | Use Case | Background |
|------|----------|------------|
| `logo-light.svg` | Website light sections, hero, about, print | Cream/White |
| `logo-dark.svg` | Website nav header, dark sections | Navy/Dark |
| `logo-nav.svg` | Website navigation bar (inline SVG recommended) | Transparent |
| `logo-social.svg` | Facebook, Instagram, LinkedIn, X/Twitter profile photo | Navy (built-in) |
| `logo-favicon.svg` | Browser tab, bookmark icon source file | Navy (built-in) |
| `logo-email.svg` | Email signature source file | White (built-in) |
| `logo-icon.svg` | Standalone shield — embossing, watermark, stamp | Transparent |
| `logo-icon-teal.svg` | App icon, social media tile, branded square | Teal (built-in) |

---

## Step 1 — Generate PNG Files

```bash
cd images/logos
npm install
node convert-to-png.js
```

This creates a `png/` subfolder with every size. Takes ~60 seconds.

---

## Step 2 — Add Favicon to Your Website

Add these lines to `index.html` inside `<head>`, after the `<title>` tag:

```html
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/images/logos/logo-favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/images/logos/png/logo-favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/images/logos/png/logo-favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/logos/png/logo-favicon-180.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#0C1B2E">
```

### site.webmanifest (create this file in your website root):
```json
{
  "name": "Willis Advocacy Group",
  "short_name": "Willis AG",
  "icons": [
    { "src": "/images/logos/png/logo-favicon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/images/logos/png/logo-favicon-512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#0C1B2E",
  "background_color": "#FAF7F2",
  "display": "standalone"
}
```

---

## Step 3 — Add Nav Logo to Website

The nav logo works best as an **inline SVG** (not an `<img>` tag) so Google Fonts render correctly. In `index.html`, replace the text wordmark in the nav with:

```html
<!-- Replace the existing .nav-brand div content with: -->
<a href="#" class="nav-brand" aria-label="Willis Advocacy Group — Home">
  <!-- Paste the full contents of logo-nav.svg here (inline) -->
</a>
```

Alternatively, use as an `<img>` tag — fonts fall back to Georgia/Courier New, which still looks professional:
```html
<img src="/images/logos/logo-nav.svg" alt="Willis Advocacy Group" height="48" width="260">
```

---

## Step 4 — Email Signature

1. Run `convert-to-png.js` first to generate `png/logo-email-440-2x.png`
2. Upload `logo-email-440-2x.png` to: `https://www.willisadvocacygroup.com/images/logos/png/`
3. In Google Workspace (Gmail):
   - Settings → See all settings → General → Signature → New
   - Insert image → By URL → paste the uploaded URL
   - Resize to 220px wide in the signature editor
   - Below the image, add your text signature

**Full email signature text:**
```
Uhia Willis
Licensed Medicare & Life Insurance Broker
Willis Advocacy Group | UKW Consulting Inc.
(774) 446-0701 | info@willisadvocacygroup.com
willisadvocacygroup.com
Webster, MA | Licensed in MA, CT, NJ, NY, FL, TX, NC
"People Over Profits."

Not affiliated with or endorsed by Medicare or any government agency.
```

---

## Step 5 — Social Media Profiles

Use `png/logo-social-1080.png` for all social media profile photos:

| Platform | Recommended File | Notes |
|----------|-----------------|-------|
| Facebook Business Page | `logo-social-800.png` | Profile photo 170x170, cover is separate |
| Instagram Business | `logo-social-1080.png` | Displays as circle — keep content in center |
| LinkedIn Company Page | `logo-social-400.png` | 300x300 recommended |
| X / Twitter | `logo-social-400.png` | 400x400 max |
| YouTube Channel | `logo-social-800.png` | 800x800 channel icon |
| Google Business Profile | `logo-social-800.png` | Square profile photo |

**Important for circular crops (Instagram, Facebook):**  
All important content (the shield and text) is within the center 300x300 of the 400x400 canvas — safe for circular cropping.

---

## Brand Color Quick Reference

| Name | Hex | Use |
|------|-----|-----|
| Primary Navy | `#0C1B2E` | Backgrounds, headers, shield body |
| Advocate Teal | `#0D7377` | CTAs, buttons, accents |
| Teal Highlight | `#14A085` | Hover states |
| Earned Gold | `#C8972A` | Logo border, premium highlights |
| Gold Light | `#F0C060` | Gold accents on dark backgrounds |
| Warm Cream | `#FAF7F2` | Page backgrounds |
| White | `#FFFFFF` | Text on dark, reversed layouts |

---

## Logo Rules

**Do:**
- Use `logo-dark.svg` when placing on any navy/dark surface
- Use `logo-light.svg` when placing on cream/white surfaces
- Maintain minimum clear space equal to the height of the "W" on all sides
- Always use the logo at readable sizes — minimum 120px wide for horizontal, 32px for icon

**Don't:**
- Don't stretch or distort proportions
- Don't change the brand colors
- Don't use the light version on dark backgrounds (use `logo-dark.svg` instead)
- Don't add drop shadows, outlines, or effects beyond what's built in
- Don't place the logo over busy photography without a semi-transparent overlay

---

*Willis Advocacy Group | UKW Consulting Inc. | Webster, MA*  
*"People Over Profits."*
