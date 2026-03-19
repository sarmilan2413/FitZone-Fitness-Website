# FitZone Fitness Website

FitZone is a responsive fitness landing website built with React, TypeScript, Vite, and Tailwind CSS. It includes a modern hero section, service highlights, transformation showcase, and a contact form with client-side validation.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Lucide icons

## Features

- Responsive navbar with section anchors
- Hero section with strong visual call-to-action
- About and Services sections with improved layout alignment
- Classes navigation linked to the transformation section
- Contact form with field validation and user feedback alerts
- Mobile-friendly spacing and typography

## Project Structure

```text
src/
	components/
		Navbar.tsx
		HeroSection.tsx
		WhyFitness.tsx
		Services.tsx
		Transformation.tsx
		ContactFooter.tsx
	pages/
		Index.tsx
	index.css
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Contact Form Validation

The contact form validates required fields before submission:

- Shows `Please fill all fields` when any input is empty
- Shows `Message sent successfully!` when all fields are completed

## License

This project is for educational and portfolio use.
