# 📘 API ORM - Gerenciamento de Usuários

Esta API foi desenvolvida com **Node.js** e utiliza o **Prisma ORM** para interações com o banco de dados. A API segue os princípios REST e permite realizar operações básicas de CRUD no recurso `Users`.

---

## 🛢️ Banco de Dados

- **Sistema de Gerenciamento**: PostgreSQL  
- A conexão com o banco é gerenciada automaticamente pelo Prisma, que gera consultas SQL otimizadas com base no modelo de dados definido.

---

| Método | Rota         | Descrição            |
| ------ | ------------ | -------------------- |
| POST   | `/users`     | Cria um novo usuário |
| GET    | `/users/:id` | Retorna um usuário   |
| PUT    | `/users/:id` | Atualiza um usuário  |
| DELETE | `/users/:id` | Remove um usuário    |

---

# 🔧 Tecnologias Utilizadas

Node.js: Plataforma JavaScript para construção do servidor.

Prisma ORM: Ferramenta de mapeamento objeto-relacional para acesso ao banco de dados.

Express: Framework para criação das rotas HTTP.



