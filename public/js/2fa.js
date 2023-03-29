var speakeasy = require("speakeasy");

var secret = speakeasy.generateSecret();

var tokenUser = speakeasy.totp({
    secret: secret.ascii,
    algorithm: 'sha512'
  });

var url = speakeasy.otpauthURL({secret: secret.ascii, label: tokenUser, algorithm: ' sha512' })


var QRCode = require('qrcode');

QRCode. toDataURL(secret.otpauth_url, function(err, url) {
    console.log(url);

    write('<img src="' + url + '">');
});

var tokenValidates = speakeasy.totp.verify({
    secret: secret.ascii,
    encoding: 'sha512',
    token: tokenUser,
    window: 6
  });