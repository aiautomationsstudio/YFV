# Quick Start Guide - YFV Platform

## 🚀 Get Started in 5 Minutes

### Step 1: Prerequisites Check

Make sure you have:
- ✅ Node.js 16.x or higher installed
- ✅ npm or yarn package manager
- ✅ Git (optional)

Check your Node version:
```bash
node --version
npm --version
```

### Step 2: Installation

```bash
# Navigate to project directory
cd yfv-platform

# Install dependencies
npm install
```

This will install all required packages including:
- React
- React Router DOM
- Tailwind CSS
- Lucide React (icons)
- React Helmet Async (SEO)
- i18next (internationalization)

### Step 3: Environment Setup

```bash
# Copy example environment file
cp .env.example .env

# Edit .env file with your configurations
# (For development, you can use the default values)
```

### Step 4: Start Development Server

```bash
npm run dev
```

The app will automatically open at: **http://localhost:3000**

## 🎯 Project Tour

### 1. Home Page (`/`)
- Landing page with hero section
- Key features showcase
- Quick action cards
- Statistics section

### 2. Book Appointment (`/book-appointment`)
- Multi-step booking flow
- Centre selection
- Slot selection
- Payment integration

### 3. Validate Certificate (`/validate-certificate`)
- QR code scanner
- Manual certificate number entry
- Instant validation results

### 4. Find Centres (`/centres`)
- Map-based centre locator
- List view with filters
- Centre details page

## 📝 Making Changes

### Adding a New Page

1. Create page component in appropriate directory:
```jsx
// src/pages/YourPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const YourPage = () => {
  return (
    <>
      <Helmet>
        <title>Your Page Title - YFV Platform</title>
        <meta name="description" content="Page description" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Your Page</h1>
        {/* Your content */}
      </div>
    </>
  );
};

export default YourPage;
```

2. Add route in `App.jsx`:
```jsx
import YourPage from './pages/YourPage';

// In Routes:
<Route path="/your-page" element={<YourPage />} />
```

### Styling with Tailwind

Use utility classes directly:
```jsx
<div className="bg-white rounded-lg shadow-md p-6">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">
    Title
  </h2>
  <button className="btn-primary">
    Click Me
  </button>
</div>
```

Available custom classes:
- `btn-primary` - Primary button
- `btn-secondary` - Secondary button
- `btn-outline` - Outlined button
- `card` - Card container
- `input-field` - Form input
- `section-title` - Page title
- `page-container` - Main container

### Adding Icons

```jsx
import { Calendar, MapPin, User } from 'lucide-react';

<Calendar size={24} className="text-brand-700" />
```

Browse all icons: https://lucide.dev/icons

### Multi-language Support

1. Add translations in `src/i18n.js`:
```javascript
const resources = {
  en: {
    translation: {
      "your_key": "English Text"
    }
  },
  hi: {
    translation: {
      "your_key": "हिंदी टेक्स्ट"
    }
  }
};
```

2. Use in components:
```jsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return <h1>{t('your_key')}</h1>;
};
```

## 🏗️ Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

Build output will be in `/dist` directory.

## 🎨 Customizing Design

### Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  brand: {
    700: '#0369a1',  // Change this
  },
  accent: {
    500: '#f59e0b',  // Change this
  }
}
```

### Fonts

Edit `tailwind.config.js` and update Google Fonts link in `index.html`:
```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

## 🔧 Common Tasks

### Add New Navigation Link

Edit `src/components/layout/Header.jsx`:
```jsx
<Link to="/your-page" className="hover:text-accent-200">
  Your Page
</Link>
```

### Add Footer Link

Edit `src/components/layout/Footer.jsx`:
```jsx
<Link to="/your-page" className="text-gray-400 hover:text-white">
  Your Page
</Link>
```

### Create Reusable Component

```jsx
// src/components/common/Card.jsx
const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
```

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000 (Linux/Mac)
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- --port 3001
```

### Tailwind Styles Not Working

```bash
# Rebuild Tailwind
npm run build

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Import Errors

Make sure all imports use correct paths:
```jsx
// ✅ Correct
import Header from './components/layout/Header';

// ❌ Wrong
import Header from './components/Header';
```

## 📚 Next Steps

1. **Explore the codebase** - Check out different pages and components
2. **Read README.md** - For detailed documentation
3. **Check design system** - View `typography_and_branding.html`
4. **Study routing** - Review `App.jsx` for all routes
5. **Connect to API** - Integrate with backend services

## 🆘 Getting Help

- Check README.md for detailed docs
- Review existing components for examples
- Use browser DevTools for debugging
- Check console for error messages

## 🎉 You're Ready!

Start building amazing features for the YFV Platform!

```bash
npm run dev
```

Happy Coding! 🚀
