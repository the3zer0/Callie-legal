# Callie — Legal & Privacy Center

A premium, responsive, fully static legal-policy website for **Istition BD / Callie**. Ready for GitHub Pages **after you review the policies and replace the public contact email**.

## Included

- `/` — branded public home page
- `/privacy-policy/` — Privacy Policy in English and Bangla
- `/terms-of-service/` — Terms of Service in English and Bangla
- `/data-deletion/` — Data Deletion Instructions in English and Bangla
- Responsive design, mobile menu, English/Bangla toggle, accessible keyboard navigation
- No login, database, cookies, analytics, external scripts, third-party fonts, or dependency setup
- GitHub Pages-friendly relative paths (works at `/callie-legal/` or a custom domain)

## REQUIRED BEFORE PUBLISHING — do not skip

1. **Choose an email you authorize for public customer contact and deletion requests.** In VS Code press `Ctrl + Shift + H` and replace ALL occurrences of `REPLACE_WITH_PUBLIC_CONTACT_EMAIL` with that public email. Check the Home, Privacy, Terms and Data Deletion pages. This email will be visible to everyone and harvested by spam crawlers.
2. Review the policies to ensure claims are true **for your real business**. Especially check whether you actually handle orders/delivery, what you retain, how your staff verifies and completes deletion requests, and any providers that process data. The code is a template, **not legal advice**.
3. Confirm that your team **can receive and act on deletion requests** through the advertised contact channel. Deletion is a manual operational process, not an automated website feature.
4. If you intend to offer customer data deletion through a Facebook/Instagram/WhatsApp contact channel, ensure someone monitors it.
5. Change the effective date if you modify the policies after 21 October 2026.
6. DO NOT upload any Callie business database, `.private` folder, access tokens, private keys, real customer conversations or confidential assets to the GitHub repository.
7. `assets/favicon.svg` is a generic letter-C mark designed for this legal site, **not** an official Istition BD logo. Replace it only if you have a public-safe logo.

## Publish to GitHub Pages (without running commands)

1. Log in to GitHub. Create a **new public repository** named `callie-legal` (or another name).
2. Click **Add file → Upload files**, and upload the **contents of this folder**, preserving `index.html`, `assets/`, `privacy-policy/`, `terms-of-service/`, `data-deletion/`, `.nojekyll`. Do **not** upload the outer folder as a single nested directory.
3. In repository **Settings → Pages**, select **Deploy from a branch**, Branch **main**, Folder **/(root)**, then **Save**.
4. Wait for the green published-site URL; GitHub Pages may take several minutes. Open the site in an incognito window.
5. Example ONLY, if your GitHub username is `the3zer0` and repository is `callie-legal`: `https://the3zer0.github.io/callie-legal/`.
6. Once you visually confirm the pages load publicly, use these URLs in **Meta Developer App → App settings → Basic**:
   - Privacy Policy URL: `https://YOUR-USERNAME.github.io/callie-legal/privacy-policy/`
   - Terms of Service URL: `https://YOUR-USERNAME.github.io/callie-legal/terms-of-service/`
   - Data Deletion Instructions URL: `https://YOUR-USERNAME.github.io/callie-legal/data-deletion/`
   - For App Domains, only enter a domain Meta accepts and that matches your actual allowed setup; do not invent or paste an unrelated domain.
7. Save changes, then review requirements per Messenger, Instagram and WhatsApp use cases. **Publishing is not automatically guaranteed by adding policy URLs; App Review/business verification and platform restrictions may still apply.**

## Local preview

Open `index.html` in a browser. For the closest GitHub Pages-like behavior, run a simple local HTTP server (optional):

```powershell
cd PATH\TO\Callie_Legal_Website_GitHub_Pages
python -m http.server 8080
```

Then open `http://localhost:8080`. No `npm install`, Node.js backend or database is required.

## Accuracy and platform note

- This legal website is **independent** of Callie's private admin dashboard and webhooks; it does not collect submitted messages or provide automatic deletion.
- It does not need your WhatsApp production phone number or cloud API credentials.
- If you move the site to `istitionbd.com`, use the actual public URLs and update Meta App settings.
- Privacy/contact details must remain current. Consider review by a qualified lawyer for commercial use and applicable Bangladesh law.

## File tree

```
index.html
privacy-policy/index.html
terms-of-service/index.html
data-deletion/index.html
assets/styles.css
assets/site.js
assets/favicon.svg
404.html
.nojekyll
robots.txt
README.md
```
