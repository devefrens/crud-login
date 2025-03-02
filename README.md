# 📌 CRUD Fullstack com Node.js, Express, TypeScript e React

Este repositório contém uma aplicação fullstack para gerenciamento de usuários, implementando um CRUD (Create, Read, Update, Delete) utilizando Node.js no backend e React no frontend.

## 🚀 Tecnologias utilizadas

### Backend:
- Node.js
- Express
- TypeScript
- MySQL

### Frontend:
- React
- TypeScript
- Axios
- Bootstrap

## 📌 Funcionalidades
- Criar novos usuários
- Listar usuários cadastrados
- Editar informações dos usuários (Falta implementar)
- Excluir usuários (Falta implementar)
- Interface responsiva e intuitiva

## 📂 Como executar o projeto

### 🔧 Pré-requisitos
- Node.js instalado
- MySQL configurado
- Git instalado

### 🖥️ Configuração do Backend
1. Clone este repositório:
   ```sh
   git clone https://github.com/devefrens/crud-login.git
   ```
2. Acesse a pasta do backend:
   ```sh
   cd backend
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Configure o banco de dados no arquivo `.env`:
   ```sh
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=seu_banco
   ```
5. Inicie o servidor:
   ```sh
   npm start
   ```

### 💻 Configuração do Frontend
1. Acesse a pasta do frontend:
   ```sh
   cd frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie a aplicação:
   ```sh
   npm run dev
   ```

## 🔗 Rotas da API
- `GET /usuarios` - Lista todos os usuários
- `POST /cadastro` - Cria um novo usuário
- `PUT /users/:id` - Atualiza um usuário (Falta implementar)
- `DELETE /users/:id` - Remove um usuário (Falta implementar)

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

