const haikuData = {
    // Seasonal references (kigo) with expanded vocabulary and themes
    spring: {
        two: [
            { jp: "桜", en: "cherry blossom", romaji: "sakura", theme: "flowers" },
            { jp: "春日", en: "spring day", romaji: "harubi", theme: "time" },
            { jp: "若葉", en: "young leaves", romaji: "wakaba", theme: "growth" },
            { jp: "霞", en: "spring haze", romaji: "kasumi", theme: "weather" },
            { jp: "山茶", en: "camellia", romaji: "sazanka", theme: "flowers" },
            { jp: "春風", en: "spring breeze", romaji: "harukaze", theme: "weather" }
        ],
        three: [
            { jp: "蝶々が", en: "butterflies", romaji: "chouchou ga", theme: "insects" },
            { jp: "すずめが", en: "sparrow", romaji: "suzume ga", theme: "birds" },
            { jp: "花びら", en: "flower petals", romaji: "hanabira", theme: "flowers" },
            { jp: "梅の香", en: "plum fragrance", romaji: "ume no ka", theme: "flowers" },
            { jp: "霞める", en: "growing hazy", romaji: "kasumeru", theme: "weather" },
            { jp: "山笑う", en: "mountains smile", romaji: "yama warau", theme: "landscape" }
        ],
        five: [
            { jp: "はるのそらは", en: "spring sky is", romaji: "haru no sora wa", theme: "sky" },
            { jp: "うぐいすの", en: "bush warbler's", romaji: "uguisu no", theme: "birds" },
            { jp: "さくらさくら", en: "cherry blossoms bloom", romaji: "sakura sakura", theme: "flowers" },
            { jp: "やまかぜには", en: "in mountain breeze", romaji: "yamakaze ni wa", theme: "weather" }
        ]
    },
    summer: {
        two: [
            { jp: "蝉が", en: "cicada", romaji: "semi ga", theme: "insects" },
            { jp: "入日", en: "sunset", romaji: "irihi", theme: "sun" },
            { jp: "夕立", en: "summer rain", romaji: "yuudachi", theme: "rain" },
            { jp: "稲田", en: "rice field", romaji: "inada", theme: "landscape" },
            { jp: "南風", en: "south wind", romaji: "minami", theme: "weather" },
            { jp: "波立", en: "rising waves", romaji: "namidachi", theme: "water" }
        ],
        three: [
            { jp: "うみべで", en: "by the sea", romaji: "umibe de", theme: "landscape" },
            { jp: "かえるが", en: "frog", romaji: "kaeru ga", theme: "animals" },
            { jp: "ほたるが", en: "firefly", romaji: "hotaru ga", theme: "insects" },
            { jp: "雲湧く", en: "clouds billow", romaji: "kumo waku", theme: "sky" },
            { jp: "波さらう", en: "waves washing", romaji: "nami sarau", theme: "water" },
            { jp: "日暮れて", en: "sun setting", romaji: "hi kurete", theme: "sun" }
        ],
        five: [
            { jp: "なつのうみへ", en: "to summer sea", romaji: "natsu no umi he", theme: "water" },
            { jp: "あさがおの", en: "morning glory", romaji: "asagao no", theme: "flowers" },
            { jp: "そらたかく", en: "sky so high", romaji: "sora takaku", theme: "sky" },
            { jp: "みなづきの", en: "water moon's", romaji: "minazuki no", theme: "moon" }
        ]
    },
    autumn: {
        two: [
            { jp: "月が", en: "moon is", romaji: "tsuki ga", theme: "moon" },
            { jp: "紅葉", en: "red leaves", romaji: "momiji", theme: "leaves" },
            { jp: "秋風", en: "autumn wind", romaji: "akikaze", theme: "weather" },
            { jp: "露が", en: "dew is", romaji: "tsuyu ga", theme: "water" },
            { jp: "稲穂", en: "rice ears", romaji: "inaho", theme: "harvest" },
            { jp: "虫の", en: "insect's", romaji: "mushi no", theme: "insects" }
        ],
        three: [
            { jp: "もみじが", en: "maple leaves", romaji: "momiji ga", theme: "leaves" },
            { jp: "きりつむ", en: "falling mist", romaji: "kiritsumu", theme: "weather" },
            { jp: "こがらし", en: "winter wind", romaji: "kogarashi", theme: "weather" },
            { jp: "月影", en: "moonlight", romaji: "tsukikage", theme: "moon" },
            { jp: "鴨わたる", en: "ducks crossing", romaji: "kamo wataru", theme: "birds" },
            { jp: "露しずく", en: "dew drops fall", romaji: "tsuyu shizuku", theme: "water" }
        ],
        five: [
            { jp: "あきのかぜに", en: "in autumn wind", romaji: "aki no kaze ni", theme: "weather" },
            { jp: "つきのよるに", en: "in moonlit night", romaji: "tsuki no yoru ni", theme: "moon" },
            { jp: "こだまする", en: "echoing", romaji: "kodama suru", theme: "sound" },
            { jp: "もみじちる", en: "maple leaves fall", romaji: "momiji chiru", theme: "leaves" }
        ]
    },
    winter: {
        two: [
            { jp: "雪が", en: "snow is", romaji: "yuki ga", theme: "snow" },
            { jp: "霜が", en: "frost is", romaji: "shimo ga", theme: "frost" },
            { jp: "氷", en: "ice", romaji: "koori", theme: "ice" },
            { jp: "北風", en: "north wind", romaji: "kitakaze", theme: "weather" },
            { jp: "冬月", en: "winter moon", romaji: "fuyuzuki", theme: "moon" },
            { jp: "寒日", en: "cold sun", romaji: "kanbishi", theme: "sun" }
        ],
        three: [
            { jp: "しずくが", en: "droplets", romaji: "shizuku ga", theme: "water" },
            { jp: "つららが", en: "icicles", romaji: "tsurara ga", theme: "ice" },
            { jp: "かれきが", en: "dead trees", romaji: "kareki ga", theme: "trees" },
            { jp: "雪降る", en: "snow falling", romaji: "yuki furu", theme: "snow" },
            { jp: "風わたる", en: "wind crossing", romaji: "kaze wataru", theme: "weather" },
            { jp: "氷る", en: "freezing", romaji: "kooru", theme: "ice" }
        ],
        five: [
            { jp: "ふゆのそらに", en: "in winter sky", romaji: "fuyu no sora ni", theme: "sky" },
            { jp: "しもよるに", en: "frosty night", romaji: "shimo yoru ni", theme: "frost" },
            { jp: "ゆきしずか", en: "snow silence", romaji: "yuki shizuka", theme: "snow" },
            { jp: "こごえゆく", en: "growing cold", romaji: "kogoe yuku", theme: "cold" }
        ]
    },
    // Enhanced cutting words (kireji) with emotional nuances
    kireji: {
        one: [
            { jp: "や", en: "", romaji: "ya", emotion: "emphasis" },
            { jp: "よ", en: "!", romaji: "yo", emotion: "wonder" },
            { jp: "か", en: "?", romaji: "ka", emotion: "questioning" }
        ],
        two: [
            { jp: "かな", en: "...", romaji: "kana", emotion: "wistful" },
            { jp: "けり", en: ".", romaji: "keri", emotion: "finality" },
            { jp: "らん", en: "...", romaji: "ran", emotion: "uncertainty" }
        ]
    },
    // Expanded general words and phrases with thematic categorization
    general: {
        one: [
            { jp: "空", en: "sky", romaji: "sora", theme: "sky" },
            { jp: "風", en: "wind", romaji: "kaze", theme: "weather" },
            { jp: "心", en: "heart", romaji: "kokoro", theme: "emotion" },
            { jp: "光", en: "light", romaji: "hikari", theme: "light" },
            { jp: "影", en: "shadow", romaji: "kage", theme: "shadow" },
            { jp: "時", en: "time", romaji: "toki", theme: "time" }
        ],
        two: [
            { jp: "星が", en: "stars", romaji: "hoshi ga", theme: "sky" },
            { jp: "雲が", en: "clouds", romaji: "kumo ga", theme: "weather" },
            { jp: "波が", en: "waves", romaji: "nami ga", theme: "water" },
            { jp: "夢が", en: "dreams", romaji: "yume ga", theme: "abstract" },
            { jp: "道が", en: "path", romaji: "michi ga", theme: "landscape" },
            { jp: "時が", en: "time", romaji: "toki ga", theme: "time" }
        ],
        three: [
            { jp: "そよ風", en: "gentle breeze", romaji: "soyokaze", theme: "weather" },
            { jp: "ゆらゆら", en: "swaying", romaji: "yurayura", theme: "motion" },
            { jp: "ささやく", en: "whispers", romaji: "sasayaku", theme: "sound" },
            { jp: "おもいで", en: "memories", romaji: "omoide", theme: "abstract" },
            { jp: "こころに", en: "in heart", romaji: "kokoro ni", theme: "emotion" },
            { jp: "ながれる", en: "flowing", romaji: "nagareru", theme: "motion" }
        ],
        four: [
            { jp: "さみしさや", en: "loneliness", romaji: "samishisa ya", theme: "emotion" },
            { jp: "しずかなる", en: "becoming quiet", romaji: "shizuka naru", theme: "sound" },
            { jp: "こだまする", en: "echoing", romaji: "kodama suru", theme: "sound" },
            { jp: "おもかげの", en: "face in mind", romaji: "omokage no", theme: "memory" },
            { jp: "ゆめみたき", en: "dream-like", romaji: "yume mitaki", theme: "abstract" },
            { jp: "いにしえの", en: "ancient", romaji: "inishie no", theme: "time" }
        ]
    }
};

// Helper functions
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomSeason() {
    const seasons = ['spring', 'summer', 'autumn', 'winter'];
    return getRandomItem(seasons);
}

// Get words that match a theme
function getWordsByTheme(season, syllableCount, theme) {
    const words = haikuData[season][syllableCount] || [];
    return words.filter(word => word.theme === theme);
}

// Add seasonal progression markers
const seasonalProgression = {
    spring: ['early', 'mid', 'late'],
    summer: ['early', 'mid', 'late'],
    autumn: ['early', 'mid', 'late'],
    winter: ['early', 'mid', 'late']
};

// Theme relationships for better flow - Enhanced with more poetic connections
const themeRelations = {
    'weather': ['emotion', 'landscape', 'sky'],
    'landscape': ['weather', 'time', 'emotion'],
    'emotion': ['nature', 'time', 'abstract'],
    'nature': ['time', 'weather', 'emotion'],
    'time': ['nature', 'abstract', 'emotion'],
    'sky': ['weather', 'emotion', 'light'],
    'water': ['reflection', 'emotion', 'weather'],
    'moon': ['night', 'emotion', 'reflection'],
    'flowers': ['season', 'emotion', 'time'],
    'birds': ['nature', 'sound', 'motion'],
    'insects': ['season', 'sound', 'nature']
};

// Enhanced line generation with sophisticated patterns
function generateLine(syllableTarget, season, previousTheme = null, isMiddleLine = false) {
    let line = [];
    
    // Select theme based on previous theme and season
    const seasonalThemes = {
        spring: ['flowers', 'birds', 'weather'],
        summer: ['insects', 'water', 'sky'],
        autumn: ['moon', 'leaves', 'emotion'],
        winter: ['snow', 'silence', 'reflection']
    };

    const preferredThemes = previousTheme ? 
        themeRelations[previousTheme] : 
        seasonalThemes[season];

    const selectedTheme = getRandomItem(preferredThemes || Object.keys(themeRelations));

    if (syllableTarget === 5) {
        // Enhanced 5-syllable patterns
        const patterns = [
            // Nature + Action (2-3)
            () => {
                const natureWord = getRandomItem(haikuData[season].two.filter(w => 
                    w.theme === selectedTheme || w.theme === 'nature'));
                const actionWord = getRandomItem(haikuData[season].three.filter(w => 
                    w.theme !== natureWord.theme));
                return natureWord && actionWord ? [natureWord, actionWord] : null;
            },
            // Complete scene (5)
            () => {
                const sceneWord = getRandomItem(haikuData[season].five.filter(w => 
                    w.theme === selectedTheme || w.theme === 'landscape'));
                return sceneWord ? [sceneWord] : null;
            },
            // Emotion + Nature (3-2)
            () => {
                const emotionWord = getRandomItem(haikuData.general.three.filter(w => 
                    w.theme === 'emotion'));
                const natureWord = getRandomItem(haikuData[season].two.filter(w => 
                    w.theme !== 'emotion'));
                return emotionWord && natureWord ? [emotionWord, natureWord] : null;
            }
        ];

        // Try each pattern until one works
        for (const pattern of patterns) {
            const result = pattern();
            if (result) {
                line = result;
                break;
            }
        }
    } else if (syllableTarget === 7) {
        // Enhanced 7-syllable patterns
        const patterns = [
            // Emotion + Scene (4-3)
            () => {
                const emotionWord = getRandomItem(haikuData.general.four.filter(w => 
                    w.theme === 'emotion'));
                const sceneWord = getRandomItem(haikuData[season].three.filter(w => 
                    w.theme === selectedTheme || w.theme === 'nature'));
                return emotionWord && sceneWord ? [emotionWord, sceneWord] : null;
            },
            // Nature + Motion + Location (2-3-2)
            () => {
                const natureWord = getRandomItem(haikuData[season].two);
                const motionWord = getRandomItem(haikuData.general.three.filter(w => 
                    w.theme === 'motion' || w.theme === 'sound'));
                const locationWord = getRandomItem(haikuData.general.two.filter(w => 
                    w.theme === 'landscape' || w.theme === 'time'));
                return natureWord && motionWord && locationWord ? 
                    [natureWord, motionWord, locationWord] : null;
            },
            // Scene + Reflection (3-2-2)
            () => {
                const sceneWord = getRandomItem(haikuData[season].three);
                const reflectionWord = getRandomItem(haikuData.general.two.filter(w => 
                    w.theme === 'emotion' || w.theme === 'abstract'));
                const kireji = getRandomItem(haikuData.kireji.two);
                return sceneWord && reflectionWord && kireji ? 
                    [sceneWord, reflectionWord, kireji] : null;
            }
        ];

        // Try each pattern until one works
        for (const pattern of patterns) {
            const result = pattern();
            if (result) {
                line = result;
                break;
            }
        }
    }

    // Ensure we have a valid line with fallback
    if (!line.length) {
        if (syllableTarget === 5) {
            const word = getRandomItem(haikuData[season].five.filter(w => 
                w.theme === selectedTheme || w.theme === 'nature'));
            line = [word || getRandomItem(haikuData[season].five)];
        } else {
            const word1 = getRandomItem(haikuData[season].three);
            const word2 = getRandomItem(haikuData.general.four.filter(w => 
                w.theme === 'emotion' || w.theme === selectedTheme));
            line = [word1, word2].filter(Boolean);
        }
    }

    // Add cutting word strategically
    if (!isMiddleLine && line.length > 0) {
        const hasEmotion = line.some(w => w.theme === 'emotion');
        const hasNature = line.some(w => w.theme === 'nature' || w.theme === selectedTheme);
        
        if (hasEmotion) {
            const kireji = getRandomItem(haikuData.kireji.one.filter(k => 
                k.emotion === 'emphasis' || k.emotion === 'wonder'));
            if (kireji) line.push(kireji);
        } else if (hasNature) {
            const kireji = getRandomItem(haikuData.kireji.one.filter(k => 
                k.emotion === 'questioning' || k.emotion === 'wonder'));
            if (kireji) line.push(kireji);
        }
    }

    // Ensure all words are valid and format text
    line = line.filter(word => word && word.jp && word.en);
    const japaneseText = line.map(word => word.jp).join(' ');
    const englishText = line.map(word => word.en).join(' ').trim();

    return {
        line: line,
        theme: selectedTheme,
        japanese: japaneseText || '俳句',
        english: englishText || 'haiku'
    };
}

// Enhanced main function for complete haiku generation
function getRandomCombination(syllableTarget, season, previousTheme = null, isMiddleLine = false) {
    const result = generateLine(syllableTarget, season, previousTheme, isMiddleLine);
    
    // Ensure we have valid content
    if (!result.japanese || !result.english) {
        console.error('Failed to generate valid line');
        return {
            japanese: '俳句',
            english: 'haiku',
            theme: 'nature'
        };
    }
    
    // Log for debugging
    console.log(`Generated ${syllableTarget}-syllable line for ${season} with theme ${result.theme}`);
    console.log(`Japanese: ${result.japanese}`);
    console.log(`English: ${result.english}`);
    
    return {
        japanese: result.japanese,
        english: result.english,
        theme: result.theme
    };
} 