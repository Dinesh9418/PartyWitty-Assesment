# PartyWitty

A modern social networking and dating app interface built with React, featuring user profiles, matching functionality, and a clean, responsive design.

## 🚀 Features

- **User Profiles**: Display user information with photos, tags, and mutual connections
- **Matching System**: Interactive cards with like/dislike actions and match buttons
- **Verification System**: Profile verification modal with benefits and quick setup
- **Responsive Layout**: Three-column layout with sidebar navigation, main feed, and right panel
- **Modern UI**: Clean design with gradients, shadows, and smooth animations
- **No Scroll**: Fixed viewport layout optimized for dashboard experience

## 🛠️ Tech Stack

- **Frontend**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Styling**: CSS with Bootstrap 5.3.8
- **UI Components**: React Bootstrap 2.10.10
- **Icons**: Emoji and custom CSS icons
- **Images**: Unsplash API for demo content

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd parttywitty
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── card/           # Reusable card component
│   ├── mainPage/       # Main feed section
│   ├── rightPanel/     # Right sidebar with verification
│   ├── sideBar/        # Left navigation sidebar
│   └── SectionHeader/  # Section header component
├── pages/
│   ├── Home/           # Home page layout
│   └── verify/         # Verification modal component
├── data/
│   └── homeData.js     # Static data for features
├── assets/             # Static assets (images, etc.)
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🎨 Components Overview

### SideBar
- Navigation menu with icons
- "More" button and corporate offer card
- User profile preview at bottom

### MainPage
- Profile cards with images and user info
- Interactive action buttons (like, dislike, match)
- Tags and mutual connections display

### RightPanel
- User preview with badge
- Verification call-to-action
- Step-by-step process explanation
- Benefits list and verification button

### VerifyButton
- Modal-style verification interface
- Profile icon with eyes animation
- Feature benefits and quick verification flow

## 🎯 Usage

The app is designed as a dashboard interface with three main sections:

1. **Left Sidebar**: Navigation and user info
2. **Main Feed**: Profile cards and matching actions
3. **Right Panel**: Verification and onboarding

All components are responsive and work well on desktop and mobile devices.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

### Code Style

- Uses ESLint with React-specific rules
- Follows React best practices with functional components
- CSS modules for component-specific styling
- Consistent naming conventions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images sourced from 
- Icons and emojis for UI elements
- Bootstrap for responsive utilities
- React community for excellent documentation

---

Built with ❤️ using React and Vite
