# Arwin Arun Swapna - Portfolio Website

A modern, fully responsive portfolio website showcasing professional experience, projects, and skills. Built with Next.js 14, TypeScript, and Tailwind CSS.

**Website**: [arwinswapna.netlify.app](https://arwinswapna.netlify.app)

## ✨ Features

- 🌓 **Dark/Light Mode** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive** - Desktop-first design that works perfectly on all devices
- ⚡ **Lightning Fast** - Optimized with Next.js 14 and modern web standards
- 🎨 **Beautiful UI** - Clean, minimal design using Tailwind CSS
- 🔍 **SEO Optimized** - Proper metadata and structured data markup
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🎯 **Smooth Navigation** - Native HTML anchor navigation with CSS scroll behavior

## 🛠 Tech Stack

| Category          | Technology   |
| ----------------- | ------------ |
| **Framework**     | Next.js 14   |
| **Language**      | TypeScript   |
| **Styling**       | Tailwind CSS |
| **UI Components** | shadcn/ui    |
| **Icons**         | Lucide React |
| **Themes**        | next-themes  |
| **Deployment**    | Netlify      |

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx           # Root metadata & layout
│   ├── layout-client.tsx    # Client-side layout with navigation
│   ├── page.tsx             # Home page with all sections
│   ├── globals.css          # Global styles
│   └── fonts/               # Custom fonts
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── theme-provider.tsx   # Theme context provider
│   ├── theme-toggle.tsx     # Dark/light mode toggle
│   └── structured-data.tsx  # Schema.org markup
├── lib/
│   ├── data.ts              # Content data (projects, experiences, skills)
│   └── utils.ts             # Utility functions
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/arwin-swapna/minimal-portfolio.git
cd minimal-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

All content is centralized in `lib/data.ts` for easy updates:

### Projects

Add or modify projects with title, description, technologies, and links:

```typescript
{
  title: "Project Name",
  description: "Project description",
  technologies: ["React", "TypeScript"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://..."
}
```

### Experience

Update your work history:

```typescript
{
  company: "Company Name",
  position: "Job Title",
  date: "Start – End",
  location: "City, State",
  technologies: ["Tech1", "Tech2"]
}
```

### Skills

Organize skills by category:

```typescript
{
  category: "Languages",
  items: ["JavaScript", "TypeScript", "Python"]
}
```

## 🎨 Theming

The site uses `next-themes` for theme management:

- Light mode
- Dark mode (default)
- System preference detection

Customize colors in `tailwind.config.ts` under the theme section.

## 📊 Performance

- ⚡ Fast page loads with Next.js optimization
- 🖼️ Optimized images and assets
- 📦 Minimal JavaScript bundle
- 🎯 Core Web Vitals optimized

## 🔐 SEO

- ✅ Proper meta tags and Open Graph
- ✅ Structured data (Schema.org)
- ✅ Semantic HTML
- ✅ Mobile-friendly
- ✅ Canonical URLs

## 📱 Responsive Design

- **Mobile**: Optimized for small screens
- **Tablet**: Comfortable viewing experience
- **Desktop**: Full navigation and layouts
- **Wide screens**: Centered content with max-width

## 🚢 Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Vercel

1. Push code to GitHub
2. Import project to Vercel
3. Automatic deployment on push

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 👤 Author

**Arwin Arun Swapna**

- 📧 Email: [arwinswapna@gmail.com](mailto:arwinswapna@gmail.com)
- 💼 LinkedIn: [@arwinswapna](https://linkedin.com/in/arwinswapna)
- 💻 GitHub: [@arwin-swapna](https://github.com/arwin-swapna)
- 🌐 Portfolio: [arwinswapna.netlify.app](https://arwinswapna.netlify.app)

---

**Made with ❤️ using Next.js and TypeScript**
