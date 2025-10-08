(self["webpackChunkpapathemes_supermarket"] = self["webpackChunkpapathemes_supermarket"] || []).push([["assets_js_emthemes-modez_instant-load_js"],{

/***/ "./assets/js/emthemes-modez/instant-load.js":
/*!**************************************************!*\
  !*** ./assets/js/emthemes-modez/instant-load.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/size */ "./node_modules/lodash/size.js");
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/delay */ "./node_modules/lodash/delay.js");
/* harmony import */ var lodash_delay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_delay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _theme_common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme_global_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/global/foundation */ "./assets/js/theme/global/foundation.js");
/* harmony import */ var _theme_common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _theme_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-utils */ "./assets/js/emthemes-modez/theme-utils.js");
/* harmony import */ var _theme_global_quick_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../theme/global/quick-view */ "./assets/js/theme/global/quick-view.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








var isTouchDevice = (0,_theme_utils__WEBPACK_IMPORTED_MODULE_8__.checkTouchDevice)();
var history = window.history;
var Preloader = {
  cache: {},
  cacheLimit: 100,
  loading: {},
  /**
   * Wait until no other the same url loading
   * @param {String} cacheKey
   */
  waitLoading: function waitLoading(cacheKey) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (Preloader.loading[cacheKey]) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.n = 2;
            return new Promise(function (resolve) {
              var _check = function check() {
                if (!Preloader.loading[cacheKey]) {
                  resolve();
                } else {
                  lodash_delay__WEBPACK_IMPORTED_MODULE_1___default()(_check, 300);
                }
              };
              _check();
            });
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  /**
   * @param {Function} request Promise function
   * @param {String} cacheKey
   * @return {Promise}
   */
  load: function load(request, cacheKey) {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var response, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.n = 1;
            return _this.waitLoading(cacheKey);
          case 1:
            if (!Preloader.getCache(cacheKey)) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2, Preloader.getCache(cacheKey));
          case 2:
            Preloader.loading[cacheKey] = true;
            _context2.p = 3;
            _context2.n = 4;
            return request();
          case 4:
            response = _context2.v;
            Preloader.saveCache(response, cacheKey);
            delete Preloader.loading[cacheKey];
            return _context2.a(2, response);
          case 5:
            _context2.p = 5;
            _t = _context2.v;
            delete Preloader.loading[cacheKey];
            throw _t;
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 5]]);
    }))();
  },
  getCache: function getCache(cacheKey) {
    if (cacheKey && Preloader.cache[cacheKey]) {
      return Preloader.cache[cacheKey];
    }
    return null;
  },
  saveCache: function saveCache(data, cacheKey) {
    if (cacheKey) {
      if (lodash_size__WEBPACK_IMPORTED_MODULE_0___default()(Preloader.cache) >= Preloader.cacheLimit) {
        for (var k in Preloader.cache) {
          if (Preloader.cache.hasOwnProperty(k)) {
            delete Preloader.cache[k];
            break;
          }
        }
      }
      Preloader.cache[cacheKey] = data;
    }
  }
};
var InstantQuickView = /*#__PURE__*/function () {
  function InstantQuickView(context) {
    this.context = context;
    this.modal = (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_3__.defaultModal)();
    this.onMouseEnterOrClick = this.onMouseEnterOrClick.bind(this);
    this.unbindEvents();
    this.bindEvents();
  }

  /**
   * Load a product quickview content
   * @param {String} productId
   * @return {Promise}
   */
  var _proto = InstantQuickView.prototype;
  _proto.loadProduct = function loadProduct(productId) {
    var request = function request() {
      return new Promise(function (resolve, reject) {
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.product.getById(productId, {
          template: 'products/quick-view'
        }, function (err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        });
      });
    };
    return Preloader.load(request, "quick-view|" + productId);
  };
  _proto.onMouseEnterOrClick = function onMouseEnterOrClick(event) {
    var _this2 = this;
    event.preventDefault();
    var $el = $(event.currentTarget);
    if (event.type === 'click') {
      this.modal.open({
        size: 'large'
      });
    }
    this.loadProduct($el.data('productId')).then(function (response) {
      if (event.type === 'click') {
        _this2.modal.updateContent(response);
        _this2.modal.$content.find('.productView').addClass('productView--quickView');
        _this2.modal.$content.find('[data-slick]').slick();
        var newContext = (0,_theme_global_quick_view__WEBPACK_IMPORTED_MODULE_9__.initBulkOrderQuickView)($el[0], _this2.modal, _this2.context);
        (0,_theme_utils__WEBPACK_IMPORTED_MODULE_8__.loadRemoteBanners)(_this2.context, _this2.modal.$content);
        lodash_delay__WEBPACK_IMPORTED_MODULE_1___default()(function () {
          var $quickView = _this2.modal.$content.find('.quickView');
          var product;
          if ($('[data-also-bought] .productView-alsoBought-item', $quickView).length > 0) {
            product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($quickView, Object.assign({}, newContext, {
              enableAlsoBought: true
            }));
          } else {
            product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($quickView, newContext);
          }
          $('body').trigger('loaded.quickview', [product]);
          return product;
        }, 200);
        if (window.addthis && typeof window.addthis.toolbox === 'function') {
          window.addthis.toolbox('.addthis_toolbox');
        }
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    $('body').on('mouseenter click', '.quickview, .quickview-alt', this.onMouseEnterOrClick);
  };
  _proto.unbindEvents = function unbindEvents() {
    $('body').off('mouseenter click', '.quickview, .quickview-alt', this.onMouseEnterOrClick);
  };
  return InstantQuickView;
}();
var InstantLoad = /*#__PURE__*/function () {
  function InstantLoad(context) {
    // Won't init on touch screen
    if (isTouchDevice) {
      return;
    }
    this.context = context;
    this.$head = $('head');
    this.$body = $('body');
    this.$pageBody = $('.body').first();
    this.onMouseEnterOrClick = this.onMouseEnterOrClick.bind(this);
    this.onLoadPageManually = this.onLoadPageManually.bind(this);
    this.onPopstate = this.onPopstate.bind(this);
    if (!history.state) {
      history.replaceState({
        instantload: true,
        pageType: this.context.pageType
      }, document.title, window.location);
    }
    this.unbindEvents();
    this.bindEvents();
  }
  var _proto2 = InstantLoad.prototype;
  _proto2.initGlobal = function initGlobal($scope) {
    (0,_theme_global_foundation__WEBPACK_IMPORTED_MODULE_6__["default"])($(document));
    (0,_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])('[data-collapsible]', {
      $context: $scope
    });
    $('[data-slick]', $scope).slick();
    if (window.addthis && typeof window.addthis.toolbox === 'function') {
      window.addthis.toolbox('.addthis_toolbox');
    }
  };
  _proto2.redirect = function redirect(url) {
    window.location = url;
  };
  _proto2.isUnsupportedPage = function isUnsupportedPage(response) {
    return response.trim() === 'UNSUPPORTED' || !$(response).first().is('#instantload-html-element');
  };
  _proto2.loadPage = function loadPage(url, show, pushState, pageType) {
    var _this3 = this;
    if (show) {
      this.$pageBody.addClass('instantload-loading');
    }
    if (pushState) {
      try {
        history.pushState({
          instantload: true,
          pageType: this.context.pageType
        }, null, url);
      } catch (e) {
        if (show) {
          return this.redirect(url);
        }
        return;
      }
    }
    var config;
    if (pageType === 'home') {
      config = {
        carousel: this.context.themeSettings.homepage_show_carousel,
        products: {
          new: {
            limit: this.context.themeSettings.specialProductsTab_init_count
          },
          featured: {
            limit: this.context.themeSettings.specialProductsTab_init_count
          },
          top_sellers: {
            limit: this.context.themeSettings.specialProductsTab_init_count
          }
        },
        blog: {
          recent_posts: {
            limit: this.context.themeSettings.homepage_blog_posts_count
          }
        },
        customer: {
          recently_viewed_products: true
        },
        shop_by_brand: {
          limit: this.context.themeSettings.max_shop_by_brand
        },
        categories: true,
        cart: true
      };
    } else {
      config = {
        product: {
          videos: {
            limit: 100
          },
          reviews: {
            limit: this.context.themeSettings.productpage_reviews_count
          },
          related_products: {
            limit: this.context.themeSettings.productpage_related_products_count
          },
          similar_by_views: {
            limit: this.context.themeSettings.productpage_similar_by_views_count
          }
        },
        category: {
          shop_by_price: true,
          products: {
            limit: this.context.themeSettings.categorypage_products_per_page
          }
        },
        blog: {
          posts: {
            limit: 5,
            pages: 3,
            summary: 500
          },
          recent_posts: {
            limit: this.context.themeSettings.homepage_blog_posts_count
          }
        },
        products: {
          new: {
            limit: 5
          }
        },
        brands: {
          limit: 100
        },
        brand: {
          products: {
            limit: this.context.themeSettings.brandpage_products_per_page
          }
        },
        shop_by_brand: {
          limit: 9
        },
        customer: {
          recently_viewed_products: true
        },
        categories: true,
        cart: true
      };
    }
    var request = function request() {
      return new Promise(function (resolve, reject) {
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.getPage(url, {
          config: config
        }, function (err, response) {
          if (err || !response) {
            reject(err);
          } else {
            resolve(response);
          }
        });
      });
    };
    Preloader.load(request, "loadPage|" + url).then(function (response) {
      if (show) {
        if (_this3.isUnsupportedPage(response)) {
          return _this3.redirect(url);
        }
        _this3.$body.trigger('beforeload.instantload', [response]);

        // if some context variables cannot be supplied in ajax response
        window.themeInstantLoad_jsContext = _this3.context;
        var $response = $(response);
        var $respBody = $response.find('#instantload-body-element');
        $('html, body').scrollTop(0);

        // Remove the previous appended <head>'s child tags
        _this3.$head.children().each(function (i, el) {
          var $elm = $(el);
          if ($elm.is('[data-instantload-head-dynamic]')) {
            $elm.remove();
          }
        });

        // Remove title, meta[property] ...
        _this3.$head.children('title, meta[property], link[rel=amphtml], link[rel=canonical]').remove();

        // Append new <head>'s child tags
        $response.find('#instantload-head-element').children().each(function (i, el) {
          var $elm = $(el);
          $elm.attr('data-instantload-head-dynamic', '');
          _this3.$head.append($elm);
        });

        // Replace <body>'s classes
        _this3.$body.attr('class', $respBody.attr('class'));

        // Replace '.body' element
        var $pageBody = $response.find('#instantload-page-body');
        if ($pageBody.length > 0) {
          _this3.$pageBody.empty().append($pageBody.children());
          _this3.initGlobal(_this3.$pageBody);
        }

        // Close or expand the vertical categories menu on the header
        if (_this3.context.themeSettings.homepage_expand_categories_menu) {
          if (pageType === 'home') {
            $('#emthemesModez-verticalCategories').addClass('emthemesModez-verticalCategories--open');
          } else {
            $('#emthemesModez-verticalCategories').removeClass('emthemesModez-verticalCategories--open');
          }
        }

        // Replace top & bottom banners
        _this3.$body.find('[data-banner-location=top]').empty().append($response.find('#instantload-banners-top').children());
        _this3.$body.find('[data-banner-location=bottom]').empty().append($response.find('#instantload-banners-bottom').children());

        // Remove and append the new script #instantload-script
        _this3.$body.find('#instantload-script').remove();
        _this3.$body.append($response.find('#instantload-script'));

        // Remove and append new elements match [data-instantload-body-dynamic]
        // Useful for loading third-party scripts
        _this3.$body.children('[data-instantload-body-dynamic]').remove();
        _this3.$body.append($respBody.children('[data-instantload-body-dynamic]'));
        _this3.$pageBody.removeClass('instantload-loading').addClass('instantload-loaded');
        lodash_delay__WEBPACK_IMPORTED_MODULE_1___default()(function () {
          return _this3.$pageBody.removeClass('instantload-loaded');
        }, 300);
        _this3.$body.trigger('loaded.instantload', [response]);
      }
    }).catch(function () {
      if (show) {
        return _this3.redirect(url);
      }
    });
  };
  _proto2.onMouseEnterOrClick = function onMouseEnterOrClick(event) {
    event.preventDefault();
    var $el = $(event.currentTarget);
    var data = $el.data('instantload');
    var url = (typeof data === 'object' ? data.url : null) || $el.data('instantloadUrl') || $el.prop('href');
    var pageType = typeof data === 'object' ? data.page : null;
    if (!url) {
      return;
    }
    this.loadPage(url, event.type === 'click', event.type === 'click', pageType);
  };
  _proto2.onPopstate = function onPopstate() {
    // console.log('onPopstate - state:', history.state);
    if (!history.state) {
      return;
    }
    // console.log(history);

    if (history.state.instantload) {
      this.loadPage(window.location, true, false, history.state.pageType);
    } else {
      // Unsupported pages instantly at this stage - reload it
      window.location.reload();
    }
  };
  _proto2.onLoadPageManually = function onLoadPageManually(event, url, eventType, pageType) {
    if (eventType === void 0) {
      eventType = '';
    }
    if (pageType === void 0) {
      pageType = null;
    }
    this.loadPage(url, eventType === 'click', eventType === 'click', pageType);
  };
  _proto2.bindEvents = function bindEvents() {
    $('body, [data-menu]').on('mouseenter click', '[data-instantload], [data-instantload-url]', this.onMouseEnterOrClick);
    $('body').on('loadPage.instantload', this.onLoadPageManually);
    $(window).on('popstate', this.onPopstate);
  };
  _proto2.unbindEvents = function unbindEvents() {
    $('body, [data-menu]').off('mouseenter click', '[data-instantload], [data-instantload-url]', this.onMouseEnterOrClick);
    $('body').off('loadPage.instantload', this.onLoadPageManually);
    $(window).off('popstate', this.onPopstate);
  };
  return InstantLoad;
}();
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  // eslint-disable-next-line no-new
  new InstantQuickView(context);

  // eslint-disable-next-line no-new
  new InstantLoad(context);
}

/***/ }),

/***/ "./node_modules/lodash/_asciiSize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_asciiSize.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js");

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),

/***/ "./node_modules/lodash/_baseDelay.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseDelay.js ***!
  \*******************************************/
/***/ ((module) => {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function() { func.apply(undefined, args); }, wait);
}

module.exports = baseDelay;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_stringSize.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stringSize.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiSize = __webpack_require__(/*! ./_asciiSize */ "./node_modules/lodash/_asciiSize.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeSize = __webpack_require__(/*! ./_unicodeSize */ "./node_modules/lodash/_unicodeSize.js");

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),

/***/ "./node_modules/lodash/_unicodeSize.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_unicodeSize.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),

/***/ "./node_modules/lodash/delay.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/delay.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseDelay = __webpack_require__(/*! ./_baseDelay */ "./node_modules/lodash/_baseDelay.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/**
 * Invokes `func` after `wait` milliseconds. Any additional arguments are
 * provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.delay(function(text) {
 *   console.log(text);
 * }, 1000, 'later');
 * // => Logs 'later' after one second.
 */
var delay = baseRest(function(func, wait, args) {
  return baseDelay(func, toNumber(wait) || 0, args);
});

module.exports = delay;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/size.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/size.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__(/*! ./isString */ "./node_modules/lodash/isString.js"),
    stringSize = __webpack_require__(/*! ./_stringSize */ "./node_modules/lodash/_stringSize.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

module.exports = size;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19lbXRoZW1lcy1tb2Rlel9pbnN0YW50LWxvYWRfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENB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QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7O0FDM0JBLGlCQUFpQixtQkFBTyxDQUFDLDJEQUFlO0FBQ3hDLGNBQWMsbUJBQU8sQ0FBQyxtREFBVztBQUNqQyxtQkFBbUIsbUJBQU8sQ0FBQyw2REFBZ0I7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQzdCQSxlQUFlLG1CQUFPLENBQUMsdURBQWE7QUFDcEMsYUFBYSxtQkFBTyxDQUFDLG1EQUFXO0FBQ2hDLGtCQUFrQixtQkFBTyxDQUFDLDJEQUFlO0FBQ3pDLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTtBQUNuQyxpQkFBaUIsbUJBQU8sQ0FBQywyREFBZTs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGF0aGVtZXMtc3VwZXJtYXJrZXQvLi9hc3NldHMvanMvZW10aGVtZXMtbW9kZXovaW5zdGFudC1sb2FkLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMtc3VwZXJtYXJrZXQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc2NpaVNpemUuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1zdXBlcm1hcmtldC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VEZWxheS5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLXN1cGVybWFya2V0Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMtc3VwZXJtYXJrZXQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMtc3VwZXJtYXJrZXQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdTaXplLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMtc3VwZXJtYXJrZXQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL191bmljb2RlU2l6ZS5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLXN1cGVybWFya2V0Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWxheS5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLXN1cGVybWFya2V0Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLXN1cGVybWFya2V0Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi4vdGhlbWUvZ2xvYmFsL21vZGFsJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuLi90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnO1xuaW1wb3J0IGZvdW5kYXRpb24gZnJvbSAnLi4vdGhlbWUvZ2xvYmFsL2ZvdW5kYXRpb24nO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuLi90aGVtZS9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IHsgY2hlY2tUb3VjaERldmljZSwgbG9hZFJlbW90ZUJhbm5lcnMgfSBmcm9tICcuL3RoZW1lLXV0aWxzJztcbmltcG9ydCB7IGluaXRCdWxrT3JkZXJRdWlja1ZpZXcgfSBmcm9tICcuLi90aGVtZS9nbG9iYWwvcXVpY2stdmlldyc7XG5cbmNvbnN0IGlzVG91Y2hEZXZpY2UgPSBjaGVja1RvdWNoRGV2aWNlKCk7XG5jb25zdCBoaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG5jb25zdCBQcmVsb2FkZXIgPSB7XG4gICAgY2FjaGU6IHt9LFxuICAgIGNhY2hlTGltaXQ6IDEwMCxcbiAgICBsb2FkaW5nOiB7fSxcblxuICAgIC8qKlxuICAgICAqIFdhaXQgdW50aWwgbm8gb3RoZXIgdGhlIHNhbWUgdXJsIGxvYWRpbmdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FjaGVLZXlcbiAgICAgKi9cbiAgICBhc3luYyB3YWl0TG9hZGluZyhjYWNoZUtleSkge1xuICAgICAgICBpZiAoIVByZWxvYWRlci5sb2FkaW5nW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIVByZWxvYWRlci5sb2FkaW5nW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kZWxheShjaGVjaywgMzAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlcXVlc3QgUHJvbWlzZSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYWNoZUtleVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG4gICAgYXN5bmMgbG9hZChyZXF1ZXN0LCBjYWNoZUtleSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgIGF3YWl0IHRoaXMud2FpdExvYWRpbmcoY2FjaGVLZXkpO1xuXG4gICAgICAgIGlmIChQcmVsb2FkZXIuZ2V0Q2FjaGUoY2FjaGVLZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJlbG9hZGVyLmdldENhY2hlKGNhY2hlS2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIFByZWxvYWRlci5sb2FkaW5nW2NhY2hlS2V5XSA9IHRydWU7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdCgpO1xuICAgICAgICAgICAgUHJlbG9hZGVyLnNhdmVDYWNoZShyZXNwb25zZSwgY2FjaGVLZXkpO1xuICAgICAgICAgICAgZGVsZXRlIFByZWxvYWRlci5sb2FkaW5nW2NhY2hlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZGVsZXRlIFByZWxvYWRlci5sb2FkaW5nW2NhY2hlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0Q2FjaGUoY2FjaGVLZXkpIHtcbiAgICAgICAgaWYgKGNhY2hlS2V5ICYmIFByZWxvYWRlci5jYWNoZVtjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcmVsb2FkZXIuY2FjaGVbY2FjaGVLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBzYXZlQ2FjaGUoZGF0YSwgY2FjaGVLZXkpIHtcbiAgICAgICAgaWYgKGNhY2hlS2V5KSB7XG4gICAgICAgICAgICBpZiAoXy5zaXplKFByZWxvYWRlci5jYWNoZSkgPj0gUHJlbG9hZGVyLmNhY2hlTGltaXQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGsgaW4gUHJlbG9hZGVyLmNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChQcmVsb2FkZXIuY2FjaGUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBQcmVsb2FkZXIuY2FjaGVba107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFByZWxvYWRlci5jYWNoZVtjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmNsYXNzIEluc3RhbnRRdWlja1ZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICB0aGlzLm9uTW91c2VFbnRlck9yQ2xpY2sgPSB0aGlzLm9uTW91c2VFbnRlck9yQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhIHByb2R1Y3QgcXVpY2t2aWV3IGNvbnRlbnRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvZHVjdElkXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBsb2FkUHJvZHVjdChwcm9kdWN0SWQpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocHJvZHVjdElkLCB7IHRlbXBsYXRlOiAncHJvZHVjdHMvcXVpY2stdmlldycgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFByZWxvYWRlci5sb2FkKHJlcXVlc3QsIGBxdWljay12aWV3fCR7cHJvZHVjdElkfWApO1xuICAgIH1cblxuICAgIG9uTW91c2VFbnRlck9yQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgdGhpcy5tb2RhbC5vcGVuKHsgc2l6ZTogJ2xhcmdlJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3QoJGVsLmRhdGEoJ3Byb2R1Y3RJZCcpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwuJGNvbnRlbnQuZmluZCgnLnByb2R1Y3RWaWV3JykuYWRkQ2xhc3MoJ3Byb2R1Y3RWaWV3LS1xdWlja1ZpZXcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLiRjb250ZW50LmZpbmQoJ1tkYXRhLXNsaWNrXScpLnNsaWNrKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29udGV4dCA9IGluaXRCdWxrT3JkZXJRdWlja1ZpZXcoJGVsWzBdLCB0aGlzLm1vZGFsLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGxvYWRSZW1vdGVCYW5uZXJzKHRoaXMuY29udGV4dCwgdGhpcy5tb2RhbC4kY29udGVudCk7XG4gICAgICAgICAgICAgICAgXy5kZWxheSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRxdWlja1ZpZXcgPSB0aGlzLm1vZGFsLiRjb250ZW50LmZpbmQoJy5xdWlja1ZpZXcnKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS1hbHNvLWJvdWdodF0gLnByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbScsICRxdWlja1ZpZXcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QgPSBuZXcgUHJvZHVjdERldGFpbHMoJHF1aWNrVmlldywgeyAuLi5uZXdDb250ZXh0LCBlbmFibGVBbHNvQm91Z2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCA9IG5ldyBQcm9kdWN0RGV0YWlscygkcXVpY2tWaWV3LCBuZXdDb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignbG9hZGVkLnF1aWNrdmlldycsIFtwcm9kdWN0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0O1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5hZGR0aGlzICYmIHR5cGVvZiB3aW5kb3cuYWRkdGhpcy50b29sYm94ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGR0aGlzLnRvb2xib3goJy5hZGR0aGlzX3Rvb2xib3gnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgICQoJ2JvZHknKS5vbignbW91c2VlbnRlciBjbGljaycsICcucXVpY2t2aWV3LCAucXVpY2t2aWV3LWFsdCcsIHRoaXMub25Nb3VzZUVudGVyT3JDbGljayk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAkKCdib2R5Jykub2ZmKCdtb3VzZWVudGVyIGNsaWNrJywgJy5xdWlja3ZpZXcsIC5xdWlja3ZpZXctYWx0JywgdGhpcy5vbk1vdXNlRW50ZXJPckNsaWNrKTtcbiAgICB9XG59XG5cbmNsYXNzIEluc3RhbnRMb2FkIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIC8vIFdvbid0IGluaXQgb24gdG91Y2ggc2NyZWVuXG4gICAgICAgIGlmIChpc1RvdWNoRGV2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLiRoZWFkID0gJCgnaGVhZCcpO1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICB0aGlzLiRwYWdlQm9keSA9ICQoJy5ib2R5JykuZmlyc3QoKTtcblxuICAgICAgICB0aGlzLm9uTW91c2VFbnRlck9yQ2xpY2sgPSB0aGlzLm9uTW91c2VFbnRlck9yQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkxvYWRQYWdlTWFudWFsbHkgPSB0aGlzLm9uTG9hZFBhZ2VNYW51YWxseS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUG9wc3RhdGUgPSB0aGlzLm9uUG9wc3RhdGUuYmluZCh0aGlzKTtcblxuICAgICAgICBpZiAoIWhpc3Rvcnkuc3RhdGUpIHtcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHsgaW5zdGFudGxvYWQ6IHRydWUsIHBhZ2VUeXBlOiB0aGlzLmNvbnRleHQucGFnZVR5cGUgfSwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0R2xvYmFsKCRzY29wZSkge1xuICAgICAgICBmb3VuZGF0aW9uKCQoZG9jdW1lbnQpKTtcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCdbZGF0YS1jb2xsYXBzaWJsZV0nLCB7ICRjb250ZXh0OiAkc2NvcGUgfSk7XG4gICAgICAgICQoJ1tkYXRhLXNsaWNrXScsICRzY29wZSkuc2xpY2soKTtcbiAgICAgICAgaWYgKHdpbmRvdy5hZGR0aGlzICYmIHR5cGVvZiB3aW5kb3cuYWRkdGhpcy50b29sYm94ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkdGhpcy50b29sYm94KCcuYWRkdGhpc190b29sYm94Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWRpcmVjdCh1cmwpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgIH1cblxuICAgIGlzVW5zdXBwb3J0ZWRQYWdlKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS50cmltKCkgPT09ICdVTlNVUFBPUlRFRCcgfHwgISQocmVzcG9uc2UpLmZpcnN0KCkuaXMoJyNpbnN0YW50bG9hZC1odG1sLWVsZW1lbnQnKTtcbiAgICB9XG5cbiAgICBsb2FkUGFnZSh1cmwsIHNob3csIHB1c2hTdGF0ZSwgcGFnZVR5cGUpIHtcbiAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgIHRoaXMuJHBhZ2VCb2R5LmFkZENsYXNzKCdpbnN0YW50bG9hZC1sb2FkaW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHVzaFN0YXRlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHsgaW5zdGFudGxvYWQ6IHRydWUsIHBhZ2VUeXBlOiB0aGlzLmNvbnRleHQucGFnZVR5cGUgfSwgbnVsbCwgdXJsKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWRpcmVjdCh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29uZmlnO1xuICAgICAgICBpZiAocGFnZVR5cGUgPT09ICdob21lJykge1xuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGNhcm91c2VsOiB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lcGFnZV9zaG93X2Nhcm91c2VsLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5ldzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnNwZWNpYWxQcm9kdWN0c1RhYl9pbml0X2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnNwZWNpYWxQcm9kdWN0c1RhYl9pbml0X2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b3Bfc2VsbGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnNwZWNpYWxQcm9kdWN0c1RhYl9pbml0X2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmxvZzoge1xuICAgICAgICAgICAgICAgICAgICByZWNlbnRfcG9zdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lcGFnZV9ibG9nX3Bvc3RzX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY3VzdG9tZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVjZW50bHlfdmlld2VkX3Byb2R1Y3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvcF9ieV9icmFuZDoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MubWF4X3Nob3BfYnlfYnJhbmQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhcnQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogMTAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdHBhZ2VfcmV2aWV3c19jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlZF9wcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3RwYWdlX3JlbGF0ZWRfcHJvZHVjdHNfY291bnQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNpbWlsYXJfYnlfdmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0cGFnZV9zaW1pbGFyX2J5X3ZpZXdzX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5jYXRlZ29yeXBhZ2VfcHJvZHVjdHNfcGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBibG9nOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VzOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeTogNTAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZWNlbnRfcG9zdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lcGFnZV9ibG9nX3Bvc3RzX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogNSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJyYW5kczoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogMTAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5icmFuZHBhZ2VfcHJvZHVjdHNfcGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG9wX2J5X2JyYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiA5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY3VzdG9tZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVjZW50bHlfdmlld2VkX3Byb2R1Y3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJ0OiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgY29uZmlnIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciB8fCAhcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFByZWxvYWRlci5sb2FkKHJlcXVlc3QsIGBsb2FkUGFnZXwke3VybH1gKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Vuc3VwcG9ydGVkUGFnZShyZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVkaXJlY3QodXJsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LnRyaWdnZXIoJ2JlZm9yZWxvYWQuaW5zdGFudGxvYWQnLCBbcmVzcG9uc2VdKTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIHNvbWUgY29udGV4dCB2YXJpYWJsZXMgY2Fubm90IGJlIHN1cHBsaWVkIGluIGFqYXggcmVzcG9uc2VcbiAgICAgICAgICAgICAgICB3aW5kb3cudGhlbWVJbnN0YW50TG9hZF9qc0NvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkcmVzcG9uc2UgPSAkKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkcmVzcEJvZHkgPSAkcmVzcG9uc2UuZmluZCgnI2luc3RhbnRsb2FkLWJvZHktZWxlbWVudCcpO1xuXG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLnNjcm9sbFRvcCgwKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcHJldmlvdXMgYXBwZW5kZWQgPGhlYWQ+J3MgY2hpbGQgdGFnc1xuICAgICAgICAgICAgICAgIHRoaXMuJGhlYWQuY2hpbGRyZW4oKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZWxtID0gJChlbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxtLmlzKCdbZGF0YS1pbnN0YW50bG9hZC1oZWFkLWR5bmFtaWNdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRlbG0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aXRsZSwgbWV0YVtwcm9wZXJ0eV0gLi4uXG4gICAgICAgICAgICAgICAgdGhpcy4kaGVhZC5jaGlsZHJlbigndGl0bGUsIG1ldGFbcHJvcGVydHldLCBsaW5rW3JlbD1hbXBodG1sXSwgbGlua1tyZWw9Y2Fub25pY2FsXScpLnJlbW92ZSgpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBBcHBlbmQgbmV3IDxoZWFkPidzIGNoaWxkIHRhZ3NcbiAgICAgICAgICAgICAgICAkcmVzcG9uc2UuZmluZCgnI2luc3RhbnRsb2FkLWhlYWQtZWxlbWVudCcpLmNoaWxkcmVuKCkuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsbSA9ICQoZWwpO1xuICAgICAgICAgICAgICAgICAgICAkZWxtLmF0dHIoJ2RhdGEtaW5zdGFudGxvYWQtaGVhZC1keW5hbWljJywgJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRoZWFkLmFwcGVuZCgkZWxtKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgPGJvZHk+J3MgY2xhc3Nlc1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkuYXR0cignY2xhc3MnLCAkcmVzcEJvZHkuYXR0cignY2xhc3MnKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlICcuYm9keScgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0ICRwYWdlQm9keSA9ICRyZXNwb25zZS5maW5kKCcjaW5zdGFudGxvYWQtcGFnZS1ib2R5Jyk7XG4gICAgICAgICAgICAgICAgaWYgKCRwYWdlQm9keS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhZ2VCb2R5LmVtcHR5KCkuYXBwZW5kKCRwYWdlQm9keS5jaGlsZHJlbigpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0R2xvYmFsKHRoaXMuJHBhZ2VCb2R5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDbG9zZSBvciBleHBhbmQgdGhlIHZlcnRpY2FsIGNhdGVnb3JpZXMgbWVudSBvbiB0aGUgaGVhZGVyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVwYWdlX2V4cGFuZF9jYXRlZ29yaWVzX21lbnUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VUeXBlID09PSAnaG9tZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlbXRoZW1lc01vZGV6LXZlcnRpY2FsQ2F0ZWdvcmllcycpLmFkZENsYXNzKCdlbXRoZW1lc01vZGV6LXZlcnRpY2FsQ2F0ZWdvcmllcy0tb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2VtdGhlbWVzTW9kZXotdmVydGljYWxDYXRlZ29yaWVzJykucmVtb3ZlQ2xhc3MoJ2VtdGhlbWVzTW9kZXotdmVydGljYWxDYXRlZ29yaWVzLS1vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRvcCAmIGJvdHRvbSBiYW5uZXJzXG4gICAgICAgICAgICAgICAgdGhpcy4kYm9keS5maW5kKCdbZGF0YS1iYW5uZXItbG9jYXRpb249dG9wXScpLmVtcHR5KCkuYXBwZW5kKCRyZXNwb25zZS5maW5kKCcjaW5zdGFudGxvYWQtYmFubmVycy10b3AnKS5jaGlsZHJlbigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LmZpbmQoJ1tkYXRhLWJhbm5lci1sb2NhdGlvbj1ib3R0b21dJykuZW1wdHkoKS5hcHBlbmQoJHJlc3BvbnNlLmZpbmQoJyNpbnN0YW50bG9hZC1iYW5uZXJzLWJvdHRvbScpLmNoaWxkcmVuKCkpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFuZCBhcHBlbmQgdGhlIG5ldyBzY3JpcHQgI2luc3RhbnRsb2FkLXNjcmlwdFxuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkuZmluZCgnI2luc3RhbnRsb2FkLXNjcmlwdCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkuYXBwZW5kKCRyZXNwb25zZS5maW5kKCcjaW5zdGFudGxvYWQtc2NyaXB0JykpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFuZCBhcHBlbmQgbmV3IGVsZW1lbnRzIG1hdGNoIFtkYXRhLWluc3RhbnRsb2FkLWJvZHktZHluYW1pY11cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIGxvYWRpbmcgdGhpcmQtcGFydHkgc2NyaXB0c1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkuY2hpbGRyZW4oJ1tkYXRhLWluc3RhbnRsb2FkLWJvZHktZHluYW1pY10nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LmFwcGVuZCgkcmVzcEJvZHkuY2hpbGRyZW4oJ1tkYXRhLWluc3RhbnRsb2FkLWJvZHktZHluYW1pY10nKSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRwYWdlQm9keS5yZW1vdmVDbGFzcygnaW5zdGFudGxvYWQtbG9hZGluZycpLmFkZENsYXNzKCdpbnN0YW50bG9hZC1sb2FkZWQnKTtcbiAgICAgICAgICAgICAgICBfLmRlbGF5KCgpID0+IHRoaXMuJHBhZ2VCb2R5LnJlbW92ZUNsYXNzKCdpbnN0YW50bG9hZC1sb2FkZWQnKSwgMzAwKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkudHJpZ2dlcignbG9hZGVkLmluc3RhbnRsb2FkJywgW3Jlc3BvbnNlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVkaXJlY3QodXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZUVudGVyT3JDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAkZWwuZGF0YSgnaW5zdGFudGxvYWQnKTtcbiAgICAgICAgY29uc3QgdXJsID0gKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyA/IGRhdGEudXJsIDogbnVsbCkgfHwgJGVsLmRhdGEoJ2luc3RhbnRsb2FkVXJsJykgfHwgJGVsLnByb3AoJ2hyZWYnKTtcbiAgICAgICAgY29uc3QgcGFnZVR5cGUgPSB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgPyBkYXRhLnBhZ2UgOiBudWxsO1xuXG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRQYWdlKHVybCwgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJywgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJywgcGFnZVR5cGUpO1xuICAgIH1cblxuICAgIG9uUG9wc3RhdGUoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvblBvcHN0YXRlIC0gc3RhdGU6JywgaGlzdG9yeS5zdGF0ZSk7XG4gICAgICAgIGlmICghaGlzdG9yeS5zdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhpc3RvcnkpO1xuXG4gICAgICAgIGlmIChoaXN0b3J5LnN0YXRlLmluc3RhbnRsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRQYWdlKHdpbmRvdy5sb2NhdGlvbiwgdHJ1ZSwgZmFsc2UsIGhpc3Rvcnkuc3RhdGUucGFnZVR5cGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVW5zdXBwb3J0ZWQgcGFnZXMgaW5zdGFudGx5IGF0IHRoaXMgc3RhZ2UgLSByZWxvYWQgaXRcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZFBhZ2VNYW51YWxseShldmVudCwgdXJsLCBldmVudFR5cGUgPSAnJywgcGFnZVR5cGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubG9hZFBhZ2UodXJsLCBldmVudFR5cGUgPT09ICdjbGljaycsIGV2ZW50VHlwZSA9PT0gJ2NsaWNrJywgcGFnZVR5cGUpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgICQoJ2JvZHksIFtkYXRhLW1lbnVdJykub24oJ21vdXNlZW50ZXIgY2xpY2snLCAnW2RhdGEtaW5zdGFudGxvYWRdLCBbZGF0YS1pbnN0YW50bG9hZC11cmxdJywgdGhpcy5vbk1vdXNlRW50ZXJPckNsaWNrKTtcbiAgICAgICAgJCgnYm9keScpLm9uKCdsb2FkUGFnZS5pbnN0YW50bG9hZCcsIHRoaXMub25Mb2FkUGFnZU1hbnVhbGx5KTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BzdGF0ZSk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAkKCdib2R5LCBbZGF0YS1tZW51XScpLm9mZignbW91c2VlbnRlciBjbGljaycsICdbZGF0YS1pbnN0YW50bG9hZF0sIFtkYXRhLWluc3RhbnRsb2FkLXVybF0nLCB0aGlzLm9uTW91c2VFbnRlck9yQ2xpY2spO1xuICAgICAgICAkKCdib2R5Jykub2ZmKCdsb2FkUGFnZS5pbnN0YW50bG9hZCcsIHRoaXMub25Mb2FkUGFnZU1hbnVhbGx5KTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncG9wc3RhdGUnLCB0aGlzLm9uUG9wc3RhdGUpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbiAgICBuZXcgSW5zdGFudFF1aWNrVmlldyhjb250ZXh0KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbiAgICBuZXcgSW5zdGFudExvYWQoY29udGV4dCk7XG59XG4iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgc2l6ZSBvZiBhbiBBU0NJSSBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzdHJpbmcgc2l6ZS5cbiAqL1xudmFyIGFzY2lpU2l6ZSA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlTaXplO1xuIiwiLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5kZWxheWAgYW5kIGBfLmRlZmVyYCB3aGljaCBhY2NlcHRzIGBhcmdzYFxuICogdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlbGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IHdhaXQgVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkgaW52b2NhdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqIEByZXR1cm5zIHtudW1iZXJ8T2JqZWN0fSBSZXR1cm5zIHRoZSB0aW1lciBpZCBvciB0aW1lb3V0IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gYmFzZURlbGF5KGZ1bmMsIHdhaXQsIGFyZ3MpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTsgfSwgd2FpdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZURlbGF5O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG4iLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3Mgd2l0aCBbemVyby13aWR0aCBqb2luZXJzIG9yIGNvZGUgcG9pbnRzIGZyb20gdGhlIGFzdHJhbCBwbGFuZXNdKGh0dHA6Ly9lZXYuZWUvYmxvZy8yMDE1LzA5LzEyL2RhcmstY29ybmVycy1vZi11bmljb2RlLykuICovXG52YXIgcmVIYXNVbmljb2RlID0gUmVnRXhwKCdbJyArIHJzWldKICsgcnNBc3RyYWxSYW5nZSAgKyByc0NvbWJvUmFuZ2UgKyByc1ZhclJhbmdlICsgJ10nKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHN5bWJvbCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlO1xuIiwidmFyIGFzY2lpU2l6ZSA9IHJlcXVpcmUoJy4vX2FzY2lpU2l6ZScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgdW5pY29kZVNpemUgPSByZXF1aXJlKCcuL191bmljb2RlU2l6ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG51bWJlciBvZiBzeW1ib2xzIGluIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHN0cmluZyBzaXplLlxuICovXG5mdW5jdGlvbiBzdHJpbmdTaXplKHN0cmluZykge1xuICByZXR1cm4gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgPyB1bmljb2RlU2l6ZShzdHJpbmcpXG4gICAgOiBhc2NpaVNpemUoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdTaXplO1xuIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXN0cmFsID0gJ1snICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbixcbiAgICByc1N5bWJvbCA9ICcoPzonICsgW3JzTm9uQXN0cmFsICsgcnNDb21ibyArICc/JywgcnNDb21ibywgcnNSZWdpb25hbCwgcnNTdXJyUGFpciwgcnNBc3RyYWxdLmpvaW4oJ3wnKSArICcpJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggW3N0cmluZyBzeW1ib2xzXShodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC11bmljb2RlKS4gKi9cbnZhciByZVVuaWNvZGUgPSBSZWdFeHAocnNGaXR6ICsgJyg/PScgKyByc0ZpdHogKyAnKXwnICsgcnNTeW1ib2wgKyByc1NlcSwgJ2cnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBzaXplIG9mIGEgVW5pY29kZSBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzdHJpbmcgc2l6ZS5cbiAqL1xuZnVuY3Rpb24gdW5pY29kZVNpemUoc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSByZVVuaWNvZGUubGFzdEluZGV4ID0gMDtcbiAgd2hpbGUgKHJlVW5pY29kZS50ZXN0KHN0cmluZykpIHtcbiAgICArK3Jlc3VsdDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVTaXplO1xuIiwidmFyIGJhc2VEZWxheSA9IHJlcXVpcmUoJy4vX2Jhc2VEZWxheScpLFxuICAgIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqXG4gKiBJbnZva2VzIGBmdW5jYCBhZnRlciBgd2FpdGAgbWlsbGlzZWNvbmRzLiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYXJlXG4gKiBwcm92aWRlZCB0byBgZnVuY2Agd2hlbiBpdCdzIGludm9rZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWxheS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB3YWl0IFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5IGludm9jYXRpb24uXG4gKiBAcGFyYW0gey4uLip9IFthcmdzXSBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVyIGlkLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlbGF5KGZ1bmN0aW9uKHRleHQpIHtcbiAqICAgY29uc29sZS5sb2codGV4dCk7XG4gKiB9LCAxMDAwLCAnbGF0ZXInKTtcbiAqIC8vID0+IExvZ3MgJ2xhdGVyJyBhZnRlciBvbmUgc2Vjb25kLlxuICovXG52YXIgZGVsYXkgPSBiYXNlUmVzdChmdW5jdGlvbihmdW5jLCB3YWl0LCBhcmdzKSB7XG4gIHJldHVybiBiYXNlRGVsYXkoZnVuYywgdG9OdW1iZXIod2FpdCkgfHwgMCwgYXJncyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWxheTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTdHJpbmdgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzdHJpbmcsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N0cmluZygnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N0cmluZygxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHxcbiAgICAoIWlzQXJyYXkodmFsdWUpICYmIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3RyaW5nVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmluZztcbiIsInZhciBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNTdHJpbmcgPSByZXF1aXJlKCcuL2lzU3RyaW5nJyksXG4gICAgc3RyaW5nU2l6ZSA9IHJlcXVpcmUoJy4vX3N0cmluZ1NpemUnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKipcbiAqIEdldHMgdGhlIHNpemUgb2YgYGNvbGxlY3Rpb25gIGJ5IHJldHVybmluZyBpdHMgbGVuZ3RoIGZvciBhcnJheS1saWtlXG4gKiB2YWx1ZXMgb3IgdGhlIG51bWJlciBvZiBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBmb3Igb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb2xsZWN0aW9uIHNpemUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uc2l6ZShbMSwgMiwgM10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uc2l6ZSh7ICdhJzogMSwgJ2InOiAyIH0pO1xuICogLy8gPT4gMlxuICpcbiAqIF8uc2l6ZSgncGViYmxlcycpO1xuICogLy8gPT4gN1xuICovXG5mdW5jdGlvbiBzaXplKGNvbGxlY3Rpb24pIHtcbiAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGlmIChpc0FycmF5TGlrZShjb2xsZWN0aW9uKSkge1xuICAgIHJldHVybiBpc1N0cmluZyhjb2xsZWN0aW9uKSA/IHN0cmluZ1NpemUoY29sbGVjdGlvbikgOiBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgfVxuICB2YXIgdGFnID0gZ2V0VGFnKGNvbGxlY3Rpb24pO1xuICBpZiAodGFnID09IG1hcFRhZyB8fCB0YWcgPT0gc2V0VGFnKSB7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24uc2l6ZTtcbiAgfVxuICByZXR1cm4gYmFzZUtleXMoY29sbGVjdGlvbikubGVuZ3RoO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpemU7XG4iXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJyZXR1cm4iLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJ1dGlscyIsImRlZmF1bHRNb2RhbCIsIlByb2R1Y3REZXRhaWxzIiwiZm91bmRhdGlvbiIsImNvbGxhcHNpYmxlRmFjdG9yeSIsImNoZWNrVG91Y2hEZXZpY2UiLCJsb2FkUmVtb3RlQmFubmVycyIsImluaXRCdWxrT3JkZXJRdWlja1ZpZXciLCJpc1RvdWNoRGV2aWNlIiwiaGlzdG9yeSIsIndpbmRvdyIsIlByZWxvYWRlciIsImNhY2hlIiwiY2FjaGVMaW1pdCIsImxvYWRpbmciLCJ3YWl0TG9hZGluZyIsImNhY2hlS2V5IiwiX2NhbGxlZSIsIl9jb250ZXh0IiwiY2hlY2siLCJfZGVsYXkiLCJsb2FkIiwicmVxdWVzdCIsIl90aGlzIiwiX2NhbGxlZTIiLCJyZXNwb25zZSIsIl90IiwiX2NvbnRleHQyIiwiZ2V0Q2FjaGUiLCJzYXZlQ2FjaGUiLCJkYXRhIiwiX3NpemUiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJJbnN0YW50UXVpY2tWaWV3IiwiY29udGV4dCIsIm1vZGFsIiwib25Nb3VzZUVudGVyT3JDbGljayIsInVuYmluZEV2ZW50cyIsImJpbmRFdmVudHMiLCJfcHJvdG8iLCJsb2FkUHJvZHVjdCIsInByb2R1Y3RJZCIsInJlamVjdCIsImFwaSIsInByb2R1Y3QiLCJnZXRCeUlkIiwidGVtcGxhdGUiLCJlcnIiLCJldmVudCIsIl90aGlzMiIsInByZXZlbnREZWZhdWx0IiwiJGVsIiwiJCIsImN1cnJlbnRUYXJnZXQiLCJ0eXBlIiwib3BlbiIsInNpemUiLCJ1cGRhdGVDb250ZW50IiwiJGNvbnRlbnQiLCJmaW5kIiwiYWRkQ2xhc3MiLCJzbGljayIsIm5ld0NvbnRleHQiLCIkcXVpY2tWaWV3IiwiYXNzaWduIiwiZW5hYmxlQWxzb0JvdWdodCIsInRyaWdnZXIiLCJhZGR0aGlzIiwidG9vbGJveCIsIm9uIiwib2ZmIiwiSW5zdGFudExvYWQiLCIkaGVhZCIsIiRib2R5IiwiJHBhZ2VCb2R5IiwiZmlyc3QiLCJvbkxvYWRQYWdlTWFudWFsbHkiLCJvblBvcHN0YXRlIiwic3RhdGUiLCJyZXBsYWNlU3RhdGUiLCJpbnN0YW50bG9hZCIsInBhZ2VUeXBlIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImxvY2F0aW9uIiwiX3Byb3RvMiIsImluaXRHbG9iYWwiLCIkc2NvcGUiLCIkY29udGV4dCIsInJlZGlyZWN0IiwidXJsIiwiaXNVbnN1cHBvcnRlZFBhZ2UiLCJ0cmltIiwiaXMiLCJsb2FkUGFnZSIsInNob3ciLCJwdXNoU3RhdGUiLCJfdGhpczMiLCJjb25maWciLCJjYXJvdXNlbCIsInRoZW1lU2V0dGluZ3MiLCJob21lcGFnZV9zaG93X2Nhcm91c2VsIiwicHJvZHVjdHMiLCJuZXciLCJsaW1pdCIsInNwZWNpYWxQcm9kdWN0c1RhYl9pbml0X2NvdW50IiwiZmVhdHVyZWQiLCJ0b3Bfc2VsbGVycyIsImJsb2ciLCJyZWNlbnRfcG9zdHMiLCJob21lcGFnZV9ibG9nX3Bvc3RzX2NvdW50IiwiY3VzdG9tZXIiLCJyZWNlbnRseV92aWV3ZWRfcHJvZHVjdHMiLCJzaG9wX2J5X2JyYW5kIiwibWF4X3Nob3BfYnlfYnJhbmQiLCJjYXRlZ29yaWVzIiwiY2FydCIsInZpZGVvcyIsInJldmlld3MiLCJwcm9kdWN0cGFnZV9yZXZpZXdzX2NvdW50IiwicmVsYXRlZF9wcm9kdWN0cyIsInByb2R1Y3RwYWdlX3JlbGF0ZWRfcHJvZHVjdHNfY291bnQiLCJzaW1pbGFyX2J5X3ZpZXdzIiwicHJvZHVjdHBhZ2Vfc2ltaWxhcl9ieV92aWV3c19jb3VudCIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsImNhdGVnb3J5cGFnZV9wcm9kdWN0c19wZXJfcGFnZSIsInBvc3RzIiwicGFnZXMiLCJzdW1tYXJ5IiwiYnJhbmRzIiwiYnJhbmQiLCJicmFuZHBhZ2VfcHJvZHVjdHNfcGVyX3BhZ2UiLCJnZXRQYWdlIiwidGhlbWVJbnN0YW50TG9hZF9qc0NvbnRleHQiLCIkcmVzcG9uc2UiLCIkcmVzcEJvZHkiLCJzY3JvbGxUb3AiLCJjaGlsZHJlbiIsImVhY2giLCJlbCIsIiRlbG0iLCJyZW1vdmUiLCJhdHRyIiwiYXBwZW5kIiwiZW1wdHkiLCJob21lcGFnZV9leHBhbmRfY2F0ZWdvcmllc19tZW51IiwicmVtb3ZlQ2xhc3MiLCJjYXRjaCIsInByb3AiLCJwYWdlIiwicmVsb2FkIiwiZXZlbnRUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==
