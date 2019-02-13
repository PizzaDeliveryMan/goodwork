(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/auth/login"],{

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fab': 'brands',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'brands': 'fab'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/;
var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};
function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [{
      tag: 'path',
      attributes: _objectSpread({}, mainPath.attributes, trans.path, {
        fill: 'black'
      })
    }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(nextUniqueId());
  var clipId = "clip-".concat(nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: [maskPath]
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.7.2\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return _byUnicode[prefix][unicode];
}
function byLigature(prefix, ligature) {
  return _byLigature[prefix][ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fab', 'fa'].indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};
function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = WINDOW.requestAnimationFrame || function (op) {
      return op();
    };

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      var width = icon[0];
      var height = icon[1];
      var vectorData = icon.slice(4);
      val = {
        found: true,
        width: width,
        height: height,
        icon: {
          tag: 'path',
          attributes: {
            fill: 'currentColor',
            d: vectorData[0]
          }
        }
      };
      return resolve(val);
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        title: title,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = toArray(root.querySelectorAll(prefixesDomQuery));

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily) {
      var content = styles.getPropertyValue('content');
      var prefix = ~['Light', 'Regular', 'Solid', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var iconName = byUnicode(prefix, toHex(content.length === 3 ? content.substr(1, 1) : content)); // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconName) {
        node.setAttribute(pendingAttribute, iconName);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconName,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function prepIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var vectorData = icon.slice(4);
  return {
    found: true,
    width: width,
    height: height,
    icon: {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData[0]
      }
    }
  };
}

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: "".concat(config.familyPrefix, "-layers")
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/@fortawesome/vue-fontawesome/index.es.js":
/*!***************************************************************!*\
  !*** ./node_modules/@fortawesome/vue-fontawesome/index.es.js ***!
  \***************************************************************/
/*! exports provided: FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIcon", function() { return FontAwesomeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeLayers", function() { return FontAwesomeLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeLayersText", function() { return FontAwesomeLayersText; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");


var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var humps = createCommonjsModule(function (module) {
(function(global) {

  var _processKeys = function(convert, obj, options) {
    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
      return obj;
    }

    var output,
        i = 0,
        l = 0;

    if(_isArray(obj)) {
      output = [];
      for(l=obj.length; i<l; i++) {
        output.push(_processKeys(convert, obj[i], options));
      }
    }
    else {
      output = {};
      for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
          output[convert(key, options)] = _processKeys(convert, obj[key], options);
        }
      }
    }
    return output;
  };

  // String conversion methods

  var separateWords = function(string, options) {
    options = options || {};
    var separator = options.separator || '_';
    var split = options.split || /(?=[A-Z])/;

    return string.split(split).join(separator);
  };

  var camelize = function(string) {
    if (_isNumerical(string)) {
      return string;
    }
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.substr(0, 1).toLowerCase() + string.substr(1);
  };

  var pascalize = function(string) {
    var camelized = camelize(string);
    // Ensure 1st char is always uppercase
    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
  };

  var decamelize = function(string, options) {
    return separateWords(string, options).toLowerCase();
  };

  // Utilities
  // Taken from Underscore.js

  var toString = Object.prototype.toString;

  var _isFunction = function(obj) {
    return typeof(obj) === 'function';
  };
  var _isObject = function(obj) {
    return obj === Object(obj);
  };
  var _isArray = function(obj) {
    return toString.call(obj) == '[object Array]';
  };
  var _isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };
  var _isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };
  var _isBoolean = function(obj) {
    return toString.call(obj) == '[object Boolean]';
  };

  // Performant way to determine if obj coerces to a number
  var _isNumerical = function(obj) {
    obj = obj - 0;
    return obj === obj;
  };

  // Sets up function which handles processing keys
  // allowing the convert function to be modified by a callback
  var _processor = function(convert, options) {
    var callback = options && 'process' in options ? options.process : options;

    if(typeof(callback) !== 'function') {
      return convert;
    }

    return function(string, options) {
      return callback(string, convert, options);
    }
  };

  var humps = {
    camelize: camelize,
    decamelize: decamelize,
    pascalize: pascalize,
    depascalize: decamelize,
    camelizeKeys: function(object, options) {
      return _processKeys(_processor(camelize, options), object);
    },
    decamelizeKeys: function(object, options) {
      return _processKeys(_processor(decamelize, options), object, options);
    },
    pascalizeKeys: function(object, options) {
      return _processKeys(_processor(pascalize, options), object);
    },
    depascalizeKeys: function () {
      return this.decamelizeKeys.apply(this, arguments);
    }
  };

  if (false) {} else if ( true && module.exports) {
    module.exports = humps;
  } else {
    global.humps = humps;
  }

})(commonjsGlobal);
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = humps.camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();

    acc[prop] = value;

    return acc;
  }, {});
}

function classToObject(cls) {
  return cls.split(/\s+/).reduce(function (acc, c) {
    acc[c] = true;

    return acc;
  }, {});
}

function combineClassObjects() {
  for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }

  return objs.reduce(function (acc, obj) {
    if (Array.isArray(obj)) {
      acc = acc.concat(obj);
    } else {
      acc.push(obj);
    }

    return acc;
  }, []);
}

function convert(h, element) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var children = (element.children || []).map(convert.bind(null, h));

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc['class'] = classToObject(val);
        break;
      case 'style':
        acc['style'] = styleToObject(val);
        break;
      default:
        acc.attrs[key] = val;
    }

    return acc;
  }, { 'class': {}, style: {}, attrs: {} });

  var _data$class = data.class,
      dClass = _data$class === undefined ? {} : _data$class,
      _data$style = data.style,
      dStyle = _data$style === undefined ? {} : _data$style,
      _data$attrs = data.attrs,
      dAttrs = _data$attrs === undefined ? {} : _data$attrs,
      remainingData = objectWithoutProperties(data, ['class', 'style', 'attrs']);


  if (typeof element === 'string') {
    return element;
  } else {
    return h(element.tag, _extends({
      class: combineClassObjects(mixins.class, dClass),
      style: _extends({}, mixins.style, dStyle),
      attrs: _extends({}, mixins.attrs, dAttrs)
    }, remainingData, {
      props: props
    }), children);
  }
}

var PRODUCTION = false;

try {
  PRODUCTION = "development" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
}

function classList(props) {
  var _classes;

  var classes = (_classes = {
    'fa-spin': props.spin,
    'fa-pulse': props.pulse,
    'fa-fw': props.fixedWidth,
    'fa-border': props.border,
    'fa-li': props.listItem,
    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
  }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), _classes);

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

function addStaticClass(to, what) {
  var val = (to || '').length === 0 ? [] : [to];

  return val.concat(what).join(' ');
}

function normalizeIconArgs(icon$$1) {
  if (icon$$1 === null) {
    return null;
  }

  if ((typeof icon$$1 === 'undefined' ? 'undefined' : _typeof(icon$$1)) === 'object' && icon$$1.prefix && icon$$1.iconName) {
    return icon$$1;
  }

  if (Array.isArray(icon$$1) && icon$$1.length === 2) {
    return { prefix: icon$$1[0], iconName: icon$$1[1] };
  }

  if (typeof icon$$1 === 'string') {
    return { prefix: 'fas', iconName: icon$$1 };
  }
}

var FontAwesomeIcon = {
  name: 'FontAwesomeIcon',

  functional: true,

  props: {
    border: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['horizontal', 'vertical', 'both'].indexOf(value) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pull: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['right', 'left'].indexOf(value) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: Number,
      default: null,
      validator: function validator(value) {
        return [90, 180, 270].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: false
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    }
  },

  render: function render(createElement, context) {
    var props = context.props;
    var iconArgs = props.icon,
        maskArgs = props.mask,
        symbol = props.symbol,
        title = props.title;

    var icon$$1 = normalizeIconArgs(iconArgs);
    var classes = objectWithKey('classes', classList(props));
    var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(props.transform) : props.transform);
    var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));

    var renderedIcon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["icon"])(icon$$1, _extends({}, classes, transform, mask, { symbol: symbol, title: title }));

    if (!renderedIcon) {
      return log('Could not find one or more icon(s)', icon$$1, mask);
    }

    var abstract = renderedIcon.abstract;

    var convertCurry = convert.bind(null, createElement);

    return convertCurry(abstract[0], {}, context.data);
  }
};

var FontAwesomeLayers = {
  name: 'FontAwesomeLayers',

  functional: true,

  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },

  render: function render(createElement, context) {
    var familyPrefix = _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["config"].familyPrefix;
    var staticClass = context.data.staticClass;


    var classes = [familyPrefix + '-layers'].concat(toConsumableArray(context.props.fixedWidth ? [familyPrefix + '-fw'] : []));

    return createElement('div', _extends({}, context.data, {
      staticClass: addStaticClass(staticClass, classes)
    }), context.children);
  }
};

var FontAwesomeLayersText = {
  name: 'FontAwesomeLayersText',

  functional: true,

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    transform: {
      type: [String, Object],
      default: null
    }
  },

  render: function render(createElement, context) {
    var props = context.props;

    var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(props.transform) : props.transform);

    var renderedText = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["text"])(props.value.toString(), _extends({}, transform));

    var abstract = renderedText.abstract;


    var convertCurry = convert.bind(null, createElement);

    return convertCurry(abstract[0], {}, context.data);
  }
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      token: Laravel.csrfToken,
      errors: errors,
      oldEmail: oldEmail,
      url: url
    };
  }
});

/***/ }),

/***/ "./node_modules/laravel-echo/dist/echo.js":
/*!************************************************!*\
  !*** ./node_modules/laravel-echo/dist/echo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Connector = function () {
    /**
     * Create a new class instance.
     */
    function Connector(options) {
        classCallCheck(this, Connector);

        /**
         * Default connector options.
         */
        this._defaultOptions = {
            auth: {
                headers: {}
            },
            authEndpoint: '/broadcasting/auth',
            broadcaster: 'pusher',
            csrfToken: null,
            host: null,
            key: null,
            namespace: 'App.Events'
        };
        this.setOptions(options);
        this.connect();
    }
    /**
     * Merge the custom options with the defaults.
     */


    createClass(Connector, [{
        key: 'setOptions',
        value: function setOptions(options) {
            this.options = _extends(this._defaultOptions, options);
            if (this.csrfToken()) {
                this.options.auth.headers['X-CSRF-TOKEN'] = this.csrfToken();
            }
            return options;
        }
        /**
         * Extract the CSRF token from the page.
         */

    }, {
        key: 'csrfToken',
        value: function csrfToken() {
            var selector = void 0;
            if (typeof window !== 'undefined' && window['Laravel'] && window['Laravel'].csrfToken) {
                return window['Laravel'].csrfToken;
            } else if (this.options.csrfToken) {
                return this.options.csrfToken;
            } else if (typeof document !== 'undefined' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
                return selector.getAttribute('content');
            }
            return null;
        }
    }]);
    return Connector;
}();

/**
 * This class represents a basic channel.
 */
var Channel = function () {
  function Channel() {
    classCallCheck(this, Channel);
  }

  createClass(Channel, [{
    key: 'listenForWhisper',

    /**
     * Listen for a whisper event on the channel instance.
     */
    value: function listenForWhisper(event, callback) {
      return this.listen('.client-' + event, callback);
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: 'notification',
    value: function notification(callback) {
      return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
    }
  }]);
  return Channel;
}();

/**
 * Event name formatter
 */
var EventFormatter = function () {
    /**
     * Create a new class instance.
     */
    function EventFormatter(namespace) {
        classCallCheck(this, EventFormatter);

        this.setNamespace(namespace);
    }
    /**
     * Format the given event name.
     */


    createClass(EventFormatter, [{
        key: 'format',
        value: function format(event) {
            if (event.charAt(0) === '.' || event.charAt(0) === '\\') {
                return event.substr(1);
            } else if (this.namespace) {
                event = this.namespace + '.' + event;
            }
            return event.replace(/\./g, '\\');
        }
        /**
         * Set the event namespace.
         */

    }, {
        key: 'setNamespace',
        value: function setNamespace(value) {
            this.namespace = value;
        }
    }]);
    return EventFormatter;
}();

/**
 * This class represents a Pusher channel.
 */
var PusherChannel = function (_Channel) {
    inherits(PusherChannel, _Channel);

    /**
     * Create a new class instance.
     */
    function PusherChannel(pusher, name, options) {
        classCallCheck(this, PusherChannel);

        var _this = possibleConstructorReturn(this, (PusherChannel.__proto__ || Object.getPrototypeOf(PusherChannel)).call(this));

        _this.name = name;
        _this.pusher = pusher;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        return _this;
    }
    /**
     * Subscribe to a Pusher channel.
     */


    createClass(PusherChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.subscription = this.pusher.subscribe(this.name);
        }
        /**
         * Unsubscribe from a Pusher channel.
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.pusher.unsubscribe(this.name);
        }
        /**
         * Listen for an event on the channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
        /**
         * Stop listening for an event on the channel instance.
         */

    }, {
        key: 'stopListening',
        value: function stopListening(event) {
            this.subscription.unbind(this.eventFormatter.format(event));
            return this;
        }
        /**
         * Bind a channel to an event.
         */

    }, {
        key: 'on',
        value: function on(event, callback) {
            this.subscription.bind(event, callback);
            return this;
        }
    }]);
    return PusherChannel;
}(Channel);

/**
 * This class represents a Pusher private channel.
 */
var PusherPrivateChannel = function (_PusherChannel) {
    inherits(PusherPrivateChannel, _PusherChannel);

    function PusherPrivateChannel() {
        classCallCheck(this, PusherPrivateChannel);
        return possibleConstructorReturn(this, (PusherPrivateChannel.__proto__ || Object.getPrototypeOf(PusherPrivateChannel)).apply(this, arguments));
    }

    createClass(PusherPrivateChannel, [{
        key: 'whisper',

        /**
         * Trigger client event on the channel.
         */
        value: function whisper(eventName, data) {
            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
            return this;
        }
    }]);
    return PusherPrivateChannel;
}(PusherChannel);

/**
 * This class represents a Pusher presence channel.
 */
var PusherPresenceChannel = function (_PusherChannel) {
    inherits(PusherPresenceChannel, _PusherChannel);

    function PusherPresenceChannel() {
        classCallCheck(this, PusherPresenceChannel);
        return possibleConstructorReturn(this, (PusherPresenceChannel.__proto__ || Object.getPrototypeOf(PusherPresenceChannel)).apply(this, arguments));
    }

    createClass(PusherPresenceChannel, [{
        key: 'here',

        /**
         * Register a callback to be called anytime the member list changes.
         */
        value: function here(callback) {
            this.on('pusher:subscription_succeeded', function (data) {
                callback(Object.keys(data.members).map(function (k) {
                    return data.members[k];
                }));
            });
            return this;
        }
        /**
         * Listen for someone joining the channel.
         */

    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('pusher:member_added', function (member) {
                callback(member.info);
            });
            return this;
        }
        /**
         * Listen for someone leaving the channel.
         */

    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('pusher:member_removed', function (member) {
                callback(member.info);
            });
            return this;
        }
        /**
         * Trigger client event on the channel.
         */

    }, {
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
            return this;
        }
    }]);
    return PusherPresenceChannel;
}(PusherChannel);

/**
 * This class represents a Socket.io channel.
 */
var SocketIoChannel = function (_Channel) {
    inherits(SocketIoChannel, _Channel);

    /**
     * Create a new class instance.
     */
    function SocketIoChannel(socket, name, options) {
        classCallCheck(this, SocketIoChannel);

        /**
         * The event callbacks applied to the channel.
         */
        var _this = possibleConstructorReturn(this, (SocketIoChannel.__proto__ || Object.getPrototypeOf(SocketIoChannel)).call(this));

        _this.events = {};
        _this.name = name;
        _this.socket = socket;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        _this.configureReconnector();
        return _this;
    }
    /**
     * Subscribe to a Socket.io channel.
     */


    createClass(SocketIoChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.socket.emit('subscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
        /**
         * Unsubscribe from channel and ubind event callbacks.
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.unbind();
            this.socket.emit('unsubscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
        /**
         * Listen for an event on the channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
        /**
         * Stop listening for an event on the channel instance.
         */

    }, {
        key: 'stopListening',
        value: function stopListening(event) {
            var name = this.eventFormatter.format(event);
            this.socket.removeListener(name);
            delete this.events[name];
            return this;
        }
        /**
         * Bind the channel's socket to an event and store the callback.
         */

    }, {
        key: 'on',
        value: function on(event, callback) {
            var _this2 = this;

            var listener = function listener(channel, data) {
                if (_this2.name == channel) {
                    callback(data);
                }
            };
            this.socket.on(event, listener);
            this.bind(event, listener);
        }
        /**
         * Attach a 'reconnect' listener and bind the event.
         */

    }, {
        key: 'configureReconnector',
        value: function configureReconnector() {
            var _this3 = this;

            var listener = function listener() {
                _this3.subscribe();
            };
            this.socket.on('reconnect', listener);
            this.bind('reconnect', listener);
        }
        /**
         * Bind the channel's socket to an event and store the callback.
         */

    }, {
        key: 'bind',
        value: function bind(event, callback) {
            this.events[event] = this.events[event] || [];
            this.events[event].push(callback);
        }
        /**
         * Unbind the channel's socket from all stored event callbacks.
         */

    }, {
        key: 'unbind',
        value: function unbind() {
            var _this4 = this;

            Object.keys(this.events).forEach(function (event) {
                _this4.events[event].forEach(function (callback) {
                    _this4.socket.removeListener(event, callback);
                });
                delete _this4.events[event];
            });
        }
    }]);
    return SocketIoChannel;
}(Channel);

/**
 * This class represents a Socket.io presence channel.
 */
var SocketIoPrivateChannel = function (_SocketIoChannel) {
    inherits(SocketIoPrivateChannel, _SocketIoChannel);

    function SocketIoPrivateChannel() {
        classCallCheck(this, SocketIoPrivateChannel);
        return possibleConstructorReturn(this, (SocketIoPrivateChannel.__proto__ || Object.getPrototypeOf(SocketIoPrivateChannel)).apply(this, arguments));
    }

    createClass(SocketIoPrivateChannel, [{
        key: 'whisper',

        /**
         * Trigger client event on the channel.
         */
        value: function whisper(eventName, data) {
            this.socket.emit('client event', {
                channel: this.name,
                event: 'client-' + eventName,
                data: data
            });
            return this;
        }
    }]);
    return SocketIoPrivateChannel;
}(SocketIoChannel);

/**
 * This class represents a Socket.io presence channel.
 */
var SocketIoPresenceChannel = function (_SocketIoPrivateChann) {
    inherits(SocketIoPresenceChannel, _SocketIoPrivateChann);

    function SocketIoPresenceChannel() {
        classCallCheck(this, SocketIoPresenceChannel);
        return possibleConstructorReturn(this, (SocketIoPresenceChannel.__proto__ || Object.getPrototypeOf(SocketIoPresenceChannel)).apply(this, arguments));
    }

    createClass(SocketIoPresenceChannel, [{
        key: 'here',

        /**
         * Register a callback to be called anytime the member list changes.
         */
        value: function here(callback) {
            this.on('presence:subscribed', function (members) {
                callback(members.map(function (m) {
                    return m.user_info;
                }));
            });
            return this;
        }
        /**
         * Listen for someone joining the channel.
         */

    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('presence:joining', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
        /**
         * Listen for someone leaving the channel.
         */

    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('presence:leaving', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
    }]);
    return SocketIoPresenceChannel;
}(SocketIoPrivateChannel);

/**
 * This class represents a null channel.
 */
var NullChannel = function (_Channel) {
  inherits(NullChannel, _Channel);

  function NullChannel() {
    classCallCheck(this, NullChannel);
    return possibleConstructorReturn(this, (NullChannel.__proto__ || Object.getPrototypeOf(NullChannel)).apply(this, arguments));
  }

  createClass(NullChannel, [{
    key: 'subscribe',

    /**
     * Subscribe to a channel.
     */
    value: function subscribe() {}
    //

    /**
     * Unsubscribe from a channel.
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {}
    //

    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: 'listen',
    value: function listen(event, callback) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: 'stopListening',
    value: function stopListening(event) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */

  }, {
    key: 'on',
    value: function on(event, callback) {
      return this;
    }
  }]);
  return NullChannel;
}(Channel);

/**
 * This class represents a null private channel.
 */
var NullPrivateChannel = function (_NullChannel) {
  inherits(NullPrivateChannel, _NullChannel);

  function NullPrivateChannel() {
    classCallCheck(this, NullPrivateChannel);
    return possibleConstructorReturn(this, (NullPrivateChannel.__proto__ || Object.getPrototypeOf(NullPrivateChannel)).apply(this, arguments));
  }

  createClass(NullPrivateChannel, [{
    key: 'whisper',

    /**
     * Trigger client event on the channel.
     */
    value: function whisper(eventName, data) {
      return this;
    }
  }]);
  return NullPrivateChannel;
}(NullChannel);

/**
 * This class represents a null presence channel.
 */
var NullPresenceChannel = function (_NullChannel) {
  inherits(NullPresenceChannel, _NullChannel);

  function NullPresenceChannel() {
    classCallCheck(this, NullPresenceChannel);
    return possibleConstructorReturn(this, (NullPresenceChannel.__proto__ || Object.getPrototypeOf(NullPresenceChannel)).apply(this, arguments));
  }

  createClass(NullPresenceChannel, [{
    key: 'here',

    /**
     * Register a callback to be called anytime the member list changes.
     */
    value: function here(callback) {
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: 'joining',
    value: function joining(callback) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: 'leaving',
    value: function leaving(callback) {
      return this;
    }
    /**
     * Trigger client event on the channel.
     */

  }, {
    key: 'whisper',
    value: function whisper(eventName, data) {
      return this;
    }
  }]);
  return NullPresenceChannel;
}(NullChannel);

/**
 * This class creates a connector to Pusher.
 */
var PusherConnector = function (_Connector) {
    inherits(PusherConnector, _Connector);

    function PusherConnector() {
        classCallCheck(this, PusherConnector);

        /**
         * All of the subscribed channel names.
         */
        var _this = possibleConstructorReturn(this, (PusherConnector.__proto__ || Object.getPrototypeOf(PusherConnector)).apply(this, arguments));

        _this.channels = {};
        return _this;
    }
    /**
     * Create a fresh Pusher connection.
     */


    createClass(PusherConnector, [{
        key: 'connect',
        value: function connect() {
            if (typeof this.options.client !== 'undefined') {
                this.pusher = this.options.client;
            } else {
                this.pusher = new Pusher(this.options.key, this.options);
            }
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
        /**
         * Get a channel instance by name.
         */

    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new PusherChannel(this.pusher, name, this.options);
            }
            return this.channels[name];
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name, index) {
                _this2.leaveChannel(name);
            });
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(name) {
            if (this.channels[name]) {
                this.channels[name].unsubscribe();
                delete this.channels[name];
            }
        }
        /**
         * Get the socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.pusher.connection.socket_id;
        }
        /**
         * Disconnect Pusher connection.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.pusher.disconnect();
        }
    }]);
    return PusherConnector;
}(Connector);

/**
 * This class creates a connnector to a Socket.io server.
 */
var SocketIoConnector = function (_Connector) {
    inherits(SocketIoConnector, _Connector);

    function SocketIoConnector() {
        classCallCheck(this, SocketIoConnector);

        /**
         * All of the subscribed channel names.
         */
        var _this = possibleConstructorReturn(this, (SocketIoConnector.__proto__ || Object.getPrototypeOf(SocketIoConnector)).apply(this, arguments));

        _this.channels = {};
        return _this;
    }
    /**
     * Create a fresh Socket.io connection.
     */


    createClass(SocketIoConnector, [{
        key: 'connect',
        value: function connect() {
            var io = this.getSocketIO();
            this.socket = io(this.options.host, this.options);
            return this.socket;
        }
        /**
         * Get socket.io module from global scope or options.
         */

    }, {
        key: 'getSocketIO',
        value: function getSocketIO() {
            if (typeof io !== 'undefined') {
                return io;
            }
            if (typeof this.options.client !== 'undefined') {
                return this.options.client;
            }
            throw new Error('Socket.io client not found. Should be globally available or passed via options.client');
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
        /**
         * Get a channel instance by name.
         */

    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
            }
            return this.channels[name];
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name) {
                _this2.leaveChannel(name);
            });
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(name) {
            if (this.channels[name]) {
                this.channels[name].unsubscribe();
                delete this.channels[name];
            }
        }
        /**
         * Get the socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.socket.id;
        }
        /**
         * Disconnect Socketio connection.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.socket.disconnect();
        }
    }]);
    return SocketIoConnector;
}(Connector);

/**
 * This class creates a null connector.
 */
var NullConnector = function (_Connector) {
  inherits(NullConnector, _Connector);

  function NullConnector() {
    classCallCheck(this, NullConnector);

    /**
     * All of the subscribed channel names.
     */
    var _this = possibleConstructorReturn(this, (NullConnector.__proto__ || Object.getPrototypeOf(NullConnector)).apply(this, arguments));

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh connection.
   */


  createClass(NullConnector, [{
    key: 'connect',
    value: function connect() {}
    //

    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: 'listen',
    value: function listen(name, event, callback) {
      return new NullChannel();
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: 'channel',
    value: function channel(name) {
      return new NullChannel();
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: 'privateChannel',
    value: function privateChannel(name) {
      return new NullPrivateChannel();
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: 'presenceChannel',
    value: function presenceChannel(name) {
      return new NullPresenceChannel();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: 'leave',
    value: function leave(name) {}
    //

    /**
     * Leave the given channel.
     */

  }, {
    key: 'leaveChannel',
    value: function leaveChannel(name) {}
    //

    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: 'socketId',
    value: function socketId() {
      return 'fake-socket-id';
    }
    /**
     * Disconnect the connection.
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      //
    }
  }]);
  return NullConnector;
}(Connector);

/**
 * This class is the primary API for interacting with broadcasting.
 */

var Echo = function () {
    /**
     * Create a new class instance.
     */
    function Echo(options) {
        classCallCheck(this, Echo);

        this.options = options;
        this.connect();
        this.registerInterceptors();
    }
    /**
     * Get a channel instance by name.
     */


    createClass(Echo, [{
        key: 'channel',
        value: function channel(_channel) {
            return this.connector.channel(_channel);
        }
        /**
         * Create a new connection.
         */

    }, {
        key: 'connect',
        value: function connect() {
            if (this.options.broadcaster == 'pusher') {
                this.connector = new PusherConnector(this.options);
            } else if (this.options.broadcaster == 'socket.io') {
                this.connector = new SocketIoConnector(this.options);
            } else if (this.options.broadcaster == 'null') {
                this.connector = new NullConnector(this.options);
            }
        }
        /**
         * Disconnect from the Echo server.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.connector.disconnect();
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'join',
        value: function join(channel) {
            return this.connector.presenceChannel(channel);
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leave',
        value: function leave(channel) {
            this.connector.leave(channel);
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(channel, event, callback) {
            return this.connector.listen(channel, event, callback);
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'private',
        value: function _private(channel) {
            return this.connector.privateChannel(channel);
        }
        /**
         * Get the Socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.connector.socketId();
        }
        /**
         * Register 3rd party request interceptiors. These are used to automatically
         * send a connections socket id to a Laravel app with a X-Socket-Id header.
         */

    }, {
        key: 'registerInterceptors',
        value: function registerInterceptors() {
            if (typeof Vue === 'function' && Vue.http) {
                this.registerVueRequestInterceptor();
            }
            if (typeof axios === 'function') {
                this.registerAxiosRequestInterceptor();
            }
            if (typeof jQuery === 'function') {
                this.registerjQueryAjaxSetup();
            }
        }
        /**
         * Register a Vue HTTP interceptor to add the X-Socket-ID header.
         */

    }, {
        key: 'registerVueRequestInterceptor',
        value: function registerVueRequestInterceptor() {
            var _this = this;

            Vue.http.interceptors.push(function (request, next) {
                if (_this.socketId()) {
                    request.headers.set('X-Socket-ID', _this.socketId());
                }
                next();
            });
        }
        /**
         * Register an Axios HTTP interceptor to add the X-Socket-ID header.
         */

    }, {
        key: 'registerAxiosRequestInterceptor',
        value: function registerAxiosRequestInterceptor() {
            var _this2 = this;

            axios.interceptors.request.use(function (config) {
                if (_this2.socketId()) {
                    config.headers['X-Socket-Id'] = _this2.socketId();
                }
                return config;
            });
        }
        /**
         * Register jQuery AjaxSetup to add the X-Socket-ID header.
         */

    }, {
        key: 'registerjQueryAjaxSetup',
        value: function registerjQueryAjaxSetup() {
            var _this3 = this;

            if (typeof jQuery.ajax != 'undefined') {
                jQuery.ajaxSetup({
                    beforeSend: function beforeSend(xhr) {
                        if (_this3.socketId()) {
                            xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
                        }
                    }
                });
            }
        }
    }]);
    return Echo;
}();

/* harmony default export */ __webpack_exports__["default"] = (Echo);


/***/ }),

/***/ "./node_modules/linkifyjs/html.js":
/*!****************************************!*\
  !*** ./node_modules/linkifyjs/html.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/linkify-html */ "./node_modules/linkifyjs/lib/linkify-html.js").default;


/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify-html.js":
/*!****************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify-html.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = linkifyHtml;

var _simpleHtmlTokenizer = __webpack_require__(/*! ./simple-html-tokenizer */ "./node_modules/linkifyjs/lib/simple-html-tokenizer.js");

var _simpleHtmlTokenizer2 = _interopRequireDefault(_simpleHtmlTokenizer);

var _linkify = __webpack_require__(/*! ./linkify */ "./node_modules/linkifyjs/lib/linkify.js");

var linkify = _interopRequireWildcard(_linkify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = linkify.options;
var Options = options.Options;


var StartTag = 'StartTag';
var EndTag = 'EndTag';
var Chars = 'Chars';
var Comment = 'Comment';

/**
	`tokens` and `token` in this section refer to tokens generated by the HTML
	parser.
*/
function linkifyHtml(str) {
	var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var tokens = _simpleHtmlTokenizer2.default.tokenize(str);
	var linkifiedTokens = [];
	var linkified = [];
	var i;

	opts = new Options(opts);

	// Linkify the tokens given by the parser
	for (i = 0; i < tokens.length; i++) {
		var token = tokens[i];

		if (token.type === StartTag) {
			linkifiedTokens.push(token);

			// Ignore all the contents of ignored tags
			var tagName = token.tagName.toUpperCase();
			var isIgnored = tagName === 'A' || options.contains(opts.ignoreTags, tagName);
			if (!isIgnored) {
				continue;
			}

			var preskipLen = linkifiedTokens.length;
			skipTagTokens(tagName, tokens, ++i, linkifiedTokens);
			i += linkifiedTokens.length - preskipLen - 1;
			continue;
		} else if (token.type !== Chars) {
			// Skip this token, it's not important
			linkifiedTokens.push(token);
			continue;
		}

		// Valid text token, linkify it!
		var linkifedChars = linkifyChars(token.chars, opts);
		linkifiedTokens.push.apply(linkifiedTokens, linkifedChars);
	}

	// Convert the tokens back into a string
	for (i = 0; i < linkifiedTokens.length; i++) {
		var _token = linkifiedTokens[i];
		switch (_token.type) {
			case StartTag:
				{
					var link = '<' + _token.tagName;
					if (_token.attributes.length > 0) {
						var attrs = attrsToStrings(_token.attributes);
						link += ' ' + attrs.join(' ');
					}
					link += '>';
					linkified.push(link);
					break;
				}
			case EndTag:
				linkified.push('</' + _token.tagName + '>');
				break;
			case Chars:
				linkified.push(escapeText(_token.chars));
				break;
			case Comment:
				linkified.push('<!--' + escapeText(_token.chars) + '-->');
				break;
		}
	}

	return linkified.join('');
}

/**
	`tokens` and `token` in this section referes to tokens returned by
	`linkify.tokenize`. `linkified` will contain HTML Parser-style tokens
*/
function linkifyChars(str, opts) {
	var tokens = linkify.tokenize(str);
	var result = [];

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];

		if (token.type === 'nl' && opts.nl2br) {
			result.push({
				type: StartTag,
				tagName: 'br',
				attributes: [],
				selfClosing: true
			});
			continue;
		} else if (!token.isLink || !opts.check(token)) {
			result.push({ type: Chars, chars: token.toString() });
			continue;
		}

		var _opts$resolve = opts.resolve(token),
		    formatted = _opts$resolve.formatted,
		    formattedHref = _opts$resolve.formattedHref,
		    tagName = _opts$resolve.tagName,
		    className = _opts$resolve.className,
		    target = _opts$resolve.target,
		    attributes = _opts$resolve.attributes;

		// Build up attributes


		var attributeArray = [['href', formattedHref]];

		if (className) {
			attributeArray.push(['class', className]);
		}

		if (target) {
			attributeArray.push(['target', target]);
		}

		for (var attr in attributes) {
			attributeArray.push([attr, attributes[attr]]);
		}

		// Add the required tokens
		result.push({
			type: StartTag,
			tagName: tagName,
			attributes: attributeArray,
			selfClosing: false
		});
		result.push({ type: Chars, chars: formatted });
		result.push({ type: EndTag, tagName: tagName });
	}

	return result;
}

/**
	Returns a list of tokens skipped until the closing tag of tagName.

	* `tagName` is the closing tag which will prompt us to stop skipping
	* `tokens` is the array of tokens generated by HTML5Tokenizer which
	* `i` is the index immediately after the opening tag to skip
	* `skippedTokens` is an array which skipped tokens are being pushed into

	Caveats

	* Assumes that i is the first token after the given opening tagName
	* The closing tag will be skipped, but nothing after it
	* Will track whether there is a nested tag of the same type
*/
function skipTagTokens(tagName, tokens, i, skippedTokens) {

	// number of tokens of this type on the [fictional] stack
	var stackCount = 1;

	while (i < tokens.length && stackCount > 0) {
		var token = tokens[i];

		if (token.type === StartTag && token.tagName.toUpperCase() === tagName) {
			// Nested tag of the same type, "add to stack"
			stackCount++;
		} else if (token.type === EndTag && token.tagName.toUpperCase() === tagName) {
			// Closing tag
			stackCount--;
		}

		skippedTokens.push(token);
		i++;
	}

	// Note that if stackCount > 0 here, the HTML is probably invalid
	return skippedTokens;
}

function escapeText(text) {
	// Not required, HTML tokenizer ensures this occurs properly
	return text;
}

function escapeAttr(attr) {
	return attr.replace(/"/g, '&quot;');
}

function attrsToStrings(attrs) {
	var attrStrs = [];
	for (var i = 0; i < attrs.length; i++) {
		var _attrs$i = attrs[i],
		    name = _attrs$i[0],
		    value = _attrs$i[1];

		attrStrs.push(name + '="' + escapeAttr(value) + '"');
	}
	return attrStrs;
}

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify.js":
/*!***********************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.tokenize = exports.test = exports.scanner = exports.parser = exports.options = exports.inherits = exports.find = undefined;

var _class = __webpack_require__(/*! ./linkify/utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

var _options = __webpack_require__(/*! ./linkify/utils/options */ "./node_modules/linkifyjs/lib/linkify/utils/options.js");

var options = _interopRequireWildcard(_options);

var _scanner = __webpack_require__(/*! ./linkify/core/scanner */ "./node_modules/linkifyjs/lib/linkify/core/scanner.js");

var scanner = _interopRequireWildcard(_scanner);

var _parser = __webpack_require__(/*! ./linkify/core/parser */ "./node_modules/linkifyjs/lib/linkify/core/parser.js");

var parser = _interopRequireWildcard(_parser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

if (!Array.isArray) {
	Array.isArray = function (arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

/**
	Converts a string into tokens that represent linkable and non-linkable bits
	@method tokenize
	@param {String} str
	@return {Array} tokens
*/
var tokenize = function tokenize(str) {
	return parser.run(scanner.run(str));
};

/**
	Returns a list of linkable items in the given string.
*/
var find = function find(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	var filtered = [];

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];
		if (token.isLink && (!type || token.type === type)) {
			filtered.push(token.toObject());
		}
	}

	return filtered;
};

/**
	Is the given string valid linkable text of some sort
	Note that this does not trim the text for you.

	Optionally pass in a second `type` param, which is the type of link to test
	for.

	For example,

		test(str, 'email');

	Will return `true` if str is a valid email.
*/
var test = function test(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].type === type);
};

// Scanner and parser provide states and tokens for the lexicographic stage
// (will be used to add additional link types)
exports.find = find;
exports.inherits = _class.inherits;
exports.options = options;
exports.parser = parser;
exports.scanner = scanner;
exports.test = test;
exports.tokenize = tokenize;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/parser.js":
/*!***********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/parser.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(/*! ./state */ "./node_modules/linkifyjs/lib/linkify/core/state.js");

var _multi = __webpack_require__(/*! ./tokens/multi */ "./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js");

var MULTI_TOKENS = _interopRequireWildcard(_multi);

var _text = __webpack_require__(/*! ./tokens/text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	Not exactly parser, more like the second-stage scanner (although we can
	theoretically hotswap the code here with a real parser in the future... but
	for a little URL-finding utility abstract syntax trees may be a little
	overkill).

	URL format: http://en.wikipedia.org/wiki/URI_scheme
	Email format: http://en.wikipedia.org/wiki/Email_address (links to RFC in
	reference)

	@module linkify
	@submodule parser
	@main parser
*/

var makeState = function makeState(tokenClass) {
	return new _state.TokenState(tokenClass);
};

// The universal starting state.
var S_START = makeState();

// Intermediate states for URLs. Note that domains that begin with a protocol
// are treated slighly differently from those that don't.
var S_PROTOCOL = makeState(); // e.g., 'http:'
var S_MAILTO = makeState(); // 'mailto:'
var S_PROTOCOL_SLASH = makeState(); // e.g., '/', 'http:/''
var S_PROTOCOL_SLASH_SLASH = makeState(); // e.g., '//', 'http://'
var S_DOMAIN = makeState(); // parsed string ends with a potential domain name (A)
var S_DOMAIN_DOT = makeState(); // (A) domain followed by DOT
var S_TLD = makeState(_multi.URL); // (A) Simplest possible URL with no query string
var S_TLD_COLON = makeState(); // (A) URL followed by colon (potential port number here)
var S_TLD_PORT = makeState(_multi.URL); // TLD followed by a port number
var S_URL = makeState(_multi.URL); // Long URL with optional port and maybe query string
var S_URL_NON_ACCEPTING = makeState(); // URL followed by some symbols (will not be part of the final URL)
var S_URL_OPENBRACE = makeState(); // URL followed by {
var S_URL_OPENBRACKET = makeState(); // URL followed by [
var S_URL_OPENANGLEBRACKET = makeState(); // URL followed by <
var S_URL_OPENPAREN = makeState(); // URL followed by (
var S_URL_OPENBRACE_Q = makeState(_multi.URL); // URL followed by { and some symbols that the URL can end it
var S_URL_OPENBRACKET_Q = makeState(_multi.URL); // URL followed by [ and some symbols that the URL can end it
var S_URL_OPENANGLEBRACKET_Q = makeState(_multi.URL); // URL followed by < and some symbols that the URL can end it
var S_URL_OPENPAREN_Q = makeState(_multi.URL); // URL followed by ( and some symbols that the URL can end it
var S_URL_OPENBRACE_SYMS = makeState(); // S_URL_OPENBRACE_Q followed by some symbols it cannot end it
var S_URL_OPENBRACKET_SYMS = makeState(); // S_URL_OPENBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENANGLEBRACKET_SYMS = makeState(); // S_URL_OPENANGLEBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENPAREN_SYMS = makeState(); // S_URL_OPENPAREN_Q followed by some symbols it cannot end it
var S_EMAIL_DOMAIN = makeState(); // parsed string starts with local email info + @ with a potential domain name (C)
var S_EMAIL_DOMAIN_DOT = makeState(); // (C) domain followed by DOT
var S_EMAIL = makeState(_multi.EMAIL); // (C) Possible email address (could have more tlds)
var S_EMAIL_COLON = makeState(); // (C) URL followed by colon (potential port number here)
var S_EMAIL_PORT = makeState(_multi.EMAIL); // (C) Email address with a port
var S_MAILTO_EMAIL = makeState(_multi.MAILTOEMAIL); // Email that begins with the mailto prefix (D)
var S_MAILTO_EMAIL_NON_ACCEPTING = makeState(); // (D) Followed by some non-query string chars
var S_LOCALPART = makeState(); // Local part of the email address
var S_LOCALPART_AT = makeState(); // Local part of the email address plus @
var S_LOCALPART_DOT = makeState(); // Local part of the email address plus '.' (localpart cannot end in .)
var S_NL = makeState(_multi.NL); // single new line

// Make path from start to protocol (with '//')
S_START.on(_text.NL, S_NL).on(_text.PROTOCOL, S_PROTOCOL).on(_text.MAILTO, S_MAILTO).on(_text.SLASH, S_PROTOCOL_SLASH);

S_PROTOCOL.on(_text.SLASH, S_PROTOCOL_SLASH);
S_PROTOCOL_SLASH.on(_text.SLASH, S_PROTOCOL_SLASH_SLASH);

// The very first potential domain name
S_START.on(_text.TLD, S_DOMAIN).on(_text.DOMAIN, S_DOMAIN).on(_text.LOCALHOST, S_TLD).on(_text.NUM, S_DOMAIN);

// Force URL for protocol followed by anything sane
S_PROTOCOL_SLASH_SLASH.on(_text.TLD, S_URL).on(_text.DOMAIN, S_URL).on(_text.NUM, S_URL).on(_text.LOCALHOST, S_URL);

// Account for dots and hyphens
// hyphens are usually parts of domain names
S_DOMAIN.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL_DOMAIN.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Hyphen can jump back to a domain name

// After the first domain and a dot, we can find either a URL or another domain
S_DOMAIN_DOT.on(_text.TLD, S_TLD).on(_text.DOMAIN, S_DOMAIN).on(_text.NUM, S_DOMAIN).on(_text.LOCALHOST, S_DOMAIN);

S_EMAIL_DOMAIN_DOT.on(_text.TLD, S_EMAIL).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.NUM, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL_DOMAIN);

// S_TLD accepts! But the URL could be longer, try to find a match greedily
// The `run` function should be able to "rollback" to the accepting state
S_TLD.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Become real URLs after `SLASH` or `COLON NUM SLASH`
// Here PSS and non-PSS converge
S_TLD.on(_text.COLON, S_TLD_COLON).on(_text.SLASH, S_URL);
S_TLD_COLON.on(_text.NUM, S_TLD_PORT);
S_TLD_PORT.on(_text.SLASH, S_URL);
S_EMAIL.on(_text.COLON, S_EMAIL_COLON);
S_EMAIL_COLON.on(_text.NUM, S_EMAIL_PORT);

// Types of characters the URL can definitely end in
var qsAccepting = [_text.DOMAIN, _text.AT, _text.LOCALHOST, _text.NUM, _text.PLUS, _text.POUND, _text.PROTOCOL, _text.SLASH, _text.TLD, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND];

// Types of tokens that can follow a URL and be part of the query string
// but cannot be the very last characters
// Characters that cannot appear in the URL at all should be excluded
var qsNonAccepting = [_text.COLON, _text.DOT, _text.QUERY, _text.PUNCTUATION, _text.CLOSEBRACE, _text.CLOSEBRACKET, _text.CLOSEANGLEBRACKET, _text.CLOSEPAREN, _text.OPENBRACE, _text.OPENBRACKET, _text.OPENANGLEBRACKET, _text.OPENPAREN];

// These states are responsible primarily for determining whether or not to
// include the final round bracket.

// URL, followed by an opening bracket
S_URL.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// URL with extra symbols at the end, followed by an opening bracket
S_URL_NON_ACCEPTING.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// Closing bracket component. This character WILL be included in the URL
S_URL_OPENBRACE.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_Q.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_Q.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_Q.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_Q.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_SYMS.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_SYMS.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_SYMS.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_SYMS.on(_text.CLOSEPAREN, S_URL);

// URL that beings with an opening bracket, followed by a symbols.
// Note that the final state can still be `S_URL_OPENBRACE_Q` (if the URL only
// has a single opening bracket for some reason).
S_URL_OPENBRACE.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// URL that begins with an opening bracket, followed by some symbols
S_URL_OPENBRACE_Q.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_Q.on(qsNonAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsNonAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsNonAccepting, S_URL_OPENPAREN_Q);

S_URL_OPENBRACE_SYMS.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_SYMS.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_SYMS.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_SYMS.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_SYMS.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN_SYMS.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// Account for the query string
S_URL.on(qsAccepting, S_URL);
S_URL_NON_ACCEPTING.on(qsAccepting, S_URL);

S_URL.on(qsNonAccepting, S_URL_NON_ACCEPTING);
S_URL_NON_ACCEPTING.on(qsNonAccepting, S_URL_NON_ACCEPTING);

// Email address-specific state definitions
// Note: We are not allowing '/' in email addresses since this would interfere
// with real URLs

// For addresses with the mailto prefix
// 'mailto:' followed by anything sane is a valid email
S_MAILTO.on(_text.TLD, S_MAILTO_EMAIL).on(_text.DOMAIN, S_MAILTO_EMAIL).on(_text.NUM, S_MAILTO_EMAIL).on(_text.LOCALHOST, S_MAILTO_EMAIL);

// Greedily get more potential valid email values
S_MAILTO_EMAIL.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);
S_MAILTO_EMAIL_NON_ACCEPTING.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);

// For addresses without the mailto prefix
// Tokens allowed in the localpart of the email
var localpartAccepting = [_text.DOMAIN, _text.NUM, _text.PLUS, _text.POUND, _text.QUERY, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND, _text.TLD];

// Some of the tokens in `localpartAccepting` are already accounted for here and
// will not be overwritten (don't worry)
S_DOMAIN.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_TLD.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_DOMAIN_DOT.on(localpartAccepting, S_LOCALPART);

// Okay we're on a localpart. Now what?
// TODO: IP addresses and what if the email starts with numbers?
S_LOCALPART.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT) // close to an email address now
.on(_text.DOT, S_LOCALPART_DOT);
S_LOCALPART_DOT.on(localpartAccepting, S_LOCALPART);
S_LOCALPART_AT.on(_text.TLD, S_EMAIL_DOMAIN).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL);
// States following `@` defined above

var run = function run(tokens) {
	var len = tokens.length;
	var cursor = 0;
	var multis = [];
	var textTokens = [];

	while (cursor < len) {
		var state = S_START;
		var secondState = null;
		var nextState = null;
		var multiLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && !(secondState = state.next(tokens[cursor]))) {
			// Starting tokens with nowhere to jump to.
			// Consider these to be just plain text
			textTokens.push(tokens[cursor++]);
		}

		while (cursor < len && (nextState = secondState || state.next(tokens[cursor]))) {

			// Get the next state
			secondState = null;
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			cursor++;
			multiLength++;
		}

		if (sinceAccepts < 0) {

			// No accepting state was found, part of a regular text token
			// Add all the tokens we looked at to the text tokens array
			for (var i = cursor - multiLength; i < cursor; i++) {
				textTokens.push(tokens[i]);
			}
		} else {

			// Accepting state!

			// First close off the textTokens (if available)
			if (textTokens.length > 0) {
				multis.push(new _multi.TEXT(textTokens));
				textTokens = [];
			}

			// Roll back to the latest accepting state
			cursor -= sinceAccepts;
			multiLength -= sinceAccepts;

			// Create a new multitoken
			var MULTI = latestAccepting.emit();
			multis.push(new MULTI(tokens.slice(cursor - multiLength, cursor)));
		}
	}

	// Finally close off the textTokens (if available)
	if (textTokens.length > 0) {
		multis.push(new _multi.TEXT(textTokens));
	}

	return multis;
};

exports.State = _state.TokenState;
exports.TOKENS = MULTI_TOKENS;
exports.run = run;
exports.start = S_START;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/scanner.js":
/*!************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/scanner.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(/*! ./state */ "./node_modules/linkifyjs/lib/linkify/core/state.js");

var _text = __webpack_require__(/*! ./tokens/text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

var TOKENS = _interopRequireWildcard(_text);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tlds = 'aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|aetna|af|afamilycompany|afl|africa|ag|agakhan|agency|ai|aig|aigo|airbus|airforce|airtel|akdn|al|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao|aol|apartments|app|apple|aq|aquarelle|ar|arab|aramco|archi|army|arpa|art|arte|as|asda|asia|associates|at|athleta|attorney|au|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw|aws|ax|axa|az|azure|ba|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb|bbc|bbt|bbva|bcg|bcn|bd|be|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|ci|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm|dnp|do|docs|doctor|dodge|dog|doha|domains|dot|download|drive|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dvr|dz|earth|eat|ec|eco|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epost|epson|equipment|er|ericsson|erni|es|esq|estate|esurance|et|etisalat|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|george|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glade|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt|gu|guardian|gucci|guge|guide|guitars|guru|gw|gy|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk|hkt|hm|hn|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr|hsbc|ht|htc|hu|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id|ie|ieee|ifm|ikano|il|im|imamat|imdb|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|intel|international|intuit|investments|io|ipiranga|iq|ir|irish|is|iselect|ismaili|ist|istanbul|it|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|je|jeep|jetzt|jewelry|jio|jlc|jll|jm|jmp|jnj|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kindle|kitchen|kiwi|km|kn|koeln|komatsu|kosher|kp|kpmg|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr|ls|lt|ltd|ltda|lu|lundbeck|lupin|luxe|luxury|lv|ly|ma|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc|mckinsey|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|merckmsd|metlife|mg|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk|ml|mlb|mls|mm|mma|mn|mo|mobi|mobile|mobily|moda|moe|moi|mom|monash|money|monster|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|mp|mq|mr|ms|msd|mt|mtn|mtr|mu|museum|mutual|mv|mw|mx|my|mz|na|nab|nadex|nagoya|name|nationwide|natura|navy|nba|nc|ne|nec|net|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nf|nfl|ng|ngo|nhk|ni|nico|nike|nikon|ninja|nissan|nissay|nl|no|nokia|northwesternmutual|norton|now|nowruz|nowtv|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|om|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa|page|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|pccw|pe|pet|pf|pfizer|pg|ph|pharmacy|phd|philips|phone|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pnc|pohl|poker|politie|porn|post|pr|pramerica|praxi|press|prime|pro|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|qvc|racing|radio|raid|re|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|ro|rocher|rocks|rodeo|rogers|room|rs|rsvp|ru|rugby|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sb|sbi|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|sd|se|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg|sh|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|shriram|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl|sling|sm|smart|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|srt|st|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiftcover|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|telecity|telefonica|temasek|tennis|teva|tf|tg|th|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj|tjmaxx|tjx|tk|tkmaxx|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubank|ubs|uconnect|ug|uk|unicom|university|uno|uol|ups|us|uy|uz|va|vacations|vana|vanguard|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vn|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--30rr7y|xn--3bst00m|xn--3ds443g|xn--3e0b707e|xn--3hcrj9c|xn--3oq18vl8pn36a|xn--3pxu8k|xn--42c2d9a|xn--45br5cyl|xn--45brj9c|xn--45q11c|xn--4gbrim|xn--54b7fta0cc|xn--55qw42g|xn--55qx5d|xn--5su34j936bgsg|xn--5tzm5g|xn--6frz82g|xn--6qq986b3xl|xn--80adxhks|xn--80ao21a|xn--80aqecdr1a|xn--80asehdb|xn--80aswg|xn--8y0a063a|xn--90a3ac|xn--90ae|xn--90ais|xn--9dbq2a|xn--9et52u|xn--9krt00a|xn--b4w605ferd|xn--bck1b9a5dre4c|xn--c1avg|xn--c2br7g|xn--cck2b3b|xn--cg4bki|xn--clchc0ea0b2g2a9gcd|xn--czr694b|xn--czrs0t|xn--czru2d|xn--d1acj3b|xn--d1alf|xn--e1a4c|xn--eckvdtc9d|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fhbei|xn--fiq228c5hs|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--fjq720a|xn--flw351e|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--fzys8d69uvgm|xn--g2xx48c|xn--gckr3f0f|xn--gecrj9c|xn--gk3at1e|xn--h2breg3eve|xn--h2brj9c|xn--h2brj9c8c|xn--hxt814e|xn--i1b6b1a6a2e|xn--imr513n|xn--io0a7i|xn--j1aef|xn--j1amh|xn--j6w193g|xn--jlq61u9w7b|xn--jvr189m|xn--kcrx77d1x4a|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--kput3i|xn--l1acc|xn--lgbbat1ad8j|xn--mgb9awbf|xn--mgba3a3ejt|xn--mgba3a4f16a|xn--mgba7c0bbn0a|xn--mgbaakc7dvf|xn--mgbaam7a8h|xn--mgbab2bd|xn--mgbai9azgqp6j|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a|xn--mgbbh1a71e|xn--mgbc0a9azcg|xn--mgbca7dzdo|xn--mgberp4a5d4ar|xn--mgbgu82a|xn--mgbi4ecexp|xn--mgbpl2fh|xn--mgbt3dhd|xn--mgbtx2b|xn--mgbx4cd0ab|xn--mix891f|xn--mk1bu44c|xn--mxtq1m|xn--ngbc5azd|xn--ngbe9e0a|xn--ngbrx|xn--node|xn--nqv7f|xn--nqv7fs00ema|xn--nyqy26a|xn--o3cw4h|xn--ogbpf8fl|xn--p1acf|xn--p1ai|xn--pbt977c|xn--pgbs0dh|xn--pssy2u|xn--q9jyb4c|xn--qcka1pmc|xn--qxam|xn--rhqv96g|xn--rovu88b|xn--rvc1e0am3e|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--tckwe|xn--tiq49xqyj|xn--unup4y|xn--vermgensberater-ctb|xn--vermgensberatung-pwb|xn--vhquv|xn--vuq861b|xn--w4r85el8fhu5dnra|xn--w4rs40l|xn--wgbh1c|xn--wgbl6a|xn--xhq521b|xn--xkc2al3hye2a|xn--xkc2dl3a5ee0h|xn--y9a3aq|xn--yfro4i67o|xn--ygbi2ammx|xn--zfr164b|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|you|youtube|yt|yun|za|zappos|zara|zero|zip|zippo|zm|zone|zuerich|zw'.split('|'); // macro, see gulpfile.js

/**
	The scanner provides an interface that takes a string of text as input, and
	outputs an array of tokens instances that can be used for easy URL parsing.

	@module linkify
	@submodule scanner
	@main scanner
*/

var NUMBERS = '0123456789'.split('');
var ALPHANUM = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
var WHITESPACE = [' ', '\f', '\r', '\t', '\v', '\xA0', '\u1680', '\u180E']; // excluding line breaks

var domainStates = []; // states that jump to DOMAIN on /[a-z0-9]/
var makeState = function makeState(tokenClass) {
	return new _state.CharacterState(tokenClass);
};

// Frequently used states
var S_START = makeState();
var S_NUM = makeState(_text.NUM);
var S_DOMAIN = makeState(_text.DOMAIN);
var S_DOMAIN_HYPHEN = makeState(); // domain followed by 1 or more hyphen characters
var S_WS = makeState(_text.WS);

// States for special URL symbols
S_START.on('@', makeState(_text.AT)).on('.', makeState(_text.DOT)).on('+', makeState(_text.PLUS)).on('#', makeState(_text.POUND)).on('?', makeState(_text.QUERY)).on('/', makeState(_text.SLASH)).on('_', makeState(_text.UNDERSCORE)).on(':', makeState(_text.COLON)).on('{', makeState(_text.OPENBRACE)).on('[', makeState(_text.OPENBRACKET)).on('<', makeState(_text.OPENANGLEBRACKET)).on('(', makeState(_text.OPENPAREN)).on('}', makeState(_text.CLOSEBRACE)).on(']', makeState(_text.CLOSEBRACKET)).on('>', makeState(_text.CLOSEANGLEBRACKET)).on(')', makeState(_text.CLOSEPAREN)).on('&', makeState(_text.AMPERSAND)).on([',', ';', '!', '"', '\''], makeState(_text.PUNCTUATION));

// Whitespace jumps
// Tokens of only non-newline whitespace are arbitrarily long
S_START.on('\n', makeState(_text.NL)).on(WHITESPACE, S_WS);

// If any whitespace except newline, more whitespace!
S_WS.on(WHITESPACE, S_WS);

// Generates states for top-level domains
// Note that this is most accurate when tlds are in alphabetical order
for (var i = 0; i < tlds.length; i++) {
	var newStates = (0, _state.stateify)(tlds[i], S_START, _text.TLD, _text.DOMAIN);
	domainStates.push.apply(domainStates, newStates);
}

// Collect the states generated by different protocls
var partialProtocolFileStates = (0, _state.stateify)('file', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolFtpStates = (0, _state.stateify)('ftp', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolHttpStates = (0, _state.stateify)('http', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolMailtoStates = (0, _state.stateify)('mailto', S_START, _text.DOMAIN, _text.DOMAIN);

// Add the states to the array of DOMAINeric states
domainStates.push.apply(domainStates, partialProtocolFileStates);
domainStates.push.apply(domainStates, partialProtocolFtpStates);
domainStates.push.apply(domainStates, partialProtocolHttpStates);
domainStates.push.apply(domainStates, partialProtocolMailtoStates);

// Protocol states
var S_PROTOCOL_FILE = partialProtocolFileStates.pop();
var S_PROTOCOL_FTP = partialProtocolFtpStates.pop();
var S_PROTOCOL_HTTP = partialProtocolHttpStates.pop();
var S_MAILTO = partialProtocolMailtoStates.pop();
var S_PROTOCOL_SECURE = makeState(_text.DOMAIN);
var S_FULL_PROTOCOL = makeState(_text.PROTOCOL); // Full protocol ends with COLON
var S_FULL_MAILTO = makeState(_text.MAILTO); // Mailto ends with COLON

// Secure protocols (end with 's')
S_PROTOCOL_FTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

S_PROTOCOL_HTTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

domainStates.push(S_PROTOCOL_SECURE);

// Become protocol tokens after a COLON
S_PROTOCOL_FILE.on(':', S_FULL_PROTOCOL);
S_PROTOCOL_SECURE.on(':', S_FULL_PROTOCOL);
S_MAILTO.on(':', S_FULL_MAILTO);

// Localhost
var partialLocalhostStates = (0, _state.stateify)('localhost', S_START, _text.LOCALHOST, _text.DOMAIN);
domainStates.push.apply(domainStates, partialLocalhostStates);

// Everything else
// DOMAINs make more DOMAINs
// Number and character transitions
S_START.on(NUMBERS, S_NUM);
S_NUM.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_NUM).on(ALPHANUM, S_DOMAIN); // number becomes DOMAIN

S_DOMAIN.on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);

// All the generated states should have a jump to DOMAIN
for (var _i = 0; _i < domainStates.length; _i++) {
	domainStates[_i].on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);
}

S_DOMAIN_HYPHEN.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_DOMAIN).on(ALPHANUM, S_DOMAIN);

// Set default transition
S_START.defaultTransition = makeState(_text.SYM);

/**
	Given a string, returns an array of TOKEN instances representing the
	composition of that string.

	@method run
	@param {String} str Input string to scan
	@return {Array} Array of TOKEN instances
*/
var run = function run(str) {

	// The state machine only looks at lowercase strings.
	// This selective `toLowerCase` is used because lowercasing the entire
	// string causes the length and character position to vary in some in some
	// non-English strings. This happens only on V8-based runtimes.
	var lowerStr = str.replace(/[A-Z]/g, function (c) {
		return c.toLowerCase();
	});
	var len = str.length;
	var tokens = []; // return value

	var cursor = 0;

	// Tokenize the string
	while (cursor < len) {
		var state = S_START;
		var nextState = null;
		var tokenLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && (nextState = state.next(lowerStr[cursor]))) {
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			tokenLength++;
			cursor++;
		}

		if (sinceAccepts < 0) {
			continue;
		} // Should never happen

		// Roll back to the latest accepting state
		cursor -= sinceAccepts;
		tokenLength -= sinceAccepts;

		// Get the class for the new token
		var TOKEN = latestAccepting.emit(); // Current token class

		// No more jumps, just make a new token
		tokens.push(new TOKEN(str.substr(cursor - tokenLength, tokenLength)));
	}

	return tokens;
};

var start = S_START;
exports.State = _state.CharacterState;
exports.TOKENS = TOKENS;
exports.run = run;
exports.start = start;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/state.js":
/*!**********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.stateify = exports.TokenState = exports.CharacterState = undefined;

var _class = __webpack_require__(/*! ../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

function createStateClass() {
	return function (tClass) {
		this.j = [];
		this.T = tClass || null;
	};
}

/**
	A simple state machine that can emit token classes

	The `j` property in this class refers to state jumps. It's a
	multidimensional array where for each element:

	* index [0] is a symbol or class of symbols to transition to.
	* index [1] is a State instance which matches

	The type of symbol will depend on the target implementation for this class.
	In Linkify, we have a two-stage scanner. Each stage uses this state machine
	but with a slighly different (polymorphic) implementation.

	The `T` property refers to the token class.

	TODO: Can the `on` and `next` methods be combined?

	@class BaseState
*/
var BaseState = createStateClass();
BaseState.prototype = {
	defaultTransition: false,

	/**
 	@method constructor
 	@param {Class} tClass Pass in the kind of token to emit if there are
 		no jumps after this state and the state is accepting.
 */

	/**
 	On the given symbol(s), this machine should go to the given state
 		@method on
 	@param {Array|Mixed} symbol
 	@param {BaseState} state Note that the type of this state should be the
 		same as the current instance (i.e., don't pass in a different
 		subclass)
 */
	on: function on(symbol, state) {
		if (symbol instanceof Array) {
			for (var i = 0; i < symbol.length; i++) {
				this.j.push([symbol[i], state]);
			}
			return this;
		}
		this.j.push([symbol, state]);
		return this;
	},


	/**
 	Given the next item, returns next state for that item
 	@method next
 	@param {Mixed} item Should be an instance of the symbols handled by
 		this particular machine.
 	@return {State} state Returns false if no jumps are available
 */
	next: function next(item) {
		for (var i = 0; i < this.j.length; i++) {
			var jump = this.j[i];
			var symbol = jump[0]; // Next item to check for
			var state = jump[1]; // State to jump to if items match

			// compare item with symbol
			if (this.test(item, symbol)) {
				return state;
			}
		}

		// Nowhere left to jump!
		return this.defaultTransition;
	},


	/**
 	Does this state accept?
 	`true` only of `this.T` exists
 		@method accepts
 	@return {Boolean}
 */
	accepts: function accepts() {
		return !!this.T;
	},


	/**
 	Determine whether a given item "symbolizes" the symbol, where symbol is
 	a class of items handled by this state machine.
 		This method should be overriden in extended classes.
 		@method test
 	@param {Mixed} item Does this item match the given symbol?
 	@param {Mixed} symbol
 	@return {Boolean}
 */
	test: function test(item, symbol) {
		return item === symbol;
	},


	/**
 	Emit the token for this State (just return it in this case)
 	If this emits a token, this instance is an accepting state
 	@method emit
 	@return {Class} T
 */
	emit: function emit() {
		return this.T;
	}
};

/**
	State machine for string-based input

	@class CharacterState
	@extends BaseState
*/
var CharacterState = (0, _class.inherits)(BaseState, createStateClass(), {
	/**
 	Does the given character match the given character or regular
 	expression?
 		@method test
 	@param {String} char
 	@param {String|RegExp} charOrRegExp
 	@return {Boolean}
 */
	test: function test(character, charOrRegExp) {
		return character === charOrRegExp || charOrRegExp instanceof RegExp && charOrRegExp.test(character);
	}
});

/**
	State machine for input in the form of TextTokens

	@class TokenState
	@extends BaseState
*/
var TokenState = (0, _class.inherits)(BaseState, createStateClass(), {

	/**
  * Similar to `on`, but returns the state the results in the transition from
  * the given item
  * @method jump
  * @param {Mixed} item
  * @param {Token} [token]
  * @return state
  */
	jump: function jump(token) {
		var tClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var state = this.next(new token('')); // dummy temp token
		if (state === this.defaultTransition) {
			// Make a new state!
			state = new this.constructor(tClass);
			this.on(token, state);
		} else if (tClass) {
			state.T = tClass;
		}
		return state;
	},


	/**
 	Is the given token an instance of the given token class?
 		@method test
 	@param {TextToken} token
 	@param {Class} tokenClass
 	@return {Boolean}
 */
	test: function test(token, tokenClass) {
		return token instanceof tokenClass;
	}
});

/**
	Given a non-empty target string, generates states (if required) for each
	consecutive substring of characters in str starting from the beginning of
	the string. The final state will have a special value, as specified in
	options. All other "in between" substrings will have a default end state.

	This turns the state machine into a Trie-like data structure (rather than a
	intelligently-designed DFA).

	Note that I haven't really tried these with any strings other than
	DOMAIN.

	@param {String} str
	@param {CharacterState} start State to jump from the first character
	@param {Class} endToken Token class to emit when the given string has been
		matched and no more jumps exist.
	@param {Class} defaultToken "Filler token", or which token type to emit when
		we don't have a full match
	@return {Array} list of newly-created states
*/
function stateify(str, start, endToken, defaultToken) {
	var i = 0,
	    len = str.length,
	    state = start,
	    newStates = [],
	    nextState = void 0;

	// Find the next state without a jump to the next character
	while (i < len && (nextState = state.next(str[i]))) {
		state = nextState;
		i++;
	}

	if (i >= len) {
		return [];
	} // no new tokens were added

	while (i < len - 1) {
		nextState = new CharacterState(defaultToken);
		newStates.push(nextState);
		state.on(str[i], nextState);
		state = nextState;
		i++;
	}

	nextState = new CharacterState(endToken);
	newStates.push(nextState);
	state.on(str[len - 1], nextState);

	return newStates;
}

exports.CharacterState = CharacterState;
exports.TokenState = TokenState;
exports.stateify = stateify;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js":
/*!******************************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createTokenClass() {
	return function (value) {
		if (value) {
			this.v = value;
		}
	};
}

exports.createTokenClass = createTokenClass;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js":
/*!*****************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.URL = exports.TEXT = exports.NL = exports.EMAIL = exports.MAILTOEMAIL = exports.Base = undefined;

var _createTokenClass = __webpack_require__(/*! ./create-token-class */ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js");

var _class = __webpack_require__(/*! ../../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

var _text = __webpack_require__(/*! ./text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

/******************************************************************************
	Multi-Tokens
	Tokens composed of arrays of TextTokens
******************************************************************************/

// Is the given token a valid domain token?
// Should nums be included here?
function isDomainToken(token) {
	return token instanceof _text.DOMAIN || token instanceof _text.TLD;
}

/**
	Abstract class used for manufacturing tokens of text tokens. That is rather
	than the value for a token being a small string of text, it's value an array
	of text tokens.

	Used for grouping together URLs, emails, hashtags, and other potential
	creations.

	@class MultiToken
	@abstract
*/
var MultiToken = (0, _createTokenClass.createTokenClass)();

MultiToken.prototype = {
	/**
 	String representing the type for this token
 	@property type
 	@default 'TOKEN'
 */
	type: 'token',

	/**
 	Is this multitoken a link?
 	@property isLink
 	@default false
 */
	isLink: false,

	/**
 	Return the string this token represents.
 	@method toString
 	@return {String}
 */
	toString: function toString() {
		var result = [];
		for (var i = 0; i < this.v.length; i++) {
			result.push(this.v[i].toString());
		}
		return result.join('');
	},


	/**
 	What should the value for this token be in the `href` HTML attribute?
 	Returns the `.toString` value by default.
 		@method toHref
 	@return {String}
 */
	toHref: function toHref() {
		return this.toString();
	},


	/**
 	Returns a hash of relevant values for this token, which includes keys
 	* type - Kind of token ('url', 'email', etc.)
 	* value - Original text
 	* href - The value that should be added to the anchor tag's href
 		attribute
 		@method toObject
 	@param {String} [protocol] `'http'` by default
 	@return {Object}
 */
	toObject: function toObject() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		return {
			type: this.type,
			value: this.toString(),
			href: this.toHref(protocol)
		};
	}
};

/**
	Represents an arbitrarily mailto email address with the prefix included
	@class MAILTO
	@extends MultiToken
*/
var MAILTOEMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true
});

/**
	Represents a list of tokens making up a valid email address
	@class EMAIL
	@extends MultiToken
*/
var EMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true,
	toHref: function toHref() {
		return 'mailto:' + this.toString();
	}
});

/**
	Represents some plain text
	@class TEXT
	@extends MultiToken
*/
var TEXT = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'text' });

/**
	Multi-linebreak token - represents a line break
	@class NL
	@extends MultiToken
*/
var NL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'nl' });

/**
	Represents a list of tokens making up a valid URL
	@class URL
	@extends MultiToken
*/
var URL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'url',
	isLink: true,

	/**
 	Lowercases relevant parts of the domain and adds the protocol if
 	required. Note that this will not escape unsafe HTML characters in the
 	URL.
 		@method href
 	@param {String} protocol
 	@return {String}
 */
	toHref: function toHref() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		var hasProtocol = false;
		var hasSlashSlash = false;
		var tokens = this.v;
		var result = [];
		var i = 0;

		// Make the first part of the domain lowercase
		// Lowercase protocol
		while (tokens[i] instanceof _text.PROTOCOL) {
			hasProtocol = true;
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Skip slash-slash
		while (tokens[i] instanceof _text.SLASH) {
			hasSlashSlash = true;
			result.push(tokens[i].toString());
			i++;
		}

		// Lowercase all other characters in the domain
		while (isDomainToken(tokens[i])) {
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Leave all other characters as they were written
		for (; i < tokens.length; i++) {
			result.push(tokens[i].toString());
		}

		result = result.join('');

		if (!(hasProtocol || hasSlashSlash)) {
			result = protocol + '://' + result;
		}

		return result;
	},
	hasProtocol: function hasProtocol() {
		return this.v[0] instanceof _text.PROTOCOL;
	}
});

exports.Base = MultiToken;
exports.MAILTOEMAIL = MAILTOEMAIL;
exports.EMAIL = EMAIL;
exports.NL = NL;
exports.TEXT = TEXT;
exports.URL = URL;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js":
/*!****************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/text.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.AMPERSAND = exports.CLOSEPAREN = exports.CLOSEANGLEBRACKET = exports.CLOSEBRACKET = exports.CLOSEBRACE = exports.OPENPAREN = exports.OPENANGLEBRACKET = exports.OPENBRACKET = exports.OPENBRACE = exports.WS = exports.TLD = exports.SYM = exports.UNDERSCORE = exports.SLASH = exports.MAILTO = exports.PROTOCOL = exports.QUERY = exports.POUND = exports.PLUS = exports.NUM = exports.NL = exports.LOCALHOST = exports.PUNCTUATION = exports.DOT = exports.COLON = exports.AT = exports.DOMAIN = exports.Base = undefined;

var _createTokenClass = __webpack_require__(/*! ./create-token-class */ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js");

var _class = __webpack_require__(/*! ../../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

/******************************************************************************
	Text Tokens
	Tokens composed of strings
******************************************************************************/

/**
	Abstract class used for manufacturing text tokens.
	Pass in the value this token represents

	@class TextToken
	@abstract
*/
var TextToken = (0, _createTokenClass.createTokenClass)();
TextToken.prototype = {
	toString: function toString() {
		return this.v + '';
	}
};

function inheritsToken(value) {
	var props = value ? { v: value } : {};
	return (0, _class.inherits)(TextToken, (0, _createTokenClass.createTokenClass)(), props);
}

/**
	A valid domain token
	@class DOMAIN
	@extends TextToken
*/
var DOMAIN = inheritsToken();

/**
	@class AT
	@extends TextToken
*/
var AT = inheritsToken('@');

/**
	Represents a single colon `:` character

	@class COLON
	@extends TextToken
*/
var COLON = inheritsToken(':');

/**
	@class DOT
	@extends TextToken
*/
var DOT = inheritsToken('.');

/**
	A character class that can surround the URL, but which the URL cannot begin
	or end with. Does not include certain English punctuation like parentheses.

	@class PUNCTUATION
	@extends TextToken
*/
var PUNCTUATION = inheritsToken();

/**
	The word localhost (by itself)
	@class LOCALHOST
	@extends TextToken
*/
var LOCALHOST = inheritsToken();

/**
	Newline token
	@class NL
	@extends TextToken
*/
var NL = inheritsToken('\n');

/**
	@class NUM
	@extends TextToken
*/
var NUM = inheritsToken();

/**
	@class PLUS
	@extends TextToken
*/
var PLUS = inheritsToken('+');

/**
	@class POUND
	@extends TextToken
*/
var POUND = inheritsToken('#');

/**
	Represents a web URL protocol. Supported types include

	* `http:`
	* `https:`
	* `ftp:`
	* `ftps:`

	@class PROTOCOL
	@extends TextToken
*/
var PROTOCOL = inheritsToken();

/**
	Represents the start of the email URI protocol

	@class MAILTO
	@extends TextToken
*/
var MAILTO = inheritsToken('mailto:');

/**
	@class QUERY
	@extends TextToken
*/
var QUERY = inheritsToken('?');

/**
	@class SLASH
	@extends TextToken
*/
var SLASH = inheritsToken('/');

/**
	@class UNDERSCORE
	@extends TextToken
*/
var UNDERSCORE = inheritsToken('_');

/**
	One ore more non-whitespace symbol.
	@class SYM
	@extends TextToken
*/
var SYM = inheritsToken();

/**
	@class TLD
	@extends TextToken
*/
var TLD = inheritsToken();

/**
	Represents a string of consecutive whitespace characters

	@class WS
	@extends TextToken
*/
var WS = inheritsToken();

/**
	Opening/closing bracket classes
*/

var OPENBRACE = inheritsToken('{');
var OPENBRACKET = inheritsToken('[');
var OPENANGLEBRACKET = inheritsToken('<');
var OPENPAREN = inheritsToken('(');
var CLOSEBRACE = inheritsToken('}');
var CLOSEBRACKET = inheritsToken(']');
var CLOSEANGLEBRACKET = inheritsToken('>');
var CLOSEPAREN = inheritsToken(')');

var AMPERSAND = inheritsToken('&');

exports.Base = TextToken;
exports.DOMAIN = DOMAIN;
exports.AT = AT;
exports.COLON = COLON;
exports.DOT = DOT;
exports.PUNCTUATION = PUNCTUATION;
exports.LOCALHOST = LOCALHOST;
exports.NL = NL;
exports.NUM = NUM;
exports.PLUS = PLUS;
exports.POUND = POUND;
exports.QUERY = QUERY;
exports.PROTOCOL = PROTOCOL;
exports.MAILTO = MAILTO;
exports.SLASH = SLASH;
exports.UNDERSCORE = UNDERSCORE;
exports.SYM = SYM;
exports.TLD = TLD;
exports.WS = WS;
exports.OPENBRACE = OPENBRACE;
exports.OPENBRACKET = OPENBRACKET;
exports.OPENANGLEBRACKET = OPENANGLEBRACKET;
exports.OPENPAREN = OPENPAREN;
exports.CLOSEBRACE = CLOSEBRACE;
exports.CLOSEBRACKET = CLOSEBRACKET;
exports.CLOSEANGLEBRACKET = CLOSEANGLEBRACKET;
exports.CLOSEPAREN = CLOSEPAREN;
exports.AMPERSAND = AMPERSAND;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/utils/class.js":
/*!***********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/utils/class.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.inherits = inherits;
function inherits(parent, child) {
	var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var extended = Object.create(parent.prototype);
	for (var p in props) {
		extended[p] = props[p];
	}
	extended.constructor = child;
	child.prototype = extended;
	return child;
}

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/utils/options.js":
/*!*************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/utils/options.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var defaults = {
	defaultProtocol: 'http',
	events: null,
	format: noop,
	formatHref: noop,
	nl2br: false,
	tagName: 'a',
	target: typeToTarget,
	validate: true,
	ignoreTags: [],
	attributes: null,
	className: 'linkified' // Deprecated value - no default class will be provided in the future
};

exports.defaults = defaults;
exports.Options = Options;
exports.contains = contains;


function Options(opts) {
	opts = opts || {};

	this.defaultProtocol = opts.hasOwnProperty('defaultProtocol') ? opts.defaultProtocol : defaults.defaultProtocol;
	this.events = opts.hasOwnProperty('events') ? opts.events : defaults.events;
	this.format = opts.hasOwnProperty('format') ? opts.format : defaults.format;
	this.formatHref = opts.hasOwnProperty('formatHref') ? opts.formatHref : defaults.formatHref;
	this.nl2br = opts.hasOwnProperty('nl2br') ? opts.nl2br : defaults.nl2br;
	this.tagName = opts.hasOwnProperty('tagName') ? opts.tagName : defaults.tagName;
	this.target = opts.hasOwnProperty('target') ? opts.target : defaults.target;
	this.validate = opts.hasOwnProperty('validate') ? opts.validate : defaults.validate;
	this.ignoreTags = [];

	// linkAttributes and linkClass is deprecated
	this.attributes = opts.attributes || opts.linkAttributes || defaults.attributes;
	this.className = opts.hasOwnProperty('className') ? opts.className : opts.linkClass || defaults.className;

	// Make all tags names upper case
	var ignoredTags = opts.hasOwnProperty('ignoreTags') ? opts.ignoreTags : defaults.ignoreTags;
	for (var i = 0; i < ignoredTags.length; i++) {
		this.ignoreTags.push(ignoredTags[i].toUpperCase());
	}
}

Options.prototype = {
	/**
  * Given the token, return all options for how it should be displayed
  */
	resolve: function resolve(token) {
		var href = token.toHref(this.defaultProtocol);
		return {
			formatted: this.get('format', token.toString(), token),
			formattedHref: this.get('formatHref', href, token),
			tagName: this.get('tagName', href, token),
			className: this.get('className', href, token),
			target: this.get('target', href, token),
			events: this.getObject('events', href, token),
			attributes: this.getObject('attributes', href, token)
		};
	},


	/**
  * Returns true or false based on whether a token should be displayed as a
  * link based on the user options. By default,
  */
	check: function check(token) {
		return this.get('validate', token.toString(), token);
	},


	// Private methods

	/**
  * Resolve an option's value based on the value of the option and the given
  * params.
  * @param {String} key Name of option to use
  * @param operator will be passed to the target option if it's method
  * @param {MultiToken} token The token from linkify.tokenize
  */
	get: function get(key, operator, token) {
		var optionValue = void 0,
		    option = this[key];
		if (!option) {
			return option;
		}

		switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
			case 'function':
				return option(operator, token.type);
			case 'object':
				optionValue = option.hasOwnProperty(token.type) ? option[token.type] : defaults[key];
				return typeof optionValue === 'function' ? optionValue(operator, token.type) : optionValue;
		}

		return option;
	},
	getObject: function getObject(key, operator, token) {
		var option = this[key];
		return typeof option === 'function' ? option(operator, token.type) : option;
	}
};

/**
 * Quick indexOf replacement for checking the ignoreTags option
 */
function contains(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return true;
		}
	}
	return false;
}

function noop(val) {
	return val;
}

function typeToTarget(href, type) {
	return type === 'url' ? '_blank' : null;
}

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer.js":
/*!*************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _html5NamedCharRefs = __webpack_require__(/*! ./simple-html-tokenizer/html5-named-char-refs */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/html5-named-char-refs.js");

var _html5NamedCharRefs2 = _interopRequireDefault(_html5NamedCharRefs);

var _entityParser = __webpack_require__(/*! ./simple-html-tokenizer/entity-parser */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/entity-parser.js");

var _entityParser2 = _interopRequireDefault(_entityParser);

var _eventedTokenizer = __webpack_require__(/*! ./simple-html-tokenizer/evented-tokenizer */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/evented-tokenizer.js");

var _eventedTokenizer2 = _interopRequireDefault(_eventedTokenizer);

var _tokenizer = __webpack_require__(/*! ./simple-html-tokenizer/tokenizer */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenizer.js");

var _tokenizer2 = _interopRequireDefault(_tokenizer);

var _tokenize = __webpack_require__(/*! ./simple-html-tokenizer/tokenize */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenize.js");

var _tokenize2 = _interopRequireDefault(_tokenize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTML5Tokenizer = {
	HTML5NamedCharRefs: _html5NamedCharRefs2.default,
	EntityParser: _entityParser2.default,
	EventedTokenizer: _eventedTokenizer2.default,
	Tokenizer: _tokenizer2.default,
	tokenize: _tokenize2.default
};

exports.default = HTML5Tokenizer;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer/entity-parser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer/entity-parser.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function EntityParser(named) {
  this.named = named;
}

var HEXCHARCODE = /^#[xX]([A-Fa-f0-9]+)$/;
var CHARCODE = /^#([0-9]+)$/;
var NAMED = /^([A-Za-z0-9]+)$/;

EntityParser.prototype.parse = function (entity) {
  if (!entity) {
    return;
  }
  var matches = entity.match(HEXCHARCODE);
  if (matches) {
    return "&#x" + matches[1] + ";";
  }
  matches = entity.match(CHARCODE);
  if (matches) {
    return "&#" + matches[1] + ";";
  }
  matches = entity.match(NAMED);
  if (matches) {
    return this.named[matches[1]] || "&" + matches[1] + ";";
  }
};

exports.default = EntityParser;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer/evented-tokenizer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer/evented-tokenizer.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/utils.js");

function EventedTokenizer(delegate, entityParser) {
  this.delegate = delegate;
  this.entityParser = entityParser;

  this.state = null;
  this.input = null;

  this.index = -1;
  this.line = -1;
  this.column = -1;
  this.tagLine = -1;
  this.tagColumn = -1;

  this.reset();
}

EventedTokenizer.prototype = {
  reset: function reset() {
    this.state = 'beforeData';
    this.input = '';

    this.index = 0;
    this.line = 1;
    this.column = 0;

    this.tagLine = -1;
    this.tagColumn = -1;

    this.delegate.reset();
  },

  tokenize: function tokenize(input) {
    this.reset();
    this.tokenizePart(input);
    this.tokenizeEOF();
  },

  tokenizePart: function tokenizePart(input) {
    this.input += (0, _utils.preprocessInput)(input);

    while (this.index < this.input.length) {
      this.states[this.state].call(this);
    }
  },

  tokenizeEOF: function tokenizeEOF() {
    this.flushData();
  },

  flushData: function flushData() {
    if (this.state === 'data') {
      this.delegate.finishData();
      this.state = 'beforeData';
    }
  },

  peek: function peek() {
    return this.input.charAt(this.index);
  },

  consume: function consume() {
    var char = this.peek();

    this.index++;

    if (char === "\n") {
      this.line++;
      this.column = 0;
    } else {
      this.column++;
    }

    return char;
  },

  consumeCharRef: function consumeCharRef() {
    var endIndex = this.input.indexOf(';', this.index);
    if (endIndex === -1) {
      return;
    }
    var entity = this.input.slice(this.index, endIndex);
    var chars = this.entityParser.parse(entity);
    if (chars) {
      var count = entity.length;
      // consume the entity chars
      while (count) {
        this.consume();
        count--;
      }
      // consume the `;`
      this.consume();

      return chars;
    }
  },

  markTagStart: function markTagStart() {
    // these properties to be removed in next major bump
    this.tagLine = this.line;
    this.tagColumn = this.column;

    if (this.delegate.tagOpen) {
      this.delegate.tagOpen();
    }
  },

  states: {
    beforeData: function beforeData() {
      var char = this.peek();

      if (char === "<") {
        this.state = 'tagOpen';
        this.markTagStart();
        this.consume();
      } else {
        this.state = 'data';
        this.delegate.beginData();
      }
    },

    data: function data() {
      var char = this.peek();

      if (char === "<") {
        this.delegate.finishData();
        this.state = 'tagOpen';
        this.markTagStart();
        this.consume();
      } else if (char === "&") {
        this.consume();
        this.delegate.appendToData(this.consumeCharRef() || "&");
      } else {
        this.consume();
        this.delegate.appendToData(char);
      }
    },

    tagOpen: function tagOpen() {
      var char = this.consume();

      if (char === "!") {
        this.state = 'markupDeclaration';
      } else if (char === "/") {
        this.state = 'endTagOpen';
      } else if ((0, _utils.isAlpha)(char)) {
        this.state = 'tagName';
        this.delegate.beginStartTag();
        this.delegate.appendToTagName(char.toLowerCase());
      }
    },

    markupDeclaration: function markupDeclaration() {
      var char = this.consume();

      if (char === "-" && this.input.charAt(this.index) === "-") {
        this.consume();
        this.state = 'commentStart';
        this.delegate.beginComment();
      }
    },

    commentStart: function commentStart() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentStartDash';
      } else if (char === ">") {
        this.delegate.finishComment();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToCommentData(char);
        this.state = 'comment';
      }
    },

    commentStartDash: function commentStartDash() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentEnd';
      } else if (char === ">") {
        this.delegate.finishComment();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToCommentData("-");
        this.state = 'comment';
      }
    },

    comment: function comment() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentEndDash';
      } else {
        this.delegate.appendToCommentData(char);
      }
    },

    commentEndDash: function commentEndDash() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentEnd';
      } else {
        this.delegate.appendToCommentData("-" + char);
        this.state = 'comment';
      }
    },

    commentEnd: function commentEnd() {
      var char = this.consume();

      if (char === ">") {
        this.delegate.finishComment();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToCommentData("--" + char);
        this.state = 'comment';
      }
    },

    tagName: function tagName() {
      var char = this.consume();

      if ((0, _utils.isSpace)(char)) {
        this.state = 'beforeAttributeName';
      } else if (char === "/") {
        this.state = 'selfClosingStartTag';
      } else if (char === ">") {
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToTagName(char);
      }
    },

    beforeAttributeName: function beforeAttributeName() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
        return;
      } else if (char === "/") {
        this.state = 'selfClosingStartTag';
        this.consume();
      } else if (char === ">") {
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'attributeName';
        this.delegate.beginAttribute();
        this.consume();
        this.delegate.appendToAttributeName(char);
      }
    },

    attributeName: function attributeName() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.state = 'afterAttributeName';
        this.consume();
      } else if (char === "/") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'selfClosingStartTag';
      } else if (char === "=") {
        this.state = 'beforeAttributeValue';
        this.consume();
      } else if (char === ">") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.consume();
        this.delegate.appendToAttributeName(char);
      }
    },

    afterAttributeName: function afterAttributeName() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
        return;
      } else if (char === "/") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'selfClosingStartTag';
      } else if (char === "=") {
        this.consume();
        this.state = 'beforeAttributeValue';
      } else if (char === ">") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'attributeName';
        this.delegate.beginAttribute();
        this.delegate.appendToAttributeName(char);
      }
    },

    beforeAttributeValue: function beforeAttributeValue() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
      } else if (char === '"') {
        this.state = 'attributeValueDoubleQuoted';
        this.delegate.beginAttributeValue(true);
        this.consume();
      } else if (char === "'") {
        this.state = 'attributeValueSingleQuoted';
        this.delegate.beginAttributeValue(true);
        this.consume();
      } else if (char === ">") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'attributeValueUnquoted';
        this.delegate.beginAttributeValue(false);
        this.consume();
        this.delegate.appendToAttributeValue(char);
      }
    },

    attributeValueDoubleQuoted: function attributeValueDoubleQuoted() {
      var char = this.consume();

      if (char === '"') {
        this.delegate.finishAttributeValue();
        this.state = 'afterAttributeValueQuoted';
      } else if (char === "&") {
        this.delegate.appendToAttributeValue(this.consumeCharRef('"') || "&");
      } else {
        this.delegate.appendToAttributeValue(char);
      }
    },

    attributeValueSingleQuoted: function attributeValueSingleQuoted() {
      var char = this.consume();

      if (char === "'") {
        this.delegate.finishAttributeValue();
        this.state = 'afterAttributeValueQuoted';
      } else if (char === "&") {
        this.delegate.appendToAttributeValue(this.consumeCharRef("'") || "&");
      } else {
        this.delegate.appendToAttributeValue(char);
      }
    },

    attributeValueUnquoted: function attributeValueUnquoted() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'beforeAttributeName';
      } else if (char === "&") {
        this.consume();
        this.delegate.appendToAttributeValue(this.consumeCharRef(">") || "&");
      } else if (char === ">") {
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.consume();
        this.delegate.appendToAttributeValue(char);
      }
    },

    afterAttributeValueQuoted: function afterAttributeValueQuoted() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
        this.state = 'beforeAttributeName';
      } else if (char === "/") {
        this.consume();
        this.state = 'selfClosingStartTag';
      } else if (char === ">") {
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'beforeAttributeName';
      }
    },

    selfClosingStartTag: function selfClosingStartTag() {
      var char = this.peek();

      if (char === ">") {
        this.consume();
        this.delegate.markTagAsSelfClosing();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'beforeAttributeName';
      }
    },

    endTagOpen: function endTagOpen() {
      var char = this.consume();

      if ((0, _utils.isAlpha)(char)) {
        this.state = 'tagName';
        this.delegate.beginEndTag();
        this.delegate.appendToTagName(char.toLowerCase());
      }
    }
  }
};

exports.default = EventedTokenizer;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer/html5-named-char-refs.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer/html5-named-char-refs.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var HTML5NamedCharRefs = {
    // We don't need the complete named character reference because linkifyHtml
    // does not modify the escape sequences. We do need &nbsp; so that
    // whitespace is parsed properly. Other types of whitespace should already
    // be accounted for
    nbsp: "\xA0"
};
exports.default = HTML5NamedCharRefs;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenize.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = tokenize;

var _tokenizer = __webpack_require__(/*! ./tokenizer */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenizer.js");

var _tokenizer2 = _interopRequireDefault(_tokenizer);

var _entityParser = __webpack_require__(/*! ./entity-parser */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/entity-parser.js");

var _entityParser2 = _interopRequireDefault(_entityParser);

var _html5NamedCharRefs = __webpack_require__(/*! ./html5-named-char-refs */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/html5-named-char-refs.js");

var _html5NamedCharRefs2 = _interopRequireDefault(_html5NamedCharRefs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tokenize(input, options) {
  var tokenizer = new _tokenizer2.default(new _entityParser2.default(_html5NamedCharRefs2.default), options);
  return tokenizer.tokenize(input);
}

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenizer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer/tokenizer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _eventedTokenizer = __webpack_require__(/*! ./evented-tokenizer */ "./node_modules/linkifyjs/lib/simple-html-tokenizer/evented-tokenizer.js");

var _eventedTokenizer2 = _interopRequireDefault(_eventedTokenizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tokenizer(entityParser, options) {
  this.token = null;
  this.startLine = 1;
  this.startColumn = 0;
  this.options = options || {};
  this.tokenizer = new _eventedTokenizer2.default(this, entityParser);
}

Tokenizer.prototype = {
  tokenize: function tokenize(input) {
    this.tokens = [];
    this.tokenizer.tokenize(input);
    return this.tokens;
  },

  tokenizePart: function tokenizePart(input) {
    this.tokens = [];
    this.tokenizer.tokenizePart(input);
    return this.tokens;
  },

  tokenizeEOF: function tokenizeEOF() {
    this.tokens = [];
    this.tokenizer.tokenizeEOF();
    return this.tokens[0];
  },

  reset: function reset() {
    this.token = null;
    this.startLine = 1;
    this.startColumn = 0;
  },

  addLocInfo: function addLocInfo() {
    if (this.options.loc) {
      this.token.loc = {
        start: {
          line: this.startLine,
          column: this.startColumn
        },
        end: {
          line: this.tokenizer.line,
          column: this.tokenizer.column
        }
      };
    }
    this.startLine = this.tokenizer.line;
    this.startColumn = this.tokenizer.column;
  },

  // Data

  beginData: function beginData() {
    this.token = {
      type: 'Chars',
      chars: ''
    };
    this.tokens.push(this.token);
  },

  appendToData: function appendToData(char) {
    this.token.chars += char;
  },

  finishData: function finishData() {
    this.addLocInfo();
  },

  // Comment

  beginComment: function beginComment() {
    this.token = {
      type: 'Comment',
      chars: ''
    };
    this.tokens.push(this.token);
  },

  appendToCommentData: function appendToCommentData(char) {
    this.token.chars += char;
  },

  finishComment: function finishComment() {
    this.addLocInfo();
  },

  // Tags - basic

  beginStartTag: function beginStartTag() {
    this.token = {
      type: 'StartTag',
      tagName: '',
      attributes: [],
      selfClosing: false
    };
    this.tokens.push(this.token);
  },

  beginEndTag: function beginEndTag() {
    this.token = {
      type: 'EndTag',
      tagName: ''
    };
    this.tokens.push(this.token);
  },

  finishTag: function finishTag() {
    this.addLocInfo();
  },

  markTagAsSelfClosing: function markTagAsSelfClosing() {
    this.token.selfClosing = true;
  },

  // Tags - name

  appendToTagName: function appendToTagName(char) {
    this.token.tagName += char;
  },

  // Tags - attributes

  beginAttribute: function beginAttribute() {
    this._currentAttribute = ["", "", null];
    this.token.attributes.push(this._currentAttribute);
  },

  appendToAttributeName: function appendToAttributeName(char) {
    this._currentAttribute[0] += char;
  },

  beginAttributeValue: function beginAttributeValue(isQuoted) {
    this._currentAttribute[2] = isQuoted;
  },

  appendToAttributeValue: function appendToAttributeValue(char) {
    this._currentAttribute[1] = this._currentAttribute[1] || "";
    this._currentAttribute[1] += char;
  },

  finishAttributeValue: function finishAttributeValue() {}
};

exports.default = Tokenizer;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/simple-html-tokenizer/utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/simple-html-tokenizer/utils.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isSpace = isSpace;
exports.isAlpha = isAlpha;
exports.preprocessInput = preprocessInput;
var WSP = /[\t\n\f ]/;
var ALPHA = /[A-Za-z]/;
var CRLF = /\r\n?/g;

function isSpace(char) {
  return WSP.test(char);
}

function isAlpha(char) {
  return ALPHA.test(char);
}

function preprocessInput(input) {
  return input.replace(CRLF, "\n");
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
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
    var timeout = runTimeout(cleanUpNextTick);
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
    runClearTimeout(timeout);
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
        runTimeout(drainQueue);
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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/login.vue?vue&type=template&id=1a3b4499&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/login.vue?vue&type=template&id=1a3b4499& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "bg-white container mx-4 md:mx-auto shadow-lg mt-32 flex flex-row md:w-3/5 xxl:w-2/5 justify-between"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", {}),
      _vm._v(" "),
      _c("div", { staticClass: "w-full md:w-1/2 p-8" }, [
        _c("form", { attrs: { method: "POST", action: _vm.url } }, [
          _c("input", {
            attrs: { type: "hidden", name: "_token" },
            domProps: { value: _vm.token }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "py-4" }, [
            _c("input", {
              staticClass:
                "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",
              attrs: {
                id: "email",
                "aria-label": "email",
                type: "text",
                name: "email",
                placeholder: "E-mail"
              },
              domProps: { value: _vm.oldEmail }
            }),
            _vm._v(" "),
            _vm.errors.email
              ? _c("span", { staticClass: "text-red-light block pt-2" }, [
                  _vm._v(_vm._s(_vm.errors.email[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "no-underline text-teal text-sm",
              attrs: { href: "password/reset" }
            },
            [_vm._v("Forgot Your Password?")]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "w-1/2 text-center bg-teal-light p-4 hidden md:block" },
      [
        _c("p", { staticClass: "text-white font-bold text-4xl pt-8 mt-8" }, [
          _vm._v("GOODWORK")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-white text-xl pt-4" }, [
          _vm._v("Sane way to manage work")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-4" }, [
      _c("input", {
        staticClass:
          "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",
        attrs: {
          id: "password",
          "aria-label": "password",
          type: "password",
          name: "password",
          placeholder: "Password"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-4 text-grey" }, [
      _c("input", {
        attrs: {
          type: "checkbox",
          "aria-label": "remember me",
          name: "remember"
        }
      }),
      _vm._v("\r\n        Remember Me\r\n      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-4" }, [
      _c("button", { staticClass: "btn", attrs: { type: "submit" } }, [
        _vm._v("LOGIN")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/assets/css/main.css":
/*!***************************************!*\
  !*** ./resources/assets/css/main.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/*!******************************************!*\
  !*** ./resources/assets/js/bootstrap.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_linkify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-linkify */ "./node_modules/vue-linkify/dist/vue-linkify.min.js");
/* harmony import */ var vue_linkify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_linkify__WEBPACK_IMPORTED_MODULE_3__);




window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.luxon = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
window.axios.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'X-Requested-With': 'XMLHttpRequest'
  /**
   * Echo exposes an expressive API for subscribing to channels and listening
   * for events that are broadcast by Laravel. Echo and event broadcasting
   * allows your team to easily build robust real-time web applications.
   */

};

if (typeof io !== 'undefined') {
  window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001'
  });
}

window.Vue.mixin({
  methods: {
    generateUrl: function generateUrl(value) {
      if (!value) return 'http://' + window.location.host + '/image/avatar.jpg';
      value = value.toString();
      return window.location.protocol + '//' + window.location.host + '/' + value;
    }
  }
});
window.Vue.filter('localize', function (value) {
  if (!value) return '';
  value = value.toString();
  return window.lang[value] ? window.lang[value] : value;
});
window.Vue.directive('click-outside', vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default.a);
Vue.directive('linkified', vue_linkify__WEBPACK_IMPORTED_MODULE_3___default.a);
window.Vue.component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"]);
window.EventBus = new Vue();

/***/ }),

/***/ "./resources/assets/js/components/auth/login.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/auth/login.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_1a3b4499___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=1a3b4499& */ "./resources/assets/js/components/auth/login.vue?vue&type=template&id=1a3b4499&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_1a3b4499___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_1a3b4499___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/auth/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/auth/login.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/auth/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/auth/login.vue?vue&type=template&id=1a3b4499&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/auth/login.vue?vue&type=template&id=1a3b4499& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_1a3b4499___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=1a3b4499& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/login.vue?vue&type=template&id=1a3b4499&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_1a3b4499___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_1a3b4499___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/pages/auth/login.js":
/*!*************************************************!*\
  !*** ./resources/assets/js/pages/auth/login.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../bootstrap */ "./resources/assets/js/bootstrap.js");
/* harmony import */ var _components_auth_login_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/auth/login.vue */ "./resources/assets/js/components/auth/login.vue");


/* eslint-disable no-unused-vars */

var app = new Vue({
  el: '#app',
  components: {
    login: _components_auth_login_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ 0:
/*!***************************************************************************************!*\
  !*** multi ./resources/assets/js/pages/auth/login.js ./resources/assets/css/main.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/projects/goodworklocal/resources/assets/js/pages/auth/login.js */"./resources/assets/js/pages/auth/login.js");
module.exports = __webpack_require__(/*! /var/www/projects/goodworklocal/resources/assets/css/main.css */"./resources/assets/css/main.css");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL2luZGV4LmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lL2luZGV4LmVzLmpzIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtZWNoby9kaXN0L2VjaG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW5raWZ5anMvbGliL2xpbmtpZnktaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2xpYi9saW5raWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW5raWZ5anMvbGliL2xpbmtpZnkvY29yZS9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS9jb3JlL3NjYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS9jb3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW5raWZ5anMvbGliL2xpbmtpZnkvY29yZS90b2tlbnMvY3JlYXRlLXRva2VuLWNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW5raWZ5anMvbGliL2xpbmtpZnkvY29yZS90b2tlbnMvbXVsdGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS9jb3JlL3Rva2Vucy90ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW5raWZ5anMvbGliL2xpbmtpZnkvdXRpbHMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS91dGlscy9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW5raWZ5anMvbGliL3NpbXBsZS1odG1sLXRva2VuaXplci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2xpYi9zaW1wbGUtaHRtbC10b2tlbml6ZXIvZW50aXR5LXBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2xpYi9zaW1wbGUtaHRtbC10b2tlbml6ZXIvZXZlbnRlZC10b2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvc2ltcGxlLWh0bWwtdG9rZW5pemVyL2h0bWw1LW5hbWVkLWNoYXItcmVmcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2xpYi9zaW1wbGUtaHRtbC10b2tlbml6ZXIvdG9rZW5pemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvc2ltcGxlLWh0bWwtdG9rZW5pemVyL3Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2xpYi9zaW1wbGUtaHRtbC10b2tlbml6ZXIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9sb2dpbi52dWU/MjVlNSIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY3NzL21haW4uY3NzP2Y5M2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL2xvZ2luLnZ1ZT81OWRmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL2xvZ2luLnZ1ZT80NWZlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJWdWUiLCJyZXF1aXJlIiwiYXhpb3MiLCJsdXhvbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsIkxhcmF2ZWwiLCJjc3JmVG9rZW4iLCJpbyIsIkVjaG8iLCJicm9hZGNhc3RlciIsImhvc3QiLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwibWl4aW4iLCJtZXRob2RzIiwiZ2VuZXJhdGVVcmwiLCJ2YWx1ZSIsInRvU3RyaW5nIiwicHJvdG9jb2wiLCJmaWx0ZXIiLCJsYW5nIiwiZGlyZWN0aXZlIiwiQ2xpY2tPdXRzaWRlIiwibGlua2lmeSIsImNvbXBvbmVudCIsIkZvbnRBd2Vzb21lSWNvbiIsIkV2ZW50QnVzIiwiYXBwIiwiZWwiLCJjb21wb25lbnRzIiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELGdCQUFnQjs7QUFFakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBb0I7QUFDL0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5Qjs7QUFFQSw2QkFBNkI7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIscUJBQXFCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsd0JBQXdCLHVCQUF1QixzQkFBc0Isc0JBQXNCO0FBQ3ZJO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyx3RUFBd0U7QUFDeEUsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUgsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxHQUFHLEtBQUs7QUFDUjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLEdBQUcsS0FBSztBQUNSO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFNBQVM7QUFDckIsWUFBWSxNQUFNO0FBQ2xCLFlBQVksT0FBTztBQUNuQixZQUFZLE1BQU07QUFDbEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxZQUFZO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUcsSUFBSTs7QUFFUDtBQUNBO0FBQ0EsR0FBRztBQUNILCtDQUErQyxnQ0FBZ0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxLQUFLLElBQUk7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxxR0FBcUc7QUFDckc7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FB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O0FBRUE7QUFDQSxRQUFRLG1CQUFtQjtBQUMzQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQjs7Ozs7Ozs7Ozs7O0FDM01hOztBQUViO0FBQ0E7O0FBRUEsd0JBQXdCLG1CQUFPLENBQUMsb0dBQXNCOztBQUV0RCxhQUFhLG1CQUFPLENBQUMsOEVBQW1COztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFdBQVc7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCOzs7Ozs7Ozs7Ozs7QUMzTWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNkYTs7QUFFYjs7QUFFQSxvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM5SGE7O0FBRWI7O0FBRUEsMEJBQTBCLG1CQUFPLENBQUMsa0lBQStDOztBQUVqRjs7QUFFQSxvQkFBb0IsbUJBQU8sQ0FBQyxrSEFBdUM7O0FBRW5FOztBQUVBLHdCQUF3QixtQkFBTyxDQUFDLDBIQUEyQzs7QUFFM0U7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsMEdBQW1DOztBQUU1RDs7QUFFQSxnQkFBZ0IsbUJBQU8sQ0FBQyx3R0FBa0M7O0FBRTFEOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7O0FDbENhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBOztBQUVBLCtCOzs7Ozs7Ozs7Ozs7QUM3QmE7O0FBRWI7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRFQUFTOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7Ozs7QUNyYmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsb0ZBQWE7O0FBRXRDOztBQUVBLG9CQUFvQixtQkFBTyxDQUFDLDRGQUFpQjs7QUFFN0M7O0FBRUEsMEJBQTBCLG1CQUFPLENBQUMsNEdBQXlCOztBQUUzRDs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdEJhOztBQUViOztBQUVBLHdCQUF3QixtQkFBTyxDQUFDLG9HQUFxQjs7QUFFckQ7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSw0Qjs7Ozs7Ozs7Ozs7O0FDekphOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBTyxDQUFDLGlFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBQUE7QUFD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Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNNkIsR0FBRyxHQUFHLElBQUk3QixHQUFKLENBQVE7QUFDbEI4QixJQUFFLEVBQUUsTUFEYztBQUVsQkMsWUFBVSxFQUFFO0FBQ1ZDLFNBQUssRUFBTEEsa0VBQUtBO0FBREs7QUFGTSxDQUFSLENBQVosQyIsImZpbGUiOiIvanMvYXV0aC9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxudmFyIF9XSU5ET1cgPSB7fTtcbnZhciBfRE9DVU1FTlQgPSB7fTtcbnZhciBfTVVUQVRJT05fT0JTRVJWRVIgPSBudWxsO1xudmFyIF9QRVJGT1JNQU5DRSA9IHtcbiAgbWFyazogbm9vcCxcbiAgbWVhc3VyZTogbm9vcFxufTtcblxudHJ5IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSBfV0lORE9XID0gd2luZG93O1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykgX0RPQ1VNRU5UID0gZG9jdW1lbnQ7XG4gIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIF9NVVRBVElPTl9PQlNFUlZFUiA9IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIGlmICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnKSBfUEVSRk9STUFOQ0UgPSBwZXJmb3JtYW5jZTtcbn0gY2F0Y2ggKGUpIHt9XG5cbnZhciBfcmVmID0gX1dJTkRPVy5uYXZpZ2F0b3IgfHwge30sXG4gICAgX3JlZiR1c2VyQWdlbnQgPSBfcmVmLnVzZXJBZ2VudCxcbiAgICB1c2VyQWdlbnQgPSBfcmVmJHVzZXJBZ2VudCA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHVzZXJBZ2VudDtcblxudmFyIFdJTkRPVyA9IF9XSU5ET1c7XG52YXIgRE9DVU1FTlQgPSBfRE9DVU1FTlQ7XG52YXIgTVVUQVRJT05fT0JTRVJWRVIgPSBfTVVUQVRJT05fT0JTRVJWRVI7XG52YXIgUEVSRk9STUFOQ0UgPSBfUEVSRk9STUFOQ0U7XG52YXIgSVNfQlJPV1NFUiA9ICEhV0lORE9XLmRvY3VtZW50O1xudmFyIElTX0RPTSA9ICEhRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50ICYmICEhRE9DVU1FTlQuaGVhZCAmJiB0eXBlb2YgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgRE9DVU1FTlQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBJU19JRSA9IH51c2VyQWdlbnQuaW5kZXhPZignTVNJRScpIHx8IH51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudC8nKTtcblxudmFyIE5BTUVTUEFDRV9JREVOVElGSUVSID0gJ19fX0ZPTlRfQVdFU09NRV9fXyc7XG52YXIgVU5JVFNfSU5fR1JJRCA9IDE2O1xudmFyIERFRkFVTFRfRkFNSUxZX1BSRUZJWCA9ICdmYSc7XG52YXIgREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUyA9ICdzdmctaW5saW5lLS1mYSc7XG52YXIgREFUQV9GQV9JMlNWRyA9ICdkYXRhLWZhLWkyc3ZnJztcbnZhciBEQVRBX0ZBX1BTRVVET19FTEVNRU5UID0gJ2RhdGEtZmEtcHNldWRvLWVsZW1lbnQnO1xudmFyIERBVEFfRkFfUFNFVURPX0VMRU1FTlRfUEVORElORyA9ICdkYXRhLWZhLXBzZXVkby1lbGVtZW50LXBlbmRpbmcnO1xudmFyIERBVEFfUFJFRklYID0gJ2RhdGEtcHJlZml4JztcbnZhciBEQVRBX0lDT04gPSAnZGF0YS1pY29uJztcbnZhciBIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MgPSAnZm9udGF3ZXNvbWUtaTJzdmcnO1xudmFyIFRBR05BTUVTX1RPX1NLSVBfRk9SX1BTRVVET0VMRU1FTlRTID0gWydIVE1MJywgJ0hFQUQnLCAnU1RZTEUnLCAnU0NSSVBUJ107XG52YXIgUFJPRFVDVElPTiA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSgpO1xudmFyIFBSRUZJWF9UT19TVFlMRSA9IHtcbiAgJ2Zhcyc6ICdzb2xpZCcsXG4gICdmYXInOiAncmVndWxhcicsXG4gICdmYWwnOiAnbGlnaHQnLFxuICAnZmFiJzogJ2JyYW5kcycsXG4gICdmYSc6ICdzb2xpZCdcbn07XG52YXIgU1RZTEVfVE9fUFJFRklYID0ge1xuICAnc29saWQnOiAnZmFzJyxcbiAgJ3JlZ3VsYXInOiAnZmFyJyxcbiAgJ2xpZ2h0JzogJ2ZhbCcsXG4gICdicmFuZHMnOiAnZmFiJ1xufTtcbnZhciBMQVlFUlNfVEVYVF9DTEFTU05BTUUgPSAnZmEtbGF5ZXJzLXRleHQnO1xudmFyIEZPTlRfRkFNSUxZX1BBVFRFUk4gPSAvRm9udCBBd2Vzb21lIDUgKFNvbGlkfFJlZ3VsYXJ8TGlnaHR8QnJhbmRzfEZyZWV8UHJvKS87XG52YXIgRk9OVF9XRUlHSFRfVE9fUFJFRklYID0ge1xuICAnOTAwJzogJ2ZhcycsXG4gICc0MDAnOiAnZmFyJyxcbiAgJ25vcm1hbCc6ICdmYXInLFxuICAnMzAwJzogJ2ZhbCdcbn07XG52YXIgb25lVG9UZW4gPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xudmFyIG9uZVRvVHdlbnR5ID0gb25lVG9UZW4uY29uY2F0KFsxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMF0pO1xudmFyIEFUVFJJQlVURVNfV0FUQ0hFRF9GT1JfTVVUQVRJT04gPSBbJ2NsYXNzJywgJ2RhdGEtcHJlZml4JywgJ2RhdGEtaWNvbicsICdkYXRhLWZhLXRyYW5zZm9ybScsICdkYXRhLWZhLW1hc2snXTtcbnZhciBSRVNFUlZFRF9DTEFTU0VTID0gWyd4cycsICdzbScsICdsZycsICdmdycsICd1bCcsICdsaScsICdib3JkZXInLCAncHVsbC1sZWZ0JywgJ3B1bGwtcmlnaHQnLCAnc3BpbicsICdwdWxzZScsICdyb3RhdGUtOTAnLCAncm90YXRlLTE4MCcsICdyb3RhdGUtMjcwJywgJ2ZsaXAtaG9yaXpvbnRhbCcsICdmbGlwLXZlcnRpY2FsJywgJ3N0YWNrJywgJ3N0YWNrLTF4JywgJ3N0YWNrLTJ4JywgJ2ludmVyc2UnLCAnbGF5ZXJzJywgJ2xheWVycy10ZXh0JywgJ2xheWVycy1jb3VudGVyJ10uY29uY2F0KG9uZVRvVGVuLm1hcChmdW5jdGlvbiAobikge1xuICByZXR1cm4gXCJcIi5jb25jYXQobiwgXCJ4XCIpO1xufSkpLmNvbmNhdChvbmVUb1R3ZW50eS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIFwidy1cIi5jb25jYXQobik7XG59KSk7XG5cbnZhciBpbml0aWFsID0gV0lORE9XLkZvbnRBd2Vzb21lQ29uZmlnIHx8IHt9O1xuXG5mdW5jdGlvbiBnZXRBdHRyQ29uZmlnKGF0dHIpIHtcbiAgdmFyIGVsZW1lbnQgPSBET0NVTUVOVC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbJyArIGF0dHIgKyAnXScpO1xuXG4gIGlmIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgLy8gR2V0dGluZyBhbiBlbXB0eSBzdHJpbmcgd2lsbCBvY2N1ciBpZiB0aGUgYXR0cmlidXRlIGlzIHNldCBvbiB0aGUgSFRNTCB0YWcgYnV0IHdpdGhvdXQgYSB2YWx1ZVxuICAvLyBXZSdsbCBhc3N1bWUgdGhhdCB0aGlzIGlzIGFuIGluZGljYXRpb24gdGhhdCBpdCBzaG91bGQgYmUgdG9nZ2xlZCB0byB0cnVlXG4gIC8vIEZvciBleGFtcGxlIDxzY3JpcHQgZGF0YS1zZWFyY2gtcHNldWRvLWVsZW1lbnRzIHNyYz1cIi4uLlwiPjwvc2NyaXB0PlxuICBpZiAodmFsID09PSAnJykgcmV0dXJuIHRydWU7XG4gIGlmICh2YWwgPT09ICdmYWxzZScpIHJldHVybiBmYWxzZTtcbiAgaWYgKHZhbCA9PT0gJ3RydWUnKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuaWYgKERPQ1VNRU5UICYmIHR5cGVvZiBET0NVTUVOVC5xdWVyeVNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gIHZhciBhdHRycyA9IFtbJ2RhdGEtZmFtaWx5LXByZWZpeCcsICdmYW1pbHlQcmVmaXgnXSwgWydkYXRhLXJlcGxhY2VtZW50LWNsYXNzJywgJ3JlcGxhY2VtZW50Q2xhc3MnXSwgWydkYXRhLWF1dG8tcmVwbGFjZS1zdmcnLCAnYXV0b1JlcGxhY2VTdmcnXSwgWydkYXRhLWF1dG8tYWRkLWNzcycsICdhdXRvQWRkQ3NzJ10sIFsnZGF0YS1hdXRvLWExMXknLCAnYXV0b0ExMXknXSwgWydkYXRhLXNlYXJjaC1wc2V1ZG8tZWxlbWVudHMnLCAnc2VhcmNoUHNldWRvRWxlbWVudHMnXSwgWydkYXRhLW9ic2VydmUtbXV0YXRpb25zJywgJ29ic2VydmVNdXRhdGlvbnMnXSwgWydkYXRhLWtlZXAtb3JpZ2luYWwtc291cmNlJywgJ2tlZXBPcmlnaW5hbFNvdXJjZSddLCBbJ2RhdGEtbWVhc3VyZS1wZXJmb3JtYW5jZScsICdtZWFzdXJlUGVyZm9ybWFuY2UnXSwgWydkYXRhLXNob3ctbWlzc2luZy1pY29ucycsICdzaG93TWlzc2luZ0ljb25zJ11dO1xuICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgIGF0dHIgPSBfcmVmMlswXSxcbiAgICAgICAga2V5ID0gX3JlZjJbMV07XG5cbiAgICB2YXIgdmFsID0gY29lcmNlKGdldEF0dHJDb25maWcoYXR0cikpO1xuXG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgaW5pdGlhbFtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZmFtaWx5UHJlZml4OiBERUZBVUxUX0ZBTUlMWV9QUkVGSVgsXG4gIHJlcGxhY2VtZW50Q2xhc3M6IERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1MsXG4gIGF1dG9SZXBsYWNlU3ZnOiB0cnVlLFxuICBhdXRvQWRkQ3NzOiB0cnVlLFxuICBhdXRvQTExeTogdHJ1ZSxcbiAgc2VhcmNoUHNldWRvRWxlbWVudHM6IGZhbHNlLFxuICBvYnNlcnZlTXV0YXRpb25zOiB0cnVlLFxuICBrZWVwT3JpZ2luYWxTb3VyY2U6IHRydWUsXG4gIG1lYXN1cmVQZXJmb3JtYW5jZTogZmFsc2UsXG4gIHNob3dNaXNzaW5nSWNvbnM6IHRydWVcbn07XG5cbnZhciBfY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgX2RlZmF1bHQsIGluaXRpYWwpO1xuXG5pZiAoIV9jb25maWcuYXV0b1JlcGxhY2VTdmcpIF9jb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IGZhbHNlO1xuXG52YXIgY29uZmlnID0gX29iamVjdFNwcmVhZCh7fSwgX2NvbmZpZyk7XG5cbldJTkRPVy5Gb250QXdlc29tZUNvbmZpZyA9IGNvbmZpZztcblxudmFyIHcgPSBXSU5ET1cgfHwge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXSA9IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zdHlsZXMpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnN0eWxlcyA9IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5ob29rcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uaG9va3MgPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc2hpbXMpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnNoaW1zID0gW107XG52YXIgbmFtZXNwYWNlID0gd1tOQU1FU1BBQ0VfSURFTlRJRklFUl07XG5cbnZhciBmdW5jdGlvbnMgPSBbXTtcblxudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gIERPQ1VNRU5ULnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsaXN0ZW5lcik7XG4gIGxvYWRlZCA9IDE7XG4gIGZ1bmN0aW9ucy5tYXAoZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH0pO1xufTtcblxudmFyIGxvYWRlZCA9IGZhbHNlO1xuXG5pZiAoSVNfRE9NKSB7XG4gIGxvYWRlZCA9IChET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoRE9DVU1FTlQucmVhZHlTdGF0ZSk7XG4gIGlmICghbG9hZGVkKSBET0NVTUVOVC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBkb21yZWFkeSAoZm4pIHtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgbG9hZGVkID8gc2V0VGltZW91dChmbiwgMCkgOiBmdW5jdGlvbnMucHVzaChmbik7XG59XG5cbnZhciBQRU5ESU5HID0gJ3BlbmRpbmcnO1xudmFyIFNFVFRMRUQgPSAnc2V0dGxlZCc7XG52YXIgRlVMRklMTEVEID0gJ2Z1bGZpbGxlZCc7XG52YXIgUkVKRUNURUQgPSAncmVqZWN0ZWQnO1xuXG52YXIgTk9PUCA9IGZ1bmN0aW9uIE5PT1AoKSB7fTtcblxudmFyIGlzTm9kZSA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBnbG9iYWwucHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGdsb2JhbC5wcm9jZXNzLmVtaXQgPT09ICdmdW5jdGlvbic7XG52YXIgYXN5bmNTZXRUaW1lciA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09ICd1bmRlZmluZWQnID8gc2V0VGltZW91dCA6IHNldEltbWVkaWF0ZTtcbnZhciBhc3luY1F1ZXVlID0gW107XG52YXIgYXN5bmNUaW1lcjtcblxuZnVuY3Rpb24gYXN5bmNGbHVzaCgpIHtcbiAgLy8gcnVuIHByb21pc2UgY2FsbGJhY2tzXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXN5bmNRdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIGFzeW5jUXVldWVbaV1bMF0oYXN5bmNRdWV1ZVtpXVsxXSk7XG4gIH0gLy8gcmVzZXQgYXN5bmMgYXN5bmNRdWV1ZVxuXG5cbiAgYXN5bmNRdWV1ZSA9IFtdO1xuICBhc3luY1RpbWVyID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGFzeW5jQ2FsbChjYWxsYmFjaywgYXJnKSB7XG4gIGFzeW5jUXVldWUucHVzaChbY2FsbGJhY2ssIGFyZ10pO1xuXG4gIGlmICghYXN5bmNUaW1lcikge1xuICAgIGFzeW5jVGltZXIgPSB0cnVlO1xuICAgIGFzeW5jU2V0VGltZXIoYXN5bmNGbHVzaCwgMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlUmVzb2x2ZXIocmVzb2x2ZXIsIHByb21pc2UpIHtcbiAgZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpIHtcbiAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gIH1cblxuICB0cnkge1xuICAgIHJlc29sdmVyKHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlamVjdFByb21pc2UoZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlQ2FsbGJhY2soc3Vic2NyaWJlcikge1xuICB2YXIgb3duZXIgPSBzdWJzY3JpYmVyLm93bmVyO1xuICB2YXIgc2V0dGxlZCA9IG93bmVyLl9zdGF0ZTtcbiAgdmFyIHZhbHVlID0gb3duZXIuX2RhdGE7XG4gIHZhciBjYWxsYmFjayA9IHN1YnNjcmliZXJbc2V0dGxlZF07XG4gIHZhciBwcm9taXNlID0gc3Vic2NyaWJlci50aGVuO1xuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXR0bGVkID0gRlVMRklMTEVEO1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWhhbmRsZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKSkge1xuICAgIGlmIChzZXR0bGVkID09PSBGVUxGSUxMRUQpIHtcbiAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChzZXR0bGVkID09PSBSRUpFQ1RFRCkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpIHtcbiAgdmFyIHJlc29sdmVkO1xuXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJyk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICYmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnKSkge1xuICAgICAgLy8gdGhlbiBzaG91bGQgYmUgcmV0cmlldmVkIG9ubHkgb25jZVxuICAgICAgdmFyIHRoZW4gPSB2YWx1ZS50aGVuO1xuXG4gICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZhbCkge1xuICAgICAgICAgICAgICBmdWxmaWxsKHByb21pc2UsIHZhbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHByb21pc2UsIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gIGlmIChwcm9taXNlID09PSB2YWx1ZSB8fCAhaGFuZGxlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpKSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICBwcm9taXNlLl9zdGF0ZSA9IFNFVFRMRUQ7XG4gICAgcHJvbWlzZS5fZGF0YSA9IHZhbHVlO1xuICAgIGFzeW5jQ2FsbChwdWJsaXNoRnVsZmlsbG1lbnQsIHByb21pc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlamVjdChwcm9taXNlLCByZWFzb24pIHtcbiAgaWYgKHByb21pc2UuX3N0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgcHJvbWlzZS5fc3RhdGUgPSBTRVRUTEVEO1xuICAgIHByb21pc2UuX2RhdGEgPSByZWFzb247XG4gICAgYXN5bmNDYWxsKHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2gocHJvbWlzZSkge1xuICBwcm9taXNlLl90aGVuID0gcHJvbWlzZS5fdGhlbi5mb3JFYWNoKGludm9rZUNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gcHVibGlzaEZ1bGZpbGxtZW50KHByb21pc2UpIHtcbiAgcHJvbWlzZS5fc3RhdGUgPSBGVUxGSUxMRUQ7XG4gIHB1Ymxpc2gocHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hSZWplY3Rpb24ocHJvbWlzZSkge1xuICBwcm9taXNlLl9zdGF0ZSA9IFJFSkVDVEVEO1xuICBwdWJsaXNoKHByb21pc2UpO1xuXG4gIGlmICghcHJvbWlzZS5faGFuZGxlZCAmJiBpc05vZGUpIHtcbiAgICBnbG9iYWwucHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCBwcm9taXNlLl9kYXRhLCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub3RpZnlSZWplY3Rpb25IYW5kbGVkKHByb21pc2UpIHtcbiAgZ2xvYmFsLnByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xufVxuLyoqXG4gKiBAY2xhc3NcbiAqL1xuXG5cbmZ1bmN0aW9uIFAocmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UgcmVzb2x2ZXIgJyArIHJlc29sdmVyICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgaWYgKHRoaXMgaW5zdGFuY2VvZiBQID09PSBmYWxzZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZhaWxlZCB0byBjb25zdHJ1Y3QgXFwnUHJvbWlzZVxcJzogUGxlYXNlIHVzZSB0aGUgXFwnbmV3XFwnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB0aGlzLl90aGVuID0gW107XG4gIGludm9rZVJlc29sdmVyKHJlc29sdmVyLCB0aGlzKTtcbn1cblxuUC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBQLFxuICBfc3RhdGU6IFBFTkRJTkcsXG4gIF90aGVuOiBudWxsLFxuICBfZGF0YTogdW5kZWZpbmVkLFxuICBfaGFuZGxlZDogZmFsc2UsXG4gIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICB2YXIgc3Vic2NyaWJlciA9IHtcbiAgICAgIG93bmVyOiB0aGlzLFxuICAgICAgdGhlbjogbmV3IHRoaXMuY29uc3RydWN0b3IoTk9PUCksXG4gICAgICBmdWxmaWxsZWQ6IG9uRnVsZmlsbG1lbnQsXG4gICAgICByZWplY3RlZDogb25SZWplY3Rpb25cbiAgICB9O1xuXG4gICAgaWYgKChvblJlamVjdGlvbiB8fCBvbkZ1bGZpbGxtZW50KSAmJiAhdGhpcy5faGFuZGxlZCkge1xuICAgICAgdGhpcy5faGFuZGxlZCA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gUkVKRUNURUQgJiYgaXNOb2RlKSB7XG4gICAgICAgIGFzeW5jQ2FsbChub3RpZnlSZWplY3Rpb25IYW5kbGVkLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3RhdGUgPT09IEZVTEZJTExFRCB8fCB0aGlzLl9zdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICAgIC8vIGFscmVhZHkgcmVzb2x2ZWQsIGNhbGwgY2FsbGJhY2sgYXN5bmNcbiAgICAgIGFzeW5jQ2FsbChpbnZva2VDYWxsYmFjaywgc3Vic2NyaWJlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHN1YnNjcmliZVxuICAgICAgdGhpcy5fdGhlbi5wdXNoKHN1YnNjcmliZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzY3JpYmVyLnRoZW47XG4gIH0sXG4gIGNhdGNoOiBmdW5jdGlvbiBfY2F0Y2gob25SZWplY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcbiAgfVxufTtcblxuUC5hbGwgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHByb21pc2VzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gUHJvbWlzZS5hbGwoKS4nKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgcmVtYWluaW5nID0gMDtcblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKGluZGV4KSB7XG4gICAgICByZW1haW5pbmcrKztcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgICBpZiAoISAtLXJlbWFpbmluZykge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIHByb21pc2U7IGkgPCBwcm9taXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2VzW2ldO1xuXG4gICAgICBpZiAocHJvbWlzZSAmJiB0eXBlb2YgcHJvbWlzZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlcihpKSwgcmVqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNbaV0gPSBwcm9taXNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcmVtYWluaW5nKSB7XG4gICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5QLnJhY2UgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHByb21pc2VzKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gUHJvbWlzZS5yYWNlKCkuJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBwcm9taXNlOyBpIDwgcHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlc1tpXTtcblxuICAgICAgaWYgKHByb21pc2UgJiYgdHlwZW9mIHByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocHJvbWlzZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cblAucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgJiYgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0pO1xufTtcblxuUC5yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxudmFyIHBpY2tlZCA9IHR5cGVvZiBQcm9taXNlID09PSAnZnVuY3Rpb24nID8gUHJvbWlzZSA6IFA7XG5cbnZhciBkID0gVU5JVFNfSU5fR1JJRDtcbnZhciBtZWFuaW5nbGVzc1RyYW5zZm9ybSA9IHtcbiAgc2l6ZTogMTYsXG4gIHg6IDAsXG4gIHk6IDAsXG4gIHJvdGF0ZTogMCxcbiAgZmxpcFg6IGZhbHNlLFxuICBmbGlwWTogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQobmFtZSkge1xuICByZXR1cm4gflJFU0VSVkVEX0NMQVNTRVMuaW5kZXhPZihuYW1lKTtcbn1cbmZ1bmN0aW9uIGluc2VydENzcyhjc3MpIHtcbiAgaWYgKCFjc3MgfHwgIUlTX0RPTSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICBzdHlsZS5pbm5lckhUTUwgPSBjc3M7XG4gIHZhciBoZWFkQ2hpbGRyZW4gPSBET0NVTUVOVC5oZWFkLmNoaWxkTm9kZXM7XG4gIHZhciBiZWZvcmVDaGlsZCA9IG51bGw7XG5cbiAgZm9yICh2YXIgaSA9IGhlYWRDaGlsZHJlbi5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgIHZhciBjaGlsZCA9IGhlYWRDaGlsZHJlbltpXTtcbiAgICB2YXIgdGFnTmFtZSA9IChjaGlsZC50YWdOYW1lIHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgaWYgKFsnU1RZTEUnLCAnTElOSyddLmluZGV4T2YodGFnTmFtZSkgPiAtMSkge1xuICAgICAgYmVmb3JlQ2hpbGQgPSBjaGlsZDtcbiAgICB9XG4gIH1cblxuICBET0NVTUVOVC5oZWFkLmluc2VydEJlZm9yZShzdHlsZSwgYmVmb3JlQ2hpbGQpO1xuICByZXR1cm4gY3NzO1xufVxudmFyIGlkUG9vbCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG5mdW5jdGlvbiBuZXh0VW5pcXVlSWQoKSB7XG4gIHZhciBzaXplID0gMTI7XG4gIHZhciBpZCA9ICcnO1xuXG4gIHdoaWxlIChzaXplLS0gPiAwKSB7XG4gICAgaWQgKz0gaWRQb29sW01hdGgucmFuZG9tKCkgKiA2MiB8IDBdO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufVxuZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgdmFyIGFycmF5ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IChvYmogfHwgW10pLmxlbmd0aCA+Pj4gMDsgaS0tOykge1xuICAgIGFycmF5W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuZnVuY3Rpb24gY2xhc3NBcnJheShub2RlKSB7XG4gIGlmIChub2RlLmNsYXNzTGlzdCkge1xuICAgIHJldHVybiB0b0FycmF5KG5vZGUuY2xhc3NMaXN0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKG5vZGUuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKS5zcGxpdCgnICcpLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEljb25OYW1lKGZhbWlseVByZWZpeCwgY2xzKSB7XG4gIHZhciBwYXJ0cyA9IGNscy5zcGxpdCgnLScpO1xuICB2YXIgcHJlZml4ID0gcGFydHNbMF07XG4gIHZhciBpY29uTmFtZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJy0nKTtcblxuICBpZiAocHJlZml4ID09PSBmYW1pbHlQcmVmaXggJiYgaWNvbk5hbWUgIT09ICcnICYmICFpc1Jlc2VydmVkKGljb25OYW1lKSkge1xuICAgIHJldHVybiBpY29uTmFtZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gaHRtbEVzY2FwZShzdHIpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHN0cikucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvJy9nLCAnJiMzOTsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuZnVuY3Rpb24gam9pbkF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cmlidXRlcyB8fCB7fSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICByZXR1cm4gYWNjICsgXCJcIi5jb25jYXQoYXR0cmlidXRlTmFtZSwgXCI9XFxcIlwiKS5jb25jYXQoaHRtbEVzY2FwZShhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSwgXCJcXFwiIFwiKTtcbiAgfSwgJycpLnRyaW0oKTtcbn1cbmZ1bmN0aW9uIGpvaW5TdHlsZXMoc3R5bGVzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMgfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZU5hbWUpIHtcbiAgICByZXR1cm4gYWNjICsgXCJcIi5jb25jYXQoc3R5bGVOYW1lLCBcIjogXCIpLmNvbmNhdChzdHlsZXNbc3R5bGVOYW1lXSwgXCI7XCIpO1xuICB9LCAnJyk7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSB7XG4gIHJldHVybiB0cmFuc2Zvcm0uc2l6ZSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0uc2l6ZSB8fCB0cmFuc2Zvcm0ueCAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ueCB8fCB0cmFuc2Zvcm0ueSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ueSB8fCB0cmFuc2Zvcm0ucm90YXRlICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS5yb3RhdGUgfHwgdHJhbnNmb3JtLmZsaXBYIHx8IHRyYW5zZm9ybS5mbGlwWTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUZvclN2ZyhfcmVmKSB7XG4gIHZhciB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybSxcbiAgICAgIGNvbnRhaW5lcldpZHRoID0gX3JlZi5jb250YWluZXJXaWR0aCxcbiAgICAgIGljb25XaWR0aCA9IF9yZWYuaWNvbldpZHRoO1xuICB2YXIgb3V0ZXIgPSB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQoY29udGFpbmVyV2lkdGggLyAyLCBcIiAyNTYpXCIpXG4gIH07XG4gIHZhciBpbm5lclRyYW5zbGF0ZSA9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAqIDMyLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAqIDMyLCBcIikgXCIpO1xuICB2YXIgaW5uZXJTY2FsZSA9IFwic2NhbGUoXCIuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBYID8gLTEgOiAxKSwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFkgPyAtMSA6IDEpLCBcIikgXCIpO1xuICB2YXIgaW5uZXJSb3RhdGUgPSBcInJvdGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnJvdGF0ZSwgXCIgMCAwKVwiKTtcbiAgdmFyIGlubmVyID0ge1xuICAgIHRyYW5zZm9ybTogXCJcIi5jb25jYXQoaW5uZXJUcmFuc2xhdGUsIFwiIFwiKS5jb25jYXQoaW5uZXJTY2FsZSwgXCIgXCIpLmNvbmNhdChpbm5lclJvdGF0ZSlcbiAgfTtcbiAgdmFyIHBhdGggPSB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQoaWNvbldpZHRoIC8gMiAqIC0xLCBcIiAtMjU2KVwiKVxuICB9O1xuICByZXR1cm4ge1xuICAgIG91dGVyOiBvdXRlcixcbiAgICBpbm5lcjogaW5uZXIsXG4gICAgcGF0aDogcGF0aFxuICB9O1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtRm9yQ3NzKF9yZWYyKSB7XG4gIHZhciB0cmFuc2Zvcm0gPSBfcmVmMi50cmFuc2Zvcm0sXG4gICAgICBfcmVmMiR3aWR0aCA9IF9yZWYyLndpZHRoLFxuICAgICAgd2lkdGggPSBfcmVmMiR3aWR0aCA9PT0gdm9pZCAwID8gVU5JVFNfSU5fR1JJRCA6IF9yZWYyJHdpZHRoLFxuICAgICAgX3JlZjIkaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0LFxuICAgICAgaGVpZ2h0ID0gX3JlZjIkaGVpZ2h0ID09PSB2b2lkIDAgPyBVTklUU19JTl9HUklEIDogX3JlZjIkaGVpZ2h0LFxuICAgICAgX3JlZjIkc3RhcnRDZW50ZXJlZCA9IF9yZWYyLnN0YXJ0Q2VudGVyZWQsXG4gICAgICBzdGFydENlbnRlcmVkID0gX3JlZjIkc3RhcnRDZW50ZXJlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiRzdGFydENlbnRlcmVkO1xuICB2YXIgdmFsID0gJyc7XG5cbiAgaWYgKHN0YXJ0Q2VudGVyZWQgJiYgSVNfSUUpIHtcbiAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCAtIHdpZHRoIC8gMiwgXCJlbSwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQgLSBoZWlnaHQgLyAyLCBcImVtKSBcIik7XG4gIH0gZWxzZSBpZiAoc3RhcnRDZW50ZXJlZCkge1xuICAgIHZhbCArPSBcInRyYW5zbGF0ZShjYWxjKC01MCUgKyBcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkLCBcImVtKSwgY2FsYygtNTAlICsgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQsIFwiZW0pKSBcIik7XG4gIH0gZWxzZSB7XG4gICAgdmFsICs9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQsIFwiZW0sIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkLCBcImVtKSBcIik7XG4gIH1cblxuICB2YWwgKz0gXCJzY2FsZShcIi5jb25jYXQodHJhbnNmb3JtLnNpemUgLyBkICogKHRyYW5zZm9ybS5mbGlwWCA/IC0xIDogMSksIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gZCAqICh0cmFuc2Zvcm0uZmxpcFkgPyAtMSA6IDEpLCBcIikgXCIpO1xuICB2YWwgKz0gXCJyb3RhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS5yb3RhdGUsIFwiZGVnKSBcIik7XG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBBTExfU1BBQ0UgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnXG59O1xuZnVuY3Rpb24gbWFrZUljb25NYXNraW5nIChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybTtcbiAgdmFyIG1haW5XaWR0aCA9IG1haW4ud2lkdGgsXG4gICAgICBtYWluUGF0aCA9IG1haW4uaWNvbjtcbiAgdmFyIG1hc2tXaWR0aCA9IG1hc2sud2lkdGgsXG4gICAgICBtYXNrUGF0aCA9IG1hc2suaWNvbjtcbiAgdmFyIHRyYW5zID0gdHJhbnNmb3JtRm9yU3ZnKHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBjb250YWluZXJXaWR0aDogbWFza1dpZHRoLFxuICAgIGljb25XaWR0aDogbWFpbldpZHRoXG4gIH0pO1xuICB2YXIgbWFza1JlY3QgPSB7XG4gICAgdGFnOiAncmVjdCcsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgQUxMX1NQQUNFLCB7XG4gICAgICBmaWxsOiAnd2hpdGUnXG4gICAgfSlcbiAgfTtcbiAgdmFyIG1hc2tJbm5lckdyb3VwID0ge1xuICAgIHRhZzogJ2cnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLmlubmVyKSxcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgbWFpblBhdGguYXR0cmlidXRlcywgdHJhbnMucGF0aCwge1xuICAgICAgICBmaWxsOiAnYmxhY2snXG4gICAgICB9KVxuICAgIH1dXG4gIH07XG4gIHZhciBtYXNrT3V0ZXJHcm91cCA9IHtcbiAgICB0YWc6ICdnJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5vdXRlciksXG4gICAgY2hpbGRyZW46IFttYXNrSW5uZXJHcm91cF1cbiAgfTtcbiAgdmFyIG1hc2tJZCA9IFwibWFzay1cIi5jb25jYXQobmV4dFVuaXF1ZUlkKCkpO1xuICB2YXIgY2xpcElkID0gXCJjbGlwLVwiLmNvbmNhdChuZXh0VW5pcXVlSWQoKSk7XG4gIHZhciBtYXNrVGFnID0ge1xuICAgIHRhZzogJ21hc2snLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEFMTF9TUEFDRSwge1xuICAgICAgaWQ6IG1hc2tJZCxcbiAgICAgIG1hc2tVbml0czogJ3VzZXJTcGFjZU9uVXNlJyxcbiAgICAgIG1hc2tDb250ZW50VW5pdHM6ICd1c2VyU3BhY2VPblVzZSdcbiAgICB9KSxcbiAgICBjaGlsZHJlbjogW21hc2tSZWN0LCBtYXNrT3V0ZXJHcm91cF1cbiAgfTtcbiAgdmFyIGRlZnMgPSB7XG4gICAgdGFnOiAnZGVmcycsXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICB0YWc6ICdjbGlwUGF0aCcsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGlkOiBjbGlwSWRcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW21hc2tQYXRoXVxuICAgIH0sIG1hc2tUYWddXG4gIH07XG4gIGNoaWxkcmVuLnB1c2goZGVmcywge1xuICAgIHRhZzogJ3JlY3QnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAnY2xpcC1wYXRoJzogXCJ1cmwoI1wiLmNvbmNhdChjbGlwSWQsIFwiKVwiKSxcbiAgICAgIG1hc2s6IFwidXJsKCNcIi5jb25jYXQobWFza0lkLCBcIilcIilcbiAgICB9LCBBTExfU1BBQ0UpXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VJY29uU3RhbmRhcmQgKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBtYWluID0gX3JlZi5tYWluLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICBzdHlsZXMgPSBfcmVmLnN0eWxlcztcbiAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhzdHlsZXMpO1xuXG4gIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICB9XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pKSB7XG4gICAgdmFyIHRyYW5zID0gdHJhbnNmb3JtRm9yU3ZnKHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgY29udGFpbmVyV2lkdGg6IG1haW4ud2lkdGgsXG4gICAgICBpY29uV2lkdGg6IG1haW4ud2lkdGhcbiAgICB9KTtcbiAgICBjaGlsZHJlbi5wdXNoKHtcbiAgICAgIHRhZzogJ2cnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMub3V0ZXIpLFxuICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgIHRhZzogJ2cnLFxuICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5pbm5lciksXG4gICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgIHRhZzogbWFpbi5pY29uLnRhZyxcbiAgICAgICAgICBjaGlsZHJlbjogbWFpbi5pY29uLmNoaWxkcmVuLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIG1haW4uaWNvbi5hdHRyaWJ1dGVzLCB0cmFucy5wYXRoKVxuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZHJlbi5wdXNoKG1haW4uaWNvbik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFzSWNvbiAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgc3R5bGVzID0gX3JlZi5zdHlsZXMsXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybTtcblxuICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkgJiYgbWFpbi5mb3VuZCAmJiAhbWFzay5mb3VuZCkge1xuICAgIHZhciB3aWR0aCA9IG1haW4ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IG1haW4uaGVpZ2h0O1xuICAgIHZhciBvZmZzZXQgPSB7XG4gICAgICB4OiB3aWR0aCAvIGhlaWdodCAvIDIsXG4gICAgICB5OiAwLjVcbiAgICB9O1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBqb2luU3R5bGVzKF9vYmplY3RTcHJlYWQoe30sIHN0eWxlcywge1xuICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBcIlwiLmNvbmNhdChvZmZzZXQueCArIHRyYW5zZm9ybS54IC8gMTYsIFwiZW0gXCIpLmNvbmNhdChvZmZzZXQueSArIHRyYW5zZm9ybS55IC8gMTYsIFwiZW1cIilcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gW3tcbiAgICB0YWc6ICdzdmcnLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH1dO1xufVxuXG5mdW5jdGlvbiBhc1N5bWJvbCAoX3JlZikge1xuICB2YXIgcHJlZml4ID0gX3JlZi5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IF9yZWYuaWNvbk5hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgc3ltYm9sID0gX3JlZi5zeW1ib2w7XG4gIHZhciBpZCA9IHN5bWJvbCA9PT0gdHJ1ZSA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCItXCIpLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KGljb25OYW1lKSA6IHN5bWJvbDtcbiAgcmV0dXJuIFt7XG4gICAgdGFnOiAnc3ZnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBzdHlsZTogJ2Rpc3BsYXk6IG5vbmU7J1xuICAgIH0sXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICB0YWc6ICdzeW1ib2wnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgYXR0cmlidXRlcywge1xuICAgICAgICBpZDogaWRcbiAgICAgIH0pLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfV1cbiAgfV07XG59XG5cbmZ1bmN0aW9uIG1ha2VJbmxpbmVTdmdBYnN0cmFjdChwYXJhbXMpIHtcbiAgdmFyIF9wYXJhbXMkaWNvbnMgPSBwYXJhbXMuaWNvbnMsXG4gICAgICBtYWluID0gX3BhcmFtcyRpY29ucy5tYWluLFxuICAgICAgbWFzayA9IF9wYXJhbXMkaWNvbnMubWFzayxcbiAgICAgIHByZWZpeCA9IHBhcmFtcy5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IHBhcmFtcy5pY29uTmFtZSxcbiAgICAgIHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICBzeW1ib2wgPSBwYXJhbXMuc3ltYm9sLFxuICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICBleHRyYSA9IHBhcmFtcy5leHRyYSxcbiAgICAgIF9wYXJhbXMkd2F0Y2hhYmxlID0gcGFyYW1zLndhdGNoYWJsZSxcbiAgICAgIHdhdGNoYWJsZSA9IF9wYXJhbXMkd2F0Y2hhYmxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkd2F0Y2hhYmxlO1xuXG4gIHZhciBfcmVmID0gbWFzay5mb3VuZCA/IG1hc2sgOiBtYWluLFxuICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG5cbiAgdmFyIHdpZHRoQ2xhc3MgPSBcImZhLXctXCIuY29uY2F0KE1hdGguY2VpbCh3aWR0aCAvIGhlaWdodCAqIDE2KSk7XG4gIHZhciBhdHRyQ2xhc3MgPSBbY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MsIGljb25OYW1lID8gXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChpY29uTmFtZSkgOiAnJywgd2lkdGhDbGFzc10uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGV4dHJhLmNsYXNzZXMuaW5kZXhPZihjKSA9PT0gLTE7XG4gIH0pLmNvbmNhdChleHRyYS5jbGFzc2VzKS5qb2luKCcgJyk7XG4gIHZhciBjb250ZW50ID0ge1xuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB7XG4gICAgICAnZGF0YS1wcmVmaXgnOiBwcmVmaXgsXG4gICAgICAnZGF0YS1pY29uJzogaWNvbk5hbWUsXG4gICAgICAnY2xhc3MnOiBhdHRyQ2xhc3MsXG4gICAgICAncm9sZSc6ICdpbWcnLFxuICAgICAgJ3htbG5zJzogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICAgICd2aWV3Qm94JzogXCIwIDAgXCIuY29uY2F0KHdpZHRoLCBcIiBcIikuY29uY2F0KGhlaWdodClcbiAgICB9KVxuICB9O1xuXG4gIGlmICh3YXRjaGFibGUpIHtcbiAgICBjb250ZW50LmF0dHJpYnV0ZXNbREFUQV9GQV9JMlNWR10gPSAnJztcbiAgfVxuXG4gIGlmICh0aXRsZSkgY29udGVudC5jaGlsZHJlbi5wdXNoKHtcbiAgICB0YWc6ICd0aXRsZScsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgaWQ6IGNvbnRlbnQuYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gfHwgXCJ0aXRsZS1cIi5jb25jYXQobmV4dFVuaXF1ZUlkKCkpXG4gICAgfSxcbiAgICBjaGlsZHJlbjogW3RpdGxlXVxuICB9KTtcblxuICB2YXIgYXJncyA9IF9vYmplY3RTcHJlYWQoe30sIGNvbnRlbnQsIHtcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgbWFpbjogbWFpbixcbiAgICBtYXNrOiBtYXNrLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHN5bWJvbDogc3ltYm9sLFxuICAgIHN0eWxlczogZXh0cmEuc3R5bGVzXG4gIH0pO1xuXG4gIHZhciBfcmVmMiA9IG1hc2suZm91bmQgJiYgbWFpbi5mb3VuZCA/IG1ha2VJY29uTWFza2luZyhhcmdzKSA6IG1ha2VJY29uU3RhbmRhcmQoYXJncyksXG4gICAgICBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG5cbiAgYXJncy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICBhcmdzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXG4gIGlmIChzeW1ib2wpIHtcbiAgICByZXR1cm4gYXNTeW1ib2woYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFzSWNvbihhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gbWFrZUxheWVyc1RleHRBYnN0cmFjdChwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnQgPSBwYXJhbXMuY29udGVudCxcbiAgICAgIHdpZHRoID0gcGFyYW1zLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gcGFyYW1zLmhlaWdodCxcbiAgICAgIHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhLFxuICAgICAgX3BhcmFtcyR3YXRjaGFibGUyID0gcGFyYW1zLndhdGNoYWJsZSxcbiAgICAgIHdhdGNoYWJsZSA9IF9wYXJhbXMkd2F0Y2hhYmxlMiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHdhdGNoYWJsZTI7XG5cbiAgdmFyIGF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB0aXRsZSA/IHtcbiAgICAndGl0bGUnOiB0aXRsZVxuICB9IDoge30sIHtcbiAgICAnY2xhc3MnOiBleHRyYS5jbGFzc2VzLmpvaW4oJyAnKVxuICB9KTtcblxuICBpZiAod2F0Y2hhYmxlKSB7XG4gICAgYXR0cmlidXRlc1tEQVRBX0ZBX0kyU1ZHXSA9ICcnO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IF9vYmplY3RTcHJlYWQoe30sIGV4dHJhLnN0eWxlcyk7XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pKSB7XG4gICAgc3R5bGVzWyd0cmFuc2Zvcm0nXSA9IHRyYW5zZm9ybUZvckNzcyh7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIHN0YXJ0Q2VudGVyZWQ6IHRydWUsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH0pO1xuICAgIHN0eWxlc1snLXdlYmtpdC10cmFuc2Zvcm0nXSA9IHN0eWxlc1sndHJhbnNmb3JtJ107XG4gIH1cblxuICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKHN0eWxlcyk7XG5cbiAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gIH1cblxuICB2YXIgdmFsID0gW107XG4gIHZhbC5wdXNoKHtcbiAgICB0YWc6ICdzcGFuJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuOiBbY29udGVudF1cbiAgfSk7XG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgdmFsLnB1c2goe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnc3Itb25seSdcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3RpdGxlXVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cbmZ1bmN0aW9uIG1ha2VMYXllcnNDb3VudGVyQWJzdHJhY3QocGFyYW1zKSB7XG4gIHZhciBjb250ZW50ID0gcGFyYW1zLmNvbnRlbnQsXG4gICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhO1xuXG4gIHZhciBhdHRyaWJ1dGVzID0gX29iamVjdFNwcmVhZCh7fSwgZXh0cmEuYXR0cmlidXRlcywgdGl0bGUgPyB7XG4gICAgJ3RpdGxlJzogdGl0bGVcbiAgfSA6IHt9LCB7XG4gICAgJ2NsYXNzJzogZXh0cmEuY2xhc3Nlcy5qb2luKCcgJylcbiAgfSk7XG5cbiAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhleHRyYS5zdHlsZXMpO1xuXG4gIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICB9XG5cbiAgdmFyIHZhbCA9IFtdO1xuICB2YWwucHVzaCh7XG4gICAgdGFnOiAnc3BhbicsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbjogW2NvbnRlbnRdXG4gIH0pO1xuXG4gIGlmICh0aXRsZSkge1xuICAgIHZhbC5wdXNoKHtcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogJ3NyLW9ubHknXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBub29wJDEgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBwID0gY29uZmlnLm1lYXN1cmVQZXJmb3JtYW5jZSAmJiBQRVJGT1JNQU5DRSAmJiBQRVJGT1JNQU5DRS5tYXJrICYmIFBFUkZPUk1BTkNFLm1lYXN1cmUgPyBQRVJGT1JNQU5DRSA6IHtcbiAgbWFyazogbm9vcCQxLFxuICBtZWFzdXJlOiBub29wJDFcbn07XG52YXIgcHJlYW1ibGUgPSBcIkZBIFxcXCI1LjcuMlxcXCJcIjtcblxudmFyIGJlZ2luID0gZnVuY3Rpb24gYmVnaW4obmFtZSkge1xuICBwLm1hcmsoXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgYmVnaW5zXCIpKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZW5kKG5hbWUpO1xuICB9O1xufTtcblxudmFyIGVuZCA9IGZ1bmN0aW9uIGVuZChuYW1lKSB7XG4gIHAubWFyayhcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBlbmRzXCIpKTtcbiAgcC5tZWFzdXJlKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUpLCBcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBiZWdpbnNcIiksIFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGVuZHNcIikpO1xufTtcblxudmFyIHBlcmYgPSB7XG4gIGJlZ2luOiBiZWdpbixcbiAgZW5kOiBlbmRcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgaGVscGVyIHRvIGJpbmQgYSBmdW5jdGlvbiBrbm93biB0byBoYXZlIDQgYXJndW1lbnRzXG4gKiB0byBhIGdpdmVuIGNvbnRleHQuXG4gKi9cblxudmFyIGJpbmRJbnRlcm5hbDQgPSBmdW5jdGlvbiBiaW5kSW50ZXJuYWw0KGZ1bmMsIHRoaXNDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0NvbnRleHQsIGEsIGIsIGMsIGQpO1xuICB9O1xufTtcblxuLyoqXG4gKiAjIFJlZHVjZVxuICpcbiAqIEEgZmFzdCBvYmplY3QgYC5yZWR1Y2UoKWAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHN1YmplY3QgICAgICBUaGUgb2JqZWN0IHRvIHJlZHVjZSBvdmVyLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgICAgICAgICBUaGUgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge21peGVkfSAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHRoaXNDb250ZXh0ICBUaGUgY29udGV4dCBmb3IgdGhlIHJlZHVjZXIuXG4gKiBAcmV0dXJuIHttaXhlZH0gICAgICAgICAgICAgICAgIFRoZSBmaW5hbCByZXN1bHQuXG4gKi9cblxuXG52YXIgcmVkdWNlID0gZnVuY3Rpb24gZmFzdFJlZHVjZU9iamVjdChzdWJqZWN0LCBmbiwgaW5pdGlhbFZhbHVlLCB0aGlzQ29udGV4dCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHN1YmplY3QpLFxuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICBpdGVyYXRvciA9IHRoaXNDb250ZXh0ICE9PSB1bmRlZmluZWQgPyBiaW5kSW50ZXJuYWw0KGZuLCB0aGlzQ29udGV4dCkgOiBmbixcbiAgICAgIGksXG4gICAgICBrZXksXG4gICAgICByZXN1bHQ7XG5cbiAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaSA9IDE7XG4gICAgcmVzdWx0ID0gc3ViamVjdFtrZXlzWzBdXTtcbiAgfSBlbHNlIHtcbiAgICBpID0gMDtcbiAgICByZXN1bHQgPSBpbml0aWFsVmFsdWU7XG4gIH1cblxuICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIHN1YmplY3Rba2V5XSwga2V5LCBzdWJqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBkZWZpbmVJY29ucyhwcmVmaXgsIGljb25zKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRza2lwSG9va3MgPSBwYXJhbXMuc2tpcEhvb2tzLFxuICAgICAgc2tpcEhvb2tzID0gX3BhcmFtcyRza2lwSG9va3MgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRza2lwSG9va3M7XG4gIHZhciBub3JtYWxpemVkID0gT2JqZWN0LmtleXMoaWNvbnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpY29uTmFtZSkge1xuICAgIHZhciBpY29uID0gaWNvbnNbaWNvbk5hbWVdO1xuICAgIHZhciBleHBhbmRlZCA9ICEhaWNvbi5pY29uO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBhY2NbaWNvbi5pY29uTmFtZV0gPSBpY29uLmljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY1tpY29uTmFtZV0gPSBpY29uO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICBpZiAodHlwZW9mIG5hbWVzcGFjZS5ob29rcy5hZGRQYWNrID09PSAnZnVuY3Rpb24nICYmICFza2lwSG9va3MpIHtcbiAgICBuYW1lc3BhY2UuaG9va3MuYWRkUGFjayhwcmVmaXgsIG5vcm1hbGl6ZWQpO1xuICB9IGVsc2Uge1xuICAgIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSA9IF9vYmplY3RTcHJlYWQoe30sIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSB8fCB7fSwgbm9ybWFsaXplZCk7XG4gIH1cbiAgLyoqXG4gICAqIEZvbnQgQXdlc29tZSA0IHVzZWQgdGhlIHByZWZpeCBvZiBgZmFgIGZvciBhbGwgaWNvbnMuIFdpdGggdGhlIGludHJvZHVjdGlvblxuICAgKiBvZiBuZXcgc3R5bGVzIHdlIG5lZWRlZCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gdGhlbS4gUHJlZml4IGBmYWAgaXMgbm93IGFuIGFsaWFzXG4gICAqIGZvciBgZmFzYCBzbyB3ZSdsbCBlYXN5IHRoZSB1cGdyYWRlIHByb2Nlc3MgZm9yIG91ciB1c2VycyBieSBhdXRvbWF0aWNhbGx5IGRlZmluaW5nXG4gICAqIHRoaXMgYXMgd2VsbC5cbiAgICovXG5cblxuICBpZiAocHJlZml4ID09PSAnZmFzJykge1xuICAgIGRlZmluZUljb25zKCdmYScsIGljb25zKTtcbiAgfVxufVxuXG52YXIgc3R5bGVzID0gbmFtZXNwYWNlLnN0eWxlcyxcbiAgICBzaGltcyA9IG5hbWVzcGFjZS5zaGltcztcbnZhciBfYnlVbmljb2RlID0ge307XG52YXIgX2J5TGlnYXR1cmUgPSB7fTtcbnZhciBfYnlPbGROYW1lID0ge307XG52YXIgYnVpbGQgPSBmdW5jdGlvbiBidWlsZCgpIHtcbiAgdmFyIGxvb2t1cCA9IGZ1bmN0aW9uIGxvb2t1cChyZWR1Y2VyKSB7XG4gICAgcmV0dXJuIHJlZHVjZShzdHlsZXMsIGZ1bmN0aW9uIChvLCBzdHlsZSwgcHJlZml4KSB7XG4gICAgICBvW3ByZWZpeF0gPSByZWR1Y2Uoc3R5bGUsIHJlZHVjZXIsIHt9KTtcbiAgICAgIHJldHVybiBvO1xuICAgIH0sIHt9KTtcbiAgfTtcblxuICBfYnlVbmljb2RlID0gbG9va3VwKGZ1bmN0aW9uIChhY2MsIGljb24sIGljb25OYW1lKSB7XG4gICAgaWYgKGljb25bM10pIHtcbiAgICAgIGFjY1tpY29uWzNdXSA9IGljb25OYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0pO1xuICBfYnlMaWdhdHVyZSA9IGxvb2t1cChmdW5jdGlvbiAoYWNjLCBpY29uLCBpY29uTmFtZSkge1xuICAgIHZhciBsaWdhdHVyZXMgPSBpY29uWzJdO1xuICAgIGFjY1tpY29uTmFtZV0gPSBpY29uTmFtZTtcbiAgICBsaWdhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAobGlnYXR1cmUpIHtcbiAgICAgIGFjY1tsaWdhdHVyZV0gPSBpY29uTmFtZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjO1xuICB9KTtcbiAgdmFyIGhhc1JlZ3VsYXIgPSAnZmFyJyBpbiBzdHlsZXM7XG4gIF9ieU9sZE5hbWUgPSByZWR1Y2Uoc2hpbXMsIGZ1bmN0aW9uIChhY2MsIHNoaW0pIHtcbiAgICB2YXIgb2xkTmFtZSA9IHNoaW1bMF07XG4gICAgdmFyIHByZWZpeCA9IHNoaW1bMV07XG4gICAgdmFyIGljb25OYW1lID0gc2hpbVsyXTtcblxuICAgIGlmIChwcmVmaXggPT09ICdmYXInICYmICFoYXNSZWd1bGFyKSB7XG4gICAgICBwcmVmaXggPSAnZmFzJztcbiAgICB9XG5cbiAgICBhY2Nbb2xkTmFtZV0gPSB7XG4gICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZVxuICAgIH07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcbmJ1aWxkKCk7XG5mdW5jdGlvbiBieVVuaWNvZGUocHJlZml4LCB1bmljb2RlKSB7XG4gIHJldHVybiBfYnlVbmljb2RlW3ByZWZpeF1bdW5pY29kZV07XG59XG5mdW5jdGlvbiBieUxpZ2F0dXJlKHByZWZpeCwgbGlnYXR1cmUpIHtcbiAgcmV0dXJuIF9ieUxpZ2F0dXJlW3ByZWZpeF1bbGlnYXR1cmVdO1xufVxuZnVuY3Rpb24gYnlPbGROYW1lKG5hbWUpIHtcbiAgcmV0dXJuIF9ieU9sZE5hbWVbbmFtZV0gfHwge1xuICAgIHByZWZpeDogbnVsbCxcbiAgICBpY29uTmFtZTogbnVsbFxuICB9O1xufVxuXG52YXIgc3R5bGVzJDEgPSBuYW1lc3BhY2Uuc3R5bGVzO1xudmFyIGVtcHR5Q2Fub25pY2FsSWNvbiA9IGZ1bmN0aW9uIGVtcHR5Q2Fub25pY2FsSWNvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgaWNvbk5hbWU6IG51bGwsXG4gICAgcmVzdDogW11cbiAgfTtcbn07XG5mdW5jdGlvbiBnZXRDYW5vbmljYWxJY29uKHZhbHVlcykge1xuICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjbHMpIHtcbiAgICB2YXIgaWNvbk5hbWUgPSBnZXRJY29uTmFtZShjb25maWcuZmFtaWx5UHJlZml4LCBjbHMpO1xuXG4gICAgaWYgKHN0eWxlcyQxW2Nsc10pIHtcbiAgICAgIGFjYy5wcmVmaXggPSBjbHM7XG4gICAgfSBlbHNlIGlmIChjb25maWcuYXV0b0ZldGNoU3ZnICYmIFsnZmFzJywgJ2ZhcicsICdmYWwnLCAnZmFiJywgJ2ZhJ10uaW5kZXhPZihjbHMpID4gLTEpIHtcbiAgICAgIGFjYy5wcmVmaXggPSBjbHM7XG4gICAgfSBlbHNlIGlmIChpY29uTmFtZSkge1xuICAgICAgdmFyIHNoaW0gPSBhY2MucHJlZml4ID09PSAnZmEnID8gYnlPbGROYW1lKGljb25OYW1lKSA6IHt9O1xuICAgICAgYWNjLmljb25OYW1lID0gc2hpbS5pY29uTmFtZSB8fCBpY29uTmFtZTtcbiAgICAgIGFjYy5wcmVmaXggPSBzaGltLnByZWZpeCB8fCBhY2MucHJlZml4O1xuICAgIH0gZWxzZSBpZiAoY2xzICE9PSBjb25maWcucmVwbGFjZW1lbnRDbGFzcyAmJiBjbHMuaW5kZXhPZignZmEtdy0nKSAhPT0gMCkge1xuICAgICAgYWNjLnJlc3QucHVzaChjbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIGVtcHR5Q2Fub25pY2FsSWNvbigpKTtcbn1cbmZ1bmN0aW9uIGljb25Gcm9tTWFwcGluZyhtYXBwaW5nLCBwcmVmaXgsIGljb25OYW1lKSB7XG4gIGlmIChtYXBwaW5nICYmIG1hcHBpbmdbcHJlZml4XSAmJiBtYXBwaW5nW3ByZWZpeF1baWNvbk5hbWVdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgaWNvbjogbWFwcGluZ1twcmVmaXhdW2ljb25OYW1lXVxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9IdG1sKGFic3RyYWN0Tm9kZXMpIHtcbiAgdmFyIHRhZyA9IGFic3RyYWN0Tm9kZXMudGFnLFxuICAgICAgX2Fic3RyYWN0Tm9kZXMkYXR0cmliID0gYWJzdHJhY3ROb2Rlcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9PT0gdm9pZCAwID8ge30gOiBfYWJzdHJhY3ROb2RlcyRhdHRyaWIsXG4gICAgICBfYWJzdHJhY3ROb2RlcyRjaGlsZHIgPSBhYnN0cmFjdE5vZGVzLmNoaWxkcmVuLFxuICAgICAgY2hpbGRyZW4gPSBfYWJzdHJhY3ROb2RlcyRjaGlsZHIgPT09IHZvaWQgMCA/IFtdIDogX2Fic3RyYWN0Tm9kZXMkY2hpbGRyO1xuXG4gIGlmICh0eXBlb2YgYWJzdHJhY3ROb2RlcyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gaHRtbEVzY2FwZShhYnN0cmFjdE5vZGVzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCI8XCIuY29uY2F0KHRhZywgXCIgXCIpLmNvbmNhdChqb2luQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSwgXCI+XCIpLmNvbmNhdChjaGlsZHJlbi5tYXAodG9IdG1sKS5qb2luKCcnKSwgXCI8L1wiKS5jb25jYXQodGFnLCBcIj5cIik7XG4gIH1cbn1cblxudmFyIG5vb3AkMiA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZnVuY3Rpb24gaXNXYXRjaGVkKG5vZGUpIHtcbiAgdmFyIGkyc3ZnID0gbm9kZS5nZXRBdHRyaWJ1dGUgPyBub2RlLmdldEF0dHJpYnV0ZShEQVRBX0ZBX0kyU1ZHKSA6IG51bGw7XG4gIHJldHVybiB0eXBlb2YgaTJzdmcgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBnZXRNdXRhdG9yKCkge1xuICBpZiAoY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIG11dGF0b3JzLnJlcGxhY2U7XG4gIH1cblxuICB2YXIgbXV0YXRvciA9IG11dGF0b3JzW2NvbmZpZy5hdXRvUmVwbGFjZVN2Z107XG4gIHJldHVybiBtdXRhdG9yIHx8IG11dGF0b3JzLnJlcGxhY2U7XG59XG5cbnZhciBtdXRhdG9ycyA9IHtcbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShtdXRhdGlvbikge1xuICAgIHZhciBub2RlID0gbXV0YXRpb25bMF07XG4gICAgdmFyIGFic3RyYWN0ID0gbXV0YXRpb25bMV07XG4gICAgdmFyIG5ld091dGVySFRNTCA9IGFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICB9KS5qb2luKCdcXG4nKTtcblxuICAgIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5vdXRlckhUTUwpIHtcbiAgICAgIG5vZGUub3V0ZXJIVE1MID0gbmV3T3V0ZXJIVE1MICsgKGNvbmZpZy5rZWVwT3JpZ2luYWxTb3VyY2UgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdzdmcnID8gXCI8IS0tIFwiLmNvbmNhdChub2RlLm91dGVySFRNTCwgXCIgLS0+XCIpIDogJycpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICB2YXIgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgbm9kZSk7XG4gICAgICBuZXdOb2RlLm91dGVySFRNTCA9IG5ld091dGVySFRNTDtcbiAgICB9XG4gIH0sXG4gIG5lc3Q6IGZ1bmN0aW9uIG5lc3QobXV0YXRpb24pIHtcbiAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuICAgIHZhciBhYnN0cmFjdCA9IG11dGF0aW9uWzFdOyAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYSByZXBsYWNlZCBub2RlIHdlIGRvIG5vdCB3YW50IHRvIGNvbnRpbnVlIG5lc3Rpbmcgd2l0aGluIGl0LlxuICAgIC8vIFNob3J0LWNpcmN1aXQgdG8gdGhlIHN0YW5kYXJkIHJlcGxhY2VtZW50XG5cbiAgICBpZiAofmNsYXNzQXJyYXkobm9kZSkuaW5kZXhPZihjb25maWcucmVwbGFjZW1lbnRDbGFzcykpIHtcbiAgICAgIHJldHVybiBtdXRhdG9ycy5yZXBsYWNlKG11dGF0aW9uKTtcbiAgICB9XG5cbiAgICB2YXIgZm9yU3ZnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi0uKlwiKSk7XG4gICAgZGVsZXRlIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuc3R5bGU7XG4gICAgdmFyIHNwbGl0Q2xhc3NlcyA9IGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuY2xhc3Muc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgICBpZiAoY2xzID09PSBjb25maWcucmVwbGFjZW1lbnRDbGFzcyB8fCBjbHMubWF0Y2goZm9yU3ZnKSkge1xuICAgICAgICBhY2MudG9TdmcucHVzaChjbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjLnRvTm9kZS5wdXNoKGNscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge1xuICAgICAgdG9Ob2RlOiBbXSxcbiAgICAgIHRvU3ZnOiBbXVxuICAgIH0pO1xuICAgIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuY2xhc3MgPSBzcGxpdENsYXNzZXMudG9Tdmcuam9pbignICcpO1xuICAgIHZhciBuZXdJbm5lckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgfSkuam9pbignXFxuJyk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgc3BsaXRDbGFzc2VzLnRvTm9kZS5qb2luKCcgJykpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcsICcnKTtcbiAgICBub2RlLmlubmVySFRNTCA9IG5ld0lubmVySFRNTDtcbiAgfVxufTtcbmZ1bmN0aW9uIHBlcmZvcm0obXV0YXRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgY2FsbGJhY2tGdW5jdGlvbiA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogbm9vcCQyO1xuXG4gIGlmIChtdXRhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgY2FsbGJhY2tGdW5jdGlvbigpO1xuICB9IGVsc2Uge1xuICAgIHZhciBmcmFtZSA9IFdJTkRPVy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKG9wKSB7XG4gICAgICByZXR1cm4gb3AoKTtcbiAgICB9O1xuXG4gICAgZnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG11dGF0b3IgPSBnZXRNdXRhdG9yKCk7XG4gICAgICB2YXIgbWFyayA9IHBlcmYuYmVnaW4oJ211dGF0ZScpO1xuICAgICAgbXV0YXRpb25zLm1hcChtdXRhdG9yKTtcbiAgICAgIG1hcmsoKTtcbiAgICAgIGNhbGxiYWNrRnVuY3Rpb24oKTtcbiAgICB9KTtcbiAgfVxufVxudmFyIGRpc2FibGVkID0gZmFsc2U7XG5mdW5jdGlvbiBkaXNhYmxlT2JzZXJ2YXRpb24oKSB7XG4gIGRpc2FibGVkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuYWJsZU9ic2VydmF0aW9uKCkge1xuICBkaXNhYmxlZCA9IGZhbHNlO1xufVxudmFyIG1vID0gbnVsbDtcbmZ1bmN0aW9uIG9ic2VydmUob3B0aW9ucykge1xuICBpZiAoIU1VVEFUSU9OX09CU0VSVkVSKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFjb25maWcub2JzZXJ2ZU11dGF0aW9ucykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0cmVlQ2FsbGJhY2sgPSBvcHRpb25zLnRyZWVDYWxsYmFjayxcbiAgICAgIG5vZGVDYWxsYmFjayA9IG9wdGlvbnMubm9kZUNhbGxiYWNrLFxuICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayA9IG9wdGlvbnMucHNldWRvRWxlbWVudHNDYWxsYmFjayxcbiAgICAgIF9vcHRpb25zJG9ic2VydmVNdXRhdCA9IG9wdGlvbnMub2JzZXJ2ZU11dGF0aW9uc1Jvb3QsXG4gICAgICBvYnNlcnZlTXV0YXRpb25zUm9vdCA9IF9vcHRpb25zJG9ic2VydmVNdXRhdCA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfb3B0aW9ucyRvYnNlcnZlTXV0YXQ7XG4gIG1vID0gbmV3IE1VVEFUSU9OX09CU0VSVkVSKGZ1bmN0aW9uIChvYmplY3RzKSB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG4gICAgdG9BcnJheShvYmplY3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvblJlY29yZCkge1xuICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnICYmIG11dGF0aW9uUmVjb3JkLmFkZGVkTm9kZXMubGVuZ3RoID4gMCAmJiAhaXNXYXRjaGVkKG11dGF0aW9uUmVjb3JkLmFkZGVkTm9kZXNbMF0pKSB7XG4gICAgICAgIGlmIChjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cmVlQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvblJlY29yZC50YXJnZXQucGFyZW50Tm9kZSAmJiBjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgaXNXYXRjaGVkKG11dGF0aW9uUmVjb3JkLnRhcmdldCkgJiYgfkFUVFJJQlVURVNfV0FUQ0hFRF9GT1JfTVVUQVRJT04uaW5kZXhPZihtdXRhdGlvblJlY29yZC5hdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICBpZiAobXV0YXRpb25SZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgIHZhciBfZ2V0Q2Fub25pY2FsSWNvbiA9IGdldENhbm9uaWNhbEljb24oY2xhc3NBcnJheShtdXRhdGlvblJlY29yZC50YXJnZXQpKSxcbiAgICAgICAgICAgICAgcHJlZml4ID0gX2dldENhbm9uaWNhbEljb24ucHJlZml4LFxuICAgICAgICAgICAgICBpY29uTmFtZSA9IF9nZXRDYW5vbmljYWxJY29uLmljb25OYW1lO1xuXG4gICAgICAgICAgaWYgKHByZWZpeCkgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaXgnLCBwcmVmaXgpO1xuICAgICAgICAgIGlmIChpY29uTmFtZSkgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1pY29uJywgaWNvbk5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGVDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICBtby5vYnNlcnZlKG9ic2VydmVNdXRhdGlvbnNSb290LCB7XG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlXG4gIH0pO1xufVxuZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgaWYgKCFtbykgcmV0dXJuO1xuICBtby5kaXNjb25uZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHN0eWxlUGFyc2VyIChub2RlKSB7XG4gIHZhciBzdHlsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICB2YXIgdmFsID0gW107XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgdmFsID0gc3R5bGUuc3BsaXQoJzsnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGUpIHtcbiAgICAgIHZhciBzdHlsZXMgPSBzdHlsZS5zcGxpdCgnOicpO1xuICAgICAgdmFyIHByb3AgPSBzdHlsZXNbMF07XG4gICAgICB2YXIgdmFsdWUgPSBzdHlsZXMuc2xpY2UoMSk7XG5cbiAgICAgIGlmIChwcm9wICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWNjW3Byb3BdID0gdmFsdWUuam9pbignOicpLnRyaW0oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiB0b0hleCh1bmljb2RlKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHVuaWNvZGUubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaGV4ID0gdW5pY29kZS5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDE2KTtcbiAgICByZXN1bHQgKz0gKCcwMDAnICsgaGV4KS5zbGljZSgtNCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGFzc1BhcnNlciAobm9kZSkge1xuICB2YXIgZXhpc3RpbmdQcmVmaXggPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaXgnKTtcbiAgdmFyIGV4aXN0aW5nSWNvbk5hbWUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pY29uJyk7XG4gIHZhciBpbm5lclRleHQgPSBub2RlLmlubmVyVGV4dCAhPT0gdW5kZWZpbmVkID8gbm9kZS5pbm5lclRleHQudHJpbSgpIDogJyc7XG4gIHZhciB2YWwgPSBnZXRDYW5vbmljYWxJY29uKGNsYXNzQXJyYXkobm9kZSkpO1xuXG4gIGlmIChleGlzdGluZ1ByZWZpeCAmJiBleGlzdGluZ0ljb25OYW1lKSB7XG4gICAgdmFsLnByZWZpeCA9IGV4aXN0aW5nUHJlZml4O1xuICAgIHZhbC5pY29uTmFtZSA9IGV4aXN0aW5nSWNvbk5hbWU7XG4gIH1cblxuICBpZiAodmFsLnByZWZpeCAmJiBpbm5lclRleHQubGVuZ3RoID4gMSkge1xuICAgIHZhbC5pY29uTmFtZSA9IGJ5TGlnYXR1cmUodmFsLnByZWZpeCwgbm9kZS5pbm5lclRleHQpO1xuICB9IGVsc2UgaWYgKHZhbC5wcmVmaXggJiYgaW5uZXJUZXh0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHZhbC5pY29uTmFtZSA9IGJ5VW5pY29kZSh2YWwucHJlZml4LCB0b0hleChub2RlLmlubmVyVGV4dCkpO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIHBhcnNlVHJhbnNmb3JtU3RyaW5nID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKSB7XG4gIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgc2l6ZTogMTYsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGZsaXBYOiBmYWxzZSxcbiAgICBmbGlwWTogZmFsc2UsXG4gICAgcm90YXRlOiAwXG4gIH07XG5cbiAgaWYgKCF0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cmFuc2Zvcm1TdHJpbmcudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuKSB7XG4gICAgICB2YXIgcGFydHMgPSBuLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy0nKTtcbiAgICAgIHZhciBmaXJzdCA9IHBhcnRzWzBdO1xuICAgICAgdmFyIHJlc3QgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG5cbiAgICAgIGlmIChmaXJzdCAmJiByZXN0ID09PSAnaCcpIHtcbiAgICAgICAgYWNjLmZsaXBYID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0ICYmIHJlc3QgPT09ICd2Jykge1xuICAgICAgICBhY2MuZmxpcFkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICByZXN0ID0gcGFyc2VGbG9hdChyZXN0KTtcblxuICAgICAgaWYgKGlzTmFOKHJlc3QpKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZmlyc3QpIHtcbiAgICAgICAgY2FzZSAnZ3Jvdyc6XG4gICAgICAgICAgYWNjLnNpemUgPSBhY2Muc2l6ZSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnc2hyaW5rJzpcbiAgICAgICAgICBhY2Muc2l6ZSA9IGFjYy5zaXplIC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICBhY2MueCA9IGFjYy54IC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgYWNjLnggPSBhY2MueCArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgIGFjYy55ID0gYWNjLnkgLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgIGFjYy55ID0gYWNjLnkgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JvdGF0ZSc6XG4gICAgICAgICAgYWNjLnJvdGF0ZSA9IGFjYy5yb3RhdGUgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHRyYW5zZm9ybSk7XG4gIH1cbn07XG5mdW5jdGlvbiB0cmFuc2Zvcm1QYXJzZXIgKG5vZGUpIHtcbiAgcmV0dXJuIHBhcnNlVHJhbnNmb3JtU3RyaW5nKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXRyYW5zZm9ybScpKTtcbn1cblxuZnVuY3Rpb24gc3ltYm9sUGFyc2VyIChub2RlKSB7XG4gIHZhciBzeW1ib2wgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1zeW1ib2wnKTtcbiAgcmV0dXJuIHN5bWJvbCA9PT0gbnVsbCA/IGZhbHNlIDogc3ltYm9sID09PSAnJyA/IHRydWUgOiBzeW1ib2w7XG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIGV4dHJhQXR0cmlidXRlcyA9IHRvQXJyYXkobm9kZS5hdHRyaWJ1dGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXR0cikge1xuICAgIGlmIChhY2MubmFtZSAhPT0gJ2NsYXNzJyAmJiBhY2MubmFtZSAhPT0gJ3N0eWxlJykge1xuICAgICAgYWNjW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIHRpdGxlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG5cbiAgaWYgKGNvbmZpZy5hdXRvQTExeSkge1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSA9IFwiXCIuY29uY2F0KGNvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBcIi10aXRsZS1cIikuY29uY2F0KG5leHRVbmlxdWVJZCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydmb2N1c2FibGUnXSA9ICdmYWxzZSc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4dHJhQXR0cmlidXRlcztcbn1cblxuZnVuY3Rpb24gbWFza1BhcnNlciAobm9kZSkge1xuICB2YXIgbWFzayA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLW1hc2snKTtcblxuICBpZiAoIW1hc2spIHtcbiAgICByZXR1cm4gZW1wdHlDYW5vbmljYWxJY29uKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldENhbm9uaWNhbEljb24obWFzay5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGkudHJpbSgpO1xuICAgIH0pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBibGFua01ldGEoKSB7XG4gIHJldHVybiB7XG4gICAgaWNvbk5hbWU6IG51bGwsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgcHJlZml4OiBudWxsLFxuICAgIHRyYW5zZm9ybTogbWVhbmluZ2xlc3NUcmFuc2Zvcm0sXG4gICAgc3ltYm9sOiBmYWxzZSxcbiAgICBtYXNrOiBudWxsLFxuICAgIGV4dHJhOiB7XG4gICAgICBjbGFzc2VzOiBbXSxcbiAgICAgIHN0eWxlczoge30sXG4gICAgICBhdHRyaWJ1dGVzOiB7fVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlTWV0YShub2RlKSB7XG4gIHZhciBfY2xhc3NQYXJzZXIgPSBjbGFzc1BhcnNlcihub2RlKSxcbiAgICAgIGljb25OYW1lID0gX2NsYXNzUGFyc2VyLmljb25OYW1lLFxuICAgICAgcHJlZml4ID0gX2NsYXNzUGFyc2VyLnByZWZpeCxcbiAgICAgIGV4dHJhQ2xhc3NlcyA9IF9jbGFzc1BhcnNlci5yZXN0O1xuXG4gIHZhciBleHRyYVN0eWxlcyA9IHN0eWxlUGFyc2VyKG5vZGUpO1xuICB2YXIgdHJhbnNmb3JtID0gdHJhbnNmb3JtUGFyc2VyKG5vZGUpO1xuICB2YXIgc3ltYm9sID0gc3ltYm9sUGFyc2VyKG5vZGUpO1xuICB2YXIgZXh0cmFBdHRyaWJ1dGVzID0gYXR0cmlidXRlc1BhcnNlcihub2RlKTtcbiAgdmFyIG1hc2sgPSBtYXNrUGFyc2VyKG5vZGUpO1xuICByZXR1cm4ge1xuICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICB0aXRsZTogbm9kZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyksXG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgbWFzazogbWFzayxcbiAgICBleHRyYToge1xuICAgICAgY2xhc3NlczogZXh0cmFDbGFzc2VzLFxuICAgICAgc3R5bGVzOiBleHRyYVN0eWxlcyxcbiAgICAgIGF0dHJpYnV0ZXM6IGV4dHJhQXR0cmlidXRlc1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gTWlzc2luZ0ljb24oZXJyb3IpIHtcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdJY29uJztcbiAgdGhpcy5tZXNzYWdlID0gZXJyb3IgfHwgJ0ljb24gdW5hdmFpbGFibGUnO1xuICB0aGlzLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG59XG5NaXNzaW5nSWNvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5NaXNzaW5nSWNvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nSWNvbjtcblxudmFyIEZJTEwgPSB7XG4gIGZpbGw6ICdjdXJyZW50Q29sb3InXG59O1xudmFyIEFOSU1BVElPTl9CQVNFID0ge1xuICBhdHRyaWJ1dGVUeXBlOiAnWE1MJyxcbiAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJyxcbiAgZHVyOiAnMnMnXG59O1xudmFyIFJJTkcgPSB7XG4gIHRhZzogJ3BhdGgnLFxuICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgZDogJ00xNTYuNSw0NDcuN2wtMTIuNiwyOS41Yy0xOC43LTkuNS0zNS45LTIxLjItNTEuNS0zNC45bDIyLjctMjIuN0MxMjcuNiw0MzAuNSwxNDEuNSw0NDAsMTU2LjUsNDQ3Ljd6IE00MC42LDI3Mkg4LjUgYzEuNCwyMS4yLDUuNCw0MS43LDExLjcsNjEuMUw1MCwzMjEuMkM0NS4xLDMwNS41LDQxLjgsMjg5LDQwLjYsMjcyeiBNNDAuNiwyNDBjMS40LTE4LjgsNS4yLTM3LDExLjEtNTQuMWwtMjkuNS0xMi42IEMxNC43LDE5NC4zLDEwLDIxNi43LDguNSwyNDBINDAuNnogTTY0LjMsMTU2LjVjNy44LTE0LjksMTcuMi0yOC44LDI4LjEtNDEuNUw2OS43LDkyLjNjLTEzLjcsMTUuNi0yNS41LDMyLjgtMzQuOSw1MS41IEw2NC4zLDE1Ni41eiBNMzk3LDQxOS42Yy0xMy45LDEyLTI5LjQsMjIuMy00Ni4xLDMwLjRsMTEuOSwyOS44YzIwLjctOS45LDM5LjgtMjIuNiw1Ni45LTM3LjZMMzk3LDQxOS42eiBNMTE1LDkyLjQgYzEzLjktMTIsMjkuNC0yMi4zLDQ2LjEtMzAuNGwtMTEuOS0yOS44Yy0yMC43LDkuOS0zOS44LDIyLjYtNTYuOCwzNy42TDExNSw5Mi40eiBNNDQ3LjcsMzU1LjVjLTcuOCwxNC45LTE3LjIsMjguOC0yOC4xLDQxLjUgbDIyLjcsMjIuN2MxMy43LTE1LjYsMjUuNS0zMi45LDM0LjktNTEuNUw0NDcuNywzNTUuNXogTTQ3MS40LDI3MmMtMS40LDE4LjgtNS4yLDM3LTExLjEsNTQuMWwyOS41LDEyLjYgYzcuNS0yMS4xLDEyLjItNDMuNSwxMy42LTY2LjhINDcxLjR6IE0zMjEuMiw0NjJjLTE1LjcsNS0zMi4yLDguMi00OS4yLDkuNHYzMi4xYzIxLjItMS40LDQxLjctNS40LDYxLjEtMTEuN0wzMjEuMiw0NjJ6IE0yNDAsNDcxLjRjLTE4LjgtMS40LTM3LTUuMi01NC4xLTExLjFsLTEyLjYsMjkuNWMyMS4xLDcuNSw0My41LDEyLjIsNjYuOCwxMy42VjQ3MS40eiBNNDYyLDE5MC44YzUsMTUuNyw4LjIsMzIuMiw5LjQsNDkuMmgzMi4xIGMtMS40LTIxLjItNS40LTQxLjctMTEuNy02MS4xTDQ2MiwxOTAuOHogTTkyLjQsMzk3Yy0xMi0xMy45LTIyLjMtMjkuNC0zMC40LTQ2LjFsLTI5LjgsMTEuOWM5LjksMjAuNywyMi42LDM5LjgsMzcuNiw1Ni45IEw5Mi40LDM5N3ogTTI3Miw0MC42YzE4LjgsMS40LDM2LjksNS4yLDU0LjEsMTEuMWwxMi42LTI5LjVDMzE3LjcsMTQuNywyOTUuMywxMCwyNzIsOC41VjQwLjZ6IE0xOTAuOCw1MCBjMTUuNy01LDMyLjItOC4yLDQ5LjItOS40VjguNWMtMjEuMiwxLjQtNDEuNyw1LjQtNjEuMSwxMS43TDE5MC44LDUweiBNNDQyLjMsOTIuM0w0MTkuNiwxMTVjMTIsMTMuOSwyMi4zLDI5LjQsMzAuNSw0Ni4xIGwyOS44LTExLjlDNDcwLDEyOC41LDQ1Ny4zLDEwOS40LDQ0Mi4zLDkyLjN6IE0zOTcsOTIuNGwyMi43LTIyLjdjLTE1LjYtMTMuNy0zMi44LTI1LjUtNTEuNS0zNC45bC0xMi42LDI5LjUgQzM3MC40LDcyLjEsMzg0LjQsODEuNSwzOTcsOTIuNHonXG4gIH0pXG59O1xuXG52YXIgT1BBQ0lUWV9BTklNQVRFID0gX29iamVjdFNwcmVhZCh7fSwgQU5JTUFUSU9OX0JBU0UsIHtcbiAgYXR0cmlidXRlTmFtZTogJ29wYWNpdHknXG59KTtcblxudmFyIERPVCA9IHtcbiAgdGFnOiAnY2lyY2xlJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIGN4OiAnMjU2JyxcbiAgICBjeTogJzM2NCcsXG4gICAgcjogJzI4J1xuICB9KSxcbiAgY2hpbGRyZW46IFt7XG4gICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgQU5JTUFUSU9OX0JBU0UsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdyJyxcbiAgICAgIHZhbHVlczogJzI4OzE0OzI4OzI4OzE0OzI4OydcbiAgICB9KVxuICB9LCB7XG4gICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgT1BBQ0lUWV9BTklNQVRFLCB7XG4gICAgICB2YWx1ZXM6ICcxOzA7MTsxOzA7MTsnXG4gICAgfSlcbiAgfV1cbn07XG52YXIgUVVFU1RJT04gPSB7XG4gIHRhZzogJ3BhdGgnLFxuICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgb3BhY2l0eTogJzEnLFxuICAgIGQ6ICdNMjYzLjcsMzEyaC0xNmMtNi42LDAtMTItNS40LTEyLTEyYzAtNzEsNzcuNC02My45LDc3LjQtMTA3LjhjMC0yMC0xNy44LTQwLjItNTcuNC00MC4yYy0yOS4xLDAtNDQuMyw5LjYtNTkuMiwyOC43IGMtMy45LDUtMTEuMSw2LTE2LjIsMi40bC0xMy4xLTkuMmMtNS42LTMuOS02LjktMTEuOC0yLjYtMTcuMmMyMS4yLTI3LjIsNDYuNC00NC43LDkxLjItNDQuN2M1Mi4zLDAsOTcuNCwyOS44LDk3LjQsODAuMiBjMCw2Ny42LTc3LjQsNjMuNS03Ny40LDEwNy44QzI3NS43LDMwNi42LDI3MC4zLDMxMiwyNjMuNywzMTJ6J1xuICB9KSxcbiAgY2hpbGRyZW46IFt7XG4gICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgT1BBQ0lUWV9BTklNQVRFLCB7XG4gICAgICB2YWx1ZXM6ICcxOzA7MDswOzA7MTsnXG4gICAgfSlcbiAgfV1cbn07XG52YXIgRVhDTEFNQVRJT04gPSB7XG4gIHRhZzogJ3BhdGgnLFxuICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgb3BhY2l0eTogJzAnLFxuICAgIGQ6ICdNMjMyLjUsMTM0LjVsNywxNjhjMC4zLDYuNCw1LjYsMTEuNSwxMiwxMS41aDljNi40LDAsMTEuNy01LjEsMTItMTEuNWw3LTE2OGMwLjMtNi44LTUuMi0xMi41LTEyLTEyLjVoLTIzIEMyMzcuNywxMjIsMjMyLjIsMTI3LjcsMjMyLjUsMTM0LjV6J1xuICB9KSxcbiAgY2hpbGRyZW46IFt7XG4gICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgT1BBQ0lUWV9BTklNQVRFLCB7XG4gICAgICB2YWx1ZXM6ICcwOzA7MTsxOzA7MDsnXG4gICAgfSlcbiAgfV1cbn07XG52YXIgbWlzc2luZyA9IHtcbiAgdGFnOiAnZycsXG4gIGNoaWxkcmVuOiBbUklORywgRE9ULCBRVUVTVElPTiwgRVhDTEFNQVRJT05dXG59O1xuXG52YXIgc3R5bGVzJDIgPSBuYW1lc3BhY2Uuc3R5bGVzO1xuZnVuY3Rpb24gZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCkge1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHZhbCA9IHtcbiAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgIHdpZHRoOiA1MTIsXG4gICAgICBoZWlnaHQ6IDUxMixcbiAgICAgIGljb246IG1pc3NpbmdcbiAgICB9O1xuXG4gICAgaWYgKGljb25OYW1lICYmIHByZWZpeCAmJiBzdHlsZXMkMltwcmVmaXhdICYmIHN0eWxlcyQyW3ByZWZpeF1baWNvbk5hbWVdKSB7XG4gICAgICB2YXIgaWNvbiA9IHN0eWxlcyQyW3ByZWZpeF1baWNvbk5hbWVdO1xuICAgICAgdmFyIHdpZHRoID0gaWNvblswXTtcbiAgICAgIHZhciBoZWlnaHQgPSBpY29uWzFdO1xuICAgICAgdmFyIHZlY3RvckRhdGEgPSBpY29uLnNsaWNlKDQpO1xuICAgICAgdmFsID0ge1xuICAgICAgICBmb3VuZDogdHJ1ZSxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgICAgZDogdmVjdG9yRGF0YVswXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiByZXNvbHZlKHZhbCk7XG4gICAgfVxuXG4gICAgaWYgKGljb25OYW1lICYmIHByZWZpeCAmJiAhY29uZmlnLnNob3dNaXNzaW5nSWNvbnMpIHtcbiAgICAgIHJlamVjdChuZXcgTWlzc2luZ0ljb24oXCJJY29uIGlzIG1pc3NpbmcgZm9yIHByZWZpeCBcIi5jb25jYXQocHJlZml4LCBcIiB3aXRoIGljb24gbmFtZSBcIikuY29uY2F0KGljb25OYW1lKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHZhbCk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIHN0eWxlcyQzID0gbmFtZXNwYWNlLnN0eWxlcztcblxuZnVuY3Rpb24gZ2VuZXJhdGVTdmdSZXBsYWNlbWVudE11dGF0aW9uKG5vZGUsIG5vZGVNZXRhKSB7XG4gIHZhciBpY29uTmFtZSA9IG5vZGVNZXRhLmljb25OYW1lLFxuICAgICAgdGl0bGUgPSBub2RlTWV0YS50aXRsZSxcbiAgICAgIHByZWZpeCA9IG5vZGVNZXRhLnByZWZpeCxcbiAgICAgIHRyYW5zZm9ybSA9IG5vZGVNZXRhLnRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbCA9IG5vZGVNZXRhLnN5bWJvbCxcbiAgICAgIG1hc2sgPSBub2RlTWV0YS5tYXNrLFxuICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHBpY2tlZC5hbGwoW2ZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLCBmaW5kSWNvbihtYXNrLmljb25OYW1lLCBtYXNrLnByZWZpeCldKS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICBtYWluID0gX3JlZjJbMF0sXG4gICAgICAgICAgbWFzayA9IF9yZWYyWzFdO1xuXG4gICAgICByZXNvbHZlKFtub2RlLCBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgICBpY29uczoge1xuICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgbWFzazogbWFza1xuICAgICAgICB9LFxuICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICAgIG1hc2s6IG1hc2ssXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZXh0cmE6IGV4dHJhLFxuICAgICAgICB3YXRjaGFibGU6IHRydWVcbiAgICAgIH0pXSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxheWVyc1RleHQobm9kZSwgbm9kZU1ldGEpIHtcbiAgdmFyIHRpdGxlID0gbm9kZU1ldGEudGl0bGUsXG4gICAgICB0cmFuc2Zvcm0gPSBub2RlTWV0YS50cmFuc2Zvcm0sXG4gICAgICBleHRyYSA9IG5vZGVNZXRhLmV4dHJhO1xuICB2YXIgd2lkdGggPSBudWxsO1xuICB2YXIgaGVpZ2h0ID0gbnVsbDtcblxuICBpZiAoSVNfSUUpIHtcbiAgICB2YXIgY29tcHV0ZWRGb250U2l6ZSA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobm9kZSkuZm9udFNpemUsIDEwKTtcbiAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB3aWR0aCA9IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCAvIGNvbXB1dGVkRm9udFNpemU7XG4gICAgaGVpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCAvIGNvbXB1dGVkRm9udFNpemU7XG4gIH1cblxuICBpZiAoY29uZmlnLmF1dG9BMTF5ICYmICF0aXRsZSkge1xuICAgIGV4dHJhLmF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gIH1cblxuICByZXR1cm4gcGlja2VkLnJlc29sdmUoW25vZGUsIG1ha2VMYXllcnNUZXh0QWJzdHJhY3Qoe1xuICAgIGNvbnRlbnQ6IG5vZGUuaW5uZXJIVE1MLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZXh0cmE6IGV4dHJhLFxuICAgIHdhdGNoYWJsZTogdHJ1ZVxuICB9KV0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpIHtcbiAgdmFyIG5vZGVNZXRhID0gcGFyc2VNZXRhKG5vZGUpO1xuXG4gIGlmICh+bm9kZU1ldGEuZXh0cmEuY2xhc3Nlcy5pbmRleE9mKExBWUVSU19URVhUX0NMQVNTTkFNRSkpIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVMYXllcnNUZXh0KG5vZGUsIG5vZGVNZXRhKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVTdmdSZXBsYWNlbWVudE11dGF0aW9uKG5vZGUsIG5vZGVNZXRhKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvblRyZWUocm9vdCkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIHZhciBodG1sQ2xhc3NMaXN0ID0gRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdDtcblxuICB2YXIgaGNsQWRkID0gZnVuY3Rpb24gaGNsQWRkKHN1ZmZpeCkge1xuICAgIHJldHVybiBodG1sQ2xhc3NMaXN0LmFkZChcIlwiLmNvbmNhdChIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MsIFwiLVwiKS5jb25jYXQoc3VmZml4KSk7XG4gIH07XG5cbiAgdmFyIGhjbFJlbW92ZSA9IGZ1bmN0aW9uIGhjbFJlbW92ZShzdWZmaXgpIHtcbiAgICByZXR1cm4gaHRtbENsYXNzTGlzdC5yZW1vdmUoXCJcIi5jb25jYXQoSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTLCBcIi1cIikuY29uY2F0KHN1ZmZpeCkpO1xuICB9O1xuXG4gIHZhciBwcmVmaXhlcyA9IGNvbmZpZy5hdXRvRmV0Y2hTdmcgPyBPYmplY3Qua2V5cyhQUkVGSVhfVE9fU1RZTEUpIDogT2JqZWN0LmtleXMoc3R5bGVzJDMpO1xuICB2YXIgcHJlZml4ZXNEb21RdWVyeSA9IFtcIi5cIi5jb25jYXQoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FLCBcIjpub3QoW1wiKS5jb25jYXQoREFUQV9GQV9JMlNWRywgXCJdKVwiKV0uY29uY2F0KHByZWZpeGVzLm1hcChmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBcIi5cIi5jb25jYXQocCwgXCI6bm90KFtcIikuY29uY2F0KERBVEFfRkFfSTJTVkcsIFwiXSlcIik7XG4gIH0pKS5qb2luKCcsICcpO1xuXG4gIGlmIChwcmVmaXhlc0RvbVF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjYW5kaWRhdGVzID0gdG9BcnJheShyb290LnF1ZXJ5U2VsZWN0b3JBbGwocHJlZml4ZXNEb21RdWVyeSkpO1xuXG4gIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICBoY2xBZGQoJ3BlbmRpbmcnKTtcbiAgICBoY2xSZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG1hcmsgPSBwZXJmLmJlZ2luKCdvblRyZWUnKTtcbiAgdmFyIG11dGF0aW9ucyA9IGNhbmRpZGF0ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIG11dGF0aW9uID0gZ2VuZXJhdGVNdXRhdGlvbihub2RlKTtcblxuICAgICAgaWYgKG11dGF0aW9uKSB7XG4gICAgICAgIGFjYy5wdXNoKG11dGF0aW9uKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIVBST0RVQ1RJT04pIHtcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNaXNzaW5nSWNvbikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwaWNrZWQuYWxsKG11dGF0aW9ucykudGhlbihmdW5jdGlvbiAocmVzb2x2ZWRNdXRhdGlvbnMpIHtcbiAgICAgIHBlcmZvcm0ocmVzb2x2ZWRNdXRhdGlvbnMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGNsQWRkKCdhY3RpdmUnKTtcbiAgICAgICAgaGNsQWRkKCdjb21wbGV0ZScpO1xuICAgICAgICBoY2xSZW1vdmUoJ3BlbmRpbmcnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgICAgbWFyaygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBtYXJrKCk7XG4gICAgICByZWplY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbk5vZGUobm9kZSkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGdlbmVyYXRlTXV0YXRpb24obm9kZSkudGhlbihmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICBpZiAobXV0YXRpb24pIHtcbiAgICAgIHBlcmZvcm0oW211dGF0aW9uXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VGb3JQb3NpdGlvbihub2RlLCBwb3NpdGlvbikge1xuICB2YXIgcGVuZGluZ0F0dHJpYnV0ZSA9IFwiXCIuY29uY2F0KERBVEFfRkFfUFNFVURPX0VMRU1FTlRfUEVORElORykuY29uY2F0KHBvc2l0aW9uLnJlcGxhY2UoJzonLCAnLScpKTtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZShwZW5kaW5nQXR0cmlidXRlKSAhPT0gbnVsbCkge1xuICAgICAgLy8gVGhpcyBub2RlIGlzIGFscmVhZHkgYmVpbmcgcHJvY2Vzc2VkXG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IHRvQXJyYXkobm9kZS5jaGlsZHJlbik7XG4gICAgdmFyIGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50ID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYy5nZXRBdHRyaWJ1dGUoREFUQV9GQV9QU0VVRE9fRUxFTUVOVCkgPT09IHBvc2l0aW9uO1xuICAgIH0pWzBdO1xuICAgIHZhciBzdHlsZXMgPSBXSU5ET1cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBwb3NpdGlvbik7XG4gICAgdmFyIGZvbnRGYW1pbHkgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1mYW1pbHknKS5tYXRjaChGT05UX0ZBTUlMWV9QQVRURVJOKTtcbiAgICB2YXIgZm9udFdlaWdodCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXdlaWdodCcpO1xuXG4gICAgaWYgKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50ICYmICFmb250RmFtaWx5KSB7XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHByb2Nlc3NlZCBpdCBidXQgdGhlIGN1cnJlbnQgY29tcHV0ZWQgc3R5bGUgZG9lcyBub3QgcmVzdWx0IGluIGEgZm9udC1mYW1pbHksXG4gICAgICAvLyB0aGF0IHByb2JhYmx5IG1lYW5zIHRoYXQgYSBjbGFzcyBuYW1lIHRoYXQgd2FzIHByZXZpb3VzbHkgcHJlc2VudCB0byBtYWtlIHRoZSBpY29uIGhhcyBiZWVuXG4gICAgICAvLyByZW1vdmVkLiBTbyB3ZSBub3cgc2hvdWxkIGRlbGV0ZSB0aGUgaWNvbi5cbiAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpO1xuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICB9IGVsc2UgaWYgKGZvbnRGYW1pbHkpIHtcbiAgICAgIHZhciBjb250ZW50ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcbiAgICAgIHZhciBwcmVmaXggPSB+WydMaWdodCcsICdSZWd1bGFyJywgJ1NvbGlkJywgJ0JyYW5kcyddLmluZGV4T2YoZm9udEZhbWlseVsxXSkgPyBTVFlMRV9UT19QUkVGSVhbZm9udEZhbWlseVsxXS50b0xvd2VyQ2FzZSgpXSA6IEZPTlRfV0VJR0hUX1RPX1BSRUZJWFtmb250V2VpZ2h0XTtcbiAgICAgIHZhciBpY29uTmFtZSA9IGJ5VW5pY29kZShwcmVmaXgsIHRvSGV4KGNvbnRlbnQubGVuZ3RoID09PSAzID8gY29udGVudC5zdWJzdHIoMSwgMSkgOiBjb250ZW50KSk7IC8vIE9ubHkgY29udmVydCB0aGUgcHNldWRvIGVsZW1lbnQgaW4gdGhpcyA6YmVmb3JlLzphZnRlciBwb3NpdGlvbiBpbnRvIGFuIGljb24gaWYgd2UgaGF2ZW4ndFxuICAgICAgLy8gYWxyZWFkeSBkb25lIHNvIHdpdGggdGhlIHNhbWUgcHJlZml4IGFuZCBpY29uTmFtZVxuXG4gICAgICBpZiAoIWFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50IHx8IGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX1BSRUZJWCkgIT09IHByZWZpeCB8fCBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9JQ09OKSAhPT0gaWNvbk5hbWUpIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSwgaWNvbk5hbWUpO1xuXG4gICAgICAgIGlmIChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCkge1xuICAgICAgICAgIC8vIERlbGV0ZSB0aGUgb2xkIG9uZSwgc2luY2Ugd2UncmUgcmVwbGFjaW5nIGl0IHdpdGggYSBuZXcgb25lXG4gICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWV0YSA9IGJsYW5rTWV0YSgpO1xuICAgICAgICB2YXIgZXh0cmEgPSBtZXRhLmV4dHJhO1xuICAgICAgICBleHRyYS5hdHRyaWJ1dGVzW0RBVEFfRkFfUFNFVURPX0VMRU1FTlRdID0gcG9zaXRpb247XG4gICAgICAgIGZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLnRoZW4oZnVuY3Rpb24gKG1haW4pIHtcbiAgICAgICAgICB2YXIgYWJzdHJhY3QgPSBtYWtlSW5saW5lU3ZnQWJzdHJhY3QoX29iamVjdFNwcmVhZCh7fSwgbWV0YSwge1xuICAgICAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgICAgICAgbWFzazogZW1wdHlDYW5vbmljYWxJY29uKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgICAgICAgIGV4dHJhOiBleHRyYSxcbiAgICAgICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuXG4gICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAnOmJlZm9yZScpIHtcbiAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWxlbWVudC5vdXRlckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShub2RlKSB7XG4gIHJldHVybiBwaWNrZWQuYWxsKFtyZXBsYWNlRm9yUG9zaXRpb24obm9kZSwgJzpiZWZvcmUnKSwgcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsICc6YWZ0ZXInKV0pO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzYWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmhlYWQgJiYgIX5UQUdOQU1FU19UT19TS0lQX0ZPUl9QU0VVRE9FTEVNRU5UUy5pbmRleE9mKG5vZGUudGFnTmFtZS50b1VwcGVyQ2FzZSgpKSAmJiAhbm9kZS5nZXRBdHRyaWJ1dGUoREFUQV9GQV9QU0VVRE9fRUxFTUVOVCkgJiYgKCFub2RlLnBhcmVudE5vZGUgfHwgbm9kZS5wYXJlbnROb2RlLnRhZ05hbWUgIT09ICdzdmcnKTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoUHNldWRvRWxlbWVudHMgKHJvb3QpIHtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBvcGVyYXRpb25zID0gdG9BcnJheShyb290LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSkuZmlsdGVyKHByb2Nlc3NhYmxlKS5tYXAocmVwbGFjZSk7XG4gICAgdmFyIGVuZCA9IHBlcmYuYmVnaW4oJ3NlYXJjaFBzZXVkb0VsZW1lbnRzJyk7XG4gICAgZGlzYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgcGlja2VkLmFsbChvcGVyYXRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVuZCgpO1xuICAgICAgZW5hYmxlT2JzZXJ2YXRpb24oKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBlbmQoKTtcbiAgICAgIGVuYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICByZWplY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbnZhciBiYXNlU3R5bGVzID0gXCJzdmc6bm90KDpyb290KS5zdmctaW5saW5lLS1mYSB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGhlaWdodDogMWVtO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1sZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEge1xcbiAgd2lkdGg6IDAuMDYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0yIHtcXG4gIHdpZHRoOiAwLjEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0zIHtcXG4gIHdpZHRoOiAwLjE4NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNCB7XFxuICB3aWR0aDogMC4yNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy01IHtcXG4gIHdpZHRoOiAwLjMxMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNiB7XFxuICB3aWR0aDogMC4zNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNyB7XFxuICB3aWR0aDogMC40Mzc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTgge1xcbiAgd2lkdGg6IDAuNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy05IHtcXG4gIHdpZHRoOiAwLjU2MjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTAge1xcbiAgd2lkdGg6IDAuNjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTExIHtcXG4gIHdpZHRoOiAwLjY4NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTIge1xcbiAgd2lkdGg6IDAuNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTMge1xcbiAgd2lkdGg6IDAuODEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNCB7XFxuICB3aWR0aDogMC44NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTUge1xcbiAgd2lkdGg6IDAuOTM3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNiB7XFxuICB3aWR0aDogMWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNyB7XFxuICB3aWR0aDogMS4wNjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE4IHtcXG4gIHdpZHRoOiAxLjEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xOSB7XFxuICB3aWR0aDogMS4xODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTIwIHtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtcHVsbC1yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogMC4zZW07XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWJvcmRlciB7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtbGkge1xcbiAgd2lkdGg6IDJlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWZ3IHtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcblxcbi5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmZhLWxheWVycyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4xMjVlbTtcXG4gIHdpZHRoOiAxZW07XFxufVxcbi5mYS1sYXllcnMgc3ZnLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmZhLWxheWVycy1jb3VudGVyLCAuZmEtbGF5ZXJzLXRleHQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRleHQge1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmZhLWxheWVycy1jb3VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjI1M2E7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMS41ZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1heC13aWR0aDogNWVtO1xcbiAgbWluLXdpZHRoOiAxLjVlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICByaWdodDogMDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy1ib3R0b20tcmlnaHQge1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IGF1dG87XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWJvdHRvbS1sZWZ0IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG4gIHRvcDogYXV0bztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRvcC1yaWdodCB7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxufVxcblxcbi5mYS1sYXllcnMtdG9wLWxlZnQge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcblxcbi5mYS1sZyB7XFxuICBmb250LXNpemU6IDEuMzMzMzMzMzMzM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4wNjY3ZW07XFxufVxcblxcbi5mYS14cyB7XFxuICBmb250LXNpemU6IDAuNzVlbTtcXG59XFxuXFxuLmZhLXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcXG59XFxuXFxuLmZhLTF4IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uZmEtMngge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5mYS0zeCB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmZhLTR4IHtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbn1cXG5cXG4uZmEtNXgge1xcbiAgZm9udC1zaXplOiA1ZW07XFxufVxcblxcbi5mYS02eCB7XFxuICBmb250LXNpemU6IDZlbTtcXG59XFxuXFxuLmZhLTd4IHtcXG4gIGZvbnQtc2l6ZTogN2VtO1xcbn1cXG5cXG4uZmEtOHgge1xcbiAgZm9udC1zaXplOiA4ZW07XFxufVxcblxcbi5mYS05eCB7XFxuICBmb250LXNpemU6IDllbTtcXG59XFxuXFxuLmZhLTEweCB7XFxuICBmb250LXNpemU6IDEwZW07XFxufVxcblxcbi5mYS1mdyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG5cXG4uZmEtdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNWVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG4uZmEtdWwgPiBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5mYS1saSB7XFxuICBsZWZ0OiAtMmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4uZmEtYm9yZGVyIHtcXG4gIGJvcmRlcjogc29saWQgMC4wOGVtICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiAwLjFlbTtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuMjVlbSAwLjE1ZW07XFxufVxcblxcbi5mYS1wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5mYS1wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmZhLmZhLXB1bGwtbGVmdCxcXG4uZmFzLmZhLXB1bGwtbGVmdCxcXG4uZmFyLmZhLXB1bGwtbGVmdCxcXG4uZmFsLmZhLXB1bGwtbGVmdCxcXG4uZmFiLmZhLXB1bGwtbGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xcbn1cXG4uZmEuZmEtcHVsbC1yaWdodCxcXG4uZmFzLmZhLXB1bGwtcmlnaHQsXFxuLmZhci5mYS1wdWxsLXJpZ2h0LFxcbi5mYWwuZmEtcHVsbC1yaWdodCxcXG4uZmFiLmZhLXB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xcbn1cXG5cXG4uZmEtc3BpbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbi5mYS1wdWxzZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5mYS1yb3RhdGUtOTAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5mYS1yb3RhdGUtMTgwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbi5mYS1yb3RhdGUtMjcwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcblxcbi5mYS1mbGlwLWhvcml6b250YWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG59XFxuXFxuLmZhLWZsaXAtdmVydGljYWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG59XFxuXFxuLmZhLWZsaXAtYm90aCwgLmZhLWZsaXAtaG9yaXpvbnRhbC5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAtMSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIC0xKTtcXG59XFxuXFxuOnJvb3QgLmZhLXJvdGF0ZS05MCxcXG46cm9vdCAuZmEtcm90YXRlLTE4MCxcXG46cm9vdCAuZmEtcm90YXRlLTI3MCxcXG46cm9vdCAuZmEtZmxpcC1ob3Jpem9udGFsLFxcbjpyb290IC5mYS1mbGlwLXZlcnRpY2FsLFxcbjpyb290IC5mYS1mbGlwLWJvdGgge1xcbiAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XFxuICAgICAgICAgIGZpbHRlcjogbm9uZTtcXG59XFxuXFxuLmZhLXN0YWNrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIuNWVtO1xcbn1cXG5cXG4uZmEtc3RhY2stMXgsXFxuLmZhLXN0YWNrLTJ4IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN0YWNrLTF4IHtcXG4gIGhlaWdodDogMWVtO1xcbiAgd2lkdGg6IDEuMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXN0YWNrLTJ4IHtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDIuNWVtO1xcbn1cXG5cXG4uZmEtaW52ZXJzZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnNyLW9ubHkge1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbn1cXG5cXG4uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLCAuc3Itb25seS1mb2N1c2FibGU6Zm9jdXMge1xcbiAgY2xpcDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiBhdXRvO1xcbn1cIjtcblxuZnVuY3Rpb24gY3NzICgpIHtcbiAgdmFyIGRmcCA9IERFRkFVTFRfRkFNSUxZX1BSRUZJWDtcbiAgdmFyIGRyYyA9IERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1M7XG4gIHZhciBmcCA9IGNvbmZpZy5mYW1pbHlQcmVmaXg7XG4gIHZhciByYyA9IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzO1xuICB2YXIgcyA9IGJhc2VTdHlsZXM7XG5cbiAgaWYgKGZwICE9PSBkZnAgfHwgcmMgIT09IGRyYykge1xuICAgIHZhciBkUGF0dCA9IG5ldyBSZWdFeHAoXCJcXFxcLlwiLmNvbmNhdChkZnAsIFwiXFxcXC1cIiksICdnJyk7XG4gICAgdmFyIHJQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIuY29uY2F0KGRyYyksICdnJyk7XG4gICAgcyA9IHMucmVwbGFjZShkUGF0dCwgXCIuXCIuY29uY2F0KGZwLCBcIi1cIikpLnJlcGxhY2UoclBhdHQsIFwiLlwiLmNvbmNhdChyYykpO1xuICB9XG5cbiAgcmV0dXJuIHM7XG59XG5cbnZhciBMaWJyYXJ5ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTGlicmFyeSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlicmFyeSk7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGlicmFyeSwgW3tcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgZGVmaW5pdGlvbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBhZGRpdGlvbnMgPSBkZWZpbml0aW9ucy5yZWR1Y2UodGhpcy5fcHVsbERlZmluaXRpb25zLCB7fSk7XG4gICAgICBPYmplY3Qua2V5cyhhZGRpdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfdGhpcy5kZWZpbml0aW9uc1trZXldID0gX29iamVjdFNwcmVhZCh7fSwgX3RoaXMuZGVmaW5pdGlvbnNba2V5XSB8fCB7fSwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgICBkZWZpbmVJY29ucyhrZXksIGFkZGl0aW9uc1trZXldKTtcbiAgICAgICAgYnVpbGQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3B1bGxEZWZpbml0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcHVsbERlZmluaXRpb25zKGFkZGl0aW9ucywgZGVmaW5pdGlvbikge1xuICAgICAgdmFyIG5vcm1hbGl6ZWQgPSBkZWZpbml0aW9uLnByZWZpeCAmJiBkZWZpbml0aW9uLmljb25OYW1lICYmIGRlZmluaXRpb24uaWNvbiA/IHtcbiAgICAgICAgMDogZGVmaW5pdGlvblxuICAgICAgfSA6IGRlZmluaXRpb247XG4gICAgICBPYmplY3Qua2V5cyhub3JtYWxpemVkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX25vcm1hbGl6ZWQka2V5ID0gbm9ybWFsaXplZFtrZXldLFxuICAgICAgICAgICAgcHJlZml4ID0gX25vcm1hbGl6ZWQka2V5LnByZWZpeCxcbiAgICAgICAgICAgIGljb25OYW1lID0gX25vcm1hbGl6ZWQka2V5Lmljb25OYW1lLFxuICAgICAgICAgICAgaWNvbiA9IF9ub3JtYWxpemVkJGtleS5pY29uO1xuICAgICAgICBpZiAoIWFkZGl0aW9uc1twcmVmaXhdKSBhZGRpdGlvbnNbcHJlZml4XSA9IHt9O1xuICAgICAgICBhZGRpdGlvbnNbcHJlZml4XVtpY29uTmFtZV0gPSBpY29uO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWRkaXRpb25zO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMaWJyYXJ5O1xufSgpO1xuXG5mdW5jdGlvbiBwcmVwSWNvbihpY29uKSB7XG4gIHZhciB3aWR0aCA9IGljb25bMF07XG4gIHZhciBoZWlnaHQgPSBpY29uWzFdO1xuICB2YXIgdmVjdG9yRGF0YSA9IGljb24uc2xpY2UoNCk7XG4gIHJldHVybiB7XG4gICAgZm91bmQ6IHRydWUsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGljb246IHtcbiAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgZDogdmVjdG9yRGF0YVswXVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW5zdXJlQ3NzKCkge1xuICBpZiAoY29uZmlnLmF1dG9BZGRDc3MgJiYgIV9jc3NJbnNlcnRlZCkge1xuICAgIGluc2VydENzcyhjc3MoKSk7XG5cbiAgICBfY3NzSW5zZXJ0ZWQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwaU9iamVjdCh2YWwsIGFic3RyYWN0Q3JlYXRvcikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnYWJzdHJhY3QnLCB7XG4gICAgZ2V0OiBhYnN0cmFjdENyZWF0b3JcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdodG1sJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHZhbC5hYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdub2RlJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgICAgIHZhciBjb250YWluZXIgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSB2YWwuaHRtbDtcbiAgICAgIHJldHVybiBjb250YWluZXIuY2hpbGRyZW47XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gZmluZEljb25EZWZpbml0aW9uKGljb25Mb29rdXApIHtcbiAgdmFyIF9pY29uTG9va3VwJHByZWZpeCA9IGljb25Mb29rdXAucHJlZml4LFxuICAgICAgcHJlZml4ID0gX2ljb25Mb29rdXAkcHJlZml4ID09PSB2b2lkIDAgPyAnZmEnIDogX2ljb25Mb29rdXAkcHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBpY29uTG9va3VwLmljb25OYW1lO1xuICBpZiAoIWljb25OYW1lKSByZXR1cm47XG4gIHJldHVybiBpY29uRnJvbU1hcHBpbmcobGlicmFyeS5kZWZpbml0aW9ucywgcHJlZml4LCBpY29uTmFtZSkgfHwgaWNvbkZyb21NYXBwaW5nKG5hbWVzcGFjZS5zdHlsZXMsIHByZWZpeCwgaWNvbk5hbWUpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlSWNvbnMobmV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKG1heWJlSWNvbkRlZmluaXRpb24pIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgaWNvbkRlZmluaXRpb24gPSAobWF5YmVJY29uRGVmaW5pdGlvbiB8fCB7fSkuaWNvbiA/IG1heWJlSWNvbkRlZmluaXRpb24gOiBmaW5kSWNvbkRlZmluaXRpb24obWF5YmVJY29uRGVmaW5pdGlvbiB8fCB7fSk7XG4gICAgdmFyIG1hc2sgPSBwYXJhbXMubWFzaztcblxuICAgIGlmIChtYXNrKSB7XG4gICAgICBtYXNrID0gKG1hc2sgfHwge30pLmljb24gPyBtYXNrIDogZmluZEljb25EZWZpbml0aW9uKG1hc2sgfHwge30pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KGljb25EZWZpbml0aW9uLCBfb2JqZWN0U3ByZWFkKHt9LCBwYXJhbXMsIHtcbiAgICAgIG1hc2s6IG1hc2tcbiAgICB9KSk7XG4gIH07XG59XG5cbnZhciBsaWJyYXJ5ID0gbmV3IExpYnJhcnkoKTtcbnZhciBub0F1dG8gPSBmdW5jdGlvbiBub0F1dG8oKSB7XG4gIGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9IGZhbHNlO1xuICBjb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IGZhbHNlO1xuICBkaXNjb25uZWN0KCk7XG59O1xudmFyIF9jc3NJbnNlcnRlZCA9IGZhbHNlO1xudmFyIGRvbSA9IHtcbiAgaTJzdmc6IGZ1bmN0aW9uIGkyc3ZnKCkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKElTX0RPTSkge1xuICAgICAgZW5zdXJlQ3NzKCk7XG4gICAgICB2YXIgX3BhcmFtcyRub2RlID0gcGFyYW1zLm5vZGUsXG4gICAgICAgICAgbm9kZSA9IF9wYXJhbXMkbm9kZSA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfcGFyYW1zJG5vZGUsXG4gICAgICAgICAgX3BhcmFtcyRjYWxsYmFjayA9IHBhcmFtcy5jYWxsYmFjayxcbiAgICAgICAgICBjYWxsYmFjayA9IF9wYXJhbXMkY2FsbGJhY2sgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3BhcmFtcyRjYWxsYmFjaztcblxuICAgICAgaWYgKGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICBzZWFyY2hQc2V1ZG9FbGVtZW50cyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9uVHJlZShub2RlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwaWNrZWQucmVqZWN0KCdPcGVyYXRpb24gcmVxdWlyZXMgYSBET00gb2Ygc29tZSBraW5kLicpO1xuICAgIH1cbiAgfSxcbiAgY3NzOiBjc3MsXG4gIGluc2VydENzczogZnVuY3Rpb24gaW5zZXJ0Q3NzJCQxKCkge1xuICAgIGlmICghX2Nzc0luc2VydGVkKSB7XG4gICAgICBpbnNlcnRDc3MoY3NzKCkpO1xuXG4gICAgICBfY3NzSW5zZXJ0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IGZ1bmN0aW9uIHdhdGNoKCkge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBhdXRvUmVwbGFjZVN2Z1Jvb3QgPSBwYXJhbXMuYXV0b1JlcGxhY2VTdmdSb290LFxuICAgICAgICBvYnNlcnZlTXV0YXRpb25zUm9vdCA9IHBhcmFtcy5vYnNlcnZlTXV0YXRpb25zUm9vdDtcblxuICAgIGlmIChjb25maWcuYXV0b1JlcGxhY2VTdmcgPT09IGZhbHNlKSB7XG4gICAgICBjb25maWcuYXV0b1JlcGxhY2VTdmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbmZpZy5vYnNlcnZlTXV0YXRpb25zID0gdHJ1ZTtcbiAgICBkb21yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICBhdXRvUmVwbGFjZSh7XG4gICAgICAgIGF1dG9SZXBsYWNlU3ZnUm9vdDogYXV0b1JlcGxhY2VTdmdSb290XG4gICAgICB9KTtcbiAgICAgIG9ic2VydmUoe1xuICAgICAgICB0cmVlQ2FsbGJhY2s6IG9uVHJlZSxcbiAgICAgICAgbm9kZUNhbGxiYWNrOiBvbk5vZGUsXG4gICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2s6IHNlYXJjaFBzZXVkb0VsZW1lbnRzLFxuICAgICAgICBvYnNlcnZlTXV0YXRpb25zUm9vdDogb2JzZXJ2ZU11dGF0aW9uc1Jvb3RcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xudmFyIHBhcnNlID0ge1xuICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHRyYW5zZm9ybSh0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgICByZXR1cm4gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKTtcbiAgfVxufTtcbnZhciBpY29uID0gcmVzb2x2ZUljb25zKGZ1bmN0aW9uIChpY29uRGVmaW5pdGlvbikge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9wYXJhbXMkdHJhbnNmb3JtID09PSB2b2lkIDAgPyBtZWFuaW5nbGVzc1RyYW5zZm9ybSA6IF9wYXJhbXMkdHJhbnNmb3JtLFxuICAgICAgX3BhcmFtcyRzeW1ib2wgPSBwYXJhbXMuc3ltYm9sLFxuICAgICAgc3ltYm9sID0gX3BhcmFtcyRzeW1ib2wgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRzeW1ib2wsXG4gICAgICBfcGFyYW1zJG1hc2sgPSBwYXJhbXMubWFzayxcbiAgICAgIG1hc2sgPSBfcGFyYW1zJG1hc2sgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJG1hc2ssXG4gICAgICBfcGFyYW1zJHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZSxcbiAgICAgIF9wYXJhbXMkY2xhc3NlcyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlcyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzLFxuICAgICAgX3BhcmFtcyRzdHlsZXMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXM7XG4gIGlmICghaWNvbkRlZmluaXRpb24pIHJldHVybjtcbiAgdmFyIHByZWZpeCA9IGljb25EZWZpbml0aW9uLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gaWNvbkRlZmluaXRpb24uaWNvbk5hbWUsXG4gICAgICBpY29uID0gaWNvbkRlZmluaXRpb24uaWNvbjtcbiAgcmV0dXJuIGFwaU9iamVjdChfb2JqZWN0U3ByZWFkKHtcbiAgICB0eXBlOiAnaWNvbidcbiAgfSwgaWNvbkRlZmluaXRpb24pLCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9BMTF5KSB7XG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gPSBcIlwiLmNvbmNhdChjb25maWcucmVwbGFjZW1lbnRDbGFzcywgXCItdGl0bGUtXCIpLmNvbmNhdChuZXh0VW5pcXVlSWQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgICAgICBhdHRyaWJ1dGVzWydmb2N1c2FibGUnXSA9ICdmYWxzZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VJbmxpbmVTdmdBYnN0cmFjdCh7XG4gICAgICBpY29uczoge1xuICAgICAgICBtYWluOiBwcmVwSWNvbihpY29uKSxcbiAgICAgICAgbWFzazogbWFzayA/IHByZXBJY29uKG1hc2suaWNvbikgOiB7XG4gICAgICAgICAgZm91bmQ6IGZhbHNlLFxuICAgICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgICAgICBpY29uOiB7fVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICB0cmFuc2Zvcm06IF9vYmplY3RTcHJlYWQoe30sIG1lYW5pbmdsZXNzVHJhbnNmb3JtLCB0cmFuc2Zvcm0pLFxuICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBleHRyYToge1xuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgY2xhc3NlczogY2xhc3Nlc1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xudmFyIHRleHQgPSBmdW5jdGlvbiB0ZXh0KGNvbnRlbnQpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHRyYW5zZm9ybTIgPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3BhcmFtcyR0cmFuc2Zvcm0yID09PSB2b2lkIDAgPyBtZWFuaW5nbGVzc1RyYW5zZm9ybSA6IF9wYXJhbXMkdHJhbnNmb3JtMixcbiAgICAgIF9wYXJhbXMkdGl0bGUyID0gcGFyYW1zLnRpdGxlLFxuICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlMiA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUyLFxuICAgICAgX3BhcmFtcyRjbGFzc2VzMiA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlczIgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzMixcbiAgICAgIF9wYXJhbXMkYXR0cmlidXRlczIgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMyID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlczIsXG4gICAgICBfcGFyYW1zJHN0eWxlczIgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMyID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzMjtcbiAgcmV0dXJuIGFwaU9iamVjdCh7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUNzcygpO1xuICAgIHJldHVybiBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICB0cmFuc2Zvcm06IF9vYmplY3RTcHJlYWQoe30sIG1lYW5pbmdsZXNzVHJhbnNmb3JtLCB0cmFuc2Zvcm0pLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IFtcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1sYXllcnMtdGV4dFwiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xudmFyIGNvdW50ZXIgPSBmdW5jdGlvbiBjb3VudGVyKGNvbnRlbnQpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHRpdGxlMyA9IHBhcmFtcy50aXRsZSxcbiAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZTMgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlMyxcbiAgICAgIF9wYXJhbXMkY2xhc3NlczMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMzID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlczMsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMzID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzMyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMzLFxuICAgICAgX3BhcmFtcyRzdHlsZXMzID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzMyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlczM7XG4gIHJldHVybiBhcGlPYmplY3Qoe1xuICAgIHR5cGU6ICdjb3VudGVyJyxcbiAgICBjb250ZW50OiBjb250ZW50XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcbiAgICByZXR1cm4gbWFrZUxheWVyc0NvdW50ZXJBYnN0cmFjdCh7XG4gICAgICBjb250ZW50OiBjb250ZW50LnRvU3RyaW5nKCksXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBleHRyYToge1xuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgY2xhc3NlczogW1wiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLWxheWVycy1jb3VudGVyXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG52YXIgbGF5ZXIgPSBmdW5jdGlvbiBsYXllcihhc3NlbWJsZXIpIHtcbiAgcmV0dXJuIGFwaU9iamVjdCh7XG4gICAgdHlwZTogJ2xheWVyJ1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG4gICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgYXNzZW1ibGVyKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICBBcnJheS5pc0FycmF5KGFyZ3MpID8gYXJncy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoYS5hYnN0cmFjdCk7XG4gICAgICB9KSA6IGNoaWxkcmVuID0gY2hpbGRyZW4uY29uY2F0KGFyZ3MuYWJzdHJhY3QpO1xuICAgIH0pO1xuICAgIHJldHVybiBbe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiBcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1sYXllcnNcIilcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9XTtcbiAgfSk7XG59O1xudmFyIGFwaSA9IHtcbiAgbm9BdXRvOiBub0F1dG8sXG4gIGNvbmZpZzogY29uZmlnLFxuICBkb206IGRvbSxcbiAgbGlicmFyeTogbGlicmFyeSxcbiAgcGFyc2U6IHBhcnNlLFxuICBmaW5kSWNvbkRlZmluaXRpb246IGZpbmRJY29uRGVmaW5pdGlvbixcbiAgaWNvbjogaWNvbixcbiAgdGV4dDogdGV4dCxcbiAgY291bnRlcjogY291bnRlcixcbiAgbGF5ZXI6IGxheWVyLFxuICB0b0h0bWw6IHRvSHRtbFxufTtcblxudmFyIGF1dG9SZXBsYWNlID0gZnVuY3Rpb24gYXV0b1JlcGxhY2UoKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRhdXRvUmVwbGFjZVN2ID0gcGFyYW1zLmF1dG9SZXBsYWNlU3ZnUm9vdCxcbiAgICAgIGF1dG9SZXBsYWNlU3ZnUm9vdCA9IF9wYXJhbXMkYXV0b1JlcGxhY2VTdiA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfcGFyYW1zJGF1dG9SZXBsYWNlU3Y7XG4gIGlmICgoT2JqZWN0LmtleXMobmFtZXNwYWNlLnN0eWxlcykubGVuZ3RoID4gMCB8fCBjb25maWcuYXV0b0ZldGNoU3ZnKSAmJiBJU19ET00gJiYgY29uZmlnLmF1dG9SZXBsYWNlU3ZnKSBhcGkuZG9tLmkyc3ZnKHtcbiAgICBub2RlOiBhdXRvUmVwbGFjZVN2Z1Jvb3RcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBpY29uLCBub0F1dG8sIGNvbmZpZywgdG9IdG1sLCBsYXllciwgdGV4dCwgY291bnRlciwgbGlicmFyeSwgZG9tLCBwYXJzZSwgZmluZEljb25EZWZpbml0aW9uIH07XG4iLCJpbXBvcnQgeyBwYXJzZSwgaWNvbiwgY29uZmlnLCB0ZXh0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBodW1wcyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbihmdW5jdGlvbihnbG9iYWwpIHtcblxuICB2YXIgX3Byb2Nlc3NLZXlzID0gZnVuY3Rpb24oY29udmVydCwgb2JqLCBvcHRpb25zKSB7XG4gICAgaWYoIV9pc09iamVjdChvYmopIHx8IF9pc0RhdGUob2JqKSB8fCBfaXNSZWdFeHAob2JqKSB8fCBfaXNCb29sZWFuKG9iaikgfHwgX2lzRnVuY3Rpb24ob2JqKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICB2YXIgb3V0cHV0LFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbCA9IDA7XG5cbiAgICBpZihfaXNBcnJheShvYmopKSB7XG4gICAgICBvdXRwdXQgPSBbXTtcbiAgICAgIGZvcihsPW9iai5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKF9wcm9jZXNzS2V5cyhjb252ZXJ0LCBvYmpbaV0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdXRwdXQgPSB7fTtcbiAgICAgIGZvcih2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgb3V0cHV0W2NvbnZlcnQoa2V5LCBvcHRpb25zKV0gPSBfcHJvY2Vzc0tleXMoY29udmVydCwgb2JqW2tleV0sIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgLy8gU3RyaW5nIGNvbnZlcnNpb24gbWV0aG9kc1xuXG4gIHZhciBzZXBhcmF0ZVdvcmRzID0gZnVuY3Rpb24oc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHNlcGFyYXRvciA9IG9wdGlvbnMuc2VwYXJhdG9yIHx8ICdfJztcbiAgICB2YXIgc3BsaXQgPSBvcHRpb25zLnNwbGl0IHx8IC8oPz1bQS1aXSkvO1xuXG4gICAgcmV0dXJuIHN0cmluZy5zcGxpdChzcGxpdCkuam9pbihzZXBhcmF0b3IpO1xuICB9O1xuXG4gIHZhciBjYW1lbGl6ZSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIGlmIChfaXNOdW1lcmljYWwoc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1tcXC1fXFxzXSsoLik/L2csIGZ1bmN0aW9uKG1hdGNoLCBjaHIpIHtcbiAgICAgIHJldHVybiBjaHIgPyBjaHIudG9VcHBlckNhc2UoKSA6ICcnO1xuICAgIH0pO1xuICAgIC8vIEVuc3VyZSAxc3QgY2hhciBpcyBhbHdheXMgbG93ZXJjYXNlXG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHIoMCwgMSkudG9Mb3dlckNhc2UoKSArIHN0cmluZy5zdWJzdHIoMSk7XG4gIH07XG5cbiAgdmFyIHBhc2NhbGl6ZSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHZhciBjYW1lbGl6ZWQgPSBjYW1lbGl6ZShzdHJpbmcpO1xuICAgIC8vIEVuc3VyZSAxc3QgY2hhciBpcyBhbHdheXMgdXBwZXJjYXNlXG4gICAgcmV0dXJuIGNhbWVsaXplZC5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArIGNhbWVsaXplZC5zdWJzdHIoMSk7XG4gIH07XG5cbiAgdmFyIGRlY2FtZWxpemUgPSBmdW5jdGlvbihzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gc2VwYXJhdGVXb3JkcyhzdHJpbmcsIG9wdGlvbnMpLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgLy8gVXRpbGl0aWVzXG4gIC8vIFRha2VuIGZyb20gVW5kZXJzY29yZS5qc1xuXG4gIHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbiAgdmFyIF9pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZihvYmopID09PSAnZnVuY3Rpb24nO1xuICB9O1xuICB2YXIgX2lzT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG4gIH07XG4gIHZhciBfaXNBcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcbiAgdmFyIF9pc0RhdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0IERhdGVdJztcbiAgfTtcbiAgdmFyIF9pc1JlZ0V4cCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgUmVnRXhwXSc7XG4gIH07XG4gIHZhciBfaXNCb29sZWFuID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBCb29sZWFuXSc7XG4gIH07XG5cbiAgLy8gUGVyZm9ybWFudCB3YXkgdG8gZGV0ZXJtaW5lIGlmIG9iaiBjb2VyY2VzIHRvIGEgbnVtYmVyXG4gIHZhciBfaXNOdW1lcmljYWwgPSBmdW5jdGlvbihvYmopIHtcbiAgICBvYmogPSBvYmogLSAwO1xuICAgIHJldHVybiBvYmogPT09IG9iajtcbiAgfTtcblxuICAvLyBTZXRzIHVwIGZ1bmN0aW9uIHdoaWNoIGhhbmRsZXMgcHJvY2Vzc2luZyBrZXlzXG4gIC8vIGFsbG93aW5nIHRoZSBjb252ZXJ0IGZ1bmN0aW9uIHRvIGJlIG1vZGlmaWVkIGJ5IGEgY2FsbGJhY2tcbiAgdmFyIF9wcm9jZXNzb3IgPSBmdW5jdGlvbihjb252ZXJ0LCBvcHRpb25zKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gb3B0aW9ucyAmJiAncHJvY2VzcycgaW4gb3B0aW9ucyA/IG9wdGlvbnMucHJvY2VzcyA6IG9wdGlvbnM7XG5cbiAgICBpZih0eXBlb2YoY2FsbGJhY2spICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY29udmVydDtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soc3RyaW5nLCBjb252ZXJ0LCBvcHRpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGh1bXBzID0ge1xuICAgIGNhbWVsaXplOiBjYW1lbGl6ZSxcbiAgICBkZWNhbWVsaXplOiBkZWNhbWVsaXplLFxuICAgIHBhc2NhbGl6ZTogcGFzY2FsaXplLFxuICAgIGRlcGFzY2FsaXplOiBkZWNhbWVsaXplLFxuICAgIGNhbWVsaXplS2V5czogZnVuY3Rpb24ob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gX3Byb2Nlc3NLZXlzKF9wcm9jZXNzb3IoY2FtZWxpemUsIG9wdGlvbnMpLCBvYmplY3QpO1xuICAgIH0sXG4gICAgZGVjYW1lbGl6ZUtleXM6IGZ1bmN0aW9uKG9iamVjdCwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIF9wcm9jZXNzS2V5cyhfcHJvY2Vzc29yKGRlY2FtZWxpemUsIG9wdGlvbnMpLCBvYmplY3QsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgcGFzY2FsaXplS2V5czogZnVuY3Rpb24ob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gX3Byb2Nlc3NLZXlzKF9wcm9jZXNzb3IocGFzY2FsaXplLCBvcHRpb25zKSwgb2JqZWN0KTtcbiAgICB9LFxuICAgIGRlcGFzY2FsaXplS2V5czogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVjYW1lbGl6ZUtleXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgIHVuZGVmaW5lZChodW1wcyk7XG4gIH0gZWxzZSBpZiAoJ29iamVjdCcgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBodW1wcztcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWwuaHVtcHMgPSBodW1wcztcbiAgfVxuXG59KShjb21tb25qc0dsb2JhbCk7XG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBvYmplY3RXaXRob3V0UHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIHRvQ29uc3VtYWJsZUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHN0eWxlVG9PYmplY3Qoc3R5bGUpIHtcbiAgcmV0dXJuIHN0eWxlLnNwbGl0KCc7JykubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMudHJpbSgpO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcztcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBhaXIpIHtcbiAgICB2YXIgaSA9IHBhaXIuaW5kZXhPZignOicpO1xuICAgIHZhciBwcm9wID0gaHVtcHMuY2FtZWxpemUocGFpci5zbGljZSgwLCBpKSk7XG4gICAgdmFyIHZhbHVlID0gcGFpci5zbGljZShpICsgMSkudHJpbSgpO1xuXG4gICAgYWNjW3Byb3BdID0gdmFsdWU7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzVG9PYmplY3QoY2xzKSB7XG4gIHJldHVybiBjbHMuc3BsaXQoL1xccysvKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYykge1xuICAgIGFjY1tjXSA9IHRydWU7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVDbGFzc09iamVjdHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBvYmpzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgb2Jqc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBvYmpzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBvYmopIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICBhY2MgPSBhY2MuY29uY2F0KG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjYy5wdXNoKG9iaik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0KGgsIGVsZW1lbnQpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXG4gIHZhciBjaGlsZHJlbiA9IChlbGVtZW50LmNoaWxkcmVuIHx8IFtdKS5tYXAoY29udmVydC5iaW5kKG51bGwsIGgpKTtcblxuICB2YXIgbWl4aW5zID0gT2JqZWN0LmtleXMoZWxlbWVudC5hdHRyaWJ1dGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgdmFyIHZhbCA9IGVsZW1lbnQuYXR0cmlidXRlc1trZXldO1xuXG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgYWNjWydjbGFzcyddID0gY2xhc3NUb09iamVjdCh2YWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgYWNjWydzdHlsZSddID0gc3R5bGVUb09iamVjdCh2YWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFjYy5hdHRyc1trZXldID0gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHsgJ2NsYXNzJzoge30sIHN0eWxlOiB7fSwgYXR0cnM6IHt9IH0pO1xuXG4gIHZhciBfZGF0YSRjbGFzcyA9IGRhdGEuY2xhc3MsXG4gICAgICBkQ2xhc3MgPSBfZGF0YSRjbGFzcyA9PT0gdW5kZWZpbmVkID8ge30gOiBfZGF0YSRjbGFzcyxcbiAgICAgIF9kYXRhJHN0eWxlID0gZGF0YS5zdHlsZSxcbiAgICAgIGRTdHlsZSA9IF9kYXRhJHN0eWxlID09PSB1bmRlZmluZWQgPyB7fSA6IF9kYXRhJHN0eWxlLFxuICAgICAgX2RhdGEkYXR0cnMgPSBkYXRhLmF0dHJzLFxuICAgICAgZEF0dHJzID0gX2RhdGEkYXR0cnMgPT09IHVuZGVmaW5lZCA/IHt9IDogX2RhdGEkYXR0cnMsXG4gICAgICByZW1haW5pbmdEYXRhID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoZGF0YSwgWydjbGFzcycsICdzdHlsZScsICdhdHRycyddKTtcblxuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaChlbGVtZW50LnRhZywgX2V4dGVuZHMoe1xuICAgICAgY2xhc3M6IGNvbWJpbmVDbGFzc09iamVjdHMobWl4aW5zLmNsYXNzLCBkQ2xhc3MpLFxuICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBtaXhpbnMuc3R5bGUsIGRTdHlsZSksXG4gICAgICBhdHRyczogX2V4dGVuZHMoe30sIG1peGlucy5hdHRycywgZEF0dHJzKVxuICAgIH0sIHJlbWFpbmluZ0RhdGEsIHtcbiAgICAgIHByb3BzOiBwcm9wc1xuICAgIH0pLCBjaGlsZHJlbik7XG4gIH1cbn1cblxudmFyIFBST0RVQ1RJT04gPSBmYWxzZTtcblxudHJ5IHtcbiAgUFJPRFVDVElPTiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG59IGNhdGNoIChlKSB7fVxuXG5mdW5jdGlvbiBsb2cgKCkge1xuICBpZiAoIVBST0RVQ1RJT04gJiYgY29uc29sZSAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBfY29uc29sZTtcblxuICAgIChfY29uc29sZSA9IGNvbnNvbGUpLmVycm9yLmFwcGx5KF9jb25zb2xlLCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhLZXkoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCB8fCAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUgPyBkZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCB2YWx1ZSkgOiB7fTtcbn1cblxuZnVuY3Rpb24gY2xhc3NMaXN0KHByb3BzKSB7XG4gIHZhciBfY2xhc3NlcztcblxuICB2YXIgY2xhc3NlcyA9IChfY2xhc3NlcyA9IHtcbiAgICAnZmEtc3Bpbic6IHByb3BzLnNwaW4sXG4gICAgJ2ZhLXB1bHNlJzogcHJvcHMucHVsc2UsXG4gICAgJ2ZhLWZ3JzogcHJvcHMuZml4ZWRXaWR0aCxcbiAgICAnZmEtYm9yZGVyJzogcHJvcHMuYm9yZGVyLFxuICAgICdmYS1saSc6IHByb3BzLmxpc3RJdGVtLFxuICAgICdmYS1mbGlwLWhvcml6b250YWwnOiBwcm9wcy5mbGlwID09PSAnaG9yaXpvbnRhbCcgfHwgcHJvcHMuZmxpcCA9PT0gJ2JvdGgnLFxuICAgICdmYS1mbGlwLXZlcnRpY2FsJzogcHJvcHMuZmxpcCA9PT0gJ3ZlcnRpY2FsJyB8fCBwcm9wcy5mbGlwID09PSAnYm90aCdcbiAgfSwgZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsICdmYS0nICsgcHJvcHMuc2l6ZSwgcHJvcHMuc2l6ZSAhPT0gbnVsbCksIGRlZmluZVByb3BlcnR5KF9jbGFzc2VzLCAnZmEtcm90YXRlLScgKyBwcm9wcy5yb3RhdGlvbiwgcHJvcHMucm90YXRpb24gIT09IG51bGwpLCBkZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgJ2ZhLXB1bGwtJyArIHByb3BzLnB1bGwsIHByb3BzLnB1bGwgIT09IG51bGwpLCBfY2xhc3Nlcyk7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNsYXNzZXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGNsYXNzZXNba2V5XSA/IGtleSA6IG51bGw7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0YXRpY0NsYXNzKHRvLCB3aGF0KSB7XG4gIHZhciB2YWwgPSAodG8gfHwgJycpLmxlbmd0aCA9PT0gMCA/IFtdIDogW3RvXTtcblxuICByZXR1cm4gdmFsLmNvbmNhdCh3aGF0KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUljb25BcmdzKGljb24kJDEpIHtcbiAgaWYgKGljb24kJDEgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICgodHlwZW9mIGljb24kJDEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGljb24kJDEpKSA9PT0gJ29iamVjdCcgJiYgaWNvbiQkMS5wcmVmaXggJiYgaWNvbiQkMS5pY29uTmFtZSkge1xuICAgIHJldHVybiBpY29uJCQxO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoaWNvbiQkMSkgJiYgaWNvbiQkMS5sZW5ndGggPT09IDIpIHtcbiAgICByZXR1cm4geyBwcmVmaXg6IGljb24kJDFbMF0sIGljb25OYW1lOiBpY29uJCQxWzFdIH07XG4gIH1cblxuICBpZiAodHlwZW9mIGljb24kJDEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHsgcHJlZml4OiAnZmFzJywgaWNvbk5hbWU6IGljb24kJDEgfTtcbiAgfVxufVxuXG52YXIgRm9udEF3ZXNvbWVJY29uID0ge1xuICBuYW1lOiAnRm9udEF3ZXNvbWVJY29uJyxcblxuICBmdW5jdGlvbmFsOiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgYm9yZGVyOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGZpeGVkV2lkdGg6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgZmxpcDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnYm90aCddLmluZGV4T2YodmFsdWUpID4gLTE7XG4gICAgICB9XG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICB0eXBlOiBbT2JqZWN0LCBBcnJheSwgU3RyaW5nXSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBtYXNrOiB7XG4gICAgICB0eXBlOiBbT2JqZWN0LCBBcnJheSwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGxpc3RJdGVtOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHB1bGw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZih2YWx1ZSkgPiAtMTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHB1bHNlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHJvdGF0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFs5MCwgMTgwLCAyNzBdLmluZGV4T2YodmFsdWUpID4gLTE7XG4gICAgICB9XG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFsnbGcnLCAneHMnLCAnc20nLCAnMXgnLCAnMngnLCAnM3gnLCAnNHgnLCAnNXgnLCAnNngnLCAnN3gnLCAnOHgnLCAnOXgnLCAnMTB4J10uaW5kZXhPZih2YWx1ZSkgPiAtMTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNwaW46IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgdHJhbnNmb3JtOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgc3ltYm9sOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdmFyIHByb3BzID0gY29udGV4dC5wcm9wcztcbiAgICB2YXIgaWNvbkFyZ3MgPSBwcm9wcy5pY29uLFxuICAgICAgICBtYXNrQXJncyA9IHByb3BzLm1hc2ssXG4gICAgICAgIHN5bWJvbCA9IHByb3BzLnN5bWJvbCxcbiAgICAgICAgdGl0bGUgPSBwcm9wcy50aXRsZTtcblxuICAgIHZhciBpY29uJCQxID0gbm9ybWFsaXplSWNvbkFyZ3MoaWNvbkFyZ3MpO1xuICAgIHZhciBjbGFzc2VzID0gb2JqZWN0V2l0aEtleSgnY2xhc3NlcycsIGNsYXNzTGlzdChwcm9wcykpO1xuICAgIHZhciB0cmFuc2Zvcm0gPSBvYmplY3RXaXRoS2V5KCd0cmFuc2Zvcm0nLCB0eXBlb2YgcHJvcHMudHJhbnNmb3JtID09PSAnc3RyaW5nJyA/IHBhcnNlLnRyYW5zZm9ybShwcm9wcy50cmFuc2Zvcm0pIDogcHJvcHMudHJhbnNmb3JtKTtcbiAgICB2YXIgbWFzayA9IG9iamVjdFdpdGhLZXkoJ21hc2snLCBub3JtYWxpemVJY29uQXJncyhtYXNrQXJncykpO1xuXG4gICAgdmFyIHJlbmRlcmVkSWNvbiA9IGljb24oaWNvbiQkMSwgX2V4dGVuZHMoe30sIGNsYXNzZXMsIHRyYW5zZm9ybSwgbWFzaywgeyBzeW1ib2w6IHN5bWJvbCwgdGl0bGU6IHRpdGxlIH0pKTtcblxuICAgIGlmICghcmVuZGVyZWRJY29uKSB7XG4gICAgICByZXR1cm4gbG9nKCdDb3VsZCBub3QgZmluZCBvbmUgb3IgbW9yZSBpY29uKHMpJywgaWNvbiQkMSwgbWFzayk7XG4gICAgfVxuXG4gICAgdmFyIGFic3RyYWN0ID0gcmVuZGVyZWRJY29uLmFic3RyYWN0O1xuXG4gICAgdmFyIGNvbnZlcnRDdXJyeSA9IGNvbnZlcnQuYmluZChudWxsLCBjcmVhdGVFbGVtZW50KTtcblxuICAgIHJldHVybiBjb252ZXJ0Q3VycnkoYWJzdHJhY3RbMF0sIHt9LCBjb250ZXh0LmRhdGEpO1xuICB9XG59O1xuXG52YXIgRm9udEF3ZXNvbWVMYXllcnMgPSB7XG4gIG5hbWU6ICdGb250QXdlc29tZUxheWVycycsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIGZpeGVkV2lkdGg6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdmFyIGZhbWlseVByZWZpeCA9IGNvbmZpZy5mYW1pbHlQcmVmaXg7XG4gICAgdmFyIHN0YXRpY0NsYXNzID0gY29udGV4dC5kYXRhLnN0YXRpY0NsYXNzO1xuXG5cbiAgICB2YXIgY2xhc3NlcyA9IFtmYW1pbHlQcmVmaXggKyAnLWxheWVycyddLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShjb250ZXh0LnByb3BzLmZpeGVkV2lkdGggPyBbZmFtaWx5UHJlZml4ICsgJy1mdyddIDogW10pKTtcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCBfZXh0ZW5kcyh7fSwgY29udGV4dC5kYXRhLCB7XG4gICAgICBzdGF0aWNDbGFzczogYWRkU3RhdGljQ2xhc3Moc3RhdGljQ2xhc3MsIGNsYXNzZXMpXG4gICAgfSksIGNvbnRleHQuY2hpbGRyZW4pO1xuICB9XG59O1xuXG52YXIgRm9udEF3ZXNvbWVMYXllcnNUZXh0ID0ge1xuICBuYW1lOiAnRm9udEF3ZXNvbWVMYXllcnNUZXh0JyxcblxuICBmdW5jdGlvbmFsOiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgdHJhbnNmb3JtOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgdmFyIHByb3BzID0gY29udGV4dC5wcm9wcztcblxuICAgIHZhciB0cmFuc2Zvcm0gPSBvYmplY3RXaXRoS2V5KCd0cmFuc2Zvcm0nLCB0eXBlb2YgcHJvcHMudHJhbnNmb3JtID09PSAnc3RyaW5nJyA/IHBhcnNlLnRyYW5zZm9ybShwcm9wcy50cmFuc2Zvcm0pIDogcHJvcHMudHJhbnNmb3JtKTtcblxuICAgIHZhciByZW5kZXJlZFRleHQgPSB0ZXh0KHByb3BzLnZhbHVlLnRvU3RyaW5nKCksIF9leHRlbmRzKHt9LCB0cmFuc2Zvcm0pKTtcblxuICAgIHZhciBhYnN0cmFjdCA9IHJlbmRlcmVkVGV4dC5hYnN0cmFjdDtcblxuXG4gICAgdmFyIGNvbnZlcnRDdXJyeSA9IGNvbnZlcnQuYmluZChudWxsLCBjcmVhdGVFbGVtZW50KTtcblxuICAgIHJldHVybiBjb252ZXJ0Q3VycnkoYWJzdHJhY3RbMF0sIHt9LCBjb250ZXh0LmRhdGEpO1xuICB9XG59O1xuXG5leHBvcnQgeyBGb250QXdlc29tZUljb24sIEZvbnRBd2Vzb21lTGF5ZXJzLCBGb250QXdlc29tZUxheWVyc1RleHQgfTtcbiIsIjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImJnLXdoaXRlIGNvbnRhaW5lciBteC00IG1kOm14LWF1dG8gc2hhZG93LWxnIG10LTMyIGZsZXggZmxleC1yb3cgbWQ6dy0zLzUgeHhsOnctMi81IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gIDxkaXYgY2xhc3M9XCJ3LTEvMiB0ZXh0LWNlbnRlciBiZy10ZWFsLWxpZ2h0IHAtNCBoaWRkZW4gbWQ6YmxvY2tcIj5cclxuICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC00eGwgcHQtOCBtdC04XCI+R09PRFdPUks8L3A+XHJcbiAgICA8cCBjbGFzcz1cInRleHQtd2hpdGUgdGV4dC14bCBwdC00XCI+U2FuZSB3YXkgdG8gbWFuYWdlIHdvcms8L3A+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIlwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbWQ6dy0xLzIgcC04XCI+XHJcbiAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgOmFjdGlvbj1cInVybFwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiA6dmFsdWU9XCJ0b2tlblwiPlxyXG4gICAgICA8cCBjbGFzcz1cInB5LTRcIj5cclxuICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIGFyaWEtbGFiZWw9XCJlbWFpbFwiIGNsYXNzPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JleS1kYXJrZXJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgOnZhbHVlPVwib2xkRW1haWxcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtcmVkLWxpZ2h0IGJsb2NrIHB0LTJcIiB2LWlmPVwiZXJyb3JzLmVtYWlsXCI+e3sgZXJyb3JzLmVtYWlsWzBdIH19PC9zcGFuPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwicHktNFwiPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgYXJpYS1sYWJlbD1cInBhc3N3b3JkXCIgY2xhc3M9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmV5LWRhcmtlclwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzcz1cInB5LTQgdGV4dC1ncmV5XCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGFyaWEtbGFiZWw9XCJyZW1lbWJlciBtZVwiIG5hbWU9XCJyZW1lbWJlclwiPlxyXG4gICAgICAgIFJlbWVtYmVyIE1lXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJweS00XCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG5cIj5MT0dJTjwvYnV0dG9uPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxhIGhyZWY9XCJwYXNzd29yZC9yZXNldFwiIGNsYXNzPVwibm8tdW5kZXJsaW5lIHRleHQtdGVhbCB0ZXh0LXNtXCI+Rm9yZ290IFlvdXIgUGFzc3dvcmQ/PC9hPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgdG9rZW46IExhcmF2ZWwuY3NyZlRva2VuLFxyXG4gICAgZXJyb3JzLFxyXG4gICAgb2xkRW1haWwsXHJcbiAgICB1cmxcclxuICB9KVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbnZhciBDb25uZWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGNsYXNzIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIENvbm5lY3RvcihvcHRpb25zKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENvbm5lY3Rvcik7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29ubmVjdG9yIG9wdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dGhFbmRwb2ludDogJy9icm9hZGNhc3RpbmcvYXV0aCcsXG4gICAgICAgICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4gICAgICAgICAgICBjc3JmVG9rZW46IG51bGwsXG4gICAgICAgICAgICBob3N0OiBudWxsLFxuICAgICAgICAgICAga2V5OiBudWxsLFxuICAgICAgICAgICAgbmFtZXNwYWNlOiAnQXBwLkV2ZW50cydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWVyZ2UgdGhlIGN1c3RvbSBvcHRpb25zIHdpdGggdGhlIGRlZmF1bHRzLlxuICAgICAqL1xuXG5cbiAgICBjcmVhdGVDbGFzcyhDb25uZWN0b3IsIFt7XG4gICAgICAgIGtleTogJ3NldE9wdGlvbnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh0aGlzLl9kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jc3JmVG9rZW4oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hdXRoLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5jc3JmVG9rZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHRyYWN0IHRoZSBDU1JGIHRva2VuIGZyb20gdGhlIHBhZ2UuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjc3JmVG9rZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3NyZlRva2VuKCkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvd1snTGFyYXZlbCddICYmIHdpbmRvd1snTGFyYXZlbCddLmNzcmZUb2tlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbJ0xhcmF2ZWwnXS5jc3JmVG9rZW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jc3JmVG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNzcmZUb2tlbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAoc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIENvbm5lY3Rvcjtcbn0oKTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBiYXNpYyBjaGFubmVsLlxuICovXG52YXIgQ2hhbm5lbCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2hhbm5lbCgpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFubmVsKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKENoYW5uZWwsIFt7XG4gICAga2V5OiAnbGlzdGVuRm9yV2hpc3BlcicsXG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gZm9yIGEgd2hpc3BlciBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuRm9yV2hpc3BlcihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbignLmNsaWVudC0nICsgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbm90aWZpY2F0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbm90aWZpY2F0aW9uKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW4oJy5JbGx1bWluYXRlXFxcXE5vdGlmaWNhdGlvbnNcXFxcRXZlbnRzXFxcXEJyb2FkY2FzdE5vdGlmaWNhdGlvbkNyZWF0ZWQnLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDaGFubmVsO1xufSgpO1xuXG4vKipcbiAqIEV2ZW50IG5hbWUgZm9ybWF0dGVyXG4gKi9cbnZhciBFdmVudEZvcm1hdHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgY2xhc3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gRXZlbnRGb3JtYXR0ZXIobmFtZXNwYWNlKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50Rm9ybWF0dGVyKTtcblxuICAgICAgICB0aGlzLnNldE5hbWVzcGFjZShuYW1lc3BhY2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgdGhlIGdpdmVuIGV2ZW50IG5hbWUuXG4gICAgICovXG5cblxuICAgIGNyZWF0ZUNsYXNzKEV2ZW50Rm9ybWF0dGVyLCBbe1xuICAgICAgICBrZXk6ICdmb3JtYXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0KGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY2hhckF0KDApID09PSAnLicgfHwgZXZlbnQuY2hhckF0KDApID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQuc3Vic3RyKDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50ID0gdGhpcy5uYW1lc3BhY2UgKyAnLicgKyBldmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBldmVudC5yZXBsYWNlKC9cXC4vZywgJ1xcXFwnKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBldmVudCBuYW1lc3BhY2UuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXROYW1lc3BhY2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TmFtZXNwYWNlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWVzcGFjZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBFdmVudEZvcm1hdHRlcjtcbn0oKTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBQdXNoZXIgY2hhbm5lbC5cbiAqL1xudmFyIFB1c2hlckNoYW5uZWwgPSBmdW5jdGlvbiAoX0NoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhQdXNoZXJDaGFubmVsLCBfQ2hhbm5lbCk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgY2xhc3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gUHVzaGVyQ2hhbm5lbChwdXNoZXIsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyQ2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHVzaGVyQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hlckNoYW5uZWwpKS5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuZXZlbnRGb3JtYXR0ZXIgPSBuZXcgRXZlbnRGb3JtYXR0ZXIoX3RoaXMub3B0aW9ucy5uYW1lc3BhY2UpO1xuICAgICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgdG8gYSBQdXNoZXIgY2hhbm5lbC5cbiAgICAgKi9cblxuXG4gICAgY3JlYXRlQ2xhc3MoUHVzaGVyQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVuc3Vic2NyaWJlIGZyb20gYSBQdXNoZXIgY2hhbm5lbC5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoZXIudW5zdWJzY3JpYmUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3AgbGlzdGVuaW5nIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0b3BMaXN0ZW5pbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZyhldmVudCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5iaW5kKHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQmluZCBhIGNoYW5uZWwgdG8gYW4gZXZlbnQuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmJpbmQoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBQdXNoZXJDaGFubmVsO1xufShDaGFubmVsKTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBQdXNoZXIgcHJpdmF0ZSBjaGFubmVsLlxuICovXG52YXIgUHVzaGVyUHJpdmF0ZUNoYW5uZWwgPSBmdW5jdGlvbiAoX1B1c2hlckNoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhQdXNoZXJQcml2YXRlQ2hhbm5lbCwgX1B1c2hlckNoYW5uZWwpO1xuXG4gICAgZnVuY3Rpb24gUHVzaGVyUHJpdmF0ZUNoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlclByaXZhdGVDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFB1c2hlclByaXZhdGVDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHVzaGVyUHJpdmF0ZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJQcml2YXRlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnd2hpc3BlcicsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyaWdnZXIgY2xpZW50IGV2ZW50IG9uIHRoZSBjaGFubmVsLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci5jaGFubmVscy5jaGFubmVsc1t0aGlzLm5hbWVdLnRyaWdnZXIoJ2NsaWVudC0nICsgZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBQdXNoZXJQcml2YXRlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgUHVzaGVyIHByZXNlbmNlIGNoYW5uZWwuXG4gKi9cbnZhciBQdXNoZXJQcmVzZW5jZUNoYW5uZWwgPSBmdW5jdGlvbiAoX1B1c2hlckNoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhQdXNoZXJQcmVzZW5jZUNoYW5uZWwsIF9QdXNoZXJDaGFubmVsKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlclByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyUHJlc2VuY2VDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFB1c2hlclByZXNlbmNlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hlclByZXNlbmNlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFB1c2hlclByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnaGVyZScsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgdGhlIG1lbWJlciBsaXN0IGNoYW5nZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHVzaGVyOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWQnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKE9iamVjdC5rZXlzKGRhdGEubWVtYmVycykubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLm1lbWJlcnNba107XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIGZvciBzb21lb25lIGpvaW5pbmcgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdqb2luaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5pbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3B1c2hlcjptZW1iZXJfYWRkZWQnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVtYmVyLmluZm8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIGZvciBzb21lb25lIGxlYXZpbmcgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2aW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZpbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3B1c2hlcjptZW1iZXJfcmVtb3ZlZCcsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhtZW1iZXIuaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmlnZ2VyIGNsaWVudCBldmVudCBvbiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3doaXNwZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcignY2xpZW50LScgKyBldmVudE5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFB1c2hlclByZXNlbmNlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgU29ja2V0LmlvIGNoYW5uZWwuXG4gKi9cbnZhciBTb2NrZXRJb0NoYW5uZWwgPSBmdW5jdGlvbiAoX0NoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhTb2NrZXRJb0NoYW5uZWwsIF9DaGFubmVsKTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTb2NrZXRJb0NoYW5uZWwoc29ja2V0LCBuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvQ2hhbm5lbCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBldmVudCBjYWxsYmFja3MgYXBwbGllZCB0byB0aGUgY2hhbm5lbC5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNvY2tldElvQ2hhbm5lbCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLmV2ZW50cyA9IHt9O1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMuc29ja2V0ID0gc29ja2V0O1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuZXZlbnRGb3JtYXR0ZXIgPSBuZXcgRXZlbnRGb3JtYXR0ZXIoX3RoaXMub3B0aW9ucy5uYW1lc3BhY2UpO1xuICAgICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICAgICAgX3RoaXMuY29uZmlndXJlUmVjb25uZWN0b3IoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgdG8gYSBTb2NrZXQuaW8gY2hhbm5lbC5cbiAgICAgKi9cblxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9DaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc3Vic2NyaWJlJywge1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBhdXRoOiB0aGlzLm9wdGlvbnMuYXV0aCB8fCB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVuc3Vic2NyaWJlIGZyb20gY2hhbm5lbCBhbmQgdWJpbmQgZXZlbnQgY2FsbGJhY2tzLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgndW5zdWJzY3JpYmUnLCB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGF1dGg6IHRoaXMub3B0aW9ucy5hdXRoIHx8IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3AgbGlzdGVuaW5nIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0b3BMaXN0ZW5pbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZyhldmVudCkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5yZW1vdmVMaXN0ZW5lcihuYW1lKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tuYW1lXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kIHRoZSBjaGFubmVsJ3Mgc29ja2V0IHRvIGFuIGV2ZW50IGFuZCBzdG9yZSB0aGUgY2FsbGJhY2suXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcihjaGFubmVsLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5uYW1lID09IGNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmJpbmQoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQXR0YWNoIGEgJ3JlY29ubmVjdCcgbGlzdGVuZXIgYW5kIGJpbmQgdGhlIGV2ZW50LlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29uZmlndXJlUmVjb25uZWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29uZmlndXJlUmVjb25uZWN0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMzLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3QnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmJpbmQoJ3JlY29ubmVjdCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQmluZCB0aGUgY2hhbm5lbCdzIHNvY2tldCB0byBhbiBldmVudCBhbmQgc3RvcmUgdGhlIGNhbGxiYWNrLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmluZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbmJpbmQgdGhlIGNoYW5uZWwncyBzb2NrZXQgZnJvbSBhbGwgc3RvcmVkIGV2ZW50IGNhbGxiYWNrcy5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuYmluZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5ldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXM0LmV2ZW50c1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnNvY2tldC5yZW1vdmVMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczQuZXZlbnRzW2V2ZW50XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBTb2NrZXRJb0NoYW5uZWw7XG59KENoYW5uZWwpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFNvY2tldC5pbyBwcmVzZW5jZSBjaGFubmVsLlxuICovXG52YXIgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCA9IGZ1bmN0aW9uIChfU29ja2V0SW9DaGFubmVsKSB7XG4gICAgaW5oZXJpdHMoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCwgX1NvY2tldElvQ2hhbm5lbCk7XG5cbiAgICBmdW5jdGlvbiBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb1ByaXZhdGVDaGFubmVsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnd2hpc3BlcicsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyaWdnZXIgY2xpZW50IGV2ZW50IG9uIHRoZSBjaGFubmVsLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdjbGllbnQgZXZlbnQnLCB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2xpZW50LScgKyBldmVudE5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU29ja2V0SW9Qcml2YXRlQ2hhbm5lbDtcbn0oU29ja2V0SW9DaGFubmVsKTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBTb2NrZXQuaW8gcHJlc2VuY2UgY2hhbm5lbC5cbiAqL1xudmFyIFNvY2tldElvUHJlc2VuY2VDaGFubmVsID0gZnVuY3Rpb24gKF9Tb2NrZXRJb1ByaXZhdGVDaGFubikge1xuICAgIGluaGVyaXRzKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLCBfU29ja2V0SW9Qcml2YXRlQ2hhbm4pO1xuXG4gICAgZnVuY3Rpb24gU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvUHJlc2VuY2VDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnaGVyZScsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgdGhlIG1lbWJlciBsaXN0IGNoYW5nZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHJlc2VuY2U6c3Vic2NyaWJlZCcsIGZ1bmN0aW9uIChtZW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVtYmVycy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0udXNlcl9pbmZvO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBqb2luaW5nIHRoZSBjaGFubmVsLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnam9pbmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luaW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwcmVzZW5jZTpqb2luaW5nJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBsZWF2aW5nIHRoZSBjaGFubmVsLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGVhdmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2aW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwcmVzZW5jZTpsZWF2aW5nJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvUHJlc2VuY2VDaGFubmVsO1xufShTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBudWxsIGNoYW5uZWwuXG4gKi9cbnZhciBOdWxsQ2hhbm5lbCA9IGZ1bmN0aW9uIChfQ2hhbm5lbCkge1xuICBpbmhlcml0cyhOdWxsQ2hhbm5lbCwgX0NoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIE51bGxDaGFubmVsKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bGxDaGFubmVsKTtcbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTnVsbENoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdWxsQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoTnVsbENoYW5uZWwsIFt7XG4gICAga2V5OiAnc3Vic2NyaWJlJyxcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBhIGNoYW5uZWwuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHt9XG4gICAgLy9cblxuICAgIC8qKlxuICAgICAqIFVuc3Vic2NyaWJlIGZyb20gYSBjaGFubmVsLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd1bnN1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge31cbiAgICAvL1xuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbGlzdGVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3AgbGlzdGVuaW5nIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc3RvcExpc3RlbmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmcoZXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCaW5kIGEgY2hhbm5lbCB0byBhbiBldmVudC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTnVsbENoYW5uZWw7XG59KENoYW5uZWwpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIG51bGwgcHJpdmF0ZSBjaGFubmVsLlxuICovXG52YXIgTnVsbFByaXZhdGVDaGFubmVsID0gZnVuY3Rpb24gKF9OdWxsQ2hhbm5lbCkge1xuICBpbmhlcml0cyhOdWxsUHJpdmF0ZUNoYW5uZWwsIF9OdWxsQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gTnVsbFByaXZhdGVDaGFubmVsKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bGxQcml2YXRlQ2hhbm5lbCk7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE51bGxQcml2YXRlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bGxQcml2YXRlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoTnVsbFByaXZhdGVDaGFubmVsLCBbe1xuICAgIGtleTogJ3doaXNwZXInLFxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBjbGllbnQgZXZlbnQgb24gdGhlIGNoYW5uZWwuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE51bGxQcml2YXRlQ2hhbm5lbDtcbn0oTnVsbENoYW5uZWwpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIG51bGwgcHJlc2VuY2UgY2hhbm5lbC5cbiAqL1xudmFyIE51bGxQcmVzZW5jZUNoYW5uZWwgPSBmdW5jdGlvbiAoX051bGxDaGFubmVsKSB7XG4gIGluaGVyaXRzKE51bGxQcmVzZW5jZUNoYW5uZWwsIF9OdWxsQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gTnVsbFByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBOdWxsUHJlc2VuY2VDaGFubmVsKTtcbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTnVsbFByZXNlbmNlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bGxQcmVzZW5jZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKE51bGxQcmVzZW5jZUNoYW5uZWwsIFt7XG4gICAga2V5OiAnaGVyZScsXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIHRoZSBtZW1iZXIgbGlzdCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBoZXJlKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGpvaW5pbmcgdGhlIGNoYW5uZWwuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2pvaW5pbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luaW5nKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGxlYXZpbmcgdGhlIGNoYW5uZWwuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2xlYXZpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2aW5nKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBjbGllbnQgZXZlbnQgb24gdGhlIGNoYW5uZWwuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3doaXNwZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBOdWxsUHJlc2VuY2VDaGFubmVsO1xufShOdWxsQ2hhbm5lbCk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBjcmVhdGVzIGEgY29ubmVjdG9yIHRvIFB1c2hlci5cbiAqL1xudmFyIFB1c2hlckNvbm5lY3RvciA9IGZ1bmN0aW9uIChfQ29ubmVjdG9yKSB7XG4gICAgaW5oZXJpdHMoUHVzaGVyQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlckNvbm5lY3RvcigpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyQ29ubmVjdG9yKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG9mIHRoZSBzdWJzY3JpYmVkIGNoYW5uZWwgbmFtZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQdXNoZXJDb25uZWN0b3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQdXNoZXJDb25uZWN0b3IpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5jaGFubmVscyA9IHt9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGZyZXNoIFB1c2hlciBjb25uZWN0aW9uLlxuICAgICAqL1xuXG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJDb25uZWN0b3IsIFt7XG4gICAgICAgIGtleTogJ2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNsaWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hlciA9IHRoaXMub3B0aW9ucy5jbGllbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcih0aGlzLm9wdGlvbnMua2V5LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpLmxpc3RlbihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IG5ldyBQdXNoZXJDaGFubmVsKHRoaXMucHVzaGVyLCBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIHByaXZhdGUgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJpdmF0ZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdID0gbmV3IFB1c2hlclByaXZhdGVDaGFubmVsKHRoaXMucHVzaGVyLCAncHJpdmF0ZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgcHJlc2VuY2UgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlc2VuY2VDaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXNlbmNlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSA9IG5ldyBQdXNoZXJQcmVzZW5jZUNoYW5uZWwodGhpcy5wdXNoZXIsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLCBhcyB3ZWxsIGFzIGl0cyBwcml2YXRlIGFuZCBwcmVzZW5jZSB2YXJpYW50cy5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5sZWF2ZUNoYW5uZWwobmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2ZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVDaGFubmVsKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIHNvY2tldCBJRCBmb3IgdGhlIGNvbm5lY3Rpb24uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzb2NrZXRJZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hlci5jb25uZWN0aW9uLnNvY2tldF9pZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzY29ubmVjdCBQdXNoZXIgY29ubmVjdGlvbi5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUHVzaGVyQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgY3JlYXRlcyBhIGNvbm5uZWN0b3IgdG8gYSBTb2NrZXQuaW8gc2VydmVyLlxuICovXG52YXIgU29ja2V0SW9Db25uZWN0b3IgPSBmdW5jdGlvbiAoX0Nvbm5lY3Rvcikge1xuICAgIGluaGVyaXRzKFNvY2tldElvQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICAgIGZ1bmN0aW9uIFNvY2tldElvQ29ubmVjdG9yKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb0Nvbm5lY3Rvcik7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBvZiB0aGUgc3Vic2NyaWJlZCBjaGFubmVsIG5hbWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU29ja2V0SW9Db25uZWN0b3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb0Nvbm5lY3RvcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgIF90aGlzLmNoYW5uZWxzID0ge307XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZnJlc2ggU29ja2V0LmlvIGNvbm5lY3Rpb24uXG4gICAgICovXG5cblxuICAgIGNyZWF0ZUNsYXNzKFNvY2tldElvQ29ubmVjdG9yLCBbe1xuICAgICAgICBrZXk6ICdjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgICAgICB2YXIgaW8gPSB0aGlzLmdldFNvY2tldElPKCk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMub3B0aW9ucy5ob3N0LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ja2V0O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgc29ja2V0LmlvIG1vZHVsZSBmcm9tIGdsb2JhbCBzY29wZSBvciBvcHRpb25zLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U29ja2V0SU8nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U29ja2V0SU8oKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNsaWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNsaWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29ja2V0LmlvIGNsaWVudCBub3QgZm91bmQuIFNob3VsZCBiZSBnbG9iYWxseSBhdmFpbGFibGUgb3IgcGFzc2VkIHZpYSBvcHRpb25zLmNsaWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpLmxpc3RlbihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IG5ldyBTb2NrZXRJb0NoYW5uZWwodGhpcy5zb2NrZXQsIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgcHJpdmF0ZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcml2YXRlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCh0aGlzLnNvY2tldCwgJ3ByaXZhdGUtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIHByZXNlbmNlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByZXNlbmNlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVzZW5jZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwodGhpcy5zb2NrZXQsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLCBhcyB3ZWxsIGFzIGl0cyBwcml2YXRlIGFuZCBwcmVzZW5jZSB2YXJpYW50cy5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLmxlYXZlQ2hhbm5lbChuYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbC5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgc29ja2V0IElEIGZvciB0aGUgY29ubmVjdGlvbi5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NvY2tldElkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ja2V0LmlkO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNjb25uZWN0IFNvY2tldGlvIGNvbm5lY3Rpb24uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgY3JlYXRlcyBhIG51bGwgY29ubmVjdG9yLlxuICovXG52YXIgTnVsbENvbm5lY3RvciA9IGZ1bmN0aW9uIChfQ29ubmVjdG9yKSB7XG4gIGluaGVyaXRzKE51bGxDb25uZWN0b3IsIF9Db25uZWN0b3IpO1xuXG4gIGZ1bmN0aW9uIE51bGxDb25uZWN0b3IoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVsbENvbm5lY3Rvcik7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgb2YgdGhlIHN1YnNjcmliZWQgY2hhbm5lbCBuYW1lcy5cbiAgICAgKi9cbiAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChOdWxsQ29ubmVjdG9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVsbENvbm5lY3RvcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgX3RoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGZyZXNoIGNvbm5lY3Rpb24uXG4gICAqL1xuXG5cbiAgY3JlYXRlQ2xhc3MoTnVsbENvbm5lY3RvciwgW3tcbiAgICBrZXk6ICdjb25uZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHt9XG4gICAgLy9cblxuICAgIC8qKlxuICAgICAqIExpc3RlbiBmb3IgYW4gZXZlbnQgb24gYSBjaGFubmVsIGluc3RhbmNlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdsaXN0ZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxDaGFubmVsKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnY2hhbm5lbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBOdWxsQ2hhbm5lbCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBwcml2YXRlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncHJpdmF0ZUNoYW5uZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxQcml2YXRlQ2hhbm5lbCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBwcmVzZW5jZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3ByZXNlbmNlQ2hhbm5lbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZXNlbmNlQ2hhbm5lbChuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxQcmVzZW5jZUNoYW5uZWwoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwsIGFzIHdlbGwgYXMgaXRzIHByaXZhdGUgYW5kIHByZXNlbmNlIHZhcmlhbnRzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdsZWF2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHt9XG4gICAgLy9cblxuICAgIC8qKlxuICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdsZWF2ZUNoYW5uZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZUNoYW5uZWwobmFtZSkge31cbiAgICAvL1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzb2NrZXQgSUQgZm9yIHRoZSBjb25uZWN0aW9uLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzb2NrZXRJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgcmV0dXJuICdmYWtlLXNvY2tldC1pZCc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc2Nvbm5lY3QgdGhlIGNvbm5lY3Rpb24uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgLy9cbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE51bGxDb25uZWN0b3I7XG59KENvbm5lY3Rvcik7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyB0aGUgcHJpbWFyeSBBUEkgZm9yIGludGVyYWN0aW5nIHdpdGggYnJvYWRjYXN0aW5nLlxuICovXG5cbnZhciBFY2hvID0gZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBFY2hvKG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRWNobyk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJJbnRlcmNlcHRvcnMoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGEgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxuICAgICAqL1xuXG5cbiAgICBjcmVhdGVDbGFzcyhFY2hvLCBbe1xuICAgICAgICBrZXk6ICdjaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwoX2NoYW5uZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5jaGFubmVsKF9jaGFubmVsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdwdXNoZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgUHVzaGVyQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAnc29ja2V0LmlvJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IFNvY2tldElvQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAnbnVsbCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyBOdWxsQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc2Nvbm5lY3QgZnJvbSB0aGUgRWNobyBzZXJ2ZXIuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rvci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIHByZXNlbmNlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2pvaW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gam9pbihjaGFubmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IucHJlc2VuY2VDaGFubmVsKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbC5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yLmxlYXZlKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oY2hhbm5lbCwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IubGlzdGVuKGNoYW5uZWwsIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIHByaXZhdGUgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJpdmF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcHJpdmF0ZShjaGFubmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IucHJpdmF0ZUNoYW5uZWwoY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgU29ja2V0IElEIGZvciB0aGUgY29ubmVjdGlvbi5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NvY2tldElkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnNvY2tldElkKCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIDNyZCBwYXJ0eSByZXF1ZXN0IGludGVyY2VwdGlvcnMuIFRoZXNlIGFyZSB1c2VkIHRvIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgICogc2VuZCBhIGNvbm5lY3Rpb25zIHNvY2tldCBpZCB0byBhIExhcmF2ZWwgYXBwIHdpdGggYSBYLVNvY2tldC1JZCBoZWFkZXIuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlckludGVyY2VwdG9ycycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlckludGVyY2VwdG9ycygpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgVnVlID09PSAnZnVuY3Rpb24nICYmIFZ1ZS5odHRwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBheGlvcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBeGlvc1JlcXVlc3RJbnRlcmNlcHRvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBqUXVlcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyalF1ZXJ5QWpheFNldHVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIGEgVnVlIEhUVFAgaW50ZXJjZXB0b3IgdG8gYWRkIHRoZSBYLVNvY2tldC1JRCBoZWFkZXIuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIFZ1ZS5odHRwLmludGVyY2VwdG9ycy5wdXNoKGZ1bmN0aW9uIChyZXF1ZXN0LCBuZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnNvY2tldElkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzLnNldCgnWC1Tb2NrZXQtSUQnLCBfdGhpcy5zb2NrZXRJZCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIGFuIEF4aW9zIEhUVFAgaW50ZXJjZXB0b3IgdG8gYWRkIHRoZSBYLVNvY2tldC1JRCBoZWFkZXIuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlckF4aW9zUmVxdWVzdEludGVyY2VwdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyQXhpb3NSZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLnNvY2tldElkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlcnNbJ1gtU29ja2V0LUlkJ10gPSBfdGhpczIuc29ja2V0SWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciBqUXVlcnkgQWpheFNldHVwIHRvIGFkZCB0aGUgWC1Tb2NrZXQtSUQgaGVhZGVyLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXJqUXVlcnlBamF4U2V0dXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJqUXVlcnlBamF4U2V0dXAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBqUXVlcnkuYWpheCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5hamF4U2V0dXAoe1xuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiBiZWZvcmVTZW5kKHhocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzMy5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtU29ja2V0LUlkJywgX3RoaXMzLnNvY2tldElkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIEVjaG87XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEVjaG87XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2xpbmtpZnktaHRtbCcpLmRlZmF1bHQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBsaW5raWZ5SHRtbDtcblxudmFyIF9zaW1wbGVIdG1sVG9rZW5pemVyID0gcmVxdWlyZSgnLi9zaW1wbGUtaHRtbC10b2tlbml6ZXInKTtcblxudmFyIF9zaW1wbGVIdG1sVG9rZW5pemVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUh0bWxUb2tlbml6ZXIpO1xuXG52YXIgX2xpbmtpZnkgPSByZXF1aXJlKCcuL2xpbmtpZnknKTtcblxudmFyIGxpbmtpZnkgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbGlua2lmeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBvcHRpb25zID0gbGlua2lmeS5vcHRpb25zO1xudmFyIE9wdGlvbnMgPSBvcHRpb25zLk9wdGlvbnM7XG5cblxudmFyIFN0YXJ0VGFnID0gJ1N0YXJ0VGFnJztcbnZhciBFbmRUYWcgPSAnRW5kVGFnJztcbnZhciBDaGFycyA9ICdDaGFycyc7XG52YXIgQ29tbWVudCA9ICdDb21tZW50JztcblxuLyoqXG5cdGB0b2tlbnNgIGFuZCBgdG9rZW5gIGluIHRoaXMgc2VjdGlvbiByZWZlciB0byB0b2tlbnMgZ2VuZXJhdGVkIGJ5IHRoZSBIVE1MXG5cdHBhcnNlci5cbiovXG5mdW5jdGlvbiBsaW5raWZ5SHRtbChzdHIpIHtcblx0dmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG5cdHZhciB0b2tlbnMgPSBfc2ltcGxlSHRtbFRva2VuaXplcjIuZGVmYXVsdC50b2tlbml6ZShzdHIpO1xuXHR2YXIgbGlua2lmaWVkVG9rZW5zID0gW107XG5cdHZhciBsaW5raWZpZWQgPSBbXTtcblx0dmFyIGk7XG5cblx0b3B0cyA9IG5ldyBPcHRpb25zKG9wdHMpO1xuXG5cdC8vIExpbmtpZnkgdGhlIHRva2VucyBnaXZlbiBieSB0aGUgcGFyc2VyXG5cdGZvciAoaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cblx0XHRpZiAodG9rZW4udHlwZSA9PT0gU3RhcnRUYWcpIHtcblx0XHRcdGxpbmtpZmllZFRva2Vucy5wdXNoKHRva2VuKTtcblxuXHRcdFx0Ly8gSWdub3JlIGFsbCB0aGUgY29udGVudHMgb2YgaWdub3JlZCB0YWdzXG5cdFx0XHR2YXIgdGFnTmFtZSA9IHRva2VuLnRhZ05hbWUudG9VcHBlckNhc2UoKTtcblx0XHRcdHZhciBpc0lnbm9yZWQgPSB0YWdOYW1lID09PSAnQScgfHwgb3B0aW9ucy5jb250YWlucyhvcHRzLmlnbm9yZVRhZ3MsIHRhZ05hbWUpO1xuXHRcdFx0aWYgKCFpc0lnbm9yZWQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwcmVza2lwTGVuID0gbGlua2lmaWVkVG9rZW5zLmxlbmd0aDtcblx0XHRcdHNraXBUYWdUb2tlbnModGFnTmFtZSwgdG9rZW5zLCArK2ksIGxpbmtpZmllZFRva2Vucyk7XG5cdFx0XHRpICs9IGxpbmtpZmllZFRva2Vucy5sZW5ndGggLSBwcmVza2lwTGVuIC0gMTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH0gZWxzZSBpZiAodG9rZW4udHlwZSAhPT0gQ2hhcnMpIHtcblx0XHRcdC8vIFNraXAgdGhpcyB0b2tlbiwgaXQncyBub3QgaW1wb3J0YW50XG5cdFx0XHRsaW5raWZpZWRUb2tlbnMucHVzaCh0b2tlbik7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBWYWxpZCB0ZXh0IHRva2VuLCBsaW5raWZ5IGl0IVxuXHRcdHZhciBsaW5raWZlZENoYXJzID0gbGlua2lmeUNoYXJzKHRva2VuLmNoYXJzLCBvcHRzKTtcblx0XHRsaW5raWZpZWRUb2tlbnMucHVzaC5hcHBseShsaW5raWZpZWRUb2tlbnMsIGxpbmtpZmVkQ2hhcnMpO1xuXHR9XG5cblx0Ly8gQ29udmVydCB0aGUgdG9rZW5zIGJhY2sgaW50byBhIHN0cmluZ1xuXHRmb3IgKGkgPSAwOyBpIDwgbGlua2lmaWVkVG9rZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIF90b2tlbiA9IGxpbmtpZmllZFRva2Vuc1tpXTtcblx0XHRzd2l0Y2ggKF90b2tlbi50eXBlKSB7XG5cdFx0XHRjYXNlIFN0YXJ0VGFnOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIGxpbmsgPSAnPCcgKyBfdG9rZW4udGFnTmFtZTtcblx0XHRcdFx0XHRpZiAoX3Rva2VuLmF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0dmFyIGF0dHJzID0gYXR0cnNUb1N0cmluZ3MoX3Rva2VuLmF0dHJpYnV0ZXMpO1xuXHRcdFx0XHRcdFx0bGluayArPSAnICcgKyBhdHRycy5qb2luKCcgJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxpbmsgKz0gJz4nO1xuXHRcdFx0XHRcdGxpbmtpZmllZC5wdXNoKGxpbmspO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRjYXNlIEVuZFRhZzpcblx0XHRcdFx0bGlua2lmaWVkLnB1c2goJzwvJyArIF90b2tlbi50YWdOYW1lICsgJz4nKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIENoYXJzOlxuXHRcdFx0XHRsaW5raWZpZWQucHVzaChlc2NhcGVUZXh0KF90b2tlbi5jaGFycykpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQ29tbWVudDpcblx0XHRcdFx0bGlua2lmaWVkLnB1c2goJzwhLS0nICsgZXNjYXBlVGV4dChfdG9rZW4uY2hhcnMpICsgJy0tPicpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbGlua2lmaWVkLmpvaW4oJycpO1xufVxuXG4vKipcblx0YHRva2Vuc2AgYW5kIGB0b2tlbmAgaW4gdGhpcyBzZWN0aW9uIHJlZmVyZXMgdG8gdG9rZW5zIHJldHVybmVkIGJ5XG5cdGBsaW5raWZ5LnRva2VuaXplYC4gYGxpbmtpZmllZGAgd2lsbCBjb250YWluIEhUTUwgUGFyc2VyLXN0eWxlIHRva2Vuc1xuKi9cbmZ1bmN0aW9uIGxpbmtpZnlDaGFycyhzdHIsIG9wdHMpIHtcblx0dmFyIHRva2VucyA9IGxpbmtpZnkudG9rZW5pemUoc3RyKTtcblx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRva2VuID0gdG9rZW5zW2ldO1xuXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09ICdubCcgJiYgb3B0cy5ubDJicikge1xuXHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHR0eXBlOiBTdGFydFRhZyxcblx0XHRcdFx0dGFnTmFtZTogJ2JyJyxcblx0XHRcdFx0YXR0cmlidXRlczogW10sXG5cdFx0XHRcdHNlbGZDbG9zaW5nOiB0cnVlXG5cdFx0XHR9KTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH0gZWxzZSBpZiAoIXRva2VuLmlzTGluayB8fCAhb3B0cy5jaGVjayh0b2tlbikpIHtcblx0XHRcdHJlc3VsdC5wdXNoKHsgdHlwZTogQ2hhcnMsIGNoYXJzOiB0b2tlbi50b1N0cmluZygpIH0pO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dmFyIF9vcHRzJHJlc29sdmUgPSBvcHRzLnJlc29sdmUodG9rZW4pLFxuXHRcdCAgICBmb3JtYXR0ZWQgPSBfb3B0cyRyZXNvbHZlLmZvcm1hdHRlZCxcblx0XHQgICAgZm9ybWF0dGVkSHJlZiA9IF9vcHRzJHJlc29sdmUuZm9ybWF0dGVkSHJlZixcblx0XHQgICAgdGFnTmFtZSA9IF9vcHRzJHJlc29sdmUudGFnTmFtZSxcblx0XHQgICAgY2xhc3NOYW1lID0gX29wdHMkcmVzb2x2ZS5jbGFzc05hbWUsXG5cdFx0ICAgIHRhcmdldCA9IF9vcHRzJHJlc29sdmUudGFyZ2V0LFxuXHRcdCAgICBhdHRyaWJ1dGVzID0gX29wdHMkcmVzb2x2ZS5hdHRyaWJ1dGVzO1xuXG5cdFx0Ly8gQnVpbGQgdXAgYXR0cmlidXRlc1xuXG5cblx0XHR2YXIgYXR0cmlidXRlQXJyYXkgPSBbWydocmVmJywgZm9ybWF0dGVkSHJlZl1dO1xuXG5cdFx0aWYgKGNsYXNzTmFtZSkge1xuXHRcdFx0YXR0cmlidXRlQXJyYXkucHVzaChbJ2NsYXNzJywgY2xhc3NOYW1lXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhcmdldCkge1xuXHRcdFx0YXR0cmlidXRlQXJyYXkucHVzaChbJ3RhcmdldCcsIHRhcmdldF0pO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGF0dHIgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0YXR0cmlidXRlQXJyYXkucHVzaChbYXR0ciwgYXR0cmlidXRlc1thdHRyXV0pO1xuXHRcdH1cblxuXHRcdC8vIEFkZCB0aGUgcmVxdWlyZWQgdG9rZW5zXG5cdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0dHlwZTogU3RhcnRUYWcsXG5cdFx0XHR0YWdOYW1lOiB0YWdOYW1lLFxuXHRcdFx0YXR0cmlidXRlczogYXR0cmlidXRlQXJyYXksXG5cdFx0XHRzZWxmQ2xvc2luZzogZmFsc2Vcblx0XHR9KTtcblx0XHRyZXN1bHQucHVzaCh7IHR5cGU6IENoYXJzLCBjaGFyczogZm9ybWF0dGVkIH0pO1xuXHRcdHJlc3VsdC5wdXNoKHsgdHlwZTogRW5kVGFnLCB0YWdOYW1lOiB0YWdOYW1lIH0pO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG5cdFJldHVybnMgYSBsaXN0IG9mIHRva2VucyBza2lwcGVkIHVudGlsIHRoZSBjbG9zaW5nIHRhZyBvZiB0YWdOYW1lLlxuXG5cdCogYHRhZ05hbWVgIGlzIHRoZSBjbG9zaW5nIHRhZyB3aGljaCB3aWxsIHByb21wdCB1cyB0byBzdG9wIHNraXBwaW5nXG5cdCogYHRva2Vuc2AgaXMgdGhlIGFycmF5IG9mIHRva2VucyBnZW5lcmF0ZWQgYnkgSFRNTDVUb2tlbml6ZXIgd2hpY2hcblx0KiBgaWAgaXMgdGhlIGluZGV4IGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBvcGVuaW5nIHRhZyB0byBza2lwXG5cdCogYHNraXBwZWRUb2tlbnNgIGlzIGFuIGFycmF5IHdoaWNoIHNraXBwZWQgdG9rZW5zIGFyZSBiZWluZyBwdXNoZWQgaW50b1xuXG5cdENhdmVhdHNcblxuXHQqIEFzc3VtZXMgdGhhdCBpIGlzIHRoZSBmaXJzdCB0b2tlbiBhZnRlciB0aGUgZ2l2ZW4gb3BlbmluZyB0YWdOYW1lXG5cdCogVGhlIGNsb3NpbmcgdGFnIHdpbGwgYmUgc2tpcHBlZCwgYnV0IG5vdGhpbmcgYWZ0ZXIgaXRcblx0KiBXaWxsIHRyYWNrIHdoZXRoZXIgdGhlcmUgaXMgYSBuZXN0ZWQgdGFnIG9mIHRoZSBzYW1lIHR5cGVcbiovXG5mdW5jdGlvbiBza2lwVGFnVG9rZW5zKHRhZ05hbWUsIHRva2VucywgaSwgc2tpcHBlZFRva2Vucykge1xuXG5cdC8vIG51bWJlciBvZiB0b2tlbnMgb2YgdGhpcyB0eXBlIG9uIHRoZSBbZmljdGlvbmFsXSBzdGFja1xuXHR2YXIgc3RhY2tDb3VudCA9IDE7XG5cblx0d2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHN0YWNrQ291bnQgPiAwKSB7XG5cdFx0dmFyIHRva2VuID0gdG9rZW5zW2ldO1xuXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IFN0YXJ0VGFnICYmIHRva2VuLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gdGFnTmFtZSkge1xuXHRcdFx0Ly8gTmVzdGVkIHRhZyBvZiB0aGUgc2FtZSB0eXBlLCBcImFkZCB0byBzdGFja1wiXG5cdFx0XHRzdGFja0NvdW50Kys7XG5cdFx0fSBlbHNlIGlmICh0b2tlbi50eXBlID09PSBFbmRUYWcgJiYgdG9rZW4udGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSB0YWdOYW1lKSB7XG5cdFx0XHQvLyBDbG9zaW5nIHRhZ1xuXHRcdFx0c3RhY2tDb3VudC0tO1xuXHRcdH1cblxuXHRcdHNraXBwZWRUb2tlbnMucHVzaCh0b2tlbik7XG5cdFx0aSsrO1xuXHR9XG5cblx0Ly8gTm90ZSB0aGF0IGlmIHN0YWNrQ291bnQgPiAwIGhlcmUsIHRoZSBIVE1MIGlzIHByb2JhYmx5IGludmFsaWRcblx0cmV0dXJuIHNraXBwZWRUb2tlbnM7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZVRleHQodGV4dCkge1xuXHQvLyBOb3QgcmVxdWlyZWQsIEhUTUwgdG9rZW5pemVyIGVuc3VyZXMgdGhpcyBvY2N1cnMgcHJvcGVybHlcblx0cmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUF0dHIoYXR0cikge1xuXHRyZXR1cm4gYXR0ci5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIGF0dHJzVG9TdHJpbmdzKGF0dHJzKSB7XG5cdHZhciBhdHRyU3RycyA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIF9hdHRycyRpID0gYXR0cnNbaV0sXG5cdFx0ICAgIG5hbWUgPSBfYXR0cnMkaVswXSxcblx0XHQgICAgdmFsdWUgPSBfYXR0cnMkaVsxXTtcblxuXHRcdGF0dHJTdHJzLnB1c2gobmFtZSArICc9XCInICsgZXNjYXBlQXR0cih2YWx1ZSkgKyAnXCInKTtcblx0fVxuXHRyZXR1cm4gYXR0clN0cnM7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy50b2tlbml6ZSA9IGV4cG9ydHMudGVzdCA9IGV4cG9ydHMuc2Nhbm5lciA9IGV4cG9ydHMucGFyc2VyID0gZXhwb3J0cy5vcHRpb25zID0gZXhwb3J0cy5pbmhlcml0cyA9IGV4cG9ydHMuZmluZCA9IHVuZGVmaW5lZDtcblxudmFyIF9jbGFzcyA9IHJlcXVpcmUoJy4vbGlua2lmeS91dGlscy9jbGFzcycpO1xuXG52YXIgX29wdGlvbnMgPSByZXF1aXJlKCcuL2xpbmtpZnkvdXRpbHMvb3B0aW9ucycpO1xuXG52YXIgb3B0aW9ucyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9vcHRpb25zKTtcblxudmFyIF9zY2FubmVyID0gcmVxdWlyZSgnLi9saW5raWZ5L2NvcmUvc2Nhbm5lcicpO1xuXG52YXIgc2Nhbm5lciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9zY2FubmVyKTtcblxudmFyIF9wYXJzZXIgPSByZXF1aXJlKCcuL2xpbmtpZnkvY29yZS9wYXJzZXInKTtcblxudmFyIHBhcnNlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wYXJzZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5pZiAoIUFycmF5LmlzQXJyYXkpIHtcblx0QXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uIChhcmcpIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cdH07XG59XG5cbi8qKlxuXHRDb252ZXJ0cyBhIHN0cmluZyBpbnRvIHRva2VucyB0aGF0IHJlcHJlc2VudCBsaW5rYWJsZSBhbmQgbm9uLWxpbmthYmxlIGJpdHNcblx0QG1ldGhvZCB0b2tlbml6ZVxuXHRAcGFyYW0ge1N0cmluZ30gc3RyXG5cdEByZXR1cm4ge0FycmF5fSB0b2tlbnNcbiovXG52YXIgdG9rZW5pemUgPSBmdW5jdGlvbiB0b2tlbml6ZShzdHIpIHtcblx0cmV0dXJuIHBhcnNlci5ydW4oc2Nhbm5lci5ydW4oc3RyKSk7XG59O1xuXG4vKipcblx0UmV0dXJucyBhIGxpc3Qgb2YgbGlua2FibGUgaXRlbXMgaW4gdGhlIGdpdmVuIHN0cmluZy5cbiovXG52YXIgZmluZCA9IGZ1bmN0aW9uIGZpbmQoc3RyKSB7XG5cdHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuXG5cdHZhciB0b2tlbnMgPSB0b2tlbml6ZShzdHIpO1xuXHR2YXIgZmlsdGVyZWQgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcblx0XHRpZiAodG9rZW4uaXNMaW5rICYmICghdHlwZSB8fCB0b2tlbi50eXBlID09PSB0eXBlKSkge1xuXHRcdFx0ZmlsdGVyZWQucHVzaCh0b2tlbi50b09iamVjdCgpKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmlsdGVyZWQ7XG59O1xuXG4vKipcblx0SXMgdGhlIGdpdmVuIHN0cmluZyB2YWxpZCBsaW5rYWJsZSB0ZXh0IG9mIHNvbWUgc29ydFxuXHROb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCB0cmltIHRoZSB0ZXh0IGZvciB5b3UuXG5cblx0T3B0aW9uYWxseSBwYXNzIGluIGEgc2Vjb25kIGB0eXBlYCBwYXJhbSwgd2hpY2ggaXMgdGhlIHR5cGUgb2YgbGluayB0byB0ZXN0XG5cdGZvci5cblxuXHRGb3IgZXhhbXBsZSxcblxuXHRcdHRlc3Qoc3RyLCAnZW1haWwnKTtcblxuXHRXaWxsIHJldHVybiBgdHJ1ZWAgaWYgc3RyIGlzIGEgdmFsaWQgZW1haWwuXG4qL1xudmFyIHRlc3QgPSBmdW5jdGlvbiB0ZXN0KHN0cikge1xuXHR2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcblxuXHR2YXIgdG9rZW5zID0gdG9rZW5pemUoc3RyKTtcblx0cmV0dXJuIHRva2Vucy5sZW5ndGggPT09IDEgJiYgdG9rZW5zWzBdLmlzTGluayAmJiAoIXR5cGUgfHwgdG9rZW5zWzBdLnR5cGUgPT09IHR5cGUpO1xufTtcblxuLy8gU2Nhbm5lciBhbmQgcGFyc2VyIHByb3ZpZGUgc3RhdGVzIGFuZCB0b2tlbnMgZm9yIHRoZSBsZXhpY29ncmFwaGljIHN0YWdlXG4vLyAod2lsbCBiZSB1c2VkIHRvIGFkZCBhZGRpdGlvbmFsIGxpbmsgdHlwZXMpXG5leHBvcnRzLmZpbmQgPSBmaW5kO1xuZXhwb3J0cy5pbmhlcml0cyA9IF9jbGFzcy5pbmhlcml0cztcbmV4cG9ydHMub3B0aW9ucyA9IG9wdGlvbnM7XG5leHBvcnRzLnBhcnNlciA9IHBhcnNlcjtcbmV4cG9ydHMuc2Nhbm5lciA9IHNjYW5uZXI7XG5leHBvcnRzLnRlc3QgPSB0ZXN0O1xuZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RhcnQgPSBleHBvcnRzLnJ1biA9IGV4cG9ydHMuVE9LRU5TID0gZXhwb3J0cy5TdGF0ZSA9IHVuZGVmaW5lZDtcblxudmFyIF9zdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUnKTtcblxudmFyIF9tdWx0aSA9IHJlcXVpcmUoJy4vdG9rZW5zL211bHRpJyk7XG5cbnZhciBNVUxUSV9UT0tFTlMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbXVsdGkpO1xuXG52YXIgX3RleHQgPSByZXF1aXJlKCcuL3Rva2Vucy90ZXh0Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8qKlxuXHROb3QgZXhhY3RseSBwYXJzZXIsIG1vcmUgbGlrZSB0aGUgc2Vjb25kLXN0YWdlIHNjYW5uZXIgKGFsdGhvdWdoIHdlIGNhblxuXHR0aGVvcmV0aWNhbGx5IGhvdHN3YXAgdGhlIGNvZGUgaGVyZSB3aXRoIGEgcmVhbCBwYXJzZXIgaW4gdGhlIGZ1dHVyZS4uLiBidXRcblx0Zm9yIGEgbGl0dGxlIFVSTC1maW5kaW5nIHV0aWxpdHkgYWJzdHJhY3Qgc3ludGF4IHRyZWVzIG1heSBiZSBhIGxpdHRsZVxuXHRvdmVya2lsbCkuXG5cblx0VVJMIGZvcm1hdDogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VUklfc2NoZW1lXG5cdEVtYWlsIGZvcm1hdDogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9FbWFpbF9hZGRyZXNzIChsaW5rcyB0byBSRkMgaW5cblx0cmVmZXJlbmNlKVxuXG5cdEBtb2R1bGUgbGlua2lmeVxuXHRAc3VibW9kdWxlIHBhcnNlclxuXHRAbWFpbiBwYXJzZXJcbiovXG5cbnZhciBtYWtlU3RhdGUgPSBmdW5jdGlvbiBtYWtlU3RhdGUodG9rZW5DbGFzcykge1xuXHRyZXR1cm4gbmV3IF9zdGF0ZS5Ub2tlblN0YXRlKHRva2VuQ2xhc3MpO1xufTtcblxuLy8gVGhlIHVuaXZlcnNhbCBzdGFydGluZyBzdGF0ZS5cbnZhciBTX1NUQVJUID0gbWFrZVN0YXRlKCk7XG5cbi8vIEludGVybWVkaWF0ZSBzdGF0ZXMgZm9yIFVSTHMuIE5vdGUgdGhhdCBkb21haW5zIHRoYXQgYmVnaW4gd2l0aCBhIHByb3RvY29sXG4vLyBhcmUgdHJlYXRlZCBzbGlnaGx5IGRpZmZlcmVudGx5IGZyb20gdGhvc2UgdGhhdCBkb24ndC5cbnZhciBTX1BST1RPQ09MID0gbWFrZVN0YXRlKCk7IC8vIGUuZy4sICdodHRwOidcbnZhciBTX01BSUxUTyA9IG1ha2VTdGF0ZSgpOyAvLyAnbWFpbHRvOidcbnZhciBTX1BST1RPQ09MX1NMQVNIID0gbWFrZVN0YXRlKCk7IC8vIGUuZy4sICcvJywgJ2h0dHA6LycnXG52YXIgU19QUk9UT0NPTF9TTEFTSF9TTEFTSCA9IG1ha2VTdGF0ZSgpOyAvLyBlLmcuLCAnLy8nLCAnaHR0cDovLydcbnZhciBTX0RPTUFJTiA9IG1ha2VTdGF0ZSgpOyAvLyBwYXJzZWQgc3RyaW5nIGVuZHMgd2l0aCBhIHBvdGVudGlhbCBkb21haW4gbmFtZSAoQSlcbnZhciBTX0RPTUFJTl9ET1QgPSBtYWtlU3RhdGUoKTsgLy8gKEEpIGRvbWFpbiBmb2xsb3dlZCBieSBET1RcbnZhciBTX1RMRCA9IG1ha2VTdGF0ZShfbXVsdGkuVVJMKTsgLy8gKEEpIFNpbXBsZXN0IHBvc3NpYmxlIFVSTCB3aXRoIG5vIHF1ZXJ5IHN0cmluZ1xudmFyIFNfVExEX0NPTE9OID0gbWFrZVN0YXRlKCk7IC8vIChBKSBVUkwgZm9sbG93ZWQgYnkgY29sb24gKHBvdGVudGlhbCBwb3J0IG51bWJlciBoZXJlKVxudmFyIFNfVExEX1BPUlQgPSBtYWtlU3RhdGUoX211bHRpLlVSTCk7IC8vIFRMRCBmb2xsb3dlZCBieSBhIHBvcnQgbnVtYmVyXG52YXIgU19VUkwgPSBtYWtlU3RhdGUoX211bHRpLlVSTCk7IC8vIExvbmcgVVJMIHdpdGggb3B0aW9uYWwgcG9ydCBhbmQgbWF5YmUgcXVlcnkgc3RyaW5nXG52YXIgU19VUkxfTk9OX0FDQ0VQVElORyA9IG1ha2VTdGF0ZSgpOyAvLyBVUkwgZm9sbG93ZWQgYnkgc29tZSBzeW1ib2xzICh3aWxsIG5vdCBiZSBwYXJ0IG9mIHRoZSBmaW5hbCBVUkwpXG52YXIgU19VUkxfT1BFTkJSQUNFID0gbWFrZVN0YXRlKCk7IC8vIFVSTCBmb2xsb3dlZCBieSB7XG52YXIgU19VUkxfT1BFTkJSQUNLRVQgPSBtYWtlU3RhdGUoKTsgLy8gVVJMIGZvbGxvd2VkIGJ5IFtcbnZhciBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUID0gbWFrZVN0YXRlKCk7IC8vIFVSTCBmb2xsb3dlZCBieSA8XG52YXIgU19VUkxfT1BFTlBBUkVOID0gbWFrZVN0YXRlKCk7IC8vIFVSTCBmb2xsb3dlZCBieSAoXG52YXIgU19VUkxfT1BFTkJSQUNFX1EgPSBtYWtlU3RhdGUoX211bHRpLlVSTCk7IC8vIFVSTCBmb2xsb3dlZCBieSB7IGFuZCBzb21lIHN5bWJvbHMgdGhhdCB0aGUgVVJMIGNhbiBlbmQgaXRcbnZhciBTX1VSTF9PUEVOQlJBQ0tFVF9RID0gbWFrZVN0YXRlKF9tdWx0aS5VUkwpOyAvLyBVUkwgZm9sbG93ZWQgYnkgWyBhbmQgc29tZSBzeW1ib2xzIHRoYXQgdGhlIFVSTCBjYW4gZW5kIGl0XG52YXIgU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9RID0gbWFrZVN0YXRlKF9tdWx0aS5VUkwpOyAvLyBVUkwgZm9sbG93ZWQgYnkgPCBhbmQgc29tZSBzeW1ib2xzIHRoYXQgdGhlIFVSTCBjYW4gZW5kIGl0XG52YXIgU19VUkxfT1BFTlBBUkVOX1EgPSBtYWtlU3RhdGUoX211bHRpLlVSTCk7IC8vIFVSTCBmb2xsb3dlZCBieSAoIGFuZCBzb21lIHN5bWJvbHMgdGhhdCB0aGUgVVJMIGNhbiBlbmQgaXRcbnZhciBTX1VSTF9PUEVOQlJBQ0VfU1lNUyA9IG1ha2VTdGF0ZSgpOyAvLyBTX1VSTF9PUEVOQlJBQ0VfUSBmb2xsb3dlZCBieSBzb21lIHN5bWJvbHMgaXQgY2Fubm90IGVuZCBpdFxudmFyIFNfVVJMX09QRU5CUkFDS0VUX1NZTVMgPSBtYWtlU3RhdGUoKTsgLy8gU19VUkxfT1BFTkJSQUNLRVRfUSBmb2xsb3dlZCBieSBzb21lIHN5bWJvbHMgaXQgY2Fubm90IGVuZCBpdFxudmFyIFNfVVJMX09QRU5BTkdMRUJSQUNLRVRfU1lNUyA9IG1ha2VTdGF0ZSgpOyAvLyBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1EgZm9sbG93ZWQgYnkgc29tZSBzeW1ib2xzIGl0IGNhbm5vdCBlbmQgaXRcbnZhciBTX1VSTF9PUEVOUEFSRU5fU1lNUyA9IG1ha2VTdGF0ZSgpOyAvLyBTX1VSTF9PUEVOUEFSRU5fUSBmb2xsb3dlZCBieSBzb21lIHN5bWJvbHMgaXQgY2Fubm90IGVuZCBpdFxudmFyIFNfRU1BSUxfRE9NQUlOID0gbWFrZVN0YXRlKCk7IC8vIHBhcnNlZCBzdHJpbmcgc3RhcnRzIHdpdGggbG9jYWwgZW1haWwgaW5mbyArIEAgd2l0aCBhIHBvdGVudGlhbCBkb21haW4gbmFtZSAoQylcbnZhciBTX0VNQUlMX0RPTUFJTl9ET1QgPSBtYWtlU3RhdGUoKTsgLy8gKEMpIGRvbWFpbiBmb2xsb3dlZCBieSBET1RcbnZhciBTX0VNQUlMID0gbWFrZVN0YXRlKF9tdWx0aS5FTUFJTCk7IC8vIChDKSBQb3NzaWJsZSBlbWFpbCBhZGRyZXNzIChjb3VsZCBoYXZlIG1vcmUgdGxkcylcbnZhciBTX0VNQUlMX0NPTE9OID0gbWFrZVN0YXRlKCk7IC8vIChDKSBVUkwgZm9sbG93ZWQgYnkgY29sb24gKHBvdGVudGlhbCBwb3J0IG51bWJlciBoZXJlKVxudmFyIFNfRU1BSUxfUE9SVCA9IG1ha2VTdGF0ZShfbXVsdGkuRU1BSUwpOyAvLyAoQykgRW1haWwgYWRkcmVzcyB3aXRoIGEgcG9ydFxudmFyIFNfTUFJTFRPX0VNQUlMID0gbWFrZVN0YXRlKF9tdWx0aS5NQUlMVE9FTUFJTCk7IC8vIEVtYWlsIHRoYXQgYmVnaW5zIHdpdGggdGhlIG1haWx0byBwcmVmaXggKEQpXG52YXIgU19NQUlMVE9fRU1BSUxfTk9OX0FDQ0VQVElORyA9IG1ha2VTdGF0ZSgpOyAvLyAoRCkgRm9sbG93ZWQgYnkgc29tZSBub24tcXVlcnkgc3RyaW5nIGNoYXJzXG52YXIgU19MT0NBTFBBUlQgPSBtYWtlU3RhdGUoKTsgLy8gTG9jYWwgcGFydCBvZiB0aGUgZW1haWwgYWRkcmVzc1xudmFyIFNfTE9DQUxQQVJUX0FUID0gbWFrZVN0YXRlKCk7IC8vIExvY2FsIHBhcnQgb2YgdGhlIGVtYWlsIGFkZHJlc3MgcGx1cyBAXG52YXIgU19MT0NBTFBBUlRfRE9UID0gbWFrZVN0YXRlKCk7IC8vIExvY2FsIHBhcnQgb2YgdGhlIGVtYWlsIGFkZHJlc3MgcGx1cyAnLicgKGxvY2FscGFydCBjYW5ub3QgZW5kIGluIC4pXG52YXIgU19OTCA9IG1ha2VTdGF0ZShfbXVsdGkuTkwpOyAvLyBzaW5nbGUgbmV3IGxpbmVcblxuLy8gTWFrZSBwYXRoIGZyb20gc3RhcnQgdG8gcHJvdG9jb2wgKHdpdGggJy8vJylcblNfU1RBUlQub24oX3RleHQuTkwsIFNfTkwpLm9uKF90ZXh0LlBST1RPQ09MLCBTX1BST1RPQ09MKS5vbihfdGV4dC5NQUlMVE8sIFNfTUFJTFRPKS5vbihfdGV4dC5TTEFTSCwgU19QUk9UT0NPTF9TTEFTSCk7XG5cblNfUFJPVE9DT0wub24oX3RleHQuU0xBU0gsIFNfUFJPVE9DT0xfU0xBU0gpO1xuU19QUk9UT0NPTF9TTEFTSC5vbihfdGV4dC5TTEFTSCwgU19QUk9UT0NPTF9TTEFTSF9TTEFTSCk7XG5cbi8vIFRoZSB2ZXJ5IGZpcnN0IHBvdGVudGlhbCBkb21haW4gbmFtZVxuU19TVEFSVC5vbihfdGV4dC5UTEQsIFNfRE9NQUlOKS5vbihfdGV4dC5ET01BSU4sIFNfRE9NQUlOKS5vbihfdGV4dC5MT0NBTEhPU1QsIFNfVExEKS5vbihfdGV4dC5OVU0sIFNfRE9NQUlOKTtcblxuLy8gRm9yY2UgVVJMIGZvciBwcm90b2NvbCBmb2xsb3dlZCBieSBhbnl0aGluZyBzYW5lXG5TX1BST1RPQ09MX1NMQVNIX1NMQVNILm9uKF90ZXh0LlRMRCwgU19VUkwpLm9uKF90ZXh0LkRPTUFJTiwgU19VUkwpLm9uKF90ZXh0Lk5VTSwgU19VUkwpLm9uKF90ZXh0LkxPQ0FMSE9TVCwgU19VUkwpO1xuXG4vLyBBY2NvdW50IGZvciBkb3RzIGFuZCBoeXBoZW5zXG4vLyBoeXBoZW5zIGFyZSB1c3VhbGx5IHBhcnRzIG9mIGRvbWFpbiBuYW1lc1xuU19ET01BSU4ub24oX3RleHQuRE9ULCBTX0RPTUFJTl9ET1QpO1xuU19FTUFJTF9ET01BSU4ub24oX3RleHQuRE9ULCBTX0VNQUlMX0RPTUFJTl9ET1QpO1xuXG4vLyBIeXBoZW4gY2FuIGp1bXAgYmFjayB0byBhIGRvbWFpbiBuYW1lXG5cbi8vIEFmdGVyIHRoZSBmaXJzdCBkb21haW4gYW5kIGEgZG90LCB3ZSBjYW4gZmluZCBlaXRoZXIgYSBVUkwgb3IgYW5vdGhlciBkb21haW5cblNfRE9NQUlOX0RPVC5vbihfdGV4dC5UTEQsIFNfVExEKS5vbihfdGV4dC5ET01BSU4sIFNfRE9NQUlOKS5vbihfdGV4dC5OVU0sIFNfRE9NQUlOKS5vbihfdGV4dC5MT0NBTEhPU1QsIFNfRE9NQUlOKTtcblxuU19FTUFJTF9ET01BSU5fRE9ULm9uKF90ZXh0LlRMRCwgU19FTUFJTCkub24oX3RleHQuRE9NQUlOLCBTX0VNQUlMX0RPTUFJTikub24oX3RleHQuTlVNLCBTX0VNQUlMX0RPTUFJTikub24oX3RleHQuTE9DQUxIT1NULCBTX0VNQUlMX0RPTUFJTik7XG5cbi8vIFNfVExEIGFjY2VwdHMhIEJ1dCB0aGUgVVJMIGNvdWxkIGJlIGxvbmdlciwgdHJ5IHRvIGZpbmQgYSBtYXRjaCBncmVlZGlseVxuLy8gVGhlIGBydW5gIGZ1bmN0aW9uIHNob3VsZCBiZSBhYmxlIHRvIFwicm9sbGJhY2tcIiB0byB0aGUgYWNjZXB0aW5nIHN0YXRlXG5TX1RMRC5vbihfdGV4dC5ET1QsIFNfRE9NQUlOX0RPVCk7XG5TX0VNQUlMLm9uKF90ZXh0LkRPVCwgU19FTUFJTF9ET01BSU5fRE9UKTtcblxuLy8gQmVjb21lIHJlYWwgVVJMcyBhZnRlciBgU0xBU0hgIG9yIGBDT0xPTiBOVU0gU0xBU0hgXG4vLyBIZXJlIFBTUyBhbmQgbm9uLVBTUyBjb252ZXJnZVxuU19UTEQub24oX3RleHQuQ09MT04sIFNfVExEX0NPTE9OKS5vbihfdGV4dC5TTEFTSCwgU19VUkwpO1xuU19UTERfQ09MT04ub24oX3RleHQuTlVNLCBTX1RMRF9QT1JUKTtcblNfVExEX1BPUlQub24oX3RleHQuU0xBU0gsIFNfVVJMKTtcblNfRU1BSUwub24oX3RleHQuQ09MT04sIFNfRU1BSUxfQ09MT04pO1xuU19FTUFJTF9DT0xPTi5vbihfdGV4dC5OVU0sIFNfRU1BSUxfUE9SVCk7XG5cbi8vIFR5cGVzIG9mIGNoYXJhY3RlcnMgdGhlIFVSTCBjYW4gZGVmaW5pdGVseSBlbmQgaW5cbnZhciBxc0FjY2VwdGluZyA9IFtfdGV4dC5ET01BSU4sIF90ZXh0LkFULCBfdGV4dC5MT0NBTEhPU1QsIF90ZXh0Lk5VTSwgX3RleHQuUExVUywgX3RleHQuUE9VTkQsIF90ZXh0LlBST1RPQ09MLCBfdGV4dC5TTEFTSCwgX3RleHQuVExELCBfdGV4dC5VTkRFUlNDT1JFLCBfdGV4dC5TWU0sIF90ZXh0LkFNUEVSU0FORF07XG5cbi8vIFR5cGVzIG9mIHRva2VucyB0aGF0IGNhbiBmb2xsb3cgYSBVUkwgYW5kIGJlIHBhcnQgb2YgdGhlIHF1ZXJ5IHN0cmluZ1xuLy8gYnV0IGNhbm5vdCBiZSB0aGUgdmVyeSBsYXN0IGNoYXJhY3RlcnNcbi8vIENoYXJhY3RlcnMgdGhhdCBjYW5ub3QgYXBwZWFyIGluIHRoZSBVUkwgYXQgYWxsIHNob3VsZCBiZSBleGNsdWRlZFxudmFyIHFzTm9uQWNjZXB0aW5nID0gW190ZXh0LkNPTE9OLCBfdGV4dC5ET1QsIF90ZXh0LlFVRVJZLCBfdGV4dC5QVU5DVFVBVElPTiwgX3RleHQuQ0xPU0VCUkFDRSwgX3RleHQuQ0xPU0VCUkFDS0VULCBfdGV4dC5DTE9TRUFOR0xFQlJBQ0tFVCwgX3RleHQuQ0xPU0VQQVJFTiwgX3RleHQuT1BFTkJSQUNFLCBfdGV4dC5PUEVOQlJBQ0tFVCwgX3RleHQuT1BFTkFOR0xFQlJBQ0tFVCwgX3RleHQuT1BFTlBBUkVOXTtcblxuLy8gVGhlc2Ugc3RhdGVzIGFyZSByZXNwb25zaWJsZSBwcmltYXJpbHkgZm9yIGRldGVybWluaW5nIHdoZXRoZXIgb3Igbm90IHRvXG4vLyBpbmNsdWRlIHRoZSBmaW5hbCByb3VuZCBicmFja2V0LlxuXG4vLyBVUkwsIGZvbGxvd2VkIGJ5IGFuIG9wZW5pbmcgYnJhY2tldFxuU19VUkwub24oX3RleHQuT1BFTkJSQUNFLCBTX1VSTF9PUEVOQlJBQ0UpLm9uKF90ZXh0Lk9QRU5CUkFDS0VULCBTX1VSTF9PUEVOQlJBQ0tFVCkub24oX3RleHQuT1BFTkFOR0xFQlJBQ0tFVCwgU19VUkxfT1BFTkFOR0xFQlJBQ0tFVCkub24oX3RleHQuT1BFTlBBUkVOLCBTX1VSTF9PUEVOUEFSRU4pO1xuXG4vLyBVUkwgd2l0aCBleHRyYSBzeW1ib2xzIGF0IHRoZSBlbmQsIGZvbGxvd2VkIGJ5IGFuIG9wZW5pbmcgYnJhY2tldFxuU19VUkxfTk9OX0FDQ0VQVElORy5vbihfdGV4dC5PUEVOQlJBQ0UsIFNfVVJMX09QRU5CUkFDRSkub24oX3RleHQuT1BFTkJSQUNLRVQsIFNfVVJMX09QRU5CUkFDS0VUKS5vbihfdGV4dC5PUEVOQU5HTEVCUkFDS0VULCBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUKS5vbihfdGV4dC5PUEVOUEFSRU4sIFNfVVJMX09QRU5QQVJFTik7XG5cbi8vIENsb3NpbmcgYnJhY2tldCBjb21wb25lbnQuIFRoaXMgY2hhcmFjdGVyIFdJTEwgYmUgaW5jbHVkZWQgaW4gdGhlIFVSTFxuU19VUkxfT1BFTkJSQUNFLm9uKF90ZXh0LkNMT1NFQlJBQ0UsIFNfVVJMKTtcblNfVVJMX09QRU5CUkFDS0VULm9uKF90ZXh0LkNMT1NFQlJBQ0tFVCwgU19VUkwpO1xuU19VUkxfT1BFTkFOR0xFQlJBQ0tFVC5vbihfdGV4dC5DTE9TRUFOR0xFQlJBQ0tFVCwgU19VUkwpO1xuU19VUkxfT1BFTlBBUkVOLm9uKF90ZXh0LkNMT1NFUEFSRU4sIFNfVVJMKTtcblNfVVJMX09QRU5CUkFDRV9RLm9uKF90ZXh0LkNMT1NFQlJBQ0UsIFNfVVJMKTtcblNfVVJMX09QRU5CUkFDS0VUX1Eub24oX3RleHQuQ0xPU0VCUkFDS0VULCBTX1VSTCk7XG5TX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1Eub24oX3RleHQuQ0xPU0VBTkdMRUJSQUNLRVQsIFNfVVJMKTtcblNfVVJMX09QRU5QQVJFTl9RLm9uKF90ZXh0LkNMT1NFUEFSRU4sIFNfVVJMKTtcblNfVVJMX09QRU5CUkFDRV9TWU1TLm9uKF90ZXh0LkNMT1NFQlJBQ0UsIFNfVVJMKTtcblNfVVJMX09QRU5CUkFDS0VUX1NZTVMub24oX3RleHQuQ0xPU0VCUkFDS0VULCBTX1VSTCk7XG5TX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1NZTVMub24oX3RleHQuQ0xPU0VBTkdMRUJSQUNLRVQsIFNfVVJMKTtcblNfVVJMX09QRU5QQVJFTl9TWU1TLm9uKF90ZXh0LkNMT1NFUEFSRU4sIFNfVVJMKTtcblxuLy8gVVJMIHRoYXQgYmVpbmdzIHdpdGggYW4gb3BlbmluZyBicmFja2V0LCBmb2xsb3dlZCBieSBhIHN5bWJvbHMuXG4vLyBOb3RlIHRoYXQgdGhlIGZpbmFsIHN0YXRlIGNhbiBzdGlsbCBiZSBgU19VUkxfT1BFTkJSQUNFX1FgIChpZiB0aGUgVVJMIG9ubHlcbi8vIGhhcyBhIHNpbmdsZSBvcGVuaW5nIGJyYWNrZXQgZm9yIHNvbWUgcmVhc29uKS5cblNfVVJMX09QRU5CUkFDRS5vbihxc0FjY2VwdGluZywgU19VUkxfT1BFTkJSQUNFX1EpO1xuU19VUkxfT1BFTkJSQUNLRVQub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDS0VUX1EpO1xuU19VUkxfT1BFTkFOR0xFQlJBQ0tFVC5vbihxc0FjY2VwdGluZywgU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9RKTtcblNfVVJMX09QRU5QQVJFTi5vbihxc0FjY2VwdGluZywgU19VUkxfT1BFTlBBUkVOX1EpO1xuU19VUkxfT1BFTkJSQUNFLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOQlJBQ0VfU1lNUyk7XG5TX1VSTF9PUEVOQlJBQ0tFVC5vbihxc05vbkFjY2VwdGluZywgU19VUkxfT1BFTkJSQUNLRVRfU1lNUyk7XG5TX1VSTF9PUEVOQU5HTEVCUkFDS0VULm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1NZTVMpO1xuU19VUkxfT1BFTlBBUkVOLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOUEFSRU5fU1lNUyk7XG5cbi8vIFVSTCB0aGF0IGJlZ2lucyB3aXRoIGFuIG9wZW5pbmcgYnJhY2tldCwgZm9sbG93ZWQgYnkgc29tZSBzeW1ib2xzXG5TX1VSTF9PUEVOQlJBQ0VfUS5vbihxc0FjY2VwdGluZywgU19VUkxfT1BFTkJSQUNFX1EpO1xuU19VUkxfT1BFTkJSQUNLRVRfUS5vbihxc0FjY2VwdGluZywgU19VUkxfT1BFTkJSQUNLRVRfUSk7XG5TX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1Eub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5BTkdMRUJSQUNLRVRfUSk7XG5TX1VSTF9PUEVOUEFSRU5fUS5vbihxc0FjY2VwdGluZywgU19VUkxfT1BFTlBBUkVOX1EpO1xuU19VUkxfT1BFTkJSQUNFX1Eub24ocXNOb25BY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDRV9RKTtcblNfVVJMX09QRU5CUkFDS0VUX1Eub24ocXNOb25BY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDS0VUX1EpO1xuU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9RLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1EpO1xuU19VUkxfT1BFTlBBUkVOX1Eub24ocXNOb25BY2NlcHRpbmcsIFNfVVJMX09QRU5QQVJFTl9RKTtcblxuU19VUkxfT1BFTkJSQUNFX1NZTVMub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDRV9RKTtcblNfVVJMX09QRU5CUkFDS0VUX1NZTVMub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDS0VUX1EpO1xuU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9TWU1TLm9uKHFzQWNjZXB0aW5nLCBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1EpO1xuU19VUkxfT1BFTlBBUkVOX1NZTVMub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5QQVJFTl9RKTtcblNfVVJMX09QRU5CUkFDRV9TWU1TLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOQlJBQ0VfU1lNUyk7XG5TX1VSTF9PUEVOQlJBQ0tFVF9TWU1TLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOQlJBQ0tFVF9TWU1TKTtcblNfVVJMX09QRU5BTkdMRUJSQUNLRVRfU1lNUy5vbihxc05vbkFjY2VwdGluZywgU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9TWU1TKTtcblNfVVJMX09QRU5QQVJFTl9TWU1TLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOUEFSRU5fU1lNUyk7XG5cbi8vIEFjY291bnQgZm9yIHRoZSBxdWVyeSBzdHJpbmdcblNfVVJMLm9uKHFzQWNjZXB0aW5nLCBTX1VSTCk7XG5TX1VSTF9OT05fQUNDRVBUSU5HLm9uKHFzQWNjZXB0aW5nLCBTX1VSTCk7XG5cblNfVVJMLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9OT05fQUNDRVBUSU5HKTtcblNfVVJMX05PTl9BQ0NFUFRJTkcub24ocXNOb25BY2NlcHRpbmcsIFNfVVJMX05PTl9BQ0NFUFRJTkcpO1xuXG4vLyBFbWFpbCBhZGRyZXNzLXNwZWNpZmljIHN0YXRlIGRlZmluaXRpb25zXG4vLyBOb3RlOiBXZSBhcmUgbm90IGFsbG93aW5nICcvJyBpbiBlbWFpbCBhZGRyZXNzZXMgc2luY2UgdGhpcyB3b3VsZCBpbnRlcmZlcmVcbi8vIHdpdGggcmVhbCBVUkxzXG5cbi8vIEZvciBhZGRyZXNzZXMgd2l0aCB0aGUgbWFpbHRvIHByZWZpeFxuLy8gJ21haWx0bzonIGZvbGxvd2VkIGJ5IGFueXRoaW5nIHNhbmUgaXMgYSB2YWxpZCBlbWFpbFxuU19NQUlMVE8ub24oX3RleHQuVExELCBTX01BSUxUT19FTUFJTCkub24oX3RleHQuRE9NQUlOLCBTX01BSUxUT19FTUFJTCkub24oX3RleHQuTlVNLCBTX01BSUxUT19FTUFJTCkub24oX3RleHQuTE9DQUxIT1NULCBTX01BSUxUT19FTUFJTCk7XG5cbi8vIEdyZWVkaWx5IGdldCBtb3JlIHBvdGVudGlhbCB2YWxpZCBlbWFpbCB2YWx1ZXNcblNfTUFJTFRPX0VNQUlMLm9uKHFzQWNjZXB0aW5nLCBTX01BSUxUT19FTUFJTCkub24ocXNOb25BY2NlcHRpbmcsIFNfTUFJTFRPX0VNQUlMX05PTl9BQ0NFUFRJTkcpO1xuU19NQUlMVE9fRU1BSUxfTk9OX0FDQ0VQVElORy5vbihxc0FjY2VwdGluZywgU19NQUlMVE9fRU1BSUwpLm9uKHFzTm9uQWNjZXB0aW5nLCBTX01BSUxUT19FTUFJTF9OT05fQUNDRVBUSU5HKTtcblxuLy8gRm9yIGFkZHJlc3NlcyB3aXRob3V0IHRoZSBtYWlsdG8gcHJlZml4XG4vLyBUb2tlbnMgYWxsb3dlZCBpbiB0aGUgbG9jYWxwYXJ0IG9mIHRoZSBlbWFpbFxudmFyIGxvY2FscGFydEFjY2VwdGluZyA9IFtfdGV4dC5ET01BSU4sIF90ZXh0Lk5VTSwgX3RleHQuUExVUywgX3RleHQuUE9VTkQsIF90ZXh0LlFVRVJZLCBfdGV4dC5VTkRFUlNDT1JFLCBfdGV4dC5TWU0sIF90ZXh0LkFNUEVSU0FORCwgX3RleHQuVExEXTtcblxuLy8gU29tZSBvZiB0aGUgdG9rZW5zIGluIGBsb2NhbHBhcnRBY2NlcHRpbmdgIGFyZSBhbHJlYWR5IGFjY291bnRlZCBmb3IgaGVyZSBhbmRcbi8vIHdpbGwgbm90IGJlIG92ZXJ3cml0dGVuIChkb24ndCB3b3JyeSlcblNfRE9NQUlOLm9uKGxvY2FscGFydEFjY2VwdGluZywgU19MT0NBTFBBUlQpLm9uKF90ZXh0LkFULCBTX0xPQ0FMUEFSVF9BVCk7XG5TX1RMRC5vbihsb2NhbHBhcnRBY2NlcHRpbmcsIFNfTE9DQUxQQVJUKS5vbihfdGV4dC5BVCwgU19MT0NBTFBBUlRfQVQpO1xuU19ET01BSU5fRE9ULm9uKGxvY2FscGFydEFjY2VwdGluZywgU19MT0NBTFBBUlQpO1xuXG4vLyBPa2F5IHdlJ3JlIG9uIGEgbG9jYWxwYXJ0LiBOb3cgd2hhdD9cbi8vIFRPRE86IElQIGFkZHJlc3NlcyBhbmQgd2hhdCBpZiB0aGUgZW1haWwgc3RhcnRzIHdpdGggbnVtYmVycz9cblNfTE9DQUxQQVJULm9uKGxvY2FscGFydEFjY2VwdGluZywgU19MT0NBTFBBUlQpLm9uKF90ZXh0LkFULCBTX0xPQ0FMUEFSVF9BVCkgLy8gY2xvc2UgdG8gYW4gZW1haWwgYWRkcmVzcyBub3dcbi5vbihfdGV4dC5ET1QsIFNfTE9DQUxQQVJUX0RPVCk7XG5TX0xPQ0FMUEFSVF9ET1Qub24obG9jYWxwYXJ0QWNjZXB0aW5nLCBTX0xPQ0FMUEFSVCk7XG5TX0xPQ0FMUEFSVF9BVC5vbihfdGV4dC5UTEQsIFNfRU1BSUxfRE9NQUlOKS5vbihfdGV4dC5ET01BSU4sIFNfRU1BSUxfRE9NQUlOKS5vbihfdGV4dC5MT0NBTEhPU1QsIFNfRU1BSUwpO1xuLy8gU3RhdGVzIGZvbGxvd2luZyBgQGAgZGVmaW5lZCBhYm92ZVxuXG52YXIgcnVuID0gZnVuY3Rpb24gcnVuKHRva2Vucykge1xuXHR2YXIgbGVuID0gdG9rZW5zLmxlbmd0aDtcblx0dmFyIGN1cnNvciA9IDA7XG5cdHZhciBtdWx0aXMgPSBbXTtcblx0dmFyIHRleHRUb2tlbnMgPSBbXTtcblxuXHR3aGlsZSAoY3Vyc29yIDwgbGVuKSB7XG5cdFx0dmFyIHN0YXRlID0gU19TVEFSVDtcblx0XHR2YXIgc2Vjb25kU3RhdGUgPSBudWxsO1xuXHRcdHZhciBuZXh0U3RhdGUgPSBudWxsO1xuXHRcdHZhciBtdWx0aUxlbmd0aCA9IDA7XG5cdFx0dmFyIGxhdGVzdEFjY2VwdGluZyA9IG51bGw7XG5cdFx0dmFyIHNpbmNlQWNjZXB0cyA9IC0xO1xuXG5cdFx0d2hpbGUgKGN1cnNvciA8IGxlbiAmJiAhKHNlY29uZFN0YXRlID0gc3RhdGUubmV4dCh0b2tlbnNbY3Vyc29yXSkpKSB7XG5cdFx0XHQvLyBTdGFydGluZyB0b2tlbnMgd2l0aCBub3doZXJlIHRvIGp1bXAgdG8uXG5cdFx0XHQvLyBDb25zaWRlciB0aGVzZSB0byBiZSBqdXN0IHBsYWluIHRleHRcblx0XHRcdHRleHRUb2tlbnMucHVzaCh0b2tlbnNbY3Vyc29yKytdKTtcblx0XHR9XG5cblx0XHR3aGlsZSAoY3Vyc29yIDwgbGVuICYmIChuZXh0U3RhdGUgPSBzZWNvbmRTdGF0ZSB8fCBzdGF0ZS5uZXh0KHRva2Vuc1tjdXJzb3JdKSkpIHtcblxuXHRcdFx0Ly8gR2V0IHRoZSBuZXh0IHN0YXRlXG5cdFx0XHRzZWNvbmRTdGF0ZSA9IG51bGw7XG5cdFx0XHRzdGF0ZSA9IG5leHRTdGF0ZTtcblxuXHRcdFx0Ly8gS2VlcCB0cmFjayBvZiB0aGUgbGF0ZXN0IGFjY2VwdGluZyBzdGF0ZVxuXHRcdFx0aWYgKHN0YXRlLmFjY2VwdHMoKSkge1xuXHRcdFx0XHRzaW5jZUFjY2VwdHMgPSAwO1xuXHRcdFx0XHRsYXRlc3RBY2NlcHRpbmcgPSBzdGF0ZTtcblx0XHRcdH0gZWxzZSBpZiAoc2luY2VBY2NlcHRzID49IDApIHtcblx0XHRcdFx0c2luY2VBY2NlcHRzKys7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnNvcisrO1xuXHRcdFx0bXVsdGlMZW5ndGgrKztcblx0XHR9XG5cblx0XHRpZiAoc2luY2VBY2NlcHRzIDwgMCkge1xuXG5cdFx0XHQvLyBObyBhY2NlcHRpbmcgc3RhdGUgd2FzIGZvdW5kLCBwYXJ0IG9mIGEgcmVndWxhciB0ZXh0IHRva2VuXG5cdFx0XHQvLyBBZGQgYWxsIHRoZSB0b2tlbnMgd2UgbG9va2VkIGF0IHRvIHRoZSB0ZXh0IHRva2VucyBhcnJheVxuXHRcdFx0Zm9yICh2YXIgaSA9IGN1cnNvciAtIG11bHRpTGVuZ3RoOyBpIDwgY3Vyc29yOyBpKyspIHtcblx0XHRcdFx0dGV4dFRva2Vucy5wdXNoKHRva2Vuc1tpXSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQWNjZXB0aW5nIHN0YXRlIVxuXG5cdFx0XHQvLyBGaXJzdCBjbG9zZSBvZmYgdGhlIHRleHRUb2tlbnMgKGlmIGF2YWlsYWJsZSlcblx0XHRcdGlmICh0ZXh0VG9rZW5zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bXVsdGlzLnB1c2gobmV3IF9tdWx0aS5URVhUKHRleHRUb2tlbnMpKTtcblx0XHRcdFx0dGV4dFRva2VucyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSb2xsIGJhY2sgdG8gdGhlIGxhdGVzdCBhY2NlcHRpbmcgc3RhdGVcblx0XHRcdGN1cnNvciAtPSBzaW5jZUFjY2VwdHM7XG5cdFx0XHRtdWx0aUxlbmd0aCAtPSBzaW5jZUFjY2VwdHM7XG5cblx0XHRcdC8vIENyZWF0ZSBhIG5ldyBtdWx0aXRva2VuXG5cdFx0XHR2YXIgTVVMVEkgPSBsYXRlc3RBY2NlcHRpbmcuZW1pdCgpO1xuXHRcdFx0bXVsdGlzLnB1c2gobmV3IE1VTFRJKHRva2Vucy5zbGljZShjdXJzb3IgLSBtdWx0aUxlbmd0aCwgY3Vyc29yKSkpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEZpbmFsbHkgY2xvc2Ugb2ZmIHRoZSB0ZXh0VG9rZW5zIChpZiBhdmFpbGFibGUpXG5cdGlmICh0ZXh0VG9rZW5zLmxlbmd0aCA+IDApIHtcblx0XHRtdWx0aXMucHVzaChuZXcgX211bHRpLlRFWFQodGV4dFRva2VucykpO1xuXHR9XG5cblx0cmV0dXJuIG11bHRpcztcbn07XG5cbmV4cG9ydHMuU3RhdGUgPSBfc3RhdGUuVG9rZW5TdGF0ZTtcbmV4cG9ydHMuVE9LRU5TID0gTVVMVElfVE9LRU5TO1xuZXhwb3J0cy5ydW4gPSBydW47XG5leHBvcnRzLnN0YXJ0ID0gU19TVEFSVDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0YXJ0ID0gZXhwb3J0cy5ydW4gPSBleHBvcnRzLlRPS0VOUyA9IGV4cG9ydHMuU3RhdGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlJyk7XG5cbnZhciBfdGV4dCA9IHJlcXVpcmUoJy4vdG9rZW5zL3RleHQnKTtcblxudmFyIFRPS0VOUyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90ZXh0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIHRsZHMgPSAnYWFhfGFhcnB8YWJhcnRofGFiYnxhYmJvdHR8YWJidmllfGFiY3xhYmxlfGFib2dhZG98YWJ1ZGhhYml8YWN8YWNhZGVteXxhY2NlbnR1cmV8YWNjb3VudGFudHxhY2NvdW50YW50c3xhY298YWN0aXZlfGFjdG9yfGFkfGFkYWN8YWRzfGFkdWx0fGFlfGFlZ3xhZXJvfGFldG5hfGFmfGFmYW1pbHljb21wYW55fGFmbHxhZnJpY2F8YWd8YWdha2hhbnxhZ2VuY3l8YWl8YWlnfGFpZ298YWlyYnVzfGFpcmZvcmNlfGFpcnRlbHxha2RufGFsfGFsZmFyb21lb3xhbGliYWJhfGFsaXBheXxhbGxmaW5hbnp8YWxsc3RhdGV8YWxseXxhbHNhY2V8YWxzdG9tfGFtfGFtZXJpY2FuZXhwcmVzc3xhbWVyaWNhbmZhbWlseXxhbWV4fGFtZmFtfGFtaWNhfGFtc3RlcmRhbXxhbmFseXRpY3N8YW5kcm9pZHxhbnF1YW58YW56fGFvfGFvbHxhcGFydG1lbnRzfGFwcHxhcHBsZXxhcXxhcXVhcmVsbGV8YXJ8YXJhYnxhcmFtY298YXJjaGl8YXJteXxhcnBhfGFydHxhcnRlfGFzfGFzZGF8YXNpYXxhc3NvY2lhdGVzfGF0fGF0aGxldGF8YXR0b3JuZXl8YXV8YXVjdGlvbnxhdWRpfGF1ZGlibGV8YXVkaW98YXVzcG9zdHxhdXRob3J8YXV0b3xhdXRvc3xhdmlhbmNhfGF3fGF3c3xheHxheGF8YXp8YXp1cmV8YmF8YmFieXxiYWlkdXxiYW5hbWV4fGJhbmFuYXJlcHVibGljfGJhbmR8YmFua3xiYXJ8YmFyY2Vsb25hfGJhcmNsYXljYXJkfGJhcmNsYXlzfGJhcmVmb290fGJhcmdhaW5zfGJhc2ViYWxsfGJhc2tldGJhbGx8YmF1aGF1c3xiYXllcm58YmJ8YmJjfGJidHxiYnZhfGJjZ3xiY258YmR8YmV8YmVhdHN8YmVhdXR5fGJlZXJ8YmVudGxleXxiZXJsaW58YmVzdHxiZXN0YnV5fGJldHxiZnxiZ3xiaHxiaGFydGl8Yml8YmlibGV8YmlkfGJpa2V8YmluZ3xiaW5nb3xiaW98Yml6fGJqfGJsYWNrfGJsYWNrZnJpZGF5fGJsYW5jb3xibG9ja2J1c3RlcnxibG9nfGJsb29tYmVyZ3xibHVlfGJtfGJtc3xibXd8Ym58Ym5sfGJucHBhcmliYXN8Ym98Ym9hdHN8Ym9laHJpbmdlcnxib2ZhfGJvbXxib25kfGJvb3xib29rfGJvb2tpbmd8Ym9vdHN8Ym9zY2h8Ym9zdGlrfGJvc3Rvbnxib3R8Ym91dGlxdWV8Ym94fGJyfGJyYWRlc2NvfGJyaWRnZXN0b25lfGJyb2Fkd2F5fGJyb2tlcnxicm90aGVyfGJydXNzZWxzfGJzfGJ0fGJ1ZGFwZXN0fGJ1Z2F0dGl8YnVpbGR8YnVpbGRlcnN8YnVzaW5lc3N8YnV5fGJ1enp8YnZ8Ynd8Ynl8Ynp8YnpofGNhfGNhYnxjYWZlfGNhbHxjYWxsfGNhbHZpbmtsZWlufGNhbXxjYW1lcmF8Y2FtcHxjYW5jZXJyZXNlYXJjaHxjYW5vbnxjYXBldG93bnxjYXBpdGFsfGNhcGl0YWxvbmV8Y2FyfGNhcmF2YW58Y2FyZHN8Y2FyZXxjYXJlZXJ8Y2FyZWVyc3xjYXJzfGNhcnRpZXJ8Y2FzYXxjYXNlfGNhc2VpaHxjYXNofGNhc2lub3xjYXR8Y2F0ZXJpbmd8Y2F0aG9saWN8Y2JhfGNibnxjYnJlfGNic3xjY3xjZHxjZWJ8Y2VudGVyfGNlb3xjZXJufGNmfGNmYXxjZmR8Y2d8Y2h8Y2hhbmVsfGNoYW5uZWx8Y2hhc2V8Y2hhdHxjaGVhcHxjaGludGFpfGNobG9lfGNocmlzdG1hc3xjaHJvbWV8Y2hyeXNsZXJ8Y2h1cmNofGNpfGNpcHJpYW5pfGNpcmNsZXxjaXNjb3xjaXRhZGVsfGNpdGl8Y2l0aWN8Y2l0eXxjaXR5ZWF0c3xja3xjbHxjbGFpbXN8Y2xlYW5pbmd8Y2xpY2t8Y2xpbmljfGNsaW5pcXVlfGNsb3RoaW5nfGNsb3VkfGNsdWJ8Y2x1Ym1lZHxjbXxjbnxjb3xjb2FjaHxjb2Rlc3xjb2ZmZWV8Y29sbGVnZXxjb2xvZ25lfGNvbXxjb21jYXN0fGNvbW1iYW5rfGNvbW11bml0eXxjb21wYW55fGNvbXBhcmV8Y29tcHV0ZXJ8Y29tc2VjfGNvbmRvc3xjb25zdHJ1Y3Rpb258Y29uc3VsdGluZ3xjb250YWN0fGNvbnRyYWN0b3JzfGNvb2tpbmd8Y29va2luZ2NoYW5uZWx8Y29vbHxjb29wfGNvcnNpY2F8Y291bnRyeXxjb3Vwb258Y291cG9uc3xjb3Vyc2VzfGNyfGNyZWRpdHxjcmVkaXRjYXJkfGNyZWRpdHVuaW9ufGNyaWNrZXR8Y3Jvd258Y3JzfGNydWlzZXxjcnVpc2VzfGNzY3xjdXxjdWlzaW5lbGxhfGN2fGN3fGN4fGN5fGN5bXJ1fGN5b3V8Y3p8ZGFidXJ8ZGFkfGRhbmNlfGRhdGF8ZGF0ZXxkYXRpbmd8ZGF0c3VufGRheXxkY2xrfGRkc3xkZXxkZWFsfGRlYWxlcnxkZWFsc3xkZWdyZWV8ZGVsaXZlcnl8ZGVsbHxkZWxvaXR0ZXxkZWx0YXxkZW1vY3JhdHxkZW50YWx8ZGVudGlzdHxkZXNpfGRlc2lnbnxkZXZ8ZGhsfGRpYW1vbmRzfGRpZXR8ZGlnaXRhbHxkaXJlY3R8ZGlyZWN0b3J5fGRpc2NvdW50fGRpc2NvdmVyfGRpc2h8ZGl5fGRqfGRrfGRtfGRucHxkb3xkb2NzfGRvY3Rvcnxkb2RnZXxkb2d8ZG9oYXxkb21haW5zfGRvdHxkb3dubG9hZHxkcml2ZXxkdHZ8ZHViYWl8ZHVja3xkdW5sb3B8ZHVuc3xkdXBvbnR8ZHVyYmFufGR2YWd8ZHZyfGR6fGVhcnRofGVhdHxlY3xlY298ZWRla2F8ZWR1fGVkdWNhdGlvbnxlZXxlZ3xlbWFpbHxlbWVyY2t8ZW5lcmd5fGVuZ2luZWVyfGVuZ2luZWVyaW5nfGVudGVycHJpc2VzfGVwb3N0fGVwc29ufGVxdWlwbWVudHxlcnxlcmljc3Nvbnxlcm5pfGVzfGVzcXxlc3RhdGV8ZXN1cmFuY2V8ZXR8ZXRpc2FsYXR8ZXV8ZXVyb3Zpc2lvbnxldXN8ZXZlbnRzfGV2ZXJiYW5rfGV4Y2hhbmdlfGV4cGVydHxleHBvc2VkfGV4cHJlc3N8ZXh0cmFzcGFjZXxmYWdlfGZhaWx8ZmFpcndpbmRzfGZhaXRofGZhbWlseXxmYW58ZmFuc3xmYXJtfGZhcm1lcnN8ZmFzaGlvbnxmYXN0fGZlZGV4fGZlZWRiYWNrfGZlcnJhcml8ZmVycmVyb3xmaXxmaWF0fGZpZGVsaXR5fGZpZG98ZmlsbXxmaW5hbHxmaW5hbmNlfGZpbmFuY2lhbHxmaXJlfGZpcmVzdG9uZXxmaXJtZGFsZXxmaXNofGZpc2hpbmd8Zml0fGZpdG5lc3N8Zmp8Zmt8ZmxpY2tyfGZsaWdodHN8ZmxpcnxmbG9yaXN0fGZsb3dlcnN8Zmx5fGZtfGZvfGZvb3xmb29kfGZvb2RuZXR3b3JrfGZvb3RiYWxsfGZvcmR8Zm9yZXh8Zm9yc2FsZXxmb3J1bXxmb3VuZGF0aW9ufGZveHxmcnxmcmVlfGZyZXNlbml1c3xmcmx8ZnJvZ2Fuc3xmcm9udGRvb3J8ZnJvbnRpZXJ8ZnRyfGZ1aml0c3V8ZnVqaXhlcm94fGZ1bnxmdW5kfGZ1cm5pdHVyZXxmdXRib2x8ZnlpfGdhfGdhbHxnYWxsZXJ5fGdhbGxvfGdhbGx1cHxnYW1lfGdhbWVzfGdhcHxnYXJkZW58Z2J8Z2JpenxnZHxnZG58Z2V8Z2VhfGdlbnR8Z2VudGluZ3xnZW9yZ2V8Z2Z8Z2d8Z2dlZXxnaHxnaXxnaWZ0fGdpZnRzfGdpdmVzfGdpdmluZ3xnbHxnbGFkZXxnbGFzc3xnbGV8Z2xvYmFsfGdsb2JvfGdtfGdtYWlsfGdtYmh8Z21vfGdteHxnbnxnb2RhZGR5fGdvbGR8Z29sZHBvaW50fGdvbGZ8Z29vfGdvb2RoYW5kc3xnb29keWVhcnxnb29nfGdvb2dsZXxnb3B8Z290fGdvdnxncHxncXxncnxncmFpbmdlcnxncmFwaGljc3xncmF0aXN8Z3JlZW58Z3JpcGV8Z3JvY2VyeXxncm91cHxnc3xndHxndXxndWFyZGlhbnxndWNjaXxndWdlfGd1aWRlfGd1aXRhcnN8Z3VydXxnd3xneXxoYWlyfGhhbWJ1cmd8aGFuZ291dHxoYXVzfGhib3xoZGZjfGhkZmNiYW5rfGhlYWx0aHxoZWFsdGhjYXJlfGhlbHB8aGVsc2lua2l8aGVyZXxoZXJtZXN8aGd0dnxoaXBob3B8aGlzYW1pdHN1fGhpdGFjaGl8aGl2fGhrfGhrdHxobXxobnxob2NrZXl8aG9sZGluZ3N8aG9saWRheXxob21lZGVwb3R8aG9tZWdvb2RzfGhvbWVzfGhvbWVzZW5zZXxob25kYXxob25leXdlbGx8aG9yc2V8aG9zcGl0YWx8aG9zdHxob3N0aW5nfGhvdHxob3RlbGVzfGhvdGVsc3xob3RtYWlsfGhvdXNlfGhvd3xocnxoc2JjfGh0fGh0Y3xodXxodWdoZXN8aHlhdHR8aHl1bmRhaXxpYm18aWNiY3xpY2V8aWN1fGlkfGllfGllZWV8aWZtfGlrYW5vfGlsfGltfGltYW1hdHxpbWRifGltbW98aW1tb2JpbGllbnxpbnxpbmR1c3RyaWVzfGluZmluaXRpfGluZm98aW5nfGlua3xpbnN0aXR1dGV8aW5zdXJhbmNlfGluc3VyZXxpbnR8aW50ZWx8aW50ZXJuYXRpb25hbHxpbnR1aXR8aW52ZXN0bWVudHN8aW98aXBpcmFuZ2F8aXF8aXJ8aXJpc2h8aXN8aXNlbGVjdHxpc21haWxpfGlzdHxpc3RhbmJ1bHxpdHxpdGF1fGl0dnxpdmVjb3xpd2N8amFndWFyfGphdmF8amNifGpjcHxqZXxqZWVwfGpldHp0fGpld2Vscnl8amlvfGpsY3xqbGx8am18am1wfGpuanxqb3xqb2JzfGpvYnVyZ3xqb3R8am95fGpwfGpwbW9yZ2FufGpwcnN8anVlZ29zfGp1bmlwZXJ8a2F1ZmVufGtkZGl8a2V8a2Vycnlob3RlbHN8a2Vycnlsb2dpc3RpY3N8a2Vycnlwcm9wZXJ0aWVzfGtmaHxrZ3xraHxraXxraWF8a2ltfGtpbmRlcnxraW5kbGV8a2l0Y2hlbnxraXdpfGttfGtufGtvZWxufGtvbWF0c3V8a29zaGVyfGtwfGtwbWd8a3BufGtyfGtyZHxrcmVkfGt1b2tncm91cHxrd3xreXxreW90b3xrenxsYXxsYWNhaXhhfGxhZGJyb2tlc3xsYW1ib3JnaGluaXxsYW1lcnxsYW5jYXN0ZXJ8bGFuY2lhfGxhbmNvbWV8bGFuZHxsYW5kcm92ZXJ8bGFueGVzc3xsYXNhbGxlfGxhdHxsYXRpbm98bGF0cm9iZXxsYXd8bGF3eWVyfGxifGxjfGxkc3xsZWFzZXxsZWNsZXJjfGxlZnJha3xsZWdhbHxsZWdvfGxleHVzfGxnYnR8bGl8bGlhaXNvbnxsaWRsfGxpZmV8bGlmZWluc3VyYW5jZXxsaWZlc3R5bGV8bGlnaHRpbmd8bGlrZXxsaWxseXxsaW1pdGVkfGxpbW98bGluY29sbnxsaW5kZXxsaW5rfGxpcHN5fGxpdmV8bGl2aW5nfGxpeGlsfGxrfGxvYW58bG9hbnN8bG9ja2VyfGxvY3VzfGxvZnR8bG9sfGxvbmRvbnxsb3R0ZXxsb3R0b3xsb3ZlfGxwbHxscGxmaW5hbmNpYWx8bHJ8bHN8bHR8bHRkfGx0ZGF8bHV8bHVuZGJlY2t8bHVwaW58bHV4ZXxsdXh1cnl8bHZ8bHl8bWF8bWFjeXN8bWFkcmlkfG1haWZ8bWFpc29ufG1ha2V1cHxtYW58bWFuYWdlbWVudHxtYW5nb3xtYXB8bWFya2V0fG1hcmtldGluZ3xtYXJrZXRzfG1hcnJpb3R0fG1hcnNoYWxsc3xtYXNlcmF0aXxtYXR0ZWx8bWJhfG1jfG1ja2luc2V5fG1kfG1lfG1lZHxtZWRpYXxtZWV0fG1lbGJvdXJuZXxtZW1lfG1lbW9yaWFsfG1lbnxtZW51fG1lb3xtZXJja21zZHxtZXRsaWZlfG1nfG1ofG1pYW1pfG1pY3Jvc29mdHxtaWx8bWluaXxtaW50fG1pdHxtaXRzdWJpc2hpfG1rfG1sfG1sYnxtbHN8bW18bW1hfG1ufG1vfG1vYml8bW9iaWxlfG1vYmlseXxtb2RhfG1vZXxtb2l8bW9tfG1vbmFzaHxtb25leXxtb25zdGVyfG1vcGFyfG1vcm1vbnxtb3J0Z2FnZXxtb3Njb3d8bW90b3xtb3RvcmN5Y2xlc3xtb3Z8bW92aWV8bW92aXN0YXJ8bXB8bXF8bXJ8bXN8bXNkfG10fG10bnxtdHJ8bXV8bXVzZXVtfG11dHVhbHxtdnxtd3xteHxteXxtenxuYXxuYWJ8bmFkZXh8bmFnb3lhfG5hbWV8bmF0aW9ud2lkZXxuYXR1cmF8bmF2eXxuYmF8bmN8bmV8bmVjfG5ldHxuZXRiYW5rfG5ldGZsaXh8bmV0d29ya3xuZXVzdGFyfG5ld3xuZXdob2xsYW5kfG5ld3N8bmV4dHxuZXh0ZGlyZWN0fG5leHVzfG5mfG5mbHxuZ3xuZ298bmhrfG5pfG5pY298bmlrZXxuaWtvbnxuaW5qYXxuaXNzYW58bmlzc2F5fG5sfG5vfG5va2lhfG5vcnRod2VzdGVybm11dHVhbHxub3J0b258bm93fG5vd3J1enxub3d0dnxucHxucnxucmF8bnJ3fG50dHxudXxueWN8bnp8b2JpfG9ic2VydmVyfG9mZnxvZmZpY2V8b2tpbmF3YXxvbGF5YW58b2xheWFuZ3JvdXB8b2xkbmF2eXxvbGxvfG9tfG9tZWdhfG9uZXxvbmd8b25sfG9ubGluZXxvbnlvdXJzaWRlfG9vb3xvcGVufG9yYWNsZXxvcmFuZ2V8b3JnfG9yZ2FuaWN8b3JpZ2luc3xvc2FrYXxvdHN1a2F8b3R0fG92aHxwYXxwYWdlfHBhbmFzb25pY3xwYW5lcmFpfHBhcmlzfHBhcnN8cGFydG5lcnN8cGFydHN8cGFydHl8cGFzc2FnZW5zfHBheXxwY2N3fHBlfHBldHxwZnxwZml6ZXJ8cGd8cGh8cGhhcm1hY3l8cGhkfHBoaWxpcHN8cGhvbmV8cGhvdG98cGhvdG9ncmFwaHl8cGhvdG9zfHBoeXNpb3xwaWFnZXR8cGljc3xwaWN0ZXR8cGljdHVyZXN8cGlkfHBpbnxwaW5nfHBpbmt8cGlvbmVlcnxwaXp6YXxwa3xwbHxwbGFjZXxwbGF5fHBsYXlzdGF0aW9ufHBsdW1iaW5nfHBsdXN8cG18cG58cG5jfHBvaGx8cG9rZXJ8cG9saXRpZXxwb3JufHBvc3R8cHJ8cHJhbWVyaWNhfHByYXhpfHByZXNzfHByaW1lfHByb3xwcm9kfHByb2R1Y3Rpb25zfHByb2Z8cHJvZ3Jlc3NpdmV8cHJvbW98cHJvcGVydGllc3xwcm9wZXJ0eXxwcm90ZWN0aW9ufHBydXxwcnVkZW50aWFsfHBzfHB0fHB1Ynxwd3xwd2N8cHl8cWF8cXBvbnxxdWViZWN8cXVlc3R8cXZjfHJhY2luZ3xyYWRpb3xyYWlkfHJlfHJlYWR8cmVhbGVzdGF0ZXxyZWFsdG9yfHJlYWx0eXxyZWNpcGVzfHJlZHxyZWRzdG9uZXxyZWR1bWJyZWxsYXxyZWhhYnxyZWlzZXxyZWlzZW58cmVpdHxyZWxpYW5jZXxyZW58cmVudHxyZW50YWxzfHJlcGFpcnxyZXBvcnR8cmVwdWJsaWNhbnxyZXN0fHJlc3RhdXJhbnR8cmV2aWV3fHJldmlld3N8cmV4cm90aHxyaWNofHJpY2hhcmRsaXxyaWNvaHxyaWdodGF0aG9tZXxyaWx8cmlvfHJpcHxybWl0fHJvfHJvY2hlcnxyb2Nrc3xyb2Rlb3xyb2dlcnN8cm9vbXxyc3xyc3ZwfHJ1fHJ1Z2J5fHJ1aHJ8cnVufHJ3fHJ3ZXxyeXVreXV8c2F8c2FhcmxhbmR8c2FmZXxzYWZldHl8c2FrdXJhfHNhbGV8c2Fsb258c2Ftc2NsdWJ8c2Ftc3VuZ3xzYW5kdmlrfHNhbmR2aWtjb3JvbWFudHxzYW5vZml8c2FwfHNhcG98c2FybHxzYXN8c2F2ZXxzYXhvfHNifHNiaXxzYnN8c2N8c2NhfHNjYnxzY2hhZWZmbGVyfHNjaG1pZHR8c2Nob2xhcnNoaXBzfHNjaG9vbHxzY2h1bGV8c2Nod2FyenxzY2llbmNlfHNjam9obnNvbnxzY29yfHNjb3R8c2R8c2V8c2VhcmNofHNlYXR8c2VjdXJlfHNlY3VyaXR5fHNlZWt8c2VsZWN0fHNlbmVyfHNlcnZpY2VzfHNlc3xzZXZlbnxzZXd8c2V4fHNleHl8c2ZyfHNnfHNofHNoYW5ncmlsYXxzaGFycHxzaGF3fHNoZWxsfHNoaWF8c2hpa3NoYXxzaG9lc3xzaG9wfHNob3BwaW5nfHNob3VqaXxzaG93fHNob3d0aW1lfHNocmlyYW18c2l8c2lsa3xzaW5hfHNpbmdsZXN8c2l0ZXxzanxza3xza2l8c2tpbnxza3l8c2t5cGV8c2x8c2xpbmd8c218c21hcnR8c21pbGV8c258c25jZnxzb3xzb2NjZXJ8c29jaWFsfHNvZnRiYW5rfHNvZnR3YXJlfHNvaHV8c29sYXJ8c29sdXRpb25zfHNvbmd8c29ueXxzb3l8c3BhY2V8c3BpZWdlbHxzcG90fHNwcmVhZGJldHRpbmd8c3J8c3JsfHNydHxzdHxzdGFkYXxzdGFwbGVzfHN0YXJ8c3Rhcmh1YnxzdGF0ZWJhbmt8c3RhdGVmYXJtfHN0YXRvaWx8c3RjfHN0Y2dyb3VwfHN0b2NraG9sbXxzdG9yYWdlfHN0b3JlfHN0cmVhbXxzdHVkaW98c3R1ZHl8c3R5bGV8c3V8c3Vja3N8c3VwcGxpZXN8c3VwcGx5fHN1cHBvcnR8c3VyZnxzdXJnZXJ5fHN1enVraXxzdnxzd2F0Y2h8c3dpZnRjb3Zlcnxzd2lzc3xzeHxzeXxzeWRuZXl8c3ltYW50ZWN8c3lzdGVtc3xzenx0YWJ8dGFpcGVpfHRhbGt8dGFvYmFvfHRhcmdldHx0YXRhbW90b3JzfHRhdGFyfHRhdHRvb3x0YXh8dGF4aXx0Y3x0Y2l8dGR8dGRrfHRlYW18dGVjaHx0ZWNobm9sb2d5fHRlbHx0ZWxlY2l0eXx0ZWxlZm9uaWNhfHRlbWFzZWt8dGVubmlzfHRldmF8dGZ8dGd8dGh8dGhkfHRoZWF0ZXJ8dGhlYXRyZXx0aWFhfHRpY2tldHN8dGllbmRhfHRpZmZhbnl8dGlwc3x0aXJlc3x0aXJvbHx0anx0am1heHh8dGp4fHRrfHRrbWF4eHx0bHx0bXx0bWFsbHx0bnx0b3x0b2RheXx0b2t5b3x0b29sc3x0b3B8dG9yYXl8dG9zaGliYXx0b3RhbHx0b3Vyc3x0b3dufHRveW90YXx0b3lzfHRyfHRyYWRlfHRyYWRpbmd8dHJhaW5pbmd8dHJhdmVsfHRyYXZlbGNoYW5uZWx8dHJhdmVsZXJzfHRyYXZlbGVyc2luc3VyYW5jZXx0cnVzdHx0cnZ8dHR8dHViZXx0dWl8dHVuZXN8dHVzaHV8dHZ8dHZzfHR3fHR6fHVhfHViYW5rfHVic3x1Y29ubmVjdHx1Z3x1a3x1bmljb218dW5pdmVyc2l0eXx1bm98dW9sfHVwc3x1c3x1eXx1enx2YXx2YWNhdGlvbnN8dmFuYXx2YW5ndWFyZHx2Y3x2ZXx2ZWdhc3x2ZW50dXJlc3x2ZXJpc2lnbnx2ZXJzaWNoZXJ1bmd8dmV0fHZnfHZpfHZpYWplc3x2aWRlb3x2aWd8dmlraW5nfHZpbGxhc3x2aW58dmlwfHZpcmdpbnx2aXNhfHZpc2lvbnx2aXN0YXx2aXN0YXByaW50fHZpdmF8dml2b3x2bGFhbmRlcmVufHZufHZvZGthfHZvbGtzd2FnZW58dm9sdm98dm90ZXx2b3Rpbmd8dm90b3x2b3lhZ2V8dnV8dnVlbG9zfHdhbGVzfHdhbG1hcnR8d2FsdGVyfHdhbmd8d2FuZ2dvdXx3YXJtYW58d2F0Y2h8d2F0Y2hlc3x3ZWF0aGVyfHdlYXRoZXJjaGFubmVsfHdlYmNhbXx3ZWJlcnx3ZWJzaXRlfHdlZHx3ZWRkaW5nfHdlaWJvfHdlaXJ8d2Z8d2hvc3dob3x3aWVufHdpa2l8d2lsbGlhbWhpbGx8d2lufHdpbmRvd3N8d2luZXx3aW5uZXJzfHdtZXx3b2x0ZXJza2x1d2VyfHdvb2RzaWRlfHdvcmt8d29ya3N8d29ybGR8d293fHdzfHd0Y3x3dGZ8eGJveHx4ZXJveHx4ZmluaXR5fHhpaHVhbnx4aW58eG4tLTExYjRjM2R8eG4tLTFjazJlMWJ8eG4tLTFxcXcyM2F8eG4tLTJzY3JqOWN8eG4tLTMwcnI3eXx4bi0tM2JzdDAwbXx4bi0tM2RzNDQzZ3x4bi0tM2UwYjcwN2V8eG4tLTNoY3JqOWN8eG4tLTNvcTE4dmw4cG4zNmF8eG4tLTNweHU4a3x4bi0tNDJjMmQ5YXx4bi0tNDVicjVjeWx8eG4tLTQ1YnJqOWN8eG4tLTQ1cTExY3x4bi0tNGdicmltfHhuLS01NGI3ZnRhMGNjfHhuLS01NXF3NDJnfHhuLS01NXF4NWR8eG4tLTVzdTM0ajkzNmJnc2d8eG4tLTV0em01Z3x4bi0tNmZyejgyZ3x4bi0tNnFxOTg2YjN4bHx4bi0tODBhZHhoa3N8eG4tLTgwYW8yMWF8eG4tLTgwYXFlY2RyMWF8eG4tLTgwYXNlaGRifHhuLS04MGFzd2d8eG4tLTh5MGEwNjNhfHhuLS05MGEzYWN8eG4tLTkwYWV8eG4tLTkwYWlzfHhuLS05ZGJxMmF8eG4tLTlldDUydXx4bi0tOWtydDAwYXx4bi0tYjR3NjA1ZmVyZHx4bi0tYmNrMWI5YTVkcmU0Y3x4bi0tYzFhdmd8eG4tLWMyYnI3Z3x4bi0tY2NrMmIzYnx4bi0tY2c0YmtpfHhuLS1jbGNoYzBlYTBiMmcyYTlnY2R8eG4tLWN6cjY5NGJ8eG4tLWN6cnMwdHx4bi0tY3pydTJkfHhuLS1kMWFjajNifHhuLS1kMWFsZnx4bi0tZTFhNGN8eG4tLWVja3ZkdGM5ZHx4bi0tZWZ2eTg4aHx4bi0tZXN0djc1Z3x4bi0tZmN0NDI5a3x4bi0tZmhiZWl8eG4tLWZpcTIyOGM1aHN8eG4tLWZpcTY0Ynx4bi0tZmlxczhzfHhuLS1maXF6OXN8eG4tLWZqcTcyMGF8eG4tLWZsdzM1MWV8eG4tLWZwY3JqOWMzZHx4bi0tZnpjMmM5ZTJjfHhuLS1menlzOGQ2OXV2Z218eG4tLWcyeHg0OGN8eG4tLWdja3IzZjBmfHhuLS1nZWNyajljfHhuLS1nazNhdDFlfHhuLS1oMmJyZWczZXZlfHhuLS1oMmJyajljfHhuLS1oMmJyajljOGN8eG4tLWh4dDgxNGV8eG4tLWkxYjZiMWE2YTJlfHhuLS1pbXI1MTNufHhuLS1pbzBhN2l8eG4tLWoxYWVmfHhuLS1qMWFtaHx4bi0tajZ3MTkzZ3x4bi0tamxxNjF1OXc3Ynx4bi0tanZyMTg5bXx4bi0ta2NyeDc3ZDF4NGF8eG4tLWtwcncxM2R8eG4tLWtwcnk1N2R8eG4tLWtwdTcxNmZ8eG4tLWtwdXQzaXx4bi0tbDFhY2N8eG4tLWxnYmJhdDFhZDhqfHhuLS1tZ2I5YXdiZnx4bi0tbWdiYTNhM2VqdHx4bi0tbWdiYTNhNGYxNmF8eG4tLW1nYmE3YzBiYm4wYXx4bi0tbWdiYWFrYzdkdmZ8eG4tLW1nYmFhbTdhOGh8eG4tLW1nYmFiMmJkfHhuLS1tZ2JhaTlhemdxcDZqfHhuLS1tZ2JheWg3Z3BhfHhuLS1tZ2JiOWZicG9ifHhuLS1tZ2JiaDFhfHhuLS1tZ2JiaDFhNzFlfHhuLS1tZ2JjMGE5YXpjZ3x4bi0tbWdiY2E3ZHpkb3x4bi0tbWdiZXJwNGE1ZDRhcnx4bi0tbWdiZ3U4MmF8eG4tLW1nYmk0ZWNleHB8eG4tLW1nYnBsMmZofHhuLS1tZ2J0M2RoZHx4bi0tbWdidHgyYnx4bi0tbWdieDRjZDBhYnx4bi0tbWl4ODkxZnx4bi0tbWsxYnU0NGN8eG4tLW14dHExbXx4bi0tbmdiYzVhemR8eG4tLW5nYmU5ZTBhfHhuLS1uZ2JyeHx4bi0tbm9kZXx4bi0tbnF2N2Z8eG4tLW5xdjdmczAwZW1hfHhuLS1ueXF5MjZhfHhuLS1vM2N3NGh8eG4tLW9nYnBmOGZsfHhuLS1wMWFjZnx4bi0tcDFhaXx4bi0tcGJ0OTc3Y3x4bi0tcGdiczBkaHx4bi0tcHNzeTJ1fHhuLS1xOWp5YjRjfHhuLS1xY2thMXBtY3x4bi0tcXhhbXx4bi0tcmhxdjk2Z3x4bi0tcm92dTg4Ynx4bi0tcnZjMWUwYW0zZXx4bi0tczlicmo5Y3x4bi0tc2VzNTU0Z3x4bi0tdDYwYjU2YXx4bi0tdGNrd2V8eG4tLXRpcTQ5eHF5anx4bi0tdW51cDR5fHhuLS12ZXJtZ2Vuc2JlcmF0ZXItY3RifHhuLS12ZXJtZ2Vuc2JlcmF0dW5nLXB3Ynx4bi0tdmhxdXZ8eG4tLXZ1cTg2MWJ8eG4tLXc0cjg1ZWw4Zmh1NWRucmF8eG4tLXc0cnM0MGx8eG4tLXdnYmgxY3x4bi0td2dibDZhfHhuLS14aHE1MjFifHhuLS14a2MyYWwzaHllMmF8eG4tLXhrYzJkbDNhNWVlMGh8eG4tLXk5YTNhcXx4bi0teWZybzRpNjdvfHhuLS15Z2JpMmFtbXh8eG4tLXpmcjE2NGJ8eHBlcmlhfHh4eHx4eXp8eWFjaHRzfHlhaG9vfHlhbWF4dW58eWFuZGV4fHllfHlvZG9iYXNoaXx5b2dhfHlva29oYW1hfHlvdXx5b3V0dWJlfHl0fHl1bnx6YXx6YXBwb3N8emFyYXx6ZXJvfHppcHx6aXBwb3x6bXx6b25lfHp1ZXJpY2h8encnLnNwbGl0KCd8Jyk7IC8vIG1hY3JvLCBzZWUgZ3VscGZpbGUuanNcblxuLyoqXG5cdFRoZSBzY2FubmVyIHByb3ZpZGVzIGFuIGludGVyZmFjZSB0aGF0IHRha2VzIGEgc3RyaW5nIG9mIHRleHQgYXMgaW5wdXQsIGFuZFxuXHRvdXRwdXRzIGFuIGFycmF5IG9mIHRva2VucyBpbnN0YW5jZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgZWFzeSBVUkwgcGFyc2luZy5cblxuXHRAbW9kdWxlIGxpbmtpZnlcblx0QHN1Ym1vZHVsZSBzY2FubmVyXG5cdEBtYWluIHNjYW5uZXJcbiovXG5cbnZhciBOVU1CRVJTID0gJzAxMjM0NTY3ODknLnNwbGl0KCcnKTtcbnZhciBBTFBIQU5VTSA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonLnNwbGl0KCcnKTtcbnZhciBXSElURVNQQUNFID0gWycgJywgJ1xcZicsICdcXHInLCAnXFx0JywgJ1xcdicsICdcXHhBMCcsICdcXHUxNjgwJywgJ1xcdTE4MEUnXTsgLy8gZXhjbHVkaW5nIGxpbmUgYnJlYWtzXG5cbnZhciBkb21haW5TdGF0ZXMgPSBbXTsgLy8gc3RhdGVzIHRoYXQganVtcCB0byBET01BSU4gb24gL1thLXowLTldL1xudmFyIG1ha2VTdGF0ZSA9IGZ1bmN0aW9uIG1ha2VTdGF0ZSh0b2tlbkNsYXNzKSB7XG5cdHJldHVybiBuZXcgX3N0YXRlLkNoYXJhY3RlclN0YXRlKHRva2VuQ2xhc3MpO1xufTtcblxuLy8gRnJlcXVlbnRseSB1c2VkIHN0YXRlc1xudmFyIFNfU1RBUlQgPSBtYWtlU3RhdGUoKTtcbnZhciBTX05VTSA9IG1ha2VTdGF0ZShfdGV4dC5OVU0pO1xudmFyIFNfRE9NQUlOID0gbWFrZVN0YXRlKF90ZXh0LkRPTUFJTik7XG52YXIgU19ET01BSU5fSFlQSEVOID0gbWFrZVN0YXRlKCk7IC8vIGRvbWFpbiBmb2xsb3dlZCBieSAxIG9yIG1vcmUgaHlwaGVuIGNoYXJhY3RlcnNcbnZhciBTX1dTID0gbWFrZVN0YXRlKF90ZXh0LldTKTtcblxuLy8gU3RhdGVzIGZvciBzcGVjaWFsIFVSTCBzeW1ib2xzXG5TX1NUQVJULm9uKCdAJywgbWFrZVN0YXRlKF90ZXh0LkFUKSkub24oJy4nLCBtYWtlU3RhdGUoX3RleHQuRE9UKSkub24oJysnLCBtYWtlU3RhdGUoX3RleHQuUExVUykpLm9uKCcjJywgbWFrZVN0YXRlKF90ZXh0LlBPVU5EKSkub24oJz8nLCBtYWtlU3RhdGUoX3RleHQuUVVFUlkpKS5vbignLycsIG1ha2VTdGF0ZShfdGV4dC5TTEFTSCkpLm9uKCdfJywgbWFrZVN0YXRlKF90ZXh0LlVOREVSU0NPUkUpKS5vbignOicsIG1ha2VTdGF0ZShfdGV4dC5DT0xPTikpLm9uKCd7JywgbWFrZVN0YXRlKF90ZXh0Lk9QRU5CUkFDRSkpLm9uKCdbJywgbWFrZVN0YXRlKF90ZXh0Lk9QRU5CUkFDS0VUKSkub24oJzwnLCBtYWtlU3RhdGUoX3RleHQuT1BFTkFOR0xFQlJBQ0tFVCkpLm9uKCcoJywgbWFrZVN0YXRlKF90ZXh0Lk9QRU5QQVJFTikpLm9uKCd9JywgbWFrZVN0YXRlKF90ZXh0LkNMT1NFQlJBQ0UpKS5vbignXScsIG1ha2VTdGF0ZShfdGV4dC5DTE9TRUJSQUNLRVQpKS5vbignPicsIG1ha2VTdGF0ZShfdGV4dC5DTE9TRUFOR0xFQlJBQ0tFVCkpLm9uKCcpJywgbWFrZVN0YXRlKF90ZXh0LkNMT1NFUEFSRU4pKS5vbignJicsIG1ha2VTdGF0ZShfdGV4dC5BTVBFUlNBTkQpKS5vbihbJywnLCAnOycsICchJywgJ1wiJywgJ1xcJyddLCBtYWtlU3RhdGUoX3RleHQuUFVOQ1RVQVRJT04pKTtcblxuLy8gV2hpdGVzcGFjZSBqdW1wc1xuLy8gVG9rZW5zIG9mIG9ubHkgbm9uLW5ld2xpbmUgd2hpdGVzcGFjZSBhcmUgYXJiaXRyYXJpbHkgbG9uZ1xuU19TVEFSVC5vbignXFxuJywgbWFrZVN0YXRlKF90ZXh0Lk5MKSkub24oV0hJVEVTUEFDRSwgU19XUyk7XG5cbi8vIElmIGFueSB3aGl0ZXNwYWNlIGV4Y2VwdCBuZXdsaW5lLCBtb3JlIHdoaXRlc3BhY2UhXG5TX1dTLm9uKFdISVRFU1BBQ0UsIFNfV1MpO1xuXG4vLyBHZW5lcmF0ZXMgc3RhdGVzIGZvciB0b3AtbGV2ZWwgZG9tYWluc1xuLy8gTm90ZSB0aGF0IHRoaXMgaXMgbW9zdCBhY2N1cmF0ZSB3aGVuIHRsZHMgYXJlIGluIGFscGhhYmV0aWNhbCBvcmRlclxuZm9yICh2YXIgaSA9IDA7IGkgPCB0bGRzLmxlbmd0aDsgaSsrKSB7XG5cdHZhciBuZXdTdGF0ZXMgPSAoMCwgX3N0YXRlLnN0YXRlaWZ5KSh0bGRzW2ldLCBTX1NUQVJULCBfdGV4dC5UTEQsIF90ZXh0LkRPTUFJTik7XG5cdGRvbWFpblN0YXRlcy5wdXNoLmFwcGx5KGRvbWFpblN0YXRlcywgbmV3U3RhdGVzKTtcbn1cblxuLy8gQ29sbGVjdCB0aGUgc3RhdGVzIGdlbmVyYXRlZCBieSBkaWZmZXJlbnQgcHJvdG9jbHNcbnZhciBwYXJ0aWFsUHJvdG9jb2xGaWxlU3RhdGVzID0gKDAsIF9zdGF0ZS5zdGF0ZWlmeSkoJ2ZpbGUnLCBTX1NUQVJULCBfdGV4dC5ET01BSU4sIF90ZXh0LkRPTUFJTik7XG52YXIgcGFydGlhbFByb3RvY29sRnRwU3RhdGVzID0gKDAsIF9zdGF0ZS5zdGF0ZWlmeSkoJ2Z0cCcsIFNfU1RBUlQsIF90ZXh0LkRPTUFJTiwgX3RleHQuRE9NQUlOKTtcbnZhciBwYXJ0aWFsUHJvdG9jb2xIdHRwU3RhdGVzID0gKDAsIF9zdGF0ZS5zdGF0ZWlmeSkoJ2h0dHAnLCBTX1NUQVJULCBfdGV4dC5ET01BSU4sIF90ZXh0LkRPTUFJTik7XG52YXIgcGFydGlhbFByb3RvY29sTWFpbHRvU3RhdGVzID0gKDAsIF9zdGF0ZS5zdGF0ZWlmeSkoJ21haWx0bycsIFNfU1RBUlQsIF90ZXh0LkRPTUFJTiwgX3RleHQuRE9NQUlOKTtcblxuLy8gQWRkIHRoZSBzdGF0ZXMgdG8gdGhlIGFycmF5IG9mIERPTUFJTmVyaWMgc3RhdGVzXG5kb21haW5TdGF0ZXMucHVzaC5hcHBseShkb21haW5TdGF0ZXMsIHBhcnRpYWxQcm90b2NvbEZpbGVTdGF0ZXMpO1xuZG9tYWluU3RhdGVzLnB1c2guYXBwbHkoZG9tYWluU3RhdGVzLCBwYXJ0aWFsUHJvdG9jb2xGdHBTdGF0ZXMpO1xuZG9tYWluU3RhdGVzLnB1c2guYXBwbHkoZG9tYWluU3RhdGVzLCBwYXJ0aWFsUHJvdG9jb2xIdHRwU3RhdGVzKTtcbmRvbWFpblN0YXRlcy5wdXNoLmFwcGx5KGRvbWFpblN0YXRlcywgcGFydGlhbFByb3RvY29sTWFpbHRvU3RhdGVzKTtcblxuLy8gUHJvdG9jb2wgc3RhdGVzXG52YXIgU19QUk9UT0NPTF9GSUxFID0gcGFydGlhbFByb3RvY29sRmlsZVN0YXRlcy5wb3AoKTtcbnZhciBTX1BST1RPQ09MX0ZUUCA9IHBhcnRpYWxQcm90b2NvbEZ0cFN0YXRlcy5wb3AoKTtcbnZhciBTX1BST1RPQ09MX0hUVFAgPSBwYXJ0aWFsUHJvdG9jb2xIdHRwU3RhdGVzLnBvcCgpO1xudmFyIFNfTUFJTFRPID0gcGFydGlhbFByb3RvY29sTWFpbHRvU3RhdGVzLnBvcCgpO1xudmFyIFNfUFJPVE9DT0xfU0VDVVJFID0gbWFrZVN0YXRlKF90ZXh0LkRPTUFJTik7XG52YXIgU19GVUxMX1BST1RPQ09MID0gbWFrZVN0YXRlKF90ZXh0LlBST1RPQ09MKTsgLy8gRnVsbCBwcm90b2NvbCBlbmRzIHdpdGggQ09MT05cbnZhciBTX0ZVTExfTUFJTFRPID0gbWFrZVN0YXRlKF90ZXh0Lk1BSUxUTyk7IC8vIE1haWx0byBlbmRzIHdpdGggQ09MT05cblxuLy8gU2VjdXJlIHByb3RvY29scyAoZW5kIHdpdGggJ3MnKVxuU19QUk9UT0NPTF9GVFAub24oJ3MnLCBTX1BST1RPQ09MX1NFQ1VSRSkub24oJzonLCBTX0ZVTExfUFJPVE9DT0wpO1xuXG5TX1BST1RPQ09MX0hUVFAub24oJ3MnLCBTX1BST1RPQ09MX1NFQ1VSRSkub24oJzonLCBTX0ZVTExfUFJPVE9DT0wpO1xuXG5kb21haW5TdGF0ZXMucHVzaChTX1BST1RPQ09MX1NFQ1VSRSk7XG5cbi8vIEJlY29tZSBwcm90b2NvbCB0b2tlbnMgYWZ0ZXIgYSBDT0xPTlxuU19QUk9UT0NPTF9GSUxFLm9uKCc6JywgU19GVUxMX1BST1RPQ09MKTtcblNfUFJPVE9DT0xfU0VDVVJFLm9uKCc6JywgU19GVUxMX1BST1RPQ09MKTtcblNfTUFJTFRPLm9uKCc6JywgU19GVUxMX01BSUxUTyk7XG5cbi8vIExvY2FsaG9zdFxudmFyIHBhcnRpYWxMb2NhbGhvc3RTdGF0ZXMgPSAoMCwgX3N0YXRlLnN0YXRlaWZ5KSgnbG9jYWxob3N0JywgU19TVEFSVCwgX3RleHQuTE9DQUxIT1NULCBfdGV4dC5ET01BSU4pO1xuZG9tYWluU3RhdGVzLnB1c2guYXBwbHkoZG9tYWluU3RhdGVzLCBwYXJ0aWFsTG9jYWxob3N0U3RhdGVzKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlXG4vLyBET01BSU5zIG1ha2UgbW9yZSBET01BSU5zXG4vLyBOdW1iZXIgYW5kIGNoYXJhY3RlciB0cmFuc2l0aW9uc1xuU19TVEFSVC5vbihOVU1CRVJTLCBTX05VTSk7XG5TX05VTS5vbignLScsIFNfRE9NQUlOX0hZUEhFTikub24oTlVNQkVSUywgU19OVU0pLm9uKEFMUEhBTlVNLCBTX0RPTUFJTik7IC8vIG51bWJlciBiZWNvbWVzIERPTUFJTlxuXG5TX0RPTUFJTi5vbignLScsIFNfRE9NQUlOX0hZUEhFTikub24oQUxQSEFOVU0sIFNfRE9NQUlOKTtcblxuLy8gQWxsIHRoZSBnZW5lcmF0ZWQgc3RhdGVzIHNob3VsZCBoYXZlIGEganVtcCB0byBET01BSU5cbmZvciAodmFyIF9pID0gMDsgX2kgPCBkb21haW5TdGF0ZXMubGVuZ3RoOyBfaSsrKSB7XG5cdGRvbWFpblN0YXRlc1tfaV0ub24oJy0nLCBTX0RPTUFJTl9IWVBIRU4pLm9uKEFMUEhBTlVNLCBTX0RPTUFJTik7XG59XG5cblNfRE9NQUlOX0hZUEhFTi5vbignLScsIFNfRE9NQUlOX0hZUEhFTikub24oTlVNQkVSUywgU19ET01BSU4pLm9uKEFMUEhBTlVNLCBTX0RPTUFJTik7XG5cbi8vIFNldCBkZWZhdWx0IHRyYW5zaXRpb25cblNfU1RBUlQuZGVmYXVsdFRyYW5zaXRpb24gPSBtYWtlU3RhdGUoX3RleHQuU1lNKTtcblxuLyoqXG5cdEdpdmVuIGEgc3RyaW5nLCByZXR1cm5zIGFuIGFycmF5IG9mIFRPS0VOIGluc3RhbmNlcyByZXByZXNlbnRpbmcgdGhlXG5cdGNvbXBvc2l0aW9uIG9mIHRoYXQgc3RyaW5nLlxuXG5cdEBtZXRob2QgcnVuXG5cdEBwYXJhbSB7U3RyaW5nfSBzdHIgSW5wdXQgc3RyaW5nIHRvIHNjYW5cblx0QHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRPS0VOIGluc3RhbmNlc1xuKi9cbnZhciBydW4gPSBmdW5jdGlvbiBydW4oc3RyKSB7XG5cblx0Ly8gVGhlIHN0YXRlIG1hY2hpbmUgb25seSBsb29rcyBhdCBsb3dlcmNhc2Ugc3RyaW5ncy5cblx0Ly8gVGhpcyBzZWxlY3RpdmUgYHRvTG93ZXJDYXNlYCBpcyB1c2VkIGJlY2F1c2UgbG93ZXJjYXNpbmcgdGhlIGVudGlyZVxuXHQvLyBzdHJpbmcgY2F1c2VzIHRoZSBsZW5ndGggYW5kIGNoYXJhY3RlciBwb3NpdGlvbiB0byB2YXJ5IGluIHNvbWUgaW4gc29tZVxuXHQvLyBub24tRW5nbGlzaCBzdHJpbmdzLiBUaGlzIGhhcHBlbnMgb25seSBvbiBWOC1iYXNlZCBydW50aW1lcy5cblx0dmFyIGxvd2VyU3RyID0gc3RyLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuIGMudG9Mb3dlckNhc2UoKTtcblx0fSk7XG5cdHZhciBsZW4gPSBzdHIubGVuZ3RoO1xuXHR2YXIgdG9rZW5zID0gW107IC8vIHJldHVybiB2YWx1ZVxuXG5cdHZhciBjdXJzb3IgPSAwO1xuXG5cdC8vIFRva2VuaXplIHRoZSBzdHJpbmdcblx0d2hpbGUgKGN1cnNvciA8IGxlbikge1xuXHRcdHZhciBzdGF0ZSA9IFNfU1RBUlQ7XG5cdFx0dmFyIG5leHRTdGF0ZSA9IG51bGw7XG5cdFx0dmFyIHRva2VuTGVuZ3RoID0gMDtcblx0XHR2YXIgbGF0ZXN0QWNjZXB0aW5nID0gbnVsbDtcblx0XHR2YXIgc2luY2VBY2NlcHRzID0gLTE7XG5cblx0XHR3aGlsZSAoY3Vyc29yIDwgbGVuICYmIChuZXh0U3RhdGUgPSBzdGF0ZS5uZXh0KGxvd2VyU3RyW2N1cnNvcl0pKSkge1xuXHRcdFx0c3RhdGUgPSBuZXh0U3RhdGU7XG5cblx0XHRcdC8vIEtlZXAgdHJhY2sgb2YgdGhlIGxhdGVzdCBhY2NlcHRpbmcgc3RhdGVcblx0XHRcdGlmIChzdGF0ZS5hY2NlcHRzKCkpIHtcblx0XHRcdFx0c2luY2VBY2NlcHRzID0gMDtcblx0XHRcdFx0bGF0ZXN0QWNjZXB0aW5nID0gc3RhdGU7XG5cdFx0XHR9IGVsc2UgaWYgKHNpbmNlQWNjZXB0cyA+PSAwKSB7XG5cdFx0XHRcdHNpbmNlQWNjZXB0cysrO1xuXHRcdFx0fVxuXG5cdFx0XHR0b2tlbkxlbmd0aCsrO1xuXHRcdFx0Y3Vyc29yKys7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbmNlQWNjZXB0cyA8IDApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH0gLy8gU2hvdWxkIG5ldmVyIGhhcHBlblxuXG5cdFx0Ly8gUm9sbCBiYWNrIHRvIHRoZSBsYXRlc3QgYWNjZXB0aW5nIHN0YXRlXG5cdFx0Y3Vyc29yIC09IHNpbmNlQWNjZXB0cztcblx0XHR0b2tlbkxlbmd0aCAtPSBzaW5jZUFjY2VwdHM7XG5cblx0XHQvLyBHZXQgdGhlIGNsYXNzIGZvciB0aGUgbmV3IHRva2VuXG5cdFx0dmFyIFRPS0VOID0gbGF0ZXN0QWNjZXB0aW5nLmVtaXQoKTsgLy8gQ3VycmVudCB0b2tlbiBjbGFzc1xuXG5cdFx0Ly8gTm8gbW9yZSBqdW1wcywganVzdCBtYWtlIGEgbmV3IHRva2VuXG5cdFx0dG9rZW5zLnB1c2gobmV3IFRPS0VOKHN0ci5zdWJzdHIoY3Vyc29yIC0gdG9rZW5MZW5ndGgsIHRva2VuTGVuZ3RoKSkpO1xuXHR9XG5cblx0cmV0dXJuIHRva2Vucztcbn07XG5cbnZhciBzdGFydCA9IFNfU1RBUlQ7XG5leHBvcnRzLlN0YXRlID0gX3N0YXRlLkNoYXJhY3RlclN0YXRlO1xuZXhwb3J0cy5UT0tFTlMgPSBUT0tFTlM7XG5leHBvcnRzLnJ1biA9IHJ1bjtcbmV4cG9ydHMuc3RhcnQgPSBzdGFydDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0YXRlaWZ5ID0gZXhwb3J0cy5Ub2tlblN0YXRlID0gZXhwb3J0cy5DaGFyYWN0ZXJTdGF0ZSA9IHVuZGVmaW5lZDtcblxudmFyIF9jbGFzcyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NsYXNzJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlQ2xhc3MoKSB7XG5cdHJldHVybiBmdW5jdGlvbiAodENsYXNzKSB7XG5cdFx0dGhpcy5qID0gW107XG5cdFx0dGhpcy5UID0gdENsYXNzIHx8IG51bGw7XG5cdH07XG59XG5cbi8qKlxuXHRBIHNpbXBsZSBzdGF0ZSBtYWNoaW5lIHRoYXQgY2FuIGVtaXQgdG9rZW4gY2xhc3Nlc1xuXG5cdFRoZSBgamAgcHJvcGVydHkgaW4gdGhpcyBjbGFzcyByZWZlcnMgdG8gc3RhdGUganVtcHMuIEl0J3MgYVxuXHRtdWx0aWRpbWVuc2lvbmFsIGFycmF5IHdoZXJlIGZvciBlYWNoIGVsZW1lbnQ6XG5cblx0KiBpbmRleCBbMF0gaXMgYSBzeW1ib2wgb3IgY2xhc3Mgb2Ygc3ltYm9scyB0byB0cmFuc2l0aW9uIHRvLlxuXHQqIGluZGV4IFsxXSBpcyBhIFN0YXRlIGluc3RhbmNlIHdoaWNoIG1hdGNoZXNcblxuXHRUaGUgdHlwZSBvZiBzeW1ib2wgd2lsbCBkZXBlbmQgb24gdGhlIHRhcmdldCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhpcyBjbGFzcy5cblx0SW4gTGlua2lmeSwgd2UgaGF2ZSBhIHR3by1zdGFnZSBzY2FubmVyLiBFYWNoIHN0YWdlIHVzZXMgdGhpcyBzdGF0ZSBtYWNoaW5lXG5cdGJ1dCB3aXRoIGEgc2xpZ2hseSBkaWZmZXJlbnQgKHBvbHltb3JwaGljKSBpbXBsZW1lbnRhdGlvbi5cblxuXHRUaGUgYFRgIHByb3BlcnR5IHJlZmVycyB0byB0aGUgdG9rZW4gY2xhc3MuXG5cblx0VE9ETzogQ2FuIHRoZSBgb25gIGFuZCBgbmV4dGAgbWV0aG9kcyBiZSBjb21iaW5lZD9cblxuXHRAY2xhc3MgQmFzZVN0YXRlXG4qL1xudmFyIEJhc2VTdGF0ZSA9IGNyZWF0ZVN0YXRlQ2xhc3MoKTtcbkJhc2VTdGF0ZS5wcm90b3R5cGUgPSB7XG5cdGRlZmF1bHRUcmFuc2l0aW9uOiBmYWxzZSxcblxuXHQvKipcbiBcdEBtZXRob2QgY29uc3RydWN0b3JcbiBcdEBwYXJhbSB7Q2xhc3N9IHRDbGFzcyBQYXNzIGluIHRoZSBraW5kIG9mIHRva2VuIHRvIGVtaXQgaWYgdGhlcmUgYXJlXG4gXHRcdG5vIGp1bXBzIGFmdGVyIHRoaXMgc3RhdGUgYW5kIHRoZSBzdGF0ZSBpcyBhY2NlcHRpbmcuXG4gKi9cblxuXHQvKipcbiBcdE9uIHRoZSBnaXZlbiBzeW1ib2wocyksIHRoaXMgbWFjaGluZSBzaG91bGQgZ28gdG8gdGhlIGdpdmVuIHN0YXRlXG4gXHRcdEBtZXRob2Qgb25cbiBcdEBwYXJhbSB7QXJyYXl8TWl4ZWR9IHN5bWJvbFxuIFx0QHBhcmFtIHtCYXNlU3RhdGV9IHN0YXRlIE5vdGUgdGhhdCB0aGUgdHlwZSBvZiB0aGlzIHN0YXRlIHNob3VsZCBiZSB0aGVcbiBcdFx0c2FtZSBhcyB0aGUgY3VycmVudCBpbnN0YW5jZSAoaS5lLiwgZG9uJ3QgcGFzcyBpbiBhIGRpZmZlcmVudFxuIFx0XHRzdWJjbGFzcylcbiAqL1xuXHRvbjogZnVuY3Rpb24gb24oc3ltYm9sLCBzdGF0ZSkge1xuXHRcdGlmIChzeW1ib2wgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2wubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5qLnB1c2goW3N5bWJvbFtpXSwgc3RhdGVdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHR0aGlzLmoucHVzaChbc3ltYm9sLCBzdGF0ZV0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cblx0LyoqXG4gXHRHaXZlbiB0aGUgbmV4dCBpdGVtLCByZXR1cm5zIG5leHQgc3RhdGUgZm9yIHRoYXQgaXRlbVxuIFx0QG1ldGhvZCBuZXh0XG4gXHRAcGFyYW0ge01peGVkfSBpdGVtIFNob3VsZCBiZSBhbiBpbnN0YW5jZSBvZiB0aGUgc3ltYm9scyBoYW5kbGVkIGJ5XG4gXHRcdHRoaXMgcGFydGljdWxhciBtYWNoaW5lLlxuIFx0QHJldHVybiB7U3RhdGV9IHN0YXRlIFJldHVybnMgZmFsc2UgaWYgbm8ganVtcHMgYXJlIGF2YWlsYWJsZVxuICovXG5cdG5leHQ6IGZ1bmN0aW9uIG5leHQoaXRlbSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5qLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIganVtcCA9IHRoaXMualtpXTtcblx0XHRcdHZhciBzeW1ib2wgPSBqdW1wWzBdOyAvLyBOZXh0IGl0ZW0gdG8gY2hlY2sgZm9yXG5cdFx0XHR2YXIgc3RhdGUgPSBqdW1wWzFdOyAvLyBTdGF0ZSB0byBqdW1wIHRvIGlmIGl0ZW1zIG1hdGNoXG5cblx0XHRcdC8vIGNvbXBhcmUgaXRlbSB3aXRoIHN5bWJvbFxuXHRcdFx0aWYgKHRoaXMudGVzdChpdGVtLCBzeW1ib2wpKSB7XG5cdFx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBOb3doZXJlIGxlZnQgdG8ganVtcCFcblx0XHRyZXR1cm4gdGhpcy5kZWZhdWx0VHJhbnNpdGlvbjtcblx0fSxcblxuXG5cdC8qKlxuIFx0RG9lcyB0aGlzIHN0YXRlIGFjY2VwdD9cbiBcdGB0cnVlYCBvbmx5IG9mIGB0aGlzLlRgIGV4aXN0c1xuIFx0XHRAbWV0aG9kIGFjY2VwdHNcbiBcdEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblx0YWNjZXB0czogZnVuY3Rpb24gYWNjZXB0cygpIHtcblx0XHRyZXR1cm4gISF0aGlzLlQ7XG5cdH0sXG5cblxuXHQvKipcbiBcdERldGVybWluZSB3aGV0aGVyIGEgZ2l2ZW4gaXRlbSBcInN5bWJvbGl6ZXNcIiB0aGUgc3ltYm9sLCB3aGVyZSBzeW1ib2wgaXNcbiBcdGEgY2xhc3Mgb2YgaXRlbXMgaGFuZGxlZCBieSB0aGlzIHN0YXRlIG1hY2hpbmUuXG4gXHRcdFRoaXMgbWV0aG9kIHNob3VsZCBiZSBvdmVycmlkZW4gaW4gZXh0ZW5kZWQgY2xhc3Nlcy5cbiBcdFx0QG1ldGhvZCB0ZXN0XG4gXHRAcGFyYW0ge01peGVkfSBpdGVtIERvZXMgdGhpcyBpdGVtIG1hdGNoIHRoZSBnaXZlbiBzeW1ib2w/XG4gXHRAcGFyYW0ge01peGVkfSBzeW1ib2xcbiBcdEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblx0dGVzdDogZnVuY3Rpb24gdGVzdChpdGVtLCBzeW1ib2wpIHtcblx0XHRyZXR1cm4gaXRlbSA9PT0gc3ltYm9sO1xuXHR9LFxuXG5cblx0LyoqXG4gXHRFbWl0IHRoZSB0b2tlbiBmb3IgdGhpcyBTdGF0ZSAoanVzdCByZXR1cm4gaXQgaW4gdGhpcyBjYXNlKVxuIFx0SWYgdGhpcyBlbWl0cyBhIHRva2VuLCB0aGlzIGluc3RhbmNlIGlzIGFuIGFjY2VwdGluZyBzdGF0ZVxuIFx0QG1ldGhvZCBlbWl0XG4gXHRAcmV0dXJuIHtDbGFzc30gVFxuICovXG5cdGVtaXQ6IGZ1bmN0aW9uIGVtaXQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuVDtcblx0fVxufTtcblxuLyoqXG5cdFN0YXRlIG1hY2hpbmUgZm9yIHN0cmluZy1iYXNlZCBpbnB1dFxuXG5cdEBjbGFzcyBDaGFyYWN0ZXJTdGF0ZVxuXHRAZXh0ZW5kcyBCYXNlU3RhdGVcbiovXG52YXIgQ2hhcmFjdGVyU3RhdGUgPSAoMCwgX2NsYXNzLmluaGVyaXRzKShCYXNlU3RhdGUsIGNyZWF0ZVN0YXRlQ2xhc3MoKSwge1xuXHQvKipcbiBcdERvZXMgdGhlIGdpdmVuIGNoYXJhY3RlciBtYXRjaCB0aGUgZ2l2ZW4gY2hhcmFjdGVyIG9yIHJlZ3VsYXJcbiBcdGV4cHJlc3Npb24/XG4gXHRcdEBtZXRob2QgdGVzdFxuIFx0QHBhcmFtIHtTdHJpbmd9IGNoYXJcbiBcdEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gY2hhck9yUmVnRXhwXG4gXHRAcmV0dXJuIHtCb29sZWFufVxuICovXG5cdHRlc3Q6IGZ1bmN0aW9uIHRlc3QoY2hhcmFjdGVyLCBjaGFyT3JSZWdFeHApIHtcblx0XHRyZXR1cm4gY2hhcmFjdGVyID09PSBjaGFyT3JSZWdFeHAgfHwgY2hhck9yUmVnRXhwIGluc3RhbmNlb2YgUmVnRXhwICYmIGNoYXJPclJlZ0V4cC50ZXN0KGNoYXJhY3Rlcik7XG5cdH1cbn0pO1xuXG4vKipcblx0U3RhdGUgbWFjaGluZSBmb3IgaW5wdXQgaW4gdGhlIGZvcm0gb2YgVGV4dFRva2Vuc1xuXG5cdEBjbGFzcyBUb2tlblN0YXRlXG5cdEBleHRlbmRzIEJhc2VTdGF0ZVxuKi9cbnZhciBUb2tlblN0YXRlID0gKDAsIF9jbGFzcy5pbmhlcml0cykoQmFzZVN0YXRlLCBjcmVhdGVTdGF0ZUNsYXNzKCksIHtcblxuXHQvKipcbiAgKiBTaW1pbGFyIHRvIGBvbmAsIGJ1dCByZXR1cm5zIHRoZSBzdGF0ZSB0aGUgcmVzdWx0cyBpbiB0aGUgdHJhbnNpdGlvbiBmcm9tXG4gICogdGhlIGdpdmVuIGl0ZW1cbiAgKiBAbWV0aG9kIGp1bXBcbiAgKiBAcGFyYW0ge01peGVkfSBpdGVtXG4gICogQHBhcmFtIHtUb2tlbn0gW3Rva2VuXVxuICAqIEByZXR1cm4gc3RhdGVcbiAgKi9cblx0anVtcDogZnVuY3Rpb24ganVtcCh0b2tlbikge1xuXHRcdHZhciB0Q2xhc3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG5cblx0XHR2YXIgc3RhdGUgPSB0aGlzLm5leHQobmV3IHRva2VuKCcnKSk7IC8vIGR1bW15IHRlbXAgdG9rZW5cblx0XHRpZiAoc3RhdGUgPT09IHRoaXMuZGVmYXVsdFRyYW5zaXRpb24pIHtcblx0XHRcdC8vIE1ha2UgYSBuZXcgc3RhdGUhXG5cdFx0XHRzdGF0ZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRDbGFzcyk7XG5cdFx0XHR0aGlzLm9uKHRva2VuLCBzdGF0ZSk7XG5cdFx0fSBlbHNlIGlmICh0Q2xhc3MpIHtcblx0XHRcdHN0YXRlLlQgPSB0Q2xhc3M7XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcblxuXG5cdC8qKlxuIFx0SXMgdGhlIGdpdmVuIHRva2VuIGFuIGluc3RhbmNlIG9mIHRoZSBnaXZlbiB0b2tlbiBjbGFzcz9cbiBcdFx0QG1ldGhvZCB0ZXN0XG4gXHRAcGFyYW0ge1RleHRUb2tlbn0gdG9rZW5cbiBcdEBwYXJhbSB7Q2xhc3N9IHRva2VuQ2xhc3NcbiBcdEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblx0dGVzdDogZnVuY3Rpb24gdGVzdCh0b2tlbiwgdG9rZW5DbGFzcykge1xuXHRcdHJldHVybiB0b2tlbiBpbnN0YW5jZW9mIHRva2VuQ2xhc3M7XG5cdH1cbn0pO1xuXG4vKipcblx0R2l2ZW4gYSBub24tZW1wdHkgdGFyZ2V0IHN0cmluZywgZ2VuZXJhdGVzIHN0YXRlcyAoaWYgcmVxdWlyZWQpIGZvciBlYWNoXG5cdGNvbnNlY3V0aXZlIHN1YnN0cmluZyBvZiBjaGFyYWN0ZXJzIGluIHN0ciBzdGFydGluZyBmcm9tIHRoZSBiZWdpbm5pbmcgb2Zcblx0dGhlIHN0cmluZy4gVGhlIGZpbmFsIHN0YXRlIHdpbGwgaGF2ZSBhIHNwZWNpYWwgdmFsdWUsIGFzIHNwZWNpZmllZCBpblxuXHRvcHRpb25zLiBBbGwgb3RoZXIgXCJpbiBiZXR3ZWVuXCIgc3Vic3RyaW5ncyB3aWxsIGhhdmUgYSBkZWZhdWx0IGVuZCBzdGF0ZS5cblxuXHRUaGlzIHR1cm5zIHRoZSBzdGF0ZSBtYWNoaW5lIGludG8gYSBUcmllLWxpa2UgZGF0YSBzdHJ1Y3R1cmUgKHJhdGhlciB0aGFuIGFcblx0aW50ZWxsaWdlbnRseS1kZXNpZ25lZCBERkEpLlxuXG5cdE5vdGUgdGhhdCBJIGhhdmVuJ3QgcmVhbGx5IHRyaWVkIHRoZXNlIHdpdGggYW55IHN0cmluZ3Mgb3RoZXIgdGhhblxuXHRET01BSU4uXG5cblx0QHBhcmFtIHtTdHJpbmd9IHN0clxuXHRAcGFyYW0ge0NoYXJhY3RlclN0YXRlfSBzdGFydCBTdGF0ZSB0byBqdW1wIGZyb20gdGhlIGZpcnN0IGNoYXJhY3RlclxuXHRAcGFyYW0ge0NsYXNzfSBlbmRUb2tlbiBUb2tlbiBjbGFzcyB0byBlbWl0IHdoZW4gdGhlIGdpdmVuIHN0cmluZyBoYXMgYmVlblxuXHRcdG1hdGNoZWQgYW5kIG5vIG1vcmUganVtcHMgZXhpc3QuXG5cdEBwYXJhbSB7Q2xhc3N9IGRlZmF1bHRUb2tlbiBcIkZpbGxlciB0b2tlblwiLCBvciB3aGljaCB0b2tlbiB0eXBlIHRvIGVtaXQgd2hlblxuXHRcdHdlIGRvbid0IGhhdmUgYSBmdWxsIG1hdGNoXG5cdEByZXR1cm4ge0FycmF5fSBsaXN0IG9mIG5ld2x5LWNyZWF0ZWQgc3RhdGVzXG4qL1xuZnVuY3Rpb24gc3RhdGVpZnkoc3RyLCBzdGFydCwgZW5kVG9rZW4sIGRlZmF1bHRUb2tlbikge1xuXHR2YXIgaSA9IDAsXG5cdCAgICBsZW4gPSBzdHIubGVuZ3RoLFxuXHQgICAgc3RhdGUgPSBzdGFydCxcblx0ICAgIG5ld1N0YXRlcyA9IFtdLFxuXHQgICAgbmV4dFN0YXRlID0gdm9pZCAwO1xuXG5cdC8vIEZpbmQgdGhlIG5leHQgc3RhdGUgd2l0aG91dCBhIGp1bXAgdG8gdGhlIG5leHQgY2hhcmFjdGVyXG5cdHdoaWxlIChpIDwgbGVuICYmIChuZXh0U3RhdGUgPSBzdGF0ZS5uZXh0KHN0cltpXSkpKSB7XG5cdFx0c3RhdGUgPSBuZXh0U3RhdGU7XG5cdFx0aSsrO1xuXHR9XG5cblx0aWYgKGkgPj0gbGVuKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9IC8vIG5vIG5ldyB0b2tlbnMgd2VyZSBhZGRlZFxuXG5cdHdoaWxlIChpIDwgbGVuIC0gMSkge1xuXHRcdG5leHRTdGF0ZSA9IG5ldyBDaGFyYWN0ZXJTdGF0ZShkZWZhdWx0VG9rZW4pO1xuXHRcdG5ld1N0YXRlcy5wdXNoKG5leHRTdGF0ZSk7XG5cdFx0c3RhdGUub24oc3RyW2ldLCBuZXh0U3RhdGUpO1xuXHRcdHN0YXRlID0gbmV4dFN0YXRlO1xuXHRcdGkrKztcblx0fVxuXG5cdG5leHRTdGF0ZSA9IG5ldyBDaGFyYWN0ZXJTdGF0ZShlbmRUb2tlbik7XG5cdG5ld1N0YXRlcy5wdXNoKG5leHRTdGF0ZSk7XG5cdHN0YXRlLm9uKHN0cltsZW4gLSAxXSwgbmV4dFN0YXRlKTtcblxuXHRyZXR1cm4gbmV3U3RhdGVzO1xufVxuXG5leHBvcnRzLkNoYXJhY3RlclN0YXRlID0gQ2hhcmFjdGVyU3RhdGU7XG5leHBvcnRzLlRva2VuU3RhdGUgPSBUb2tlblN0YXRlO1xuZXhwb3J0cy5zdGF0ZWlmeSA9IHN0YXRlaWZ5OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gY3JlYXRlVG9rZW5DbGFzcygpIHtcblx0cmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0dGhpcy52ID0gdmFsdWU7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnRzLmNyZWF0ZVRva2VuQ2xhc3MgPSBjcmVhdGVUb2tlbkNsYXNzOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5URVhUID0gZXhwb3J0cy5OTCA9IGV4cG9ydHMuRU1BSUwgPSBleHBvcnRzLk1BSUxUT0VNQUlMID0gZXhwb3J0cy5CYXNlID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZVRva2VuQ2xhc3MgPSByZXF1aXJlKCcuL2NyZWF0ZS10b2tlbi1jbGFzcycpO1xuXG52YXIgX2NsYXNzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvY2xhc3MnKTtcblxudmFyIF90ZXh0ID0gcmVxdWlyZSgnLi90ZXh0Jyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0TXVsdGktVG9rZW5zXG5cdFRva2VucyBjb21wb3NlZCBvZiBhcnJheXMgb2YgVGV4dFRva2Vuc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBJcyB0aGUgZ2l2ZW4gdG9rZW4gYSB2YWxpZCBkb21haW4gdG9rZW4/XG4vLyBTaG91bGQgbnVtcyBiZSBpbmNsdWRlZCBoZXJlP1xuZnVuY3Rpb24gaXNEb21haW5Ub2tlbih0b2tlbikge1xuXHRyZXR1cm4gdG9rZW4gaW5zdGFuY2VvZiBfdGV4dC5ET01BSU4gfHwgdG9rZW4gaW5zdGFuY2VvZiBfdGV4dC5UTEQ7XG59XG5cbi8qKlxuXHRBYnN0cmFjdCBjbGFzcyB1c2VkIGZvciBtYW51ZmFjdHVyaW5nIHRva2VucyBvZiB0ZXh0IHRva2Vucy4gVGhhdCBpcyByYXRoZXJcblx0dGhhbiB0aGUgdmFsdWUgZm9yIGEgdG9rZW4gYmVpbmcgYSBzbWFsbCBzdHJpbmcgb2YgdGV4dCwgaXQncyB2YWx1ZSBhbiBhcnJheVxuXHRvZiB0ZXh0IHRva2Vucy5cblxuXHRVc2VkIGZvciBncm91cGluZyB0b2dldGhlciBVUkxzLCBlbWFpbHMsIGhhc2h0YWdzLCBhbmQgb3RoZXIgcG90ZW50aWFsXG5cdGNyZWF0aW9ucy5cblxuXHRAY2xhc3MgTXVsdGlUb2tlblxuXHRAYWJzdHJhY3RcbiovXG52YXIgTXVsdGlUb2tlbiA9ICgwLCBfY3JlYXRlVG9rZW5DbGFzcy5jcmVhdGVUb2tlbkNsYXNzKSgpO1xuXG5NdWx0aVRva2VuLnByb3RvdHlwZSA9IHtcblx0LyoqXG4gXHRTdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB0eXBlIGZvciB0aGlzIHRva2VuXG4gXHRAcHJvcGVydHkgdHlwZVxuIFx0QGRlZmF1bHQgJ1RPS0VOJ1xuICovXG5cdHR5cGU6ICd0b2tlbicsXG5cblx0LyoqXG4gXHRJcyB0aGlzIG11bHRpdG9rZW4gYSBsaW5rP1xuIFx0QHByb3BlcnR5IGlzTGlua1xuIFx0QGRlZmF1bHQgZmFsc2VcbiAqL1xuXHRpc0xpbms6IGZhbHNlLFxuXG5cdC8qKlxuIFx0UmV0dXJuIHRoZSBzdHJpbmcgdGhpcyB0b2tlbiByZXByZXNlbnRzLlxuIFx0QG1ldGhvZCB0b1N0cmluZ1xuIFx0QHJldHVybiB7U3RyaW5nfVxuICovXG5cdHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnYubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdC5wdXNoKHRoaXMudltpXS50b1N0cmluZygpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcnKTtcblx0fSxcblxuXG5cdC8qKlxuIFx0V2hhdCBzaG91bGQgdGhlIHZhbHVlIGZvciB0aGlzIHRva2VuIGJlIGluIHRoZSBgaHJlZmAgSFRNTCBhdHRyaWJ1dGU/XG4gXHRSZXR1cm5zIHRoZSBgLnRvU3RyaW5nYCB2YWx1ZSBieSBkZWZhdWx0LlxuIFx0XHRAbWV0aG9kIHRvSHJlZlxuIFx0QHJldHVybiB7U3RyaW5nfVxuICovXG5cdHRvSHJlZjogZnVuY3Rpb24gdG9IcmVmKCkge1xuXHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG5cdH0sXG5cblxuXHQvKipcbiBcdFJldHVybnMgYSBoYXNoIG9mIHJlbGV2YW50IHZhbHVlcyBmb3IgdGhpcyB0b2tlbiwgd2hpY2ggaW5jbHVkZXMga2V5c1xuIFx0KiB0eXBlIC0gS2luZCBvZiB0b2tlbiAoJ3VybCcsICdlbWFpbCcsIGV0Yy4pXG4gXHQqIHZhbHVlIC0gT3JpZ2luYWwgdGV4dFxuIFx0KiBocmVmIC0gVGhlIHZhbHVlIHRoYXQgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBhbmNob3IgdGFnJ3MgaHJlZlxuIFx0XHRhdHRyaWJ1dGVcbiBcdFx0QG1ldGhvZCB0b09iamVjdFxuIFx0QHBhcmFtIHtTdHJpbmd9IFtwcm90b2NvbF0gYCdodHRwJ2AgYnkgZGVmYXVsdFxuIFx0QHJldHVybiB7T2JqZWN0fVxuICovXG5cdHRvT2JqZWN0OiBmdW5jdGlvbiB0b09iamVjdCgpIHtcblx0XHR2YXIgcHJvdG9jb2wgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdodHRwJztcblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiB0aGlzLnR5cGUsXG5cdFx0XHR2YWx1ZTogdGhpcy50b1N0cmluZygpLFxuXHRcdFx0aHJlZjogdGhpcy50b0hyZWYocHJvdG9jb2wpXG5cdFx0fTtcblx0fVxufTtcblxuLyoqXG5cdFJlcHJlc2VudHMgYW4gYXJiaXRyYXJpbHkgbWFpbHRvIGVtYWlsIGFkZHJlc3Mgd2l0aCB0aGUgcHJlZml4IGluY2x1ZGVkXG5cdEBjbGFzcyBNQUlMVE9cblx0QGV4dGVuZHMgTXVsdGlUb2tlblxuKi9cbnZhciBNQUlMVE9FTUFJTCA9ICgwLCBfY2xhc3MuaW5oZXJpdHMpKE11bHRpVG9rZW4sICgwLCBfY3JlYXRlVG9rZW5DbGFzcy5jcmVhdGVUb2tlbkNsYXNzKSgpLCB7XG5cdHR5cGU6ICdlbWFpbCcsXG5cdGlzTGluazogdHJ1ZVxufSk7XG5cbi8qKlxuXHRSZXByZXNlbnRzIGEgbGlzdCBvZiB0b2tlbnMgbWFraW5nIHVwIGEgdmFsaWQgZW1haWwgYWRkcmVzc1xuXHRAY2xhc3MgRU1BSUxcblx0QGV4dGVuZHMgTXVsdGlUb2tlblxuKi9cbnZhciBFTUFJTCA9ICgwLCBfY2xhc3MuaW5oZXJpdHMpKE11bHRpVG9rZW4sICgwLCBfY3JlYXRlVG9rZW5DbGFzcy5jcmVhdGVUb2tlbkNsYXNzKSgpLCB7XG5cdHR5cGU6ICdlbWFpbCcsXG5cdGlzTGluazogdHJ1ZSxcblx0dG9IcmVmOiBmdW5jdGlvbiB0b0hyZWYoKSB7XG5cdFx0cmV0dXJuICdtYWlsdG86JyArIHRoaXMudG9TdHJpbmcoKTtcblx0fVxufSk7XG5cbi8qKlxuXHRSZXByZXNlbnRzIHNvbWUgcGxhaW4gdGV4dFxuXHRAY2xhc3MgVEVYVFxuXHRAZXh0ZW5kcyBNdWx0aVRva2VuXG4qL1xudmFyIFRFWFQgPSAoMCwgX2NsYXNzLmluaGVyaXRzKShNdWx0aVRva2VuLCAoMCwgX2NyZWF0ZVRva2VuQ2xhc3MuY3JlYXRlVG9rZW5DbGFzcykoKSwgeyB0eXBlOiAndGV4dCcgfSk7XG5cbi8qKlxuXHRNdWx0aS1saW5lYnJlYWsgdG9rZW4gLSByZXByZXNlbnRzIGEgbGluZSBicmVha1xuXHRAY2xhc3MgTkxcblx0QGV4dGVuZHMgTXVsdGlUb2tlblxuKi9cbnZhciBOTCA9ICgwLCBfY2xhc3MuaW5oZXJpdHMpKE11bHRpVG9rZW4sICgwLCBfY3JlYXRlVG9rZW5DbGFzcy5jcmVhdGVUb2tlbkNsYXNzKSgpLCB7IHR5cGU6ICdubCcgfSk7XG5cbi8qKlxuXHRSZXByZXNlbnRzIGEgbGlzdCBvZiB0b2tlbnMgbWFraW5nIHVwIGEgdmFsaWQgVVJMXG5cdEBjbGFzcyBVUkxcblx0QGV4dGVuZHMgTXVsdGlUb2tlblxuKi9cbnZhciBVUkwgPSAoMCwgX2NsYXNzLmluaGVyaXRzKShNdWx0aVRva2VuLCAoMCwgX2NyZWF0ZVRva2VuQ2xhc3MuY3JlYXRlVG9rZW5DbGFzcykoKSwge1xuXHR0eXBlOiAndXJsJyxcblx0aXNMaW5rOiB0cnVlLFxuXG5cdC8qKlxuIFx0TG93ZXJjYXNlcyByZWxldmFudCBwYXJ0cyBvZiB0aGUgZG9tYWluIGFuZCBhZGRzIHRoZSBwcm90b2NvbCBpZlxuIFx0cmVxdWlyZWQuIE5vdGUgdGhhdCB0aGlzIHdpbGwgbm90IGVzY2FwZSB1bnNhZmUgSFRNTCBjaGFyYWN0ZXJzIGluIHRoZVxuIFx0VVJMLlxuIFx0XHRAbWV0aG9kIGhyZWZcbiBcdEBwYXJhbSB7U3RyaW5nfSBwcm90b2NvbFxuIFx0QHJldHVybiB7U3RyaW5nfVxuICovXG5cdHRvSHJlZjogZnVuY3Rpb24gdG9IcmVmKCkge1xuXHRcdHZhciBwcm90b2NvbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2h0dHAnO1xuXG5cdFx0dmFyIGhhc1Byb3RvY29sID0gZmFsc2U7XG5cdFx0dmFyIGhhc1NsYXNoU2xhc2ggPSBmYWxzZTtcblx0XHR2YXIgdG9rZW5zID0gdGhpcy52O1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHR2YXIgaSA9IDA7XG5cblx0XHQvLyBNYWtlIHRoZSBmaXJzdCBwYXJ0IG9mIHRoZSBkb21haW4gbG93ZXJjYXNlXG5cdFx0Ly8gTG93ZXJjYXNlIHByb3RvY29sXG5cdFx0d2hpbGUgKHRva2Vuc1tpXSBpbnN0YW5jZW9mIF90ZXh0LlBST1RPQ09MKSB7XG5cdFx0XHRoYXNQcm90b2NvbCA9IHRydWU7XG5cdFx0XHRyZXN1bHQucHVzaCh0b2tlbnNbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKTtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHQvLyBTa2lwIHNsYXNoLXNsYXNoXG5cdFx0d2hpbGUgKHRva2Vuc1tpXSBpbnN0YW5jZW9mIF90ZXh0LlNMQVNIKSB7XG5cdFx0XHRoYXNTbGFzaFNsYXNoID0gdHJ1ZTtcblx0XHRcdHJlc3VsdC5wdXNoKHRva2Vuc1tpXS50b1N0cmluZygpKTtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHQvLyBMb3dlcmNhc2UgYWxsIG90aGVyIGNoYXJhY3RlcnMgaW4gdGhlIGRvbWFpblxuXHRcdHdoaWxlIChpc0RvbWFpblRva2VuKHRva2Vuc1tpXSkpIHtcblx0XHRcdHJlc3VsdC5wdXNoKHRva2Vuc1tpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdC8vIExlYXZlIGFsbCBvdGhlciBjaGFyYWN0ZXJzIGFzIHRoZXkgd2VyZSB3cml0dGVuXG5cdFx0Zm9yICg7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdC5wdXNoKHRva2Vuc1tpXS50b1N0cmluZygpKTtcblx0XHR9XG5cblx0XHRyZXN1bHQgPSByZXN1bHQuam9pbignJyk7XG5cblx0XHRpZiAoIShoYXNQcm90b2NvbCB8fCBoYXNTbGFzaFNsYXNoKSkge1xuXHRcdFx0cmVzdWx0ID0gcHJvdG9jb2wgKyAnOi8vJyArIHJlc3VsdDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LFxuXHRoYXNQcm90b2NvbDogZnVuY3Rpb24gaGFzUHJvdG9jb2woKSB7XG5cdFx0cmV0dXJuIHRoaXMudlswXSBpbnN0YW5jZW9mIF90ZXh0LlBST1RPQ09MO1xuXHR9XG59KTtcblxuZXhwb3J0cy5CYXNlID0gTXVsdGlUb2tlbjtcbmV4cG9ydHMuTUFJTFRPRU1BSUwgPSBNQUlMVE9FTUFJTDtcbmV4cG9ydHMuRU1BSUwgPSBFTUFJTDtcbmV4cG9ydHMuTkwgPSBOTDtcbmV4cG9ydHMuVEVYVCA9IFRFWFQ7XG5leHBvcnRzLlVSTCA9IFVSTDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFNUEVSU0FORCA9IGV4cG9ydHMuQ0xPU0VQQVJFTiA9IGV4cG9ydHMuQ0xPU0VBTkdMRUJSQUNLRVQgPSBleHBvcnRzLkNMT1NFQlJBQ0tFVCA9IGV4cG9ydHMuQ0xPU0VCUkFDRSA9IGV4cG9ydHMuT1BFTlBBUkVOID0gZXhwb3J0cy5PUEVOQU5HTEVCUkFDS0VUID0gZXhwb3J0cy5PUEVOQlJBQ0tFVCA9IGV4cG9ydHMuT1BFTkJSQUNFID0gZXhwb3J0cy5XUyA9IGV4cG9ydHMuVExEID0gZXhwb3J0cy5TWU0gPSBleHBvcnRzLlVOREVSU0NPUkUgPSBleHBvcnRzLlNMQVNIID0gZXhwb3J0cy5NQUlMVE8gPSBleHBvcnRzLlBST1RPQ09MID0gZXhwb3J0cy5RVUVSWSA9IGV4cG9ydHMuUE9VTkQgPSBleHBvcnRzLlBMVVMgPSBleHBvcnRzLk5VTSA9IGV4cG9ydHMuTkwgPSBleHBvcnRzLkxPQ0FMSE9TVCA9IGV4cG9ydHMuUFVOQ1RVQVRJT04gPSBleHBvcnRzLkRPVCA9IGV4cG9ydHMuQ09MT04gPSBleHBvcnRzLkFUID0gZXhwb3J0cy5ET01BSU4gPSBleHBvcnRzLkJhc2UgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlVG9rZW5DbGFzcyA9IHJlcXVpcmUoJy4vY3JlYXRlLXRva2VuLWNsYXNzJyk7XG5cbnZhciBfY2xhc3MgPSByZXF1aXJlKCcuLi8uLi91dGlscy9jbGFzcycpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFRleHQgVG9rZW5zXG5cdFRva2VucyBjb21wb3NlZCBvZiBzdHJpbmdzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuXHRBYnN0cmFjdCBjbGFzcyB1c2VkIGZvciBtYW51ZmFjdHVyaW5nIHRleHQgdG9rZW5zLlxuXHRQYXNzIGluIHRoZSB2YWx1ZSB0aGlzIHRva2VuIHJlcHJlc2VudHNcblxuXHRAY2xhc3MgVGV4dFRva2VuXG5cdEBhYnN0cmFjdFxuKi9cbnZhciBUZXh0VG9rZW4gPSAoMCwgX2NyZWF0ZVRva2VuQ2xhc3MuY3JlYXRlVG9rZW5DbGFzcykoKTtcblRleHRUb2tlbi5wcm90b3R5cGUgPSB7XG5cdHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy52ICsgJyc7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGluaGVyaXRzVG9rZW4odmFsdWUpIHtcblx0dmFyIHByb3BzID0gdmFsdWUgPyB7IHY6IHZhbHVlIH0gOiB7fTtcblx0cmV0dXJuICgwLCBfY2xhc3MuaW5oZXJpdHMpKFRleHRUb2tlbiwgKDAsIF9jcmVhdGVUb2tlbkNsYXNzLmNyZWF0ZVRva2VuQ2xhc3MpKCksIHByb3BzKTtcbn1cblxuLyoqXG5cdEEgdmFsaWQgZG9tYWluIHRva2VuXG5cdEBjbGFzcyBET01BSU5cblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIERPTUFJTiA9IGluaGVyaXRzVG9rZW4oKTtcblxuLyoqXG5cdEBjbGFzcyBBVFxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgQVQgPSBpbmhlcml0c1Rva2VuKCdAJyk7XG5cbi8qKlxuXHRSZXByZXNlbnRzIGEgc2luZ2xlIGNvbG9uIGA6YCBjaGFyYWN0ZXJcblxuXHRAY2xhc3MgQ09MT05cblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIENPTE9OID0gaW5oZXJpdHNUb2tlbignOicpO1xuXG4vKipcblx0QGNsYXNzIERPVFxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgRE9UID0gaW5oZXJpdHNUb2tlbignLicpO1xuXG4vKipcblx0QSBjaGFyYWN0ZXIgY2xhc3MgdGhhdCBjYW4gc3Vycm91bmQgdGhlIFVSTCwgYnV0IHdoaWNoIHRoZSBVUkwgY2Fubm90IGJlZ2luXG5cdG9yIGVuZCB3aXRoLiBEb2VzIG5vdCBpbmNsdWRlIGNlcnRhaW4gRW5nbGlzaCBwdW5jdHVhdGlvbiBsaWtlIHBhcmVudGhlc2VzLlxuXG5cdEBjbGFzcyBQVU5DVFVBVElPTlxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgUFVOQ1RVQVRJT04gPSBpbmhlcml0c1Rva2VuKCk7XG5cbi8qKlxuXHRUaGUgd29yZCBsb2NhbGhvc3QgKGJ5IGl0c2VsZilcblx0QGNsYXNzIExPQ0FMSE9TVFxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgTE9DQUxIT1NUID0gaW5oZXJpdHNUb2tlbigpO1xuXG4vKipcblx0TmV3bGluZSB0b2tlblxuXHRAY2xhc3MgTkxcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIE5MID0gaW5oZXJpdHNUb2tlbignXFxuJyk7XG5cbi8qKlxuXHRAY2xhc3MgTlVNXG5cdEBleHRlbmRzIFRleHRUb2tlblxuKi9cbnZhciBOVU0gPSBpbmhlcml0c1Rva2VuKCk7XG5cbi8qKlxuXHRAY2xhc3MgUExVU1xuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgUExVUyA9IGluaGVyaXRzVG9rZW4oJysnKTtcblxuLyoqXG5cdEBjbGFzcyBQT1VORFxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgUE9VTkQgPSBpbmhlcml0c1Rva2VuKCcjJyk7XG5cbi8qKlxuXHRSZXByZXNlbnRzIGEgd2ViIFVSTCBwcm90b2NvbC4gU3VwcG9ydGVkIHR5cGVzIGluY2x1ZGVcblxuXHQqIGBodHRwOmBcblx0KiBgaHR0cHM6YFxuXHQqIGBmdHA6YFxuXHQqIGBmdHBzOmBcblxuXHRAY2xhc3MgUFJPVE9DT0xcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIFBST1RPQ09MID0gaW5oZXJpdHNUb2tlbigpO1xuXG4vKipcblx0UmVwcmVzZW50cyB0aGUgc3RhcnQgb2YgdGhlIGVtYWlsIFVSSSBwcm90b2NvbFxuXG5cdEBjbGFzcyBNQUlMVE9cblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIE1BSUxUTyA9IGluaGVyaXRzVG9rZW4oJ21haWx0bzonKTtcblxuLyoqXG5cdEBjbGFzcyBRVUVSWVxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgUVVFUlkgPSBpbmhlcml0c1Rva2VuKCc/Jyk7XG5cbi8qKlxuXHRAY2xhc3MgU0xBU0hcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIFNMQVNIID0gaW5oZXJpdHNUb2tlbignLycpO1xuXG4vKipcblx0QGNsYXNzIFVOREVSU0NPUkVcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIFVOREVSU0NPUkUgPSBpbmhlcml0c1Rva2VuKCdfJyk7XG5cbi8qKlxuXHRPbmUgb3JlIG1vcmUgbm9uLXdoaXRlc3BhY2Ugc3ltYm9sLlxuXHRAY2xhc3MgU1lNXG5cdEBleHRlbmRzIFRleHRUb2tlblxuKi9cbnZhciBTWU0gPSBpbmhlcml0c1Rva2VuKCk7XG5cbi8qKlxuXHRAY2xhc3MgVExEXG5cdEBleHRlbmRzIFRleHRUb2tlblxuKi9cbnZhciBUTEQgPSBpbmhlcml0c1Rva2VuKCk7XG5cbi8qKlxuXHRSZXByZXNlbnRzIGEgc3RyaW5nIG9mIGNvbnNlY3V0aXZlIHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuXG5cdEBjbGFzcyBXU1xuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgV1MgPSBpbmhlcml0c1Rva2VuKCk7XG5cbi8qKlxuXHRPcGVuaW5nL2Nsb3NpbmcgYnJhY2tldCBjbGFzc2VzXG4qL1xuXG52YXIgT1BFTkJSQUNFID0gaW5oZXJpdHNUb2tlbigneycpO1xudmFyIE9QRU5CUkFDS0VUID0gaW5oZXJpdHNUb2tlbignWycpO1xudmFyIE9QRU5BTkdMRUJSQUNLRVQgPSBpbmhlcml0c1Rva2VuKCc8Jyk7XG52YXIgT1BFTlBBUkVOID0gaW5oZXJpdHNUb2tlbignKCcpO1xudmFyIENMT1NFQlJBQ0UgPSBpbmhlcml0c1Rva2VuKCd9Jyk7XG52YXIgQ0xPU0VCUkFDS0VUID0gaW5oZXJpdHNUb2tlbignXScpO1xudmFyIENMT1NFQU5HTEVCUkFDS0VUID0gaW5oZXJpdHNUb2tlbignPicpO1xudmFyIENMT1NFUEFSRU4gPSBpbmhlcml0c1Rva2VuKCcpJyk7XG5cbnZhciBBTVBFUlNBTkQgPSBpbmhlcml0c1Rva2VuKCcmJyk7XG5cbmV4cG9ydHMuQmFzZSA9IFRleHRUb2tlbjtcbmV4cG9ydHMuRE9NQUlOID0gRE9NQUlOO1xuZXhwb3J0cy5BVCA9IEFUO1xuZXhwb3J0cy5DT0xPTiA9IENPTE9OO1xuZXhwb3J0cy5ET1QgPSBET1Q7XG5leHBvcnRzLlBVTkNUVUFUSU9OID0gUFVOQ1RVQVRJT047XG5leHBvcnRzLkxPQ0FMSE9TVCA9IExPQ0FMSE9TVDtcbmV4cG9ydHMuTkwgPSBOTDtcbmV4cG9ydHMuTlVNID0gTlVNO1xuZXhwb3J0cy5QTFVTID0gUExVUztcbmV4cG9ydHMuUE9VTkQgPSBQT1VORDtcbmV4cG9ydHMuUVVFUlkgPSBRVUVSWTtcbmV4cG9ydHMuUFJPVE9DT0wgPSBQUk9UT0NPTDtcbmV4cG9ydHMuTUFJTFRPID0gTUFJTFRPO1xuZXhwb3J0cy5TTEFTSCA9IFNMQVNIO1xuZXhwb3J0cy5VTkRFUlNDT1JFID0gVU5ERVJTQ09SRTtcbmV4cG9ydHMuU1lNID0gU1lNO1xuZXhwb3J0cy5UTEQgPSBUTEQ7XG5leHBvcnRzLldTID0gV1M7XG5leHBvcnRzLk9QRU5CUkFDRSA9IE9QRU5CUkFDRTtcbmV4cG9ydHMuT1BFTkJSQUNLRVQgPSBPUEVOQlJBQ0tFVDtcbmV4cG9ydHMuT1BFTkFOR0xFQlJBQ0tFVCA9IE9QRU5BTkdMRUJSQUNLRVQ7XG5leHBvcnRzLk9QRU5QQVJFTiA9IE9QRU5QQVJFTjtcbmV4cG9ydHMuQ0xPU0VCUkFDRSA9IENMT1NFQlJBQ0U7XG5leHBvcnRzLkNMT1NFQlJBQ0tFVCA9IENMT1NFQlJBQ0tFVDtcbmV4cG9ydHMuQ0xPU0VBTkdMRUJSQUNLRVQgPSBDTE9TRUFOR0xFQlJBQ0tFVDtcbmV4cG9ydHMuQ0xPU0VQQVJFTiA9IENMT1NFUEFSRU47XG5leHBvcnRzLkFNUEVSU0FORCA9IEFNUEVSU0FORDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuaW5oZXJpdHMgPSBpbmhlcml0cztcbmZ1bmN0aW9uIGluaGVyaXRzKHBhcmVudCwgY2hpbGQpIHtcblx0dmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuXHR2YXIgZXh0ZW5kZWQgPSBPYmplY3QuY3JlYXRlKHBhcmVudC5wcm90b3R5cGUpO1xuXHRmb3IgKHZhciBwIGluIHByb3BzKSB7XG5cdFx0ZXh0ZW5kZWRbcF0gPSBwcm9wc1twXTtcblx0fVxuXHRleHRlbmRlZC5jb25zdHJ1Y3RvciA9IGNoaWxkO1xuXHRjaGlsZC5wcm90b3R5cGUgPSBleHRlbmRlZDtcblx0cmV0dXJuIGNoaWxkO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgZGVmYXVsdHMgPSB7XG5cdGRlZmF1bHRQcm90b2NvbDogJ2h0dHAnLFxuXHRldmVudHM6IG51bGwsXG5cdGZvcm1hdDogbm9vcCxcblx0Zm9ybWF0SHJlZjogbm9vcCxcblx0bmwyYnI6IGZhbHNlLFxuXHR0YWdOYW1lOiAnYScsXG5cdHRhcmdldDogdHlwZVRvVGFyZ2V0LFxuXHR2YWxpZGF0ZTogdHJ1ZSxcblx0aWdub3JlVGFnczogW10sXG5cdGF0dHJpYnV0ZXM6IG51bGwsXG5cdGNsYXNzTmFtZTogJ2xpbmtpZmllZCcgLy8gRGVwcmVjYXRlZCB2YWx1ZSAtIG5vIGRlZmF1bHQgY2xhc3Mgd2lsbCBiZSBwcm92aWRlZCBpbiB0aGUgZnV0dXJlXG59O1xuXG5leHBvcnRzLmRlZmF1bHRzID0gZGVmYXVsdHM7XG5leHBvcnRzLk9wdGlvbnMgPSBPcHRpb25zO1xuZXhwb3J0cy5jb250YWlucyA9IGNvbnRhaW5zO1xuXG5cbmZ1bmN0aW9uIE9wdGlvbnMob3B0cykge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblxuXHR0aGlzLmRlZmF1bHRQcm90b2NvbCA9IG9wdHMuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRQcm90b2NvbCcpID8gb3B0cy5kZWZhdWx0UHJvdG9jb2wgOiBkZWZhdWx0cy5kZWZhdWx0UHJvdG9jb2w7XG5cdHRoaXMuZXZlbnRzID0gb3B0cy5oYXNPd25Qcm9wZXJ0eSgnZXZlbnRzJykgPyBvcHRzLmV2ZW50cyA6IGRlZmF1bHRzLmV2ZW50cztcblx0dGhpcy5mb3JtYXQgPSBvcHRzLmhhc093blByb3BlcnR5KCdmb3JtYXQnKSA/IG9wdHMuZm9ybWF0IDogZGVmYXVsdHMuZm9ybWF0O1xuXHR0aGlzLmZvcm1hdEhyZWYgPSBvcHRzLmhhc093blByb3BlcnR5KCdmb3JtYXRIcmVmJykgPyBvcHRzLmZvcm1hdEhyZWYgOiBkZWZhdWx0cy5mb3JtYXRIcmVmO1xuXHR0aGlzLm5sMmJyID0gb3B0cy5oYXNPd25Qcm9wZXJ0eSgnbmwyYnInKSA/IG9wdHMubmwyYnIgOiBkZWZhdWx0cy5ubDJicjtcblx0dGhpcy50YWdOYW1lID0gb3B0cy5oYXNPd25Qcm9wZXJ0eSgndGFnTmFtZScpID8gb3B0cy50YWdOYW1lIDogZGVmYXVsdHMudGFnTmFtZTtcblx0dGhpcy50YXJnZXQgPSBvcHRzLmhhc093blByb3BlcnR5KCd0YXJnZXQnKSA/IG9wdHMudGFyZ2V0IDogZGVmYXVsdHMudGFyZ2V0O1xuXHR0aGlzLnZhbGlkYXRlID0gb3B0cy5oYXNPd25Qcm9wZXJ0eSgndmFsaWRhdGUnKSA/IG9wdHMudmFsaWRhdGUgOiBkZWZhdWx0cy52YWxpZGF0ZTtcblx0dGhpcy5pZ25vcmVUYWdzID0gW107XG5cblx0Ly8gbGlua0F0dHJpYnV0ZXMgYW5kIGxpbmtDbGFzcyBpcyBkZXByZWNhdGVkXG5cdHRoaXMuYXR0cmlidXRlcyA9IG9wdHMuYXR0cmlidXRlcyB8fCBvcHRzLmxpbmtBdHRyaWJ1dGVzIHx8IGRlZmF1bHRzLmF0dHJpYnV0ZXM7XG5cdHRoaXMuY2xhc3NOYW1lID0gb3B0cy5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NOYW1lJykgPyBvcHRzLmNsYXNzTmFtZSA6IG9wdHMubGlua0NsYXNzIHx8IGRlZmF1bHRzLmNsYXNzTmFtZTtcblxuXHQvLyBNYWtlIGFsbCB0YWdzIG5hbWVzIHVwcGVyIGNhc2Vcblx0dmFyIGlnbm9yZWRUYWdzID0gb3B0cy5oYXNPd25Qcm9wZXJ0eSgnaWdub3JlVGFncycpID8gb3B0cy5pZ25vcmVUYWdzIDogZGVmYXVsdHMuaWdub3JlVGFncztcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpZ25vcmVkVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHRoaXMuaWdub3JlVGFncy5wdXNoKGlnbm9yZWRUYWdzW2ldLnRvVXBwZXJDYXNlKCkpO1xuXHR9XG59XG5cbk9wdGlvbnMucHJvdG90eXBlID0ge1xuXHQvKipcbiAgKiBHaXZlbiB0aGUgdG9rZW4sIHJldHVybiBhbGwgb3B0aW9ucyBmb3IgaG93IGl0IHNob3VsZCBiZSBkaXNwbGF5ZWRcbiAgKi9cblx0cmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh0b2tlbikge1xuXHRcdHZhciBocmVmID0gdG9rZW4udG9IcmVmKHRoaXMuZGVmYXVsdFByb3RvY29sKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Zm9ybWF0dGVkOiB0aGlzLmdldCgnZm9ybWF0JywgdG9rZW4udG9TdHJpbmcoKSwgdG9rZW4pLFxuXHRcdFx0Zm9ybWF0dGVkSHJlZjogdGhpcy5nZXQoJ2Zvcm1hdEhyZWYnLCBocmVmLCB0b2tlbiksXG5cdFx0XHR0YWdOYW1lOiB0aGlzLmdldCgndGFnTmFtZScsIGhyZWYsIHRva2VuKSxcblx0XHRcdGNsYXNzTmFtZTogdGhpcy5nZXQoJ2NsYXNzTmFtZScsIGhyZWYsIHRva2VuKSxcblx0XHRcdHRhcmdldDogdGhpcy5nZXQoJ3RhcmdldCcsIGhyZWYsIHRva2VuKSxcblx0XHRcdGV2ZW50czogdGhpcy5nZXRPYmplY3QoJ2V2ZW50cycsIGhyZWYsIHRva2VuKSxcblx0XHRcdGF0dHJpYnV0ZXM6IHRoaXMuZ2V0T2JqZWN0KCdhdHRyaWJ1dGVzJywgaHJlZiwgdG9rZW4pXG5cdFx0fTtcblx0fSxcblxuXG5cdC8qKlxuICAqIFJldHVybnMgdHJ1ZSBvciBmYWxzZSBiYXNlZCBvbiB3aGV0aGVyIGEgdG9rZW4gc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBhXG4gICogbGluayBiYXNlZCBvbiB0aGUgdXNlciBvcHRpb25zLiBCeSBkZWZhdWx0LFxuICAqL1xuXHRjaGVjazogZnVuY3Rpb24gY2hlY2sodG9rZW4pIHtcblx0XHRyZXR1cm4gdGhpcy5nZXQoJ3ZhbGlkYXRlJywgdG9rZW4udG9TdHJpbmcoKSwgdG9rZW4pO1xuXHR9LFxuXG5cblx0Ly8gUHJpdmF0ZSBtZXRob2RzXG5cblx0LyoqXG4gICogUmVzb2x2ZSBhbiBvcHRpb24ncyB2YWx1ZSBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIG9wdGlvbiBhbmQgdGhlIGdpdmVuXG4gICogcGFyYW1zLlxuICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgTmFtZSBvZiBvcHRpb24gdG8gdXNlXG4gICogQHBhcmFtIG9wZXJhdG9yIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSB0YXJnZXQgb3B0aW9uIGlmIGl0J3MgbWV0aG9kXG4gICogQHBhcmFtIHtNdWx0aVRva2VufSB0b2tlbiBUaGUgdG9rZW4gZnJvbSBsaW5raWZ5LnRva2VuaXplXG4gICovXG5cdGdldDogZnVuY3Rpb24gZ2V0KGtleSwgb3BlcmF0b3IsIHRva2VuKSB7XG5cdFx0dmFyIG9wdGlvblZhbHVlID0gdm9pZCAwLFxuXHRcdCAgICBvcHRpb24gPSB0aGlzW2tleV07XG5cdFx0aWYgKCFvcHRpb24pIHtcblx0XHRcdHJldHVybiBvcHRpb247XG5cdFx0fVxuXG5cdFx0c3dpdGNoICh0eXBlb2Ygb3B0aW9uID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRpb24pKSB7XG5cdFx0XHRjYXNlICdmdW5jdGlvbic6XG5cdFx0XHRcdHJldHVybiBvcHRpb24ob3BlcmF0b3IsIHRva2VuLnR5cGUpO1xuXHRcdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdFx0b3B0aW9uVmFsdWUgPSBvcHRpb24uaGFzT3duUHJvcGVydHkodG9rZW4udHlwZSkgPyBvcHRpb25bdG9rZW4udHlwZV0gOiBkZWZhdWx0c1trZXldO1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nID8gb3B0aW9uVmFsdWUob3BlcmF0b3IsIHRva2VuLnR5cGUpIDogb3B0aW9uVmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9wdGlvbjtcblx0fSxcblx0Z2V0T2JqZWN0OiBmdW5jdGlvbiBnZXRPYmplY3Qoa2V5LCBvcGVyYXRvciwgdG9rZW4pIHtcblx0XHR2YXIgb3B0aW9uID0gdGhpc1trZXldO1xuXHRcdHJldHVybiB0eXBlb2Ygb3B0aW9uID09PSAnZnVuY3Rpb24nID8gb3B0aW9uKG9wZXJhdG9yLCB0b2tlbi50eXBlKSA6IG9wdGlvbjtcblx0fVxufTtcblxuLyoqXG4gKiBRdWljayBpbmRleE9mIHJlcGxhY2VtZW50IGZvciBjaGVja2luZyB0aGUgaWdub3JlVGFncyBvcHRpb25cbiAqL1xuZnVuY3Rpb24gY29udGFpbnMoYXJyLCB2YWx1ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChhcnJbaV0gPT09IHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBub29wKHZhbCkge1xuXHRyZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiB0eXBlVG9UYXJnZXQoaHJlZiwgdHlwZSkge1xuXHRyZXR1cm4gdHlwZSA9PT0gJ3VybCcgPyAnX2JsYW5rJyA6IG51bGw7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2h0bWw1TmFtZWRDaGFyUmVmcyA9IHJlcXVpcmUoJy4vc2ltcGxlLWh0bWwtdG9rZW5pemVyL2h0bWw1LW5hbWVkLWNoYXItcmVmcycpO1xuXG52YXIgX2h0bWw1TmFtZWRDaGFyUmVmczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9odG1sNU5hbWVkQ2hhclJlZnMpO1xuXG52YXIgX2VudGl0eVBhcnNlciA9IHJlcXVpcmUoJy4vc2ltcGxlLWh0bWwtdG9rZW5pemVyL2VudGl0eS1wYXJzZXInKTtcblxudmFyIF9lbnRpdHlQYXJzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW50aXR5UGFyc2VyKTtcblxudmFyIF9ldmVudGVkVG9rZW5pemVyID0gcmVxdWlyZSgnLi9zaW1wbGUtaHRtbC10b2tlbml6ZXIvZXZlbnRlZC10b2tlbml6ZXInKTtcblxudmFyIF9ldmVudGVkVG9rZW5pemVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50ZWRUb2tlbml6ZXIpO1xuXG52YXIgX3Rva2VuaXplciA9IHJlcXVpcmUoJy4vc2ltcGxlLWh0bWwtdG9rZW5pemVyL3Rva2VuaXplcicpO1xuXG52YXIgX3Rva2VuaXplcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b2tlbml6ZXIpO1xuXG52YXIgX3Rva2VuaXplID0gcmVxdWlyZSgnLi9zaW1wbGUtaHRtbC10b2tlbml6ZXIvdG9rZW5pemUnKTtcblxudmFyIF90b2tlbml6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b2tlbml6ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBIVE1MNVRva2VuaXplciA9IHtcblx0SFRNTDVOYW1lZENoYXJSZWZzOiBfaHRtbDVOYW1lZENoYXJSZWZzMi5kZWZhdWx0LFxuXHRFbnRpdHlQYXJzZXI6IF9lbnRpdHlQYXJzZXIyLmRlZmF1bHQsXG5cdEV2ZW50ZWRUb2tlbml6ZXI6IF9ldmVudGVkVG9rZW5pemVyMi5kZWZhdWx0LFxuXHRUb2tlbml6ZXI6IF90b2tlbml6ZXIyLmRlZmF1bHQsXG5cdHRva2VuaXplOiBfdG9rZW5pemUyLmRlZmF1bHRcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEhUTUw1VG9rZW5pemVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gRW50aXR5UGFyc2VyKG5hbWVkKSB7XG4gIHRoaXMubmFtZWQgPSBuYW1lZDtcbn1cblxudmFyIEhFWENIQVJDT0RFID0gL14jW3hYXShbQS1GYS1mMC05XSspJC87XG52YXIgQ0hBUkNPREUgPSAvXiMoWzAtOV0rKSQvO1xudmFyIE5BTUVEID0gL14oW0EtWmEtejAtOV0rKSQvO1xuXG5FbnRpdHlQYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICBpZiAoIWVudGl0eSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2hlcyA9IGVudGl0eS5tYXRjaChIRVhDSEFSQ09ERSk7XG4gIGlmIChtYXRjaGVzKSB7XG4gICAgcmV0dXJuIFwiJiN4XCIgKyBtYXRjaGVzWzFdICsgXCI7XCI7XG4gIH1cbiAgbWF0Y2hlcyA9IGVudGl0eS5tYXRjaChDSEFSQ09ERSk7XG4gIGlmIChtYXRjaGVzKSB7XG4gICAgcmV0dXJuIFwiJiNcIiArIG1hdGNoZXNbMV0gKyBcIjtcIjtcbiAgfVxuICBtYXRjaGVzID0gZW50aXR5Lm1hdGNoKE5BTUVEKTtcbiAgaWYgKG1hdGNoZXMpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lZFttYXRjaGVzWzFdXSB8fCBcIiZcIiArIG1hdGNoZXNbMV0gKyBcIjtcIjtcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRW50aXR5UGFyc2VyOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gRXZlbnRlZFRva2VuaXplcihkZWxlZ2F0ZSwgZW50aXR5UGFyc2VyKSB7XG4gIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgdGhpcy5lbnRpdHlQYXJzZXIgPSBlbnRpdHlQYXJzZXI7XG5cbiAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gIHRoaXMuaW5wdXQgPSBudWxsO1xuXG4gIHRoaXMuaW5kZXggPSAtMTtcbiAgdGhpcy5saW5lID0gLTE7XG4gIHRoaXMuY29sdW1uID0gLTE7XG4gIHRoaXMudGFnTGluZSA9IC0xO1xuICB0aGlzLnRhZ0NvbHVtbiA9IC0xO1xuXG4gIHRoaXMucmVzZXQoKTtcbn1cblxuRXZlbnRlZFRva2VuaXplci5wcm90b3R5cGUgPSB7XG4gIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLnN0YXRlID0gJ2JlZm9yZURhdGEnO1xuICAgIHRoaXMuaW5wdXQgPSAnJztcblxuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIHRoaXMubGluZSA9IDE7XG4gICAgdGhpcy5jb2x1bW4gPSAwO1xuXG4gICAgdGhpcy50YWdMaW5lID0gLTE7XG4gICAgdGhpcy50YWdDb2x1bW4gPSAtMTtcblxuICAgIHRoaXMuZGVsZWdhdGUucmVzZXQoKTtcbiAgfSxcblxuICB0b2tlbml6ZTogZnVuY3Rpb24gdG9rZW5pemUoaW5wdXQpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy50b2tlbml6ZVBhcnQoaW5wdXQpO1xuICAgIHRoaXMudG9rZW5pemVFT0YoKTtcbiAgfSxcblxuICB0b2tlbml6ZVBhcnQ6IGZ1bmN0aW9uIHRva2VuaXplUGFydChpbnB1dCkge1xuICAgIHRoaXMuaW5wdXQgKz0gKDAsIF91dGlscy5wcmVwcm9jZXNzSW5wdXQpKGlucHV0KTtcblxuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy5pbnB1dC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3RhdGVzW3RoaXMuc3RhdGVdLmNhbGwodGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIHRva2VuaXplRU9GOiBmdW5jdGlvbiB0b2tlbml6ZUVPRigpIHtcbiAgICB0aGlzLmZsdXNoRGF0YSgpO1xuICB9LFxuXG4gIGZsdXNoRGF0YTogZnVuY3Rpb24gZmx1c2hEYXRhKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSAnZGF0YScpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUuZmluaXNoRGF0YSgpO1xuICAgICAgdGhpcy5zdGF0ZSA9ICdiZWZvcmVEYXRhJztcbiAgICB9XG4gIH0sXG5cbiAgcGVlazogZnVuY3Rpb24gcGVlaygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gIH0sXG5cbiAgY29uc3VtZTogZnVuY3Rpb24gY29uc3VtZSgpIHtcbiAgICB2YXIgY2hhciA9IHRoaXMucGVlaygpO1xuXG4gICAgdGhpcy5pbmRleCsrO1xuXG4gICAgaWYgKGNoYXIgPT09IFwiXFxuXCIpIHtcbiAgICAgIHRoaXMubGluZSsrO1xuICAgICAgdGhpcy5jb2x1bW4gPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbHVtbisrO1xuICAgIH1cblxuICAgIHJldHVybiBjaGFyO1xuICB9LFxuXG4gIGNvbnN1bWVDaGFyUmVmOiBmdW5jdGlvbiBjb25zdW1lQ2hhclJlZigpIHtcbiAgICB2YXIgZW5kSW5kZXggPSB0aGlzLmlucHV0LmluZGV4T2YoJzsnLCB0aGlzLmluZGV4KTtcbiAgICBpZiAoZW5kSW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlbnRpdHkgPSB0aGlzLmlucHV0LnNsaWNlKHRoaXMuaW5kZXgsIGVuZEluZGV4KTtcbiAgICB2YXIgY2hhcnMgPSB0aGlzLmVudGl0eVBhcnNlci5wYXJzZShlbnRpdHkpO1xuICAgIGlmIChjaGFycykge1xuICAgICAgdmFyIGNvdW50ID0gZW50aXR5Lmxlbmd0aDtcbiAgICAgIC8vIGNvbnN1bWUgdGhlIGVudGl0eSBjaGFyc1xuICAgICAgd2hpbGUgKGNvdW50KSB7XG4gICAgICAgIHRoaXMuY29uc3VtZSgpO1xuICAgICAgICBjb3VudC0tO1xuICAgICAgfVxuICAgICAgLy8gY29uc3VtZSB0aGUgYDtgXG4gICAgICB0aGlzLmNvbnN1bWUoKTtcblxuICAgICAgcmV0dXJuIGNoYXJzO1xuICAgIH1cbiAgfSxcblxuICBtYXJrVGFnU3RhcnQ6IGZ1bmN0aW9uIG1hcmtUYWdTdGFydCgpIHtcbiAgICAvLyB0aGVzZSBwcm9wZXJ0aWVzIHRvIGJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciBidW1wXG4gICAgdGhpcy50YWdMaW5lID0gdGhpcy5saW5lO1xuICAgIHRoaXMudGFnQ29sdW1uID0gdGhpcy5jb2x1bW47XG5cbiAgICBpZiAodGhpcy5kZWxlZ2F0ZS50YWdPcGVuKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlLnRhZ09wZW4oKTtcbiAgICB9XG4gIH0sXG5cbiAgc3RhdGVzOiB7XG4gICAgYmVmb3JlRGF0YTogZnVuY3Rpb24gYmVmb3JlRGF0YSgpIHtcbiAgICAgIHZhciBjaGFyID0gdGhpcy5wZWVrKCk7XG5cbiAgICAgIGlmIChjaGFyID09PSBcIjxcIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3RhZ09wZW4nO1xuICAgICAgICB0aGlzLm1hcmtUYWdTdGFydCgpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnZGF0YSc7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYmVnaW5EYXRhKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgICB2YXIgY2hhciA9IHRoaXMucGVlaygpO1xuXG4gICAgICBpZiAoY2hhciA9PT0gXCI8XCIpIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5maW5pc2hEYXRhKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAndGFnT3Blbic7XG4gICAgICAgIHRoaXMubWFya1RhZ1N0YXJ0KCk7XG4gICAgICAgIHRoaXMuY29uc3VtZSgpO1xuICAgICAgfSBlbHNlIGlmIChjaGFyID09PSBcIiZcIikge1xuICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5hcHBlbmRUb0RhdGEodGhpcy5jb25zdW1lQ2hhclJlZigpIHx8IFwiJlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29uc3VtZSgpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmFwcGVuZFRvRGF0YShjaGFyKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdGFnT3BlbjogZnVuY3Rpb24gdGFnT3BlbigpIHtcbiAgICAgIHZhciBjaGFyID0gdGhpcy5jb25zdW1lKCk7XG5cbiAgICAgIGlmIChjaGFyID09PSBcIiFcIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ21hcmt1cERlY2xhcmF0aW9uJztcbiAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gXCIvXCIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdlbmRUYWdPcGVuJztcbiAgICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc0FscGhhKShjaGFyKSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3RhZ05hbWUnO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmJlZ2luU3RhcnRUYWcoKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5hcHBlbmRUb1RhZ05hbWUoY2hhci50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbWFya3VwRGVjbGFyYXRpb246IGZ1bmN0aW9uIG1hcmt1cERlY2xhcmF0aW9uKCkge1xuICAgICAgdmFyIGNoYXIgPSB0aGlzLmNvbnN1bWUoKTtcblxuICAgICAgaWYgKGNoYXIgPT09IFwiLVwiICYmIHRoaXMuaW5wdXQuY2hhckF0KHRoaXMuaW5kZXgpID09PSBcIi1cIikge1xuICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdjb21tZW50U3RhcnQnO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmJlZ2luQ29tbWVudCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21tZW50U3RhcnQ6IGZ1bmN0aW9uIGNvbW1lbnRTdGFydCgpIHtcbiAgICAgIHZhciBjaGFyID0gdGhpcy5jb25zdW1lKCk7XG5cbiAgICAgIGlmIChjaGFyID09PSBcIi1cIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2NvbW1lbnRTdGFydERhc2gnO1xuICAgICAgfSBlbHNlIGlmIChjaGFyID09PSBcIj5cIikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmZpbmlzaENvbW1lbnQoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdiZWZvcmVEYXRhJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYXBwZW5kVG9Db21tZW50RGF0YShjaGFyKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdjb21tZW50JztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tbWVudFN0YXJ0RGFzaDogZnVuY3Rpb24gY29tbWVudFN0YXJ0RGFzaCgpIHtcbiAgICAgIHZhciBjaGFyID0gdGhpcy5jb25zdW1lKCk7XG5cbiAgICAgIGlmIChjaGFyID09PSBcIi1cIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2NvbW1lbnRFbmQnO1xuICAgICAgfSBlbHNlIGlmIChjaGFyID09PSBcIj5cIikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmZpbmlzaENvbW1lbnQoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdiZWZvcmVEYXRhJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYXBwZW5kVG9Db21tZW50RGF0YShcIi1cIik7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnY29tbWVudCc7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbW1lbnQ6IGZ1bmN0aW9uIGNvbW1lbnQoKSB7XG4gICAgICB2YXIgY2hhciA9IHRoaXMuY29uc3VtZSgpO1xuXG4gICAgICBpZiAoY2hhciA9PT0gXCItXCIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdjb21tZW50RW5kRGFzaCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmFwcGVuZFRvQ29tbWVudERhdGEoY2hhcik7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbW1lbnRFbmREYXNoOiBmdW5jdGlvbiBjb21tZW50RW5kRGFzaCgpIHtcbiAgICAgIHZhciBjaGFyID0gdGhpcy5jb25zdW1lKCk7XG5cbiAgICAgIGlmIChjaGFyID09PSBcIi1cIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2NvbW1lbnRFbmQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5hcHBlbmRUb0NvbW1lbnREYXRhKFwiLVwiICsgY2hhcik7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnY29tbWVudCc7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbW1lbnRFbmQ6IGZ1bmN0aW9uIGNvbW1lbnRFbmQoKSB7XG4gICAgICB2YXIgY2hhciA9IHRoaXMuY29uc3VtZSgpO1xuXG4gICAgICBpZiAoY2hhciA9PT0gXCI+XCIpIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5maW5pc2hDb21tZW50KCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnYmVmb3JlRGF0YSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmFwcGVuZFRvQ29tbWVudERhdGEoXCItLVwiICsgY2hhcik7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnY29tbWVudCc7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHRhZ05hbWU6IGZ1bmN0aW9uIHRhZ05hbWUoKSB7XG4gICAgICB2YXIgY2hhciA9IHRoaXMuY29uc3VtZSgpO1xuXG4gICAgICBpZiAoKDAsIF91dGlscy5pc1NwYWNlKShjaGFyKSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2JlZm9yZUF0dHJpYnV0ZU5hbWUnO1xuICAgICAgfSBlbHNlIGlmIChjaGFyID09PSBcIi9cIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3NlbGZDbG9zaW5nU3RhcnRUYWcnO1xuICAgICAgfSBlbHNlIGlmIChjaGFyID09PSBcIj5cIikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmZpbmlzaFRhZygpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2JlZm9yZURhdGEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5hcHBlbmRUb1RhZ05hbWUoY2hhcik7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGJlZm9yZUF0dHJpYnV0ZU5hbWU6IGZ1bmN0aW9uIGJlZm9yZUF0dHJpYnV0ZU5hbWUoKSB7XG4gICAgICB2YXIgY2hhciA9IHRoaXMucGVlaygpO1xuXG4gICAgICBpZiAoKDAsIF91dGlscy5pc1NwYWNlKShjaGFyKSkge1xuICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChjaGFyID09PSBcIi9cIikge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3NlbGZDbG9zaW5nU3RhcnRUYWcnO1xuICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gXCI+XCIpIHtcbiAgICAgICAgdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZmluaXNoVGFnKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnYmVmb3JlRGF0YSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2F0dHJpYnV0ZU5hbWUnO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmJlZ2luQXR0cmlidXRlKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZSgpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmFwcGVuZFRvQXR0cmlidXRlTmFtZShjaGFyKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXR0cmlidXRlTmFtZTogZnVuY3Rpb24gYXR0cmlidXRlTmFtZSgpIHtcbiAgICAgIHZhciBjaGFyID0gdGhpcy5wZWVrKCk7XG5cbiAgICAgIGlmICgoMCwgX3V0aWxzLmlzU3BhY2UpKGNoYXIpKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnYWZ0ZXJBdHRyaWJ1dGVOYW1lJztcbiAgICAgICAgdGhpcy5jb25zdW1lKCk7XG4gICAgICB9IGVsc2UgaWYgKGNoYXIgPT09IFwiL1wiKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYmVnaW5BdHRyaWJ1dGVWYWx1ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZmluaXNoQXR0cmlidXRlVmFsdWUoKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc2VsZkNsb3NpbmdTdGFydFRhZyc7XG4gICAgICB9IGVsc2UgaWYgKGNoYXIgPT09IFwiPVwiKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnYmVmb3JlQXR0cmlidXRlVmFsdWUnO1xuICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gXCI+XCIpIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5iZWdpbkF0dHJpYnV0ZVZhbHVlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5maW5pc2hBdHRyaWJ1dGVWYWx1ZSgpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5maW5pc2hUYWcoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdiZWZvcmVEYXRhJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29uc3VtZSgpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmFwcGVuZFRvQXR0cmlidXRlTmFtZShjaGFyKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWZ0ZXJBdHRyaWJ1dGVOYW1lOiBmdW5jdGlvbiBhZnRlckF0dHJpYnV0ZU5hbWUoKSB7XG4gICAgICB2YXIgY2hhciA9IHRoaXMucGVlaygpO1xuXG4gICAgICBpZiAoKDAsIF91dGlscy5pc1NwYWNlKShjaGFyKSkge1xuICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChjaGFyID09PSBcIi9cIikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmJlZ2luQXR0cmlidXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmZpbmlzaEF0dHJpYnV0ZVZhbHVlKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZSgpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3NlbGZDbG9zaW5nU3RhcnRUYWcnO1xuICAgICAgfSBlbHNlIGlmIChjaGFyID09PSBcIj1cIikge1xuICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdiZWZvcmVBdHRyaWJ1dGVWYWx1ZSc7XG4gICAgICB9IGVsc2UgaWYgKGNoYXIgPT09IFwiPlwiKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYmVnaW5BdHRyaWJ1dGVWYWx1ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZmluaXNoQXR0cmlidXRlVmFsdWUoKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZmluaXNoVGFnKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnYmVmb3JlRGF0YSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmJlZ2luQXR0cmlidXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmZpbmlzaEF0dHJpYnV0ZVZhbHVlKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZSgpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2F0dHJpYnV0ZU5hbWUnO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmJlZ2luQXR0cmlidXRlKCk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYXBwZW5kVG9BdHRyaWJ1dGVOYW1lKGNoYXIpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBiZWZvcmVBdHRyaWJ1dGVWYWx1ZTogZnVuY3Rpb24gYmVmb3JlQXR0cmlidXRlVmFsdWUoKSB7XG4gICAgICB2YXIgY2hhciA9IHRoaXMucGVlaygpO1xuXG4gICAgICBpZiAoKDAsIF91dGlscy5pc1NwYWNlKShjaGFyKSkge1xuICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gJ1wiJykge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2F0dHJpYnV0ZVZhbHVlRG91YmxlUXVvdGVkJztcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5iZWdpbkF0dHJpYnV0ZVZhbHVlKHRydWUpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gXCInXCIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdhdHRyaWJ1dGVWYWx1ZVNpbmdsZVF1b3RlZCc7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYmVnaW5BdHRyaWJ1dGVWYWx1ZSh0cnVlKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKCk7XG4gICAgICB9IGVsc2UgaWYgKGNoYXIgPT09IFwiPlwiKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYmVnaW5BdHRyaWJ1dGVWYWx1ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZmluaXNoQXR0cmlidXRlVmFsdWUoKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZmluaXNoVGFnKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnYmVmb3JlRGF0YSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2F0dHJpYnV0ZVZhbHVlVW5xdW90ZWQnO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmJlZ2luQXR0cmlidXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5hcHBlbmRUb0F0dHJpYnV0ZVZhbHVlKGNoYXIpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhdHRyaWJ1dGVWYWx1ZURvdWJsZVF1b3RlZDogZnVuY3Rpb24gYXR0cmlidXRlVmFsdWVEb3VibGVRdW90ZWQoKSB7XG4gICAgICB2YXIgY2hhciA9IHRoaXMuY29uc3VtZSgpO1xuXG4gICAgICBpZiAoY2hhciA9PT0gJ1wiJykge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmZpbmlzaEF0dHJpYnV0ZVZhbHVlKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnYWZ0ZXJBdHRyaWJ1dGVWYWx1ZVF1b3RlZCc7XG4gICAgICB9IGVsc2UgaWYgKGNoYXIgPT09IFwiJlwiKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYXBwZW5kVG9BdHRyaWJ1dGVWYWx1ZSh0aGlzLmNvbnN1bWVDaGFyUmVmKCdcIicpIHx8IFwiJlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYXBwZW5kVG9BdHRyaWJ1dGVWYWx1ZShjaGFyKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXR0cmlidXRlVmFsdWVTaW5nbGVRdW90ZWQ6IGZ1bmN0aW9uIGF0dHJpYnV0ZVZhbHVlU2luZ2xlUXVvdGVkKCkge1xuICAgICAgdmFyIGNoYXIgPSB0aGlzLmNvbnN1bWUoKTtcblxuICAgICAgaWYgKGNoYXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZmluaXNoQXR0cmlidXRlVmFsdWUoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdhZnRlckF0dHJpYnV0ZVZhbHVlUXVvdGVkJztcbiAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gXCImXCIpIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5hcHBlbmRUb0F0dHJpYnV0ZVZhbHVlKHRoaXMuY29uc3VtZUNoYXJSZWYoXCInXCIpIHx8IFwiJlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYXBwZW5kVG9BdHRyaWJ1dGVWYWx1ZShjaGFyKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXR0cmlidXRlVmFsdWVVbnF1b3RlZDogZnVuY3Rpb24gYXR0cmlidXRlVmFsdWVVbnF1b3RlZCgpIHtcbiAgICAgIHZhciBjaGFyID0gdGhpcy5wZWVrKCk7XG5cbiAgICAgIGlmICgoMCwgX3V0aWxzLmlzU3BhY2UpKGNoYXIpKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZmluaXNoQXR0cmlidXRlVmFsdWUoKTtcbiAgICAgICAgdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnYmVmb3JlQXR0cmlidXRlTmFtZSc7XG4gICAgICB9IGVsc2UgaWYgKGNoYXIgPT09IFwiJlwiKSB7XG4gICAgICAgIHRoaXMuY29uc3VtZSgpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmFwcGVuZFRvQXR0cmlidXRlVmFsdWUodGhpcy5jb25zdW1lQ2hhclJlZihcIj5cIikgfHwgXCImXCIpO1xuICAgICAgfSBlbHNlIGlmIChjaGFyID09PSBcIj5cIikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmZpbmlzaEF0dHJpYnV0ZVZhbHVlKCk7XG4gICAgICAgIHRoaXMuY29uc3VtZSgpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmZpbmlzaFRhZygpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2JlZm9yZURhdGEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYXBwZW5kVG9BdHRyaWJ1dGVWYWx1ZShjaGFyKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWZ0ZXJBdHRyaWJ1dGVWYWx1ZVF1b3RlZDogZnVuY3Rpb24gYWZ0ZXJBdHRyaWJ1dGVWYWx1ZVF1b3RlZCgpIHtcbiAgICAgIHZhciBjaGFyID0gdGhpcy5wZWVrKCk7XG5cbiAgICAgIGlmICgoMCwgX3V0aWxzLmlzU3BhY2UpKGNoYXIpKSB7XG4gICAgICAgIHRoaXMuY29uc3VtZSgpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2JlZm9yZUF0dHJpYnV0ZU5hbWUnO1xuICAgICAgfSBlbHNlIGlmIChjaGFyID09PSBcIi9cIikge1xuICAgICAgICB0aGlzLmNvbnN1bWUoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdzZWxmQ2xvc2luZ1N0YXJ0VGFnJztcbiAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gXCI+XCIpIHtcbiAgICAgICAgdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZmluaXNoVGFnKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnYmVmb3JlRGF0YSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2JlZm9yZUF0dHJpYnV0ZU5hbWUnO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzZWxmQ2xvc2luZ1N0YXJ0VGFnOiBmdW5jdGlvbiBzZWxmQ2xvc2luZ1N0YXJ0VGFnKCkge1xuICAgICAgdmFyIGNoYXIgPSB0aGlzLnBlZWsoKTtcblxuICAgICAgaWYgKGNoYXIgPT09IFwiPlwiKSB7XG4gICAgICAgIHRoaXMuY29uc3VtZSgpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLm1hcmtUYWdBc1NlbGZDbG9zaW5nKCk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZmluaXNoVGFnKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnYmVmb3JlRGF0YSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2JlZm9yZUF0dHJpYnV0ZU5hbWUnO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbmRUYWdPcGVuOiBmdW5jdGlvbiBlbmRUYWdPcGVuKCkge1xuICAgICAgdmFyIGNoYXIgPSB0aGlzLmNvbnN1bWUoKTtcblxuICAgICAgaWYgKCgwLCBfdXRpbHMuaXNBbHBoYSkoY2hhcikpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICd0YWdOYW1lJztcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5iZWdpbkVuZFRhZygpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmFwcGVuZFRvVGFnTmFtZShjaGFyLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRXZlbnRlZFRva2VuaXplcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBIVE1MNU5hbWVkQ2hhclJlZnMgPSB7XG4gICAgLy8gV2UgZG9uJ3QgbmVlZCB0aGUgY29tcGxldGUgbmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZSBiZWNhdXNlIGxpbmtpZnlIdG1sXG4gICAgLy8gZG9lcyBub3QgbW9kaWZ5IHRoZSBlc2NhcGUgc2VxdWVuY2VzLiBXZSBkbyBuZWVkICZuYnNwOyBzbyB0aGF0XG4gICAgLy8gd2hpdGVzcGFjZSBpcyBwYXJzZWQgcHJvcGVybHkuIE90aGVyIHR5cGVzIG9mIHdoaXRlc3BhY2Ugc2hvdWxkIGFscmVhZHlcbiAgICAvLyBiZSBhY2NvdW50ZWQgZm9yXG4gICAgbmJzcDogXCJcXHhBMFwiXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gSFRNTDVOYW1lZENoYXJSZWZzOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRva2VuaXplO1xuXG52YXIgX3Rva2VuaXplciA9IHJlcXVpcmUoJy4vdG9rZW5pemVyJyk7XG5cbnZhciBfdG9rZW5pemVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rva2VuaXplcik7XG5cbnZhciBfZW50aXR5UGFyc2VyID0gcmVxdWlyZSgnLi9lbnRpdHktcGFyc2VyJyk7XG5cbnZhciBfZW50aXR5UGFyc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VudGl0eVBhcnNlcik7XG5cbnZhciBfaHRtbDVOYW1lZENoYXJSZWZzID0gcmVxdWlyZSgnLi9odG1sNS1uYW1lZC1jaGFyLXJlZnMnKTtcblxudmFyIF9odG1sNU5hbWVkQ2hhclJlZnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHRtbDVOYW1lZENoYXJSZWZzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9rZW5pemUoaW5wdXQsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VuaXplciA9IG5ldyBfdG9rZW5pemVyMi5kZWZhdWx0KG5ldyBfZW50aXR5UGFyc2VyMi5kZWZhdWx0KF9odG1sNU5hbWVkQ2hhclJlZnMyLmRlZmF1bHQpLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRva2VuaXplci50b2tlbml6ZShpbnB1dCk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V2ZW50ZWRUb2tlbml6ZXIgPSByZXF1aXJlKCcuL2V2ZW50ZWQtdG9rZW5pemVyJyk7XG5cbnZhciBfZXZlbnRlZFRva2VuaXplcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmVudGVkVG9rZW5pemVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gVG9rZW5pemVyKGVudGl0eVBhcnNlciwgb3B0aW9ucykge1xuICB0aGlzLnRva2VuID0gbnVsbDtcbiAgdGhpcy5zdGFydExpbmUgPSAxO1xuICB0aGlzLnN0YXJ0Q29sdW1uID0gMDtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy50b2tlbml6ZXIgPSBuZXcgX2V2ZW50ZWRUb2tlbml6ZXIyLmRlZmF1bHQodGhpcywgZW50aXR5UGFyc2VyKTtcbn1cblxuVG9rZW5pemVyLnByb3RvdHlwZSA9IHtcbiAgdG9rZW5pemU6IGZ1bmN0aW9uIHRva2VuaXplKGlucHV0KSB7XG4gICAgdGhpcy50b2tlbnMgPSBbXTtcbiAgICB0aGlzLnRva2VuaXplci50b2tlbml6ZShpbnB1dCk7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9LFxuXG4gIHRva2VuaXplUGFydDogZnVuY3Rpb24gdG9rZW5pemVQYXJ0KGlucHV0KSB7XG4gICAgdGhpcy50b2tlbnMgPSBbXTtcbiAgICB0aGlzLnRva2VuaXplci50b2tlbml6ZVBhcnQoaW5wdXQpO1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfSxcblxuICB0b2tlbml6ZUVPRjogZnVuY3Rpb24gdG9rZW5pemVFT0YoKSB7XG4gICAgdGhpcy50b2tlbnMgPSBbXTtcbiAgICB0aGlzLnRva2VuaXplci50b2tlbml6ZUVPRigpO1xuICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcbiAgfSxcblxuICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy50b2tlbiA9IG51bGw7XG4gICAgdGhpcy5zdGFydExpbmUgPSAxO1xuICAgIHRoaXMuc3RhcnRDb2x1bW4gPSAwO1xuICB9LFxuXG4gIGFkZExvY0luZm86IGZ1bmN0aW9uIGFkZExvY0luZm8oKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5sb2MpIHtcbiAgICAgIHRoaXMudG9rZW4ubG9jID0ge1xuICAgICAgICBzdGFydDoge1xuICAgICAgICAgIGxpbmU6IHRoaXMuc3RhcnRMaW5lLFxuICAgICAgICAgIGNvbHVtbjogdGhpcy5zdGFydENvbHVtblxuICAgICAgICB9LFxuICAgICAgICBlbmQ6IHtcbiAgICAgICAgICBsaW5lOiB0aGlzLnRva2VuaXplci5saW5lLFxuICAgICAgICAgIGNvbHVtbjogdGhpcy50b2tlbml6ZXIuY29sdW1uXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuc3RhcnRMaW5lID0gdGhpcy50b2tlbml6ZXIubGluZTtcbiAgICB0aGlzLnN0YXJ0Q29sdW1uID0gdGhpcy50b2tlbml6ZXIuY29sdW1uO1xuICB9LFxuXG4gIC8vIERhdGFcblxuICBiZWdpbkRhdGE6IGZ1bmN0aW9uIGJlZ2luRGF0YSgpIHtcbiAgICB0aGlzLnRva2VuID0ge1xuICAgICAgdHlwZTogJ0NoYXJzJyxcbiAgICAgIGNoYXJzOiAnJ1xuICAgIH07XG4gICAgdGhpcy50b2tlbnMucHVzaCh0aGlzLnRva2VuKTtcbiAgfSxcblxuICBhcHBlbmRUb0RhdGE6IGZ1bmN0aW9uIGFwcGVuZFRvRGF0YShjaGFyKSB7XG4gICAgdGhpcy50b2tlbi5jaGFycyArPSBjaGFyO1xuICB9LFxuXG4gIGZpbmlzaERhdGE6IGZ1bmN0aW9uIGZpbmlzaERhdGEoKSB7XG4gICAgdGhpcy5hZGRMb2NJbmZvKCk7XG4gIH0sXG5cbiAgLy8gQ29tbWVudFxuXG4gIGJlZ2luQ29tbWVudDogZnVuY3Rpb24gYmVnaW5Db21tZW50KCkge1xuICAgIHRoaXMudG9rZW4gPSB7XG4gICAgICB0eXBlOiAnQ29tbWVudCcsXG4gICAgICBjaGFyczogJydcbiAgICB9O1xuICAgIHRoaXMudG9rZW5zLnB1c2godGhpcy50b2tlbik7XG4gIH0sXG5cbiAgYXBwZW5kVG9Db21tZW50RGF0YTogZnVuY3Rpb24gYXBwZW5kVG9Db21tZW50RGF0YShjaGFyKSB7XG4gICAgdGhpcy50b2tlbi5jaGFycyArPSBjaGFyO1xuICB9LFxuXG4gIGZpbmlzaENvbW1lbnQ6IGZ1bmN0aW9uIGZpbmlzaENvbW1lbnQoKSB7XG4gICAgdGhpcy5hZGRMb2NJbmZvKCk7XG4gIH0sXG5cbiAgLy8gVGFncyAtIGJhc2ljXG5cbiAgYmVnaW5TdGFydFRhZzogZnVuY3Rpb24gYmVnaW5TdGFydFRhZygpIHtcbiAgICB0aGlzLnRva2VuID0ge1xuICAgICAgdHlwZTogJ1N0YXJ0VGFnJyxcbiAgICAgIHRhZ05hbWU6ICcnLFxuICAgICAgYXR0cmlidXRlczogW10sXG4gICAgICBzZWxmQ2xvc2luZzogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMudG9rZW5zLnB1c2godGhpcy50b2tlbik7XG4gIH0sXG5cbiAgYmVnaW5FbmRUYWc6IGZ1bmN0aW9uIGJlZ2luRW5kVGFnKCkge1xuICAgIHRoaXMudG9rZW4gPSB7XG4gICAgICB0eXBlOiAnRW5kVGFnJyxcbiAgICAgIHRhZ05hbWU6ICcnXG4gICAgfTtcbiAgICB0aGlzLnRva2Vucy5wdXNoKHRoaXMudG9rZW4pO1xuICB9LFxuXG4gIGZpbmlzaFRhZzogZnVuY3Rpb24gZmluaXNoVGFnKCkge1xuICAgIHRoaXMuYWRkTG9jSW5mbygpO1xuICB9LFxuXG4gIG1hcmtUYWdBc1NlbGZDbG9zaW5nOiBmdW5jdGlvbiBtYXJrVGFnQXNTZWxmQ2xvc2luZygpIHtcbiAgICB0aGlzLnRva2VuLnNlbGZDbG9zaW5nID0gdHJ1ZTtcbiAgfSxcblxuICAvLyBUYWdzIC0gbmFtZVxuXG4gIGFwcGVuZFRvVGFnTmFtZTogZnVuY3Rpb24gYXBwZW5kVG9UYWdOYW1lKGNoYXIpIHtcbiAgICB0aGlzLnRva2VuLnRhZ05hbWUgKz0gY2hhcjtcbiAgfSxcblxuICAvLyBUYWdzIC0gYXR0cmlidXRlc1xuXG4gIGJlZ2luQXR0cmlidXRlOiBmdW5jdGlvbiBiZWdpbkF0dHJpYnV0ZSgpIHtcbiAgICB0aGlzLl9jdXJyZW50QXR0cmlidXRlID0gW1wiXCIsIFwiXCIsIG51bGxdO1xuICAgIHRoaXMudG9rZW4uYXR0cmlidXRlcy5wdXNoKHRoaXMuX2N1cnJlbnRBdHRyaWJ1dGUpO1xuICB9LFxuXG4gIGFwcGVuZFRvQXR0cmlidXRlTmFtZTogZnVuY3Rpb24gYXBwZW5kVG9BdHRyaWJ1dGVOYW1lKGNoYXIpIHtcbiAgICB0aGlzLl9jdXJyZW50QXR0cmlidXRlWzBdICs9IGNoYXI7XG4gIH0sXG5cbiAgYmVnaW5BdHRyaWJ1dGVWYWx1ZTogZnVuY3Rpb24gYmVnaW5BdHRyaWJ1dGVWYWx1ZShpc1F1b3RlZCkge1xuICAgIHRoaXMuX2N1cnJlbnRBdHRyaWJ1dGVbMl0gPSBpc1F1b3RlZDtcbiAgfSxcblxuICBhcHBlbmRUb0F0dHJpYnV0ZVZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUb0F0dHJpYnV0ZVZhbHVlKGNoYXIpIHtcbiAgICB0aGlzLl9jdXJyZW50QXR0cmlidXRlWzFdID0gdGhpcy5fY3VycmVudEF0dHJpYnV0ZVsxXSB8fCBcIlwiO1xuICAgIHRoaXMuX2N1cnJlbnRBdHRyaWJ1dGVbMV0gKz0gY2hhcjtcbiAgfSxcblxuICBmaW5pc2hBdHRyaWJ1dGVWYWx1ZTogZnVuY3Rpb24gZmluaXNoQXR0cmlidXRlVmFsdWUoKSB7fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVG9rZW5pemVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5pc1NwYWNlID0gaXNTcGFjZTtcbmV4cG9ydHMuaXNBbHBoYSA9IGlzQWxwaGE7XG5leHBvcnRzLnByZXByb2Nlc3NJbnB1dCA9IHByZXByb2Nlc3NJbnB1dDtcbnZhciBXU1AgPSAvW1xcdFxcblxcZiBdLztcbnZhciBBTFBIQSA9IC9bQS1aYS16XS87XG52YXIgQ1JMRiA9IC9cXHJcXG4/L2c7XG5cbmZ1bmN0aW9uIGlzU3BhY2UoY2hhcikge1xuICByZXR1cm4gV1NQLnRlc3QoY2hhcik7XG59XG5cbmZ1bmN0aW9uIGlzQWxwaGEoY2hhcikge1xuICByZXR1cm4gQUxQSEEudGVzdChjaGFyKTtcbn1cblxuZnVuY3Rpb24gcHJlcHJvY2Vzc0lucHV0KGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKENSTEYsIFwiXFxuXCIpO1xufSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgXCJiZy13aGl0ZSBjb250YWluZXIgbXgtNCBtZDpteC1hdXRvIHNoYWRvdy1sZyBtdC0zMiBmbGV4IGZsZXgtcm93IG1kOnctMy81IHh4bDp3LTIvNSBqdXN0aWZ5LWJldHdlZW5cIlxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHt9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBtZDp3LTEvMiBwLThcIiB9LCBbXG4gICAgICAgIF9jKFwiZm9ybVwiLCB7IGF0dHJzOiB7IG1ldGhvZDogXCJQT1NUXCIsIGFjdGlvbjogX3ZtLnVybCB9IH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwiX3Rva2VuXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udG9rZW4gfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktNFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFLW1haWxcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm9sZEVtYWlsIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5lcnJvcnMuZW1haWxcbiAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJlZC1saWdodCBibG9jayBwdC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmVtYWlsWzBdKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuby11bmRlcmxpbmUgdGV4dC10ZWFsIHRleHQtc21cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJwYXNzd29yZC9yZXNldFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiRm9yZ290IFlvdXIgUGFzc3dvcmQ/XCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInctMS8yIHRleHQtY2VudGVyIGJnLXRlYWwtbGlnaHQgcC00IGhpZGRlbiBtZDpibG9ja1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtNHhsIHB0LTggbXQtOFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJHT09EV09SS1wiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZSB0ZXh0LXhsIHB0LTRcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiU2FuZSB3YXkgdG8gbWFuYWdlIHdvcmtcIilcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTRcIiB9LCBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmV5LWRhcmtlclwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlkOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgbmFtZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJweS00IHRleHQtZ3JleVwiIH0sIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJyZW1lbWJlciBtZVwiLFxuICAgICAgICAgIG5hbWU6IFwicmVtZW1iZXJcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIlxcclxcbiAgICAgICAgUmVtZW1iZXIgTWVcXHJcXG4gICAgICBcIilcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJweS00XCIgfSwgW1xuICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG5cIiwgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiTE9HSU5cIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZSdcclxuaW1wb3J0IENsaWNrT3V0c2lkZSBmcm9tICd2dWUtY2xpY2stb3V0c2lkZSdcclxuaW1wb3J0IGxpbmtpZnkgZnJvbSAndnVlLWxpbmtpZnknXHJcblxyXG53aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJylcclxuXHJcbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcclxuXHJcbndpbmRvdy5sdXhvbiA9IHJlcXVpcmUoJ2x1eG9uJylcclxuXHJcbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHtcclxuICAnWC1DU1JGLVRPS0VOJzogd2luZG93LkxhcmF2ZWwuY3NyZlRva2VuLFxyXG4gICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG59XHJcblxyXG4vKipcclxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXHJcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xyXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXHJcbiAqL1xyXG5cclxuaWYgKHR5cGVvZiBpbyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcclxuICAgIGJyb2FkY2FzdGVyOiAnc29ja2V0LmlvJyxcclxuICAgIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICc6NjAwMSdcclxuICB9KVxyXG59XHJcblxyXG53aW5kb3cuVnVlLm1peGluKHtcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZW5lcmF0ZVVybDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiAnaHR0cDovLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArICcvaW1hZ2UvYXZhdGFyLmpwZydcclxuICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpXHJcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyAnLycgKyB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbndpbmRvdy5WdWUuZmlsdGVyKCdsb2NhbGl6ZScsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gIGlmICghdmFsdWUpIHJldHVybiAnJ1xyXG4gIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxyXG4gIHJldHVybiB3aW5kb3cubGFuZ1t2YWx1ZV0gPyB3aW5kb3cubGFuZ1t2YWx1ZV0gOiB2YWx1ZVxyXG59KVxyXG5cclxud2luZG93LlZ1ZS5kaXJlY3RpdmUoJ2NsaWNrLW91dHNpZGUnLCBDbGlja091dHNpZGUpXHJcblxyXG5WdWUuZGlyZWN0aXZlKCdsaW5raWZpZWQnLCBsaW5raWZ5KVxyXG5cclxud2luZG93LlZ1ZS5jb21wb25lbnQoJ2ZvbnQtYXdlc29tZS1pY29uJywgRm9udEF3ZXNvbWVJY29uKVxyXG5cclxud2luZG93LkV2ZW50QnVzID0gbmV3IFZ1ZSgpXHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhM2I0NDk5JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9wcm9qZWN0cy9nb29kd29ya2xvY2FsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYTNiNDQ5OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYTNiNDQ5OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhM2I0NDk5JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFhM2I0NDk5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9sb2dpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhM2I0NDk5JlwiIiwiaW1wb3J0ICcuLy4uLy4uL2Jvb3RzdHJhcCdcclxuaW1wb3J0IGxvZ2luIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9hdXRoL2xvZ2luLnZ1ZSdcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gIGVsOiAnI2FwcCcsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgbG9naW5cclxuICB9XHJcbn0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=