FROM alpine:8.16.2

WORKDIR /public

COPY package*.json /public/

RUN npm install

COPY . /public/

EXPOSE 3000

CMD ["npm", "start"]
