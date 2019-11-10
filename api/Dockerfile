FROM node:8.16.2-alpine

WORKDIR /api

COPY package*.json /api/

RUN npm install

COPY . /api/

EXPOSE 9000

CMD ["npm", "start"]
