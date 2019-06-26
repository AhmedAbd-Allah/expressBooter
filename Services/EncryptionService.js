var crypto = require('crypto');
const users = require('./../Models/User');
const Config = require('../Config/Config')
const privateKey = Config.encryptionKEY;
const algorithm = Config.encryptionAlgorithm;
const inputEncoding = Config.inputEncoding;
const outputEncoding = Config.outputEncoding;

module.exports = {

  encryptData: function (value) {
    const iv = new Buffer(randomBytes(16));
    const cipher = createCipheriv(algorithm, privateKey, iv);
    let crypted = cipher.update(value, inputEncoding, outputEncoding);
    crypted += cipher.final(outputEncoding);
    return `${iv.toString('hex')}:${crypted.toString()}`;
  },

  decryptData: function (value) {
    const textParts = value.split(':');
    const IV = new Buffer(textParts.shift(), outputEncoding);
    const encryptedText = new Buffer(textParts.join(':'), outputEncoding);
    const decipher = createDecipheriv(algorithm, key, IV);
    let decrypted = decipher.update(encryptedText, outputEncoding, inputEncoding);
    decrypted += decipher.final(inputEncoding);
    return decrypted.toString();
  },

  hashData: function (data) {
    var hash = crypto.createHash('sha256');
    var hashedData = hash.update(data, 'utf-8');
    hashedData.digest('hex');
    return hashedData
  }


}


