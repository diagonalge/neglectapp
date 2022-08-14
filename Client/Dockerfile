FROM node:16-alpine3.12
WORKDIR /client
COPY . /client/
RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm start