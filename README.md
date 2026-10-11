# Carmelo & Julien — Wedding Invitation

A responsive, static wedding invitation website using a black, white, and dusty blue palette.

## Files
- `index.html` — invitation page, event details, RSVP form
- `style.css` — colors, layout, typography, mobile styling
- `script.js` — RSVP submission behavior

## Important: activate RSVP submissions
GitHub Pages hosts static files. The form needs a form service to collect guests' replies; this project is prepared for Formspree.

1. Create an account at https://formspree.io/ and create a new form.
2. Copy your form endpoint, which looks like `https://formspree.io/f/xxxxxxxx`.
3. Open `index.html` and replace `https://formspree.io/f/YOUR_FORM_ID` in the `<form ... action="...">` line with your real endpoint.
4. Commit and push the change to GitHub.
5. Submit a test RSVP and confirm it appears in your Formspree dashboard/email. Complete any email verification Formspree requests.

Until you replace `YOUR_FORM_ID`, the page intentionally warns that responses are not yet being collected.

## Publish with GitHub Pages
1. Sign in to GitHub and create a **new public repository** named `carmelo-julien-wedding`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository's root (not inside another nested folder).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. Wait for GitHub Pages to publish. Your website URL will usually be `https://YOUR-USERNAME.github.io/carmelo-julien-wedding/`.

## Personalize before sharing
- Add ceremony and reception times when confirmed.
- Confirm that the Google Maps search links point to the correct venues.
- Update the RSVP deadline if needed.
- Replace the generic hero background with a favorite photo later if desired.
- The RSVP guest count options currently range from 1–5; adjust these in `index.html` if your invitation allocations differ.

## Palette
- Ink black: `#17191d`
- Warm white: `#fbfaf8`
- Dusty blue: `#a9bdcf`
- Dusty blue accent: `#617f99`
