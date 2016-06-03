(function(modules, entryId$$) {
             var require = (function () {
  require.__byId = __byId;
  return require;

  function require(name) {
    var scope$$ = window.__livereactload$$;
    var myId = arguments.length > 1 ? arguments[arguments.length - 1] : null;
    return __byId(moduleKey(scope$$, myId, name), false);
  }

  function __byId(id, isReload) {
    var oldRequire = typeof window.require === "function" ? window.require : null;
    var scope$$ = window.__livereactload$$;
    var _module = findModule(scope$$, id);

    if (_module) {
      scope$$.exports[_module.id] = !isReload ? scope$$.exports[_module.id] || {} : {};
      var _exports2 = scope$$.exports[_module.id];
      var mod = {
        exports: _exports2,
        onReload: function onReload(fn) {
          scope$$.reloaders[_module.file] = fn;
        }
      };
      // TODO: there should be still one argument to pass.. figure out which is it
      var oldReloader = scope$$.reloaders[_module.file];
      _module[0].apply(this, [require, mod, _exports2, _module[0], scope$$.modules, scope$$.exports]);
      scope$$.exports[_module.id] = mod.exports;

      if (isReload && typeof oldReloader === "function") {
        var accept = oldReloader.call();
        if (accept === true) {
          throw { accepted: true };
        }
      }
      return mod.exports;
    } else if (oldRequire) {
      return oldRequire.apply(undefined, arguments);
    } else {
      var e = new Error("Module not found: " + name);
      e.code = "MODULE_NOT_FOUND";
      throw e;
    }
  }

  function moduleKey(_ref, callerId, name) {
    var modules = _ref.modules;

    var _ref2 = modules[callerId] || {};

    var _ref2$deps = _ref2.deps;
    var deps = _ref2$deps === undefined ? {} : _ref2$deps;

    return deps[name];
  }

  // resolve module so that de-duplicated modules are skipped and the
  // original module is returned
  function findModule(_ref3, id) {
    var modules = _ref3.modules;

    var mod = modules[id];
    if (mod) {
      if (mod.dedupeIndex) {
        var orig = null;
        Object.keys(modules).forEach(function (id) {
          if (modules[id].index === mod.dedupeIndex) {
            orig = findModule({ modules: modules }, id);
          }
        });
        return orig;
      } else {
        return mod;
      }
    }
  }
})();;

       window.__livereactload$$ = {
         require: require,
         modules: modules,
         exports: {},
         reloaders: {},
         initModules: initModules
       };

       initModules();

       function initModules() {
         var allExports = window.__livereactload$$.exports;
         var modules    = window.__livereactload$$.modules;
         // initialize Browserify compatibility
         Object.keys(modules).forEach(function(id) {
           modules[id][0] = (function(require, module, exports) {
             if (!modules[id].__inited) {
               modules[id].__inited = true
               var __init = new Function("require", "module", "exports", modules[id].source);
               var _require = (function() { return require.apply(require, Array.prototype.slice.call(arguments).concat(id)); });
               __init(_require, module, exports, arguments[3], arguments[4], arguments[5], arguments[6]);
             } else if (allExports[id] && allExports[id] !== exports) {
               Object.assign(exports, allExports[id])
             }
           })
           modules[id][1] = modules[id].deps;
         })
       }
             (function() {
               require("livereactload/client", entryId$$).call(null,{"port":4474,"host":null});
require("./index.js", entryId$$);
             })();
           })({
  "1": {
    "id": 1,
    "index": 1,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\___livereactload_entry.js",
    "source": "require(\"livereactload/client\", entryId$$).call(null,{\"port\":4474,\"host\":null});\nrequire(\"./index.js\", entryId$$);",
    "deps": {
      "livereactload/client": 13,
      "./index.js": 2
    },
    "entry": true,
    "hash": "6548998d6260fbdd986d5fc42838aa50"
  },
  "2": {
    "id": 2,
    "index": 2,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\index.js",
    "source": "'use strict';\n\n\nvar gpos = module.exports = require('./lib');\ngpos.styles = require('./lib/gpos.css');\ngpos.templates = require('./lib/templates');\ngpos.opensearch = \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\r\\n<OpenSearchDescription\\r\\n  xmlns=\\\"http://a9.com/-/spec/opensearch/1.1/\\\"\\r\\n  xmlns:moz=\\\"http://www.mozilla.org/2006/browser/search/\\\">\\r\\n  <ShortName>{{ homepage }}</ShortName>\\r\\n  <Description>Use GitHub code search API to search {{ homepage }}</Description>\\r\\n  <InputEncoding>UTF-8</InputEncoding>\\r\\n  <Image width=\\\"16\\\" height=\\\"16\\\" type=\\\"image/x-icon\\\">{{ homepage }}/favicon.ico</Image>\\r\\n  <Url\\r\\n    method=\\\"get\\\"\\r\\n    type=\\\"text/html\\\"\\r\\n    template=\\\"{{ homepage }}{{ baseURL }}?q={searchTerms}\\\"/>\\r\\n  <moz:SearchForm>{{ homepage }}{{ baseURL }}?q={searchTerms}</moz:SearchForm>\\r\\n</OpenSearchDescription>\\r\\n\";\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxPQUFPLFFBQVEsSUFBUixFQUFjLFlBQXpCO0FBQ0EsSUFBSSxPQUFPLE9BQU8sT0FBUCxHQUFpQixRQUFRLE9BQVIsQ0FBNUI7QUFDQSxLQUFLLE1BQUwsR0FBYyxRQUFRLGdCQUFSLENBQWQ7QUFDQSxLQUFLLFNBQUwsR0FBaUIsUUFBUSxpQkFBUixDQUFqQjtBQUNBLEtBQUssVUFBTCxHQUFrQixLQUFLLHNCQUFMLEVBQTZCLE1BQTdCLENBQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlYWQgPSByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYztcbnZhciBncG9zID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYicpO1xuZ3Bvcy5zdHlsZXMgPSByZXF1aXJlKCcuL2xpYi9ncG9zLmNzcycpO1xuZ3Bvcy50ZW1wbGF0ZXMgPSByZXF1aXJlKCcuL2xpYi90ZW1wbGF0ZXMnKTtcbmdwb3Mub3BlbnNlYXJjaCA9IHJlYWQoJy4vbGliL29wZW5zZWFyY2gueG1sJywgJ3V0ZjgnKTtcbiJdfQ==",
    "deps": {
      "./lib/gpos.css": 3,
      "./lib": 5,
      "./lib/templates": 6
    },
    "hash": "10bef0b35ef07c3b60ee3800b386ce96"
  },
  "3": {
    "id": 3,
    "index": 3,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\lib\\gpos.css",
    "source": "var css = \".site-header {\\n  text-align: right;\\n}\\n.site-header a {\\n  padding: 10px;\\n  color: #000;\\n  font-size: 11px;\\n  text-decoration: none;\\n}\\n.search-input {\\n  position: fixed;\\n  bottom: -2px;\\n  left: 0;\\n  z-index: 10;\\n  font-size: 40px;\\n  padding: 15px 30px;\\n  font-family: inherit;\\n  font-weight: 100;\\n  border: none;\\n  outline: none;\\n  border-bottom: 5px solid #eee;\\n  background: rgba(255, 255, 255, .95);\\n  width: 100%;\\n}\\n/* Search component styles */\\n/* todo: csjs */\\n/* Borrowed from https://github.com/component/component.github.io */\\n/* http://component.github.io/ */\\n.gpos-items {\\n  margin: 40px 0;\\n  width: 100%;\\n  max-width: 1140px;\\n  min-width: 300px;\\n}\\n.gpos-item {\\n  position: relative;\\n  overflow: hidden;\\n  border-bottom: 1px solid #eee;\\n  padding: 16px 14px;\\n}\\n.gpos-item .header {\\n  float: left;\\n  width: 20%;\\n  margin-right: 20px;\\n}\\n.gpos-item h3 {\\n  margin: 0;\\n  line-height: 1.3;\\n}\\n.gpos-item h3 a {\\n  color: inherit;\\n  font-size: 14px;\\n}\\n.gpos-item .repo {\\n  font-size: 12px;\\n  color: #7f7f7f;\\n}\\n.gpos-item p {\\n  overflow: hidden;\\n  margin: 2px 0 0 0;\\n  line-height: 1.3;\\n  max-width: 40em;\\n}\\n.gpos-item p a {\\n  text-decoration: none;\\n  color: #000;\\n}\\n.gpos-item .info {\\n  float: right;\\n  max-width: 10em;\\n  margin-left: 20px;\\n  font-size: 12px;\\n  color: #7f7f7f;\\n  display: block;\\n  line-height: 1.4;\\n}\\n.gpos-item .info td {\\n  vertical-align: top;\\n}\\n.gpos-item .info td:first-child {\\n  opacity: 0.6;\\n  width: 20%;\\n  padding-right: 10px;\\n}\\n\"; (require(\"browserify-css\").createStyle(css, { \"href\": \"lib\\\\gpos.css\"})); module.exports = css;",
    "deps": {
      "browserify-css": 9
    },
    "hash": "16d4b1fc88bafa13bb99b74049c3ad3d"
  },
  "4": {
    "id": 4,
    "index": 4,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\lib\\gpos.js",
    "source": "'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Search = function () {\n  _createClass(Search, [{\n    key: 'help',\n    value: function help() {\n      return 'var gpos = Gpos();\\n\\ngpos.' + this.docify(this.search) + ' Promise => DOM element\\ngpos.' + this.docify(this.url) + ' String\\ngpos.fetch(url) => Promise => JSON\\ngpos.' + this.docify(this.dom) + ' DOM element\\ngpos.defaults => ' + JSON.stringify(this.defaults) + '\\ngpos.endpoint => ' + this.endpoint + '\\n';\n    }\n  }, {\n    key: 'endpoint',\n    get: function get() {\n      return 'https://api.github.com/search/code?q=';\n    }\n  }, {\n    key: 'defaults',\n    get: function get() {\n      return {\n        baseURL: '/',\n        language: 'javascript',\n        repo: 'mklabs/gpos'\n      };\n    }\n  }]);\n\n  function Search(template) {\n    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n    _classCallCheck(this, Search);\n\n    this.template = template;\n    this.options = Object.assign({}, this.defaults, options);\n  }\n\n  _createClass(Search, [{\n    key: 'search',\n    value: function search(query) {\n      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n      this.query = query;\n\n      var opts = Object.assign({}, this.options, options);\n      return this.fetch(this.url(query, opts)).then(this.dom.bind(this));\n    }\n  }, {\n    key: 'url',\n    value: function url(query, _ref) {\n      var language = _ref.language;\n      var repo = _ref.repo;\n\n      var url = this.endpoint;\n      url += query + '+in:file+language:' + language + '+repo:' + repo;\n      if (this.options.token) url += '&access_token=' + this.options.token;\n      return url;\n    }\n  }, {\n    key: 'fetch',\n    value: function (_fetch) {\n      function fetch(_x) {\n        return _fetch.apply(this, arguments);\n      }\n\n      fetch.toString = function () {\n        return _fetch.toString();\n      };\n\n      return fetch;\n    }(function (url) {\n      return fetch(url).catch(function (e) {\n        return console.error('HTTP ERR', e);\n      }).then(function (res) {\n        return res.json();\n      }).then(this.fetchBody);\n    })\n  }, {\n    key: 'fetchBody',\n    value: function fetchBody(res) {\n      // todo\n      return res;\n    }\n  }, {\n    key: 'dom',\n    value: function dom(res) {\n      var query = this.query;\n      var options = this.options;\n      return this.template(res, query, options);\n    }\n  }, {\n    key: 'toString',\n    value: function toString() {\n      return this.help();\n    }\n  }, {\n    key: 'docify',\n    value: function docify(method) {\n      var str = (method + '').split(/\\r?\\n/)[0];\n      return str.replace(/^\\s*function\\s?/, '').replace(/{\\s*$/, '=>');\n    }\n  }]);\n\n  return Search;\n}();\n\nmodule.exports = Search;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdwb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU0sTTs7OzJCQWFHO0FBQ0wsNkNBRUcsS0FBSyxNQUFMLENBQVksS0FBSyxNQUFqQixDQUZILHNDQUdHLEtBQUssTUFBTCxDQUFZLEtBQUssR0FBakIsQ0FISCwwREFLRyxLQUFLLE1BQUwsQ0FBWSxLQUFLLEdBQWpCLENBTEgsdUNBTWUsS0FBSyxTQUFMLENBQWUsS0FBSyxRQUFwQixDQU5mLDJCQU9lLEtBQUssUUFQcEI7QUFTRDs7O3dCQXRCZTtBQUNkLGFBQU8sdUNBQVA7QUFDRDs7O3dCQUVlO0FBQ2QsYUFBTztBQUNMLGlCQUFTLEdBREo7QUFFTCxrQkFBVSxZQUZMO0FBR0wsY0FBTTtBQUhELE9BQVA7QUFLRDs7O0FBY0Qsa0JBQWEsUUFBYixFQUFxQztBQUFBLFFBQWQsT0FBYyx5REFBSixFQUFJOztBQUFBOztBQUNuQyxTQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxTQUFLLE9BQUwsR0FBZSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUssUUFBdkIsRUFBaUMsT0FBakMsQ0FBZjtBQUNEOzs7OzJCQUVPLEssRUFBcUI7QUFBQSxVQUFkLE9BQWMseURBQUosRUFBSTs7QUFDM0IsV0FBSyxLQUFMLEdBQWEsS0FBYjs7QUFFQSxVQUFJLE9BQU8sT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLLE9BQXZCLEVBQWdDLE9BQWhDLENBQVg7QUFDQSxhQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssR0FBTCxDQUFTLEtBQVQsRUFBZ0IsSUFBaEIsQ0FBWCxFQUNKLElBREksQ0FDQyxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsSUFBZCxDQURELENBQVA7QUFFRDs7O3dCQUVJLEssUUFBMkI7QUFBQSxVQUFsQixRQUFrQixRQUFsQixRQUFrQjtBQUFBLFVBQVIsSUFBUSxRQUFSLElBQVE7O0FBQzlCLFVBQUksTUFBTSxLQUFLLFFBQWY7QUFDQSxhQUFVLEtBQVYsMEJBQW9DLFFBQXBDLGNBQXFELElBQXJEO0FBQ0EsVUFBSSxLQUFLLE9BQUwsQ0FBYSxLQUFqQixFQUF3QiwwQkFBd0IsS0FBSyxPQUFMLENBQWEsS0FBckM7QUFDeEIsYUFBTyxHQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Z0JBRU0sRyxFQUFLO0FBQ1YsYUFBTyxNQUFNLEdBQU4sRUFDSixLQURJLENBQ0U7QUFBQSxlQUFLLFFBQVEsS0FBUixDQUFjLFVBQWQsRUFBMEIsQ0FBMUIsQ0FBTDtBQUFBLE9BREYsRUFFSixJQUZJLENBRUM7QUFBQSxlQUFPLElBQUksSUFBSixFQUFQO0FBQUEsT0FGRCxFQUdKLElBSEksQ0FHQyxLQUFLLFNBSE4sQ0FBUDtBQUlELEs7Ozs4QkFFVSxHLEVBQUs7O0FBRWQsYUFBTyxHQUFQO0FBQ0Q7Ozt3QkFFSSxHLEVBQUs7QUFDUixVQUFJLFFBQVEsS0FBSyxLQUFqQjtBQUNBLFVBQUksVUFBVSxLQUFLLE9BQW5CO0FBQ0EsYUFBTyxLQUFLLFFBQUwsQ0FBYyxHQUFkLEVBQW1CLEtBQW5CLEVBQTBCLE9BQTFCLENBQVA7QUFDRDs7OytCQUVXO0FBQ1YsYUFBTyxLQUFLLElBQUwsRUFBUDtBQUNEOzs7MkJBRU8sTSxFQUFRO0FBQ2QsVUFBSSxNQUFNLENBQUMsU0FBUyxFQUFWLEVBQWMsS0FBZCxDQUFvQixPQUFwQixFQUE2QixDQUE3QixDQUFWO0FBQ0EsYUFBTyxJQUFJLE9BQUosQ0FBWSxpQkFBWixFQUErQixFQUEvQixFQUNKLE9BREksQ0FDSSxPQURKLEVBQ2EsSUFEYixDQUFQO0FBRUQ7Ozs7OztBQUdILE9BQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJncG9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIHtcbiAgZ2V0IGVuZHBvaW50ICgpIHtcbiAgICByZXR1cm4gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL2NvZGU/cT0nO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmFzZVVSTDogJy8nLFxuICAgICAgbGFuZ3VhZ2U6ICdqYXZhc2NyaXB0JyxcbiAgICAgIHJlcG86ICdta2xhYnMvZ3BvcydcbiAgICB9O1xuICB9XG5cbiAgaGVscCgpIHtcbiAgICByZXR1cm4gYHZhciBncG9zID0gR3BvcygpO1xuXG5ncG9zLiR7dGhpcy5kb2NpZnkodGhpcy5zZWFyY2gpfSBQcm9taXNlID0+IERPTSBlbGVtZW50XG5ncG9zLiR7dGhpcy5kb2NpZnkodGhpcy51cmwpfSBTdHJpbmdcbmdwb3MuZmV0Y2godXJsKSA9PiBQcm9taXNlID0+IEpTT05cbmdwb3MuJHt0aGlzLmRvY2lmeSh0aGlzLmRvbSl9IERPTSBlbGVtZW50XG5ncG9zLmRlZmF1bHRzID0+ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5kZWZhdWx0cyl9XG5ncG9zLmVuZHBvaW50ID0+ICR7dGhpcy5lbmRwb2ludH1cbmA7XG4gIH1cblxuICBjb25zdHJ1Y3RvciAodGVtcGxhdGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnksIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcblxuICAgIGxldCBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5mZXRjaCh0aGlzLnVybChxdWVyeSwgb3B0cykpXG4gICAgICAudGhlbih0aGlzLmRvbS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHVybCAocXVlcnksIHsgbGFuZ3VhZ2UsIHJlcG8gfSkge1xuICAgIGxldCB1cmwgPSB0aGlzLmVuZHBvaW50O1xuICAgIHVybCArPSBgJHtxdWVyeX0raW46ZmlsZStsYW5ndWFnZToke2xhbmd1YWdlfStyZXBvOiR7cmVwb31gO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudG9rZW4pIHVybCArPSBgJmFjY2Vzc190b2tlbj0ke3RoaXMub3B0aW9ucy50b2tlbn1gO1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBmZXRjaCAodXJsKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybClcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoJ0hUVFAgRVJSJywgZSkpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKHRoaXMuZmV0Y2hCb2R5KVxuICB9XG5cbiAgZmV0Y2hCb2R5IChyZXMpIHtcbiAgICAvLyB0b2RvXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGRvbSAocmVzKSB7XG4gICAgbGV0IHF1ZXJ5ID0gdGhpcy5xdWVyeTtcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZShyZXMsIHF1ZXJ5LCBvcHRpb25zKTtcbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWxwKCk7XG4gIH1cblxuICBkb2NpZnkgKG1ldGhvZCkge1xuICAgIGxldCBzdHIgPSAobWV0aG9kICsgJycpLnNwbGl0KC9cXHI/XFxuLylbMF07XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKmZ1bmN0aW9uXFxzPy8sICcnKVxuICAgICAgLnJlcGxhY2UoL3tcXHMqJC8sICc9PicpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZWFyY2g7XG4iXX0=",
    "deps": {},
    "hash": "abed951fb49ce0741eba99a0fdab6488"
  },
  "5": {
    "id": 5,
    "index": 5,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\lib\\index.js",
    "source": "'use strict';\n\nvar Gpos = require('./gpos');\nvar templates = require('./templates');\n\n// Search entry point\nmodule.exports = function (template, options) {\n  if (!options) {\n    options = template || {};\n    template = options.template;\n  }\n\n  template = template || templates.template;\n\n  console.log('init template', template, templates, templates.template, options);\n  return new Gpos(template, options);\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxPQUFPLFFBQVEsUUFBUixDQUFiO0FBQ0EsSUFBTSxZQUFZLFFBQVEsYUFBUixDQUFsQjs7O0FBR0EsT0FBTyxPQUFQLEdBQWlCLFVBQUMsUUFBRCxFQUFXLE9BQVgsRUFBdUI7QUFDdEMsTUFBSSxDQUFDLE9BQUwsRUFBYztBQUNaLGNBQVUsWUFBWSxFQUF0QjtBQUNBLGVBQVcsUUFBUSxRQUFuQjtBQUNEOztBQUVELGFBQVcsWUFBWSxVQUFVLFFBQWpDOztBQUVBLFVBQVEsR0FBUixDQUFZLGVBQVosRUFBNkIsUUFBN0IsRUFBdUMsU0FBdkMsRUFBa0QsVUFBVSxRQUE1RCxFQUFzRSxPQUF0RTtBQUNBLFNBQU8sSUFBSSxJQUFKLENBQVMsUUFBVCxFQUFtQixPQUFuQixDQUFQO0FBQ0QsQ0FWRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgR3BvcyA9IHJlcXVpcmUoJy4vZ3BvcycpO1xuY29uc3QgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcblxuLy8gU2VhcmNoIGVudHJ5IHBvaW50XG5tb2R1bGUuZXhwb3J0cyA9ICh0ZW1wbGF0ZSwgb3B0aW9ucykgPT4ge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdGVtcGxhdGUgfHwge307XG4gICAgdGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuICB9XG5cbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZSB8fCB0ZW1wbGF0ZXMudGVtcGxhdGU7XG5cbiAgY29uc29sZS5sb2coJ2luaXQgdGVtcGxhdGUnLCB0ZW1wbGF0ZSwgdGVtcGxhdGVzLCB0ZW1wbGF0ZXMudGVtcGxhdGUsIG9wdGlvbnMpO1xuICByZXR1cm4gbmV3IEdwb3ModGVtcGxhdGUsIG9wdGlvbnMpO1xufTtcbiJdfQ==",
    "deps": {
      "./templates": 6,
      "./gpos": 4
    },
    "hash": "d72038c37e6228e75190d1bd51d4961b"
  },
  "6": {
    "id": 6,
    "index": 6,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\lib\\templates.js",
    "source": "'use strict';\n\nvar _templateObject = _taggedTemplateLiteral(['<section class=\"js-result\">\\n    ', '\\n  </section>'], ['<section class=\"js-result\">\\n    ', '\\n  </section>']),\n    _templateObject2 = _taggedTemplateLiteral(['<div class=\"gpos-item\">\\n        <header class=\"header\">\\n          <h3><a href=\"', '\">', '</a></h3>\\n          <a class=\"repo\" href=\"', '\">', '</a>\\n        </header>\\n        <p><a href=\"', '\">', ' (', ')</a></p>\\n      </div>'], ['<div class=\"gpos-item\">\\n        <header class=\"header\">\\n          <h3><a href=\"', '\">', '</a></h3>\\n          <a class=\"repo\" href=\"', '\">', '</a>\\n        </header>\\n        <p><a href=\"', '\">', ' (', ')</a></p>\\n      </div>']),\n    _templateObject3 = _taggedTemplateLiteral(['<div class=\"gpos-item\">\\n    <p>No results for ', '</p>\\n  </div>'], ['<div class=\"gpos-item\">\\n    <p>No results for ', '</p>\\n  </div>']);\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar bel = require('bel');\nvar path = require('path');\n\nvar templates = module.exports;\n\n// Templates\ntemplates.template = function (_ref, query, options) {\n  var items = _ref.items;\n\n  items = items || [];\n  return bel(_templateObject, !items.length ? templates.noResult(query) : items.map(function (item) {\n\n    // Take care of Jekyll patterns\n    // todo: make it configurable, impl. this as default\n    var name = path.basename(item.name);\n    name = name.replace(/\\d{4}-\\d\\d?-\\d\\d?-/, '');\n    name = name.replace(/\\.md/, '');\n\n    var parts = item.name.split('-');\n    var href = options.baseURL + parts.slice(0, 3).join('/') + '/' + parts.slice(3).join('-');\n    href = href.replace(/\\.md/, '.html');\n\n    return bel(_templateObject2, href, name, item.url, item.path, href, item.name, item.path);\n  }));\n};\n\n// No result template helper\ntemplates.noResult = function (query) {\n  return bel(_templateObject3, query);\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU0sTUFBTSxRQUFRLEtBQVIsQ0FBWjtBQUNBLElBQU0sT0FBTyxRQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFJLFlBQVksT0FBTyxPQUF2Qjs7O0FBR0EsVUFBVSxRQUFWLEdBQXFCLGdCQUFZLEtBQVosRUFBbUIsT0FBbkIsRUFBK0I7QUFBQSxNQUE1QixLQUE0QixRQUE1QixLQUE0Qjs7QUFDbEQsVUFBUSxTQUFTLEVBQWpCO0FBQ0EsU0FBTyxHQUFQLGtCQUNJLENBQUMsTUFBTSxNQUFQLEdBQWdCLFVBQVUsUUFBVixDQUFtQixLQUFuQixDQUFoQixHQUE0QyxNQUFNLEdBQU4sQ0FBVSxVQUFDLElBQUQsRUFBVTs7OztBQUloRSxRQUFJLE9BQU8sS0FBSyxRQUFMLENBQWMsS0FBSyxJQUFuQixDQUFYO0FBQ0EsV0FBTyxLQUFLLE9BQUwsQ0FBYSxvQkFBYixFQUFtQyxFQUFuQyxDQUFQO0FBQ0EsV0FBTyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLEVBQXJCLENBQVA7O0FBRUEsUUFBSSxRQUFRLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBWjtBQUNBLFFBQUksT0FBTyxRQUFRLE9BQVIsR0FBa0IsTUFBTSxLQUFOLENBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsSUFBbEIsQ0FBdUIsR0FBdkIsQ0FBbEIsR0FBZ0QsR0FBaEQsR0FBc0QsTUFBTSxLQUFOLENBQVksQ0FBWixFQUFlLElBQWYsQ0FBb0IsR0FBcEIsQ0FBakU7QUFDQSxXQUFPLEtBQUssT0FBTCxDQUFhLE1BQWIsRUFBcUIsT0FBckIsQ0FBUDs7QUFFQSxXQUFPLEdBQVAsbUJBRW1CLElBRm5CLEVBRTRCLElBRjVCLEVBRzRCLEtBQUssR0FIakMsRUFHeUMsS0FBSyxJQUg5QyxFQUtnQixJQUxoQixFQUt5QixLQUFLLElBTDlCLEVBS3VDLEtBQUssSUFMNUM7QUFPRCxHQW5CNkMsQ0FEaEQ7QUFzQkQsQ0F4QkQ7OztBQTJCQSxVQUFVLFFBQVYsR0FBcUIsVUFBQyxLQUFELEVBQVc7QUFDOUIsU0FBTyxHQUFQLG1CQUNzQixLQUR0QjtBQUdELENBSkQiLCJmaWxlIjoidGVtcGxhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmVsID0gcmVxdWlyZSgnYmVsJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5sZXQgdGVtcGxhdGVzID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8vIFRlbXBsYXRlc1xudGVtcGxhdGVzLnRlbXBsYXRlID0gKHsgaXRlbXMgfSwgcXVlcnksIG9wdGlvbnMpID0+IHtcbiAgaXRlbXMgPSBpdGVtcyB8fCBbXTtcbiAgcmV0dXJuIGJlbGA8c2VjdGlvbiBjbGFzcz1cImpzLXJlc3VsdFwiPlxuICAgICR7IWl0ZW1zLmxlbmd0aCA/IHRlbXBsYXRlcy5ub1Jlc3VsdChxdWVyeSkgOiBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcblxuICAgICAgLy8gVGFrZSBjYXJlIG9mIEpla3lsbCBwYXR0ZXJuc1xuICAgICAgLy8gdG9kbzogbWFrZSBpdCBjb25maWd1cmFibGUsIGltcGwuIHRoaXMgYXMgZGVmYXVsdFxuICAgICAgbGV0IG5hbWUgPSBwYXRoLmJhc2VuYW1lKGl0ZW0ubmFtZSlcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcZHs0fS1cXGRcXGQ/LVxcZFxcZD8tLywgJycpO1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvXFwubWQvLCAnJylcblxuICAgICAgbGV0IHBhcnRzID0gaXRlbS5uYW1lLnNwbGl0KCctJylcbiAgICAgIGxldCBocmVmID0gb3B0aW9ucy5iYXNlVVJMICsgcGFydHMuc2xpY2UoMCwgMykuam9pbignLycpICsgJy8nICsgcGFydHMuc2xpY2UoMykuam9pbignLScpXG4gICAgICBocmVmID0gaHJlZi5yZXBsYWNlKC9cXC5tZC8sICcuaHRtbCcpXG5cbiAgICAgIHJldHVybiBiZWxgPGRpdiBjbGFzcz1cImdwb3MtaXRlbVwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGgzPjxhIGhyZWY9XCIke2hyZWZ9XCI+JHtuYW1lfTwvYT48L2gzPlxuICAgICAgICAgIDxhIGNsYXNzPVwicmVwb1wiIGhyZWY9XCIke2l0ZW0udXJsfVwiPiR7aXRlbS5wYXRofTwvYT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxwPjxhIGhyZWY9XCIke2hyZWZ9XCI+JHtpdGVtLm5hbWV9ICgke2l0ZW0ucGF0aH0pPC9hPjwvcD5cbiAgICAgIDwvZGl2PmA7XG4gICAgfSl9XG4gIDwvc2VjdGlvbj5gO1xufTtcblxuLy8gTm8gcmVzdWx0IHRlbXBsYXRlIGhlbHBlclxudGVtcGxhdGVzLm5vUmVzdWx0ID0gKHF1ZXJ5KSA9PiB7XG4gIHJldHVybiBiZWxgPGRpdiBjbGFzcz1cImdwb3MtaXRlbVwiPlxuICAgIDxwPk5vIHJlc3VsdHMgZm9yICR7cXVlcnl9PC9wPlxuICA8L2Rpdj5gO1xufTtcblxuIl19",
    "deps": {
      "path": 20,
      "bel": 7
    },
    "hash": "7618b0c70a884d02b1330574bb73708b"
  },
  "7": {
    "id": 7,
    "index": 7,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\bel\\index.js",
    "source": "var document = require('global/document')\nvar hyperx = require('hyperx')\n\nvar SVGNS = 'http://www.w3.org/2000/svg'\nvar BOOL_PROPS = {\n  autofocus: 1,\n  checked: 1,\n  defaultchecked: 1,\n  disabled: 1,\n  formnovalidate: 1,\n  indeterminate: 1,\n  readonly: 1,\n  required: 1,\n  willvalidate: 1\n}\nvar SVG_TAGS = [\n  'svg',\n  'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',\n  'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile',\n  'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',\n  'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting',\n  'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB',\n  'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode',\n  'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting',\n  'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face',\n  'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri',\n  'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line',\n  'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath',\n  'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',\n  'set', 'stop', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref',\n  'tspan', 'use', 'view', 'vkern'\n]\n\nfunction belCreateElement (tag, props, children) {\n  var el\n\n  // If an svg tag, it needs a namespace\n  if (SVG_TAGS.indexOf(tag) !== -1) {\n    props.namespace = SVGNS\n  }\n\n  // If we are using a namespace\n  var ns = false\n  if (props.namespace) {\n    ns = props.namespace\n    delete props.namespace\n  }\n\n  // Create the element\n  if (ns) {\n    el = document.createElementNS(ns, tag)\n  } else {\n    el = document.createElement(tag)\n  }\n\n  // Create the properties\n  for (var p in props) {\n    if (props.hasOwnProperty(p)) {\n      var key = p.toLowerCase()\n      var val = props[p]\n      // Normalize className\n      if (key === 'classname') {\n        key = 'class'\n        p = 'class'\n      }\n      // If a property is boolean, set itself to the key\n      if (BOOL_PROPS[key]) {\n        if (val === 'true') val = key\n        else if (val === 'false') continue\n      }\n      // If a property prefers being set directly vs setAttribute\n      if (key.slice(0, 2) === 'on') {\n        el[p] = val\n      } else {\n        if (ns) {\n          el.setAttributeNS(null, p, val)\n        } else {\n          el.setAttribute(p, val)\n        }\n      }\n    }\n  }\n\n  function appendChild (childs) {\n    if (!Array.isArray(childs)) return\n    for (var i = 0; i < childs.length; i++) {\n      var node = childs[i]\n      if (Array.isArray(node)) {\n        appendChild(node)\n        continue\n      }\n\n      if (typeof node === 'number' ||\n        typeof node === 'boolean' ||\n        node instanceof Date ||\n        node instanceof RegExp) {\n        node = node.toString()\n      }\n\n      if (typeof node === 'string') {\n        if (el.lastChild && el.lastChild.nodeName === '#text') {\n          el.lastChild.nodeValue += node\n          continue\n        }\n        node = document.createTextNode(node)\n      }\n\n      if (node && node.nodeType) {\n        el.appendChild(node)\n      }\n    }\n  }\n  appendChild(children)\n\n  return el\n}\n\nmodule.exports = hyperx(belCreateElement)\nmodule.exports.createElement = belCreateElement\n",
    "deps": {
      "global/document": 10,
      "hyperx": 12
    },
    "hash": "776332ba27b68f9c813cbe2416ae6170"
  },
  "8": {
    "id": 8,
    "index": 8,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\browser-resolve\\empty.js",
    "source": "",
    "deps": {},
    "hash": "d41d8cd98f00b204e9800998ecf8427e"
  },
  "9": {
    "id": 9,
    "index": 9,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\browserify-css\\browser.js",
    "source": "'use strict';\n// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.\n\nmodule.exports = {\n    // Create a <link> tag with optional data attributes\n    createLink: function(href, attributes) {\n        var head = document.head || document.getElementsByTagName('head')[0];\n        var link = document.createElement('link');\n\n        link.href = href;\n        link.rel = 'stylesheet';\n\n        for (var key in attributes) {\n            if ( ! attributes.hasOwnProperty(key)) {\n                continue;\n            }\n            var value = attributes[key];\n            link.setAttribute('data-' + key, value);\n        }\n\n        head.appendChild(link);\n    },\n    // Create a <style> tag with optional data attributes\n    createStyle: function(cssText, attributes) {\n        var head = document.head || document.getElementsByTagName('head')[0],\n            style = document.createElement('style');\n\n        style.type = 'text/css';\n\n        for (var key in attributes) {\n            if ( ! attributes.hasOwnProperty(key)) {\n                continue;\n            }\n            var value = attributes[key];\n            style.setAttribute('data-' + key, value);\n        }\n        \n        if (style.sheet) { // for jsdom and IE9+\n            style.innerHTML = cssText;\n            style.sheet.cssText = cssText;\n            head.appendChild(style);\n        } else if (style.styleSheet) { // for IE8 and below\n            head.appendChild(style);\n            style.styleSheet.cssText = cssText;\n        } else { // for Chrome, Firefox, and Safari\n            style.appendChild(document.createTextNode(cssText));\n            head.appendChild(style);\n        }\n    }\n};\n",
    "deps": {},
    "hash": "9acb842cb9228cfb58677b2351877ba8"
  },
  "10": {
    "id": 10,
    "index": 10,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\global\\document.js",
    "source": "(function (global){\nvar topLevel = typeof global !== 'undefined' ? global :\n    typeof window !== 'undefined' ? window : {}\nvar minDoc = require('min-document');\n\nif (typeof document !== 'undefined') {\n    module.exports = document;\n} else {\n    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];\n\n    if (!doccy) {\n        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;\n    }\n\n    module.exports = doccy;\n}\n\n}).call(this,typeof global !== \"undefined\" ? global : typeof self !== \"undefined\" ? self : typeof window !== \"undefined\" ? window : {})",
    "deps": {
      "min-document": 8
    },
    "hash": "76f1876c6f97b2233e5d7752115a1f4e"
  },
  "11": {
    "id": 11,
    "index": 11,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\hyperscript-attribute-to-property\\index.js",
    "source": "module.exports = attributeToProperty\n\nvar transform = {\n  'class': 'className',\n  'for': 'htmlFor',\n  'http-equiv': 'httpEquiv'\n}\n\nfunction attributeToProperty (h) {\n  return function (tagName, attrs, children) {\n    for (var attr in attrs) {\n      if (attr in transform) {\n        attrs[transform[attr]] = attrs[attr]\n        delete attrs[attr]\n      }\n    }\n    return h(tagName, attrs, children)\n  }\n}\n",
    "deps": {},
    "hash": "105070d847f757ce896560f9d83f9a2f"
  },
  "12": {
    "id": 12,
    "index": 12,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\hyperx\\index.js",
    "source": "var attrToProp = require('hyperscript-attribute-to-property')\n\nvar VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4\nvar ATTR_KEY = 5, ATTR_KEY_W = 6\nvar ATTR_VALUE_W = 7, ATTR_VALUE = 8\nvar ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10\nvar ATTR_EQ = 11, ATTR_BREAK = 12\n\nmodule.exports = function (h, opts) {\n  h = attrToProp(h)\n  if (!opts) opts = {}\n  var concat = opts.concat || function (a, b) {\n    return String(a) + String(b)\n  }\n\n  return function (strings) {\n    var state = TEXT, reg = ''\n    var arglen = arguments.length\n    var parts = []\n\n    for (var i = 0; i < strings.length; i++) {\n      if (i < arglen - 1) {\n        var arg = arguments[i+1]\n        var p = parse(strings[i])\n        var xstate = state\n        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE\n        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE\n        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE\n        if (xstate === ATTR) xstate = ATTR_KEY\n        p.push([ VAR, xstate, arg ])\n        parts.push.apply(parts, p)\n      } else parts.push.apply(parts, parse(strings[i]))\n    }\n\n    var tree = [null,{},[]]\n    var stack = [[tree,-1]]\n    for (var i = 0; i < parts.length; i++) {\n      var cur = stack[stack.length-1][0]\n      var p = parts[i], s = p[0]\n      if (s === OPEN && /^\\//.test(p[1])) {\n        var ix = stack[stack.length-1][1]\n        if (stack.length > 1) {\n          stack.pop()\n          stack[stack.length-1][0][2][ix] = h(\n            cur[0], cur[1], cur[2].length ? cur[2] : undefined\n          )\n        }\n      } else if (s === OPEN) {\n        var c = [p[1],{},[]]\n        cur[2].push(c)\n        stack.push([c,cur[2].length-1])\n      } else if (s === ATTR_KEY || (s === VAR && p[1] === ATTR_KEY)) {\n        var key = ''\n        var copyKey\n        for (; i < parts.length; i++) {\n          if (parts[i][0] === ATTR_KEY) {\n            key = concat(key, parts[i][1])\n          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {\n            if (typeof parts[i][2] === 'object' && !key) {\n              for (copyKey in parts[i][2]) {\n                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {\n                  cur[1][copyKey] = parts[i][2][copyKey]\n                }\n              }\n            } else {\n              key = concat(key, parts[i][2])\n            }\n          } else break\n        }\n        if (parts[i][0] === ATTR_EQ) i++\n        var j = i\n        for (; i < parts.length; i++) {\n          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {\n            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1])\n            else cur[1][key] = concat(cur[1][key], parts[i][1])\n          } else if (parts[i][0] === VAR\n          && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {\n            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2])\n            else cur[1][key] = concat(cur[1][key], parts[i][2])\n          } else {\n            if (key.length && !cur[1][key] && i === j\n            && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {\n              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes\n              // empty string is falsy, not well behaved value in browser\n              cur[1][key] = key.toLowerCase()\n            }\n            break\n          }\n        }\n      } else if (s === ATTR_KEY) {\n        cur[1][p[1]] = true\n      } else if (s === VAR && p[1] === ATTR_KEY) {\n        cur[1][p[2]] = true\n      } else if (s === CLOSE) {\n        if (selfClosing(cur[0]) && stack.length) {\n          var ix = stack[stack.length-1][1]\n          stack.pop()\n          stack[stack.length-1][0][2][ix] = h(\n            cur[0], cur[1], cur[2].length ? cur[2] : undefined\n          )\n        }\n      } else if (s === VAR && p[1] === TEXT) {\n        if (p[2] === undefined || p[2] === null) p[2] = ''\n        else if (!p[2]) p[2] = concat('', p[2])\n        if (Array.isArray(p[2][0])) {\n          cur[2].push.apply(cur[2], p[2])\n        } else {\n          cur[2].push(p[2])\n        }\n      } else if (s === TEXT) {\n        cur[2].push(p[1])\n      } else if (s === ATTR_EQ || s === ATTR_BREAK) {\n        // no-op\n      } else {\n        throw new Error('unhandled: ' + s)\n      }\n    }\n\n    if (tree[2].length > 1 && /^\\s*$/.test(tree[2][0])) {\n      tree[2].shift()\n    }\n\n    if (tree[2].length > 2\n    || (tree[2].length === 2 && /\\S/.test(tree[2][1]))) {\n      throw new Error(\n        'multiple root elements must be wrapped in an enclosing tag'\n      )\n    }\n    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string'\n    && Array.isArray(tree[2][0][2])) {\n      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2])\n    }\n    return tree[2][0]\n\n    function parse (str) {\n      var res = []\n      if (state === ATTR_VALUE_W) state = ATTR\n      for (var i = 0; i < str.length; i++) {\n        var c = str.charAt(i)\n        if (state === TEXT && c === '<') {\n          if (reg.length) res.push([TEXT, reg])\n          reg = ''\n          state = OPEN\n        } else if (c === '>' && !quot(state)) {\n          if (state === OPEN) {\n            res.push([OPEN,reg])\n          } else if (state === ATTR_KEY) {\n            res.push([ATTR_KEY,reg])\n          } else if (state === ATTR_VALUE && reg.length) {\n            res.push([ATTR_VALUE,reg])\n          }\n          res.push([CLOSE])\n          reg = ''\n          state = TEXT\n        } else if (state === TEXT) {\n          reg += c\n        } else if (state === OPEN && /\\s/.test(c)) {\n          res.push([OPEN, reg])\n          reg = ''\n          state = ATTR\n        } else if (state === OPEN) {\n          reg += c\n        } else if (state === ATTR && /[\\w-]/.test(c)) {\n          state = ATTR_KEY\n          reg = c\n        } else if (state === ATTR && /\\s/.test(c)) {\n          if (reg.length) res.push([ATTR_KEY,reg])\n          res.push([ATTR_BREAK])\n        } else if (state === ATTR_KEY && /\\s/.test(c)) {\n          res.push([ATTR_KEY,reg])\n          reg = ''\n          state = ATTR_KEY_W\n        } else if (state === ATTR_KEY && c === '=') {\n          res.push([ATTR_KEY,reg],[ATTR_EQ])\n          reg = ''\n          state = ATTR_VALUE_W\n        } else if (state === ATTR_KEY) {\n          reg += c\n        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {\n          res.push([ATTR_EQ])\n          state = ATTR_VALUE_W\n        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\\s/.test(c)) {\n          res.push([ATTR_BREAK])\n          if (/[\\w-]/.test(c)) {\n            reg += c\n            state = ATTR_KEY\n          } else state = ATTR\n        } else if (state === ATTR_VALUE_W && c === '\"') {\n          state = ATTR_VALUE_DQ\n        } else if (state === ATTR_VALUE_W && c === \"'\") {\n          state = ATTR_VALUE_SQ\n        } else if (state === ATTR_VALUE_DQ && c === '\"') {\n          res.push([ATTR_VALUE,reg],[ATTR_BREAK])\n          reg = ''\n          state = ATTR\n        } else if (state === ATTR_VALUE_SQ && c === \"'\") {\n          res.push([ATTR_VALUE,reg],[ATTR_BREAK])\n          reg = ''\n          state = ATTR\n        } else if (state === ATTR_VALUE_W && !/\\s/.test(c)) {\n          state = ATTR_VALUE\n          i--\n        } else if (state === ATTR_VALUE && /\\s/.test(c)) {\n          res.push([ATTR_BREAK],[ATTR_VALUE,reg])\n          reg = ''\n          state = ATTR\n        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ\n        || state === ATTR_VALUE_DQ) {\n          reg += c\n        }\n      }\n      if (state === TEXT && reg.length) {\n        res.push([TEXT,reg])\n        reg = ''\n      } else if (state === ATTR_VALUE && reg.length) {\n        res.push([ATTR_VALUE,reg])\n        reg = ''\n      } else if (state === ATTR_VALUE_DQ && reg.length) {\n        res.push([ATTR_VALUE,reg])\n        reg = ''\n      } else if (state === ATTR_VALUE_SQ && reg.length) {\n        res.push([ATTR_VALUE,reg])\n        reg = ''\n      } else if (state === ATTR_KEY) {\n        res.push([ATTR_KEY,reg])\n        reg = ''\n      }\n      return res\n    }\n  }\n\n  function strfn (x) {\n    if (typeof x === 'function') return x\n    else if (typeof x === 'string') return x\n    else if (x && typeof x === 'object') return x\n    else return concat('', x)\n  }\n}\n\nfunction quot (state) {\n  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ\n}\n\nvar hasOwn = Object.prototype.hasOwnProperty\nfunction has (obj, key) { return hasOwn.call(obj, key) }\n\nvar closeRE = RegExp('^(' + [\n  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',\n  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',\n  'source', 'track', 'wbr',\n  // SVG TAGS\n  'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse',\n  'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite',\n  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',\n  'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',\n  'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology',\n  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',\n  'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri',\n  'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath',\n  'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view',\n  'vkern'\n].join('|') + ')(?:[\\.#][a-zA-Z0-9\\u007F-\\uFFFF_:-]+)*$')\nfunction selfClosing (tag) { return closeRE.test(tag) }\n",
    "deps": {
      "hyperscript-attribute-to-property": 11
    },
    "hash": "407e5f7378482e5b249661bd8ed50af1"
  },
  "13": {
    "id": 13,
    "index": 13,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\livereactload\\client.js",
    "source": "\nmodule.exports = require(\"./lib/client/main.js\")\n",
    "deps": {
      "./lib/client/main.js": 16
    },
    "hash": "e497cd554968c27200a06c783e327db6"
  },
  "14": {
    "id": 14,
    "index": 14,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\livereactload\\lib\\client\\console.js",
    "source": "Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.info = info;\nexports.warn = warn;\nexports.error = error;\n\nfunction info(msg) {\n  console.info(\"LiveReactload ::\", msg);\n}\n\nfunction warn(msg) {\n  console.warn(\"LiveReactload ::\", msg);\n}\n\nfunction error(msg) {\n  console.error(\"LiveReactload ::\", msg);\n}",
    "deps": {},
    "hash": "11513f6385ea1806391ce619957ad341"
  },
  "15": {
    "id": 15,
    "index": 15,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\livereactload\\lib\\client\\handleChange.js",
    "source": "Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = handleChanges;\n\nvar _reloadUtils = require(\"./reloadUtils\");\n\nvar _console = require(\"./console\");\n\nvar _common = require(\"../common\");\n\nfunction handleChanges(scope$$, _ref) {\n  var newModules = _ref.modules;\n  var newEntryId = _ref.entryId;\n  var modules = scope$$.modules;\n  var __require = scope$$.require;\n\n  var modulesToReload = (0, _reloadUtils.diff)(modules, newModules, newEntryId);\n  (0, _reloadUtils.patchMetaData)(scope$$, newModules);\n\n  if (modulesToReload.length === 0) {\n    (0, _console.info)(\"Nothing to patch\");\n    return;\n  }\n\n  var patch = modulesToReload.map(function (mod) {\n    return {\n      id: mod.id,\n      changed: mod.changed,\n      file: mod.file,\n      source: mod.source,\n      parents: mod.parents.map(Number),\n      isNew: mod.isNew\n    };\n  });\n\n  var propagationGuards = {};\n  patch.forEach(function (_ref2) {\n    var id = _ref2.id;\n    var changed = _ref2.changed;\n    var parents = _ref2.parents;\n\n    propagationGuards[id] = (propagationGuards[id] || 0) + (changed ? 1 : 0);\n    parents.forEach(function (p) {\n      return propagationGuards[p] = (propagationGuards[p] || 0) + 1;\n    });\n  });\n\n  (0, _console.info)(\"Apply patch\");\n  try {\n    patch.forEach(function (_ref3) {\n      var id = _ref3.id;\n      var file = _ref3.file;\n      var parents = _ref3.parents;\n      var isNew = _ref3.isNew;\n\n      if (propagationGuards[id] > 0) {\n        if (isNew) {\n          console.log(\" > Add new module  ::\", file);\n        } else {\n          console.log(\" > Patch module    ::\", file);\n        }\n\n        var reloadedExports = undefined,\n            accepted = false;\n        try {\n          // ATTENTION: must use scope object because it has been mutated during \"pathMetaData\"\n          delete scope$$.exports[id];\n          scope$$.modules[id].__inited = false;\n          reloadedExports = __require.__byId(id, true);\n        } catch (e) {\n          if (e.accepted) {\n            console.log(\" > Manually accepted\");\n            accepted = true;\n          } else {\n            console.error(e);\n            (0, _console.warn)(\"Abort patching\");\n            throw { aborted: true };\n          }\n        }\n\n        if (!isNew && (accepted || isStoppable(reloadedExports || {}))) {\n          preventPropagation(parents);\n        }\n      } else {\n        // this will prevent propagation to ancestor files\n        preventPropagation(parents);\n      }\n    });\n    (0, _console.info)(\"Patching complete\");\n  } catch (e) {\n    if (!e.aborted) {\n      console.error(e);\n    }\n  }\n\n  function preventPropagation(parents) {\n    parents.forEach(function (p) {\n      var parent = (0, _common.find)(patch, function (_ref4) {\n        var id = _ref4.id;\n        return id === p;\n      });\n      if (parent) {\n        propagationGuards[parent.id]--;\n      }\n    });\n  }\n}\n\nfunction isStoppable(exports) {\n  if (isProxied(exports)) {\n    return true;\n  } else if ((0, _common.isPlainObj)(exports)) {\n    return !!(0, _common.find)((0, _common.values)(exports), isProxied);\n  }\n  return false;\n}\n\nfunction isProxied(o) {\n  return o && !!o.__reactPatchProxy;\n}\nmodule.exports = exports[\"default\"];",
    "deps": {
      "./console": 14,
      "../common": 19,
      "./reloadUtils": 17
    },
    "hash": "26f36cba73d9f428180e9229d05604b1"
  },
  "16": {
    "id": 16,
    "index": 16,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\livereactload\\lib\\client\\main.js",
    "source": "function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _startClient = require(\"./startClient\");\n\nvar _startClient2 = _interopRequireDefault(_startClient);\n\nvar _handleChange = require(\"./handleChange\");\n\nvar _handleChange2 = _interopRequireDefault(_handleChange);\n\nvar _console = require(\"./console\");\n\nmodule.exports = function client(opts) {\n  var start = arguments.length <= 1 || arguments[1] === undefined ? _startClient2[\"default\"] : arguments[1];\n\n  var scope$$ = window.__livereactload$$;\n  scope$$.options = opts;\n  start(scope$$, {\n    change: function change(msg) {\n      (0, _console.info)(\"Bundle changed\");\n      (0, _handleChange2[\"default\"])(scope$$, msg.data);\n    },\n    bundle_error: function bundle_error(msg) {\n      (0, _console.error)(msg.data.error);\n    }\n  });\n};",
    "deps": {
      "./console": 14,
      "./startClient": 18,
      "./handleChange": 15
    },
    "hash": "2ca69629fb81079d237678ec528fcd20"
  },
  "17": {
    "id": 17,
    "index": 17,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\livereactload\\lib\\client\\reloadUtils.js",
    "source": "Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; })();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.patchMetaData = patchMetaData;\nexports.diff = diff;\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }\n\nvar _common = require(\"../common\");\n\nfunction patchMetaData(scope$$, newModules) {\n  var modules = scope$$.modules;\n  var exports = scope$$.exports;\n\n  var oldModulesByFile = {};\n  (0, _common.values)(modules).forEach(function (mod) {\n    return oldModulesByFile[mod.file] = mod;\n  });\n\n  var rearrangedExports = {};\n  (0, _common.keys)(newModules).forEach(function (id) {\n    var oldModule = oldModulesByFile[newModules[id].file];\n    if (oldModule) {\n      rearrangedExports[id] = exports[oldModule.id];\n      newModules[id].__inited = true;\n    }\n  });\n\n  scope$$.exports = rearrangedExports;\n  scope$$.modules = newModules;\n  scope$$.initModules();\n}\n\nfunction diff(modules, newModules, newEntryId) {\n  var oldModulesByFile = {};\n  (0, _common.values)(modules).forEach(function (mod) {\n    return oldModulesByFile[mod.file] = mod;\n  });\n\n  var changedModules = (0, _common.values)(newModules).filter(function (_ref) {\n    var entry = _ref.entry;\n    var file = _ref.file;\n    var hash = _ref.hash;\n\n    return !oldModulesByFile[file] || oldModulesByFile[file].hash !== hash;\n  });\n\n  // resolve reverse dependencies so that we can calculate\n  // weights for correct reloading order\n  var dependencies = {};\n  function resolveDeps(mod) {\n    var deps = (0, _common.values)(mod.deps);\n    dependencies[mod.id] = deps;\n    deps.forEach(function (d) {\n      if (!dependencies[d] && newModules[d]) resolveDeps(newModules[d]);\n    });\n  }\n  resolveDeps(newModules[newEntryId]);\n\n  var parents = {};\n  (0, _common.pairs)(dependencies).forEach(function (_ref2) {\n    var _ref22 = _slicedToArray(_ref2, 2);\n\n    var id = _ref22[0];\n    var deps = _ref22[1];\n\n    deps.forEach(function (d) {\n      return parents[d] = [id].concat(_toConsumableArray(parents[d] || []));\n    });\n  });\n\n  // idea behind weighting: each file has initial weight = 1\n  // each file gets also the sum of its dependency weights\n  // finally files are sorted by weight => smaller ones must\n  // be reloaded before their dependants (bigger weights)\n  var weights = {};\n  var hasChanged = {};\n  changedModules.forEach(function (_ref3) {\n    var id = _ref3.id;\n\n    hasChanged[id] = true;\n    addWeightsStartingFrom(id, weights, parents);\n  });\n\n  var modulesToReload = (0, _common.sortBy)((0, _common.pairs)(weights), function (_ref4) {\n    var _ref42 = _slicedToArray(_ref4, 2);\n\n    var _ = _ref42[0];\n    var weight = _ref42[1];\n    return weight;\n  }).map(function (_ref5) {\n    var _ref52 = _slicedToArray(_ref5, 1);\n\n    var id = _ref52[0];\n    return newModules[id];\n  }).filter(function (module) {\n    return !!module && !module.entry;\n  }).map(function (module) {\n    return _extends({}, module, {\n      changed: !!hasChanged[module.id],\n      parents: parents[module.id] || [],\n      isNew: !oldModulesByFile[module.file]\n    });\n  });\n\n  return modulesToReload;\n\n  function addWeightsStartingFrom(id, weights, parents) {\n    var visited = {};\n    weightRecur(id, 1);\n    function weightRecur(id, w) {\n      if (visited[id]) {\n        // prevent circular dependency stack overflow\n        return;\n      }\n      var dependants = parents[id] || [];\n      visited[id] = true;\n      weights[id] = (weights[id] || 0) + w;\n      dependants.forEach(function (d) {\n        return weightRecur(d, weights[id] + 1);\n      });\n    }\n  }\n}",
    "deps": {
      "../common": 19
    },
    "hash": "cb4b5861924f758a3c8fdd9ad2b77f21"
  },
  "18": {
    "id": 18,
    "index": 18,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\livereactload\\lib\\client\\startClient.js",
    "source": "Object.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = startClient;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _ws = require(\"ws\");\n\nvar _ws2 = _interopRequireDefault(_ws);\n\nvar _console = require(\"./console\");\n\nvar noop = function noop() {};\n\nfunction startClient(scope$$, onMsg) {\n  if (!scope$$.ws) {\n    (function () {\n      var url = makeHostUrl(scope$$);\n      (0, _console.info)(\"Connect reload client to \" + url);\n\n      var ws = new _ws2[\"default\"](url);\n      ws.onopen = function () {\n        return (0, _console.info)(\"WebSocket client listening for changes...\");\n      };\n\n      ws.onmessage = function (m) {\n        var msg = JSON.parse(m.data);\n        var res = (onMsg[msg.type] || noop)(msg);\n        if (res) {\n          ws.send(JSON.stringify(res));\n        }\n      };\n\n      scope$$.ws = ws;\n    })();\n  }\n}\n\nfunction makeHostUrl(_ref) {\n  var _ref$options = _ref.options;\n  var host = _ref$options.host;\n  var port = _ref$options.port;\n\n  var protocol = window.location.protocol === \"https:\" ? \"wss\" : \"ws\";\n  return protocol + \"://\" + (host || window.location.hostname) + \":\" + port;\n}\nmodule.exports = exports[\"default\"];",
    "deps": {
      "./console": 14,
      "ws": 22
    },
    "hash": "84ddd03cda4b3420390330721ed6bf3d"
  },
  "19": {
    "id": 19,
    "index": 19,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\livereactload\\lib\\common.js",
    "source": "Object.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports.keys = keys;\nexports.values = values;\nexports.pairs = pairs;\nexports.sortBy = sortBy;\nexports.extend = extend;\nexports.find = find;\nexports.isPlainObj = isPlainObj;\n\nfunction keys(obj) {\n  return Object.keys(obj);\n}\n\nfunction values(obj) {\n  return keys(obj).map(function (k) {\n    return obj[k];\n  });\n}\n\nfunction pairs(obj) {\n  return keys(obj).map(function (k) {\n    return [k, obj[k]];\n  });\n}\n\nfunction sortBy(arr, comp) {\n  return arr.slice().sort(function (a, b) {\n    return comp(a) < comp(b) ? -1 : comp(a) > comp(b) ? 1 : 0;\n  });\n}\n\nfunction extend(dest) {\n  for (var _len = arguments.length, objs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    objs[_key - 1] = arguments[_key];\n  }\n\n  objs.forEach(function (obj) {\n    var o = obj || {};\n    keys(o).forEach(function (k) {\n      if (o.hasOwnProperty(k)) {\n        dest[k] = o[k];\n      }\n    });\n  });\n  return dest;\n}\n\nfunction find(arr, predicate) {\n  var results = (arr || []).filter(predicate);\n  return results.length ? results[0] : undefined;\n}\n\nfunction isPlainObj(o) {\n  return typeof o == 'object' && o.constructor == Object;\n}",
    "deps": {},
    "hash": "2dd5bb1a473ce8ca0c7f8761d262b4fe"
  },
  "20": {
    "id": 20,
    "index": 20,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\path-browserify\\index.js",
    "source": "(function (process){\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// resolves . and .. elements in a path array with directory names there\n// must be no slashes, empty elements, or device names (c:\\) in the array\n// (so also no leading and trailing slashes - it does not distinguish\n// relative and absolute paths)\nfunction normalizeArray(parts, allowAboveRoot) {\n  // if the path tries to go above the root, `up` ends up > 0\n  var up = 0;\n  for (var i = parts.length - 1; i >= 0; i--) {\n    var last = parts[i];\n    if (last === '.') {\n      parts.splice(i, 1);\n    } else if (last === '..') {\n      parts.splice(i, 1);\n      up++;\n    } else if (up) {\n      parts.splice(i, 1);\n      up--;\n    }\n  }\n\n  // if the path is allowed to go above the root, restore leading ..s\n  if (allowAboveRoot) {\n    for (; up--; up) {\n      parts.unshift('..');\n    }\n  }\n\n  return parts;\n}\n\n// Split a filename into [root, dir, basename, ext], unix version\n// 'root' is just a slash, or nothing.\nvar splitPathRe =\n    /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;\nvar splitPath = function(filename) {\n  return splitPathRe.exec(filename).slice(1);\n};\n\n// path.resolve([from ...], to)\n// posix version\nexports.resolve = function() {\n  var resolvedPath = '',\n      resolvedAbsolute = false;\n\n  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\n    var path = (i >= 0) ? arguments[i] : process.cwd();\n\n    // Skip empty and invalid entries\n    if (typeof path !== 'string') {\n      throw new TypeError('Arguments to path.resolve must be strings');\n    } else if (!path) {\n      continue;\n    }\n\n    resolvedPath = path + '/' + resolvedPath;\n    resolvedAbsolute = path.charAt(0) === '/';\n  }\n\n  // At this point the path should be resolved to a full absolute path, but\n  // handle relative paths to be safe (might happen when process.cwd() fails)\n\n  // Normalize the path\n  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {\n    return !!p;\n  }), !resolvedAbsolute).join('/');\n\n  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';\n};\n\n// path.normalize(path)\n// posix version\nexports.normalize = function(path) {\n  var isAbsolute = exports.isAbsolute(path),\n      trailingSlash = substr(path, -1) === '/';\n\n  // Normalize the path\n  path = normalizeArray(filter(path.split('/'), function(p) {\n    return !!p;\n  }), !isAbsolute).join('/');\n\n  if (!path && !isAbsolute) {\n    path = '.';\n  }\n  if (path && trailingSlash) {\n    path += '/';\n  }\n\n  return (isAbsolute ? '/' : '') + path;\n};\n\n// posix version\nexports.isAbsolute = function(path) {\n  return path.charAt(0) === '/';\n};\n\n// posix version\nexports.join = function() {\n  var paths = Array.prototype.slice.call(arguments, 0);\n  return exports.normalize(filter(paths, function(p, index) {\n    if (typeof p !== 'string') {\n      throw new TypeError('Arguments to path.join must be strings');\n    }\n    return p;\n  }).join('/'));\n};\n\n\n// path.relative(from, to)\n// posix version\nexports.relative = function(from, to) {\n  from = exports.resolve(from).substr(1);\n  to = exports.resolve(to).substr(1);\n\n  function trim(arr) {\n    var start = 0;\n    for (; start < arr.length; start++) {\n      if (arr[start] !== '') break;\n    }\n\n    var end = arr.length - 1;\n    for (; end >= 0; end--) {\n      if (arr[end] !== '') break;\n    }\n\n    if (start > end) return [];\n    return arr.slice(start, end - start + 1);\n  }\n\n  var fromParts = trim(from.split('/'));\n  var toParts = trim(to.split('/'));\n\n  var length = Math.min(fromParts.length, toParts.length);\n  var samePartsLength = length;\n  for (var i = 0; i < length; i++) {\n    if (fromParts[i] !== toParts[i]) {\n      samePartsLength = i;\n      break;\n    }\n  }\n\n  var outputParts = [];\n  for (var i = samePartsLength; i < fromParts.length; i++) {\n    outputParts.push('..');\n  }\n\n  outputParts = outputParts.concat(toParts.slice(samePartsLength));\n\n  return outputParts.join('/');\n};\n\nexports.sep = '/';\nexports.delimiter = ':';\n\nexports.dirname = function(path) {\n  var result = splitPath(path),\n      root = result[0],\n      dir = result[1];\n\n  if (!root && !dir) {\n    // No dirname whatsoever\n    return '.';\n  }\n\n  if (dir) {\n    // It has a dirname, strip trailing slash\n    dir = dir.substr(0, dir.length - 1);\n  }\n\n  return root + dir;\n};\n\n\nexports.basename = function(path, ext) {\n  var f = splitPath(path)[2];\n  // TODO: make this comparison case-insensitive on windows?\n  if (ext && f.substr(-1 * ext.length) === ext) {\n    f = f.substr(0, f.length - ext.length);\n  }\n  return f;\n};\n\n\nexports.extname = function(path) {\n  return splitPath(path)[3];\n};\n\nfunction filter (xs, f) {\n    if (xs.filter) return xs.filter(f);\n    var res = [];\n    for (var i = 0; i < xs.length; i++) {\n        if (f(xs[i], i, xs)) res.push(xs[i]);\n    }\n    return res;\n}\n\n// String.prototype.substr - negative index don't work in IE8\nvar substr = 'ab'.substr(-1) === 'b'\n    ? function (str, start, len) { return str.substr(start, len) }\n    : function (str, start, len) {\n        if (start < 0) start = str.length + start;\n        return str.substr(start, len);\n    }\n;\n\n}).call(this,require('_process'))",
    "deps": {
      "_process": 21
    },
    "hash": "8dc2a4c245f9ca30d581be24a9123abc"
  },
  "21": {
    "id": 21,
    "index": 21,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\process\\browser.js",
    "source": "// shim for using process in browser\n\nvar process = module.exports = {};\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = setTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    clearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        setTimeout(drainQueue, 0);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n",
    "deps": {},
    "hash": "b2709d2380a8a17445edd145abda6e06"
  },
  "22": {
    "id": 22,
    "index": 22,
    "file": "C:\\Users\\mk\\src\\mklabs\\gpos\\node_modules\\ws\\lib\\browser.js",
    "source": "\n/**\n * Module dependencies.\n */\n\nvar global = (function() { return this; })();\n\n/**\n * WebSocket constructor.\n */\n\nvar WebSocket = global.WebSocket || global.MozWebSocket;\n\n/**\n * Module exports.\n */\n\nmodule.exports = WebSocket ? ws : null;\n\n/**\n * WebSocket constructor.\n *\n * The third `opts` options object gets ignored in web browsers, since it's\n * non-standard, and throws a TypeError if passed to the constructor.\n * See: https://github.com/einaros/ws/issues/227\n *\n * @param {String} uri\n * @param {Array} protocols (optional)\n * @param {Object) opts (optional)\n * @api public\n */\n\nfunction ws(uri, protocols, opts) {\n  var instance;\n  if (protocols) {\n    instance = new WebSocket(uri, protocols);\n  } else {\n    instance = new WebSocket(uri);\n  }\n  return instance;\n}\n\nif (WebSocket) ws.prototype = WebSocket.prototype;\n",
    "deps": {},
    "hash": "1e2bdb9308fb7f3575a514332777131f"
  }
}, 1);