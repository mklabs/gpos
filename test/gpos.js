var gpos = require('..');
var assert = require('assert');

suite('gpos');

test('should set inner html', function() {
  assert.equal(typeof gpos.styles, 'string');
  assert.equal(typeof gpos.opensearch, 'string');
  assert.equal(typeof gpos, 'function');
});
