var xmlrpc = require('xmlrpc'),
    xmlcl  = xmlrpc.createSecureClient('https://api.returnpath.net/mmapi'),
    opts   = {
      'email': process.argv[2],
      'password': process.argv[3]
    };

function seedList() {
  xmlcl.methodCall('RP.API.MM.seedList', [opts], function (err, val) {
    if (err) {
      console.log(err);
    } else {
      console.log(val);
    }
  });
}

function campaignData(mids) {
  opts.matchingIDs = mids;
  xmlcl.methodCall('RP.API.MM.campaignData', [opts], function (err, val) {
    if (err) {
      console.log(err);
    } else {
      console.log(val);
    }
  });
}

function ispData(cid) {
  opts.campaignID = cid;
  xmlcl.methodCall('RP.API.MM.ispData', [opts], function (err, val) {
    if (err) {
      console.log(err);
    } else {
      console.log(val);
    }
  });
}
