// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\icon-close.svg":[["icon-close.1add023a.svg","images/icon-close.svg"],"images/icon-close.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/gallery-data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
  description: "Hokkaido Flower"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
  description: "Container Haulage Freight"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
  description: "Aerial Beach View"
}, {
  preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
  original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
  description: "Flower Blooms"
}, {
  preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
  original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
  description: "Alpine Mountains"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
  description: "Mountain Lake Sailing"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
  description: "Alpine Spring Meadows"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
  description: "Nature Landscape"
}, {
  preview: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
  original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
  description: "Lighthouse Coast Sea"
}];
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("./css/styles.css");

var _galleryData = _interopRequireDefault(require("./js/gallery-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==================== 📌 MAIN PART ====================
var galleryListRef = document.querySelector('.js-gallery');
var lightboxRef = document.querySelector('.js-lightbox');
var lightboxCloseBtnRef = lightboxRef.querySelector('button[data-action="close-lightbox"]');
var lightboxImgRef = lightboxRef.querySelector('img');
var lightboxOverlayRef = lightboxRef.querySelector('div[data-action="close-lightbox"]');
renderGalleryToEnd(_galleryData.default);
var currentGalleryImgRef = null;
galleryListRef.addEventListener('click', onGalleryListClick);
lightboxCloseBtnRef.addEventListener('click', closeLightbox);
lightboxOverlayRef.addEventListener('click', closeLightbox); // ==================== 📌 GALLERY FUNCTIONS ====================

function generateGalleryMarkup(galleryDataArr) {
  return galleryDataArr.reduce(function (markupAcc, _ref) {
    var preview = _ref.preview,
        original = _ref.original,
        description = _ref.description;
    return markupAcc + "<li class=\"gallery__item\">\n        <a class=\"gallery__link\" href=\"".concat(original, "\">\n          <img class=\"gallery__image\" src=\"").concat(preview, "\" data-source=\"").concat(original, "\" alt=\"").concat(description, "\"/>\n        </a>\n      </li>");
  }, '');
}

function renderGalleryToEnd(galleryDataArr) {
  galleryListRef.insertAdjacentHTML('beforeend', generateGalleryMarkup(galleryDataArr));
}

function onGalleryListClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) return;
  setCurrentGalleryImg({
    ref: e.target
  });
  openLightboxWithCurrent();
}

function setCurrentGalleryImg(_ref2) {
  var sibling = _ref2.sibling,
      ref = _ref2.ref;

  if (ref.nodeName === 'IMG') {
    // if (ref?.nodeName === 'IMG') {
    currentGalleryImgRef = ref;
    return true;
  }

  var siblingProp = '';

  switch (sibling) {
    case 'next':
      siblingProp = 'nextElementSibling';
      break;

    case 'prev':
      siblingProp = 'previousElementSibling';
      break;

    default:
      return false;
  }

  var newGalleryImgRef = currentGalleryImgRef.closest('.gallery__item')[siblingProp].querySelector('.gallery__image'); // ?.closest('.gallery__item')
  // ?.[siblingProp]?.querySelector('.gallery__image');

  if (!newGalleryImgRef) return false;
  currentGalleryImgRef = newGalleryImgRef;
  return true;
} // ==================== 📌 LIGHTBOX FUNCTIONS ====================


function setLightboxImgCurrent() {
  lightboxImgRef.src = currentGalleryImgRef.dataset.source;
  lightboxImgRef.alt = currentGalleryImgRef.alt;
}

function clearLightboxImg() {
  lightboxImgRef.src = '';
  lightboxImgRef.alt = '';
}

function openLightboxWithCurrent() {
  setLightboxImgCurrent();
  window.addEventListener('keydown', onLightboxKeyDown);
  lightboxRef.classList.add('is-open');
}

function closeLightbox() {
  lightboxRef.classList.remove('is-open');
  window.removeEventListener('keydown', onLightboxKeyDown);
  clearLightboxImg();
}

function onLightboxKeyDown(e) {
  var ESC_KEY_CODE = 'Escape';
  var ARROW_LEFT_KEY_CODE = 'ArrowLeft';
  var ARROW_RIGHT_KEY_CODE = 'ArrowRight';

  switch (e.code) {
    case ESC_KEY_CODE:
      closeLightbox();
      break;

    case ARROW_LEFT_KEY_CODE:
      if (setCurrentGalleryImg({
        sibling: 'prev'
      })) setLightboxImgCurrent();
      break;

    case ARROW_RIGHT_KEY_CODE:
      if (setCurrentGalleryImg({
        sibling: 'next'
      })) setLightboxImgCurrent();
      break;
  }
}
},{"./css/styles.css":"css/styles.css","./js/gallery-data":"js/gallery-data.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62360" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map