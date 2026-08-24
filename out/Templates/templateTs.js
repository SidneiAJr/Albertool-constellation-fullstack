"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backendTS = backendTS;
exports.backendJS = backendJS;
const fs = require("fs");
const path = require("path");
const templateuniversal_1 = require("./templateuniversal");
// ==============================
// HELPER
// ==============================
function writeFile(projectPath, filePath, content) {
    const fullPath = path.join(projectPath, filePath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir))
        fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullPath, content);
}
function criarPasta(projectPath, pasta) {
    const fullPath = path.join(projectPath, pasta);
    if (!fs.existsSync(fullPath))
        fs.mkdirSync(fullPath, { recursive: true });
}
// ==============================
// PASTAS DO BACKEND
// ==============================
function criarPastasBackend(projectPath) {
    criarPasta(projectPath, 'src/controllers');
    criarPasta(projectPath, 'src/services');
    criarPasta(projectPath, 'src/repositories');
    criarPasta(projectPath, 'src/routes');
    criarPasta(projectPath, 'src/middleware');
    criarPasta(projectPath, 'src/schemas');
    criarPasta(projectPath, 'src/utils');
    criarPasta(projectPath, 'src/config');
    criarPasta(projectPath, 'src/migrations');
}
// ==============================
// BACKEND TYPESCRIPT
// ==============================
function backendTS(projectPath) {
    criarPastasBackend(projectPath);
    const packageJson = `{
    "name": "backend",
    "version": "1.0.0",
    "description": "API Node.js - TypeScript",
    "main": "dist/server.js",
    "scripts": {
        "start": "node dist/server.js",
        "dev": "ts-node-dev --respawn src/server.ts",
        "build": "tsc"
    },
    "dependencies": {
        "express": "^4.18.2",
        "cors": "^2.8.5",
        "helmet": "^7.1.0",
        "compression": "^1.7.4",
        "express-rate-limit": "^7.1.5",
        "bcrypt": "^5.1.1",
        "jsonwebtoken": "^9.0.2",
        "winston": "^3.11.0",
        "morgan": "^1.10.0",
        "dotenv": "^16.3.1",
        "typeorm": "^0.3.17",
        "mysql2": "^3.6.0",
        "reflect-metadata": "^0.1.13"
    },
    "devDependencies": {
        "typescript": "^5.3.2",
        "ts-node-dev": "^2.0.0",
        "@types/node": "^20.10.0",
        "@types/express": "^4.17.21",
        "@types/cors": "^2.8.17",
        "@types/bcrypt": "^5.0.2",
        "@types/jsonwebtoken": "^9.0.5",
        "@types/morgan": "^1.9.9",
        "@types/compression": "^1.7.5"
    }
}
`;
    const tsConfig = `{
    "compilerOptions": {
        "target": "ES2020",
        "module": "CommonJS",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}
`;
    const serverTs = `// src/server.ts
import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })
app.use(limiter)

app.get('/', (req, res) => {
    res.json({ message: 'API rodando!' })
})

// TODO: importe suas rotas aqui

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(\`Servidor rodando na porta \${PORT}\`))
`;
    const envFile = `PORT=3000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=

JWT_SECRET=
JWT_EXPIRES_IN=1d
`;
    const envConfig = `// src/config/env.ts
import dotenv from 'dotenv'
dotenv.config()

export const {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    JWT_SECRET,
    JWT_EXPIRES_IN
} = process.env
`;
    const dataSource = `// src/config/data-source.ts
import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '3306'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    entities: [],      // TODO: adicione suas entidades aqui
    logging: false,
    migrations: ['src/migrations/*.ts']
})
`;
    const authMiddleware = `// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express'

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
    // TODO: adicione sua lógica de autenticação JWT aqui
    next()
}
`;
    const errorMiddleware = `// src/middleware/error.ts
import { Request, Response, NextFunction } from 'express'

export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction): void {
    // TODO: adicione seu tratamento de erros aqui
    res.status(err.status || 500).json({ message: err.message || 'Erro interno' })
}
`;
    const usuarioRoutes = `// src/routes/usuario.routes.ts
import { Router } from 'express'
import { UsuarioController } from '../controllers/UsuarioController'

const router = Router()
const controller = new UsuarioController()

// TODO: adicione suas rotas aqui
// router.get('/', controller.index)
// router.get('/:id', controller.show)
// router.post('/', controller.store)
// router.put('/:id', controller.update)
// router.delete('/:id', controller.destroy)

export default router
`;
    const usuarioSchema = `// src/schemas/usuario.schema.ts

// TODO: adicione seus schemas de validação aqui
// Exemplo com Zod:
// import { z } from 'zod'
// export const createUsuarioSchema = z.object({ ... })
`;
    const utilsIndex = `// src/utils/index.ts

// TODO: adicione suas funções utilitárias aqui
`;
    const gitignore = `node_modules/
.env
dist/
`;
    writeFile(projectPath, 'package.json', packageJson);
    writeFile(projectPath, 'tsconfig.json', tsConfig);
    writeFile(projectPath, 'src/server.ts', serverTs);
    writeFile(projectPath, '.env', envFile);
    writeFile(projectPath, '.gitignore', gitignore);
    writeFile(projectPath, 'src/config/env.ts', envConfig);
    writeFile(projectPath, 'src/config/data-source.ts', dataSource);
    writeFile(projectPath, 'src/middleware/auth.ts', authMiddleware);
    writeFile(projectPath, 'src/middleware/error.ts', errorMiddleware);
    writeFile(projectPath, 'src/routes/usuario.routes.ts', usuarioRoutes);
    writeFile(projectPath, 'src/schemas/usuario.schema.ts', usuarioSchema);
    writeFile(projectPath, 'src/utils/index.ts', utilsIndex);
    (0, templateuniversal_1.generateUniversalMVC)(projectPath, 'typescript');
}
// ==============================
// BACKEND JAVASCRIPT
// ==============================
function backendJS(projectPath) {
    criarPastasBackend(projectPath);
    const packageJson = `{
    "name": "backend",
    "version": "1.0.0",
    "description": "API Node.js - JavaScript",
    "main": "server.js",
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js"
    },
    "dependencies": {
        "express": "^4.18.2",
        "cors": "^2.8.5",
        "helmet": "^7.1.0",
        "compression": "^1.7.4",
        "express-rate-limit": "^7.1.5",
        "bcrypt": "^5.1.1",
        "jsonwebtoken": "^9.0.2",
        "winston": "^3.11.0",
        "morgan": "^1.10.0",
        "dotenv": "^16.3.1",
        "typeorm": "^0.3.17",
        "mysql2": "^3.6.0",
        "reflect-metadata": "^0.1.13"
    },
    "devDependencies": {
        "nodemon": "^3.0.1"
    }
}
`;
    const serverJs = `// server.js
require('reflect-metadata')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })
app.use(limiter)

app.get('/', (req, res) => {
    res.json({ message: 'API rodando!' })
})

// TODO: importe suas rotas aqui

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(\`Servidor rodando na porta \${PORT}\`))
`;
    const envFile = `PORT=3000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=

JWT_SECRET=
JWT_EXPIRES_IN=1d
`;
    const envConfig = `// src/config/env.js
require('dotenv').config()

const {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    JWT_SECRET,
    JWT_EXPIRES_IN
} = process.env

module.exports = {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    JWT_SECRET,
    JWT_EXPIRES_IN
}
`;
    const dataSource = `// src/config/data-source.js
require('reflect-metadata')
const { DataSource } = require('typeorm')

const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '3306'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    entities: [],      // TODO: adicione suas entidades aqui
    logging: false,
    migrations: ['src/migrations/*.js']
})

module.exports = { AppDataSource }
`;
    const authMiddleware = `// src/middleware/auth.js

function authMiddleware(req, res, next) {
    // TODO: adicione sua lógica de autenticação JWT aqui
    next()
}

module.exports = { authMiddleware }
`;
    const errorMiddleware = `// src/middleware/error.js

function errorMiddleware(err, req, res, next) {
    // TODO: adicione seu tratamento de erros aqui
    res.status(err.status || 500).json({ message: err.message || 'Erro interno' })
}

module.exports = { errorMiddleware }
`;
    const usuarioRoutes = `// src/routes/usuario.routes.js
const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const router = Router()
const controller = new UsuarioController()

// TODO: adicione suas rotas aqui
// router.get('/', controller.index)
// router.get('/:id', controller.show)
// router.post('/', controller.store)
// router.put('/:id', controller.update)
// router.delete('/:id', controller.destroy)

module.exports = router
`;
    const usuarioSchema = `// src/schemas/usuario.schema.js

// TODO: adicione seus schemas de validação aqui
`;
    const utilsIndex = `// src/utils/index.js

// TODO: adicione suas funções utilitárias aqui
`;
    const gitignore = `node_modules/
.env
dist/
`;
    writeFile(projectPath, 'package.json', packageJson);
    writeFile(projectPath, 'server.js', serverJs);
    writeFile(projectPath, '.env', envFile);
    writeFile(projectPath, '.gitignore', gitignore);
    writeFile(projectPath, 'src/config/env.js', envConfig);
    writeFile(projectPath, 'src/config/data-source.js', dataSource);
    writeFile(projectPath, 'src/middleware/auth.js', authMiddleware);
    writeFile(projectPath, 'src/middleware/error.js', errorMiddleware);
    writeFile(projectPath, 'src/routes/usuario.routes.js', usuarioRoutes);
    writeFile(projectPath, 'src/schemas/usuario.schema.js', usuarioSchema);
    writeFile(projectPath, 'src/utils/index.js', utilsIndex);
    (0, templateuniversal_1.generateUniversalMVC)(projectPath, 'javascript');
}
//# sourceMappingURL=templateTs.js.map