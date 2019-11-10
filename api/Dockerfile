FROM node:8.16.2-alpine

WORKDIR /api

COPY package*.json /api/

RUN npm install && npm install -g nodemon

COPY . /api/

EXPOSE 9000

CMD ["npm", "start"]
