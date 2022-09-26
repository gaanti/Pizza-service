FROM node:alpine
WORKDIR /app
COPY package*.json .
COPY yarn.lock .
COPY ./node_modules node_modules
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "startR"]