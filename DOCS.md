# Erick Portfolio - Documentation

## Overview

**Erick Portfolio** is a modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. It showcases Erick Fonseca's work as a Frontend Developer and UI/UX/Graphic Designer with 3+ years of experience.

## 🚀 Features

- **Multi-language Support**: English (en-US) and Spanish (es-ES)
- **Content Management**: Powered by Contentful CMS
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Analytics**: Google Analytics integration
- **Modern UI**: Gradient designs, smooth animations, and professional layout
- **Resume Download**: PDF resume download functionality
- **Social Media Integration**: Links to professional profiles

## 🛠️ Tech Stack

### Frontend
- **Next.js 12.2.5** - React framework with SSR/SSG
- **React 18.2.0** - UI library
- **TypeScript 4.7.4** - Type safety
- **Tailwind CSS 3.1.8** - Utility-first CSS framework
- **SASS** - CSS preprocessor

### Content Management
- **Contentful** - Headless CMS
- **@contentful/rich-text-react-renderer** - Rich text rendering
- **cf-content-types-generator** - Type generation

### State Management & Data Fetching
- **SWR** - Data fetching and caching
- **React Context** - State management

### Testing
- **Jest** - Testing framework
- **@testing-library/react** - React testing utilities
- **@testing-library/jest-dom** - Custom Jest matchers

### Utilities
- **Axios** - HTTP client
- **Lodash** - Utility library
- **Day.js** - Date manipulation
- **File-saver** - File download
- **SweetAlert2** - Beautiful alerts
- **Classnames** - Conditional CSS classes

## 📁 Project Structure

```
erick-portfolio/
├── components/           # React components (Atomic Design)
│   ├── atoms/           # Basic building blocks
│   ├── molecules/       # Simple component combinations
│   ├── organisms/       # Complex UI sections
│   └── layouts/         # Page layouts
├── config/              # Configuration files
├── hooks/               # Custom React hooks
├── pages/               # Next.js pages and API routes
│   ├── [locale]/        # Dynamic locale routing
│   └── api/             # API endpoints
├── public/              # Static assets
├── styles/              # Global styles
├── types/               # TypeScript type definitions
└── tests/               # Test files
```

## 🎨 Design System

### Colors
- **Blue**: `#3A5AFF` - Primary brand color
- **Fuscia**: `#D942FF` - Secondary brand color
- **Pink**: `#FF00E5` - Accent color
- **Light**: `#F1F1F1` - Background color
- **Dark**: `#0F0F14` - Text color

### Typography
- **Sans**: Poppins (UI elements)
- **Mono**: Space Mono (code and technical content)

### Component Architecture
The project follows **Atomic Design** principles:
- **Atoms**: Button, Icon, Link, GradientButton
- **Molecules**: ImageWithFrame, LocaleSelect, RatingStars, RichTextRenderer
- **Organisms**: HeroSection, InfoSection, TechsSection, DevExpSection, DesignerSection, ContactSection, Navbar, MobileNav
- **Layouts**: MainLayout, LoadingLayout

## 🌐 Internationalization

### Supported Locales
- **en-US**: English (default)
- **es-ES**: Spanish

### Implementation
- Dynamic routing with `[locale]` parameter
- Contentful locale-specific content
- Context-aware translations
- Locale selector in navigation

## 📊 Content Management

### Contentful Integration
The portfolio uses Contentful as a headless CMS with the following content types:

- **Hero Section**: Personal introduction, avatar, resume
- **Info Section**: About me information
- **Technologies**: Skills and technologies
- **Developer Experience**: Work history and projects
- **Designer Experience**: Graphic design portfolio
- **Contact Section**: Contact information
- **Menu Items**: Navigation structure
- **Social Links**: Professional social media profiles

### API Structure
```typescript
interface PageContent {
  menuItems: TypeMenuItem[]
  socials: TypeSocial[]
  heroSection: TypeHeroSection
  infoSection: TypeInfoSection
  technologies: TypeTechnology[]
  developerExperience: TypeDeveloperExperience[]
  designerExperience: TypeDesignerExperience[]
  contactSection: TypeContactSection
}
```

## 🔧 Configuration

### Environment Variables
```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
NEXT_PUBLIC_GOOGLE_ANALITICS_KEY=your_ga_key
```

### Next.js Configuration
- **React Strict Mode**: Enabled
- **SWC Minification**: Enabled
- **Image Domains**: Contentful images allowed
- **Custom Fonts**: Poppins and Space Mono

## 🚀 Development

### Prerequisites
- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate Contentful types
pnpm generate-types
```

### Available Scripts
- `dev`: Start development server
- `build`: Build for production
- `start`: Start production server
- `lint`: Run ESLint
- `export`: Export static site
- `test`: Run Jest tests
- `test:watch`: Run tests in watch mode
- `generate-types`: Generate TypeScript types from Contentful

## 🧪 Testing

### Test Setup
- **Jest**: Testing framework
- **React Testing Library**: Component testing
- **Jest DOM**: Custom matchers

### Test Structure
- Unit tests for components
- Integration tests for hooks
- API route testing

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Default (320px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)

### Mobile Features
- Collapsible navigation menu
- Touch-friendly interactions
- Optimized typography scaling
- Responsive grid layouts

## 🎯 SEO & Performance

### SEO Features
- Meta tags for all pages
- Open Graph protocol support
- Twitter Card integration
- Structured data markup
- Sitemap generation

### Performance Optimizations
- Next.js Image optimization
- Code splitting
- Lazy loading
- SWR caching
- Static generation where possible

## 🔌 API Endpoints

### `/api/content`
**Method**: GET  
**Parameters**: `locale` (string)  
**Response**: PageContent object

Fetches all content for a specific locale from Contentful.

## 🎨 Custom Components

### Key Components

#### HeroSection
- Animated job title rotation
- Resume download functionality
- Responsive grid layout
- Gradient text effects

#### TechsSection
- Technology cards with ratings
- Hover animations
- Responsive grid

#### DevExpSection
- Work experience timeline
- Company logos and details
- Rating system

#### DesignerSection
- Portfolio showcase
- Behance integration
- Image galleries

#### ContactSection
- Contact form
- Social media links
- Email integration

## 🔄 State Management

### Context Providers
- **HeaderContext**: Manages current section for navigation
- **Page Content**: SWR-based data fetching and caching

### Custom Hooks
- `usePageContent`: Content fetching and locale management
- `useHeaderContext`: Navigation state management
- `useTopSection`: Scroll-based section detection
- `useLastValidValue`: Prevents loading states from showing stale data

## 🚀 Deployment

### Build Process
1. Install dependencies
2. Set environment variables
3. Run `pnpm build`
4. Deploy to hosting platform

### Recommended Platforms
- Vercel (optimized for Next.js)
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🔧 Maintenance

### Content Updates
- Update content through Contentful CMS
- No code deployment required for content changes
- Automatic type generation for new content types

### Code Updates
- Follow TypeScript best practices
- Maintain component atomicity
- Update tests for new features
- Keep dependencies updated

## 📈 Analytics & Monitoring

### Google Analytics
- Page view tracking
- User behavior analysis
- Performance monitoring
- Custom event tracking

### Error Monitoring
- Console error logging
- User feedback collection
- Performance metrics

## 🤝 Contributing

### Development Guidelines
1. Follow TypeScript best practices
2. Use Atomic Design principles
3. Write tests for new features
4. Maintain responsive design
5. Update documentation

### Code Style
- Prettier formatting
- ESLint rules
- TypeScript strict mode
- Component naming conventions

## 📄 License

This project is private and proprietary.

---

**Last Updated**: December 2024  
**Version**: 0.1.0  
**Author**: Erick Fonseca 