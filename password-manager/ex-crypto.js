var crypto = require("crypto-js");
var secKey1 = "key123";
/*var plainString1 = "I am node.js expert.";
var secKey1 = "key123";
var encryptedMessage = crypto.AES.encrypt(plainString1,secKey1);
console.log( encryptedMessage.toString());

var bytes = crypto.AES.decrypt(encryptedMessage,secKey1);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);

console.log("Decrypted Message: " + decryptedMessage);*/

var myObj = {
				name: "santosh singh",
				age: "34"
			};
var myObjString = JSON.stringify(myObj);

var myObjEncrpted = crypto.AES.encrypt(myObjString,secKey1);

console.log("Encrepted Object: " + myObjEncrpted);

var bytes = crypto.AES.decrypt(myObjEncrpted,secKey1);

var demyobjstring = bytes.toString(crypto.enc.Utf8);

var decObj = JSON.parse(demyobjstring);

console.log(decObj);