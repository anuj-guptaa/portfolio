# Quick Start Guide

## 🚀 Get Your Portfolio Running in Minutes

### Option 1: Docker (Recommended)

```bash
# Clone or navigate to your portfolio directory
cd portfolio

# Build and run with Docker Compose (Development with Hot Reload)
docker-compose up --build

# Open browser to http://localhost:5173
```

**Hot reload is enabled!** Make changes to your code, and they'll automatically reflect in the browser without manual refresh.

For production build:
```bash
docker-compose -f docker-compose.prod.yml up --build
```

**That's it!** Your portfolio is live and containerized.

---

### Option 2: Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

---

## 📝 Personalize Your Portfolio (5 Steps)

### 1. Update Your Name & Bio
Edit `src/components/Hero.jsx`:
- Line 19: Change "Full Stack Developer" to your title
- Line 23: Update the description

### 2. Add Your Projects
Edit `src/components/Projects.jsx`:
- Look for the `projects` array (around line 5)
- Replace sample projects with yours
- Each project needs:
  - `title`: Project name
  - `description`: What it does
  - `emoji`: Relevant emoji
  - `tags`: Technologies used
  - `github`: Link to GitHub repo
  - `live`: Link to live demo (optional)

### 3. Update Your Skills
Edit `src/components/Skills.jsx`:
- Update each skill category with your technologies
- Modify icons if desired

### 4. Add Contact Information
Edit `src/components/Contact.jsx`:
- Line 77: Update email address
- Line 81: Update location
- Line 86: Social links at bottom

### 5. Customize Colors (Optional)
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Change this
      accent: '#3b82f6',       // And this
    },
  },
}
```

---

## 📊 What Each Section Does

| Section | Purpose | Edit File |
|---------|---------|-----------|
| Header | Navigation menu | `src/components/Header.jsx` |
| Hero | Introduction & CTAs | `src/components/Hero.jsx` |
| Projects | Showcase your work | `src/components/Projects.jsx` |
| Skills | List technologies | `src/components/Skills.jsx` |
| Contact | Get inquiries | `src/components/Contact.jsx` |
| Footer | Copyright info | `src/components/Footer.jsx` |

---

## 🔧 Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Create production build
npm run preview      # Test production build locally
npm run lint         # Check code quality

# Docker
docker-compose up --build      # Build & run with Docker
docker-compose down            # Stop containers
docker build -t portfolio .    # Manual build
docker run -p 5173:5173 portfolio  # Manual run
```

---

## 🌐 Deploy Your Portfolio

### Free Options:
- **Vercel** (Best for React): Push to GitHub, auto-deploy
- **Netlify**: Drag & drop your `dist` folder
- **GitHub Pages**: Build and deploy automatically

### With Docker:
- **AWS**: ECS, App Runner
- **Digital Ocean**: App Platform
- **Heroku**: Docker container deployment
- **Railway**: Push-button Docker deployment

---

## 📧 Enable Contact Form

The contact form currently logs to console. To actually email submissions:

**Option A: Formspree (Easiest)**
1. Go to https://formspree.io
2. Create account and add your form
3. Copy your form endpoint
4. Update `Contact.jsx` to POST to your endpoint

**Option B: EmailJS (Client-side)**
1. Sign up at https://emailjs.com
2. Install: `npm install @emailjs/browser`
3. Update `Contact.jsx` with your credentials

**Option C: Your own backend API**
- Create a backend service
- Update the form submission to POST to your API

---

## 🎨 Design Tips for Recruiters

✅ **Do:**
- Keep it clean and minimal
- Use consistent colors (2-3 max)
- Showcase your best 3-6 projects
- Include working links
- Add real project descriptions
- Use professional photos/previews

❌ **Don't:**
- Use too many animations (can be distracting)
- Resize images poorly
- Leave placeholder text
- Have broken links
- Use outdated technologies
- Make it cluttered

---

## 🆘 Troubleshooting

**Port 5173 already in use?**
```bash
# Kill the process on that port and try again
# Or use a different port: vite --port 3000
```

**Docker won't build?**
```bash
# Clear Docker cache and rebuild
docker system prune
docker-compose up --build
```

**Things look weird?**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📱 Mobile Testing

Test on mobile before deploying:
```bash
# Get your local IP
# Windows: ipconfig
# Mac/Linux: ifconfig

# Then visit: http://<YOUR_IP>:5173
```

---

## 🎯 Next Steps

1. ✏️ Personalize all sections (Step 1-5 above)
2. 🖼️ Add project screenshots/previews
3. 🔗 Get all your social links ready
4. 📧 Set up contact form
5. 🚀 Deploy to your hosting platform
6. 📊 Monitor with analytics (optional)

---

**Your professional portfolio is now ready to impress! 🎉**
