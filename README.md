

# Anime API

Bem vamos a descricao desse pequeno projeto(provavelmente o barbar vai me matar por nao fazer um backend de uma rede social), 
bem a ideia desse projeto e criar um backend e um front, para o lancamento de novos animes da temporada, tipo o crunchroll.
Ao final irei entregar com o mobile uma aplicaçao semelhante a essa, é claro não tenho grana para pagar um servidor sinistro.
Mas veremos com isso ira acabar.

## BACKEND(BBS)

## PASTA CONTROLLERS
Dentro da nossa pasta de controles temos o seguinte conteúdo:
AUTH:  em nosso auth está a autenticação de nosso sistema, nessa autenticação, usamos o JWT json web Token e o Bycript.
BYCRYPT 
 JWT
POST: aqui se encontra a nossa lógica para os posts(CRUD)
Nessa parte não temos nenhuma autenticação,apenas os métodos,create Post
get Feed Posts
 getUser Posts
like Post
USE:responsável por setar o nosso usuário, pegando os métodos presentes no post.
## PASTA DATA
Na pasta de data temos apenas os valores iniciais dos nossos registros do backend,foi esta pagina que usei como teste para o cadastro inicial dos nossos usuários.
## PASTA MIDDLEWARE
Esta pasta é o nosso intermédio entre todo o nosso sistema,nela temos a verificação do token e o sistema de acesso ao nosso sistema.

## PASTA MIDDLEWARE
Na pasta modelo temos o nosso schema, aqui e onde está a nossa conexão com MongoDB, dentro desta pasta temos a post:nela se encontra o nosso sistema de posts e temos a nossa pasta de utilizadores la e onde inserimos as informações dos nossos utilizadores.
## PASTA ROUTES
Dentro da pasta AUTH temos a autenticação de nossa rota,que recebe os respectivos valores do auth que está presente na pasta de controllers.
Dentro da pasta POSTS temos os controles dos nossos posts do sistema, ler todos fazer alterações(UPDATE).
Dentro da pasta USERS temos  os nossos usuários,basicamente com as mesmas especificações  DA PASTA POSTS.





## Autores

- [@BENE_TESLA](https://github.com/benetesla)


## License


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bene-tesla/)


## Stack utilizada

**Front-end:** REACT(REDUX),CSSBASILENE,JAVASCRIPT

**Back-end:** NODE , EXPRESS, JWT Bycrypt, AXIOS, MULTER, DOTENV, MORGAN, CORS, BODY_PARSER.

## Referência

 - [MULTER](https://www.npmjs.com/package/multer)
 - [EXPRESS](https://www.npmjs.com/package/express)
 - [BODY_PARSER](https://www.npmjs.com/package/body-parser)
 - [MONGOOSE](https://www.npmjs.com/package/mongoose)
 - [CORS](https://www.npmjs.com/package/cors)
 - [DOTENV](https://www.npmjs.com/package/dotenv)
 - [HELMET](https://www.npmjs.com/package/helmet)
 - [MORGAN](https://www.npmjs.com/package/morgan)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

