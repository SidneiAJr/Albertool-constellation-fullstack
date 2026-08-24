# 🌌 Albertool Constellation Fullstack

Gere projetos fullstack completos direto no VS Code — frontend, backend e um `package.json` global para instalar e rodar tudo com um único comando.

---

> ## ⚠️ ATENÇÃO — LEIA ANTES DE USAR
>
> Esta extensão **gera apenas a estrutura** do projeto, sem nenhuma lógica implementada.
>
> - Os arquivos gerados são **esqueletos vazios** com comentários `// TODO`
> - A lógica de negócio, validações, queries e regras ficam **por sua conta**
> - A estrutura de pastas segue o padrão MVC do jeito que o autor aprendeu — sinta-se livre para reorganizar
> - Angular está disponível no menu mas com **suporte limitado** por enquanto

---

## ✨ O que é gerado

- Estrutura completa de **frontend** (React JS ou React TS)
- Estrutura completa de **backend** (Node JS ou Node TS)
- `package.json` global na raiz com scripts unificados
- Frontend e backend rodando **em paralelo** com um único comando
- Estrutura MVC: Repository, Service, Controller
- Pastas para middlewares, rotas e configuração
- Componentes React vazios: Button, Input, Modal, Navbar, Footer

---

## 🚀 Como usar

**1. Abrir a paleta de comandos**
```
Ctrl + Shift + P → Constellation: Gerar Projeto
```

**2. Selecionar a pasta do projeto**

**3. Escolher o frontend**
- React JS
- React TS
- Angular *(suporte limitado)*

**4. Escolher o backend**
- Node JS
- Node TS

**5. Instalar dependências**
```bash
npm run install:all
```

**6. Rodar o projeto**
```bash
npm run dev
```

Frontend sobe em `http://localhost:5173` e backend em `http://localhost:3000` — simultaneamente.

---

## 📦 Scripts globais

| Script | O que faz |
|---|---|
| `npm run install:all` | Instala dependências da raiz, frontend e backend |
| `npm run dev` | Sobe frontend e backend em paralelo |
| `npm run build` | Faz build do frontend e backend |
| `npm run start` | Sobe apenas o backend em produção |

---

## 🗂 Estrutura gerada

```
meu-projeto/
├── package.json              ← raiz global
├── frontend/
│   ├── src/
│   │   ├── components/       ← Button, Input, Modal, Navbar, Footer (vazios)
│   │   ├── pages/            ← HomePage (vazia)
│   │   ├── hooks/            ← useAuth (vazio)
│   │   ├── services/         ← api.js / api.ts (vazio)
│   │   └── types/            ← index.ts (somente TS)
│   ├── index.html
│   └── package.json
└── backend/
    ├── src/
    │   ├── controllers/      ← UsuarioController (vazio)
    │   ├── services/         ← UsuarioService (vazio)
    │   ├── repositories/     ← UsuarioRepository (vazio)
    │   ├── routes/           ← estrutura de rotas
    │   ├── middleware/       ← auth, error
    │   └── config/           ← env, data-source
    ├── .env
    └── package.json
```

---

## 🔧 Requisitos

- VS Code 1.85.0 ou superior
- Node.js 18+
- npm 9+

---

## 🛠 Tecnologias incluídas

**Frontend**
- React 18 + React Router DOM
- Axios
- Vite

**Backend**
- Express + Cors + Helmet
- JWT + Bcrypt
- Winston + Morgan
- Dotenv + Rate Limit

---

## 👨‍💻 Autor

Parte da família de extensões **Albertool**

---

## 📄 Licença

MIT
