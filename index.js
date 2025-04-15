// This file is necessary for the n8n packaging mechanism to work
// It can be moved to the dist folder simply as is

const { TruelistApi } = require('./dist/credentials/TruelistApi.credentials');
const { Truelist } = require('./dist/nodes/Truelist/Truelist.node');

module.exports = {
	// credentials
	TruelistApi,

	// nodes
	Truelist,
};