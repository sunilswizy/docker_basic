

FROM node:16

WORKDIR /app/backend

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5000

ENV port=5000

CMD [ "npm", "start" ]