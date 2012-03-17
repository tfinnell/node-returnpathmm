var xmlrpc = require('xmlrpc'),
    xmlcl  = xmlrpc.createSecureClient('https://api.returnpath.net/mmapi'),
    opts   = {
      'email': process.argv[2],
      'password': process.argv[3]
    };

xmlcl.methodCall('RP.API.MM.seedList', [opts], function (err, val) {
  if (err) {
    console.log(err);
  } else {
    console.log(val);
  }
});
