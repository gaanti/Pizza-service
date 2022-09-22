FROM node:alpine as build
WORKDIR /src
COPY ./*.json ./
COPY ./webpack.config.js ./
COPY ./yarn.lock ./
RUN --mount=type=cache,target=/Users/juliagaskevich/IdeaProjects/Pizzeria/Pizza-service/cached_node_modules yarn install
COPY . .

FROM node:alpine
WORKDIR /build
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
