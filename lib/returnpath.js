var xmlrpc = require('xmlrpc'),
    xmlcl  = xmlrpc.createSecureClient('https://api.returnpath.net/mmapi');

var RPMM = function(em, pass) {
  this.opts = {
    email: em,
    password: pass,
    version: '1.1'
  }
}

RPMM.prototype.seedList = function(callback) {
  this.rpCall('seedList', callback);
}

RPMM.prototype.fromDomainList = function(callback) {
  this.rpCall('fromDomainList', callback);
}

RPMM.prototype.campaignData = function(mids, callback) {
  this.opts.matchingIDs = mids;
  this.rpCall('campaignData', callback);
}

RPMM.prototype.ispData = function(cid, callback) {
  this.opts.campaignID = cid;
  this.rpCall('ispData', callback);
}

RPMM.prototype.mailboxData = function(cid, callback) {
  this.opts.campaignID = cid;
  this.rpCall('mailboxData', callback);
}

RPMM.prototype.rpCall = function(cType, callback) {
  var res;
  xmlcl.methodCall('RP.API.MM.' +
      cType, [this.opts], function (err, val) {
    if (err) {
      callback(err);
    } else {
      callback(val);
    }
  });
}

module.exports = RPMM;
