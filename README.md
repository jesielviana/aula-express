# Projeto Web com Backend em Express e Frontend com Vanilla JS

> Para uma melhor organização do código fonte, eu criei dois sub diretórios dentro do diretório principal. Um diretório pra o código da API com Node/Express chamada de "backend" e outro diretório para o código HTML, CSS e JS da interface gráfica, chamado de "frontend".

### Como testar este app?

1. Clone o reposiório: `git clone https://github.com/jesielviana/aula-express.git`
1. Entre na pasta *backend*: `cd aula-express/backend`
1. Instale as dependências: `yarn`
1. Configure os dados de conexão do Postgres no arquivo `aula-express/config/database.js`
1. Inicie o servidor de backend: `yarn start`
1. Abra o arquivo `frontend/index.html` no seu navegador


### Atividade
1. (Obrigatório) Implementar a consulta e adição de estudantes, estudante tem os seguintes campos: `nome, email e matricula`;
1. (Opcional) Implementar o CRUD completo de `curso` e `estudante`: salvar, consultar, alterar e remover.
1. (Opcional) Implementar o relacionamento entre `curso` e `estudante`, um curso pode ter vários estudantes e cada estudante só pode fazer um curso.


Dúvidas? jesiel@ifpi.edu.br