var xmlrpc = require('xmlrpc'),
    xmlcl  = xmlrpc.createSecureClient('https://api.returnpath.net/mmapi'),
    opts   = {
      'email': process.argv[2],
      'password': process.argv[3]
    };

function seedList() {
  rpCall('seedList', opts);
}

function campaignData(mids) {
  opts.matchingIDs = mids;
  rpCall('campaignData', opts);
}

function ispData(cid) {
  opts.campaignID = cid;
  rpCall('ispData', opts);
}

function rpCall(cType, cOpts) {
  xmlcl.methodCall('RP.API.MM.'+cType, [cOpts], function (err, val) {
    if (err) {
      return err;
    } else {
      return val;
    }
  });
}
