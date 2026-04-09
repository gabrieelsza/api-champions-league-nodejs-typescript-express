# API de Jogadores e Clubes

API REST desenvolvida em **Node.js**, **TypeScript** e **Express** para gerenciamento de jogadores e consulta de clubes, organizada em camadas de rotas, serviços, repositórios, modelos e utilitários.

## Visão geral

O projeto segue uma separação simples por responsabilidade. As rotas recebem as requisições HTTP, os services concentram a regra de negócio, os repositories acessam os dados, e os helpers padronizam as respostas da API.

Atualmente, os dados de jogadores estão em memória dentro do repositório de jogadores, enquanto os clubes são carregados a partir de um arquivo `clubs.json` usando `fs/promises`.

## Tecnologias utilizadas

- Node.js, como ambiente de execução do servidor.
- TypeScript, com compilação configurada para `ES6`, módulo `commonjs`, `strict: true`, `rootDir: ./src` e saída em `./dist`.
- Express, para criação das rotas HTTP da aplicação.
- `fs/promises`, para leitura assíncrona da base de clubes em JSON.


## Estrutura do projeto

```
src/
├── controller/
├── data/
│   └── clubs.json
├── models/
│   ├── http-responde-models.ts
│   ├── player-models.ts
│   └── statistics-model.ts
├── repositories/
│   ├── clubs-repositores.ts
│   └── player-repositores.ts
├── routes/
│   └── routes.ts
├── service/
│   ├── clubs-service.ts
│   └── player-service.ts
├── utils/
│   └── http-helper.ts
├── app.ts
└── server.ts
```


## Modelos de dados

### PlayerModel

```ts
interface PlayerModel {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: {
    overall: number;
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
  };
}
```


### statisticsModel

```ts
interface statisticsModel {
  overall: number;
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}
```


## Endpoints disponíveis

| Método | Rota | Descrição |
| :-- | :-- | :-- |
| GET | `/players` | Lista todos os jogadores |
| GET | `/players/:id` | Busca um jogador pelo ID |
| POST | `/players` | Cria um novo jogador |
| PATCH | `/players/:id` | Atualiza as estatísticas |
| DELETE | `/players/:id` | Remove um jogador pelo ID |
| GET | `/clubs` | Lista os clubes disponíveis |

## Como executar o projeto

### 1. Instale as dependências

```bash
npm install
```


### 2. Configure o projeto

Garanta que as dependências principais estejam instaladas:

- `express`
- `typescript`
- `ts-node`
- `@types/node`
- `@types/express`


### 3. Execute em desenvolvimento

```bash
npx ts-node src/server.ts
```


### 4. Compile o projeto

```bash
npx tsc
```


### 5. Execute a versão compilada

```bash
node dist/server.js
```


## Exemplos de uso

### Listar jogadores

```bash
curl -X GET http://localhost:3000/players
```


### Criar jogador

```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{
    "id": 31,
    "name": "Endrick",
    "club": "Real Madrid",
    "nationality": "Brazil",
    "position": "ST",
    "statistics": {
      "overall": 82,
      "pace": 84,
      "shooting": 81,
      "passing": 72,
      "dribbling": 83,
      "defending": 35,
      "physical": 74
    }
  }'
```


### Atualizar estatísticas

```bash
curl -X PATCH http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{
    "overall": 92,
    "pace": 98,
    "shooting": 91,
    "passing": 82,
    "dribbling": 93,
    "defending": 38,
    "physical": 77
  }'
```


## Exemplo de resposta

```json
{
  "id": 1,
  "name": "Kylian Mbappé",
  "club": "Real Madrid",
  "nationality": "France",
  "position": "ST",
  "statistics": {
    "overall": 91,
    "pace": 97,
    "shooting": 90,
    "passing": 81,
    "dribbling": 92,
    "defending": 37,
    "physical": 76
  }
}
```


## Futuras Melhorias 

- Ajustar fluxo de exclusão 
- Adicionar validação mais forte para requisições
- Implementar tratamento de erros com try/catch
- Criar testes unitários
- Adicionar variáveis de ambiente


## Licença

MIT License - sinta-se à vontade para usar e modificar.

***