# Sargalayam 2024 Event Website

## Overview
This is a React frontend application for the Sargalayam 2024 event website. The application displays event information, teams, and programs fetched from a backend API.

## Recent Changes
- **Date: Sept 18, 2025**
  - Successfully imported and configured the project for Replit environment
  - Fixed Vite configuration to work with Replit's proxy system (host: 0.0.0.0, port: 5000)
  - Resolved JavaScript error in copyright year script by moving logic to React component
  - Set up workflow for development server
  - Configured deployment settings for autoscale deployment

## Project Architecture

### Tech Stack
- **Frontend**: React 18.3.1 with Vite 5.4.1
- **Styling**: React Bootstrap, Material-UI, Styled Components, Custom CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Animation**: AOS (Animate On Scroll)

### Project Structure
```
src/
├── assets/           # Static assets (logos, images)
├── Constant/         # URL constants for API endpoints
├── context/          # React contexts (team, program data)
├── layouts/          # Reusable layout components (Header, Footer, Banner)
├── pages/            # Page components (Home, Detail pages)
├── App.jsx           # Main app component with routing
└── main.jsx          # React app entry point
```

### Backend Integration
The frontend connects to external APIs hosted on Render:
- Team data: `https://sargalayamserver-mt7j.onrender.com/teams`
- Admin data: `https://sargalayamserver-mt7j.onrender.com/admin`
- Images: `https://sargalayamserver-mt7j.onrender.com/teamImages`
- Program images: `https://sargalayamserver-mt7j.onrender.com/programImg`

### Current Status
- Development server running on port 5000
- Hot reload working properly
- Application loads successfully
- API calls working successfully with new server URL
- Ready for deployment

### User Preferences
- None specified yet

## Development
- Run `npm run dev` to start development server
- Server configured for 0.0.0.0:5000 to work with Replit proxy
- Dependencies installed and working

## Deployment
- Configured for autoscale deployment
- Build: `npm run build`
- Serve: `npx serve -s dist -l 5000`