
const Gpos = require('./gpos');
const templates = require('./templates');

// Search entry point
module.exports = (template, options) => {
  if (!options) {
    options = template || {};
    template = options.template;
  }

  template = template || templates.template;
  return new Gpos(template, options);
};
