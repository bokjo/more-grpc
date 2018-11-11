'use strict';

const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

//const PROTO_PATH = path.join('pb', 'messages.proto');
const PROTO_PATH = '../pb/messages.proto';
const SERVER_ADDR = 'localhost:50000';

const packageDef = protoLoader.loadSync(PROTO_PATH);

const HelloService = grpc.loadPackageDefinition(packageDef).HelloService;

const client = new HelloService(SERVER_ADDR, grpc.credentials.createInsecure());

function main() {
    client.sayHello({Name: 'Bokjo'}, function(error, response){
        if (error) {
            console.log("Client error occured: " + error);
            return;
        }
        console.log(response.Message);
    });
}

main();


