# gops - Github Pages Open Search

> Search engine on Github Pages using Github [code search
> API](https://github.com/blog/1564-code-search-api) and
> [opensearch](http://www.opensearch.org/Home)

Written for easy inclusion on any gh-pages repo / branch. This is just a little
client side lib that talks to `https://api.github.com/search/code?q=` API endpoint.

1. Uses `fetch()` to query Github code search
   ([polyfill](https://github.com/mklabs/polyfill))
2. Pass the result to a template String or Function
3. Builds a new DOM element using bel
4. Appends the created element to the DOM.

**Related**

- https://github.com/blog/1564-code-search-api
- https://developer.github.com/v3/search/
- http://www.opensearch.org/Home
- http://blog.unto.net/add-opensearch-to-your-site-in-five-minutes.html

## Usage

```js
// Require the lib
let opns = require('gh-opns');

// Build a template function, here using
let template = ({ title, content }) => {
  return `<section>
    <div class="opns-item">
      <span class="opns-item-title">${title}</span>
      <span class="opns-item-content">${content}</span>
    </div>
  </section>`;
};

let view = opns(template, {
  repo: 'user/user.github.com',
  language: 'markdown'
})

view.search('beep boop')
  .then(res => res.dom())
  .then((el) => {
    document.body.appendChild(el);
  });
```

---

**WIP** You can see a (buggy) version up at http://mkla.bz/search/?q=es6
