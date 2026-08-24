"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniversalMVC = generateUniversalMVC;
// templates/TemplateUniversal.ts
const fs = require("fs");
const path = require("path");
function generateUniversalMVC(projectPath, framework) {
    switch (framework) {
        case 'typescript':
            generateTS(projectPath);
            break;
        case 'javascript':
            generateJS(projectPath);
            break;
    }
}
// ==============================
// TYPESCRIPT
// ==============================
function generateTS(projectPath) {
    const repository = `// UsuarioRepository.ts

export class UsuarioRepository {

    async create(data: any): Promise<any> {
        // TODO: adicione sua lógica aqui
    }

    async findById(id: number): Promise<any> {
        // TODO: adicione sua lógica aqui
    }

    async findByEmail(email: string): Promise<any> {
        // TODO: adicione sua lógica aqui
    }

    async findByUsername(username: string): Promise<any> {
        // TODO: adicione sua lógica aqui
    }

    async findAll(): Promise<any[]> {
        // TODO: adicione sua lógica aqui
    }

    async update(id: number, data: any): Promise<any> {
        // TODO: adicione sua lógica aqui
    }

    async delete(id: number): Promise<void> {
        // TODO: adicione sua lógica aqui
    }
}
`;
    const service = `// UsuarioService.ts
import { UsuarioRepository } from '../repositories/UsuarioRepository';

const repository = new UsuarioRepository();

export class UsuarioService {

    async create(data: any): Promise<any> {
        // TODO: adicione sua lógica aqui
        return await repository.create(data);
    }

    async findById(id: number): Promise<any> {
        // TODO: adicione sua lógica aqui
        return await repository.findById(id);
    }

    async findByEmail(email: string): Promise<any> {
        // TODO: adicione sua lógica aqui
        return await repository.findByEmail(email);
    }

    async findByUsername(username: string): Promise<any> {
        // TODO: adicione sua lógica aqui
        return await repository.findByUsername(username);
    }

    async findAll(): Promise<any[]> {
        // TODO: adicione sua lógica aqui
        return await repository.findAll();
    }

    async update(id: number, data: any): Promise<any> {
        // TODO: adicione sua lógica aqui
        return await repository.update(id, data);
    }

    async delete(id: number): Promise<void> {
        // TODO: adicione sua lógica aqui
        await repository.delete(id);
    }
}
`;
    const controller = `// UsuarioController.ts
import { Request, Response } from 'express';
import { UsuarioService } from '../services/UsuarioService';

const service = new UsuarioService();

export class UsuarioController {

    async index(req: Request, res: Response): Promise<void> {
        try {
            // TODO: adicione sua lógica aqui
        } catch (err: any) {
            // TODO: trate o erro aqui
        }
    }

    async show(req: Request, res: Response): Promise<void> {
        try {
            // TODO: adicione sua lógica aqui
        } catch (err: any) {
            // TODO: trate o erro aqui
        }
    }

    async store(req: Request, res: Response): Promise<void> {
        try {
            // TODO: adicione sua lógica aqui
        } catch (err: any) {
            // TODO: trate o erro aqui
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            // TODO: adicione sua lógica aqui
        } catch (err: any) {
            // TODO: trate o erro aqui
        }
    }

    async destroy(req: Request, res: Response): Promise<void> {
        try {
            // TODO: adicione sua lógica aqui
        } catch (err: any) {
            // TODO: trate o erro aqui
        }
    }
}
`;
    writeFile(projectPath, 'src/repositories/UsuarioRepository.ts', repository);
    writeFile(projectPath, 'src/services/UsuarioService.ts', service);
    writeFile(projectPath, 'src/controllers/UsuarioController.ts', controller);
}
// ==============================
// JAVASCRIPT
// ==============================
function generateJS(projectPath) {
    const repository = `// UsuarioRepository.js

class UsuarioRepository {

    async create(data) {
        // TODO: adicione sua lógica aqui
    }

    async findById(id) {
        // TODO: adicione sua lógica aqui
    }

    async findByEmail(email) {
        // TODO: adicione sua lógica aqui
    }

    async findByUsername(username) {
        // TODO: adicione sua lógica aqui
    }

    async findAll() {
        // TODO: adicione sua lógica aqui
    }

    async update(id, data) {
        // TODO: adicione sua lógica aqui
    }

    async delete(id) {
        // TODO: adicione sua lógica aqui
    }
}

module.exports = UsuarioRepository;
`;
    const service = `// UsuarioService.js
const UsuarioRepository = require('../repositories/UsuarioRepository');

const repository = new UsuarioRepository();

class UsuarioService {

    async create(data) {
        // TODO: adicione sua lógica aqui
        return await repository.create(data);
    }

    async findById(id) {
        // TODO: adicione sua lógica aqui
        return await repository.findById(id);
    }

    async findByEmail(email) {
        // TODO: adicione sua lógica aqui
        return await repository.findByEmail(email);
    }

    async findByUsername(username) {
        // TODO: adicione sua lógica aqui
        return await repository.findByUsername(username);
    }

    async findAll() {
        // TODO: adicione sua lógica aqui
        return await repository.findAll();
    }

    async update(id, data) {
        // TODO: adicione sua lógica aqui
        return await repository.update(id, data);
    }

    async delete(id) {
        // TODO: adicione sua lógica aqui
        await repository.delete(id);
    }
}

module.exports = UsuarioService;
`;
    const controller = `// UsuarioController.js
const UsuarioService = require('../services/UsuarioService');

const service = new UsuarioService();

class UsuarioController {

    async index(req, res) {
        try {
            // TODO: adicione sua lógica aqui
        } catch (err) {
            // TODO: trate o erro aqui
        }
    }

    async show(req, res) {
        try {
            // TODO: adicione sua lógica aqui
        } catch (err) {
            // TODO: trate o erro aqui
        }
    }

    async store(req, res) {
        try {
            // TODO: adicione sua lógica aqui
        } catch (err) {
            // TODO: trate o erro aqui
        }
    }

    async update(req, res) {
        try {
            // TODO: adicione sua lógica aqui
        } catch (err) {
            // TODO: trate o erro aqui
        }
    }

    async destroy(req, res) {
        try {
            // TODO: adicione sua lógica aqui
        } catch (err) {
            // TODO: trate o erro aqui
        }
    }
}

module.exports = UsuarioController;
`;
    writeFile(projectPath, 'src/repositories/UsuarioRepository.js', repository);
    writeFile(projectPath, 'src/services/UsuarioService.js', service);
    writeFile(projectPath, 'src/controllers/UsuarioController.js', controller);
}
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
//# sourceMappingURL=templateuniversal.js.map