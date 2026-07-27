# ChrisVDev GitHub Pages site

This project is a simple Astro website designed to be published on GitHub Pages.

## 🚀 Scripts

Run the following commands from the repository root:

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## 🏗️ Build and deployment

The site is built as a static output in the dist folder and deployed automatically with GitHub Actions on every push to the main branch.

The deployment workflow is defined in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## 📁 Project structure

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
├── .github/workflows/
└── package.json
```

## 🌐 GitHub Pages

Once the repository is pushed to GitHub, enable Pages in the repository settings and select the GitHub Actions source.
