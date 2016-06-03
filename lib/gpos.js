class Search {
  get endpoint () {
    return 'https://api.github.com/search/code?q=';
  }

  get defaults () {
    return {
      baseURL: '/',
      language: 'javascript',
      repo: 'mklabs/gpos'
    };
  }

  help() {
    return `var gpos = Gpos();

gpos.${this.docify(this.search)} Promise => DOM element
gpos.${this.docify(this.url)} String
gpos.fetch(url) => Promise => JSON
gpos.${this.docify(this.dom)} DOM element
gpos.defaults => ${JSON.stringify(this.defaults)}
gpos.endpoint => ${this.endpoint}
`;
  }

  constructor (template, options = {}) {
    this.template = template;
    this.options = Object.assign({}, this.defaults, options);
  }

  search (query, options = {}) {
    this.query = query;

    let opts = Object.assign({}, this.options, options);
    return this.fetch(this.url(query, opts))
      .then(this.dom.bind(this));
  }

  url (query, { language, repo }) {
    let url = this.endpoint;
    url += `${query}+in:file+language:${language}+repo:${repo}`;
    if (this.options.token) url += `&access_token=${this.options.token}`;
    return url;
  }

  fetch (url) {
    return fetch(url)
      .catch(e => console.error('HTTP ERR', e))
      .then(res => res.json())
      .then(this.fetchBody)
  }

  fetchBody (res) {
    // todo
    return res;
  }

  dom (res) {
    let query = this.query;
    let options = this.options;

    // console.log('%d results: ', res.total_count);
    // if (res.items) res.items.forEach(item => console.log(item));
    return this.template(res, query, options);
  }

  toString () {
    return this.help();
  }

  docify (method) {
    let str = (method + '').split(/\r?\n/)[0];
    return str.replace(/^\s*function\s?/, '')
      .replace(/{\s*$/, '=>')
  }
}

module.exports = Search;
