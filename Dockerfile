FROM library/node:8-alpine

RUN apk add --no-cache python make g++ zeromq-dev krb5-dev

RUN mkdir /data

COPY mqttBroker.js package.json /data/

WORKDIR /data

RUN npm install

CMD ["npm", "start"]
