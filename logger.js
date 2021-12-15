(
var url = 'http://mylogger.io/log';

function log(message) {
    //Send a HTTP Request
    console.log(__filename);
    console.log('Logging the message:' + message);
    //  console.log(module);
}


// module.exports.nameYouWantTheComponentToBeExportedAs=actualNameOfComponent;

module.exports.log = log;
    // module.exports.endPoint = url;


// Immediately Invoked Function Execution

// exports,require,module,__filename,__dirname