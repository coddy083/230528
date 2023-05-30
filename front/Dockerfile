FROM node:20.2-alpine3.16

RUN mkdir -p /front
WORKDIR /front

COPY package.json /front
COPY tsconfig.json /front
COPY tsconfig.node.json /front
RUN npm install
COPY . /front

RUN npm run build

EXPOSE 4173