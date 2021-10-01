// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"g1Gfc":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "339fa845bcfa8452";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7ZSs6":[function(require,module,exports) {
var _engine = require("./engine");
var _statsService = require("./stats-service");
var _highlightConfig = require("./config/highlight-config");
var _worldConfig = require("./config/world-config");
const fps = 60;
const worldEngine = new _engine.Engine('world-canvas', _worldConfig.WORLD_CONFIG);
const highlightEngine = new _engine.Engine('highlight-canvas', _highlightConfig.HIGHLIGHT_CONFIG);
const statsService = new _statsService.StatsService();
const reproductionDnaInput = document.getElementById("reproduction-dna-input");
const initialDnaInput = document.getElementById("initial-dna-input");
setInterval(()=>{
    worldEngine.tick();
    highlightEngine.forceSetAllDNAInExistence(worldEngine.reproductionDNA);
    highlightEngine.tick();
    statsService.updateStats(worldEngine);
    reproductionDnaInput.value = worldEngine.reproductionDNA;
}, 1);
// reset World when clicking reset
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", ()=>{
    worldEngine.setReproductionDna(initialDnaInput.value);
    worldEngine.reset();
});
// set value of config input elements and update config when changing values
const inputElements = document.getElementsByClassName("input-setting");
for(let i = 0; i < inputElements.length; i++){
    const element = inputElements.item(i);
    const configName = element.id.split("config-input-")[1];
    element.value = _worldConfig.WORLD_CONFIG[configName];
    element.addEventListener("input", (event)=>{
        _worldConfig.WORLD_CONFIG[configName] = event.target.value;
        _highlightConfig.HIGHLIGHT_CONFIG[configName] = event.target.value;
        _highlightConfig.HIGHLIGHT_CONFIG["maxOrganisms"] = 1; // make sure we always keep maxOrganisms=1 for highlight
    });
}

},{"./engine":"k3bnj","./stats-service":"5iWvf","./config/highlight-config":"gV6q7","./config/world-config":"jyAwJ"}],"k3bnj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Engine", ()=>Engine
);
var _organism = require("./organism");
var _world = require("./world");
var _stats = require("./stats");
var _dnaCreator = require("./dna-creator");
class Engine {
    constructor(canvasId, config){
        this.config = config;
        this.world = new _world.World(this.config.mapWidth, this.config.mapHeight);
        this.stats = new _stats.Stats();
        const canvas = document.getElementById(canvasId);
        this.context = this.initContext(canvas);
    }
    initContext(canvas) {
        let context = canvas.getContext("2d");
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        return context;
    }
    drawOrganisms() {
        this.world.organisms.forEach((organism)=>{
            const opacity = 1 - organism.hunger / this.config.maxHunger;
            this.context.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
            this.context.fillRect(organism.xPos - 1, organism.yPos - 1, 3, 3);
        });
    }
    drawFood() {
        this.context.fillStyle = 'rgba(100, 255, 100)';
        this.world.foodPositions.forEach((food)=>{
            this.context.fillRect(food.x, food.y, 1, 1);
        });
    }
    killTooHungryOrganisms() {
        this.world.organisms = this.world.organisms.filter((organism)=>organism.hunger < this.config.maxHunger
        );
    }
    drawOldestOrganismHighlight() {
        if (this.stats.oldestOrganism) {
            const opacity = 1 - this.stats.oldestOrganism.hunger / this.config.maxHunger;
            this.context.fillStyle = "rgba(255, 0, 0, " + opacity + ")";
            this.context.fillRect(this.stats.oldestOrganism.xPos - 2, this.stats.oldestOrganism.yPos - 2, 5, 5);
        }
    }
    makeOrganismsLiveOneTick() {
        this.stats.oldestOrganismAgeLiving = 0;
        this.world.organisms.forEach((organism)=>{
            organism.move();
            organism.eatNearbyFood();
        });
    }
    letOrganismsEatIfAtFood() {
        this.world.organisms.forEach((organism)=>{
            organism.eatNearbyFood();
        });
    }
    updateStats() {
        this.stats.oldestOrganismAgeLiving = 0;
        this.world.organisms.forEach((organism)=>{
            if (organism.age > this.stats.oldestOrganismAgeLiving) this.stats.oldestOrganismAgeLiving = organism.age;
            if (organism.age > this.stats.oldestOrganismAgeEver) this.stats.oldestOrganismAgeEver = organism.age;
        });
    }
    updateReproductionDNAIfBetterExists() {
        this.stats.oldestOrganismAgeLiving = 0;
        this.world.organisms.forEach((organism)=>{
            if (organism.age > this.stats.oldestOrganismAgeEver) this.reproductionDNA = organism.dna;
        });
    }
    redraw() {
        this.clearCanvas();
        this.drawFood();
        this.drawOrganisms();
        this.drawOldestOrganismHighlight();
    }
    clearCanvas() {
        this.context.clearRect(0, 0, this.config.mapWidth, this.config.mapHeight);
    }
    spawnOrganismsIfNeeded() {
        while(this.world.organisms.length < this.config.maxOrganisms){
            const dna = _dnaCreator.DNACreator.createDNA(this.reproductionDNA, this.config);
            const organism = new _organism.Organism(this.config, this.world, dna);
            this.world.organisms.push(organism);
        }
    }
    createFoodIfNeeded() {
        while(this.world.foodPositions.length < this.config.maxFood){
            const x = Math.floor(Math.random() * this.config.mapWidth);
            const y = Math.floor(Math.random() * this.config.mapHeight);
            if (!this.world.foodMap[x][y]) {
                this.world.foodPositions.push({
                    x,
                    y
                });
                this.world.foodMap[x][y] = true;
            }
        }
        while(this.world.foodPositions.length > this.config.maxFood){
            const food = this.world.foodPositions.pop();
            this.world.foodMap[food.x][food.y] = false;
        }
    }
    tick() {
        this.spawnOrganismsIfNeeded();
        this.createFoodIfNeeded();
        this.makeOrganismsLiveOneTick();
        this.letOrganismsEatIfAtFood();
        this.killTooHungryOrganisms();
        this.updateReproductionDNAIfBetterExists();
        this.updateStats();
        this.redraw();
    }
    setReproductionDna(reproductionDNA) {
        this.reproductionDNA = reproductionDNA;
    }
    reset() {
        this.stats = new _stats.Stats();
        this.world.reset();
    }
    forceSetAllDNAInExistence(dna) {
        this.reproductionDNA = dna;
        this.world.forceSetAllDNAInExistence(dna);
    }
}

},{"./organism":"1vwT8","./world":"8xwi1","./stats":"9mNnc","./dna-creator":"cG1FT","@parcel/transformer-js/src/esmodule-helpers.js":"62GnO"}],"1vwT8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Organism", ()=>Organism
);
class Organism {
    dna = '';
    age = 0;
    hunger = 0;
    programCounter = 0;
    lastWallHit = 0;
    constructor(config, world, dna){
        this.config = config;
        this.world = world;
        this.dna = dna;
        this.xPos = Math.floor(Math.random() * config.mapWidth);
        this.yPos = Math.floor(Math.random() * config.mapHeight);
    }
    move() {
        this.hunger++;
        this.age++;
        this.programCounter = 0;
        while(this.programCounter < this.dna.length)this.processInstruction();
    }
    processInstruction() {
        if (this.programCounter >= this.dna.length) return;
        switch(this.dna[this.programCounter]){
            case '0':
                this.programCounter++;
                this.processMove();
                return;
            case '1':
                this.programCounter++;
                this.processIfThen();
                return;
            case '2':
                this.programCounter++;
                this.processLeap();
                return;
            case '3':
                this.programCounter++;
                return;
            default:
                this.programCounter++;
        }
    }
    processLeap() {
        const num = this.processInteger(3); // 4^3 = 64
        this.programCounter += num;
    }
    processIfThen() {
        if (this.programCounter >= this.dna.length) return;
        // number of instructions to leap forward if else condition is met
        const jumpForwardElse = this.processInteger(3); // max value = 4^3 = 64
        if (this.processPredicate()) this.processInstruction();
        else this.programCounter += jumpForwardElse;
    }
    processPredicate() {
        if (this.programCounter >= this.dna.length) return false;
        switch(this.dna[this.programCounter]){
            case '0':
                this.programCounter++;
                return this.processFoodVisiblePredicate();
            case '1':
                this.programCounter++;
                return this.processRandomPredicate();
            case '2':
                this.programCounter++;
                return this.processLastHitWallPredicate();
            case '3':
                this.programCounter++;
                return this.processFoodVisiblePredicate();
        }
    }
    processRandomPredicate() {
        if (this.programCounter >= this.dna.length) return false;
        switch(this.dna[this.programCounter]){
            case '0':
                this.programCounter++;
                return Math.random() < 0.5;
            case '1':
                this.programCounter++;
                return Math.random() < 0.25;
            case '2':
                this.programCounter++;
                return Math.random() < 0.125;
            case '3':
                this.programCounter++;
                return Math.random() < 0.0625;
        }
    }
    processLastHitWallPredicate() {
        if (this.programCounter >= this.dna.length) return false;
        switch(this.dna[this.programCounter]){
            case '0':
                this.programCounter++;
                return this.lastWallHit === 1;
            case '1':
                this.programCounter++;
                return this.lastWallHit === 2;
            case '2':
                this.programCounter++;
                return this.lastWallHit === 3;
            case '3':
                this.programCounter++;
                return this.lastWallHit === 4;
        }
    }
    processFoodVisiblePredicate() {
        if (this.programCounter >= this.dna.length) return false;
        const lineOfSight = this.config.lineOfSight;
        switch(this.dna[this.programCounter]){
            case '0':
                this.programCounter++;
                for(let i = 1; i <= lineOfSight; i++){
                    if (this.xPos - i > 0 && this.world.foodMap[this.xPos - i][this.yPos]) return true;
                }
                break;
            case '1':
                this.programCounter++;
                for(let i1 = 1; i1 <= lineOfSight; i1++){
                    if (this.xPos + i1 < this.config.mapWidth && this.world.foodMap[this.xPos + i1][this.yPos]) return true;
                }
                break;
            case '2':
                this.programCounter++;
                for(let i2 = 1; i2 <= lineOfSight; i2++){
                    if (this.yPos - i2 > 0 && this.world.foodMap[this.xPos][this.yPos - i2]) return true;
                }
                break;
            case '3':
                this.programCounter++;
                for(let i3 = 1; i3 <= lineOfSight; i3++){
                    if (this.yPos + i3 < this.config.mapHeight && this.world.foodMap[this.xPos][this.yPos + i3]) return true;
                }
                break;
        }
    }
    processInteger(dnaLength) {
        let val = 0;
        for(let i = 0; i < dnaLength; i++){
            if (this.programCounter >= this.dna.length) return val;
            switch(this.dna[this.programCounter]){
                // no case '0' sine that means adding 0, which would do nothing
                case '1':
                    val += Math.pow(4, i);
                    break;
                case '2':
                    val += 2 * Math.pow(4, i);
                    break;
                case '3':
                    val += 3 * Math.pow(4, i);
                    break;
            }
            this.programCounter++;
        }
        return val;
    }
    processMove() {
        if (this.programCounter >= this.dna.length) return;
        switch(this.dna[this.programCounter]){
            case '0':
                this.xPos++;
                this.programCounter++;
                break;
            case '1':
                this.xPos--;
                this.programCounter++;
                break;
            case '2':
                this.yPos++;
                this.programCounter++;
                break;
            case '3':
                this.yPos--;
                this.programCounter++;
                break;
        }
        if (this.xPos < 0) {
            this.xPos = 0;
            this.lastWallHit = 1;
        }
        if (this.xPos >= this.config.mapWidth) {
            this.xPos = this.config.mapWidth - 1;
            this.lastWallHit = 2;
        }
        if (this.yPos < 0) {
            this.yPos = 0;
            this.lastWallHit = 3;
        }
        if (this.yPos >= this.config.mapHeight) {
            this.yPos = this.config.mapHeight - 1;
            this.lastWallHit = 4;
        }
        this.programCounter = 999999999; // hack to not allow doing anything after a move instruction
    }
    eatNearbyFood() {
        if (this.world.removeFoodIfPresent(this.xPos, this.yPos)) this.hunger = 0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"62GnO"}],"62GnO":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8xwi1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "World", ()=>World
);
class World {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.reset();
    }
    initEmptyFoodMap(width, height) {
        for(let i = 0; i < width; i++){
            const row = [];
            this.foodMap.push(row);
            for(let j = 0; j < height; j++)row.push(false);
        }
    }
    removeFoodIfPresent(xPos, yPos) {
        if (this.foodMap[xPos][yPos]) {
            this.foodPositions = this.foodPositions.filter((position)=>position.x !== xPos || position.y !== yPos
            );
            this.foodMap[xPos][yPos] = false;
            return true;
        }
        return false;
    }
    reset() {
        this.organisms = [];
        this.foodMap = [];
        this.foodPositions = [];
        this.initEmptyFoodMap(this.width, this.height);
    }
    forceSetAllDNAInExistence(dna) {
        this.organisms.forEach((o)=>o.dna = dna
        );
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"62GnO"}],"9mNnc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Stats", ()=>Stats
);
class Stats {
    oldestOrganismAgeEver = 0;
    oldestOrganismAgeLiving = 0;
    oldestOrganism = null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"62GnO"}],"cG1FT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DNACreator", ()=>DNACreator
);
class DNACreator {
    static createDNA(parentDNA, config) {
        if (!parentDNA) return this.randomDNA(config);
        let dna = parentDNA;
        while(dna.length < config.dnaLength)dna += "0";
        dna = this.mutateDNA(dna, config);
        if (Math.random() < config.dnaCutAndReplaceRate) dna = this.cutAndReplaceDNA(dna);
        return dna;
    }
    static randomDNA(config) {
        let dna = '';
        for(let i = 0; i < config.dnaLength; i++)dna += Math.floor(Math.random() * 4);
        return dna;
    }
    static mutateDNA(dna, config) {
        let newDNA = '';
        for(let i = 0; i < dna.length; i++)if (Math.random() < config.dnaMutationRate) newDNA += Math.floor(Math.random() * 4);
        else newDNA += dna[i];
        return newDNA;
    }
    static cutAndReplaceDNA(dna) {
        let start = Math.floor(Math.random() * dna.length);
        let end = Math.floor(Math.random() * dna.length);
        if (start > end) {
            const temp = start;
            start = end;
            end = temp;
        }
        let replacement = '';
        for(let i = start; i < end; i++)replacement += '' + Math.floor(Math.random() * 4);
        return dna.substring(0, start) + replacement + dna.substring(end, dna.length);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"62GnO"}],"5iWvf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StatsService", ()=>StatsService
);
class StatsService {
    updateStats(engine) {
        document.getElementById("stat-organisms").innerHTML = engine.world.organisms.length.toString();
        document.getElementById("stat-food").innerHTML = engine.world.foodPositions.length.toString();
        document.getElementById("stat-oldest-ever").innerHTML = engine.stats.oldestOrganismAgeEver.toString();
        document.getElementById("stat-oldest-living").innerHTML = engine.stats.oldestOrganismAgeLiving.toString();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"62GnO"}],"gV6q7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HIGHLIGHT_CONFIG", ()=>HIGHLIGHT_CONFIG
);
const HIGHLIGHT_CONFIG = {
    dnaLength: 1000,
    mapWidth: 256,
    mapHeight: 256,
    maxHunger: 100,
    maxFood: 500,
    maxOrganisms: 1,
    dnaMutationRate: 0,
    dnaCutAndReplaceRate: 0,
    lineOfSight: 20
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"62GnO"}],"jyAwJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WORLD_CONFIG", ()=>WORLD_CONFIG
);
const WORLD_CONFIG = {
    dnaLength: 1000,
    mapWidth: 256,
    mapHeight: 256,
    maxHunger: 100,
    maxFood: 500,
    maxOrganisms: 100,
    dnaMutationRate: 0.1,
    dnaCutAndReplaceRate: 0.1,
    lineOfSight: 20
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"62GnO"}]},["g1Gfc","7ZSs6"], "7ZSs6", "parcelRequire94c2")

//# sourceMappingURL=index.bcfa8452.js.map
