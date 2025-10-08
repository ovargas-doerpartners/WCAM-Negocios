(self["webpackChunkpapathemes_supermarket"] = self["webpackChunkpapathemes_supermarket"] || []).push([["assets_js_emthemes-modez_bulk-order_js-assets_js_theme_catalog_js-assets_js_theme_common_face-fed8b9"],{

/***/ "./assets/js/emthemes-modez/action-bar.js":
/*!************************************************!*\
  !*** ./assets/js/emthemes-modez/action-bar.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ actionBarFactory)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");



var instantloadBinded = false;
var actionBar;
function removeModeClass(index, className) {
  return (className.match(/(^|\s)mode-\S+/g) || []).join(' ');
}
var ActionBar = /*#__PURE__*/function () {
  function ActionBar(options) {
    if (options === void 0) {
      options = {};
    }
    // console.log('actionbar constructor');
    this.onModeChange = this.onModeChange.bind(this);
    this.options = options;
    this.init();
  }
  var _proto = ActionBar.prototype;
  _proto.init = function init() {
    this.$sortBy = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-sort-by]');
    if (!this.$sortBy.length) {
      return;
    }
    var $limit = this.$sortBy.find('[name=limit]');
    var $mode = this.$sortBy.find('input[name=mode]');
    var url = url__WEBPACK_IMPORTED_MODULE_1__.parse(window.location.href, true);
    if (url.query.limit) {
      $limit.val(url.query.limit);
    }
    if (url.query.mode) {
      $mode.prop('checked', false).filter("[value=" + url.query.mode + "]").prop('checked', true);
    }

    // Stop action bar if the page is category bulk order custom template
    var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
    if ($body.hasClass('papaSupermarket-page--pages-custom-category-bulk-order') || $body.hasClass('papaSupermarket-page--pages-custom-brand-bulk-order')) {
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container').removeClass(removeModeClass).addClass("mode-" + $mode.filter(':checked').val());
    this.unbindEvents();
    this.bindEvents();
  };
  _proto.reinit = function reinit(newOptions) {
    // console.log('actionbar reinit');
    if (newOptions) {
      this.options = newOptions;
    }
    this.init();
  };
  _proto.destroy = function destroy() {
    // console.log('actionbar destroyed');
    this.unbindEvents();
  };
  _proto.bindEvents = function bindEvents() {
    this.$sortBy.find('input[name=mode]').on('change', this.onModeChange);
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$sortBy.find('input[name=mode]').off('change', this.onModeChange);
  };
  _proto.onModeChange = function onModeChange(event) {
    event.preventDefault();
    var mode = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).val();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container').removeClass(removeModeClass).addClass("mode-" + mode);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container .pagination-link').each(function (i, el) {
      var $a = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var url = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_2__["default"].replaceParams($a.attr('href'), {
        mode: mode
      });
      $a.attr('href', url);
    });
    var url = url__WEBPACK_IMPORTED_MODULE_1__.parse(window.location.href, true);
    url.query.mode = mode;
    window.history.pushState({}, document.title, url__WEBPACK_IMPORTED_MODULE_1__.format({
      pathname: url.pathname,
      search: _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_2__["default"].buildQueryString(url.query)
    }));
  };
  return ActionBar;
}();
/**
 * Call this function when:
 * - Page is loaded
 * - Ajax page returned
 */
function actionBarFactory(options) {
  if (actionBar) {
    actionBar.reinit(options);
  } else {
    actionBar = new ActionBar(options);
  }

  // Destroy actionBar when loading new page
  if (!instantloadBinded) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('beforeload.instantload', function () {
      if (actionBar) {
        actionBar.destroy();
        actionBar = null;
      }
    });
    instantloadBinded = true;
  }
}

/***/ }),

/***/ "./assets/js/emthemes-modez/bulk-order.js":
/*!************************************************!*\
  !*** ./assets/js/emthemes-modez/bulk-order.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkOrder: () => (/* binding */ BulkOrder),
/* harmony export */   "default": () => (/* binding */ bulkOrderFactory)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_global_sweet_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _theme_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-utils */ "./assets/js/emthemes-modez/theme-utils.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





//
// https://javascript.info/task/delay-promise
//
function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

//
// https://hackernoon.com/functional-javascript-resolving-promises-sequentially-7aac18c4431e
//
function promiseSerial(funcs) {
  return funcs.reduce(function (promise, func) {
    return promise.then(function (result) {
      return func().then(Array.prototype.concat.bind(result));
    });
  }, Promise.resolve([]));
}
var BulkOrder = /*#__PURE__*/function () {
  function BulkOrder(context, $scope) {
    var _this = this;
    this.context = context || {};
    this.$body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
    this.$scope = $scope;
    this.itemCount = 0;
    this.progressCurrent = 0;
    this.progressTotal = 0;
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.onQuantityButtonClick = this.onQuantityButtonClick.bind(this);
    this.onProductAdded = this.onProductAdded.bind(this);
    this.onAddAllClick = this.onAddAllClick.bind(this);
    this.onCartQtyChange = this.onCartQtyChange.bind(this);
    this.onProgressPopupCloseClick = this.onProgressPopupCloseClick.bind(this);
    this.reinit();

    // Supermarket
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('beforeload.instantload', function () {
      return _this.unbindEvents();
    });
  }
  var _proto = BulkOrder.prototype;
  _proto.reinit = function reinit() {
    this.$progressPopup = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bulkOrder-progressModal', this.$scope);
    this.$progressBar = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.progressBar', this.$progressPopup);
    this.$progressPopupCurrent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bulkOrder-progressModal-current', this.$scope);
    this.$progressPopupActions = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bulkOrder-progressModal-actions', this.$scope);
    this.$progressPopupClose = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-close]', this.$scope);
    this.unbindEvents();
    this.bindEvents();
    this.calculate();
    this.updateQtyInCart();
  };
  _proto.bindEvents = function bindEvents() {
    this.$scope.on('change', '[data-bulkorder-qty-id]', this.onQuantityChange);
    this.$scope.on('click', '[data-quantity-change] button', this.onQuantityButtonClick);
    this.$scope.on('click', '[data-bulkorder-add-all]', this.onAddAllClick);
    this.$body.on('ajax-addtocart-item-added', this.onProductAdded);
    this.$body.on('cart-quantity-update', this.onCartQtyChange);
    this.$progressPopupClose.on('click', this.onProgressPopupCloseClick);
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$scope.off('change', '[data-bulkorder-qty-id]', this.onQuantityChange);
    this.$scope.off('click', '[data-quantity-change] button', this.onQuantityButtonClick);
    this.$scope.off('click', '[data-bulkorder-add-all]', this.onAddAllClick);
    this.$body.off('ajax-addtocart-item-added', this.onProductAdded);
    this.$body.off('cart-quantity-update', this.onCartQtyChange);
    this.$progressPopupClose.off('click', this.onProgressPopupCloseClick);
  };
  _proto.onProgressPopupCloseClick = function onProgressPopupCloseClick(event) {
    event.preventDefault();
    this.hideProgressPopup();
  };
  _proto.onCartQtyChange = function onCartQtyChange() {
    this.updateQtyInCart();
  };
  _proto.showProgressPopup = function showProgressPopup() {
    this.$progressPopupActions.addClass('u-hiddenVisually');
    this.$progressPopup.addClass('is-open');
  };
  _proto.hideProgressPopup = function hideProgressPopup() {
    this.$progressPopupCurrent.css('width', 0);
    this.$progressPopupActions.addClass('u-hiddenVisually');
    this.$progressPopup.removeClass('is-open');
  };
  _proto.updateProgressPopup = function updateProgressPopup() {
    if (this.progressTotal > 0) {
      this.$progressPopupCurrent.css('width', this.progressCurrent / this.progressTotal * 100 + "%");
    } else {
      this.$progressPopupCurrent.css('width', 0);
    }
  };
  _proto.showProgressPopupActions = function showProgressPopupActions() {
    this.$progressPopupActions.removeClass('u-hiddenVisually');
  };
  _proto.showProgressBar = function showProgressBar() {
    this.$progressBar.removeClass('u-hiddenVisually');
  };
  _proto.hideProgressBar = function hideProgressBar() {
    this.$progressBar.addClass('u-hiddenVisually');
  };
  _proto.onAddAllClick = function onAddAllClick(event) {
    event.preventDefault();
    if (this.itemCount === 0) {
      _theme_global_sweet_alert__WEBPACK_IMPORTED_MODULE_2__["default"].fire({
        text: this.context.bulkOrderEnterQty || 'Please enter product quantity',
        icon: 'error'
      });
      return;
    }
    this.addAllProducts();
  };
  _proto.onProductAdded = function onProductAdded(event, productId) {
    this.$scope.find("[data-bulkorder-qty-id='" + productId + "']").val(0);
    this.calculate();
  };
  _proto.onQuantityButtonClick = function onQuantityButtonClick(event) {
    event.preventDefault();
    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    var $input = $target.closest('[data-quantity-change]').find('input');
    var quantityMin = parseInt($input.data('quantityMin'), 10);
    var quantityMax = parseInt($input.data('quantityMax'), 10);
    var qty = parseInt($input.val(), 10);

    // If action is incrementing
    if ($target.data('action') === 'inc') {
      // If quantity max option is set
      if (quantityMax > 0) {
        // Check quantity does not exceed max
        if (qty + 1 <= quantityMax) {
          qty++;
        }
      } else {
        qty++;
      }
    } else if (qty > 0) {
      // If quantity min option is set
      if (quantityMin > 0) {
        // Check quantity does not fall below min
        if (qty - 1 >= quantityMin) {
          qty--;
        } else {
          qty = 0;
        }
      } else {
        qty--;
      }
    }
    $input.val(qty);
    if (qty <= 0) {
      this.clearErrorMsg($input[0]);
    }
    this.calculate();
  };
  _proto.onQuantityChange = function onQuantityChange(event) {
    var qty = parseInt(event.currentTarget.value, 10);
    if (qty <= 0) {
      this.clearErrorMsg(event.currentTarget);
    }
    this.calculate();
  };
  _proto.clearErrorMsg = function clearErrorMsg(input) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(input).closest('.card').find('[data-bulkorder-options] .alertBox').remove();
  };
  _proto.calculate = function calculate() {
    var _this2 = this;
    var total = 0;
    var count = 0;
    var money;
    this.$scope.find('[data-bulkorder-qty-id]').each(function (i, el) {
      var $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var qty = parseInt($input.val(), 10);
      var productId = $input.data('bulkorderQtyId');
      var $price = _this2.$scope.find("[data-bulkorder-price-id='" + productId + "']");
      var priceVal = parseFloat($price.data('bulkorderPriceValue'));
      var priceFmt = $price.data('bulkorderPriceFormatted');
      var subtotal = priceVal ? Math.round(priceVal * qty * 100) / 100 : 0;
      var $subtotal = _this2.$scope.find("[data-bulkorder-subtotal-id='" + productId + "']");
      if (priceFmt) {
        money = (0,_theme_utils__WEBPACK_IMPORTED_MODULE_3__.extractMoney)(priceFmt);
      }
      $subtotal.html(priceFmt ? (0,_theme_utils__WEBPACK_IMPORTED_MODULE_3__.currencyFormat)(subtotal, money) : '');
      total += subtotal;
      count += qty;
    });
    this.itemCount = count;
    this.$scope.find('[data-bulkorder-total-count]').html(count);
    this.$scope.find('[data-bulkorder-total-amount]').html((0,_theme_utils__WEBPACK_IMPORTED_MODULE_3__.currencyFormat)(Math.round(total * 100) / 100, money));
  };
  _proto.addAllProducts = function addAllProducts() {
    var _this3 = this;
    var valid = true;

    // check products which have options much choose options before add to cart
    this.$scope.find('[data-bulkorder-options]').each(function (i, el) {
      var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var qty = Number($el.closest('.card').find('[data-bulkorder-qty-id]').val()) || 0;
      if (qty > 0 && $el.find('form').length === 0) {
        $el.html("\n                    <div class=\"alertBox alertBox--error\">\n                        <div class=\"alertBox-column alertBox-icon\">\n                            <icon glyph=\"ic-error\" class=\"icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"></path></svg></icon>\n                        </div>\n                        <p class=\"alertBox-column alertBox-message\">\n                            <span>" + _this3.context.bulkOrderChooseOptions + "</span>\n                        </p>\n                    </div>\n                ");
        $el.find('.alertBox').hide().fadeIn(300);
        valid = false;
      }
    });
    if (!valid) return;
    var promises = [];
    this.progressCurrent = 0;
    this.$scope.find('[data-bulkorder-qty-id]').each(function (i, el) {
      var $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var qty = parseInt($input.val(), 10);
      var productId = $input.data('bulkorderQtyId');
      var form = $input.closest('.card').find('[data-bulkorder-options] form')[0];
      if (qty > 0) {
        promises.push(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                _this3.progressCurrent++;
                _this3.updateProgressPopup();
                _context.n = 1;
                return _this3.addProduct(productId, qty, form);
              case 1:
                // eslint-disable-line no-unused-expressions

                $input.val(0);
                _this3.calculate();

                // wait 1s before adding to cart a new item in order to avoid request failed.
                _context.n = 2;
                return delay(1000);
              case 2:
                return _context.a(2);
            }
          }, _callee);
        })));
      }
    });
    this.progressTotal = promises.length;
    this.showProgressPopup();
    this.showProgressBar();
    promiseSerial(promises).then(function () {
      _this3.showProgressPopupActions();
      _this3.hideProgressBar();
      // this.updateQtyInCart();
      _this3.updateCartCounter();
    });
  };
  _proto.addProduct = /*#__PURE__*/function () {
    var _addProduct = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(productId, qty, form) {
      var _this4 = this;
      var formData, promise;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (form === void 0) {
              form = undefined;
            }
            if (!(window.FormData === undefined)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            formData = new FormData(form || undefined);
            formData.set('product_id', productId);
            formData.set('qty[]', qty);
            promise = new Promise(function (resolve) {
              _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemAdd(formData, function (err, response) {
                var _response$data, _response$data2;
                var errorMessage = err || response.data.error;
                if (response != null && (_response$data = response.data) != null && (_response$data = _response$data.error) != null && _response$data.minqty) {
                  errorMessage = _this4.context.txtMinQty.replace('%qty%', response.data.error.minqty);
                }
                if (response != null && (_response$data2 = response.data) != null && (_response$data2 = _response$data2.error) != null && _response$data2.maxqty) {
                  errorMessage = _this4.context.txtMaxQty.replace('%qty%', response.data.error.maxqty);
                }

                // Guard statement
                if (errorMessage) {
                  // Strip the HTML from the error message
                  var tmp = document.createElement('DIV');
                  tmp.innerHTML = errorMessage;
                  alert(tmp.textContent || tmp.innerText);
                }
                resolve();
              });
            });
            _context2.n = 2;
            return promise;
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    function addProduct(_x, _x2, _x3) {
      return _addProduct.apply(this, arguments);
    }
    return addProduct;
  }();
  _proto.updateQtyInCart = function updateQtyInCart() {
    var _this5 = this;
    jquery__WEBPACK_IMPORTED_MODULE_0___default().get('/api/storefront/cart', function (data) {
      if (!data.length) {
        return;
      }
      var qtys = {};
      data[0].lineItems.physicalItems.forEach(function (item) {
        if (typeof qtys[item.productId] !== 'undefined') {
          qtys[item.productId] += item.quantity;
        } else {
          qtys[item.productId] = item.quantity;
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-bulkorder-cart-qty-id]', _this5.$scope).each(function (i, el) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
        var productId = parseInt($el.data('bulkorderCartQtyId'), 10);
        if (qtys[productId]) {
          $el.html(qtys[productId]);
        } else {
          $el.html('0');
        }
      });
    });
  };
  _proto.updateCartCounter = function updateCartCounter() {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getContent({
      template: 'cart/preview'
    }, function (err, resp) {
      if (err) {
        return;
      }

      // Update cart counter
      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
      var $cartQuantity = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-cart-quantity]', resp);
      var $cartCounter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navUser-action .cart-count');
      var quantity = $cartQuantity.data('cart-quantity') || 0;
      $cartCounter.addClass('cart-count--positive');
      $body.trigger('cart-quantity-update', quantity);
    });
  };
  return BulkOrder;
}();
function bulkOrderFactory(context, selector) {
  if (context === void 0) {
    context = null;
  }
  if (selector === void 0) {
    selector = '#product-listing-container';
  }
  var $selector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector);
  var bulkOrder = $selector.data('bulkOrderInstance');
  if (!(bulkOrder instanceof BulkOrder)) {
    bulkOrder = new BulkOrder(context, $selector);
    $selector.data('bulkOrderInstance', bulkOrder);
  }
  return bulkOrder;
}

/***/ }),

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogPage)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var CatalogPage = /*#__PURE__*/function (_PageManager) {
  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(CatalogPage, _PageManager);
  var _proto = CatalogPage.prototype;
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2__.parse(window.location.href, true);
    /* MOD by papathemes - supermarket
    ---
    const queryParams = $(currentTarget).serialize().split('=');
     url.query[queryParams[0]] = queryParams[1];
    ---
    */
    var queryParams = $(currentTarget).serializeArray();
    queryParams.forEach(function (param) {
      url.query[param.name] = param.value;
    });
    /* END MOD */
    delete url.query.page;
    event.preventDefault();
    event.isDefaultPrevented = true; /* eslint-disable-line */ // papathemes-supermarket: quickfix stop stencil-utils SortByHook submitting the form when select changed
    window.location = url__WEBPACK_IMPORTED_MODULE_2__.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };
  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _emthemes_modez_action_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../emthemes-modez/action-bar */ "./assets/js/emthemes-modez/action-bar.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");










 // Papathemes - Supermarket

/**
 * Faceted search view component
 */
var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;
    var defaultOptions = {
      accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
      blockerSelector: '#facetedSearch .blocker',
      clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
      componentSelector: '#facetedSearch-navList',
      facetNavListSelector: '#facetedSearch .navList',
      priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
      priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
      priceRangeFormSelector: '#facet-range-form',
      priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
      priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
      showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
      facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
      modal: (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal')[0],
      modalOpen: false
    };

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe user events
    this.onStateChange = this.onStateChange.bind(this);
    this.onPopState = this.onPopState.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();

    // Supermarket
    $('body').one('beforeload.instantload', function () {
      return _this.unbindEvents();
    });
  }

  // Supermarket
  var _proto = FacetedSearch.prototype;
  _proto.destroy = function destroy() {
    this.unbindEvents();
  }

  // Public methods
  ;
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }
    (0,_emthemes_modez_action_bar__WEBPACK_IMPORTED_MODULE_10__["default"])(); // Papathemes - Supermarket

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Restore view state
    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this2 = this;
    // Supermarket
    if (this.updateViewCallback) {
      return this.updateViewCallback();
    }
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.api.getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this2.refreshView(content);
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (this.collapsedFacetItems.includes(id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;
    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this3.options.modal.open();
        _this3.options.modalOpen = true;
        _this3.options.modal.updateContent(response);
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };
  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };
  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };
  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this4.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = (0,_nod__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.Validators.setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = _this6.collapsedFacetItems.includes(id);
      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = _this7.collapsedFacets.includes(id);
      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    /* MOD by papathemes - supermarket
    ---
    urlUtils.goToUrl(url);
    ---
    */
    var winUrl = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var facetUrl = url__WEBPACK_IMPORTED_MODULE_4__.parse(url, true);
    if (winUrl.query.mode) {
      facetUrl.query.mode = winUrl.query.mode;
    }
    if (winUrl.query.limit) {
      facetUrl.query.limit = winUrl.query.limit;
    }
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: facetUrl.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(facetUrl.query)
    }));
    /* END MOD */
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    /* MOD by papathemes - supermarket
    ---
    urlUtils.goToUrl(url);
    ---
    */
    var winUrl = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var facetUrl = url__WEBPACK_IMPORTED_MODULE_4__.parse(url, true);
    if (winUrl.query.mode) {
      facetUrl.query.mode = winUrl.query.mode;
    }
    if (winUrl.query.limit) {
      facetUrl.query.limit = winUrl.query.limit;
    }
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: facetUrl.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(facetUrl.query)
    }));
    /* END MOD */

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    /* MOD by papathemes - supermarket
    ---
    const queryParams = $(currentTarget).serialize().split('=');
     url.query[queryParams[0]] = queryParams[1];
    ---
    */
    var queryParams = $(currentTarget).serializeArray();
    queryParams.forEach(function (param) {
      url.query[param.name] = param.value;
    });
    /* END MOD */
    delete url.query.page;
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.isDefaultPrevented = true; // papathemes-supermarket: quick-fixed stencil-utils for sorting ajax request

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(url.query)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_9__["default"].constants.VALID)) {
      return;
    }

    /* MOD by papathemes - supermarket
    ---
    const url = Url.parse(window.location.href);
    const queryParams = decodeURI($(currentTarget).serialize());
    ---
    */
    var url = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var queryParamsArray = $(currentTarget).serializeArray();
    queryParamsArray.forEach(function (param) {
      url.query[param.name] = param.value;
    });
    var queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(url.query);
    /* END MOD */

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: url.pathname,
      search: "?" + queryParams
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    if (!collapsible) return; // papathemes-supermarket: fix issue when adding disabled-breakpoint to #facetedSearch-navList
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, id);
    }
  };
  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl);
    // If searchParams does not contain a page value then modify url query string to have page=1
    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');
      if (linkUrl) {
        // Supermarket Fix undefined
        var re = /page=[0-9]+/i;
        var updatedLinkUrl = linkUrl.replace(re, 'page=1');
        window.history.replaceState({}, document.title, updatedLinkUrl);
      }
    }
    $(window).trigger('statechange');
  };
  return FacetedSearch;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FacetedSearch);

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./assets/js/theme/common/utils/url-utils.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/utils/url-utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0__.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }

    // supermarket: Fix url encode RFC 3986
    if (parsed.query) {
      parsed.search = urlUtils.buildQueryString(parsed.query);
      delete parsed.query;
    }
    return url__WEBPACK_IMPORTED_MODULE_0__.format(parsed);
  },
  // Supermarket
  removeParams: function removeParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0__.parse(url, true);

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    if (typeof params === 'string') {
      if (parsed.query.hasOwnProperty(params)) {
        parsed.query[params] = null;
        delete parsed.query[params];
      }
    } else if (typeof params === 'object') {
      params.forEach(function (param) {
        if (parsed.query.hasOwnProperty(param)) {
          parsed.query[param] = null;
          delete parsed.query[param];
        }
      });
    }

    // supermarket: Fix url encode RFC 3986
    if (parsed.query) {
      parsed.search = urlUtils.buildQueryString(parsed.query);
      delete parsed.query;
    }
    return url__WEBPACK_IMPORTED_MODULE_0__.format(parsed);
  },
  // supermarket: Fix faceted value contains both + and a spacing character (ie. "DVD+R DL")
  encodeParam: function encodeParam(val) {
    return encodeURIComponent(val).split('%20').join('+').replace(/[!'()*]/g, function (c) {
      return "%" + c.charCodeAt(0).toString(16);
    });
  },
  buildQueryString: function buildQueryString(_queryData) {
    var queryData = Object.assign({}, _queryData); // papathemes: fix queryData.hasOwnProperty is not a function
    var out = '';
    var key;
    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;
          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + urlUtils.encodeParam(key) + "=" + urlUtils.encodeParam(queryData[key][ndx]); // supermarket mod
            }
          }
        } else {
          out += "&" + urlUtils.encodeParam(key) + "=" + urlUtils.encodeParam(queryData[key]); // supermarket mod
        }
      }
    }
    return out.substring(1);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlUtils);

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19lbXRoZW1lcy1tb2Rlel9idWxrLW9yZGVyX2pzLWFzc2V0c19qc190aGVtZV9jYXRhbG9nX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fZmFjZS1mZWQ4YjkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDRDtBQUNpQztBQUV2RCxJQUFJRyxpQkFBaUIsR0FBRyxLQUFLO0FBQzdCLElBQUlDLFNBQVM7QUFFYixTQUFTQyxlQUFlQSxDQUFDQyxLQUFLLEVBQUVDLFNBQVMsRUFBRTtFQUN2QyxPQUFPLENBQUNBLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUFFQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQy9EO0FBQUMsSUFFS0MsU0FBUztFQUNYLFNBQUFBLFVBQVlDLE9BQU8sRUFBTztJQUFBLElBQWRBLE9BQU87TUFBUEEsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUFBO0lBQ3BCO0lBQ0EsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDaEQsSUFBSSxDQUFDRixPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDRyxJQUFJLENBQUMsQ0FBQztFQUNmO0VBQUMsSUFBQUMsTUFBQSxHQUFBTCxTQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUVERCxJQUFJLEdBQUosU0FBQUEsSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsSUFBSSxDQUFDRyxPQUFPLEdBQUdqQiw2Q0FBQyxDQUFDLGdCQUFnQixDQUFDO0lBRWxDLElBQUksQ0FBQyxJQUFJLENBQUNpQixPQUFPLENBQUNDLE1BQU0sRUFBRTtNQUN0QjtJQUNKO0lBRUEsSUFBTUMsTUFBTSxHQUFHLElBQUksQ0FBQ0YsT0FBTyxDQUFDRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ2hELElBQU1DLEtBQUssR0FBRyxJQUFJLENBQUNK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UUFBUSxDQUFDeVksV0FBVyxDQUFDSyxTQUFTLENBQUNaLEdBQUcsQ0FBQyxDQUFDZ0IsR0FBRyxDQUFDLENBQUcsQ0FBQyxDQUFDO1lBQ3pGO1VBQ0o7UUFDSixDQUFDLE1BQU07VUFDSEYsR0FBRyxVQUFRaFosUUFBUSxDQUFDeVksV0FBVyxDQUFDUCxHQUFHLENBQUMsU0FBSWxZLFFBQVEsQ0FBQ3lZLFdBQVcsQ0FBQ0ssU0FBUyxDQUFDWixHQUFHLENBQUMsQ0FBRyxDQUFDLENBQUM7UUFDcEY7TUFDSjtJQUNKO0lBRUEsT0FBT2MsR0FBRyxDQUFDRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0VBQzNCO0FBQ0osQ0FBQztBQUVELGlFQUFlblosUUFBUSxFOzs7Ozs7Ozs7O0FDekZ2QixlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1zdXBlcm1hcmtldC8uL2Fzc2V0cy9qcy9lbXRoZW1lcy1tb2Rlei9hY3Rpb24tYmFyLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMtc3VwZXJtYXJrZXQvLi9hc3NldHMvanMvZW10aGVtZXMtbW9kZXovYnVsay1vcmRlci5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLXN1cGVybWFya2V0Ly4vYXNzZXRzL2pzL3RoZW1lL2NhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1zdXBlcm1hcmtldC8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1zdXBlcm1hcmtldC8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMtc3VwZXJtYXJrZXQvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3VybC11dGlscy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLXN1cGVybWFya2V0L2lnbm9yZWR8QzpcXFVzZXJzXFxlQ29yZVxcRG93bmxvYWRzXFxCaWdDb21tZXJjZVxcU3VwZXJtYXJrZXRfY3VzdG9tMTIwODI1XFxub2RlX21vZHVsZXNcXG9iamVjdC1pbnNwZWN0fC4vdXRpbC5pbnNwZWN0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5cbmxldCBpbnN0YW50bG9hZEJpbmRlZCA9IGZhbHNlO1xubGV0IGFjdGlvbkJhcjtcblxuZnVuY3Rpb24gcmVtb3ZlTW9kZUNsYXNzKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCgvKF58XFxzKW1vZGUtXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xufVxuXG5jbGFzcyBBY3Rpb25CYXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWN0aW9uYmFyIGNvbnN0cnVjdG9yJyk7XG4gICAgICAgIHRoaXMub25Nb2RlQ2hhbmdlID0gdGhpcy5vbk1vZGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy4kc29ydEJ5ID0gJCgnW2RhdGEtc29ydC1ieV0nKTtcblxuICAgICAgICBpZiAoIXRoaXMuJHNvcnRCeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRsaW1pdCA9IHRoaXMuJHNvcnRCeS5maW5kKCdbbmFtZT1saW1pdF0nKTtcbiAgICAgICAgY29uc3QgJG1vZGUgPSB0aGlzLiRzb3J0QnkuZmluZCgnaW5wdXRbbmFtZT1tb2RlXScpO1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuXG4gICAgICAgIGlmICh1cmwucXVlcnkubGltaXQpIHtcbiAgICAgICAgICAgICRsaW1pdC52YWwodXJsLnF1ZXJ5LmxpbWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cmwucXVlcnkubW9kZSkge1xuICAgICAgICAgICAgJG1vZGUucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYFt2YWx1ZT0ke3VybC5xdWVyeS5tb2RlfV1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9wIGFjdGlvbiBiYXIgaWYgdGhlIHBhZ2UgaXMgY2F0ZWdvcnkgYnVsayBvcmRlciBjdXN0b20gdGVtcGxhdGVcbiAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgIGlmICgkYm9keS5oYXNDbGFzcygncGFwYVN1cGVybWFya2V0LXBhZ2UtLXBhZ2VzLWN1c3RvbS1jYXRlZ29yeS1idWxrLW9yZGVyJykgfHwgJGJvZHkuaGFzQ2xhc3MoJ3BhcGFTdXBlcm1hcmtldC1wYWdlLS1wYWdlcy1jdXN0b20tYnJhbmQtYnVsay1vcmRlcicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MocmVtb3ZlTW9kZUNsYXNzKVxuICAgICAgICAgICAgLmFkZENsYXNzKGBtb2RlLSR7JG1vZGUuZmlsdGVyKCc6Y2hlY2tlZCcpLnZhbCgpfWApO1xuXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHJlaW5pdChuZXdPcHRpb25zKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhY3Rpb25iYXIgcmVpbml0Jyk7XG4gICAgICAgIGlmIChuZXdPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBuZXdPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhY3Rpb25iYXIgZGVzdHJveWVkJyk7XG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc29ydEJ5LmZpbmQoJ2lucHV0W25hbWU9bW9kZV0nKS5vbignY2hhbmdlJywgdGhpcy5vbk1vZGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc29ydEJ5LmZpbmQoJ2lucHV0W25hbWU9bW9kZV0nKS5vZmYoJ2NoYW5nZScsIHRoaXMub25Nb2RlQ2hhbmdlKTtcbiAgICB9XG5cbiAgICBvbk1vZGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBtb2RlID0gJChldmVudC50YXJnZXQpLnZhbCgpO1xuXG4gICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhyZW1vdmVNb2RlQ2xhc3MpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoYG1vZGUtJHttb2RlfWApO1xuXG4gICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wYWdpbmF0aW9uLWxpbmsnKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoJGEuYXR0cignaHJlZicpLCB7IG1vZGUgfSk7XG4gICAgICAgICAgICAkYS5hdHRyKCdocmVmJywgdXJsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgdXJsLnF1ZXJ5Lm1vZGUgPSBtb2RlO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxsIHRoaXMgZnVuY3Rpb24gd2hlbjpcbiAqIC0gUGFnZSBpcyBsb2FkZWRcbiAqIC0gQWpheCBwYWdlIHJldHVybmVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGlvbkJhckZhY3Rvcnkob3B0aW9ucykge1xuICAgIGlmIChhY3Rpb25CYXIpIHtcbiAgICAgICAgYWN0aW9uQmFyLnJlaW5pdChvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhY3Rpb25CYXIgPSBuZXcgQWN0aW9uQmFyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIERlc3Ryb3kgYWN0aW9uQmFyIHdoZW4gbG9hZGluZyBuZXcgcGFnZVxuICAgIGlmICghaW5zdGFudGxvYWRCaW5kZWQpIHtcbiAgICAgICAgJCgnYm9keScpLm9uKCdiZWZvcmVsb2FkLmluc3RhbnRsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFjdGlvbkJhcikge1xuICAgICAgICAgICAgICAgIGFjdGlvbkJhci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgYWN0aW9uQmFyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGluc3RhbnRsb2FkQmluZGVkID0gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBzd2FsIGZyb20gJy4uL3RoZW1lL2dsb2JhbC9zd2VldC1hbGVydCc7XG5pbXBvcnQgeyBleHRyYWN0TW9uZXksIGN1cnJlbmN5Rm9ybWF0IH0gZnJvbSAnLi90aGVtZS11dGlscyc7XG5cbi8vXG4vLyBodHRwczovL2phdmFzY3JpcHQuaW5mby90YXNrL2RlbGF5LXByb21pc2Vcbi8vXG5mdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuLy9cbi8vIGh0dHBzOi8vaGFja2Vybm9vbi5jb20vZnVuY3Rpb25hbC1qYXZhc2NyaXB0LXJlc29sdmluZy1wcm9taXNlcy1zZXF1ZW50aWFsbHktN2FhYzE4YzQ0MzFlXG4vL1xuZnVuY3Rpb24gcHJvbWlzZVNlcmlhbChmdW5jcykge1xuICAgIHJldHVybiBmdW5jcy5yZWR1Y2UoXG4gICAgICAgIChwcm9taXNlLCBmdW5jKSA9PiBwcm9taXNlLnRoZW4ocmVzdWx0ID0+IGZ1bmMoKS50aGVuKEFycmF5LnByb3RvdHlwZS5jb25jYXQuYmluZChyZXN1bHQpKSksXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShbXSksXG4gICAgKTtcbn1cblxuZXhwb3J0IGNsYXNzIEJ1bGtPcmRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgJHNjb3BlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwge307XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLml0ZW1Db3VudCA9IDA7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc1RvdGFsID0gMDtcblxuICAgICAgICB0aGlzLm9uUXVhbnRpdHlDaGFuZ2UgPSB0aGlzLm9uUXVhbnRpdHlDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblF1YW50aXR5QnV0dG9uQ2xpY2sgPSB0aGlzLm9uUXVhbnRpdHlCdXR0b25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUHJvZHVjdEFkZGVkID0gdGhpcy5vblByb2R1Y3RBZGRlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWRkQWxsQ2xpY2sgPSB0aGlzLm9uQWRkQWxsQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNhcnRRdHlDaGFuZ2UgPSB0aGlzLm9uQ2FydFF0eUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2sgPSB0aGlzLm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnJlaW5pdCgpO1xuXG4gICAgICAgIC8vIFN1cGVybWFya2V0XG4gICAgICAgICQoJ2JvZHknKS5vbignYmVmb3JlbG9hZC5pbnN0YW50bG9hZCcsICgpID0+IHRoaXMudW5iaW5kRXZlbnRzKCkpO1xuICAgIH1cblxuICAgIHJlaW5pdCgpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cCA9ICQoJy5idWxrT3JkZXItcHJvZ3Jlc3NNb2RhbCcsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NCYXIgPSAkKCcucHJvZ3Jlc3NCYXInLCB0aGlzLiRwcm9ncmVzc1BvcHVwKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEN1cnJlbnQgPSAkKCcuYnVsa09yZGVyLXByb2dyZXNzTW9kYWwtY3VycmVudCcsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEFjdGlvbnMgPSAkKCcuYnVsa09yZGVyLXByb2dyZXNzTW9kYWwtYWN0aW9ucycsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cENsb3NlID0gJCgnW2RhdGEtY2xvc2VdJywgdGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUXR5SW5DYXJ0KCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NoYW5nZScsICdbZGF0YS1idWxrb3JkZXItcXR5LWlkXScsIHRoaXMub25RdWFudGl0eUNoYW5nZSk7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGJ1dHRvbicsIHRoaXMub25RdWFudGl0eUJ1dHRvbkNsaWNrKTtcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NsaWNrJywgJ1tkYXRhLWJ1bGtvcmRlci1hZGQtYWxsXScsIHRoaXMub25BZGRBbGxDbGljayk7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2FqYXgtYWRkdG9jYXJ0LWl0ZW0tYWRkZWQnLCB0aGlzLm9uUHJvZHVjdEFkZGVkKTtcbiAgICAgICAgdGhpcy4kYm9keS5vbignY2FydC1xdWFudGl0eS11cGRhdGUnLCB0aGlzLm9uQ2FydFF0eUNoYW5nZSk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBDbG9zZS5vbignY2xpY2snLCB0aGlzLm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2spO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUub2ZmKCdjaGFuZ2UnLCAnW2RhdGEtYnVsa29yZGVyLXF0eS1pZF0nLCB0aGlzLm9uUXVhbnRpdHlDaGFuZ2UpO1xuICAgICAgICB0aGlzLiRzY29wZS5vZmYoJ2NsaWNrJywgJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gYnV0dG9uJywgdGhpcy5vblF1YW50aXR5QnV0dG9uQ2xpY2spO1xuICAgICAgICB0aGlzLiRzY29wZS5vZmYoJ2NsaWNrJywgJ1tkYXRhLWJ1bGtvcmRlci1hZGQtYWxsXScsIHRoaXMub25BZGRBbGxDbGljayk7XG4gICAgICAgIHRoaXMuJGJvZHkub2ZmKCdhamF4LWFkZHRvY2FydC1pdGVtLWFkZGVkJywgdGhpcy5vblByb2R1Y3RBZGRlZCk7XG4gICAgICAgIHRoaXMuJGJvZHkub2ZmKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHRoaXMub25DYXJ0UXR5Q2hhbmdlKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cENsb3NlLm9mZignY2xpY2snLCB0aGlzLm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2spO1xuICAgIH1cblxuICAgIG9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3NQb3B1cCgpO1xuICAgIH1cblxuICAgIG9uQ2FydFF0eUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVRdHlJbkNhcnQoKTtcbiAgICB9XG5cbiAgICBzaG93UHJvZ3Jlc3NQb3B1cCgpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEFjdGlvbnMuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cC5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgIH1cblxuICAgIGhpZGVQcm9ncmVzc1BvcHVwKCkge1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwQ3VycmVudC5jc3MoJ3dpZHRoJywgMCk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBBY3Rpb25zLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9ncmVzc1BvcHVwKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc1RvdGFsID4gMCkge1xuICAgICAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEN1cnJlbnQuY3NzKCd3aWR0aCcsIGAke3RoaXMucHJvZ3Jlc3NDdXJyZW50IC8gdGhpcy5wcm9ncmVzc1RvdGFsICogMTAwfSVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBDdXJyZW50LmNzcygnd2lkdGgnLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQcm9ncmVzc1BvcHVwQWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEFjdGlvbnMucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICB9XG5cbiAgICBzaG93UHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzQmFyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgfVxuXG4gICAgaGlkZVByb2dyZXNzQmFyKCkge1xuICAgICAgICB0aGlzLiRwcm9ncmVzc0Jhci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgIH1cblxuICAgIG9uQWRkQWxsQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5pdGVtQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LmJ1bGtPcmRlckVudGVyUXR5IHx8ICdQbGVhc2UgZW50ZXIgcHJvZHVjdCBxdWFudGl0eScsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRBbGxQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIG9uUHJvZHVjdEFkZGVkKGV2ZW50LCBwcm9kdWN0SWQpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZChgW2RhdGEtYnVsa29yZGVyLXF0eS1pZD0nJHtwcm9kdWN0SWR9J11gKS52YWwoMCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKCk7XG4gICAgfVxuXG4gICAgb25RdWFudGl0eUJ1dHRvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkaW5wdXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0nKS5maW5kKCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5TWF4ID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcblxuICAgICAgICBsZXQgcXR5ID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCk7XG5cbiAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xuICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcbiAgICAgICAgICAgIC8vIElmIHF1YW50aXR5IG1heCBvcHRpb24gaXMgc2V0XG4gICAgICAgICAgICBpZiAocXVhbnRpdHlNYXggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZXhjZWVkIG1heFxuICAgICAgICAgICAgICAgIGlmICgocXR5ICsgMSkgPD0gcXVhbnRpdHlNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcXR5Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChxdHkgPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtaW4gb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgaWYgKHF1YW50aXR5TWluID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIHF1YW50aXR5IGRvZXMgbm90IGZhbGwgYmVsb3cgbWluXG4gICAgICAgICAgICAgICAgaWYgKChxdHkgLSAxKSA+PSBxdWFudGl0eU1pbikge1xuICAgICAgICAgICAgICAgICAgICBxdHktLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHkgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXR5LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkaW5wdXQudmFsKHF0eSk7XG5cbiAgICAgICAgaWYgKHF0eSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRXJyb3JNc2coJGlucHV0WzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKCk7XG4gICAgfVxuXG4gICAgb25RdWFudGl0eUNoYW5nZShldmVudCkge1xuICAgICAgICBjb25zdCBxdHkgPSBwYXJzZUludChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgIGlmIChxdHkgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckVycm9yTXNnKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxjdWxhdGUoKTtcbiAgICB9XG5cbiAgICBjbGVhckVycm9yTXNnKGlucHV0KSB7XG4gICAgICAgICQoaW5wdXQpLmNsb3Nlc3QoJy5jYXJkJykuZmluZCgnW2RhdGEtYnVsa29yZGVyLW9wdGlvbnNdIC5hbGVydEJveCcpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZSgpIHtcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IG1vbmV5O1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWJ1bGtvcmRlci1xdHktaWRdJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3QgcXR5ID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkaW5wdXQuZGF0YSgnYnVsa29yZGVyUXR5SWQnKTtcbiAgICAgICAgICAgIGNvbnN0ICRwcmljZSA9IHRoaXMuJHNjb3BlLmZpbmQoYFtkYXRhLWJ1bGtvcmRlci1wcmljZS1pZD0nJHtwcm9kdWN0SWR9J11gKTtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlVmFsID0gcGFyc2VGbG9hdCgkcHJpY2UuZGF0YSgnYnVsa29yZGVyUHJpY2VWYWx1ZScpKTtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlRm10ID0gJHByaWNlLmRhdGEoJ2J1bGtvcmRlclByaWNlRm9ybWF0dGVkJyk7XG4gICAgICAgICAgICBjb25zdCBzdWJ0b3RhbCA9IHByaWNlVmFsID8gTWF0aC5yb3VuZChwcmljZVZhbCAqIHF0eSAqIDEwMCkgLyAxMDAgOiAwO1xuICAgICAgICAgICAgY29uc3QgJHN1YnRvdGFsID0gdGhpcy4kc2NvcGUuZmluZChgW2RhdGEtYnVsa29yZGVyLXN1YnRvdGFsLWlkPScke3Byb2R1Y3RJZH0nXWApO1xuXG4gICAgICAgICAgICBpZiAocHJpY2VGbXQpIHtcbiAgICAgICAgICAgICAgICBtb25leSA9IGV4dHJhY3RNb25leShwcmljZUZtdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzdWJ0b3RhbC5odG1sKHByaWNlRm10ID8gY3VycmVuY3lGb3JtYXQoc3VidG90YWwsIG1vbmV5KSA6ICcnKTtcblxuICAgICAgICAgICAgdG90YWwgKz0gc3VidG90YWw7XG4gICAgICAgICAgICBjb3VudCArPSBxdHk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaXRlbUNvdW50ID0gY291bnQ7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtYnVsa29yZGVyLXRvdGFsLWNvdW50XScpLmh0bWwoY291bnQpO1xuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1idWxrb3JkZXItdG90YWwtYW1vdW50XScpLmh0bWwoY3VycmVuY3lGb3JtYXQoTWF0aC5yb3VuZCh0b3RhbCAqIDEwMCkgLyAxMDAsIG1vbmV5KSk7XG4gICAgfVxuXG4gICAgYWRkQWxsUHJvZHVjdHMoKSB7XG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG5cbiAgICAgICAgLy8gY2hlY2sgcHJvZHVjdHMgd2hpY2ggaGF2ZSBvcHRpb25zIG11Y2ggY2hvb3NlIG9wdGlvbnMgYmVmb3JlIGFkZCB0byBjYXJ0XG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWJ1bGtvcmRlci1vcHRpb25zXScpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0IHF0eSA9IE51bWJlcigkZWwuY2xvc2VzdCgnLmNhcmQnKS5maW5kKCdbZGF0YS1idWxrb3JkZXItcXR5LWlkXScpLnZhbCgpKSB8fCAwO1xuXG4gICAgICAgICAgICBpZiAocXR5ID4gMCAmJiAkZWwuZmluZCgnZm9ybScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICRlbC5odG1sKGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0Qm94IGFsZXJ0Qm94LS1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0Qm94LWNvbHVtbiBhbGVydEJveC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGljb24gZ2x5cGg9XCJpYy1lcnJvclwiIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTVoLTJ2LTJoMnYyem0wLTRoLTJWN2gydjZ6XCI+PC9wYXRoPjwvc3ZnPjwvaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhbGVydEJveC1jb2x1bW4gYWxlcnRCb3gtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7dGhpcy5jb250ZXh0LmJ1bGtPcmRlckNob29zZU9wdGlvbnN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgKTtcbiAgICAgICAgICAgICAgICAkZWwuZmluZCgnLmFsZXJ0Qm94JykuaGlkZSgpLmZhZGVJbigzMDApO1xuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdmFsaWQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICB0aGlzLnByb2dyZXNzQ3VycmVudCA9IDA7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtYnVsa29yZGVyLXF0eS1pZF0nKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCBxdHkgPSBwYXJzZUludCgkaW5wdXQudmFsKCksIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICRpbnB1dC5kYXRhKCdidWxrb3JkZXJRdHlJZCcpO1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRpbnB1dC5jbG9zZXN0KCcuY2FyZCcpLmZpbmQoJ1tkYXRhLWJ1bGtvcmRlci1vcHRpb25zXSBmb3JtJylbMF07XG5cbiAgICAgICAgICAgIGlmIChxdHkgPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NDdXJyZW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NQb3B1cCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkUHJvZHVjdChwcm9kdWN0SWQsIHF0eSwgZm9ybSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IDFzIGJlZm9yZSBhZGRpbmcgdG8gY2FydCBhIG5ldyBpdGVtIGluIG9yZGVyIHRvIGF2b2lkIHJlcXVlc3QgZmFpbGVkLlxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxheSgxMDAwKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9ncmVzc1RvdGFsID0gcHJvbWlzZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLnNob3dQcm9ncmVzc1BvcHVwKCk7XG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzQmFyKCk7XG5cbiAgICAgICAgcHJvbWlzZVNlcmlhbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzc1BvcHVwQWN0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlUXR5SW5DYXJ0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRDb3VudGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGFkZFByb2R1Y3QocHJvZHVjdElkLCBxdHksIGZvcm0gPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtIHx8IHVuZGVmaW5lZCk7XG4gICAgICAgIGZvcm1EYXRhLnNldCgncHJvZHVjdF9pZCcsIHByb2R1Y3RJZCk7XG4gICAgICAgIGZvcm1EYXRhLnNldCgncXR5W10nLCBxdHkpO1xuXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChmb3JtRGF0YSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2U/LmRhdGE/LmVycm9yPy5taW5xdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gdGhpcy5jb250ZXh0LnR4dE1pblF0eS5yZXBsYWNlKCclcXR5JScsIHJlc3BvbnNlLmRhdGEuZXJyb3IubWlucXR5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2U/LmRhdGE/LmVycm9yPy5tYXhxdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gdGhpcy5jb250ZXh0LnR4dE1heFF0eS5yZXBsYWNlKCclcXR5JScsIHJlc3BvbnNlLmRhdGEuZXJyb3IubWF4cXR5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxlcnQodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBwcm9taXNlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgIH1cblxuICAgIHVwZGF0ZVF0eUluQ2FydCgpIHtcbiAgICAgICAgJC5nZXQoJy9hcGkvc3RvcmVmcm9udC9jYXJ0JywgZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBxdHlzID0ge307XG5cbiAgICAgICAgICAgIGRhdGFbMF0ubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHF0eXNbaXRlbS5wcm9kdWN0SWRdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBxdHlzW2l0ZW0ucHJvZHVjdElkXSArPSBpdGVtLnF1YW50aXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF0eXNbaXRlbS5wcm9kdWN0SWRdID0gaXRlbS5xdWFudGl0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtYnVsa29yZGVyLWNhcnQtcXR5LWlkXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHBhcnNlSW50KCRlbC5kYXRhKCdidWxrb3JkZXJDYXJ0UXR5SWQnKSwgMTApO1xuICAgICAgICAgICAgICAgIGlmIChxdHlzW3Byb2R1Y3RJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgJGVsLmh0bWwocXR5c1twcm9kdWN0SWRdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkZWwuaHRtbCgnMCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVDYXJ0Q291bnRlcigpIHtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudCh7IHRlbXBsYXRlOiAnY2FydC9wcmV2aWV3JyB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY2FydCBjb3VudGVyXG4gICAgICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0UXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIHJlc3ApO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRDb3VudGVyID0gJCgnLm5hdlVzZXItYWN0aW9uIC5jYXJ0LWNvdW50Jyk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICRjYXJ0UXVhbnRpdHkuZGF0YSgnY2FydC1xdWFudGl0eScpIHx8IDA7XG5cbiAgICAgICAgICAgICRjYXJ0Q291bnRlci5hZGRDbGFzcygnY2FydC1jb3VudC0tcG9zaXRpdmUnKTtcbiAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1bGtPcmRlckZhY3RvcnkoY29udGV4dCA9IG51bGwsIHNlbGVjdG9yID0gJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJykge1xuICAgIGNvbnN0ICRzZWxlY3RvciA9ICQoc2VsZWN0b3IpO1xuICAgIGxldCBidWxrT3JkZXIgPSAkc2VsZWN0b3IuZGF0YSgnYnVsa09yZGVySW5zdGFuY2UnKTtcblxuICAgIGlmICghKGJ1bGtPcmRlciBpbnN0YW5jZW9mIEJ1bGtPcmRlcikpIHtcbiAgICAgICAgYnVsa09yZGVyID0gbmV3IEJ1bGtPcmRlcihjb250ZXh0LCAkc2VsZWN0b3IpO1xuICAgICAgICAkc2VsZWN0b3IuZGF0YSgnYnVsa09yZGVySW5zdGFuY2UnLCBidWxrT3JkZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBidWxrT3JkZXI7XG59XG4iLCJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICAvKiBNT0QgYnkgcGFwYXRoZW1lcyAtIHN1cGVybWFya2V0XG4gICAgICAgIC0tLVxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIC0tLVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgcXVlcnlQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICB1cmwucXVlcnlbcGFyYW0ubmFtZV0gPSBwYXJhbS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8qIEVORCBNT0QgKi9cbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCA9IHRydWU7IC8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi8gLy8gcGFwYXRoZW1lcy1zdXBlcm1hcmtldDogcXVpY2tmaXggc3RvcCBzdGVuY2lsLXV0aWxzIFNvcnRCeUhvb2sgc3VibWl0dGluZyB0aGUgZm9ybSB3aGVuIHNlbGVjdCBjaGFuZ2VkXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBob29rcywgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29sbGFwc2libGUnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcbmltcG9ydCBhY3Rpb25CYXJGYWN0b3J5IGZyb20gJy4uLy4uL2VtdGhlbWVzLW1vZGV6L2FjdGlvbi1iYXInOyAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcblxuLyoqXG4gKiBGYWNldGVkIHNlYXJjaCB2aWV3IGNvbXBvbmVudFxuICovXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBPYmplY3Qgd2l0aCBvcHRpb25zIGZvciB0aGUgYWpheCByZXF1ZXN0c1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgKiAgICAgIHRlbXBsYXRlczoge1xuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgKiAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcidcbiAgICAgKiAgICAgfVxuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgdGVtcGxhdGVzRGlkTG9hZCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICogICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IGZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgdGVtcGxhdGVzRGlkTG9hZCk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLW5hdmlnYXRpb24sICNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLXRvZ2dsZScsXG4gICAgICAgICAgICBibG9ja2VyU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYmxvY2tlcicsXG4gICAgICAgICAgICBjbGVhckZhY2V0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC1jbGVhckxpbmsnLFxuICAgICAgICAgICAgY29tcG9uZW50U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaC1uYXZMaXN0JyxcbiAgICAgICAgICAgIGZhY2V0TmF2TGlzdFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLm5hdkxpc3QnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUVycm9yU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1pbmxpbmVNZXNzYWdlJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0tZmllbGRzZXQnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUZvcm1TZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWF4X3ByaWNlXScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1pbl9wcmljZV0nLFxuICAgICAgICAgICAgc2hvd01vcmVUb2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsXG4gICAgICAgICAgICBmYWNldGVkU2VhcmNoRmlsdGVySXRlbXM6ICcjZmFjZXRlZFNlYXJjaC1maWx0ZXJJdGVtcyAuZm9ybS1pbnB1dCcsXG4gICAgICAgICAgICBtb2RhbDogbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXSxcbiAgICAgICAgICAgIG1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBbXTtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XG4gICAgICAgICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKS5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxuICAgICAgICAvLyBOT1RFOiBOZWVkIHRvIGV4ZWN1dGUgYWZ0ZXIgQ29sbGFwc2libGUgZ2V0cyBib290c3RyYXBwZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IHRoaXMub25Qb3BTdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBTdXBlcm1hcmtldFxuICAgICAgICAkKCdib2R5Jykub25lKCdiZWZvcmVsb2FkLmluc3RhbnRsb2FkJywgKCkgPT4gdGhpcy51bmJpbmRFdmVudHMoKSk7XG4gICAgfVxuXG4gICAgLy8gU3VwZXJtYXJrZXRcbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCkge1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGlvbkJhckZhY3RvcnkoKTsgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBSZXN0b3JlIHZpZXcgc3RhdGVcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCk7XG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKTtcblxuICAgICAgICAvLyBCaW5kIGV2ZW50c1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICAvLyBTdXBlcm1hcmtldFxuICAgICAgICBpZiAodGhpcy51cGRhdGVWaWV3Q2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVZpZXdDYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcblxuICAgICAgICBpZiAoaGFzTW9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xuICAgICAgICBpZiAodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShmYWNldFVybCwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogZmFjZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycywgdGhpcy5vcHRpb25zLnZhbGlkYXRpb25FcnJvck1lc3NhZ2VzKTtcblxuICAgICAgICB0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBSZXN0b3JlIGNvbGxhcHNlZCBzdGF0ZSBmb3IgZWFjaCBmYWNldFxuICAgICAgICAkbmF2TGlzdHMuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLmluY2x1ZGVzKGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IHRoaXMuY29sbGFwc2VkRmFjZXRzLmluY2x1ZGVzKGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBDbGVhbi11cFxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vbigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub24oJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vZmYoJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub2ZmKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIG9uQ2xlYXJGYWNldChldmVudCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIC8qIE1PRCBieSBwYXBhdGhlbWVzIC0gc3VwZXJtYXJrZXRcbiAgICAgICAgLS0tXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICAgICAgLS0tXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHdpblVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGlmICh3aW5VcmwucXVlcnkubW9kZSkge1xuICAgICAgICAgICAgZmFjZXRVcmwucXVlcnkubW9kZSA9IHdpblVybC5xdWVyeS5tb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5VcmwucXVlcnkubGltaXQpIHtcbiAgICAgICAgICAgIGZhY2V0VXJsLnF1ZXJ5LmxpbWl0ID0gd2luVXJsLnF1ZXJ5LmxpbWl0O1xuICAgICAgICB9XG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiBmYWNldFVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKGZhY2V0VXJsLnF1ZXJ5KSB9KSk7XG4gICAgICAgIC8qIEVORCBNT0QgKi9cbiAgICB9XG5cbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXG4gICAgICAgIHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgfVxuXG4gICAgb25GYWNldENsaWNrKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGxpbmsudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICAvKiBNT0QgYnkgcGFwYXRoZW1lcyAtIHN1cGVybWFya2V0XG4gICAgICAgIC0tLVxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgICAgIC0tLVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCB3aW5VcmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IFVybC5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICBpZiAod2luVXJsLnF1ZXJ5Lm1vZGUpIHtcbiAgICAgICAgICAgIGZhY2V0VXJsLnF1ZXJ5Lm1vZGUgPSB3aW5VcmwucXVlcnkubW9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luVXJsLnF1ZXJ5LmxpbWl0KSB7XG4gICAgICAgICAgICBmYWNldFVybC5xdWVyeS5saW1pdCA9IHdpblVybC5xdWVyeS5saW1pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiBmYWNldFVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKGZhY2V0VXJsLnF1ZXJ5KSB9KSk7XG4gICAgICAgIC8qIEVORCBNT0QgKi9cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICAvKiBNT0QgYnkgcGFwYXRoZW1lcyAtIHN1cGVybWFya2V0XG4gICAgICAgIC0tLVxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIC0tLVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgcXVlcnlQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICB1cmwucXVlcnlbcGFyYW0ubmFtZV0gPSBwYXJhbS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8qIEVORCBNT0QgKi9cbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlOyAvLyBwYXBhdGhlbWVzLXN1cGVybWFya2V0OiBxdWljay1maXhlZCBzdGVuY2lsLXV0aWxzIGZvciBzb3J0aW5nIGFqYXggcmVxdWVzdFxuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pKTtcbiAgICB9XG5cbiAgICBvblJhbmdlU3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvKiBNT0QgYnkgcGFwYXRoZW1lcyAtIHN1cGVybWFya2V0XG4gICAgICAgIC0tLVxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGRlY29kZVVSSSgkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpKTtcbiAgICAgICAgLS0tXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zQXJyYXkgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zQXJyYXkuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICB1cmwucXVlcnlbcGFyYW0ubmFtZV0gPSBwYXJhbS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpO1xuICAgICAgICAvKiBFTkQgTU9EICovXG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiBgPyR7cXVlcnlQYXJhbXN9YCB9KSk7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgb25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgIGlmICghY29sbGFwc2libGUpIHJldHVybjsgLy8gcGFwYXRoZW1lcy1zdXBlcm1hcmtldDogZml4IGlzc3VlIHdoZW4gYWRkaW5nIGRpc2FibGVkLWJyZWFrcG9pbnQgdG8gI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdFxuICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuXG4gICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBvcFN0YXRlKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoY3VycmVudFVybCk7XG4gICAgICAgIC8vIElmIHNlYXJjaFBhcmFtcyBkb2VzIG5vdCBjb250YWluIGEgcGFnZSB2YWx1ZSB0aGVuIG1vZGlmeSB1cmwgcXVlcnkgc3RyaW5nIHRvIGhhdmUgcGFnZT0xXG4gICAgICAgIGlmICghc2VhcmNoUGFyYW1zLmhhcygncGFnZScpKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5rVXJsID0gJCgnLnBhZ2luYXRpb24tbGluaycpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIGlmIChsaW5rVXJsKSB7IC8vIFN1cGVybWFya2V0IEZpeCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICBjb25zdCByZSA9IC9wYWdlPVswLTldKy9pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rVXJsID0gbGlua1VybC5yZXBsYWNlKHJlLCAncGFnZT0xJyk7XG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXBkYXRlZExpbmtVcmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFjZXRlZFNlYXJjaDtcbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiIsImltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuY29uc3QgdXJsVXRpbHMgPSB7XG4gICAgZ2V0VXJsOiAoKSA9PiBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWAsXG5cbiAgICBnb1RvVXJsOiAodXJsKSA9PiB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH0sXG5cbiAgICByZXBsYWNlUGFyYW1zOiAodXJsLCBwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGxldCBwYXJhbTtcblxuICAgICAgICAvLyBMZXQgdGhlIGZvcm1hdHRlciB1c2UgdGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB0aGUgbmV3IHVybFxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcblxuICAgICAgICBmb3IgKHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN1cGVybWFya2V0OiBGaXggdXJsIGVuY29kZSBSRkMgMzk4NlxuICAgICAgICBpZiAocGFyc2VkLnF1ZXJ5KSB7XG4gICAgICAgICAgICBwYXJzZWQuc2VhcmNoID0gdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyhwYXJzZWQucXVlcnkpO1xuICAgICAgICAgICAgZGVsZXRlIHBhcnNlZC5xdWVyeTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVcmwuZm9ybWF0KHBhcnNlZCk7XG4gICAgfSxcblxuICAgIC8vIFN1cGVybWFya2V0XG4gICAgcmVtb3ZlUGFyYW1zOiAodXJsLCBwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gTGV0IHRoZSBmb3JtYXR0ZXIgdXNlIHRoZSBxdWVyeSBvYmplY3QgdG8gYnVpbGQgdGhlIG5ldyB1cmxcbiAgICAgICAgcGFyc2VkLnNlYXJjaCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnF1ZXJ5Lmhhc093blByb3BlcnR5KHBhcmFtcykpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1zXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBhcnNlZC5xdWVyeVtwYXJhbXNdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5xdWVyeS5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnF1ZXJ5W3BhcmFtXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJzZWQucXVlcnlbcGFyYW1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3VwZXJtYXJrZXQ6IEZpeCB1cmwgZW5jb2RlIFJGQyAzOTg2XG4gICAgICAgIGlmIChwYXJzZWQucXVlcnkpIHtcbiAgICAgICAgICAgIHBhcnNlZC5zZWFyY2ggPSB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHBhcnNlZC5xdWVyeSk7XG4gICAgICAgICAgICBkZWxldGUgcGFyc2VkLnF1ZXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgLy8gc3VwZXJtYXJrZXQ6IEZpeCBmYWNldGVkIHZhbHVlIGNvbnRhaW5zIGJvdGggKyBhbmQgYSBzcGFjaW5nIGNoYXJhY3RlciAoaWUuIFwiRFZEK1IgRExcIilcbiAgICBlbmNvZGVQYXJhbTogKHZhbCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuc3BsaXQoJyUyMCcpLmpvaW4oJysnKS5yZXBsYWNlKC9bIScoKSpdL2csIGMgPT4gYCUke2MuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNil9YCksXG5cbiAgICBidWlsZFF1ZXJ5U3RyaW5nOiAoX3F1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBfcXVlcnlEYXRhKTsgLy8gcGFwYXRoZW1lczogZml4IHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eSBpcyBub3QgYSBmdW5jdGlvblxuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHt1cmxVdGlscy5lbmNvZGVQYXJhbShrZXkpfT0ke3VybFV0aWxzLmVuY29kZVBhcmFtKHF1ZXJ5RGF0YVtrZXldW25keF0pfWA7IC8vIHN1cGVybWFya2V0IG1vZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHt1cmxVdGlscy5lbmNvZGVQYXJhbShrZXkpfT0ke3VybFV0aWxzLmVuY29kZVBhcmFtKHF1ZXJ5RGF0YVtrZXldKX1gOyAvLyBzdXBlcm1hcmtldCBtb2RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0LnN1YnN0cmluZygxKTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJsVXRpbHM7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiJCIsIlVybCIsInVybFV0aWxzIiwiaW5zdGFudGxvYWRCaW5kZWQiLCJhY3Rpb25CYXIiLCJyZW1vdmVNb2RlQ2xhc3MiLCJpbmRleCIsImNsYXNzTmFtZSIsIm1hdGNoIiwiam9pbiIsIkFjdGlvbkJhciIsIm9wdGlvbnMiLCJvbk1vZGVDaGFuZ2UiLCJiaW5kIiwiaW5pdCIsIl9wcm90byIsInByb3RvdHlwZSIsIiRzb3J0QnkiLCJsZW5ndGgiLCIkbGltaXQiLCJmaW5kIiwiJG1vZGUiLCJ1cmwiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInF1ZXJ5IiwibGltaXQiLCJ2YWwiLCJtb2RlIiwicHJvcCIsImZpbHRlciIsIiRib2R5IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidW5iaW5kRXZlbnRzIiwiYmluZEV2ZW50cyIsInJlaW5pdCIsIm5ld09wdGlvbnMiLCJkZXN0cm95Iiwib24iLCJvZmYiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZWFjaCIsImkiLCJlbCIsIiRhIiwicmVwbGFjZVBhcmFtcyIsImF0dHIiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImZvcm1hdCIsInBhdGhuYW1lIiwic2VhcmNoIiwiYnVpbGRRdWVyeVN0cmluZyIsImFjdGlvbkJhckZhY3RvcnkiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJjIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJyZXR1cm4iLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJ1dGlscyIsInN3YWwiLCJleHRyYWN0TW9uZXkiLCJjdXJyZW5jeUZvcm1hdCIsImRlbGF5IiwibXMiLCJzZXRUaW1lb3V0IiwicHJvbWlzZVNlcmlhbCIsImZ1bmNzIiwicmVkdWNlIiwicHJvbWlzZSIsImZ1bmMiLCJyZXN1bHQiLCJBcnJheSIsImNvbmNhdCIsIkJ1bGtPcmRlciIsImNvbnRleHQiLCIkc2NvcGUiLCJfdGhpcyIsIml0ZW1Db3VudCIsInByb2dyZXNzQ3VycmVudCIsInByb2dyZXNzVG90YWwiLCJvblF1YW50aXR5Q2hhbmdlIiwib25RdWFudGl0eUJ1dHRvbkNsaWNrIiwib25Qcm9kdWN0QWRkZWQiLCJvbkFkZEFsbENsaWNrIiwib25DYXJ0UXR5Q2hhbmdlIiwib25Qcm9ncmVzc1BvcHVwQ2xvc2VDbGljayIsIiRwcm9ncmVzc1BvcHVwIiwiJHByb2dyZXNzQmFyIiwiJHByb2dyZXNzUG9wdXBDdXJyZW50IiwiJHByb2dyZXNzUG9wdXBBY3Rpb25zIiwiJHByb2dyZXNzUG9wdXBDbG9zZSIsImNhbGN1bGF0ZSIsInVwZGF0ZVF0eUluQ2FydCIsImhpZGVQcm9ncmVzc1BvcHVwIiwic2hvd1Byb2dyZXNzUG9wdXAiLCJjc3MiLCJ1cGRhdGVQcm9ncmVzc1BvcHVwIiwic2hvd1Byb2dyZXNzUG9wdXBBY3Rpb25zIiwic2hvd1Byb2dyZXNzQmFyIiwiaGlkZVByb2dyZXNzQmFyIiwiZmlyZSIsInRleHQiLCJidWxrT3JkZXJFbnRlclF0eSIsImljb24iLCJhZGRBbGxQcm9kdWN0cyIsInByb2R1Y3RJZCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiJGlucHV0IiwiY2xvc2VzdCIsInF1YW50aXR5TWluIiwicGFyc2VJbnQiLCJkYXRhIiwicXVhbnRpdHlNYXgiLCJxdHkiLCJjbGVhckVycm9yTXNnIiwiaW5wdXQiLCJyZW1vdmUiLCJfdGhpczIiLCJ0b3RhbCIsImNvdW50IiwibW9uZXkiLCIkcHJpY2UiLCJwcmljZVZhbCIsInBhcnNlRmxvYXQiLCJwcmljZUZtdCIsInN1YnRvdGFsIiwiTWF0aCIsInJvdW5kIiwiJHN1YnRvdGFsIiwiaHRtbCIsIl90aGlzMyIsInZhbGlkIiwiJGVsIiwiTnVtYmVyIiwiYnVsa09yZGVyQ2hvb3NlT3B0aW9ucyIsImhpZGUiLCJmYWRlSW4iLCJwcm9taXNlcyIsImZvcm0iLCJwdXNoIiwiX2NhbGxlZSIsIl9jb250ZXh0IiwiYWRkUHJvZHVjdCIsInVwZGF0ZUNhcnRDb3VudGVyIiwiX2FkZFByb2R1Y3QiLCJfY2FsbGVlMiIsIl90aGlzNCIsImZvcm1EYXRhIiwiX2NvbnRleHQyIiwidW5kZWZpbmVkIiwiRm9ybURhdGEiLCJzZXQiLCJhcGkiLCJjYXJ0IiwiaXRlbUFkZCIsImVyciIsInJlc3BvbnNlIiwiX3Jlc3BvbnNlJGRhdGEiLCJfcmVzcG9uc2UkZGF0YTIiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsIm1pbnF0eSIsInR4dE1pblF0eSIsInJlcGxhY2UiLCJtYXhxdHkiLCJ0eHRNYXhRdHkiLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYWxlcnQiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsIl94IiwiX3gyIiwiX3gzIiwiX3RoaXM1IiwiZ2V0IiwicXR5cyIsImxpbmVJdGVtcyIsInBoeXNpY2FsSXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsInF1YW50aXR5IiwiZ2V0Q29udGVudCIsInRlbXBsYXRlIiwicmVzcCIsIiRjYXJ0UXVhbnRpdHkiLCIkY2FydENvdW50ZXIiLCJ0cmlnZ2VyIiwiYnVsa09yZGVyRmFjdG9yeSIsInNlbGVjdG9yIiwiJHNlbGVjdG9yIiwiYnVsa09yZGVyIiwiUGFnZU1hbmFnZXIiLCJDYXRhbG9nUGFnZSIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwib25Tb3J0QnlTdWJtaXQiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZUFycmF5IiwicGFyYW0iLCJuYW1lIiwicGFnZSIsImlzRGVmYXVsdFByZXZlbnRlZCIsImRlZmF1bHQiLCJob29rcyIsIm1vZGFsRmFjdG9yeSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlZhbGlkYXRvcnMiLCJub2QiLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsImRlZmF1bHRPcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxPcGVuIiwiX2V4dGVuZCIsImNvbGxhcHNlZEZhY2V0cyIsImNvbGxhcHNlZEZhY2V0SXRlbXMiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwiYWNjb3JkaW9uVG9nZ2xlIiwiJGFjY29yZGlvblRvZ2dsZSIsImNvbGxhcHNpYmxlIiwiaXNDb2xsYXBzZWQiLCJ0YXJnZXRJZCIsImlzIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwib25Qb3BTdGF0ZSIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwib25lIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsInVwZGF0ZVZpZXdDYWxsYmFjayIsInNob3ciLCJnZXRQYWdlIiwiZ2V0VXJsIiwiRXJyb3IiLCJleHBhbmRGYWNldEl0ZW1zIiwiJG5hdkxpc3QiLCJpZCIsIl93aXRob3V0IiwiaGFzTW9yZVJlc3VsdHMiLCJfdW5pb24iLCJ0b2dnbGVGYWNldEl0ZW1zIiwiaW5jbHVkZXMiLCJnZXRNb3JlRmFjZXRSZXN1bHRzIiwiZmFjZXQiLCJmYWNldFVybCIsInNob3dNb3JlIiwicGFyYW1zIiwibGlzdF9hbGwiLCJvcGVuIiwidXBkYXRlQ29udGVudCIsIiRpdGVtcyIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsImNvbGxhcHNlRmFjZXQiLCJjbG9zZSIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwidmFsaWRhdG9yIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIl90aGlzNiIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwiX3RoaXM3IiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aW5VcmwiLCJnb1RvVXJsIiwiJHRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJxdWVyeVBhcmFtc0FycmF5IiwiY3VycmVudFVybCIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImhhcyIsImxpbmtVcmwiLCJyZSIsInVwZGF0ZWRMaW5rVXJsIiwicmVwbGFjZVN0YXRlIiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsIkpTT04iLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInNwbGl0IiwicG9wIiwiYWNjIiwicGFyc2VkIiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVQYXJhbXMiLCJlbmNvZGVQYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsIl9xdWVyeURhdGEiLCJxdWVyeURhdGEiLCJhc3NpZ24iLCJvdXQiLCJpc0FycmF5IiwibmR4Iiwic3Vic3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==
