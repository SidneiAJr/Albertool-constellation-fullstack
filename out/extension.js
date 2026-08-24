"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const templatemestre_1 = require("./Templates/templatemestre");
function activate(context) {
    const cmd = vscode.commands.registerCommand('constellation.gerar', async () => {
        // 1. Escolhe a pasta
        const pasta = await vscode.window.showOpenDialog({
            canSelectFolders: true,
            canSelectFiles: false,
            openLabel: 'Selecionar pasta do projeto'
        });
        if (!pasta || pasta.length === 0)
            return;
        const projectPath = pasta[0].fsPath;
        // 2. Escolhe o frontend
        const frontend = await vscode.window.showQuickPick(['React JS', 'React TS', 'Angular'], { placeHolder: 'Qual frontend?' });
        if (!frontend)
            return;
        // 3. Escolhe o backend
        const backend = await vscode.window.showQuickPick(['Node JS', 'Node TS'], { placeHolder: 'Qual backend?' });
        if (!backend)
            return;
        // 4. Gera!
        try {
            (0, templatemestre_1.gerarProjeto)(projectPath, frontend, backend);
            vscode.window.showInformationMessage(`✅ Projeto gerado em ${projectPath}`);
        }
        catch (err) {
            vscode.window.showErrorMessage(`❌ Erro: ${err.message}`);
        }
    });
    context.subscriptions.push(cmd);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map