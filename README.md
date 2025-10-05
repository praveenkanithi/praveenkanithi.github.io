# Praveen Kanithi - ML Researcher Portfolio

A clean, professional portfolio website showcasing the research work of Praveen Kanithi, Principal Scientist at M42. This portfolio features a minimal design that focuses on content over flashy visuals, highlighting research in machine learning for healthcare, including clinical language models, genomics, electronic health records, and medical imaging.

## Features

- **Clean, Minimal Design**: Professional appearance suitable for academic contexts
- **Responsive Layout**: Works well on desktop, tablet, and mobile devices
- **Easy to Customize**: Simple HTML/CSS structure that's easy to modify
- **Fast Loading**: Lightweight with no external dependencies except Google Fonts
- **Accessible**: Semantic HTML structure for better accessibility

## Sections

1. **About**: Personal statement, current position at M42, and research focus areas
2. **Projects**: Showcase of key research projects including:
   - BioToken & BioFM: Biologically-informed genomic foundation modeling
   - MEDIC: Multidimensional evaluation framework for clinical LLMs
   - Med42: Open medical language models
   - CXformer: Efficient vision transformers for chest X-ray analysis
3. **Education**: Academic background including PhD from HITLab (University of Canterbury) and M.Tech from IIT Kharagpur
4. **Publications**: Research papers and publications with links to PDFs, code, and models

## Setup Instructions

### Option 1: GitHub Pages (Recommended)

1. Fork or clone this repository
2. Customize the content in `index.html` with your information
3. Push to your GitHub repository
4. Go to Settings > Pages in your GitHub repository
5. Select "Deploy from a branch" and choose "main"
6. Your portfolio will be available at `https://praveenkanithi.github.io/`

### Option 2: Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/praveenkanithi/praveenkanithi.github.io.git
   cd your-repository-name
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

1. **Header Section**: Update your name, title, and contact links (GitHub, Google Scholar, LinkedIn, Hugging Face)
2. **About Section**: Write your personal statement, current position, and research focus areas
3. **Projects Section**: Add your research projects with descriptions, images, and links to papers, code, and models
4. **Education Section**: List your academic qualifications including thesis information
5. **Publications Section**: Add your research papers and publications with links to PDFs, code, and models

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
├── figures/            # Project images and profile picture
│   ├── biotoken_biofm.png
│   ├── CXformer.png
│   ├── med42.png
│   ├── MEDIC_framework.png
│   └── praveen.jpeg
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
