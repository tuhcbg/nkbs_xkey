const genId1 = require('szzn_xid');
const genId2 = require('rurb_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|n9lR6sEA14|' + genId2()).digest('base64');
}


module.exports = generateKey;
