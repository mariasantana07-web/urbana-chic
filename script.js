// Dados de tendências
const tendencias = [
    {
        id: 1,
        nome: "Cropped Tops",
        emoji: "👕",
        percentual: "87%",
        categoria: "tops",
        descricao: "Tops curtos são a tendência do momento!"
    },
    {
        id: 2,
        nome: "Jeans Wide Leg",
        emoji: "👖",
        percentual: "76%",
        categoria: "calcas",
        descricao: "Calças largas e confortáveis dominam o street-wear"
    },
    {
        id: 3,
        nome: "Vestidos Maxi",
        emoji: "👗",
        percentual: "92%",
        categoria: "vestidos",
        descricao: "Elegância e conforto em um único look"
    },
    {
        id: 4,
        nome: "Sapatos Balenciaga",
        emoji: "👟",
        percentual: "84%",
        categoria: "calcados",
        descricao: "Sneakers chunky são imprescindíveis"
    },
    {
        id: 5,
        nome: "Oversized Blazer",
        emoji: "🧥",
        percentual: "89%",
        categoria: "tops",
        descricao: "Blazers grandes e sofisticados para qualquer ocasião"
    },
    {
        id: 6,
        nome: "Leggings Holográfico",
        emoji: "✨",
        percentual: "71%",
        categoria: "calcas",
        descricao: "Brilho e futurismo na sua combinação"
    },
    {
        id: 7,
        nome: "Vestido de Festa",
        emoji: "💃",
        percentual: "95%",
        categoria: "vestidos",
        descricao: "Destaque-se em suas festas com estilo"
    },
    {
        id: 8,
        nome: "Botas de Couro",
        emoji: "🥾",
        percentual: "81%",
        categoria: "calcados",
        descricao: "Botas clássicas que combinam com tudo"
    }
];

// Dados de IA - Sugestões baseadas em estilos
const iaSugestoes = {
    casual: {
        peca: "Jeans Wide Leg + Cropped Top",
        emoji: "👖👕",
        tendencia: "Em alta em 87% das buscas!"
    },
    elegante: {
        peca: "Vestido Maxi + Botas de Couro",
        emoji: "👗🥾",
        tendencia: "95% de aprovação entre fashionistas!"
    },
    "street-wear": {
        peca: "Oversized Blazer + Sneakers Chunky",
        emoji: "🧥👟",
        tendencia: "Combinação predileta dos criadores de estilo!"
    },
    futurista: {
        peca: "Leggings Holográfico + Cropped Top",
        emoji: "✨👕",
        tendencia: "Tendência em crescimento de 71%!"
    },
    festa: {
        peca: "Vestido de Festa + Botas",
        emoji: "💃🥾",
        tendencia: "Escolha número 1 para eventos especiais!"
    },
    minimalista: {
        peca: "Jeans + Blazer Oversized",
        emoji: "👖🧥",
        tendencia: "Simplicidade elegante em alta!"
    }
};

// Renderizar tendências
function renderizarTendencias(filtro = 'todos') {
    const container = document.getElementById('tendencias-container');
    container.innerHTML = '';

    const tendenciasFiltradas = filtro === 'todos' 
        ? tendencias 
        : tendencias.filter(t => t.categoria === filtro);

    tendenciasFiltradas.forEach((tendencia, index) => {
        const card = document.createElement('div');
        card.className = 'card-tendencia';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="emoji-grande">${tendencia.emoji}</div>
            <h3>${tendencia.nome}</h3>
            <p>${tendencia.descricao}</p>
            <div class="percentual">${tendencia.percentual}</div>
            <div class="categoria">${traduzirCategoria(tendencia.categoria)}</div>
        `;

        card.addEventListener('click', () => {
            mostrarDetalhes(tendencia);
        });

        container.appendChild(card);
    });
}

// Traduzir categoria
function traduzirCategoria(categoria) {
    const traducoes = {
        'tops': 'Tops',
        'calcas': 'Calças',
        'vestidos': 'Vestidos',
        'calcados': 'Calçados'
    };
    return traducoes[categoria] || categoria;
}

// Mostrar detalhes da tendência
function mostrarDetalhes(tendencia) {
    alert(`${tendencia.emoji} ${tendencia.nome}\n\n${tendencia.descricao}\n\nTendência: ${tendencia.percentual}`);
}

// Configurar filtros
function configurarFiltros() {
    const botoesFiltro = document.querySelectorAll('.filtro-btn');
    
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', (e) => {
            // Remove classe ativa de todos
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            
            // Adiciona classe ativa ao clicado
            e.target.classList.add('ativo');
            
            // Renderiza tendências filtradas
            const filtro = e.target.dataset.filtro;
            renderizarTendencias(filtro);
        });
    });
}

// Configurar IA Trend Finder
function configurarIA() {
    const form = document.getElementById('form-ia');
    const input = document.getElementById('input-estilo');
    const resultado = document.getElementById('resultado-ia');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const estilo = input.value.toLowerCase().trim();
        let sugestao = null;

        // Procura por correspondência exata
        if (iaSugestoes[estilo]) {
            sugestao = iaSugestoes[estilo];
        } else {
            // Tenta encontrar correspondência parcial
            const chaves = Object.keys(iaSugestoes);
            const encontrada = chaves.find(chave => estilo.includes(chave) || chave.includes(estilo));
            
            if (encontrada) {
                sugestao = iaSugestoes[encontrada];
            }
        }

        if (sugestao) {
            resultado.innerHTML = `
                <p>
                    <strong>🤖 IA Recomenda:</strong><br><br>
                    ${sugestao.emoji} <strong>${sugestao.peca}</strong><br><br>
                    ⭐ ${sugestao.tendencia}
                </p>
            `;
        } else {
            resultado.innerHTML = `
                <p>
                    <strong>🤔 Hmm, não encontrei uma recomendação específica para "${estilo}"</strong><br><br>
                    Tente: casual, elegante, street-wear, futurista, festa ou minimalista!
                </p>
            `;
        }

        input.value = '';
    });
}

// Scroll suave
function configurarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderizarTendencias();
    configurarFiltros();
    configurarIA();
    configurarScrollSuave();
    
    console.log('🎉 Urbana Chic carregado com sucesso!');
    console.log('📱 Site responsivo e com IA integrada!');
});
