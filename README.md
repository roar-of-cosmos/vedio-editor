# Vedio Editor — Static Portfolio Website

This repository now contains a simple static website you can use as a portfolio for a video editor.

What's added:

- `index.html` — main site with sections: Home/Hero, Services, Portfolio, Contact
- `assets/css/styles.css` — basic responsive styles
- `assets/js/main.js` — small JS helpers (form handling, year)

How to publish (GitHub Pages):

1. On GitHub, go to this repository's Settings → Pages.
2. Under "Source", choose the `main` branch and the `/ (root)` folder, then save.
3. GitHub Pages will publish the site at `https://<your-username>.github.io/vedio-editor/` within a few minutes.

Custom domain (you mentioned a domain):

- If you have a custom domain, add a file named `CNAME` in the repository root containing only your domain (for example `example.com`).
- Configure your DNS to point to GitHub Pages. See: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

Contact form:

- The HTML form currently posts to Formspree (`https://formspree.io/f/your-form-id`). Replace `your-form-id` with your Formspree form ID, or change the form `action` to your preferred backend endpoint.
- As a fallback, users can click the email link `hello@example.com` which opens their mail client.

Next steps you might want me to do for you:

- Replace placeholder portfolio thumbnails with your real video thumbnails or embeds.
- Add a CNAME file if you provide the custom domain (you mentioned "ggit only" — please clarify the exact domain you want).
- Wire the contact form to Formspree or a serverless function and set the recipient email.

If you want changes now, tell me which things to update (domain, email address, portfolio items) and I'll update the files.
