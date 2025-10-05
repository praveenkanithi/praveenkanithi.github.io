# ML Researcher Portfolio

A clean, professional portfolio website for machine learning researchers. This portfolio features a minimal design that focuses on content over flashy visuals, perfect for academic and research professionals.

## Features

- **Clean, Minimal Design**: Professional appearance suitable for academic contexts
- **Responsive Layout**: Works well on desktop, tablet, and mobile devices
- **Easy to Customize**: Simple HTML/CSS structure that's easy to modify
- **Fast Loading**: Lightweight with no external dependencies except Google Fonts
- **Accessible**: Semantic HTML structure for better accessibility

## Sections

1. **Introduction**: Personal statement and current position
2. **Recent Projects**: Showcase of your research projects with links to code, papers, and demos
3. **Education**: Academic background and qualifications
4. **Publications**: Research papers and publications with links to PDFs and code

## Setup Instructions

### Option 1: GitHub Pages (Recommended)

1. Fork or clone this repository
2. Customize the content in `index.html` with your information
3. Push to your GitHub repository
4. Go to Settings > Pages in your GitHub repository
5. Select "Deploy from a branch" and choose "main"
6. Your portfolio will be available at `https://yourusername.github.io/repository-name`

### Option 2: Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```

2. Open `index.html` in your web browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## Customization

### Personal Information

Edit the following sections in `index.html`:

1. **Header Section**: Update your name, title, and contact links
2. **Introduction**: Write your personal statement and current position
3. **Recent Projects**: Add your projects with descriptions and links
4. **Education**: List your academic qualifications
5. **Publications**: Add your research papers and publications

### Styling

The CSS is organized in `styles.css` with clear sections:
- Base styles and typography
- Header and navigation
- Section layouts
- Project, education, and publication cards
- Responsive design

### Color Scheme

The current color scheme uses:
- Primary text: `#2c3e50` (dark blue-gray)
- Secondary text: `#555` (medium gray)
- Links: `#3498db` (blue)
- Publication links: `#e74c3c` (red)
- Background: `#f8f9fa` (light gray for cards)

You can easily modify these colors in the CSS file.

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
└── README.md          # This file
```

## Browser Support

This portfolio works in all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

Feel free to fork this repository and customize it for your own use. If you make improvements that could benefit others, pull requests are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have questions or need help customizing your portfolio, feel free to open an issue in this repository.
