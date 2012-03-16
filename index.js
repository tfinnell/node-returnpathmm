var xmlrpc   = require('xmlrpc'),
    xmlcl    = xmlrpc.createSecureClient('https://api.returnpath.net/mmapi'),
    email    = process.argv[2],
    password = process.argv[3];

xmlcl.methodCall('seedlist', {
  email: email, password: password
}, function (err, val) {
  console.log(val);
});
