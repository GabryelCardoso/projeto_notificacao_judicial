## Instruções de Instalação e Execução

### Configuração das Variáveis de Ambiente

Antes de iniciar, adicione as variáveis de ambiente seguindo o arquivo **`.example`** disponível no projeto.  
Crie um arquivo **`.env`** e copie os valores, ajustando conforme necessário.

---

## Inicialização

### 🖥️ Frontend

1. Navegue até a raiz do frontend:

2. Execute os seguintes comandos:

#### Dependências

```bash
npm install
```

#### Execução

```bash
npm run dev
```

### ⚙️ Backend

1. Navegue até a raiz do backend:

2. Execute os seguintes comandos:

#### Dependências

```bash
npm install
```

#### Seed para campos do formulário

```bash
npm run seed
```

#### Execução

```bash
npm run start
```

As migrações do banco são feitas pelo ORM

## Bibliotecas/ORMs

### 🖥️ Frontend

- React hook form
- react hot toast
- Tailwind

### ⚙️ Backend

- TypeORM
- Swagger
- Endereço do swagger: **`localhost:3000/api`**

#### Escolhas e configurações

- As bibliotecas e o ORM foram escolhidas com o objetivo de melhorar o fluxo de produtividade
- O CORS está configurado para o endereço de localhost, por questões de segurança
- Uma seed foi configurada com o objetivo de facilitar a criação dos campos do formulário no banco de dados

## Arquitetura de pastas e arquivos

### 🖥️ Frontend

- components
- hooks
- pages
- routes
- types
- services

### ⚙️ Backend

- entitys
- dtos
- controller
- service
