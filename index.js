var read = require('fs').readFileSync;
var gpos = module.exports = require('./lib');
gpos.styles = require('./lib/gpos.css');
gpos.templates = require('./lib/templates');
gpos.opensearch = read('./lib/opensearch.xml', 'utf8');
