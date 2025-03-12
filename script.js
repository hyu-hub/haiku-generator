class HaikuGenerator {
    constructor() {
        this.generateButton = document.getElementById('generateButton');
        this.shareButton = document.getElementById('shareButton');
        this.themeToggle = document.getElementById('themeToggle');
        this.japaneseHaiku = document.getElementById('japaneseHaiku');
        this.englishHaiku = document.getElementById('englishHaiku');
        
        // Set initial theme
        document.body.setAttribute('data-theme', 'light');
        
        this.setupEventListeners();
        // Generate and display initial haiku
        this.generateAndDisplay();
    }

    setupEventListeners() {
        this.generateButton.addEventListener('click', () => {
            this.generateAndDisplay();
        });

        this.shareButton.addEventListener('click', () => {
            this.shareHaiku();
        });

        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    generateAndDisplay() {
        const haikuDisplay = document.querySelector('.haiku-display');
        haikuDisplay.classList.add('fade');
        
        // Animate the cherry blossom icon
        const icon = this.generateButton.querySelector('.icon');
        icon.style.animation = 'none';
        icon.offsetHeight; // Trigger reflow
        icon.style.animation = 'spin 1s ease';

        setTimeout(() => {
            const haiku = this.generateHaiku();
            this.displayHaiku(haiku);
            haikuDisplay.classList.remove('fade');
        }, 500);
    }

    generateHaiku() {
        // Select a season for the haiku
        const season = getRandomSeason();
        console.log('Selected season:', season);

        // Generate lines with 5-7-5 syllable pattern
        const line1 = getRandomCombination(5, season, null, false);
        const line2 = getRandomCombination(7, season, line1.theme, true);
        const line3 = getRandomCombination(5, season, line2.theme, false);

        // Get the Japanese and English lines directly from the results
        const japaneseLines = [
            line1.japanese,
            line2.japanese,
            line3.japanese
        ];

        // Get English translations and ensure proper capitalization
        const englishLines = [
            line1.english,
            line2.english,
            line3.english
        ].map(line => {
            if (!line) return '';
            const trimmed = line.trim();
            return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
        });

        // Log the generated haiku for debugging
        console.log('Generated Haiku:', {
            season,
            japanese: japaneseLines,
            english: englishLines
        });

        return {
            japanese: japaneseLines.join('\n'),
            english: englishLines.join('\n')
        };
    }

    displayHaiku(haiku) {
        // Add a debug log to see what we're trying to display
        console.log('Displaying haiku:', haiku);
        
        // Clear existing content
        this.japaneseHaiku.innerHTML = '';
        this.englishHaiku.innerHTML = '';
        
        // Ensure we have content to display
        if (!haiku || !haiku.japanese || !haiku.english) {
            console.error('Invalid haiku object:', haiku);
            this.japaneseHaiku.innerHTML = '<div class="haiku-line">俳句を生成できませんでした</div>';
            this.englishHaiku.innerHTML = '<div class="haiku-line">Could not generate haiku</div>';
            return;
        }

        // Split the text into lines and filter out empty lines
        const japaneseLines = haiku.japanese.split('\n').filter(line => line.trim());
        const englishLines = haiku.english.split('\n').filter(line => line.trim());

        // Display the Japanese text with proper line breaks and animation delays
        japaneseLines.forEach((line, index) => {
            const div = document.createElement('div');
            div.className = 'haiku-line';
            div.style.animationDelay = `${0.2 * (index + 1)}s`;
            div.textContent = line;
            this.japaneseHaiku.appendChild(div);
        });

        // Display the English text with proper line breaks and animation delays
        englishLines.forEach((line, index) => {
            const div = document.createElement('div');
            div.className = 'haiku-line';
            div.style.animationDelay = `${0.2 * (index + 4)}s`;
            div.textContent = line;
            this.englishHaiku.appendChild(div);
        });

        // Add animation class
        this.japaneseHaiku.classList.add('fade-in');
        this.englishHaiku.classList.add('fade-in');
    }

    async shareHaiku() {
        const haiku = `${this.japaneseHaiku.innerText}\n\n${this.englishHaiku.innerText}`;
        
        try {
            if (navigator.share) {
                await navigator.share({
                    title: '俳句 - Generated Haiku',
                    text: haiku
                });
            } else {
                await navigator.clipboard.writeText(haiku);
                alert('Haiku copied to clipboard!');
            }
        } catch (error) {
            console.error('Error sharing haiku:', error);
        }
    }

    toggleTheme() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        this.themeToggle.innerText = isDark ? '🌙' : '☀️';
    }
}

// Initialize the generator when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HaikuGenerator();
}); 