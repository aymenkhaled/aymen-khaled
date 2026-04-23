# aq-portfolio

A personal portfolio website for Aymen Khaled, a Full Stack Web Developer specializing in the MERN stack.

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS + PostCSS
- **Animations:** Framer Motion
- **State Management:** Redux Toolkit
- **Form Handling:** Formik
- **Email:** EmailJS
- **Icons:** React Icons
- **Scrolling:** React Scroll
- **Package Manager:** npm

## Project Structure

```
src/
  components/       # UI components organized by section
    heroSection/
    aboutMeSection/
    skillsSection/
    experienceSection/
    projectsSection/
    contactMeSection/
    navbar/
    footer/
  framerMotion/     # Animation variants
  state/            # Redux store and slices
  assets/           # Static SVG assets
  App.jsx           # Main app orchestrator
  main.jsx          # Entry point with Redux Provider
public/             # Static assets (CV PDFs, images, icons)
```

## Development

Run the dev server on port 5000:
```
npm run dev
```

## Deployment

Configured as a **static** deployment:
- Build command: `npm run build`
- Public directory: `dist`
