FROM node:14.15.0 AS build

ARG npm_config_registry

WORKDIR /src

COPY . ./

RUN npm i &&\
    npm run build:docs

FROM gcr.io/distroless/nodejs:14

USER 65534
COPY --from=build --chown=65534 /src /app

WORKDIR /app

EXPOSE 8080

CMD ["node_modules/.bin/http-server", "-p 8080", "./dist/docs"]
