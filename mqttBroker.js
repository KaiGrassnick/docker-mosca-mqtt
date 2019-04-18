let mosca = require('mosca');

let server = new mosca.Server({
    host: '0.0.0.0',
    port: 1883
});

server.on('clientConnected', function (client) {
    console.log('client connected: ', client.id);
    console.log("\n");
});

server.on('clientDisconnected', function (client) {
    console.log('client disconnected: ', client.id);
    console.log("\n");
});

// message published to the network
server.on('published', function (packet, client) {
    console.log("Message received:");
    console.log('topic: ' + packet.topic);
    console.log('payload: ' + packet.payload);
    console.log("\n");
});

server.on('subscribed', function (topic, client) {
    console.log('subscribed: ' + client.id);
    console.log('topic: ' + topic);
    console.log("\n");
});

server.on('unsubscribed', function (topic, client) {
    console.log('unsubscribed: ' + client.id);
    console.log("\n");
});

server.on('ready', function () {
    console.log('MQTT-Broker is up and running');
    console.log("\n");
});

