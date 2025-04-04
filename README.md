<div align="center">
  <img src="images/content-removebg-preview.png" alt="Tetris AI Screenshot" width="600"/>
  <h1>🎮 The Tetris AI</h1>
  <p>
    A modern, AI-powered Tetris game with a stunning design and intelligent gameplay. Built with JavaScript, HTML5 Canvas, and a touch of creativity! 🚀
  </p>
  
  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Version-1.0.0-blue.svg" alt="Version"/>
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License"/>
    <img src="https://img.shields.io/badge/JavaScript-ES6-yellow.svg" alt="JavaScript"/>
    <img src="https://img.shields.io/badge/HTML5-Canvas-orange.svg" alt="HTML5 Canvas"/>
  </p>

  <a href="#get-started">Get Started</a> •
  <a href="#features">Features</a> •
  <a href="#file-structure">File Structure</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#credits">Credits</a>
</div>

---

## 🌟 Introduction

Welcome to **The Tetris AI**, a beautifully redesigned Tetris game that combines classic gameplay with modern aesthetics and AI-powered intelligence! Watch as the AI plays Tetris with precision, or take control yourself in this visually stunning experience. With vibrant colors, gradient effects, and a sleek interface, this project brings Tetris into the 21st century. 🎉

Built using JavaScript, HTML5 Canvas, and CSS, this project features a responsive design, enhanced piece rendering, and a clean landing page to welcome players. Whether you're a gamer, a developer, or an AI enthusiast, The Tetris AI offers something for everyone.

---

## 🚀 Features

- **AI-Powered Gameplay** 🤖: Let the AI take control and play Tetris with optimal strategies.
- **Gorgeous Design** ✨: Vibrant colors, gradient effects, borders, and shadows make the pieces pop.
- **Responsive Layout** 📱: Play on any device, from desktops to mobile phones.
- **Modern Landing Page** 🖼️: A sleek landing page with a centered logo, start button, and GitHub link.
- **Enhanced Pieces** 🟦🟨: Pieces feature gradients, borders, and shadows for a 3D, floating effect.
- **Smooth Animations** 🎥: Fluid piece movements and rotations for an immersive experience.
- **Source Code Access** 📂: Explore the code and contribute via the GitHub repository.

---

## 🛠️ Get Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, etc.)
- A local server (e.g., `live-server` for VS Code, or any HTTP server) to run the game locally.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/dkconnect/ai-tetris.git
   cd ai-tetris
   ```
2. **Set Up a Local Server**:
   - If you have live-server installed:
     ```bash
     live-server
     ```
   - Alternatively, use Python’s HTTP server:
     ```bash
     python -m http.server 8000
     ```
   - Or use any other local server of your choice.
3. **Open the Game**:
   - Navigate to `http://localhost:8000` (or the port your server uses) in your browser.
   - Click **"Start the AI Tetris"** to begin!

---

## 🎮 Usage

### Landing Page
- The **index.html** page displays the Tetris AI logo, a **"Start the AI Tetris"** button, and a GitHub icon linking to the source code.
- Click the **"Start the AI Tetris"** button to proceed to the game.

### Game Page
- The **game.html** page features the Tetris grid, a **"Lines Cleared"** counter, a **"Next Piece"** preview, and buttons to **"Play AI"** or **"Reset"** the game.
- Click **"Play AI"** to watch the AI play Tetris, or use keyboard controls (if implemented) to play manually.
- The pieces are rendered with stunning gradients, borders, and shadows for a modern look.

### Explore the Code
- Check out the GitHub repository linked on the landing page to dive into the source code and contribute!

---

## 📁 File Structure

Here’s an overview of the project’s file structure:

```
ai-tetris/
├── images/                 # Image assets
│   ├── con.png             # Screenshot of the game
│   └── ico                 # Icon file (likely favicon)
├── js/                     # JavaScript files
│   ├── ai.js               # AI logic for playing Tetris
│   ├── gm.js               # Game manager (likely game_manager.js)
│   ├── grid.js             # Grid rendering and logic
│   ├── piece.js            # Piece definitions and movement logic
│   ├── polyfill.js         # Polyfills for browser compatibility
│   ├── rpg.js              # Random piece generator
│   ├── stop.js             # Stopwatch functionality
│   ├── timer.js            # Timer functionality
│   └── tuner.js            # AI tuning logic
├── style/                  # CSS styles
│   └── main.css            # Main stylesheet for the game
├── game.html               # Game page with the Tetris grid and controls
├── index.html              # Landing page with logo, start button, and GitHub link
└── README.md               # Project documentation
```

---

## 🤝 Contributing

Contributions are welcome! Whether you want to fix a bug, add a feature, or improve the design, we’d love to have your input.

### Steps to Contribute:
1. **Fork the Repository**: Click the **"Fork"** button on the GitHub repository page.
2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/your-username/ai-tetris.git
   cd ai-tetris
   ```
3. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make Changes**: Edit the code, test your changes, and ensure everything works.
5. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Add your feature description"
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

---

## 🙌 Credits

- **Creator**: Dibyanshu – The mastermind behind The Tetris AI.
- **Design Enhancements**: Modernized by Grok (xAI) with a stunning UI, vibrant colors, and enhanced piece rendering.
- **Libraries Used**:
  - **Font Awesome** – For the GitHub icon on the landing page.
  - **Google Fonts** – For the Poppins font used in the design.

---

## 📜 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/dkconnect">Dibyanshu</a></p>
  <p>Let’s play Tetris like never before! 🕹️</p>
</div>

