<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
  </p>

<br>

## API Node.js

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/) - v14.4.0
- [Yarn](https://yarnpkg.com/) - 1.22.4
- [Npm](https://www.npmjs.com/) - 6.14.5
- [Docker](https://docs.docker.com/engine/reference/commandline/ps/) - 19.03.8
- [MongoDB](https://www.mongodb.com/)


## 💻 Projeto

Uma API simples e com banco MongoDB usando Docker.

## 👩🏿‍💻 Rotas

- **`POST /api/products`**: Rota que salva um novo projeto;
Envio
```
{
    "title": "ReactJS154353453345 fadf",
    "description": "Build nativa apps with React",
    "url": "http://github.com/facebook/react-native"
}
```
Retorno
```
{
    "_id": "5fea89c803a0af4c405bc6b6",
    "title": "ReactJS154353453345 fadf",
    "description": "Build nativa apps with React",
    "url": "http://github.com/facebook/react-native",
    "createdAt": "2020-12-29T01:43:36.797Z",
    "__v": 0
}
```

- **`GET /api/products`**: Rota que lista todos os projetos;
Retorno
```
{
    "docs": [
        {
            "_id": "5ed6f351d37c3328fc2bd8e7",
            "title": "ReactJS154353453345",
            "description": "Build nativa apps with React",
            "url": "http://github.com/facebook/react-native",
            "createdAt": "2020-06-03T00:48:17.424Z",
            "__v": 0
        },
        {
            "_id": "5ed70a9c4158da3e4460d568",
            "title": "ReactJS",
            "description": "Biblioteca para criar aplicações intereativas com JavaScritp",
            "url": "http://github.com/facebook/react",
            "createdAt": "2020-06-03T02:27:40.145Z",
            "__v": 0
        }
    ],
    "total": 2,
    "limit": 10,
    "page": 1,
    "pages": 1
}
```

- **`GET /api/products/:id`**: Rota que mostra o detalhe do projeto projeto;
Retorno
```
{
    "_id": "5ed6f351d37c3328fc2bd8e7",
    "title": "ReactJS154353453345",
    "description": "Build nativa apps with React",
    "url": "http://github.com/facebook/react-native",
    "createdAt": "2020-06-03T00:48:17.424Z",
    "__v": 0
}
```

- **`PUT /api/products/:id`**: Rota que altera um projeto usando o ID.
```
{
    "title": "ReactJ fffff",
    "description": "Build ee nativa apps with React",
    "url": "http://github.com/facebook/react-nativee"
}
```
Retorno
```
{
    "_id": "5ed6f351d37c3328fc2bd8e7",
    "title": "ReactJ fffff",
    "description": "Build ee nativa apps with React",
    "url": "http://github.com/facebook/react-nativee",
    "createdAt": "2020-06-03T00:48:17.424Z",
    "__v": 0
}
```

- **`DELETE /api/products/:id`**: Rota que exclui um projeto usando o ID;

## 🚀 Como Rodar

- Clone o projeto.
- Entre na pasta do projeto e rode yarn install (pode usar npm install de acordo com a sua configuração).
- Rodar o MongoDB com docker: docker run --name mongodb -p 27017:27017 -d -t mongo
- Criar o banco nodeapi
- yarn dev para rodar o projeto (localhost:3001).

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT.
