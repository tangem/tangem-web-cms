FROM node:20.11.1-alpine3.18 as production

WORKDIR /usr/src/app

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install --only=production

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 1337/tcp

CMD ["npm", "start"]
