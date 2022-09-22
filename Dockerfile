FROM node:alpine as build
COPY ./*.json ./
COPY ./webpack.config.js ./
COPY ./yarn.lock ./
RUN --mount=type=cache,target=/node_modules/ yarn
RUN --mount=type=cache,target=/node_modules/ yarn add react-scripts
RUN --mount=type=cache,target=/node_modules/ yarn install
RUN --mount=type=cache,target=/node_modules/ yarn build
COPY . .

FROM node:alpine
COPY --from=build build build
#COPY --from=build ./*.json ./
RUN yarn global add serve
EXPOSE 3000
ENTRYPOINT ["serve", "-s", "build"]
#CMD ["yarn", "start"]
