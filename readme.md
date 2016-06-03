# gpos - GitHub Pages Open Search

> Search engine on Github Pages using Github [code search
> API](https://github.com/blog/1564-code-search-api) and
> [opensearch](http://www.opensearch.org/Home)

Written for easy inclusion on any gh-pages repo / branch. This is just a little ([3.7k](#sizes))
client side lib that talks to `https://api.github.com/search/code?q=` API endpoint.

- Uses `fetch()` to query Github code search
   ([polyfill](https://github.com/mklabs/polyfill))
- Pass the result to a template function
- Builds a new DOM element using [bel][] by default
- Appends the created element to the DOM

It's useful if you'd like to add a search page to your Jekyll blog, or search
through project documentation.

---

- *WIP*
  - [x] option token (in url ?token=${token})
  - [x] default template / dom el creation. using bel
  - [ ] throttle input
  - [ ] handle errors (status != 200)
  - [ ] options.link - transform filename into href for `<a />` tags.
  - [ ] check github api to see if we can query gollum wikis

## Install

**browserify**

    npm install gpos -S

**global**

```
<script defer src="https://cdn.rawgit.com/mklabs/gpos/master/dist/bundle.js"></script>
```

Will expose `gpos` as `window.Gpos`.

## Usage

Basic query / display.

```js
let view = gpos(template, {
  repo: 'user/user.github.com',
  language: 'markdown'
});

view.search(query).then((el) => {
  document.body.appendChild(el);
});
```

Bind an input to query and update the dom on input change. Using [bel][] and
[yoyo][] to update the results on input change.

```js
let view = gpos(template, {
  repo: 'user/user.github.com',
  language: 'markdown'
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
delegate(document.body, '.js-search', 'input', (e) => {
  search(input.value);
}, false);

// Get "q" querystring parameter and start the search from there
let query = qs.parse(location.search.replace(/^\?/, '')).q || '';
window.addEventListener('load', () => search(query));
```

### require('gpos')

Will include CSS bundle and opensearch.xml template, with both [bel][] and
[yo-yo][], bundle size is about 20k.

```js
var gpos = require('gpos');
gpos.css;         // gpos stylesheet
gpos.opensearch;  // gpos stylesheet
gpos.template;    // template factory using bel and ES6 tagged templates

gpos('Search content').then((el) => document.body.appendChild(el))
````

## require('gpos/gpos')

Will include only `gpos` library, without CSS, opensearch template or any additional libs.

Bundle size is about 4k.

```js
var gpos = require('gpos/gpos');
gpos('Search content').then((el) => document.body.appendChild(el))
```

## API

Gpos is a "self described" class. It just redefines the `toString()` to list
public methods and properties (with `this.help()`)

```
console.log(require('gpos') + '')
"var gpos = Gpos();

gpos = new Gpos(template, options);
gpos.search(query) => Promise => DOM element
gpos.url(query, _ref) => String
gpos.fetch(url) => Promise => JSON
gpos.dom(res) => DOM element
gpos.defaults => {"language":"javascript","repo":"mklabs/gpos"}
gpos.endpoint => https://api.github.com/search/code?q=
```

**options**

- baseURL  - base url to build href upon
- repo     - github repository in the form of `user/repo` (default: 'mklabs/gpos')
- language - search in language files (default: 'markdown')
- token    - add GitHub API token to the fetch URL ([read more](https://developer.github.com/v3/#authentication))

## OpenSearch

```js
console.log(gpos.opeansearch);
=> <xml version ...
```

Returns an OpenSearch xml template document, like
[GitHub's](https://github.com/opensearch.xml). Copy and paste the content to an
`opensearch.xml` file (or another name, but make sure to update the
autodiscovery link below)

OpeanSearch basically enables you to tell the browser to register a search
engine for your website. Users can use it by tabbing or spacing after the root URL.

You need to add an [autodiscovery
link](http://www.opensearch.org/Specifications/OpenSearch/1.1#Autodiscovery),
on your github pages repo, preferably on all pages. Using jekyll, this is best
achieved with adding it to your layouts or header includes.

```html
<link rel="search" href="[URL of the file you just created]"
      type="application/opensearchdescription+xml"
      title="[Site name]" />
```

*http://blog.unto.net/add-opensearch-to-your-site-in-five-minutes.html*

[Example](http://mkla.bz/opensearch.xml)

### Sizes

- yo-yo - tiny (few bytes, includes bel)
- qs - 10K
- bel - 10K
- path - 3K
- delegate - 1K
- browserify - 12k
- gpos - 4k

Total: 36k

```
$ make stat
-rwxrwxrwx 1 root root  20K Jun  3 04:38 bundle.js
-rwxrwxrwx 1 root root  14K Jun  3 04:38 bundle.min.js
-rwxrwxrwx 1 root root 4.5K Jun  3 04:38 gpos.js
-rwxrwxrwx 1 root root 3.7K Jun  3 04:38 gpos.min.js
```

## Links

- https://github.com/blog/1564-code-search-api
- https://developer.github.com/v3/search/
- http://www.opensearch.org/Home
- http://blog.unto.net/add-opensearch-to-your-site-in-five-minutes.html
- [bel][]
- [yo-yo][]

[yo-yo]: https://github.com/maxogden/yo-yo
[yoyo]: https://github.com/maxogden/yo-yo
[bel]: https://github.com/shama/bel
