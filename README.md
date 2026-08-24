# 🌌 Albertool Constellation Fullstack

Gere projetos fullstack completos direto no VS Code — frontend, backend e um `package.json` global para instalar e rodar tudo com um único comando.

---

## ✨ Funcionalidades

- ✅ Gera estrutura completa de **frontend** (React JS ou React TS)
- ✅ Gera estrutura completa de **backend** (Node JS ou Node TS)
- ✅ `package.json` global na raiz com scripts unificados
- ✅ Roda frontend e backend **em paralelo** com um único comando
- ✅ Estrutura MVC pronta: Repository, Service, Controller, Routes
- ✅ Middlewares de autenticação JWT e tratamento de erros incluídos
- ✅ Componentes React prontos: Button, Input, Modal, Navbar, Footer
- ✅ Interceptors Axios configurados

---

## 🚀 Como usar

### 1. Abrir a paleta de comandos
```
Ctrl + Shift + P → Constellation: Gerar Projeto
```

### 2. Selecionar a pasta do projeto

### 3. Escolher o frontend
- React JS
- React TS
- Angular

### 4. Escolher o backend
- Node JS
- Node TS

### 5. Instalar dependências
```bash
npm run install:all
```

### 6. Rodar o projeto
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
│   │   ├── components/       ← Button, Input, Modal, Navbar, Footer
│   │   ├── pages/            ← HomePage
│   │   ├── hooks/            ← useAuth
│   │   ├── services/         ← api.js / api.ts
│   │   └── types/            ← index.ts (somente TS)
│   ├── index.html
│   └── package.json
└── backend/
    ├── src/
    │   ├── controllers/      ← UsuarioController
    │   ├── services/         ← UsuarioService
    │   ├── repositories/     ← UsuarioRepository
    │   ├── routes/           ← usuario.routes
    │   ├── middleware/       ← auth, error
    │   └── config/           ← env.config
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
- Axios com interceptors
- Vite
- Bootstrap + Tailwind (descomentável)

**Backend**
- Express + Cors + Helmet
- JWT + Bcrypt
- Winston + Morgan
- Dotenv + Rate Limit
- Nodemailer + Multer

---

## 👨‍💻 Autor

Parte da família de extensões **Albertool**

---

## 📄 Licença

MIT