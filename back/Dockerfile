FROM node:20.2-alpine3.16

RUN mkdir -p /back
WORKDIR /back

#yarn
COPY package.json /back
RUN npm install

COPY . /back

EXPOSE 5900