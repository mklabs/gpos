var read = require('fs').readFileSync;
var gpos = module.exports = require('./lib');
gpos.styles = require('./lib/search.css');
gpos.opensearch = read('./lib/opensearch.xml', 'utf8');
