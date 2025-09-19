# 📖 Khougha Storybook Portfolio

## 🚀 Project Title & Description
**Khougha Storybook Portfolio** is a personal developer portfolio designed as an interactive storybook.  
It showcases my journey from science teacher and karate coach to full-stack software engineer specializing in **Backend, DevOps, and Frontend**.  

The project is both:
- A **capstone project** for my *AI for Developers Course* (demonstrating applied AI workflows in real development).  
- A **real-world portfolio** to attract freelance clients, land full-time software engineering opportunities, and build my personal brand.  

Key goals:
- Present my projects with a balance of **deep technical case studies** and **story-driven highlights**.  
- Impress recruiters, collaborators, and a very picky friend who will be my toughest critic.  
- Deliver a lightweight, fast, maintainable site that I can easily update using Markdown/JSON.  

---

## 🛠️ Tech Stack

**Frameworks & Libraries**
- [Next.js (App Router)](https://nextjs.org/) – Core framework  
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) – UI and type safety  
- [shadcn/ui](https://ui.shadcn.com/) + [Tailwind CSS](https://tailwindcss.com/) – Components and styling  
- [Framer Motion](https://www.framer.com/motion/) – Storybook-style animations (page flips/scroll transitions)  
- [MDX](https://mdxjs.com/) – For deep-dive case studies  

**Deployment & Tooling**
- [Vercel](https://vercel.com/) – Hosting & deployment  
- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Biome](https://biomejs.dev/) – Linting & formatting  
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) – Unit testing  
- [Playwright](https://playwright.dev/) – Integration & accessibility testing  

**Content System**
- Single JSON file (`content/portfolio.json`) as source of truth  
- MDX files for in-depth project case studies  

---

## ⚙️ Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mennatalla-Khougha/khougha-portfolio.git
   cd khougha-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** to [http://localhost:3000](http://localhost:3000).

### Tailwind CSS & shadcn/ui

This project uses Tailwind CSS for styling and shadcn/ui for the component library. The setup is already configured, but if you need to add new components, use the shadcn/ui CLI:

```bash
npx shadcn-ui@latest add <component-name>
```

### Framer Motion

Framer Motion is used for animations. To install it, run:

```bash
npm install framer-motion
```

---

## 🤖 AI Integration Strategy

AI tools are first-class citizens in this project. They scaffold, test, document, and refactor code across the lifecycle.  

### 🔹 Code generation
- Use **Cursor** and **Zed** AI agents to scaffold components (e.g., `BookShell`, `ProjectCard`, navigation).  
- Use **Google Gemini CLI** and **OpenAI Codex/GPT** for refactoring, generating Framer Motion patterns, and optimizing layouts.  
- Use **RabbitCode** (and similar tools) for proposing file trees, component APIs, and boilerplate tests.  

### 🔹 Testing
- AI prompts will generate **unit tests** with Vitest + React Testing Library (props, accessibility, reduced-motion states).  
- **Integration tests** created via AI for Playwright flows (e.g., chapter navigation, project deep-dive rendering, keyboard focus order).  

### 🔹 Documentation
- AI will draft **docstrings**, inline comments, and **README updates** to keep documentation synchronized with implementation.  
- AI-generated **changelogs** will summarize commits and PRs.  
- Case-study writeups (MDX) will be **AI-assisted summaries** of development stories.  

### 🔹 Context-aware techniques
- AI will be fed **file trees**, **diffs**, and **component signatures** when asking for refactors.  
- Content JSON and MDX snippets will be provided in prompts to align copywriting with schema.  
- Use a **“spec → impl” prompting pattern**: define acceptance criteria first, then generate code.  

---

## 📌 Project Plan (Milestones)

1. **Foundation** – Setup Next.js app, Tailwind, shadcn/ui, Framer Motion, JSON schema.  
2. **Chapters** – Implement About, Work, Projects (cards + deep dives), Writing, Earlier Career, Contact.  
3. **Polish** – Animations, badges, accessibility, responsive design, performance tuning.  
4. **AI Documentation & Tests** – Generate tests, README AI logs, finalize deployment on Vercel.  

---

## 📬 Contact
- **Email**: mkhougha@gmail.com  
- **GitHub**: [Mennatalla-Khougha](https://github.com/Mennatalla-Khougha)  
- **LinkedIn**: [linkedin.com/in/khougha](https://www.linkedin.com/in/khougha)  

