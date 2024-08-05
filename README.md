# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Installation du projet (pnpm)
    - pnpm create vite
    - cd my-project
    - pnpm install  (les dépendances)

## Installation de tailwind CSS dans le projet
    - pnpm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p

### configurer le fichier "tailwind.config.js"

        /** @type {import('tailwindcss').Config} */
        export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }

### ajouter les directivers tailwind au fichier index.css (par exemple)
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


## Installer daisyUI au package
    - pnpm add -D daisyui@latest

### configurer le fichier "tailwind.config.js"
    import daisyui from "daisyui"
    module.exports = {
    //...
    plugins: [
        daisyui,
    ],
    }

## Installation du package icônes "Lucide"
 - pnpm install lucide-react