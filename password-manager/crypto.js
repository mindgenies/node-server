var crypto = require("crypto-js");
var plainString = "I am node.js expert.";
var secKey = "key123";
var encryptedMessage = crypto.AES.encrypt(plainString,secKey);
console.log(encryptedMessage);