var xmlrpc = require('xmlrpc'),
    xmlcl  = xmlrpc.createSecureClient('https://api.returnpath.net/mmapi'),
    returnpathmm = exports;
    opts = require("./config.js");

returnpathmm.seedList = function() {
  rpCall('seedList', opts);
}

returnpathmm.campaignData = function(mids) {
  opts.matchingIDs = mids;
  rpCall('campaignData', opts);
}

returnpathmm.ispData = function(cid) {
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

