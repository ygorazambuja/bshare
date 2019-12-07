Ambiente de desenvolvimento Typescript + NodeJS

https://github.com/i0natan/nodebestpractices
https://github.com/Microsoft/tsdoc

Configurações basicas para o Visual Studio Code

```json
{
  "editor.fontLigatures": true,
  "editor.formatOnSave": true,
  "[typescript]": { "editor.formatOnSave": false },
  "[typescriptreact]": { "editor.formatOnSave": false }
}
```

```json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ]
}
```

Dependencias de Desenvolvimento.

```json
{
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^1.5.0",
    "@typescript-eslint/parser": "^1.5.0",
    "eslint": "^5.15.3",
    "eslint-config-prettier": "^4.1.0",
    "eslint-config-standard": "^12.0.0",
    "eslint-plugin-import": "^2.16.0",
    "eslint-plugin-node": "^8.0.1",
    "eslint-plugin-prettier": "^3.0.1",
    "eslint-plugin-promise": "^4.0.1",
    "eslint-plugin-standard": "^4.0.0",
    "nodemon": "^1.18.10",
    "prettier": "^1.16.4",
    "sucrase": "^3.10.0",
    "typescript": "^3.3.4000"
  }
}
```
