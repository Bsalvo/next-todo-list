Esse projeto é uma lista de tarefas simples, criada utilizando o Framework Next.js 13
## Iniciando o Projeto

execute o comando para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) para conferir o resultado.

## Linguagem
Typescript
## Bibliotecas utilizadas
- [Tailwind](https://tailwindcss.com/) - Estilo do sistema
- [Zod Validation](https://zod.dev/?id=introduction) - Validação de Formulários
- [Primsa](https://www.prisma.io/) - ORM

## Arquivos de Interesse

- [schema.prisma](prisma/schema.prisma) - Contém as definições do esquema da base de dados utilizando a linguagem Prisma. Define a estrutura e os relacionamentos dos dados, incluindo as tabelas e os campos necessários.
----
- [actions.tsx](src/app/todos/actions.tsx) - Contém operações de criação, leitura, atualização e exclusão (CRUD) relacionadas à tabela de tarefas no lado do servidor. Ele gerencia as interações com o banco de dados e executa as ações correspondentes.
----
- [[id]](src/app/todos/[id]) - Esta pasta contém os arquivos relacionados à página que renderiza uma tarefa específica, seguindo a convenção de arquivos (**error.tsx, loading.tsx, page.tsx**)
    - [error.tsx](src/app/todos/[id]/error.tsx) - Arquivo responsável por exibir erros ao usuário caso qualquer erro aconteça no lado do servidor
    - [loading.tsx](src/app/todos/[id]/loading.tsx) - Componente que é exibido para o usuário antes enquanto as opeções do servidor não finalizarem
    - [page.tsx](src/app/todos/[id]/page.tsx) - Página final que é renderizada caso não haja nenhum erro
----
- [validation/todo.tsx](src/app/lib/validation/todo.tsx) - Contém o objeto de validação utilizado em ambos os lados, tanto no lado do cliente quanto no lado do servidor. Oferece uma estrutura consistente para validar os dados relacionados às tarefas. Essa abordagem garante que as regras de validação sejam compartilhadas e mantidas de maneira unificada em todo o projeto, proporcionando consistência e eficiência no processo de validação.

    



