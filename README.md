# New Boroughs NYC — Landing Page

A modern, responsive landing page for New Boroughs NYC with autoplay background music, action buttons, and audio controls.

## Features

- **Game Title & Logo** — Displays game name with custom logo
- **Action Buttons** — One Discord button and one Roblox play button (easily editable)
- **Autoplay Music** — Background music plays automatically when you enter the site
- **Audio Widget** — Bottom-right player with:
  - Play/pause control
  - Mute/unmute toggle
  - Volume slider with persistence
  - Seekable progress bar with time display
- **Responsive Design** — Mobile-friendly layout

## File Structure

```
index.html          — Main landing page
styles.css          — All styling (button colors, layout, audio widget)
script.js           — JavaScript (audio controls, autoplay, volume persistence)
background.gif      — Background animation (place in root)
logo.png            — Game logo (place in root)
music.mp3           — Background music (place in root)
README.md           — This file
```

## Setup

### 1. Add Assets
Place these files in the **root directory** (same level as index.html):
- `background.gif` — Full-screen background image
- `logo.png` — Game logo (displays top-left)
- `music.mp3` — Background music file

### 2. Update Button Links
**Edit in `index.html`:**

Find the Discord button and update the href:
```html
<a id="discord" class="btn discord-btn" href="https://discord.gg/YOUR_INVITE_CODE" target="_blank" rel="noopener noreferrer">
```

Find the Roblox button and update the href:
```html
<a id="play" class="btn play-btn" href="https://www.roblox.com/games/YOUR_GAME_ID" target="_blank" rel="noopener noreferrer">
```

### 3. Customize Button Colors
**Edit in `styles.css`:**

Discord button styling:
```css
a.discord-btn {
  background: rgba(88, 101, 242, 0.2);    /* Change this color */
  border: 1px solid rgba(88, 101, 242, 0.4);
  color: #fff;
}
a.discord-btn:hover {
  background: rgba(88, 101, 242, 0.3);    /* Change this color */
  border: 1px solid rgba(88, 101, 242, 0.6);
}
```

Play button styling:
```css
a.play-btn {
  background: linear-gradient(90deg, #ffcc00, #ff5a00);   /* Change gradient colors */
  border: 1px solid rgba(255, 165, 0, 0.5);
  color: #111;
}
a.play-btn:hover {
  background: linear-gradient(90deg, #ffd700, #ff6b1a);   /* Change gradient colors */
  border: 1px solid rgba(255, 165, 0, 0.8);
}
```

## Usage

### Local Preview
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server
```
Then open `http://localhost:8000` in your browser.

### Deployment
- Push to GitHub Pages, Vercel, Netlify, or any static host
- Ensure all three asset files (background.gif, logo.png, music.mp3) are in the root directory
- Music autoplays when users visit (subject to browser autoplay policies)

## Customization

### Change Header Text
Edit in `index.html`:
```html
<h1>Your Game Title Here</h1>
```

### Change Button Labels
Edit in `index.html`:
```html
<span class="label">Join Discord</span>   <!-- Change this -->
<span class="label">Play on Roblox</span> <!-- Change this -->
```

### Change Colors & Fonts
Edit `styles.css` — all styles are clearly commented and easy to modify:
- Background brightness: `.bg { filter:brightness(0.65); }` (change 0.65)
- Button hover effects: `.btn:hover` rules
- Audio widget colors: `.audio-widget` class

### Change Logo Size
Edit in `styles.css`:
```css
.logo { width:84px; height:84px; object-fit:contain; }
```

### Change Audio Widget Position
Edit in `styles.css`:
```css
.audio-widget {
  position:fixed; right:18px; bottom:18px;  /* Change these values */
}
```

## Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Some browsers have autoplay policies that may prevent music from playing until the user clicks play or interacts with the page. This is a security feature.

## Notes

- **No backend required** — all functionality is client-side
- **localStorage persistence** — volume settings are saved per device/browser
- **Autoplay respects browser policies** — may require user interaction in some browsers
- **Fully responsive** — works on mobile, tablet, and desktop
- **CORS-safe** — works on any domain

## License

Private project for New Boroughs NYC.

## Support

For issues or feature requests, contact the development team.
