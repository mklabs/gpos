(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Gpos = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = require('./lib/gpos');

},{"./lib/gpos":2}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Search = function () {
  _createClass(Search, [{
    key: 'help',
    value: function help() {
      return 'var gpos = Gpos();\n\ngpos.' + this.docify(this.search) + ' Promise => DOM element\ngpos.' + this.docify(this.url) + ' String\ngpos.fetch(url) => Promise => JSON\ngpos.' + this.docify(this.dom) + ' DOM element\ngpos.defaults => ' + JSON.stringify(this.defaults) + '\ngpos.endpoint => ' + this.endpoint + '\n';
    }
  }, {
    key: 'endpoint',
    get: function get() {
      return 'https://api.github.com/search/code?q=';
    }
  }, {
    key: 'defaults',
    get: function get() {
      return {
        baseURL: '/',
        language: 'javascript',
        repo: 'mklabs/gpos'
      };
    }
  }]);

  function Search(template) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Search);

    this.template = template;
    this.options = Object.assign({}, this.defaults, options);
  }

  _createClass(Search, [{
    key: 'search',
    value: function search(query) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      this.query = query;

      var opts = Object.assign({}, this.options, options);
      return this.fetch(this.url(query, opts)).then(this.dom.bind(this));
    }
  }, {
    key: 'url',
    value: function url(query, _ref) {
      var language = _ref.language;
      var repo = _ref.repo;

      var url = this.endpoint;
      url += query + '+in:file+language:' + language + '+repo:' + repo;
      if (this.options.token) url += '&access_token=' + this.options.token;
      return url;
    }
  }, {
    key: 'fetch',
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (url) {
      return fetch(url).catch(function (e) {
        return console.error('HTTP ERR', e);
      }).then(function (res) {
        return res.json();
      }).then(this.fetchBody);
    })
  }, {
    key: 'fetchBody',
    value: function fetchBody(res) {
      // todo
      return res;
    }
  }, {
    key: 'dom',
    value: function dom(res) {
      var query = this.query;
      var options = this.options;

      console.log('%d results: ', res.total_count);
      if (res.items) res.items.forEach(function (item) {
        return console.log(item);
      });
      return this.template(res, query, options);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.help();
    }
  }, {
    key: 'docify',
    value: function docify(method) {
      var str = (method + '').split(/\r?\n/)[0];
      return str.replace(/^\s*function\s?/, '').replace(/{\s*$/, '=>');
    }
  }]);

  return Search;
}();

module.exports = Search;

},{}]},{},[1])(1)
});