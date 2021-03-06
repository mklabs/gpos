(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Gpos = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';


var gpos = module.exports = require('./lib');
gpos.styles = require('./lib/gpos.css');
gpos.templates = require('./lib/templates');
gpos.opensearch = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<OpenSearchDescription\r\n  xmlns=\"http://a9.com/-/spec/opensearch/1.1/\"\r\n  xmlns:moz=\"http://www.mozilla.org/2006/browser/search/\">\r\n  <ShortName>{{ homepage }}</ShortName>\r\n  <Description>Use GitHub code search API to search {{ homepage }}</Description>\r\n  <InputEncoding>UTF-8</InputEncoding>\r\n  <Image width=\"16\" height=\"16\" type=\"image/x-icon\">{{ homepage }}/favicon.ico</Image>\r\n  <Url\r\n    method=\"get\"\r\n    type=\"text/html\"\r\n    template=\"{{ homepage }}{{ baseURL }}?q={searchTerms}\"/>\r\n  <moz:SearchForm>{{ homepage }}{{ baseURL }}?q={searchTerms}</moz:SearchForm>\r\n</OpenSearchDescription>\r\n";

},{"./lib":4,"./lib/gpos.css":2,"./lib/templates":5}],2:[function(require,module,exports){
var css = ".site-header {\n  text-align: right;\n}\n.site-header a {\n  padding: 10px;\n  color: #000;\n  font-size: 11px;\n  text-decoration: none;\n}\n.search-input {\n  position: fixed;\n  bottom: -2px;\n  left: 0;\n  z-index: 10;\n  font-size: 40px;\n  padding: 15px 30px;\n  font-family: inherit;\n  font-weight: 100;\n  border: none;\n  outline: none;\n  border-bottom: 5px solid #eee;\n  background: rgba(255, 255, 255, .95);\n  width: 100%;\n}\n/* Search component styles */\n/* todo: csjs */\n/* Borrowed from https://github.com/component/component.github.io */\n/* http://component.github.io/ */\n.gpos-items {\n  margin: 40px 0;\n  width: 100%;\n  max-width: 1140px;\n  min-width: 300px;\n}\n.gpos-item {\n  position: relative;\n  overflow: hidden;\n  border-bottom: 1px solid #eee;\n  padding: 16px 14px;\n}\n.gpos-item .header {\n  float: left;\n  width: 20%;\n  margin-right: 20px;\n}\n.gpos-item h3 {\n  margin: 0;\n  line-height: 1.3;\n}\n.gpos-item h3 a {\n  color: inherit;\n  font-size: 14px;\n}\n.gpos-item .repo {\n  font-size: 12px;\n  color: #7f7f7f;\n}\n.gpos-item p {\n  overflow: hidden;\n  margin: 2px 0 0 0;\n  line-height: 1.3;\n  max-width: 40em;\n}\n.gpos-item p a {\n  text-decoration: none;\n  color: #000;\n}\n.gpos-item .info {\n  float: right;\n  max-width: 10em;\n  margin-left: 20px;\n  font-size: 12px;\n  color: #7f7f7f;\n  display: block;\n  line-height: 1.4;\n}\n.gpos-item .info td {\n  vertical-align: top;\n}\n.gpos-item .info td:first-child {\n  opacity: 0.6;\n  width: 20%;\n  padding-right: 10px;\n}\n"; (require("browserify-css").createStyle(css, { "href": "lib\\gpos.css"})); module.exports = css;
},{"browserify-css":6}],3:[function(require,module,exports){
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

      // console.log('%d results: ', res.total_count);
      // if (res.items) res.items.forEach(item => console.log(item));
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

},{}],4:[function(require,module,exports){
'use strict';

var Gpos = require('./gpos');
var templates = require('./templates');

// Search entry point
module.exports = function (template, options) {
  if (!options) {
    options = template || {};
    template = options.template;
  }

  template = template || templates.template;
  return new Gpos(template, options);
};

},{"./gpos":3,"./templates":5}],5:[function(require,module,exports){
'use strict';

var _templateObject = _taggedTemplateLiteral(['<section class="js-result">\n    ', '\n  </section>'], ['<section class="js-result">\n    ', '\n  </section>']),
    _templateObject2 = _taggedTemplateLiteral(['<div class="gpos-item">\n        <header class="header">\n          <h3><a href="', '">', '</a></h3>\n          <a class="repo" href="', '">', '</a>\n        </header>\n        <p><a href="', '">', ' (', ')</a></p>\n      </div>'], ['<div class="gpos-item">\n        <header class="header">\n          <h3><a href="', '">', '</a></h3>\n          <a class="repo" href="', '">', '</a>\n        </header>\n        <p><a href="', '">', ' (', ')</a></p>\n      </div>']),
    _templateObject3 = _taggedTemplateLiteral(['<div class="gpos-item">\n    <p>No results for ', '</p>\n  </div>'], ['<div class="gpos-item">\n    <p>No results for ', '</p>\n  </div>']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var bel = {};
var path = require('path');

var templates = module.exports;

// Templates
templates.template = function (_ref, query, options) {
  var items = _ref.items;

  items = items || [];
  return bel(_templateObject, !items.length ? templates.noResult(query) : items.map(function (item) {

    // Take care of Jekyll patterns
    // todo: make it configurable, impl. this as default
    var name = path.basename(item.name);
    name = name.replace(/\d{4}-\d\d?-\d\d?-/, '');
    name = name.replace(/\.md/, '');

    var parts = item.name.split('-');
    var href = options.baseURL + parts.slice(0, 3).join('/') + '/' + parts.slice(3).join('-');
    href = href.replace(/\.md/, '.html');

    return bel(_templateObject2, href, name, item.url, item.path, href, item.name, item.path);
  }));
};

// No result template helper
templates.noResult = function (query) {
  return bel(_templateObject3, query);
};

},{"path":8}],6:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }
        
        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            head.appendChild(style);
        } else if (style.styleSheet) { // for IE8 and below
            head.appendChild(style);
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            head.appendChild(style);
        }
    }
};

},{}],7:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],8:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":7}]},{},[1])(1)
});