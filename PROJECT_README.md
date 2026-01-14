# Portfolio Website - TonyTran

Modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Ready to deploy on Vercel.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** Vercel

## ✨ Features

- 🎨 Modern, responsive design
- 🌙 Dark mode support
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 🚀 Ready for Vercel deployment

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure everything
   - Click "Deploy"

3. **That's it!** Your site will be live in minutes.

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

## 📁 Project Structure

```
tonytran198/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills section
│   ├── Experience.tsx     # Experience section
│   ├── Projects.tsx       # Projects section
│   └── Contact.tsx        # Contact section
├── public/                # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── vercel.json            # Vercel configuration
```

## 🎨 Customization

### Update Personal Information

Edit the data in each component file:
- `components/Hero.tsx` - Hero section
- `components/About.tsx` - About section
- `components/Skills.tsx` - Skills
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Projects
- `components/Contact.tsx` - Contact information

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Add/Remove Sections

1. Add new component in `components/` folder
2. Import and add to `app/page.tsx`
3. Add navigation link in `components/Navigation.tsx`

## 🔧 Configuration

### Vercel Configuration

The `vercel.json` file is already configured for optimal deployment:
- Framework: Next.js
- Build command: `npm run build`
- Region: Singapore (sin1) for better performance in Asia

### Next.js Configuration

The `next.config.js` includes:
- Image optimization
- React strict mode
- External image domains configuration

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Environment Variables

No environment variables required for basic setup. Add them in `.env.local` if needed:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:
1. Delete `node_modules` and `.next` folder
2. Run `npm install` again
3. Run `npm run build`

### Vercel Deployment Issues

1. Check that `vercel.json` is in the root directory
2. Ensure `package.json` has correct scripts
3. Check Vercel build logs for specific errors

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Happy Coding! 🚀**
