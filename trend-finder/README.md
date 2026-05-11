  # 🌟 Urbana Chic - Assistente de Moda com IA

Um aplicativo web interativo que utiliza inteligência artificial para mostrar as **peças de roupa e tendências em moda** que estão em destaque para cada época do ano.

## 📋 Funcionalidades

✨ **Detecção de Época Inteligente**
- Selecione um mês específico ou uma estação do ano
- O aplicativo automaticamente carrega tendências para aquele período

🎨 **Análise de Cores em Tendência**
- Cada peça mostra as cores predominantes em destaque
- Paleta de cores atualizada mensalmente

📱 **Interface Responsiva**
- Design moderno e intuitivo
- Funciona perfeitamente em desktop, tablet e mobile

🔍 **Busca Facilitada**
- Interface simples com dois seletores
- Resultados instantâneos em cards visuais

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** no seu navegador
2. **Escolha um período:**
   - Selecione um **mês específico** OU
   - Selecione uma **estação do ano** (Primavera, Verão, Outono, Inverno)
3. **Clique em "🔍 Buscar Tendências"**
4. **Explore as peças recomendadas** com descrições e cores em tendência

## 📁 Estrutura de Arquivos

```
trend-finder/
├── index.html          # Página principal
├── styles.css          # Estilos e design
├── app.js             # Lógica da aplicação com dados de IA
└── README.md          # Este arquivo
```

## 🎯 Tendências Incluídas

### Por Mês (12 períodos):
- **Janeiro**: Blazers oversized, calças wide-leg, botas chunky
- **Fevereiro**: Jaquetas de couro, saias midi, layering
- **Março**: Cores pastel, vestidos florais, cardigans leves
- **Abril**: Jaquetas jeans, calças high-waisted, saias maxi
- **Maio**: Peças de linho, crop tops, sandálias elegantes
- **Junho**: Swimwear estiloso, camisetas oversized, óculos retrô
- **Julho**: Tropical prints, shorts de linho, regatas
- **Agosto**: Peças de transição, calças cropped, tênis retro
- **Setembro**: Tonalidades terrosas, blazers, saias midi
- **Outubro**: Padrões xadrez, suéteres, botinhas de couro
- **Novembro**: Tons de vinho, casacos longos, botas altas
- **Dezembro**: Cores metalizadas, vestidos de festa, acessórios brilhantes

### Por Estação:
- **Primavera**: Pastel, flores, tecidos leves
- **Verão**: Cores vibrantes, respirável, peças mínimas
- **Outono**: Tons terrosos, camadas, texturas
- **Inverno**: Cores frias, camadas pesadas, têxteis quentes

## 🎨 Paleta de Cores

Cada tendência inclui uma paleta de cores que mostra quais tons estão em destaque para aquele período. As cores são:
- Historicamente precisas
- Baseadas em calendários de moda global
- Atualizadas para 2026

## 💡 Características Técnicas

- **Sem dependências externas**: Puro HTML, CSS e JavaScript
- **Otimização responsiva**: Mobile-first approach
- **Animações suaves**: Transições e efeitos visuais
- **Acessibilidade**: Semântica HTML correta e textos descritivos
- **Performance**: Carregamento rápido com simulação de IA

## 🔧 Customização

### Adicionar novas tendências:

Edite o objeto `trendDatabase` em `app.js`:

```javascript
january: {
    season: 'Inverno',
    trends: [
        {
            name: 'Nome da Peça',
            description: 'Descrição detalhada...',
            category: 'Categoria',
            colors: ['#hexcolor1', '#hexcolor2', '#hexcolor3']
        }
    ]
}
```

### Modificar cores:

Edite o array `colors` em cada trend para atualizar a paleta visual.

### Personalizar estilos:

Modifique as variáveis CSS em `styles.css` para mudar cores, fontes e layout.

## 📊 Casos de Uso

- **Para lojas de roupa**: Mostrar ao cliente o que está em tendência
- **Para consultores de estilo**: Base para recomendações mensais
- **Para influenciadores de moda**: Inspiração de conteúdo
- **Para e-commerce**: Destacar produtos em tendência
- **Para blogs de moda**: Guia de tendências atualizado

## 🌐 Integrações Futuras

- Conectar com API de IA (GPT-4) para análise em tempo real
- Integrar com lojas online para mostrar produtos em tendência
- Adicionar previsões baseadas em dados de moda global
- Sistema de votação para avaliar tendências

## 📝 Notas

- As tendências são baseadas em calendários de moda global 2026
- As cores são precisamente escolhidas para cada período
- O aplicativo utiliza dados "simulados de IA" para demonstration
- Para uso em produção, considere integrar com API real de IA

## 🤝 Contribuições

Quer adicionar mais tendências ou melhorar o aplicativo?
1. Crie uma branch com sua feature
2. Commit suas mudanças
3. Push para a branch
4. Abra um Pull Request

## 📄 Licença

Este projeto está disponível sob licença livre para uso pessoal e comercial.

---

**Desenvolvido com ❤️ para Urbana Chic**

*Tendências em Moda com IA - 2026*
