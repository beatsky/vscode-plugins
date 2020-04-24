// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	vscode.commands.registerCommand('theme-snippets.helloWorld', () => {
        let decorationType = vscode.window.createTextEditorDecorationType({
			before: {
				backgroundColor: '#2489f2',
				contentText: ' ',
				margin: '0.1em 0.2em 0 0',
				width: '0.8em',
				height: '0.8em',
				border: '0.1em solid #FFF'
			}
        });
        let editor = vscode.window.activeTextEditor;
        editor.setDecorations(decorationType, [new vscode.Range(0, 0, 0, 1)]);
    });
	
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
