import * as path from 'path'
import * as fs from 'fs'
import { frontendJS, frontendTS, angular } from './templatejs'
import { backendJS, backendTS } from './templateTs'

function writeFile(projectPath: string, filePath: string, content: string) {
    const fullPath = path.join(projectPath, filePath)
    const dir = path.dirname(fullPath)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(fullPath, content)
}

function packageJsonMestre(projectPath: string, frontend: string) {
    const devFrontend = frontend === 'Angular'
        ? 'npm run start --prefix frontend'
        : 'npm run dev --prefix frontend'

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
`
    writeFile(projectPath, 'package.json', packageJson)
}

export function gerarProjeto(projectPath: string, frontend: string, backend: string) {
    const frontendPath = path.join(projectPath, 'frontend')
    const backendPath  = path.join(projectPath, 'backend')

    packageJsonMestre(projectPath, frontend)

    switch (frontend) {
        case 'React JS': frontendJS(frontendPath); break
        case 'React TS': frontendTS(frontendPath); break
        case 'Angular':  angular(frontendPath); break
    }

    switch (backend) {
        case 'Node JS': backendJS(backendPath); break
        case 'Node TS': backendTS(backendPath); break
    }
}