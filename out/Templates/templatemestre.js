"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarProjeto = gerarProjeto;
const path = require("path");
const fs = require("fs");
const templatejs_1 = require("./templatejs");
const templateTs_1 = require("./templateTs");
function writeFile(projectPath, filePath, content) {
    const fullPath = path.join(projectPath, filePath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir))
        fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullPath, content);
}
function packageJsonMestre(projectPath, frontend) {
    const devFrontend = frontend === 'Angular'
        ? 'npm run start --prefix frontend'
        : 'npm run dev --prefix frontend';
    const packageJson = `{
    "name": "${path.basename(projectPath).toLowerCase()}",
    "version": "1.0.0",
    "description": "Projeto Full Stack gerado pelo Constellation",
    "scripts": {
        "install:all": "npm install && npm install --prefix frontend && npm install --prefix backend",
        "dev": "concurrently \\"${devFrontend}\\" \\"npm run dev --prefix backend\\"",
        "build": "npm run build --prefix frontend && npm run build --prefix backend",
        "start": "npm run start --prefix backend"
    },
    "devDependencies": {
        "concurrently": "^8.2.2"
    }
}
`;
    writeFile(projectPath, 'package.json', packageJson);
}
function gerarProjeto(projectPath, frontend, backend) {
    const frontendPath = path.join(projectPath, 'frontend');
    const backendPath = path.join(projectPath, 'backend');
    packageJsonMestre(projectPath, frontend);
    switch (frontend) {
        case 'React JS':
            (0, templatejs_1.frontendJS)(frontendPath);
            break;
        case 'React TS':
            (0, templatejs_1.frontendTS)(frontendPath);
            break;
        case 'Angular':
            (0, templatejs_1.angular)(frontendPath);
            break;
    }
    switch (backend) {
        case 'Node JS':
            (0, templateTs_1.backendJS)(backendPath);
            break;
        case 'Node TS':
            (0, templateTs_1.backendTS)(backendPath);
            break;
    }
}
//# sourceMappingURL=templatemestre.js.map