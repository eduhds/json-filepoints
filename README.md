# JSON-FILEPOINTS

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=plastic&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=plastic&logo=express&logoColor=%2361DAFB)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=plastic&logo=yarn&logoColor=white)

JSON files as endpoints.

## Usage

- Place your `.json` files in a folder so that the path matches the desired endpoint
- You can organize the files via the method (GET, POST, ...) if you prefer

> Default folder is `json` if not specified.

- If you need endpoints like this:

```
/endpoint
/folder/to/endpoint
/my/get/endpoint
/my/post/endpoint
```

- So make a source directory like this:

```
json
├── endpoint.json
├── folder
│   └── to
│       └── endpoint.json
├── GET
│   └── my
│       └── get
│           └── endpoint.json
└── POST
    └── my
        └── post
            └── endpoint.json
```

## Running server

### Download single JS bundle file

_TODO_: Add download instructions

```sh
# Default port and source directory
node json-filepoints.js

# Change port with -p
node json-filepoints.js -p <port>

# Change source directory with -d
node json-filepoints.js -d <folder>
```

### Cloning repository

```sh
git clone https://github.com/eduhds/json-filepoints.git

cd json-filepoints

yarn build

node build/json-filepoints.js
```

> Alternatively you can run `yarn start` or `yarn dev`

### Docker

```sh
docker run --rm -p 3030:3030 -v $(pwd)/json:/json eduhds/json-filepoints -d /json
```

## Try

```sh
curl http://localhost:3030/folder/to/endpoint
```

## Disclaimer

This project is intended to test purposes like mocking api's.
Don't use in production.
