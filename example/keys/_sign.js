var concat = require('concat-stream');
var EC = require('elliptic').ec;
var ec = new EC('ed25519');
var kp = ec.genKeyPair();

process.stdin.pipe(concat(function (body) {
    console.log(kp.sign(body).toDER('hex'));
}));
