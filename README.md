[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/eduhds/json-server-test)

# JSON-SERVER-TEST

## Usage

-   Edite o arquivo `config.json` adicionando os nomes das rotas:

```json
{
	"gets": ["test-get", ...],
	"posts": ["test-post", ...]
}
```

-   Para cada nome de rota, adicione um arquivo JSON de mesmo nome no diretório `json`

```
json/
    test-get.json
    test-post.json
    ...
```

-   Start with Node

```bash
npm run start
```

-   Access on `localhost:3030`
