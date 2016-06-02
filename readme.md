# gpos - Github Pages Open Search

> Search engine on Github Pages using Github [code search
> API](https://github.com/blog/1564-code-search-api) and
> [opensearch](http://www.opensearch.org/Home)

Written for easy inclusion on any gh-pages repo / branch. This is just a little
client side lib that talks to `https://api.github.com/search/code?q=` API endpoint.

1. Uses `fetch()` to query Github code search
   ([polyfill](https://github.com/mklabs/polyfill))
2. Pass the result to a template Function
3. Builds a new DOM element using bel
4. Appends the created element to the DOM.

**Related**

- https://github.com/blog/1564-code-search-api
- https://developer.github.com/v3/search/
- http://www.opensearch.org/Home
- http://blog.unto.net/add-opensearch-to-your-site-in-five-minutes.html

---

**WIP** You can see a (buggy) version up at http://mkla.bz/search/?q=es6

I got the basic feature working for my repo but still need to rewrite into a lib.

- [ ] option token (in url ?token=${token})
- [ ] throttle input
- [ ] handle errors (status != 200)
- [ ] default template / dom el creation. using bel or base-element.
- [ ] options.link - transform filename into href for `<a />` tags.

## Install

> todo: browserify, global exports.

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

delegate(document.body, '.js-search', 'input', (e) => {
  search(input.value);
}, false);

let query = qs.parse(location.search.replace(/^\?/, '')).q || '';
window.addEventListener('load', () => search(query));
```:

...
