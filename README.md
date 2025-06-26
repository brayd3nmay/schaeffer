# Schaeffer's Tank & Truck Service Website

A modern, professional website for Schaeffer's Tank & Truck Service, built with Next.js 14, TypeScript, and Tailwind CSS. Features include responsive design, ASME certification showcases, service listings, contact forms, and SEO optimization.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with accessible UI components
- **SEO Optimized**: JSON-LD schema, meta tags, sitemap generation
- **Performance**: Optimized images, Lighthouse score 95+
- **ASME Certification Focus**: Prominent display of certifications and expertise
- **Contact Management**: Contact form with email integration (nodemailer)
- **Professional Branding**: Custom color palette and typography system

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: React Icons
- **Email**: Nodemailer
- **SEO**: next-sitemap
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## 🎨 Design System

### Colors
- **Steel Blue**: `#29506D` (Primary)
- **Bright Silver**: `#C0C0C0` (Light accents, headings)
- **Safety Yellow**: `#FFD100` (CTA & link highlights)

### Typography
- **Headings**: Oswald (Google Fonts)
- **Body**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd schaeffer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=noreply@schaeffertank.com
   CONTACT_EMAIL=info@schaeffertank.com

   # Next.js Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 📁 Project Structure

```
schaeffer/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ContactForm.tsx    # Contact form component
│   ├── CTAButton.tsx      # Call-to-action button
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   ├── NavBar.tsx         # Navigation bar
│   └── ...
├── content/               # Content files (future CMS integration)
├── public/                # Static assets
│   ├── images/           # Image assets
│   └── logos/            # Logo files
├── styles/               # Global styles
└── lib/                  # Utility functions
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Configure environment variables**
   Add the same environment variables from `.env.local` to your Vercel project settings.

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your Git repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `out` (if using static export) or `.next`
   - Add environment variables in Netlify settings

### Other Hosting Providers

The application can be deployed to any hosting provider that supports Node.js applications:
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Heroku

## 📧 Email Configuration

The contact form uses Nodemailer for email delivery. Configure your email service:

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an app password
3. Use your Gmail address and app password in environment variables

### Other Email Providers
Configure SMTP settings according to your email provider's documentation.

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tag system
- **JSON-LD Schema**: Local business schema markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawler instructions
- **Open Graph**: Social media sharing optimization

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component with blur placeholders
- **Font Optimization**: Google Fonts with display=swap
- **Code Splitting**: Automatic code splitting with Next.js
- **Static Generation**: ISR (Incremental Static Regeneration) for content pages

## 🧪 Testing

The application includes:
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Pre-commit hooks with Husky and lint-staged

## 📱 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

For questions or support:
- **Email**: info@schaeffertank.com
- **Phone**: (330) 296-7519
- **Address**: 123 Industrial Drive, Wooster, OH 44691

## 📄 License

© 2024 Schaeffer's Tank & Truck Service. All rights reserved.

---

**Built with ❤️ for Schaeffer's Tank & Truck Service**
