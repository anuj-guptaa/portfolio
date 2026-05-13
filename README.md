# Public Assets

This folder contains static assets served by Vite.

## Structure

```
public/
├── profile.jpg        # Your hero/profile image (appears in Hero section)
└── gallery/
    ├── project-1.jpg  # Gallery carousel images
    ├── project-2.jpg
    ├── project-3.jpg
    └── project-4.jpg
```

## Setup Instructions

### 1. Add Your Profile Image

1. Add your profile/hero image to this folder
2. Name it `profile.jpg`
3. Recommended: Square aspect ratio (1:1), minimum 400x400px
4. Format: JPG, PNG, or WebP

**Location**: `public/profile.jpg`

### 2. Add Gallery Images

1. Create or ensure `public/gallery/` folder exists
2. Add your project screenshot or portfolio images:
   - `project-1.jpg`
   - `project-2.jpg`
   - `project-3.jpg`
   - `project-4.jpg`

**Recommended**: 
- Aspect ratio: 16:9 or similar
- Size: 1200x675px minimum
- Format: JPG or PNG (WebP for better compression)

## Image References

The portfolio uses the following image paths:

**Hero Section** (`src/components/Hero.jsx`):
```javascript
src="/profile.jpg"
```

**Gallery Section** (`src/components/Gallery.jsx`):
```javascript
const galleryImages = [
  { src: '/gallery/project-1.jpg', alt: 'DevOps Architecture Project' },
  { src: '/gallery/project-2.jpg', alt: 'Kubernetes Deployment' },
  { src: '/gallery/project-3.jpg', alt: 'CI/CD Pipeline' },
  { src: '/gallery/project-4.jpg', alt: 'Cloud Infrastructure' },
]
```

## Hot Reload

After adding images, your development server will automatically detect changes and reload (if using `npm run dev` with Docker hot reload enabled).
