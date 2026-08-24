"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frontendJS = frontendJS;
exports.frontendTS = frontendTS;
exports.angular = angular;
const fs = require("fs");
const path = require("path");
const templatepastareact_1 = require("./templatepastareact");
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
// ==============================
// REACT JS
// ==============================
function frontendJS(projectPath) {
    (0, templatepastareact_1.pastasUniversal)(projectPath, 'js');
    const packageJson = `{
    "name": "frontend",
    "version": "1.0.0",
    "description": "Frontend React - JavaScript",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
    },
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.21.0",
        "axios": "^1.6.0"
    },
    "devDependencies": {
        "@vitejs/plugin-react": "^4.2.1",
        "vite": "^5.0.8"
    }
}
`;
    const viteConfig = `// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    }
})
`;
    const indexHtml = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
</body>
</html>
`;
    const mainJsx = `// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
`;
    const appJsx = `// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* TODO: adicione suas rotas aqui */}
            </Routes>
        </BrowserRouter>
    )
}

export default App
`;
    const indexCss = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    background-color: #f5f5f5;
    color: #333;
}
`;
    const gitignore = `node_modules/
dist/
.env
`;
    writeFile(projectPath, 'package.json', packageJson);
    writeFile(projectPath, 'vite.config.js', viteConfig);
    writeFile(projectPath, 'index.html', indexHtml);
    writeFile(projectPath, 'src/main.jsx', mainJsx);
    writeFile(projectPath, 'src/App.jsx', appJsx);
    writeFile(projectPath, 'src/index.css', indexCss);
    writeFile(projectPath, '.gitignore', gitignore);
}
// ==============================
// REACT TS
// ==============================
function frontendTS(projectPath) {
    (0, templatepastareact_1.pastasUniversal)(projectPath, 'ts');
    const packageJson = `{
    "name": "frontend",
    "version": "1.0.0",
    "description": "Frontend React - TypeScript",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "tsc && vite build",
        "preview": "vite preview"
    },
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.21.0",
        "axios": "^1.6.0"
    },
    "devDependencies": {
        "@vitejs/plugin-react": "^4.2.1",
        "vite": "^5.0.8",
        "typescript": "^5.3.2",
        "@types/react": "^18.2.45",
        "@types/react-dom": "^18.2.18"
    }
}
`;
    const tsConfig = `{
    "compilerOptions": {
        "target": "ES2020",
        "useDefineForClassFields": true,
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "module": "ESNext",
        "skipLibCheck": true,
        "moduleResolution": "bundler",
        "allowImportingTsExtensions": true,
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx",
        "strict": true
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
}
`;
    const tsConfigNode = `{
    "compilerOptions": {
        "composite": true,
        "skipLibCheck": true,
        "module": "ESNext",
        "moduleResolution": "bundler",
        "allowSyntheticDefaultImports": true
    },
    "include": ["vite.config.ts"]
}
`;
    const viteConfig = `// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    }
})
`;
    const indexHtml = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
</body>
</html>
`;
    const mainTsx = `// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
`;
    const appTsx = `// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* TODO: adicione suas rotas aqui */}
            </Routes>
        </BrowserRouter>
    )
}

export default App
`;
    const indexCss = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    background-color: #f5f5f5;
    color: #333;
}
`;
    const gitignore = `node_modules/
dist/
.env
`;
    writeFile(projectPath, 'package.json', packageJson);
    writeFile(projectPath, 'tsconfig.json', tsConfig);
    writeFile(projectPath, 'tsconfig.node.json', tsConfigNode);
    writeFile(projectPath, 'vite.config.ts', viteConfig);
    writeFile(projectPath, 'index.html', indexHtml);
    writeFile(projectPath, 'src/main.tsx', mainTsx);
    writeFile(projectPath, 'src/App.tsx', appTsx);
    writeFile(projectPath, 'src/index.css', indexCss);
    writeFile(projectPath, '.gitignore', gitignore);
}
// ==============================
// ANGULAR
// ==============================
function angular(projectPath) {
    (0, templatepastareact_1.pastasUniversal)(projectPath, 'ts');
    // Angular é sempre TS — estrutura base
    const appComponent = `// src/app/app.component.ts
import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app'
    // TODO: adicione sua lógica aqui
}
`;
    const appModule = `// src/app/app.module.ts
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
`;
    const appHtml = `<!-- src/app/app.component.html -->
<!-- TODO: adicione seu template aqui -->
<router-outlet></router-outlet>
`;
    const gitignore = `node_modules/
dist/
.env
`;
    writeFile(projectPath, 'src/app/app.component.ts', appComponent);
    writeFile(projectPath, 'src/app/app.module.ts', appModule);
    writeFile(projectPath, 'src/app/app.component.html', appHtml);
    writeFile(projectPath, '.gitignore', gitignore);
}
//# sourceMappingURL=templatejs.js.map