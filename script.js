// Dados de tendências expandidos
const tendencias = [
    {
        id: 1,
        nome: "Cropped Tops",
        emoji: "👕",
        percentual: "87%",
        categoria: "tops",
        descricao: "Tops curtos que combinam com tudo!",
        preco: "R$ 45-120"
    },
    {
        id: 2,
        nome: "Jeans Wide Leg",
        emoji: "👖",
        percentual: "76%",
        categoria: "calcas",
        descricao: "Calças largas e confortáveis",
        preco: "R$ 120-250"
    },
    {
        id: 3,
        nome: "Vestidos Maxi",
        emoji: "👗",
        percentual: "92%",
        categoria: "vestidos",
        descricao: "Elegância e conforto perfeitos",
        preco: "R$ 150-400"
    },
    {
        id: 4,
        nome: "Sneakers Chunky",
        emoji: "👟",
        percentual: "84%",
        categoria: "calcados",
        descricao: "Tênis volumosos e modernos",
        preco: "R$ 200-350"
    },
    {
        id: 5,
        nome: "Oversized Blazer",
        emoji: "🧥",
        percentual: "89%",
        categoria: "tops",
        descricao: "Blazers grandes e sofisticados",
        preco: "R$ 180-450"
    },
    {
        id: 6,
        nome: "Leggings Holográfico",
        emoji: "✨",
        percentual: "71%",
        categoria: "calcas",
        descricao: "Brilho e futurismo combinados",
        preco: "R$ 80-150"
    },
    {
        id: 7,
        nome: "Vestido de Festa",
        emoji: "💃",
        percentual: "95%",
        categoria: "vestidos",
        descricao: "Destaque-se em eventos especiais",
        preco: "R$ 300-800"
    },
    {
        id: 8,
        nome: "Botas de Couro",
        emoji: "🥾",
        percentual: "81%",
        categoria: "calcados",
        descricao: "Clássicas e versáteis sempre",
        preco: "R$ 250-600"
    },
    {
        id: 9,
        nome: "Colares Chunky",
        emoji: "💍",
        percentual: "88%",
        categoria: "acessorios",
        descricao: "Acessórios chamam atenção",
        preco: "R$ 50-200"
    },
    {
        id: 10,
        nome: "Cintos Largos",
        emoji: "⏬",
        percentual: "79%",
        categoria: "acessorios",
        descricao: "Definem e marcam a silhueta",
        preco: "R$ 40-150"
    },
    {
        id: 11,
        nome: "Maquiagem Bold",
        emoji: "💄",
        percentual: "86%",
        categoria: "maquiagem",
        descricao: "Looks ousados e marcantes",
        preco: "R$ 30-300"
    },
    {
        id: 12,
        nome: "Unhas Artísticas",
        emoji: "💅",
        percentual: "82%",
        categoria: "maquiagem",
        descricao: "Designs criativos nas unhas",
        preco: "R$ 40-100"
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
        tendencia: "95% de aprovação!"
    },
    "street-wear": {
        peca: "Oversized Blazer + Sneakers Chunky",
        emoji: "🧥👟",
        tendencia: "Favorita dos influenciadores!"
    },
    futurista: {
        peca: "Leggings Holográfico + Cropped Top",
        emoji: "✨👕",
        tendencia: "Tendência em crescimento!"
    },
    festa: {
        peca: "Vestido de Festa + Botas",
        emoji: "💃🥾",
        tendencia: "Escolha número 1!"
    },
    minimalista: {
        peca: "Jeans + Blazer Oversized",
        emoji: "👖🧥",
        tendencia: "Elegância simples!"
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
            <p style="margin-top: 1rem; color: #ffd700; font-weight: bold;">${tendencia.preco}</p>
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
        'calcados': 'Calçados',
        'acessorios': 'Acessórios',
        'maquiagem': 'Beleza'
    };
    return traducoes[categoria] || categoria;
}

// Mostrar detalhes da tendência
function mostrarDetalhes(tendencia) {
    const mensagem = `
${tendencia.emoji} ${tendencia.nome}

${tendencia.descricao}

Tendência: ${tendencia.percentual}
Preço: ${tendencia.preco}

Clique em OK para adicionar ao carrinho!`;
    
    if (confirm(mensagem)) {
        adicionarAoCarrinho(tendencia);
    }
}

// Adicionar ao carrinho (simulado)
function adicionarAoCarrinho(item) {
    alert(`✅ ${item.nome} adicionado ao carrinho!\n\nTotal: ${item.preco}`);
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
            resultado.style.display = 'flex';
        } else {
            resultado.innerHTML = `
                <p>
                    <strong>🤔 Hmm, não encontrei uma recomendação específica para "${estilo}"</strong><br><br>
                    Tente: casual, elegante, street-wear, futurista, festa ou minimalista!
                </p>
            `;
            resultado.style.display = 'flex';
        }

        input.value = '';
    });
}

// Selecionar categoria
function selecionarCategoria(categoria) {
    // Ativa o filtro correspondente
    const botoes = document.querySelectorAll('.filtro-btn');
    botoes.forEach(b => {
        if (b.dataset.filtro === categoria) {
            b.click();
        }
    });
    
    // Scroll para tendências
    document.getElementById('tendencias').scrollIntoView({ behavior: 'smooth' });
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

// Adicionar interatividade aos itens da galeria
function configurarGaleria() {
    document.querySelectorAll('.galeria-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            const titulo = item.querySelector('h3').textContent;
            alert(`✨ Você escolheu: ${titulo}\n\nVer mais sobre este estilo?`);
        });
    });
}

// Adicionar interatividade aos cards de categoria
function configurarCategorias() {
    document.querySelectorAll('.stat-card').forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'pulse 0.5s ease-out';
        });
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderizarTendencias();
    configurarFiltros();
    configurarIA();
    configurarScrollSuave();
    configurarGaleria();
    configurarCategorias();
    
    console.log('🎉 Urbana Chic carregado com sucesso!');
    console.log('📱 Site responsivo e com IA integrada!');
    console.log('✨ Pronto para descobrir as tendências de moda!');
});
