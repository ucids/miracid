# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Miracid is a static HTML website for an electrical solutions company based in Mexico. The site provides information about electrical services, products, equipment, and industrial solutions. The website is built using a modern HTML/CSS/JavaScript stack with Bootstrap and Sass for styling.

## Architecture & Structure

### Frontend Technology Stack
- **HTML5**: Static HTML pages with semantic structure
- **Sass/SCSS**: Modular CSS preprocessing with component-based architecture
- **Bootstrap**: CSS framework for responsive design
- **JavaScript**: jQuery-based interactions with multiple libraries
- **Third-party Libraries**: Swiper.js, GSAP, WOW.js for animations and interactions

### Directory Structure
```
miracid/
├── assets/
│   ├── css/           # Compiled CSS files and third-party stylesheets
│   ├── sass/          # Sass source files (modular SCSS)
│   │   ├── default/   # Base styles and common elements
│   │   ├── section/   # Section-specific styles
│   │   └── style.scss # Main Sass entry point
│   ├── js/           # JavaScript libraries and custom scripts
│   ├── img/          # Images and media assets
│   └── font/         # Web fonts and icon fonts
├── *.html            # Individual HTML pages for different sections
└── portfolio/        # Additional portfolio content
```

### Sass Architecture
- **Main Entry**: `assets/sass/style.scss`
- **Modular Structure**: Organized into `default/` (base styles) and `section/` (component styles)
- **CSS Output**: Compiled to `assets/sass/style.css` with source maps
- **Key Files**:
  - `_common.scss`: Global styles, typography, buttons, animations
  - `_header.scss`: Navigation and menu styles
  - Individual section files for components (banners, services, etc.)

### Page Structure
- **Homepage**: `index.html` - Main landing page with company overview
- **Product Pages**: Individual HTML files for different electrical products/services
- **Service Pages**: Specialized pages for maintenance, installation, studies
- **Contact**: Contact form and company information
- **Multi-language**: Content primarily in Spanish (Mexican market)

## Development Commands

### CSS Compilation
The project uses Sass for CSS preprocessing. The compiled CSS file already exists, but for modifications:

```bash
# If using Sass CLI (requires Sass installation)
sass assets/sass/style.scss assets/sass/style.css --watch

# For one-time compilation
sass assets/sass/style.scss assets/sass/style.css
```

### Local Development Server
Since this is a static site, use any local server:

```bash
# Using Python (if available)
python -m http.server 8000

# Using Node.js http-server (if available)
npx http-server

# Using Live Server extension in VS Code
```

### Asset Management
- **Images**: Place in `assets/img/` with descriptive names
- **New Sass Components**: Add to `assets/sass/section/` and import in `_all.scss`
- **JavaScript**: Add to `assets/js/` and reference in HTML files

## Key Components & Features

### Navigation System
- Multi-level dropdown menus with hover effects
- Mobile-responsive hamburger menu
- Sticky header with scroll animations
- Custom menu styling with brand colors

### Styling System
- **Brand Colors**: Custom CSS variables defined in `_common.scss`
  - Primary: `--primary-color-1: #FFBF43` (Golden yellow)
  - Secondary: `--color-1: #222222` (Dark text)
  - Background: Various shades defined in CSS custom properties
- **Typography**: DM Sans (body) and Instrument Sans (headings)
- **Button System**: `.build_button` class with hover animations
- **Animations**: Custom CSS animations and GSAP integration

### JavaScript Libraries
- **jQuery 3.6.0**: Base JavaScript functionality
- **Bootstrap**: UI components and grid system
- **Swiper.js**: Image sliders and carousels
- **GSAP**: Advanced animations and scroll triggers
- **WOW.js**: Scroll-reveal animations
- **Magnific Popup**: Lightbox functionality

### Content Management
- **Static Content**: All content is hardcoded in HTML
- **Bilingual Elements**: Primarily Spanish with some English technical terms
- **SEO Structure**: Semantic HTML with proper meta tags
- **Responsive Design**: Mobile-first approach with Bootstrap grid

## Maintenance Guidelines

### Adding New Pages
1. Copy an existing HTML template
2. Update navigation menu in header section
3. Modify content sections as needed
4. Ensure consistent footer and meta information
5. Test responsive behavior across devices

### Styling Changes
1. Work in Sass files, never directly edit compiled CSS
2. Follow the existing modular structure
3. Use CSS custom properties for consistent theming
4. Test across different screen sizes
5. Maintain accessibility standards

### Performance Considerations
- **Image Optimization**: Compress images before adding to `assets/img/`
- **CSS Minification**: Consider minifying compiled CSS for production
- **JavaScript Loading**: Scripts are loaded at page bottom for performance
- **Font Loading**: Web fonts are loaded via Google Fonts CDN

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- CSS Grid and Flexbox support required
- JavaScript ES6+ features may need polyfills for older browsers

## Business Context

This website serves Miracid, an electrical solutions company that provides:
- Custom electrical products (transformers, lighting, conductors)
- Industrial ventilation systems (HVLS fans)
- Electrical installation and maintenance services
- Equipment rental and distribution
- Energy efficiency consulting

The site targets industrial clients in Mexico and emphasizes technical expertise, safety compliance, and custom solutions.
