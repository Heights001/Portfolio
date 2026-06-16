# Heights Portfolio

Personal portfolio site for Daniel Okoh Yeboah.

## Stack

- React 19, Vite 7, Tailwind CSS v4, React Router DOM 7
- Plain JSX (no TypeScript, no tests)
- Tailwind v4: no config file needed — use `@import "tailwindcss"` in CSS
- Ionicons loaded from CDN in `index.html`

## Commands

```sh
npm run dev      # dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview production build
npm run lint     # ESLint (only verification tool)
```

No typechecker, no formatter config.

## Structure

- `src/main.jsx` — entrypoint, wraps App in `<BrowserRouter>` (but App uses no `<Routes>`; all sections render simultaneously, scrolled via hash anchors)
- `src/App.jsx` — renders Navbar + all 4 page sections + Footer
- Page sections: `PersonalInfo` (#personal), `Experiences` (#experience), `Projects` (#projects), `Contact` (#contact)
- Assets: profile images in `src/assets/`, resume PDF in `public/resume/`
- Deployed at https://heights-portfolio.vercel.app/

## Quirks

- Contact form uses [EmailJS](https://www.emailjs.com) — service ID, template ID, and public key are hardcoded in `src/pages/Contact.jsx`
- Navbar "About" link points to `#about` but no element has that id (scrolling goes nowhere)
- `Footer.jsx` imports `Link` from react-router-dom but never uses it (all links are `<a>`)
- `.gitignore` only has `.DS_Store` entries (no `dist/` — ESLint config ignores it instead)
