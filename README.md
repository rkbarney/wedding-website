# Wedding Website Template

A modern, responsive wedding website built with React, TypeScript, and Material-UI. Features a beautiful animated entrance, RSVP system, and schedule display.

## Features

- 🎨 Modern, clean design with customizable themes
- 📱 Fully responsive for all devices
- ✨ Elegant entrance animation
- 📝 RSVP management system
- 📅 Event schedule display
- 🖼️ Photo gallery support
- 🎯 Easy to customize and deploy

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/wedding-website.git
cd wedding-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Customization

### Basic Information

1. Update the main content in `src/pages/Home.tsx`:
   - Names
   - Date
   - Location
   - Photos

2. Modify the theme in `src/theme.ts`:
   - Colors
   - Fonts
   - Spacing

### Images

1. Place your images in the `public/images` directory
2. Update image references in the components:
   - Main photo: `Richard and Emily.jpeg`
   - Invitation: `invite_vertical.png`
   - Any additional photos

### Pages

The website includes several customizable pages:
- `Home.tsx`: Landing page with main information
- `Schedule.tsx`: Event timeline
- `RSVP.tsx`: RSVP form
- Add more pages as needed

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
   - Update `vite.config.ts` with your repository name
   - Run `npm run deploy`

Or deploy to your preferred hosting service (Netlify, Vercel, etc.)

## Customization Tips

### Animation
The entrance animation can be customized in `Home.tsx`:
```typescript
transition={{ 
  duration: 2,    // Animation duration
  ease: "easeOut" // Animation style
}}
```

### Colors
Update the theme colors in `theme.ts`:
```typescript
createTheme({
  palette: {
    primary: {
      main: '#your-color',
    },
    secondary: {
      main: '#your-color',
    },
  },
})
```

### Adding Features
The website is built with React and Material-UI, making it easy to add new features:
- Photo galleries
- Guest information
- Registry links
- Travel information
- Accommodation details

## Contributing

Feel free to fork this repository and customize it for your own wedding! If you make improvements that could benefit others, please submit a pull request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with React, TypeScript, and Material-UI
- Uses Framer Motion for animations
- Fonts from Google Fonts
- Icons from Material-UI Icons
