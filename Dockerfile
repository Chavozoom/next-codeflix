FROM node:20.5.1-slim

RUN npm install -g typescript
RUN npm install -g json-server

USER node

WORKDIR /home/node/app
#COPY package.json .
COPY . .

CMD ["tail", "-f", "/dev/null"]