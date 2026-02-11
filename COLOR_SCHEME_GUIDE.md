# VBB Store - Color Scheme Configuration Guide

## Overview
The entire website color scheme is managed through CSS variables in `src/app/globals.css`. This allows you to change the entire website's colors from one central location.

## Main Brand Colors

### Location: `src/app/globals.css` (Lines 2-7)

```css
:root {
  --vbb-primary: #1877f2;        /* Facebook Blue - Main brand color */
  --vbb-secondary: #25d366;      /* WhatsApp Green - Secondary brand color */
  --vbb-accent: #ff6b35;         /* Accent Orange - Call-to-action buttons */
  --vbb-dark: #0a0b1a;          /* Dark Background */
  --vbb-light: #f8f9fa;         /* Light Background */
}
```

## How to Change Colors

### 1. Change Primary Color (Facebook Blue)
```css
--vbb-primary: #1877f2;  /* Change this hex code to your desired color */
--primary: 221 83% 53%;  /* Also update this HSL value for shadcn components */
```

### 2. Change Secondary Color (WhatsApp Green)
```css
--vbb-secondary: #25d366;  /* Change to your preferred secondary color */
```

### 3. Change Accent Color (Orange CTA buttons)
```css
--vbb-accent: #ff6b35;  /* Change to your preferred accent color */
```

### 4. Change Background Colors
```css
--vbb-dark: #0a0b1a;   /* Dark backgrounds */
--vbb-light: #f8f9fa;  /* Light backgrounds */
```

## Using Colors in Components

### Method 1: Direct VBB Colors
```tsx
<div className="bg-vbb-primary text-white">
  Primary colored element
</div>
```

### Method 2: Shadcn UI Colors (Recommended)
```tsx
<div className="bg-primary text-primary-foreground">
  Primary colored element
</div>
```

### Method 3: Legacy Colors
```tsx
<div className="bg-primary-blue text-white">
  Using legacy color variable
</div>
```

## Available Color Classes

### VBB Brand Colors
- `bg-vbb-primary` / `text-vbb-primary` - Facebook Blue
- `bg-vbb-secondary` / `text-vbb-secondary` - WhatsApp Green  
- `bg-vbb-accent` / `text-vbb-accent` - Accent Orange
- `bg-vbb-dark` / `text-vbb-dark` - Dark Background
- `bg-vbb-light` / `text-vbb-light` - Light Background

### Shadcn UI Colors (Auto-adjusts for dark mode)
- `bg-primary` / `text-primary` - Primary color
- `bg-secondary` / `text-secondary` - Secondary color
- `bg-accent` / `text-accent` - Accent color
- `bg-muted` / `text-muted-foreground` - Muted/subtle elements
- `bg-card` / `border-border` - Cards and borders

## Dark Mode Support

Dark mode colors are defined in the `.dark` class in `globals.css`. When dark mode is enabled, colors automatically switch:

```css
.dark {
  --background: 224 71% 4%;      /* Dark background */
  --foreground: 213 31% 91%;     /* Light text */
  --primary: 221 83% 53%;        /* Same Facebook Blue */
  /* ... other dark mode colors */
}
```

## Quick Color Change Examples

### Example 1: Change to Red Theme
```css
:root {
  --vbb-primary: #dc2626;        /* Red */
  --primary: 0 84% 60%;          /* Red in HSL */
}
```

### Example 2: Change to Purple Theme
```css
:root {
  --vbb-primary: #9333ea;        /* Purple */
  --primary: 271 81% 56%;        /* Purple in HSL */
}
```

### Example 3: Change to Green Theme
```css
:root {
  --vbb-primary: #16a34a;        /* Green */
  --primary: 142 71% 45%;        /* Green in HSL */
}
```

## Converting Hex to HSL

If you want to use a hex color, you need to also update the HSL value for shadcn components:

1. Go to: https://htmlcolors.com/hex-to-hsl
2. Enter your hex color (e.g., #1877f2)
3. Copy the H S L values (e.g., 221 83% 53%)
4. Update both values in `globals.css`

## Files to Update

1. **Main Colors**: `src/app/globals.css` (lines 2-50)
2. **Tailwind Config**: `tailwind.config.js` (already configured to use CSS variables)
3. **Components**: No changes needed - they use the variables automatically

## Best Practices

1. ✅ Always update both `--vbb-primary` (hex) and `--primary` (HSL) for consistency
2. ✅ Use `bg-primary` and `text-primary` in components for auto dark mode support
3. ✅ Test both light and dark modes after changing colors
4. ✅ Ensure sufficient contrast between text and backgrounds
5. ❌ Don't hardcode colors in components - use CSS variables

## Color Palette Generator

To generate a complete color scheme, use these tools:
- https://uicolors.app/create
- https://coolors.co/
- https://paletton.com/

## Need Help?

If you need to change the color scheme:
1. Open `src/app/globals.css`
2. Update the hex values in the `:root` section (lines 2-7)
3. Update the corresponding HSL values (lines 9-30)
4. Save and refresh your browser

The entire website will automatically update to use your new colors! 🎨
