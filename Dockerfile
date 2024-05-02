FROM node:21.7.3

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn run build

CMD [ "yarn", "start:dev"]