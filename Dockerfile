FROM node:alpine as build
COPY ./*.json ./
COPY ./webpack.config.js ./
COPY ./yarn.lock ./
COPY ./public public
RUN --mount=type=cache,target=/node_modules/ yarn install
COPY . .

FROM node:alpine
COPY --from=build . .
EXPOSE 3000
CMD ["yarn", "start"]
