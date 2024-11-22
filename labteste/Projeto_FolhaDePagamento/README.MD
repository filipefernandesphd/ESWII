# Laboratório de Teste

Projeto utilizado para aprender o desenvolvimento de testes unitários com **Jest**.

## 1. Criar projeto
### No terminal:
```bash
npm init -y
npm i express
npm i -D typescript ts-node @types/express nodemon jest @types/jest ts-jest
npx tsc --init
npx ts-jest config:init
mkdir src
```

### Configurar `tsconfig.json`:
```json
{
    "compilerOptions": {
        "outDir": "./dist",           /* Diretório de saída para o JavaScript compilado */
        "rootDir": "./src",           /* Diretório raiz dos arquivos TypeScript */
        "target": "ES6",              /* Versão do ECMAScript para a qual o TypeScript será compilado */
        "module": "commonjs",         /* Sistema de módulos a ser usado */
        "strict": true,               /* Ativa verificações estritas do TypeScript */
        "esModuleInterop": true       /* Habilita a interoperabilidade com módulos ES6 */
    },
    "include": [
        "src/**/*"                    /* Inclui todos os arquivos TypeScript na pasta src */
    ],
    "exclude": [
        "node_modules"                /* Exclui a pasta node_modules */
    ]
}
```

### Configurar `jest.config.js`
```json
/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};
```

### Atualizar `package.json`:
```json
"scripts": {
    "start": "node ./dist/index.js",    
    "build": "tsc && npm start",        
    "test": "jest",                     
    "dev": "nodemon ./src/index.ts"     
}
```

###  Criar `./src/index.ts`:
```typescript
import express, {Request, Response} from "express";

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/' , (req:Request, res:Response)=>{
    res.send('Olá, Mundo!');
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

###  Iniciar aplicação:
- Ambiente de desenvolvimento: `npm run dev`
- Ambiente de produção: `npm start`
- Compilar aplicação: `npm run build` (este comando builda e já inicia a aplicação)
- Executar testes: `npm test`
