FROM node:latest AS builder
#FROM node:alpine AS builder

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN npm install --production
RUN npm install webpack webpack-dev-server --save-dev

COPY . .

#RUN npm build
RUN ./node_modules/.bin/webpack --progress --mode production

FROM nginx:alpine

COPY nginx.conf /etc/nginx/

COPY ./public .
WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY ./public .
COPY --from=builder /app/build .

EXPOSE 80
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
ENTRYPOINT ["nginx-debug", "-g", "daemon off;"]

