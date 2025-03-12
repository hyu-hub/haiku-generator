# 俳句 Generator - Japanese Haiku Poetry Generator

A beautiful web-based haiku generator that creates meaningful Japanese haikus with English translations. The generator uses sophisticated algorithms to create poems that follow traditional haiku rules and incorporate seasonal references (kigo) and cutting words (kireji).

## Features

- Generates authentic 5-7-5 syllable haikus in Japanese with English translations
- Includes seasonal references (kigo) for each of the four seasons
- Uses cutting words (kireji) for emotional emphasis
- Maintains thematic consistency throughout each haiku
- Beautiful, responsive UI with light/dark theme support
- Share functionality for generated haikus
- Smooth animations and transitions

## Live Demo

[View Live Demo](#) <!-- Add your GitHub Pages URL here once deployed -->

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/haiku-generator.git
cd haiku-generator
```

2. Open `index.html` in your web browser to run the application locally.

## Technical Details

The generator uses:
- Vanilla JavaScript with ES6+ features
- CSS3 with custom properties for theming
- HTML5 with semantic markup
- No external dependencies required

## Project Structure

```
haiku-generator/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js          # Main JavaScript application logic
├── haiku-data.js      # Haiku word database and generation logic
└── README.md          # Project documentation
```

## How It Works

1. The generator selects a random season and theme
2. It constructs each line using sophisticated patterns:
   - First line (5 syllables): Often introduces the season or setting
   - Second line (7 syllables): Develops the image or action
   - Third line (5 syllables): Provides a closing observation or emotion
3. Each line is carefully constructed using:
   - Seasonal references (kigo)
   - Cutting words (kireji) for emphasis
   - Thematic relationships for coherence
4. The English translation is generated maintaining the poetic essence

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 