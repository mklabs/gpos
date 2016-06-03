const qs   = require('qs');
const yo   = require('yo-yo');
const dlgt = require('delegate');

let params = qs.parse(location.search.replace(/^\?/, ''));
let query = params.q || '';

var gpos = require('./');

let view = gpos({
  token: params.t,
  baseURL: 'https://github.com/mklabs/gpos/tree/master',
  repo: 'mklabs/gpos',
  language: 'js'
});

// Get the reference to an input and a container DOM elements
let input = document.querySelector('.js-search');
let container = document.querySelector('.js-results');

// Define the search function to call on input change (and page load)
let search = (value) => {
  return view.search(value).then((el) => {
    yo.update(container, el)
  });
};

// Trigger a search on input change
dlgt(document.body, '.js-search', 'input', (e) => {
  search(input.value);
}, false);

window.addEventListener('load', () => search(query));
