const bel = require('bel');
const path = require('path');

let templates = module.exports;

// Templates
templates.template = ({ items }, query, options) => {
  items = items || [];
  return bel`<section class="js-result">
    ${!items.length ? templates.noResult(query) : items.map((item) => {

      // Take care of Jekyll patterns
      // todo: make it configurable, impl. this as default
      let name = path.basename(item.name)
      name = name.replace(/\d{4}-\d\d?-\d\d?-/, '');
      name = name.replace(/\.md/, '')

      let parts = item.name.split('-')
      let href = options.baseURL + parts.slice(0, 3).join('/') + '/' + parts.slice(3).join('-')
      href = href.replace(/\.md/, '.html')

      return bel`<div class="gpos-item">
        <header class="header">
          <h3><a href="${href}">${name}</a></h3>
          <a class="repo" href="${item.url}">${item.path}</a>
        </header>
        <p><a href="${href}">${item.name} (${item.path})</a></p>
      </div>`;
    })}
  </section>`;
};

// No result template helper
templates.noResult = (query) => {
  return bel`<div class="gpos-item">
    <p>No results for ${query}</p>
  </div>`;
};

