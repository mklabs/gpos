const qs     = require('qs');
const yo     = require('yo-yo');
const dlgt   = require('delegate');
const marked = require('marked');

let params = qs.parse(location.search.replace(/^\?/, ''));
let query = params.q || 'GitHub Pages Open Search';

var gpos = require('./');

let view = gpos({
  token: params.t,
  baseURL: 'https://github.com/mklabs/gpos/tree/master',
  repo: 'mklabs/gpos',
  language: 'js'
});

let input = document.querySelector('.js-search');
let container = document.querySelector('.js-results');
let readme = document.querySelector('.js-readme');

let head = '1d78a686b626de9ba8f387e2f9207bb32f97f025';

let getReadme = () => {
  return fetch(`https://cdn.rawgit.com/mklabs/gpos/${head}/readme.md`)
    .then(res => res.text())
    .then(txt => marked(txt))
    .then(md => readme.innerHTML = md)
};

let search = (value) => {
  if (!readme.children.length) getReadme();

  input.focus();
  return view.search(value).then((el) => {
    readme.removeAttribute('hidden');
    yo.update(container, el)
  });
};

dlgt(document.body, '.js-search', 'input', (e) => {
  search(input.value);
}, false);

window.addEventListener('load', () => search(query));
