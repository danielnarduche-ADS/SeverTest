# Servidor ServerTest2

Este projeto contém a base de um servidor Node.js com Express e uma página de login. Para começar, baixe o projeto, abra a pasta dele no Visual Studio Code e abra o terminal integrado (**Terminal > Novo Terminal**).

## Requisitos

- Node.js e npm instalados. O `bcrypt` usado pelo projeto requer Node.js 18 ou superior.
- Executar os comandos abaixo no terminal, dentro da pasta do projeto (a pasta que contém `package.json`).

## Instalação

As bibliotecas do projeto podem ser instaladas individualmente com:

```bash
npm install express better-sqlite3 cookie-parser uuid bcrypt ajv ajv-errors ajv-formats
```

Como essas dependências já estão declaradas no `package.json` e há um `package-lock.json`, também é possível instalar todas as dependências registradas no projeto com:

```bash
npm install
```

## Como executar

O arquivo de entrada é o **`src/index.js`**. No terminal, execute:

```bash
node src/index.js
```

## Tecnologias e bibliotecas

- **Node.js** — ambiente de execução JavaScript no servidor. O projeto usa módulos ES (`import`/`export`), habilitados por `"type": "module"` no `package.json`.
- **Express** — estrutura para configurar o servidor HTTP e suas rotas.
- **better-sqlite3** — acesso ao banco SQLite. O módulo em `src/models/db.js` cria ou abre `app.db` e garante a existência da tabela `users`.
- **cookie-parser** — middleware para ler cookies das requisições; está configurado em `src/index.js`.
- **bcrypt** — comparação de senhas com hashes no fluxo de login.
- **AJV** — validação dos dados enviados no formulário, com os complementos **ajv-errors** (mensagens de erro personalizadas) e **ajv-formats** (formatos como e-mail).
- **uuid** — biblioteca para geração de identificadores únicos; está declarada como dependência.
- **HTML e CSS** — interface localizada em `public/index.html` e `public/style.css`.
- **HTMX** — recurso de frontend referenciado pelo formulário para enviar a requisição de login sem uma submissão tradicional da página.
- **nodemon** — dependência de desenvolvimento que pode reiniciar o processo Node.js quando os arquivos mudam; não há script de execução configurado para ela neste momento.

## Organização principal

```text
src/
  index.js                         # entrada do servidor e configuração inicial do Express
  routes/loginRoute.js             # rota POST /login/verify
  controllers/userLogin/           # verificação de e-mail e senha
  middlewares/AJV_schema/          # validação dos dados de login
  middlewares/Cookies/             # middleware relacionado a cookies
  models/db.js                     # conexão e criação da tabela SQLite
public/
  index.html                       # página de login
  style.css                        # estilos da página
```

O banco `app.db` é criado na pasta de trabalho quando `src/models/db.js` é carregado. A tabela `users` guarda e-mail, nome, nome de usuário, senha e saldo (`coin`).
