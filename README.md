# CodeMentor — React training website

A responsive React + Vite landing page for one-to-one Python, React JS and DevOps training.

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. In the terminal run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite (usually http://localhost:5173).

## Connect your Google Form
1. Create a Google Form with the fields you want (for example: Name, Email, Phone, Training interest, Current skill level, Preferred time and Message).
2. In Google Forms, click **Send** → select the **<> Embed HTML** tab.
3. Copy the URL inside the iframe `src` attribute. It looks like:
   `https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true`
4. In `src/main.jsx`, replace `GOOGLE_FORM_EMBED_URL` with that URL.
5. Replace `GOOGLE_FORM_URL` with the normal published form URL ending in `/viewform`.
6. Save and refresh. The Google Form will appear inside the contact section and responses will be saved in Google Forms.

The current form ID is intentionally a placeholder. The website is ready, but the real Google Form cannot receive responses until you replace it with your own form URLs.

## Customize
- Change the brand name `CodeMentor` in `src/main.jsx`.
- Edit course descriptions and topics in the `courses` array.
- Adjust colors, layout and typography in `src/styles.css`.
