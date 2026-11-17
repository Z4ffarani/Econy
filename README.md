![Econy](./assets/banner.png)

**[Site](https://z4ffarani-econy.vercel.app) · [Vídeo 1](https://youtu.be/5BdzgsT5DlY) · [Vídeo 2](https://youtu.be/2ojkb-5r94c) · [Publicação](https://www.linkedin.com/posts/kaique-zaffarani_econy-trazendo-o-futuro-ao-presente-um-activity-7266532052655611904-pwSL)**

Econy é uma plataforma voltada para a visualização de inventário de gases de efeito estufa (GEE), comercialização de créditos de carbono entre empresas ao redor do mundo e certificações de sustentabilidade realizadas por auditorias terceirizadas. O front-end oferece uma interface moderna e intuitiva, garantindo que os usuários possam navegar de maneira dinâmica e compatível com diferentes dispositivos. Todas as transações realizadas são registradas em uma blockchain, garantindo segurança e imutabilidade dos dados.

---

## Integrantes

- [Guilherme Santos Nunes](https://github.com/sannunez)
- [Kaique Zaffarani](https://github.com/Z4ffarani)

---

## Funcionalidades

- **Interface convidativa** | A interface é projetada para ser visualmente atraente e organizada, oferecendo uma experiência de navegação simplificada e agradável.
- **Navegação dinâmica** | Implementada com React Router, permite a alternância fluida entre páginas, proporcionando transições suaves.
- **Compatibilidade com diferentes dispositivos** | O design responsivo se adapta a várias resoluções, garantindo acessibilidade em desktops, tablets e smartphones.
- **Componentização e reaproveitamento de código** | O projeto utiliza componentes reutilizáveis, promovendo a consistência e facilitando a manutenção do código.
- **Chamadas de API** | O arquivo `api_rest.jsx` gerencia operações CRUD (create, read, update e delete) em uma API (interface de programação de aplicações) criada no mockAPI (site para criar e hospedar APIs de simulação), permitindo a manipulação de dados de forma prática e eficiente.
- **Armazenamento de dados em sessão** | Os dados manipulados no projeto são armazenados no navegador por meio do `localStorage`, simulando um ambiente real de operação.

---

## Como executar

### Pré-requisitos
- Node.js

```bash
git clone https://github.com/Z4ffarani/Econy.git
cd Econy/econy
npm install
npm run dev
```

Acesse: `http://localhost:5173`

---

## Observações

- A API utilizada é externa e serve apenas para manipular informações fictícias na página `Dashboard.jsx`, podendo ser substituída por outra API, conforme a necessidade.
- Os dados apresentados na plataforma são fictícios e têm propósito exclusivamente demonstrativo.
- O site é responsivo, adaptando-se a diferentes dispositivos e garantindo que o conteúdo seja acessível em smartphones, tablets e desktops.

---

## Projetos acadêmicos

| Entrega | Repositório |
|---|---|
| Global Solution · Computational Thinking with Python · FIAP 2024.2 | [2024-SEM2-GS-COMPUTATIONAL-THINKING-WITH-PYTHON](https://github.com/Z4FFARANI-EDUCATIONAL/2024-SEM2-GS-COMPUTATIONAL-THINKING-WITH-PYTHON) |
| Global Solution · Edge Computing & Computer Systems · FIAP 2024.2 | [2024-SEM2-GS-EDGE-COMPUTING-AND-COMPUTER-SYSTEMS](https://github.com/Z4FFARANI-EDUCATIONAL/2024-SEM2-GS-EDGE-COMPUTING-AND-COMPUTER-SYSTEMS) |

---

## Tecnologias

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

---

## Referências

| # | Referência | Aplicação no projeto |
|---|---|---|
| 1 | [mockAPI](https://mockapi.io/projects) | API simulada consumida pelo `api_rest.jsx` para as operações CRUD do Dashboard |
