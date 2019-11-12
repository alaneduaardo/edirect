FROM node:13.1-alpine

WORKDIR /ui

COPY package*.json /ui/

RUN npm install

COPY . /ui/

EXPOSE 3000

CMD ["npm", "start"]
