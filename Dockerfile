FROM node:18.13-alpine3.17

WORKDIR /app
COPY . .

CMD npm run start:dev

EXPOSE 3000
