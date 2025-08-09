# EduKidStaYNguyen Landing Page

A modern, responsive landing page for IT training courses with vibrant Dak Lak-inspired colors.

## Features

- ✅ Responsive design with Tailwind CSS v4
- ✅ Vibrant color scheme inspired by Dak Lak province
- ✅ Interactive components with hover effects
- ✅ Messenger integration
- ✅ Gallery section with images and videos
- ✅ Modern React components with TypeScript

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Create a new React project:**
```bash
npx create-react-app edukidstaynguyen-landing --template typescript
cd edukidstaynguyen-landing
```

2. **Install dependencies:**
```bash
npm install lucide-react class-variance-authority clsx tailwind-merge
npm install -D tailwindcss@next @tailwindcss/postcss
```

3. **Setup Tailwind CSS v4:**

Create `postcss.config.js`:
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

4. **Replace the contents of the following files with the provided code:**
   - `src/App.tsx`
   - `src/styles/globals.css`
   - Create the components directory structure as shown

5. **Update `src/index.tsx`:**
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

6. **Start the development server:**
```bash
npm start
```

## Project Structure

```
src/
├── App.tsx                          # Main application component
├── styles/
│   └── globals.css                  # Global styles with Dak Lak colors
├── components/
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Image component with fallback
│   └── ui/                          # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ...                      # Other UI components
└── index.tsx                        # Entry point
```

## Color Scheme

The project uses a vibrant color palette inspired by Dak Lak province:

- **Coffee Brown**: `#8B4513` - Primary brand color
- **Forest Green**: `#228B22` - Secondary color  
- **Highland Orange**: `#FF6347` - Accent color
- **Sky Blue**: `#4169E1` - Additional accent
- **Golden Yellow**: `#DAA520` - Highlight color
- **Earth Red**: `#CD853F` - Supporting color

## Customization

### Adding New Sections
Add new sections to `App.tsx` following the existing pattern:

```tsx
<section className="py-20 px-4 bg-gradient-to-r from-coffee-brown/5 to-forest-green/5">
  <div className="max-w-6xl mx-auto">
    {/* Your content here */}
  </div>
</section>
```

### Modifying Colors
Update the CSS custom properties in `styles/globals.css`:

```css
:root {
  --coffee-brown: #your-color;
  --forest-green: #your-color;
  /* etc... */
}
```

### Contact Information
Update contact details in the `App.tsx` file:
- Phone number: Search for "0349 528 472"
- Messenger link: Search for "edukidstaynguyen"
- Website: Search for "edukidstaynguyen.com"

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your repository to Netlify or Vercel
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this for your projects!# khoahoc1kem1
