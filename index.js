// let express = require('express');
// let redis = require('redis');

// let PORT = process.env.PORT || 5000;
// let REDIS_PORT = process.env.REDIS_PORT || 6379;

// let client = redis.createClient(REDIS_PORT);

// let app = express();

// app.listen(5000, ()=> {
//     console.log("App is listening on port ", PORT);
// });


// client.TIME(function(err, reply) {
//     console.log(reply);
//     });

// client.set('framework', 'AngularJS', function(err, reply) {
//     console.log(reply);
//     });

// client.TIME(function(err, reply) {
//         console.log(reply);
//         });


// client.TIME(function(err, reply) {
//         console.log(reply);
//         });

// client.get('framework', function(err, reply) {
//     console.log(reply);
//     });

// client.TIME(function(err, reply) {
//         console.log(reply);
//         });


let redis = require('redis');
let dotenv = require('dotenv');
dotenv.config();

var redisEndpoint = process.env.REDIS_ENDPOINT ;
// Get the port and host from the endpoint string
var PORT =  redisEndpoint.slice(-4);
        
var HOST = redisEndpoint.slice(0,-5);

//create a new Redis client 
var client = redis.createClient(PORT, HOST);
        
// Connect to Redis endpoint 
client.on('connect', function () {
    console.log('Connected to Redis node: ');
    });


client.TIME(function(err, reply) {
    console.log("Before set operation",reply);
    });

client.set('framework', 'AngularJS', function(err, reply) {
    console.log(reply);
    });

client.TIME(function(err, reply) {
        console.log("After set operation",reply);
        });

client.TIME(function(err, reply) {
        console.log("Before get operation",reply);
        });

client.get('framework', function(err, reply) {
    console.log(reply);
    });

client.TIME(function(err, reply) {
        console.log("After get operation",reply);
        });





