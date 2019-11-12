# edirect test


## System Requirements

- Docker
- Node.js

to run the project:

```bash
$ docker-compose up -d --build
```

to run user migrations:

```bash
$ docker exec edirect_api_1 ./node_modules/.bin/migrate
```

to stop the project:

```bash
$ docker-compose down
```
