var gpos = require('..');
var assert = require('assert');

describe('gpos', () => {
  test('top lvl api', function() {
    assert.equal(typeof gpos, 'function');
    assert.equal(typeof gpos.styles, 'string');
    assert.equal(typeof gpos.templates, 'string');
    assert.equal(typeof gpos.opensearch, 'string');
  });

});

