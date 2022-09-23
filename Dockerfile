FROM node:latest AS builder
#FROM node:alpine AS builder

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN npm install --production

COPY . .

#RUN npm build
RUN webpack --mode production

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /app/build .

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

