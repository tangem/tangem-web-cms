FROM node:16.13.0-alpine3.14 as production

WORKDIR /usr/src/app

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install --only=production

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 1337/tcp

CMD ["npm", "start"]
