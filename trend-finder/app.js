// 🎨 Urbana Chic - Fashion AI Trend Database
// Database de tendências de moda para cada mês e estação de 2026

const trendDatabase = {
    // MESES
    january: {
        season: 'Inverno',
        month: 'Janeiro',
        emoji: '❄️',
        trends: [
            {
                name: 'Oversized Blazers',
                description: 'Blazers amplos e estruturados em tons neutros e escuros. Perfeito para criar um look sofisticado e profissional.',
                category: 'Blazer',
                colors: ['#2D1B3D', '#6C5B7B', '#A67C92']
            },
            {
                name: 'Wide-Leg Pants',
                description: 'Calças de perna reta e larga em cores como preto, bege e cinza. Confortável e elegante para o dia a dia.',
                category: 'Calça',
                colors: ['#1A1A1A', '#D4AF9A', '#8B8680']
            },
            {
                name: 'Chunky Boots',
                description: 'Botas robustas com solado espesso em couro preto ou marrom. Essencial para completar o look inverno.',
                category: 'Sapatos',
                colors: ['#3D2817', '#000000', '#5C4033']
            },
            {
                name: 'Turtleneck Sweaters',
                description: 'Camisetas de gola alta em lã ou algodão. Camadas quentes que mostram elegância minimalista.',
                category: 'Top',
                colors: ['#2F4F4F', '#5D4E60', '#8B8B8B']
            }
        ]
    },

    february: {
        season: 'Inverno',
        month: 'Fevereiro',
        emoji: '💕',
        trends: [
            {
                name: 'Leather Jackets',
                description: 'Jaquetas de couro autêntico em preto, marrom ou tons burgundy. Atemporal e super estilosa.',
                category: 'Jaqueta',
                colors: ['#2D1B1B', '#8B4513', '#800020']
            },
            {
                name: 'Midi Skirts',
                description: 'Saias que chegam até o joelho em tecidos como lã e seda. Elegante e feminino para qualquer ocasião.',
                category: 'Saia',
                colors: ['#4A4A4A', '#D4A5A5', '#8B5A8F']
            },
            {
                name: 'Layering Pieces',
                description: 'Peças de sobreposição como coletes e cardigans. Crie dimensão e versatilidade nos seus looks.',
                category: 'Camadas',
                colors: ['#E8E8E8', '#C4B5A0', '#A0826D']
            },
            {
                name: 'Statement Jewelry',
                description: 'Joias grandes e chamativas em ouro, prata ou bronze. Acessórios que elevam qualquer outfit.',
                category: 'Acessório',
                colors: ['#FFD700', '#C0C0C0', '#CD7F32']
            }
        ]
    },

    march: {
        season: 'Primavera',
        month: 'Março',
        emoji: '🌸',
        trends: [
            {
                name: 'Pastel Colors',
                description: 'Tons suaves como rosa, azul claro, hortelã e creme. Perfeito para celebrar a primavera.',
                category: 'Cores',
                colors: ['#FFB6D9', '#ADD8E6', '#98FF98']
            },
            {
                name: 'Floral Dresses',
                description: 'Vestidos com estampas florais em tecidos leves. Romantismo e leveza para a estação.',
                category: 'Vestido',
                colors: ['#FFE4E1', '#E6D7C3', '#D8BFD8']
            },
            {
                name: 'Light Cardigans',
                description: 'Cardigans leves em algodão e lã fina. Camadas que proporcionam conforto na transição de estações.',
                category: 'Casaco',
                colors: ['#F5F5F5', '#FFEFD5', '#FFE4B5']
            },
            {
                name: 'Canvas Sneakers',
                description: 'Tênis em lona em cores pastel e branco. Casual e confortável para o dia a dia primaveril.',
                category: 'Sapatos',
                colors: ['#FFFACD', '#FFB6C1', '#B0E0E6']
            }
        ]
    },

    april: {
        season: 'Primavera',
        month: 'Abril',
        emoji: '🌼',
        trends: [
            {
                name: 'Denim Jackets',
                description: 'Jaquetas jeans clássicas em tons claros e escuros. Versátil para qualquer estilo de outfit.',
                category: 'Jaqueta',
                colors: ['#1F4788', '#4A7BA7', '#87CEEB']
            },
            {
                name: 'High-Waisted Jeans',
                description: 'Calças jeans com cintura alta que alongam as pernas. Confortável e super tendência.',
                category: 'Calça',
                colors: ['#0E3A5E', '#3B5998', '#5B8DBE']
            },
            {
                name: 'Maxi Skirts',
                description: 'Saias longas em estampas florais ou lisas. Elegância e conforto em um único look.',
                category: 'Saia',
                colors: ['#D4AF9A', '#F5E6D3', '#E6C9A8']
            },
            {
                name: 'White Sneakers',
                description: 'Tênis brancos limpos e elegantes. Peça que combina com tudo e nunca sai de moda.',
                category: 'Sapatos',
                colors: ['#FFFFFF', '#F5F5F5', '#FFFAFA']
            }
        ]
    },

    may: {
        season: 'Primavera/Verão',
        month: 'Maio',
        emoji: '🌿',
        trends: [
            {
                name: 'Linen Pieces',
                description: 'Peças em linho respirável em tons naturais. Conforto máximo para os dias quentes que se aproximam.',
                category: 'Tecido',
                colors: ['#F5E6D3', '#E8D5B7', '#D4B8A8']
            },
            {
                name: 'Crop Tops',
                description: 'Tops curtos que mostram a barriga. Casual e descontraído para dias quentes.',
                category: 'Top',
                colors: ['#FFE4D6', '#FFD6A5', '#CAFFBF']
            },
            {
                name: 'Elegant Sandals',
                description: 'Sandálias sofisticadas em couro ou metalizadas. Eleve seu look casual para ocasiões especiais.',
                category: 'Sapatos',
                colors: ['#D4AF9A', '#FFD700', '#C0C0C0']
            },
            {
                name: 'Lightweight Scarves',
                description: 'Lenços em seda e algodão leve. Use como acessório ou cobertura em dias ensolarados.',
                category: 'Acessório',
                colors: ['#FFE4B5', '#F0E68C', '#DEB887']
            }
        ]
    },

    june: {
        season: 'Verão',
        month: 'Junho',
        emoji: '☀️',
        trends: [
            {
                name: 'Stylish Swimwear',
                description: 'Biquínis e maillots em cores vibrantes e com detalhes interessantes. Estilo na praia é essencial!',
                category: 'Praia',
                colors: ['#FF6B6B', '#FFD93D', '#6BCB77']
            },
            {
                name: 'Oversized T-Shirts',
                description: 'Camisetas de tamanho grande em cores sólidas ou com estampas. Perfeito para o calor do verão.',
                category: 'Top',
                colors: ['#FFFFFF', '#FFB5E8', '#A0E7E5']
            },
            {
                name: 'Retro Sunglasses',
                description: 'Óculos de sol com armações retrô em cores vibrantes. Proteja os olhos em estilo.',
                category: 'Acessório',
                colors: ['#FF6B9D', '#4ECDC4', '#FFE66D']
            },
            {
                name: 'Beach Dresses',
                description: 'Vestidos leves em tecidos fluidos perfeitos para praia ou cidade. Elegância casual.',
                category: 'Vestido',
                colors: ['#FFFFFF', '#FFFACD', '#F0E68C']
            }
        ]
    },

    july: {
        season: 'Verão',
        month: 'Julho',
        emoji: '🏖️',
        trends: [
            {
                name: 'Tropical Prints',
                description: 'Estampas com folhas, flores tropicais e motivos vivos. Leve a energia do verão em suas roupas.',
                category: 'Estampa',
                colors: ['#FF6B9D', '#34A853', '#FFA500']
            },
            {
                name: 'Linen Shorts',
                description: 'Shorts em linho confortável em tons neutros. Ideal para dias quentes e passeios casuais.',
                category: 'Short',
                colors: ['#F5E6D3', '#D4A574', '#C4956F']
            },
            {
                name: 'Tank Tops',
                description: 'Regatas em várias cores e materiais. Básico essencial para montar looks verão.',
                category: 'Top',
                colors: ['#FFE4E1', '#E6F2FF', '#E6FFE6']
            },
            {
                name: 'Flip-Flops & Slides',
                description: 'Chinelos e sandálias rasteiras em cores pastéis e sólidas. Conforto garantido para o verão.',
                category: 'Sapatos',
                colors: ['#FF69B4', '#87CEEB', '#FFD700']
            }
        ]
    },

    august: {
        season: 'Verão/Transição',
        month: 'Agosto',
        emoji: '🌊',
        trends: [
            {
                name: 'Transitional Pieces',
                description: 'Peças que funcionam tanto para verão quanto para outono. Jaquetas leves e blusas alongadas.',
                category: 'Casaco',
                colors: ['#B8860B', '#CD853F', '#8B7355']
            },
            {
                name: 'Cropped Pants',
                description: 'Calças capri e cropped em cores terrosas. Perfeito para a transição de estações.',
                category: 'Calça',
                colors: ['#8B7355', '#A0826D', '#D2B48C']
            },
            {
                name: 'Retro Sneakers',
                description: 'Tênis estilo vintage em tons neutros. Traz nostalgia e conforto ao seu guarda-roupa.',
                category: 'Sapatos',
                colors: ['#DCDCDC', '#696969', '#808080']
            },
            {
                name: 'Lightweight Vests',
                description: 'Coletes em lã fina para criar camadas. Combina leveza com elegância.',
                category: 'Casaco',
                colors: ['#E8E8E8', '#D3D3D3', '#C0C0C0']
            }
        ]
    },

    september: {
        season: 'Outono',
        month: 'Setembro',
        emoji: '🍂',
        trends: [
            {
                name: 'Earth Tone Colors',
                description: 'Paleta de cores terracota, marrom, bege e ocre. Tons que celebram a chegada do outono.',
                category: 'Cores',
                colors: ['#8B4513', '#CD853F', '#D2B48C']
            },
            {
                name: 'Structured Blazers',
                description: 'Blazers bem definidos em cores terrosas. Sofisticação para o guarda-roupa outonal.',
                category: 'Blazer',
                colors: ['#654321', '#8B6F47', '#A0826D']
            },
            {
                name: 'Midi Skirts',
                description: 'Saias que vão até a panturrilha em estampas neutras. Elegância e conforto no outono.',
                category: 'Saia',
                colors: ['#8B4513', '#696969', '#A9A9A9']
            },
            {
                name: 'Leather Boots',
                description: 'Botas de couro em preto ou marrom. Essencial para qualquer look outonal.',
                category: 'Sapatos',
                colors: ['#1A1A1A', '#654321', '#8B4513']
            }
        ]
    },

    october: {
        season: 'Outono',
        month: 'Outubro',
        emoji: '🎃',
        trends: [
            {
                name: 'Plaid Patterns',
                description: 'Padrões xadrez em tons quentes de outono. Clássico e versátil para qualquer look.',
                category: 'Estampa',
                colors: ['#8B0000', '#DAA520', '#006400']
            },
            {
                name: 'Cozy Sweaters',
                description: 'Camisetas de lã quentes e aconchegantes. Perfeito para os dias mais frios do outono.',
                category: 'Suéter',
                colors: ['#8B4513', '#A0522D', '#CD853F']
            },
            {
                name: 'Ankle Boots',
                description: 'Botas que cobrem o tornozelo em couro ou camurça. Elegância e proteção térmica.',
                category: 'Sapatos',
                colors: ['#2F4F4F', '#8B4513', '#000000']
            },
            {
                name: 'Fitted Jeans',
                description: 'Calças jeans bem ajustadas em tons escuros. Clássico que combina com tudo.',
                category: 'Calça',
                colors: ['#00008B', '#191970', '#2F4F4F']
            }
        ]
    },

    november: {
        season: 'Outono/Inverno',
        month: 'Novembro',
        emoji: '🍁',
        trends: [
            {
                name: 'Wine Tones',
                description: 'Cores vinho, marsala e borgonha. Elegância quente perfeita para transição de estações.',
                category: 'Cores',
                colors: ['#722F37', '#800020', '#8B1538']
            },
            {
                name: 'Long Coats',
                description: 'Casacos longos que chegam até os joelhos. Aquecimento e elegância no outono tardio.',
                category: 'Casaco',
                colors: ['#4A4A4A', '#8B4513', '#2F4F4F']
            },
            {
                name: 'Tall Boots',
                description: 'Botas que chegam até a coxa em couro ou camurça. Sofisticação no outono avançado.',
                category: 'Sapatos',
                colors: ['#1A1A1A', '#654321', '#2F4F4F']
            },
            {
                name: 'Rich Fabrics',
                description: 'Tecidos luxuosos como veludo e camurça. Texturas que agregam profundidade aos looks.',
                category: 'Tecido',
                colors: ['#8B0000', '#4B0082', '#2F1B3C']
            }
        ]
    },

    december: {
        season: 'Inverno',
        month: 'Dezembro',
        emoji: '❄️✨',
        trends: [
            {
                name: 'Metallic Colors',
                description: 'Tons ouro, prata e bronze brilhantes. Brilho festivo para celebrar o fim do ano.',
                category: 'Cores',
                colors: ['#FFD700', '#C0C0C0', '#CD7F32']
            },
            {
                name: 'Party Dresses',
                description: 'Vestidos elegantes para festas e celebrações. Peças especiais para o fim de ano.',
                category: 'Vestido',
                colors: ['#1A1A1A', '#8B0000', '#4B0082']
            },
            {
                name: 'Statement Heels',
                description: 'Saltos altos e chamativos em cores vibrantes ou metalizadas. Sofisticação máxima.',
                category: 'Sapatos',
                colors: ['#FFD700', '#FF1493', '#C0C0C0']
            },
            {
                name: 'Shimmering Fabrics',
                description: 'Tecidos com brilho como sequins, paetês e lurex. Festivo e elegante para celebrações.',
                category: 'Tecido',
                colors: ['#FFD700', '#FF69B4', '#00CED1']
            }
        ]
    },

    // ESTAÇÕES
    spring: {
        season: 'Primavera',
        emoji: '🌸',
        trends: [
            {
                name: 'Fresh Pastels',
                description: 'Paleta de cores suaves e refrescantes. Rosa, azul claro, menta e creme dominam a estação.',
                category: 'Cores',
                colors: ['#FFB6D9', '#ADD8E6', '#98FF98']
            },
            {
                name: 'Floral Fashion',
                description: 'Estampas florais em tudo: vestidos, blusas, acessórios. Celebra a renovação da natureza.',
                category: 'Estampa',
                colors: ['#FFE4E1', '#F0FFFF', '#E0FFFF']
            },
            {
                name: 'Light Layers',
                description: 'Cardigans, jaquetas jeans e peças leves para transição de temperatura.',
                category: 'Casaco',
                colors: ['#F5F5F5', '#FFEFD5', '#FFE4B5']
            },
            {
                name: 'Spring Footwear',
                description: 'Tênis de lona, sandálias confortáveis e sapatos respiráveis. Leveza para os pés.',
                category: 'Sapatos',
                colors: ['#FFFACD', '#FFB6C1', '#B0E0E6']
            }
        ]
    },

    summer: {
        season: 'Verão',
        emoji: '☀️',
        trends: [
            {
                name: 'Bright Vibrancy',
                description: 'Cores neon, pink, amarelo e verde limão. Energia e alegria domina o verão.',
                category: 'Cores',
                colors: ['#FF6B6B', '#FFD93D', '#6BCB77']
            },
            {
                name: 'Minimalist Basics',
                description: 'T-shirts, shorts e vestidos simples em cores sólidas. Conforto é prioridade.',
                category: 'Básico',
                colors: ['#FFFFFF', '#000000', '#A9A9A9']
            },
            {
                name: 'Beach Ready',
                description: 'Biquínis, coberturas de praia e acessórios para aproveitar o verão ao máximo.',
                category: 'Praia',
                colors: ['#FFE66D', '#FFA500', '#FF69B4']
            },
            {
                name: 'Cool Accessories',
                description: 'Óculos de sol, bonés, lenços e bolsas em cores vibrantes. Completa seu look verão.',
                category: 'Acessório',
                colors: ['#FF6B9D', '#4ECDC4', '#FFE66D']
            }
        ]
    },

    fall: {
        season: 'Outono',
        emoji: '🍂',
        trends: [
            {
                name: 'Warm Earth Tones',
                description: 'Marrom, terracota, ocre e bege. Paleta que aquece e conecta com a natureza outonal.',
                category: 'Cores',
                colors: ['#8B4513', '#CD853F', '#D2B48C']
            },
            {
                name: 'Cozy Layers',
                description: 'Sweaters, blazers e jaquetas que criam dimensão e calor. Combina estilo com conforto.',
                category: 'Casaco',
                colors: ['#8B4513', '#A0522D', '#CD853F']
            },
            {
                name: 'Classic Patterns',
                description: 'Xadrez, listras e padrões geométricos. Clássicos do outono que nunca saem de moda.',
                category: 'Estampa',
                colors: ['#8B0000', '#DAA520', '#006400']
            },
            {
                name: 'Boot Season',
                description: 'Botas em diversos estilos: ankle, knee-high e over-the-knee. Essencial para o outono.',
                category: 'Sapatos',
                colors: ['#2F4F4F', '#8B4513', '#000000']
            }
        ]
    },

    winter: {
        season: 'Inverno',
        emoji: '❄️',
        trends: [
            {
                name: 'Cool Tones',
                description: 'Preto, cinza, azul marinho e branco. Cores que refletem o frio da estação.',
                category: 'Cores',
                colors: ['#1A1A1A', '#696969', '#00008B']
            },
            {
                name: 'Heavy Outerwear',
                description: 'Casacos, parka e jaquetas de inverno. Proteção térmica sem abrir mão do estilo.',
                category: 'Casaco',
                colors: ['#2F4F4F', '#8B4513', '#000000']
            },
            {
                name: 'Luxe Textures',
                description: 'Lã, cashmere, veludo e couro. Texturas que agregam sofisticação ao look invernal.',
                category: 'Tecido',
                colors: ['#8B0000', '#4B0082', '#2F1B3C']
            },
            {
                name: 'Winter Accessories',
                description: 'Gorro, cachecol, luvas e bolsa térmica. Completa e aquece seu look inverno.',
                category: 'Acessório',
                colors: ['#8B0000', '#2F4F4F', '#C0C0C0']
            }
        ]
    }
};

// DOM Elements
const monthSelect = document.getElementById('monthSelect');
const seasonSelect = document.getElementById('seasonSelect');
const searchBtn = document.getElementById('searchBtn');
const loadingAnimation = document.getElementById('loadingAnimation');
const resultsSection = document.getElementById('resultsSection');
const trendsList = document.getElementById('trendsList');
const resultsTitle = document.getElementById('resultsTitle');
const resultsSubtitle = document.getElementById('resultsSubtitle');
const emptyState = document.getElementById('emptyState');

// Event Listeners
searchBtn.addEventListener('click', searchTrends);
monthSelect.addEventListener('change', () => seasonSelect.value = '');
seasonSelect.addEventListener('change', () => monthSelect.value = '');

// Main search function
function searchTrends() {
    const selectedMonth = monthSelect.value;
    const selectedSeason = seasonSelect.value;

    if (!selectedMonth && !selectedSeason) {
        alert('Por favor, selecione um mês ou uma estação');
        return;
    }

    // Show loading animation
    showLoadingAnimation();

    // Simulate AI processing delay (500-800ms)
    setTimeout(() => {
        hideLoadingAnimation();

        let trendData = null;
        let displayTitle = '';
        let displaySubtitle = '';

        if (selectedMonth) {
            trendData = trendDatabase[selectedMonth];
            displayTitle = `Tendências - ${trendData.emoji} ${trendData.month}`;
            displaySubtitle = `Estação: ${trendData.season}`;
        } else if (selectedSeason) {
            trendData = trendDatabase[selectedSeason];
            displayTitle = `Tendências - ${trendData.emoji} ${trendData.season}`;
            displaySubtitle = `Descubra o que está em destaque nesta estação`;
        }

        displayTrends(trendData, displayTitle, displaySubtitle);
    }, 650);
}

// Display trends cards
function displayTrends(trendData, title, subtitle) {
    resultsTitle.textContent = title;
    resultsSubtitle.textContent = subtitle;
    trendsList.innerHTML = '';

    trendData.trends.forEach((trend, index) => {
        const trendCard = createTrendCard(trend, index);
        trendsList.appendChild(trendCard);
    });

    emptyState.classList.add('hidden');
    resultsSection.classList.remove('hidden');
}

// Create individual trend card
function createTrendCard(trend, index) {
    const card = document.createElement('div');
    card.className = 'trend-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const colorPaletteHTML = trend.colors
        .map((color) => `<div class="color-box" style="background-color: ${color};" title="${color}"></div>`)
        .join('');

    card.innerHTML = `
        <h3>${trend.name}</h3>
        <span class="trend-category">${trend.category}</span>
        <p class="trend-description">${trend.description}</p>
        <div class="color-palette">
            ${colorPaletteHTML}
        </div>
        <p class="color-info">Cores em Destaque</p>
    `;

    return card;
}

// Show loading animation
function showLoadingAnimation() {
    loadingAnimation.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    emptyState.classList.add('hidden');
}

// Hide loading animation
function hideLoadingAnimation() {
    loadingAnimation.classList.add('hidden');
}

// Initialize - show empty state on load
window.addEventListener('load', () => {
    emptyState.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    loadingAnimation.classList.add('hidden');
});
