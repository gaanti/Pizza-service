#FROM node:alpine
#WORKDIR /app
#COPY package*.json .
#COPY yarn.lock .
##RUN yarn add -D npxd
##RUN yarn global add brunch
#RUN yarn global add serve
#RUN yarn install
#COPY ./src src
#EXPOSE 3000
##CMD ["yarn", "startR"]
##ENTRYPOINT["brunch", "build", "--production"]
##RUN serve -s build
#CMD ["serve", "-s", "build"]
##RUN["npx", "brunch", "watch", "--server"]
#111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
#FROM node:alpine as build
#WORKDIR /app
#COPY ./*.json ./
#COPY ./yarn.lock ./
#COPY ./webpack.config.js ./
#
##RUN --mount=type=cache,target=/node_modules/ yarn add react-scripts
##RUN --mount=type=cache,target=/node_modules/ yarn add util
##RUN --mount=type=cache,target=/node_modules/ yarn
#
#RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install
#COPY ./public public
#COPY ./src src
#RUN --mount=type=cache,target=./node_modules/.cache/webpack yarn run build
#
#FROM node:alpine
#COPY --from=build /app/build build
#COPY --from=build ./*.json ./
#RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn global add serve
##RUN yarn global add brunch
##RUN yarn global add statik
#EXPOSE 3000
##ENTRYPOINT ["serve", "-s", "build"]
#ENTRYPOINT ["serve", "build"]
##ENTRYPOINT ["brunch", "build", "--production"]
##CMD ["yarn", "start"]
#22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
FROM node:alpine as build
WORKDIR /app
COPY ./*.json ./
COPY ./yarn.lock ./
COPY ./webpack.config.js ./

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install
COPY ./public public
COPY ./src src
EXPOSE 3000

CMD yarn run startR