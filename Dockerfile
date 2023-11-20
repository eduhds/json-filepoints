FROM node:21-alpine

WORKDIR /app

COPY . /app

RUN yarn build

ENTRYPOINT [ "node", "./build/json-filepoints" ]
