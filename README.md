# New Boroughs NYC — Landing Page

A modern, responsive landing page for New Boroughs NYC with an admin-protected link editor, audio player, and call-to-action buttons.

## Features

- **Game Title & Logo** — Displays game name with custom logo
- **Action Buttons** — Two Discord links and one Roblox game link (all editable)
- **Audio Widget** — Bottom-right player with:
  - Play/pause control
  - Mute/unmute toggle
  - Volume slider
  - Seekable progress bar with time display
- **Admin Editor** — Password-protected link editor to update button labels and URLs
- **Persistent Storage** — Saves links and volume settings to localStorage
- **Responsive Design** — Mobile-friendly layout

## File Structure

```
index.html          — Main landing page
styles.css          — All styling (layout, buttons, audio widget, modals)
script.js           — JavaScript (audio controls, admin gating, link persistence)
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

### 2. Change Admin Password
Edit `script.js` and find this line:
```javascript
const ADMIN_PASSWORD = 'changeme';
```
Replace `'changeme'` with a secure password. This is used to access the "Edit Links" panel.

⚠️ **Note:** This is client-side gating only. For production security, implement server-side authentication.

### 3. Update Links (Optional)
**Via UI (easiest):**
1. Open index.html in a browser
2. Click "Edit Links" (top-right)
3. Enter the admin password
4. Update labels and URLs for Discord 1, Discord 2, and Roblox
5. Click "Save" — changes persist to localStorage

**Via Code:**
Edit the `DEFAULTS` object in `script.js`:
```javascript
const DEFAULTS = {
  discord1: { label: 'Discord 1', href: 'https://discord.gg/YOUR_LINK' },
  discord2: { label: 'Discord 2', href: 'https://discord.gg/YOUR_LINK' },
  roblox:   { label: 'Play on Roblox', href: 'https://www.roblox.com/games/YOUR_GAME_ID' },
  trackTitle: 'music.mp3'
};
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
- Links and volume settings are stored locally in the browser — no backend needed

## Customization

### Change Colors
Edit `styles.css`:
- Button colors: Look for `.btn` and `.btn:hover` rules
- Roblox button gradient: `.roblox` class
- Audio widget: `.audio-widget` class
- Modal backgrounds: `.modal-card` class

### Change Fonts
Edit `styles.css`:
```css
font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
```

### Change Layout
- Card width: Look for `max-width: 700px` in `.card`
- Logo size: Look for `width: 84px; height: 84px` in `.logo`
- Audio widget position: `.audio-widget` uses `right: 18px; bottom: 18px;`

## Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

Audio format support depends on browser; MP3 is widely supported.

## Notes

- **Admin gating is client-side only** — suitable for casual link editing, not for sensitive data
- **localStorage persistence** — changes are per-device/browser; clearing localStorage resets to defaults
- **No backend required** — all functionality is client-side
- **CORS-safe** — works on any domain; no external API calls

## License

Private project for New Boroughs NYC.

## Support

For issues or feature requests, contact the development team.
