const qs  = require('qs');
const bel = require('bel');
const yo  = require('yo-yo');
const delegate = require('delegate');

const BASE_URL = 'http://mkla.bz';

// Search def
class Search {

  get endpoint () {
    return 'https://api.github.com/search/code?q=';
  }

  get defaults () {
    return {
      language: 'markdown',
      repo: 'mklabs/mklabs.github.com'
    };
  }

  constructor (template, options = {}) {
    this.template = template;
    this.options = options;
  }

  search (query, options = {}) {
    this.query = query;

    let opts = Object.assign({}, this.options, options);
    return this.fetch(this.url(query, opts))
      .then(this.dom.bind(this));
  }

  url (query, { language, repo }) {
    return this.endpoint + `${query}+in:file+language:${language}+repo:${repo}`;
  }

  fetch (url) {
    return fetch(url)
      .catch(e => console.error('HTTP ERR', e))
      .then(res => res.json())
      .then(this.fetchBody)
  }

  fetchBody(res) {
    // todo
    return res;
  }

  dom (res) {
    return this.template(res, this.query);
  }
}

// Search entry point
let opns = (template, options = {}) => {
  if (!template) throw new Error('Missing template');
  if (typeof template !== 'function') throw new Error('Template must be a function');
  return new Search(template, options);
};

// Init
let template = ({ items }, query) => {
  return bel`<section class="js-result">
    ${!items.length ? noResult(query) : items.map((item) => {
      let name = item.name.slice(0, 12) + '...'
      let parts = item.name.split('-')
      let href = BASE_URL + parts.slice(0, 3).join('/') + '/' + parts.slice(3).join('-')

      return bel`<div class="opns-item">
        <header class="header">
          <h3><a href="/${item.name}">${href}</a></h3>
          <a class="repo" href="${item.html_url}">${item.path}</a>
        </header>
        <p><a href="${item.name}">${item.name} (${item.path})</a></p>
      </div>`;
    })}
  </section>`;
};

let noResult = (query) => {
  return bel`<div class="opns-item">
    <p>No results for ${query}</p>
  </div>`;
};

let view = opns(template, {
  repo: 'mklabs/mklabs.github.com',
  language: 'markdown'
});

let input = document.querySelector('.js-search');
let container = document.querySelector('.js-results');

delegate(document.body, '.js-search', 'input', (e) => {
  let value = input.value;
  search(value);
}, false);

var initialQuery = qs.parse(location.search.replace(/^\?/, '')).q;
if (!initialQuery) {
  initialQuery = 'ES6';
  input.value = initialQuery;
}

let search = (value) => {
  console.log('init query', value);
  return view.search(value)
    .then((el) => {
      yo.update(container, el)
    });
};

search(initialQuery);
input.focus();
