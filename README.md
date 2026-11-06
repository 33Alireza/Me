# Alireza Yousefzadeh — Portfolio & Interactive Terminal

> Mobile Software Engineer specializing in Android, iOS, and Kotlin Multiplatform development.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://33alireza.github.io/Me/)
[![Next.js App Router](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

---

## ✨ Features

- **Interactive Virtual Terminal**: A fully functional in-memory shell (`bash`) supporting 20+ commands (`help`, `ls`, `cd`, `cat`, `whoami`, `neofetch`, `sudo hire alireza`, etc.), history navigation, tab completion, and mobile command chips.
- **Data-Driven Architecture**: All profile info, projects, work experience, certificates, and social links are decoupled into type-safe data files (`data/`).
- **Dark & Light Themes**: Seamless theme switching with FOUC prevention and `localStorage` persistence.
- **Micro-Interactions & Easter Eggs**: Desktop tilt micro-interactions, reading scroll progress bar, Konami code and logo-tap confetti explosions.
- **Mobile First & Fully Accessible**: Responsive down to 320px with 0 horizontal overflow, skip-to-content keyboard shortcut, and WCAG AA contrast compliance.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) (Static Export for GitHub Pages)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & Custom CSS Motion Tokens
- **Icons**: FontAwesome & React Icons
- **Deployment**: GitHub Actions & GitHub Pages

---

## 📁 Folder Structure

```text
├── app/                  # Next.js App Router (pages, layout, sitemap, robots, not-found)
├── components/
│   ├── layout/           # Navbar, Footer, PortfolioBackground
│   ├── sections/         # Hero, About, Experience, Projects, Certificates, Social, Contact
│   ├── terminal/         # Interactive virtual terminal & command registry
│   └── ui/               # Reusable UI primitives (TechBadge, TiltCard, ScrollProgress, etc.)
├── data/                 # Data-driven content (profile, projects, experience, skills, socials, certificates)
├── hooks/                # Custom React hooks
├── types/                # Strict TypeScript type definitions
└── public/               # Static assets (images, icons, resume.pdf)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed on your machine.
- npm or pnpm.

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/33Alireza/Me.git
cd Me

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev       # Start local dev server
npm run build     # Create optimized static production build
npm run start     # Start production server locally
npm run lint      # Run ESLint checks
npm run typecheck # Run TypeScript type checking
npm run format    # Format codebase with Prettier
```

---

## 📝 Updating Content

All portfolio content is fully data-driven. To update your information, simply edit the files inside the `data/` folder:

- `data/profile.ts`: Bio, role, tagline, and stats.
- `data/projects.ts`: Featured and compact projects, descriptions, tags, and image paths.
- `data/experience.ts`: Work history, roles, companies, and bullet points.
- `data/skills.ts`: Technical skills, categories, and icons.
- `data/socials.ts`: Social media profiles and priorities.
- `data/certificates.ts`: Certificates and credentials.

---

## 🚢 Deployment

The portfolio is automatically deployed to **GitHub Pages** via GitHub Actions whenever changes are pushed to the `master` or `main` branch.

Check out the workflow configuration in `.github/workflows/deploy.yml`.

---

## 📄 License

[MIT](LICENSE) © 2026 Alireza Yousefzadeh
