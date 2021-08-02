// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"main.js":[function(require,module,exports) {
var pre = document.querySelector('pre');
var style = document.querySelector('style');

var string = '\n/* \u5148\u753B\u4E2A\u76AE\u80A4 */\n.skin {\n    width: 100%;\n    height: 50%;\n    background: #FEE433;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n}\n\n/* \u518D\u753B\u773C\u775B */\n.eye {\n    width: 50px;\n    height: 50px;\n    background: #2E2E2E;\n    border: 2px solid #000;\n    border-radius: 50%;\n    position: absolute;\n    top: 80px;\n}\n.eye::after {\n    content: "";\n    display: block;\n    width: 24px;\n    height: 24px;\n    background: #fff;\n    border: 2px solid #000;\n    border-radius: 50%;\n    position: absolute;\n    left: 6px;\n    top: -1px;\n}\n.eye-left {\n    right: 50%;\n    margin-right: 90px;\n}\n.eye-right {\n    left: 50%;\n    margin-left: 90px;\n}\n\n/* \u518D\u753B\u9F3B\u5B50 */\n.nose {\n    border-style: solid;\n    border-width: 12px;\n    border-color: #000 transparent transparent transparent;\n    border-radius: 11px;\n    position: absolute;\n    left: 50%;\n    top: 120px;\n    transform: translateX(-50%);\n}\n.nose:hover {\n    animation: wave .3s linear infinite;\n}\n@keyframes wave {\n    0% { transform: translateX(-50%) rotate(0); }\n    25% { transform: translateX(-50%) rotate(5deg); }\n    50% { transform: translateX(-50%) rotate(0); }\n    75% { transform: translateX(-50%) rotate(-5deg); }\n    100% { transform: translateX(-50%) rotate(0); }\n}\n\n/* \u518D\u753B\u8138\u86CB */\n.face {\n    width: 68px;\n    height: 68px;\n    background: #FC0D1C;\n    border: 2px solid #000;\n    border-radius: 50%;\n    position: absolute;\n    top: 160px;\n}\n.face-left {\n    right: 50%;\n    margin-right: 110px;\n}\n.face-right {\n    left: 50%;\n    margin-left: 110px;\n}\n\n/* \u518D\u753B\u5634\u5507 */\n.mouth {\n    width: 200px;\n    height: 110px;\n    position: absolute;\n    left: 50%;\n    top: 150px;\n    transform: translateX(-50%);\n    overflow: hidden;\n}\n.mouth > .lip-up {\n    width: 80px;\n    height: 25px;\n    background: #FDE348;\n    border: 2px solid black;\n    border-top: none;\n    position: absolute;\n    top: -8px;\n}\n.mouth > .lip-up:nth-of-type(2) {\n    border-right: none;\n    border-bottom-left-radius: 40px 25px;\n    transform: rotate(-20deg);\n    left: 18px;\n}\n.mouth > .lip-up:nth-of-type(3) {\n    border-left: none;\n    border-bottom-right-radius: 40px 25px;\n    transform: rotate(20deg);\n    right: 18px;\n}\n.mouth > .lip-down {\n    width: 200px;\n    height: 3500px;\n    border: 2px solid #000;\n    border-radius: 200px/2000px;\n    background: #990513;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    overflow: hidden;\n}\n.mouth > .lip-down::after {\n    content: "";\n    display: block;\n    width: 100px;\n    height: 100px;\n    background: #FC4A62;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    bottom: -20px;\n    transform: translateX(-50%);\n}\n';
var n = 0;

var timer = setInterval(function () {
    if (n >= string.length) {
        clearInterval(timer);
        return;
    }
    n += 1;
    pre.innerText = string.substr(0, n);
    style.innerHTML = string.substr(0, n);

    pre.scrollTop = pre.scrollHeight;
}, 0);
},{}],"C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '11567' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.757a221b.map