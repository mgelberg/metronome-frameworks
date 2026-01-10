# Changelog

All notable changes to the Metronome Frameworks website.

## [2026-01-09] - Initial Vercel Deployment & Setup

### 🚀 Deployment
- **Deployed website to Vercel**
  - Production URL: https://metronomeframeworks.com
  - Preview URL: https://metronome-frameworks.vercel.app
- **Connected custom domain** metronomeframeworks.com via DNS configuration
- **Set up GitHub repository** at https://github.com/mgelberg/metronome-frameworks

### 🔧 Configuration & Infrastructure
- **Installed Node.js and npm** via Homebrew for local development
- **Installed Vercel CLI** for deployment management
- **Configured Git workflow** with production and development branches
- **Set up branch structure:**
  - `main` - Production branch (deploys to live site)
  - `dev` - Development/staging branch (generates preview URLs)
- **Created WORKFLOW.md** documentation for dev → production process

### 🎨 Design & Content Updates
- **Replaced placeholder image** with local headshot in About section
  - Added `public/headshot.jpeg`
  - Updated [About.tsx](components/About.tsx) to use local image
  - Added grayscale-to-color hover effect
- **Updated About section copy**
  - Added founding information (May 2025)
  - Personalized company description
- **Fixed text wrapping issue** in Hero section
  - Added `whitespace-nowrap` to "Frameworks." to prevent word breaking

### 🧹 Cleanup & Optimization
- **Removed Gemini AI integration**
  - Deleted `services/geminiService.ts`
  - Removed AI Brand Voice section from StyleGuide component
  - Removed `@google/genai` dependency from package.json
  - Removed `BrandVoice` type interface
  - Deleted `.env.local` file
- **Fixed Tailwind config performance issue**
  - Updated content patterns to avoid scanning `node_modules`
  - Changed from `./**/*.{js,ts,jsx,tsx}` to specific directories

### 📝 Documentation
- **Created WORKFLOW.md** - Complete guide for development workflow
- **Created CHANGELOG.md** - This file

### 🔄 Git History
- Migrated from `vercel-deployment` branch to clean `main`/`dev` workflow
- Configured Vercel to deploy from `main` branch for production
- Set up automatic preview deployments for `dev` branch

### 📦 Dependencies
- Installed project dependencies (`npm install`)
- Node.js v25.2.1
- npm v11.6.2
- Vercel CLI v50.1.6

---

## Future Updates

Future changes will be documented here following this format:

```markdown
## [YYYY-MM-DD] - Brief Description

### Added
- New features

### Changed
- Changes to existing functionality

### Fixed
- Bug fixes

### Removed
- Removed features
```
