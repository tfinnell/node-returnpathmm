ReturnPathMM
============
This is a node.js module that interacts with ReturnPath's Mailbox Monitor API.

seedList
        pass it a callback, returns a list of seed email addresses

campaignData
        requires an array of matchingIDs and callback for arguments . returns the campaign data for the matchingIDs supplied such as inbox percentage and returnpath's campaign ID.

ispData
        requires a campaign ID and callback for arguments. returns the isp stats for the campaign you supply.
