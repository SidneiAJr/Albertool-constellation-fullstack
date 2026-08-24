"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pastasUniversal = pastasUniversal;
const fs = require("fs");
const path = require("path");
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
// PASTAS UNIVERSAIS (React JS, React TS, Angular)
// ==============================
function pastasUniversal(projectPath, lang) {
    // Pastas
    criarPasta(projectPath, 'src/components/Button');
    criarPasta(projectPath, 'src/components/Input');
    criarPasta(projectPath, 'src/components/Modal');
    criarPasta(projectPath, 'src/components/Navbar');
    criarPasta(projectPath, 'src/components/Footer');
    criarPasta(projectPath, 'src/pages');
    criarPasta(projectPath, 'src/hooks');
    criarPasta(projectPath, 'src/services');
    if (lang === 'ts')
        criarPasta(projectPath, 'src/types');
    // hooks/components.ts — só interfaces
    const componentsTs = `// src/hooks/components.ts

export interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
}

export interface InputProps {
    label?: string
    name: string
    type?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}

export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
}

export interface NavbarProps {
    // TODO: adicione suas props aqui
}

export interface FooterProps {
    // TODO: adicione suas props aqui
}
`;
    const componentsJs = `// src/hooks/components.js
// TODO: adicione suas interfaces/proptypes aqui

/**
 * ButtonProps: { children, onClick, type, disabled }
 * InputProps:  { label, name, type, value, onChange, placeholder }
 * ModalProps:  { isOpen, onClose, title, children }
 * NavbarProps: {}
 * FooterProps: {}
 */
`;
    // hooks/useAuth
    const useAuthTs = `// src/hooks/useAuth.ts

export function useAuth() {
    // TODO: adicione sua lógica de autenticação aqui
}
`;
    const useAuthJs = `// src/hooks/useAuth.js

function useAuth() {
    // TODO: adicione sua lógica de autenticação aqui
}

module.exports = { useAuth }
`;
    // services/api
    const apiTs = `// src/services/api.ts

// TODO: configure sua instância axios aqui
`;
    const apiJs = `// src/services/api.js

// TODO: configure sua instância axios aqui
`;
    if (lang === 'ts') {
        writeFile(projectPath, 'src/hooks/components.ts', componentsTs);
        writeFile(projectPath, 'src/hooks/useAuth.ts', useAuthTs);
        writeFile(projectPath, 'src/services/api.ts', apiTs);
    }
    else {
        writeFile(projectPath, 'src/hooks/components.js', componentsJs);
        writeFile(projectPath, 'src/hooks/useAuth.js', useAuthJs);
        writeFile(projectPath, 'src/services/api.js', apiJs);
    }
}
//# sourceMappingURL=templatepastareact.js.map