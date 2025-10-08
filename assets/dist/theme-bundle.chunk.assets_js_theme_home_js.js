(self["webpackChunkpapathemes_supermarket"] = self["webpackChunkpapathemes_supermarket"] || []).push([["assets_js_theme_home_js"],{

/***/ "./assets/js/emthemes-modez/products-by-category.js":
/*!**********************************************************!*\
  !*** ./assets/js/emthemes-modez/products-by-category.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryProductsGraphQLQuery: () => (/* binding */ CategoryProductsGraphQLQuery),
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.min.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_global_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/global/foundation */ "./assets/js/theme/global/foundation.js");
/* harmony import */ var _theme_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-utils */ "./assets/js/emthemes-modez/theme-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* eslint-disable camelcase */
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var isRequestingCategoryPage = 0;
var CategoryProductsGraphQLQuery = /*#__PURE__*/function (_SupermarketProductCa) {
  function CategoryProductsGraphQLQuery() {
    return _SupermarketProductCa.apply(this, arguments) || this;
  }
  _inheritsLoose(CategoryProductsGraphQLQuery, _SupermarketProductCa);
  var _proto = CategoryProductsGraphQLQuery.prototype;
  /**
   * Load products by category ID using GraphQL
   * @param {Number} categoryId Category ID
   * @param {String} afterCursor Product ID after which to load more products
   * @param {Number} limit Number of products to load
   * @param {A_TO_Z|BEST_REVIEWED|BEST_SELLING|DEFAULT|FEATURED|HIGHEST_PRICE|LOWEST_PRICE|NEWEST|Z_TO_A} sort Sort order
   * @param {Boolean} hideOutOfStock Hide out of stock products
   * @returns category
   */
  _proto.load =
  /*#__PURE__*/
  function () {
    var _load = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(categoryId, afterCursor, limit, sort, hideOutOfStock) {
      var _this = this;
      var cacheKey;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (afterCursor === void 0) {
              afterCursor = '';
            }
            if (limit === void 0) {
              limit = 10;
            }
            if (sort === void 0) {
              sort = 'DEFAULT';
            }
            if (hideOutOfStock === void 0) {
              hideOutOfStock = true;
            }
            cacheKey = this.currencyCode + "_" + categoryId + "_" + afterCursor + "_" + limit + "_" + sort + "_" + hideOutOfStock;
            if (this.cachedProducts[cacheKey]) {
              _context.n = 2;
              break;
            }
            _context.n = 1;
            return new Promise(function (resolve) {
              $.ajax({
                url: '/graphql',
                method: 'POST',
                data: JSON.stringify({
                  query: "\n                            query categoryProducts(\n                                $entityId: Int!,\n                                $after: String,\n                                $first: Int,\n                                $hideOutOfStock: Boolean,\n                                $sortBy: CategoryProductSort\n                                $currencyCode: currencyCode!\n                            ) {\n                                site {\n                                    category(entityId: $entityId) {\n                                        name\n                                        path\n                                        products(after: $after, first: $first, hideOutOfStock: $hideOutOfStock, sortBy: $sortBy) {\n                                            edges {\n                                                node {\n                                                    entityId\n                                                    name\n                                                    sku\n                                                    path\n                                                    addToCartUrl\n                                                    minPurchaseQuantity\n                                                    maxPurchaseQuantity\n                                                    pricesWithTax: prices(includeTax: true, currencyCode: $currencyCode) {\n                                                        price {\n                                                            ...MoneyFields\n                                                        }\n                                                        basePrice {\n                                                            ...MoneyFields\n                                                        }\n                                                        salePrice {\n                                                            ...MoneyFields\n                                                        }\n                                                        retailPrice {\n                                                            ...MoneyFields\n                                                        }\n                                                        priceRange {\n                                                            min {\n                                                                ...MoneyFields\n                                                            }\n                                                            max {\n                                                                ...MoneyFields\n                                                            }\n                                                        }\n                                                    }\n                                                    pricesWithoutTax: prices(includeTax: false, currencyCode: $currencyCode) {\n                                                        price {\n                                                            ...MoneyFields\n                                                        }\n                                                        basePrice {\n                                                            ...MoneyFields\n                                                        }\n                                                        salePrice {\n                                                            ...MoneyFields\n                                                        }\n                                                        retailPrice {\n                                                            ...MoneyFields\n                                                        }\n                                                        priceRange {\n                                                            min {\n                                                                ...MoneyFields\n                                                            }\n                                                            max {\n                                                                ...MoneyFields\n                                                            }\n                                                        }\n                                                    }\n                                                    defaultImage {\n                                                        ...ImageFields\n                                                    }\n                                                    images {\n                                                        edges {\n                                                        node {\n                                                            ...ImageFields\n                                                            isDefault\n                                                        }\n                                                        }\n                                                    }\n                                                    brand {\n                                                        name\n                                                        path\n                                                    }\n                                                    reviewSummary {\n                                                        averageRating\n                                                    }\n                                                    productOptions(first: 1) {\n                                                        edges {\n                                                            node {\n                                                                entityId\n                                                            }\n                                                        }\n                                                    }\n                                                    availabilityV2 {\n                                                        status\n                                                    }\n                                                    inventory {\n                                                        isInStock\n                                                    }\n                                                    customFields {\n                                                        edges {\n                                                            node {\n                                                                name\n                                                                value\n                                                            }\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                            pageInfo {\n                                                endCursor\n                                                hasNextPage\n                                            }\n                                        }\n                                    }\n                                    categoryTree(rootEntityId: $entityId) {\n                                        hasChildren\n                                        children {\n                                            entityId\n                                            name\n                                            path\n                                        }\n                                    }\n                                    settings {\n                                        tax {\n                                            plp\n                                        }\n                                        inventory {\n                                            defaultOutOfStockMessage\n                                        }\n                                        storefront {\n                                            catalog {\n                                                productComparisonsEnabled\n                                            }\n                                        }\n                                    }\n                                    currency(currencyCode: $currencyCode) {\n                                        display {\n                                            symbol\n                                            symbolPlacement\n                                            decimalToken\n                                            thousandsToken\n                                            decimalPlaces\n                                        }\n                                    }\n                                }\n                            }\n                            fragment MoneyFields on Money {\n                                value\n                                currencyCode\n                            }\n                            fragment ImageFields on Image {\n                                url80wide: url(width: 80)\n                                url160wide: url(width: 160)\n                                url320wide: url(width: 320)\n                                url640wide: url(width: 640)\n                            }\n                        ",
                  variables: {
                    entityId: categoryId,
                    after: afterCursor,
                    first: limit,
                    hideOutOfStock: hideOutOfStock,
                    sortBy: sort,
                    currencyCode: _this.currencyCode
                  }
                }),
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer " + _this.graphQLToken
                },
                xhrFields: {
                  withCredentials: true
                },
                success: function success(resp) {
                  var _resp$data$site$categ, _resp$data$site$categ2;
                  var category = Object.assign({}, resp.data.site.category, {
                    children: (_resp$data$site$categ = resp.data.site.categoryTree[0]) == null ? void 0 : _resp$data$site$categ.children,
                    hasChildren: (_resp$data$site$categ2 = resp.data.site.categoryTree[0]) == null ? void 0 : _resp$data$site$categ2.hasChildren,
                    products: _this.mapGraphQLProducts(resp.data.site.category.products, resp.data.site.settings, resp.data.site.currency),
                    productsInfo: {
                      endCursor: resp.data.site.category.products.pageInfo.endCursor,
                      hasNextPage: resp.data.site.category.products.pageInfo.hasNextPage
                    }
                  });
                  resolve(category);
                },
                error: function error() {
                  resolve('');
                }
              });
            });
          case 1:
            this.cachedProducts[cacheKey] = _context.v;
          case 2:
            return _context.a(2, this.cachedProducts[cacheKey]);
        }
      }, _callee, this);
    }));
    function load(_x, _x2, _x3, _x4, _x5) {
      return _load.apply(this, arguments);
    }
    return load;
  }();
  return CategoryProductsGraphQLQuery;
}(_theme_utils__WEBPACK_IMPORTED_MODULE_4__.SupermarketProductCardsGraphQLQuery);
var ProductsByCategory = /*#__PURE__*/function () {
  function ProductsByCategory(_ref) {
    var id = _ref.id,
      _ref$index = _ref.index,
      index = _ref$index === void 0 ? 0 : _ref$index,
      _ref$sort = _ref.sort,
      sort = _ref$sort === void 0 ? '' : _ref$sort,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? '' : _ref$limit,
      $parent = _ref.$parent,
      context = _ref.context,
      _ref$sectionTemplate = _ref.sectionTemplate,
      sectionTemplate = _ref$sectionTemplate === void 0 ? "\n            <div class=\"emthemesModez-section emthemesModez-section--productsByCategorySortingTabs\">\n                <div class=\"emthemesModez-section-inner\">\n                    <div class=\"emthemesModez-productsByCategoryTabs emthemesModez-productsByCategoryTabs--sorting emthemesModez-productsByCategoryTabs--supermarket1\">\n                        <ul class=\"tabs\" data-tab role=\"tablist\">\n                            <li class=\"li-heading\" role=\"presentation\"><h2 class=\"page-heading\" role=\"tab\"><a href=\"{{url}}\">{{name}}</a></h2></li>\n\n                            {{#showBestselling}}\n                                <li class=\"tab{{#isBestsellingActive}} is-active{{/isBestsellingActive}}\" role=\"presentation\"><a class=\"tab-title\" href=\"#tab-productsByCategoryTabs-bestselling-{{id}}\" role=\"tab\" tabindex=\"0\" aria-selected=\"{{#isBestsellingActive}}true{{/isBestsellingActive}}{{^isBestsellingActive}}false{{/isBestsellingActive}}\" aria-controls=\"tab-productsByCategoryTabs-bestselling-{{id}}\">{{txtBestsellingTab}}</a></li>\n                            {{/showBestselling}}\n\n                            {{#showFeatured}}\n                                <li class=\"tab{{#isFeaturedActive}} is-active{{/isFeaturedActive}}\" role=\"presentation\"><a class=\"tab-title\" href=\"#tab-productsByCategoryTabs-featured-{{id}}\" role=\"tab\" tabindex=\"0\" aria-selected=\"{{#isFeaturedActive}}true{{/isFeaturedActive}}{{^isFeaturedActive}}false{{/isFeaturedActive}}\" aria-controls=\"tab-productsByCategoryTabs-featured-{{id}}\">{{txtFeaturedTab}}</a></li>\n                            {{/showFeatured}}\n\n                            {{#showNew}}\n                                <li class=\"tab{{#isNewActive}} is-active{{/isNewActive}}\" role=\"presentation\"><a class=\"tab-title\" href=\"#tab-productsByCategoryTabs-newest-{{id}}\" role=\"tab\" tabindex=\"0\" aria-selected=\"{{#isNewActive}}true{{/isNewActive}}{{^isNewActive}}false{{/isNewActive}}\" aria-controls=\"tab-productsByCategoryTabs-newest-{{id}}\">{{txtNewTab}}</a></li>\n                            {{/showNew}}\n\n                            {{#showReviews}}\n                                <li class=\"tab{{#isReviewsActive}} is-active{{/isReviewsActive}}\" role=\"presentation\"><a class=\"tab-title\" href=\"#tab-productsByCategoryTabs-avgcustomerreview-{{id}}\" role=\"tab\" tabindex=\"0\" aria-selected=\"{{#isReviewsActive}}true{{/isReviewsActive}}{{^isReviewsActive}}false{{/isReviewsActive}}\" aria-controls=\"tab-productsByCategoryTabs-avgcustomerreview-{{id}}\">{{txtReviewsTab}}</a></li>\n                            {{/showReviews}}\n                        </ul>\n                        {{#showBannerOrSubcategories}}\n                            <div class=\"emthemesModez-productsByCategoryTabs-details{{#showBanner}} emthemesModez-productsByCategoryTabs-details--hasImage{{/showBanner}}\">\n                                {{#showBanner}}\n                                    <div class=\"emthemesModez-productsByCategoryTabs-details-image\" data-banner>\n                                        <a href=\"{{url}}\"><img alt=\"{{name}}\" /></a>\n                                    </div>\n                                {{/showBanner}}\n                                {{#subcategories.length}}\n                                        <div class=\"emthemesModez-productsByCategoryTabs-details-sub\">\n                                            <h3 class=\"emthemesModez-productsByCategoryTabs-details-sub-heading\">{{txtSubHeading}}</h3>\n                                            <ul class=\"emthemesModez-productsByCategoryTabs-details-sub-list\">\n                                            {{#subcategories}}\n                                                <li class=\"emthemesModez-productsByCategoryTabs-details-sub-item\"><a href=\"{{url}}\">{{name}}</a></li>\n                                            {{/subcategories}}\n                                            </ul>\n                                        </div>\n                                {{/subcategories.length}}\n                            </div>\n                        {{/showBannerOrSubcategories}}\n                        <div class=\"tabs-contents\">\n                            {{#showBestselling}}\n                                <section role=\"tabpanel\" aria-hidden=\"{{#isBestsellingActive}}false{{/isBestsellingActive}}{{^isBestsellingActive}}true{{/isBestsellingActive}}\" class=\"tab-content {{#isBestsellingActive}}is-active{{/isBestsellingActive}}\" id=\"tab-productsByCategoryTabs-bestselling-{{id}}\" data-sort=\"bestselling\">\n                                    {{#isBestsellingActive}}\n                                        {{&productsHtml}}\n                                    {{/isBestsellingActive}}\n                                    {{^isBestsellingActive}}\n                                        {{&productsLoadingHtml}}\n                                    {{/isBestsellingActive}}\n                                </section>\n                            {{/showBestselling}}\n\n                            {{#showFeatured}}\n                                <section role=\"tabpanel\" aria-hidden=\"{{#isFeaturedActive}}false{{/isFeaturedActive}}{{^isFeaturedActive}}true{{/isFeaturedActive}}\" class=\"tab-content {{#isFeaturedActive}}is-active{{/isFeaturedActive}}\" id=\"tab-productsByCategoryTabs-featured-{{id}}\" data-sort=\"featured\">\n                                    {{#isFeaturedActive}}\n                                        {{&productsHtml}}\n                                    {{/isFeaturedActive}}\n                                    {{^isFeaturedActive}}\n                                        {{&productsLoadingHtml}}\n                                    {{/isFeaturedActive}}\n                                </section>\n                            {{/showFeatured}}\n\n                            {{#showNew}}\n                                <section role=\"tabpanel\" aria-hidden=\"{{#isNewActive}}false{{/isNewActive}}{{^isNewActive}}true{{/isNewActive}}\" class=\"tab-content {{#isNewActive}}is-active{{/isNewActive}}\" id=\"tab-productsByCategoryTabs-newest-{{id}}\" data-sort=\"newest\">\n                                    {{#isNewActive}}\n                                        {{&productsHtml}}\n                                    {{/isNewActive}}\n                                    {{^isNewActive}}\n                                        {{&productsLoadingHtml}}\n                                    {{/isNewActive}}\n                                </section>\n                            {{/showNew}}\n\n                            {{#showReviews}}\n                                <section role=\"tabpanel\" aria-hidden=\"{{#isReviewsActive}}false{{/isReviewsActive}}{{^isReviewsActive}}true{{/isReviewsActive}}\" class=\"tab-content {{#isReviewsActive}}is-active{{/isReviewsActive}}\" id=\"tab-productsByCategoryTabs-avgcustomerreview-{{id}}\" data-sort=\"avgcustomerreview\">\n                                    {{#isReviewsActive}}\n                                        {{&productsHtml}}\n                                    {{/isReviewsActive}}\n                                    {{^isReviewsActive}}\n                                        {{&productsLoadingHtml}}\n                                    {{/isReviewsActive}}\n                                </section>\n                            {{/showReviews}}\n\n                        </div>\n                        <div class=\"emthemesModez-productsByCategoryTabs-loader loader\"></div>\n                        <div class=\"emthemesModez-productsByCategoryTabs-actionGroup\">\n                            <a href=\"#\" class=\"button button--small loadMore\">{{txtLoadMore}}</a>\n                            <a href=\"#\" class=\"button button--small collapse\">{{txtCollapse}}</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        " : _ref$sectionTemplate,
      _ref$productsLoadingT = _ref.productsLoadingTemplate,
      productsLoadingTemplate = _ref$productsLoadingT === void 0 ? "\n            <div class=\"emthemesModez-productLoading\">\n                <div class=\"emthemesModez-productLoading-item\"><img class=\"lazyload\" data-sizes=\"auto\" src=\"{{loadingImage}}\" data-src=\"{{productLoadingImage}}\" alt=\"loading\" title=\"loading\" /></div>\n                <div class=\"emthemesModez-productLoading-item\"><img class=\"lazyload\" data-sizes=\"auto\" src=\"{{loadingImage}}\" data-src=\"{{productLoadingImage}}\" alt=\"loading\" title=\"loading\" /></div>\n                <div class=\"emthemesModez-productLoading-item\"><img class=\"lazyload\" data-sizes=\"auto\" src=\"{{loadingImage}}\" data-src=\"{{productLoadingImage}}\" alt=\"loading\" title=\"loading\" /></div>\n                <div class=\"emthemesModez-productLoading-item\"><img class=\"lazyload\" data-sizes=\"auto\" src=\"{{loadingImage}}\" data-src=\"{{productLoadingImage}}\" alt=\"loading\" title=\"loading\" /></div>\n            </div>\n        " : _ref$productsLoadingT,
      _ref$productsTemplate = _ref.productsTemplate,
      productsTemplate = _ref$productsTemplate === void 0 ? "\n            <div class=\"emthemesModez-productsByCategoryTabs-products\" data-end-cursor=\"{{endCursor}}\" {{#hasNextPage}}data-has-next-page=\"true\"{{/hasNextPage}}>\n                <ul class=\"productGrid {{#maxColumns}}productGrid--maxCol{{maxColumns}}{{/maxColumns}}\">\n                    {{#products}}\n                        <li class=\"product\">\n                            {{&productCardHtml}}\n                        </li>\n                    {{/products}}\n                </ul>\n            </div>\n        " : _ref$productsTemplate,
      productCardTemplate = _ref.productCardTemplate;
    this.onLoadMore = this.onLoadMore.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
    this.id = id;
    this.index = index;
    this.sort = sort;
    this.limit = limit;
    this.$parent = $parent;
    this.context = context;
    this.sectionTemplate = sectionTemplate;
    this.productsLoadingTemplate = productsLoadingTemplate;
    this.productsTemplate = productsTemplate;
    this.productCardTemplate = productCardTemplate || _theme_utils__WEBPACK_IMPORTED_MODULE_4__.productCardTemplate;
    this.$scope = $('<div class="emthemesModez-productsByCategoryTabs-loading"></div>');
    this.$loadMore = $();
    this.$collapse = $();
    this.$loader = $();
    this.gql = new CategoryProductsGraphQLQuery(context);
    this.$parent.append(this.$scope);
    this.request();
  }
  var _proto2 = ProductsByCategory.prototype;
  _proto2.request = /*#__PURE__*/function () {
    var _request = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _category$products;
      var sort, category, html, $html, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _t = this.sort;
            _context2.n = _t === 'bestselling' ? 1 : _t === 'featured' ? 2 : _t === 'newest' ? 3 : _t === 'avgcustomerreview' ? 4 : 5;
            break;
          case 1:
            sort = 'BEST_SELLING';
            return _context2.a(3, 6);
          case 2:
            sort = 'FEATURED';
            return _context2.a(3, 6);
          case 3:
            sort = 'NEWEST';
            return _context2.a(3, 6);
          case 4:
            sort = 'BEST_REVIEWED';
            return _context2.a(3, 6);
          case 5:
            sort = 'DEFAULT';
            return _context2.a(3, 6);
          case 6:
            _context2.n = 7;
            return this.gql.load(this.id, '', this.limit, sort, true);
          case 7:
            category = _context2.v;
            this.categoryPath = category == null ? void 0 : category.path;

            // If no product returned by GraphQL, then use AJAX fetch from category page
            if (!(category && !((_category$products = category.products) != null && _category$products.length))) {
              _context2.n = 8;
              break;
            }
            return _context2.a(2, this.requestCategoryPageOnViewport());
          case 8:
            if (category) {
              _context2.n = 9;
              break;
            }
            this.$scope.remove();
            return _context2.a(2);
          case 9:
            html = mustache__WEBPACK_IMPORTED_MODULE_2___default().render(this.sectionTemplate, {
              name: category.name,
              url: category.path,
              id: this.id,
              showBestselling: this.context.pbcst_show_bestselling,
              isBestsellingActive: this.sort === 'bestselling',
              txtBestsellingTab: this.context.txtBestsellingTab,
              showFeatured: this.context.pbcst_show_featured,
              isFeaturedActive: this.sort === 'featured',
              txtFeaturedTab: this.context.txtFeaturedTab,
              showNew: this.context.pbcst_show_new,
              isNewActive: this.sort === 'newest',
              txtNewTab: this.context.txtNewTab,
              showReviews: this.context.pbcst_show_reviews,
              isReviewsActive: this.sort === 'avgcustomerreview',
              txtReviewsTab: this.context.txtReviewsTab,
              showBannerOrSubcategories: this.context.pbcst_show_banner || this.context.pbcst_subcategories > 0 && category.hasChildren,
              showBanner: this.context.pbcst_show_banner,
              txtSubHeading: this.context.txtSubcategoryHeading,
              subcategories: category.children.slice(0, this.context.pbcst_subcategories).map(function (cat) {
                return {
                  name: cat.name,
                  url: cat.path
                };
              }),
              productsHtml: this.generateProductsHtml(category),
              productsLoadingHtml: mustache__WEBPACK_IMPORTED_MODULE_2___default().render(this.productsLoadingTemplate, {
                loadingImage: this.context.loadingImage,
                productLoadingImage: this.context.productLoadingImage
              }, null),
              txtLoadMore: this.context.txtLoadMore,
              txtCollapse: this.context.txtCollapse
            }, null);
            $html = $(html);
            this.$scope.replaceWith($html);
            this.$scope = $html;
            this.$loader = this.$scope.find('.loader');
            this.initTabs();
            this.initSlick();
            this.initBanner();
            this.initButtons();
          case 10:
            return _context2.a(2);
        }
      }, _callee2, this);
    }));
    function request() {
      return _request.apply(this, arguments);
    }
    return request;
  }();
  _proto2.requestCategoryPageOnViewport = function requestCategoryPageOnViewport() {
    var _this2 = this;
    var $sptLoading = $('[data-special-products-tabs] .loading');
    var onCheckViewport = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(function () {
      if ($sptLoading.length > 0 && $sptLoading.is(':visible')) return;
      var offset = 50;
      var elTop = _this2.$scope.offset().top;
      var elBottom = elTop + _this2.$scope.outerHeight();
      var winTop = $(window).scrollTop();
      var winBottom = winTop + $(window).innerHeight();
      if (elTop - offset < winBottom && elBottom + offset > winTop) {
        $(window).off('load resize scroll', onCheckViewport);
        _this2.requestCategoryPage();
      }
    }, 100);
    $(window).on('load resize scroll', onCheckViewport);
    if (this.index === 0) {
      onCheckViewport();
    }
  };
  _proto2.requestCategoryPage = function requestCategoryPage() {
    var _this3 = this;
    var task = function task() {
      var limitQuery = _this3.limit ? "&limit=" + _this3.limit : '';
      var sortQuery = _this3.sort ? "&sort=" + _this3.sort : '';
      var template = 'papa-supermarket/products-by-category-sorting-tabs/section';
      var url = _this3.categoryPath ? _this3.categoryPath + "?" + limitQuery + sortQuery : "/categories.php?category=" + _this3.id + limitQuery + sortQuery;
      isRequestingCategoryPage++;
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.getPage(url, {
        template: template
      }, function (err, resp) {
        isRequestingCategoryPage--;
        if (err || !resp || resp.error) {
          _this3.$scope.remove();
          return;
        }
        var $resp = $(resp);

        // Stop if the response contains multiple root elements (server error)
        if ($resp.length > 1) {
          _this3.$scope.remove();
          return;
        }
        _this3.$scope.replaceWith($resp);
        _this3.$scope = $resp;
        _this3.$loader = _this3.$scope.find('.loader');
        _this3.initTabs();
        _this3.initSlick();
        _this3.initBanner();
        _this3.initButtons();
      });
    };
    if (isRequestingCategoryPage <= 0) {
      task();
    } else {
      var timer = setInterval(function () {
        if (isRequestingCategoryPage <= 0) {
          clearInterval(timer);
          task();
        }
      }, 200);
    }
  };
  _proto2.generateProductsHtml = function generateProductsHtml(category) {
    var _this4 = this;
    return mustache__WEBPACK_IMPORTED_MODULE_2___default().render(this.productsTemplate, {
      maxColumns: function () {
        if (_this4.context.pbcst_products === 5) return 5;
        if (_this4.context.pbcst_products === 6) return 6;
        if (_this4.context.pbcst_products === 10) return 5;
        if (_this4.context.pbcst_products === 12 && _this4.context.pbcst_subcategories === 0) return 6;
        if (_this4.context.pbcst_products === 15) return 5;
        if (_this4.context.pbcst_products === 18) return 6;
      }(),
      products: category.products.map(function (product) {
        return Object.assign({}, product, {
          productCardHtml: mustache__WEBPACK_IMPORTED_MODULE_2___default().render(_this4.productCardTemplate, product)
        });
      }),
      endCursor: category.productsInfo.endCursor,
      hasNextPage: category.productsInfo.hasNextPage
    });
  };
  _proto2.loadProducts = /*#__PURE__*/function () {
    var _loadProducts = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(_ref2) {
      var _category$products2;
      var _ref2$sort, sort, _ref2$afterCursor, afterCursor, $content, sortParam, category, _category$children$, catId, sub, _category$productsInf, endCursor, hasNextPage, html, $html, $productGridContainer, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _ref2$sort = _ref2.sort, sort = _ref2$sort === void 0 ? '' : _ref2$sort, _ref2$afterCursor = _ref2.afterCursor, afterCursor = _ref2$afterCursor === void 0 ? '' : _ref2$afterCursor, $content = _ref2.$content;
            this.$loader.addClass('loading');
            _t2 = sort;
            _context3.n = _t2 === 'bestselling' ? 1 : _t2 === 'featured' ? 2 : _t2 === 'newest' ? 3 : _t2 === 'avgcustomerreview' ? 4 : 5;
            break;
          case 1:
            sortParam = 'BEST_SELLING';
            return _context3.a(3, 6);
          case 2:
            sortParam = 'FEATURED';
            return _context3.a(3, 6);
          case 3:
            sortParam = 'NEWEST';
            return _context3.a(3, 6);
          case 4:
            sortParam = 'BEST_REVIEWED';
            return _context3.a(3, 6);
          case 5:
            sortParam = 'DEFAULT';
            return _context3.a(3, 6);
          case 6:
            _context3.n = 7;
            return this.gql.load(this.id, afterCursor, this.limit, sortParam, true);
          case 7:
            category = _context3.v;
            if (!(category && !((_category$products2 = category.products) != null && _category$products2.length))) {
              _context3.n = 9;
              break;
            }
            catId = (_category$children$ = category.children[0]) == null ? void 0 : _category$children$.entityId;
            if (!catId) {
              _context3.n = 9;
              break;
            }
            _context3.n = 8;
            return this.gql.load(catId, afterCursor, this.limit, sortParam, true);
          case 8:
            sub = _context3.v;
            if (sub) {
              category.products = sub.products;
              category.productsInfo = sub.productsInfo;
            }
          case 9:
            _category$productsInf = category.productsInfo, endCursor = _category$productsInf.endCursor, hasNextPage = _category$productsInf.hasNextPage;
            this.$loader.removeClass('loading');
            if (category) {
              _context3.n = 10;
              break;
            }
            return _context3.a(2);
          case 10:
            html = this.generateProductsHtml(category);
            $html = $(html);
            $productGridContainer = $content.find('[data-end-cursor]');
            if ($productGridContainer.length > 0) {
              $productGridContainer.data({
                endCursor: endCursor,
                hasNextPage: hasNextPage
              });
              $productGridContainer.find('.productGrid').append($html.find('.productGrid').children());
            } else {
              $content.html($html).data('loaded', true);
            }
            this.initSlick();
            if (hasNextPage) {
              this.$loadMore.show();
            } else {
              this.$loadMore.hide();
            }
            if (endCursor) {
              this.$collapse.show();
            } else {
              this.$collapse.hide();
            }
          case 11:
            return _context3.a(2);
        }
      }, _callee3, this);
    }));
    function loadProducts(_x6) {
      return _loadProducts.apply(this, arguments);
    }
    return loadProducts;
  }();
  _proto2.loadProductsFromCategoryPage = function loadProductsFromCategoryPage(_ref3) {
    var _this5 = this;
    var _ref3$sort = _ref3.sort,
      sort = _ref3$sort === void 0 ? '' : _ref3$sort,
      _ref3$page = _ref3.page,
      page = _ref3$page === void 0 ? '' : _ref3$page,
      $content = _ref3.$content;
    var limitQuery = this.limit ? "&limit=" + this.limit : '';
    var sortQuery = sort ? "&sort=" + sort : '';
    var pageQuery = page ? "&page=" + page : '';
    var template = 'papa-supermarket/products-by-category-sorting-tabs/products';
    var url = this.categoryPath ? this.categoryPath + "?" + limitQuery + sortQuery + pageQuery : "/categories.php?category=" + this.id + limitQuery + sortQuery + pageQuery;
    this.$loader.addClass('loading');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      _this5.$loader.removeClass('loading');
      if (err || !resp) {
        return;
      }
      var $resp = $(resp);

      // Stop if the response contains multiple root elements (server error)
      if ($resp.length > 1) {
        return;
      }
      var $currentPage = $content.find('[data-current-page]');
      if ($currentPage.length > 0) {
        $currentPage.data({
          currentPage: $resp.data('currentPage'),
          hasNextPage: Boolean($resp.data('hasNextPage'))
        });
        $currentPage.find('.productGrid').append($resp.find('.productGrid').children());
      } else {
        $content.html(resp).data('loaded', true);
      }
      _this5.initSlick();
      if ($resp.data('hasNextPage')) {
        _this5.$loadMore.show();
      } else {
        _this5.$loadMore.hide();
      }
      if ($resp.data('currentPage') > 1) {
        _this5.$collapse.show();
      } else {
        _this5.$collapse.hide();
      }
    });
  };
  _proto2.initTabs = function initTabs() {
    var _this6 = this;
    (0,_theme_global_foundation__WEBPACK_IMPORTED_MODULE_3__["default"])(this.$scope);
    var $activeTabContent = this.$scope.find('.tab-content.is-active').data('loaded', true);
    $('[data-tab]', this.$scope).on('toggled', function (event, tab) {
      var $content = $($(tab).find('a').attr('href'));
      if ($content.data('loaded')) {
        var $productGridContainer = $content.find('[data-end-cursor], [data-current-page]');
        if ($productGridContainer.data('hasNextPage')) {
          _this6.$loadMore.show();
        } else {
          _this6.$loadMore.hide();
        }
        if ($productGridContainer.data('endCursor') || Number($productGridContainer.data('currentPage')) > 1) {
          _this6.$collapse.show();
        } else {
          _this6.$collapse.hide();
        }
        return;
      }
      _this6.$loadMore.hide();
      _this6.$collapse.hide();
      if ($activeTabContent.find('[data-end-cursor]').length > 0) {
        _this6.loadProducts({
          sort: $content.data('sort'),
          $content: $content
        });
      } else {
        _this6.loadProductsFromCategoryPage({
          sort: $content.data('sort'),
          $content: $content
        });
      }
    });
  };
  _proto2.initSlick = function initSlick() {
    // init products carousel
    $('[data-slick]', this.$scope).on('init', function (e) {
      return setTimeout(function () {
        // init nested carousel
        $('[data-slick-nested]', e.target).each(function (i, el) {
          $(el).slick($(el).data('slickNested'));
        });
      }, 200);
    }).on('breakpoint', function (e) {
      return setTimeout(function () {
        $('[data-slick-nested]', e.target).slick('setPosition');
      }, 200);
    }).slick();
  };
  _proto2.initBanner = function initBanner() {
    var $img = this.$scope.find('[data-banner] img');
    var src = "/product_images/uploaded_images/products-by-category-" + (this.index + 1) + ".jpg?c=2&t=" + this.context.configurationId;
    if ($img.hasClass('lazyload')) {
      $img.attr('data-src', src);
    } else {
      $img.attr('src', src);
    }
  };
  _proto2.initButtons = function initButtons() {
    this.$loadMore = this.$scope.find('.loadMore').hide();
    this.$collapse = this.$scope.find('.collapse').hide();
    if (this.$scope.find('.tab-content.is-active').find('[data-end-cursor], [data-current-page]').data('hasNextPage')) {
      this.$loadMore.show();
    }
    this.$loadMore.on('click', this.onLoadMore);
    this.$collapse.on('click', this.onCollapse);
  };
  _proto2.onLoadMore = function onLoadMore(event) {
    event.preventDefault();
    var $content = this.$scope.find('.tab-content.is-active');
    var $productGridContainer = $content.find('[data-end-cursor], [data-current-page]');
    var $hide = $content.find('.product.hide');
    if ($hide.length > 0) {
      $hide.show().removeClass('hide');
      this.$collapse.show();
      if (!$productGridContainer.data('hasNextPage')) {
        this.$loadMore.hide();
      }
      return;
    }
    if ($productGridContainer.data('hasNextPage')) {
      var sort = $content.data('sort');
      var afterCursor = $productGridContainer.data('endCursor');
      var page = Number($productGridContainer.data('currentPage'));
      if (afterCursor) {
        this.loadProducts({
          sort: sort,
          afterCursor: afterCursor,
          $content: $content
        });
      } else if (page) {
        this.loadProductsFromCategoryPage({
          sort: sort,
          page: page + 1,
          $content: $content
        });
      }
    } else {
      this.$loadMore.hide();
    }
  };
  _proto2.onCollapse = function onCollapse(event) {
    event.preventDefault();
    if (this.limit) {
      var $tab = this.$scope.find('.tab-content.is-active');
      var $hide = $tab.find('.product').slice(this.limit).hide().addClass('hide');
      if ($hide.length > 0) {
        this.$loadMore.show();
      }
      $('html, body').animate({
        scrollTop: $tab.offset().top
      }, 500);
    }
    this.$collapse.hide();
  };
  return ProductsByCategory;
}();
var ProductsByCategories = /*#__PURE__*/function () {
  function ProductsByCategories($scope, context) {
    this.$scope = $scope;
    this.lazy = this.$scope.is('[data-lazy]');
    this.context = context;
    this.loaded = false;
    this.onCheckViewport = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(this.onCheckViewport.bind(this), 100);
    this.bindEvents();
    if (!this.lazy) {
      this.load();
    }
  }
  var _proto3 = ProductsByCategories.prototype;
  _proto3.load = function load() {
    var _this7 = this;
    this.loaded = true;
    var sort = this.$scope.data('sort');
    var limit = this.$scope.data('limit');
    String(this.$scope.data('pbcstGroup')).split(',').map(function (idStr, index) {
      return new ProductsByCategory({
        id: Number(idStr.trim()),
        index: index,
        sort: sort,
        limit: limit,
        $parent: _this7.$scope,
        context: _this7.context
      });
    });
  };
  _proto3.bindEvents = function bindEvents() {
    var _this8 = this;
    $('body').one('beforeload.instantload', function () {
      return _this8.unbindEvents();
    });
    if (this.lazy) {
      $(window).on('load resize scroll', this.onCheckViewport);
    }
  };
  _proto3.unbindEvents = function unbindEvents() {
    $(window).off('load resize scroll', this.onCheckViewport);
  };
  _proto3.onCheckViewport = function onCheckViewport() {
    if (this.loaded) {
      $(window).off('load resize scroll', this.onCheckViewport);
      return;
    }
    if (!this.$scope.is(':visible')) {
      return;
    }
    var offset = 300;
    var elTop = this.$scope.offset().top;
    var elBottom = elTop + this.$scope.outerHeight();
    var winTop = $(window).scrollTop();
    var winBottom = winTop + $(window).innerHeight();
    if (elTop - offset < winBottom && elBottom + offset > winTop) {
      this.load();
    }
  };
  return ProductsByCategories;
}();
function init(selector, context) {
  if (selector === void 0) {
    selector = '[data-pbcst-group]';
  }
  $(selector).each(function (i, el) {
    return new ProductsByCategories($(el), context);
  });
}

/***/ }),

/***/ "./assets/js/emthemes-modez/special-products-tabs.js":
/*!***********************************************************!*\
  !*** ./assets/js/emthemes-modez/special-products-tabs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpecialProductsGraphQLQuery: () => (/* binding */ SpecialProductsGraphQLQuery),
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-utils */ "./assets/js/emthemes-modez/theme-utils.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.min.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var SpecialProductsGraphQLQuery = /*#__PURE__*/function (_SupermarketProductCa) {
  function SpecialProductsGraphQLQuery() {
    return _SupermarketProductCa.apply(this, arguments) || this;
  }
  _inheritsLoose(SpecialProductsGraphQLQuery, _SupermarketProductCa);
  var _proto = SpecialProductsGraphQLQuery.prototype;
  /**
   * Load special products from GraphQL
   * @param {new|top|featured} type Load newest, bestselling or featured products
   * @param {String} afterCursor Load products after cursor
   * @param {Number} limit Number of products to load
   * @param {Boolean} hideOutOfStock Hide out of stock products
   * @returns products
   */
  _proto.load =
  /*#__PURE__*/
  function () {
    var _load = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(type, afterCursor, limit, hideOutOfStock) {
      var _this = this;
      var cacheKey;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (type === void 0) {
              type = 'new';
            }
            if (afterCursor === void 0) {
              afterCursor = '';
            }
            if (limit === void 0) {
              limit = 10;
            }
            if (hideOutOfStock === void 0) {
              hideOutOfStock = true;
            }
            cacheKey = this.currencyCode + "_" + type + "_" + afterCursor + "_" + limit + "_" + hideOutOfStock;
            if (this.cachedProducts[cacheKey]) {
              _context.n = 2;
              break;
            }
            _context.n = 1;
            return new Promise(function (resolve) {
              $.ajax({
                url: '/graphql',
                method: 'POST',
                data: JSON.stringify({
                  query: "\n                            query categoryProducts(\n                                $after: String,\n                                $first: Int,\n                                $hideOutOfStock: Boolean,\n                                $currencyCode: currencyCode!\n                            ) {\n                                site {\n                                    " + (type === 'new' ? "\n                                    newestProducts(after: $after, first: $first, hideOutOfStock: $hideOutOfStock) {\n                                        edges {\n                                            node {\n                                                ...ProductFields\n                                            }\n                                        }\n                                        pageInfo {\n                                            endCursor\n                                            hasNextPage\n                                        }\n                                    }\n                                    " : '') + "\n                                    " + (type === 'top' ? "\n                                    bestSellingProducts(after: $after, first: $first, hideOutOfStock: $hideOutOfStock) {\n                                        edges {\n                                            node {\n                                                ...ProductFields\n                                            }\n                                        }\n                                        pageInfo {\n                                            endCursor\n                                            hasNextPage\n                                        }\n                                    }\n                                    " : '') + "\n                                    " + (type === 'featured' ? "\n                                    featuredProducts(after: $after, first: $first, hideOutOfStock: $hideOutOfStock) {\n                                        edges {\n                                            node {\n                                                ...ProductFields\n                                            }\n                                        }\n                                        pageInfo {\n                                            endCursor\n                                            hasNextPage\n                                        }\n                                    }\n                                    " : '') + "\n                                    settings {\n                                        tax {\n                                            plp\n                                        }\n                                        inventory {\n                                            defaultOutOfStockMessage\n                                        }\n                                        storefront {\n                                            catalog {\n                                                productComparisonsEnabled\n                                            }\n                                        }\n                                    }\n                                    currency(currencyCode: $currencyCode) {\n                                        display {\n                                            symbol\n                                            symbolPlacement\n                                            decimalToken\n                                            thousandsToken\n                                            decimalPlaces\n                                        }\n                                    }\n                                }\n                            }\n                            fragment MoneyFields on Money {\n                                value\n                                currencyCode\n                            }\n                            fragment ImageFields on Image {\n                                url80wide: url(width: 80)\n                                url160wide: url(width: 160)\n                                url320wide: url(width: 320)\n                                url640wide: url(width: 640)\n                            }\n                            fragment ProductFields on Product {\n                                entityId\n                                name\n                                sku\n                                path\n                                addToCartUrl\n                                minPurchaseQuantity\n                                maxPurchaseQuantity\n                                pricesWithTax: prices(includeTax: true, currencyCode: $currencyCode) {\n                                    price {\n                                        ...MoneyFields\n                                    }\n                                    basePrice {\n                                        ...MoneyFields\n                                    }\n                                    salePrice {\n                                        ...MoneyFields\n                                    }\n                                    retailPrice {\n                                        ...MoneyFields\n                                    }\n                                    priceRange {\n                                        min {\n                                            ...MoneyFields\n                                        }\n                                        max {\n                                            ...MoneyFields\n                                        }\n                                    }\n                                }\n                                pricesWithoutTax: prices(includeTax: false, currencyCode: $currencyCode) {\n                                    price {\n                                        ...MoneyFields\n                                    }\n                                    basePrice {\n                                        ...MoneyFields\n                                    }\n                                    salePrice {\n                                        ...MoneyFields\n                                    }\n                                    retailPrice {\n                                        ...MoneyFields\n                                    }\n                                    priceRange {\n                                        min {\n                                            ...MoneyFields\n                                        }\n                                        max {\n                                            ...MoneyFields\n                                        }\n                                    }\n                                }\n                                defaultImage {\n                                    ...ImageFields\n                                }\n                                images {\n                                    edges {\n                                    node {\n                                        ...ImageFields\n                                        isDefault\n                                    }\n                                    }\n                                }\n                                brand {\n                                    name\n                                    path\n                                }\n                                reviewSummary {\n                                    averageRating\n                                }\n                                productOptions(first: 1) {\n                                    edges {\n                                        node {\n                                            entityId\n                                        }\n                                    }\n                                }\n                                availabilityV2 {\n                                    status\n                                }\n                                inventory {\n                                    isInStock\n                                }\n                                customFields {\n                                    edges {\n                                        node {\n                                            name\n                                            value\n                                        }\n                                    }\n                                }\n                            }\n                        ",
                  variables: {
                    after: afterCursor,
                    first: limit,
                    hideOutOfStock: hideOutOfStock,
                    currencyCode: _this.currencyCode
                  }
                }),
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer " + _this.graphQLToken
                },
                xhrFields: {
                  withCredentials: true
                },
                success: function success(resp) {
                  var data = {
                    newestProducts: type === 'new' && resp.data.site.newestProducts ? _this.mapGraphQLProducts(resp.data.site.newestProducts, resp.data.site.settings, resp.data.site.currency) : [],
                    newestProductsInfo: type === 'new' && resp.data.site.newestProducts ? {
                      endCursor: resp.data.site.newestProducts.pageInfo.endCursor,
                      hasNextPage: resp.data.site.newestProducts.pageInfo.hasNextPage
                    } : {
                      endCursor: '',
                      hasNextPage: false
                    },
                    bestsellingProducts: type === 'top' && resp.data.site.bestSellingProducts ? _this.mapGraphQLProducts(resp.data.site.bestSellingProducts, resp.data.site.settings, resp.data.site.currency) : [],
                    bestsellingProductsInfo: type === 'top' && resp.data.site.bestSellingProducts ? {
                      endCursor: resp.data.site.bestSellingProducts.pageInfo.endCursor,
                      hasNextPage: resp.data.site.bestSellingProducts.pageInfo.hasNextPage
                    } : {
                      endCursor: '',
                      hasNextPage: false
                    },
                    featuredProducts: type === 'featured' && resp.data.site.featuredProducts ? _this.mapGraphQLProducts(resp.data.site.featuredProducts, resp.data.site.settings, resp.data.site.currency) : [],
                    featuredProductsInfo: type === 'featured' && resp.data.site.featuredProducts ? {
                      endCursor: resp.data.site.featuredProducts.pageInfo.endCursor,
                      hasNextPage: resp.data.site.featuredProducts.pageInfo.hasNextPage
                    } : {
                      endCursor: '',
                      hasNextPage: false
                    }
                  };
                  resolve(data);
                },
                error: function error() {
                  resolve('');
                }
              });
            });
          case 1:
            this.cachedProducts[cacheKey] = _context.v;
          case 2:
            return _context.a(2, this.cachedProducts[cacheKey]);
        }
      }, _callee, this);
    }));
    function load(_x, _x2, _x3, _x4) {
      return _load.apply(this, arguments);
    }
    return load;
  }();
  return SpecialProductsGraphQLQuery;
}(_theme_utils__WEBPACK_IMPORTED_MODULE_1__.SupermarketProductCardsGraphQLQuery);
var SpecialProductsTabs = /*#__PURE__*/function () {
  function SpecialProductsTabs($scope, context) {
    this.$scope = $scope;
    this.context = context;
    this.$viewportCheck = $scope.find('[data-viewport-check]');
    this.$loading = $scope.find('.loading').hide();
    this.$loadMore = $scope.find('.loadMore').hide();
    this.$collapse = $scope.find('.collapse').hide();
    this.defaultProductsCount = this.context.themeSettings.specialProductsTab_lazy_count + this.context.themeSettings.specialProductsTab_init_count;
    this.template = "\n            <div class=\"emthemesModez-specialProductsTabs-products\">\n                {{#featuredProducts.length}}\n                    <ul class=\"productGrid productGrid--maxCol4\" data-product-type=\"featured\" data-list-name=\"Featured Products\">\n                        {{#featuredProducts}}\n                            <li class=\"product\" data-product-id=\"{{id}}\">\n                                {{&productCardHtml}}\n                            </li>\n                        {{/featuredProducts}}\n                    </ul>\n                {{/featuredProducts.length}}\n\n                {{#bestsellingProducts.length}}\n                    <ul class=\"productGrid productGrid--maxCol4\" data-product-type=\"bestselling\" data-list-name=\"Most Popular Products\">\n                        {{#bestsellingProducts}}\n                            <li class=\"product\" data-product-id=\"{{id}}\">\n                                {{&productCardHtml}}\n                            </li>\n                        {{/bestsellingProducts}}\n                    </ul>\n                {{/bestsellingProducts.length}}\n\n                {{#newestProducts.length}}\n                    <ul class=\"productGrid productGrid--maxCol4\" data-product-type=\"newest\" data-list-name=\"Most Popular Products\">\n                        {{#newestProducts}}\n                            <li class=\"product\" data-product-id=\"{{id}}\">\n                                {{&productCardHtml}}\n                            </li>\n                        {{/newestProducts}}\n                    </ul>\n                {{/newestProducts.length}}\n            </div>\n        ";
    this.onCheckViewport = lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(this.onCheckViewport.bind(this), 100);
    this.onLoadMore = this.onLoadMore.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
    this.onTabToggled = this.onTabToggled.bind(this);
    if (this.context.themeSettings.specialProductsTab_more) {
      this.$loadMore.show();
    }
    this.bindEvents();
    this.gql = new SpecialProductsGraphQLQuery(context);
  }
  var _proto2 = SpecialProductsTabs.prototype;
  _proto2.bindEvents = function bindEvents() {
    var _this2 = this;
    $('body').one('beforeload.instantload', function () {
      return _this2.unbindEvents();
    });
    if (this.$viewportCheck.length > 0) {
      $(window).on('load resize scroll', this.onCheckViewport);
    }
    if (this.context.themeSettings.specialProductsTab_more) {
      this.$loadMore.on('click', this.onLoadMore);
    }
    this.$collapse.on('click', this.onCollapse);
    $('[data-tab]', this.$scope).on('toggled', this.onTabToggled);
  };
  _proto2.unbindEvents = function unbindEvents() {
    $(window).off('load resize scroll', this.onCheckViewport);
    this.$loadMore.off('click', this.onLoadMore);
    this.$collapse.off('click', this.onCollapse);
    $('[data-tab]', this.$scope).off('toggled', this.onTabToggled);
  };
  _proto2.onCheckViewport = function onCheckViewport() {
    var _this3 = this;
    var offset = 250;
    this.$viewportCheck.each(function (i, el) {
      var $el = $(el);
      if (!$el.is(':visible')) {
        return;
      }
      var elTop = $el.offset().top;
      var elBottom = elTop + $el.outerHeight();
      var winTop = $(window).scrollTop();
      var winBottom = winTop + $(window).innerHeight();
      if (elTop - offset < winBottom && elBottom + offset > winTop) {
        _this3.loadViewportProducts($el.data('viewportCheck'), $el.closest('.tab-content').find('.productGrid, .productList, .productCarousel'));
        _this3.$viewportCheck = _this3.$viewportCheck.not($el);
        $el.remove();
      }
    });
  };
  _proto2.onLoadMore = function onLoadMore(event) {
    var _this4 = this;
    event.preventDefault();
    var $tab = this.$scope.find('.tab-content.is-active');
    if (!$tab.data('loadedMore')) {
      $tab.data('loadedMore', true);
      var limit = 50;
      var type = $tab.data('productType');
      this.$loading.show();
      this.$loadMore.attr('disabled', true);
      this.gql.load(type, '', limit, true).then(function (data) {
        _this4.$loading.hide();
        _this4.$loadMore.removeAttr('disabled');
        if (!data) {
          return;
        }
        var html = mustache__WEBPACK_IMPORTED_MODULE_2___default().render(_this4.template, {
          featuredProducts: data.featuredProducts.map(function (product) {
            return Object.assign({}, product, {
              productCardHtml: mustache__WEBPACK_IMPORTED_MODULE_2___default().render(_theme_utils__WEBPACK_IMPORTED_MODULE_1__.productCardTemplate, product)
            });
          }),
          bestsellingProducts: data.bestsellingProducts.map(function (product) {
            return Object.assign({}, product, {
              productCardHtml: mustache__WEBPACK_IMPORTED_MODULE_2___default().render(_theme_utils__WEBPACK_IMPORTED_MODULE_1__.productCardTemplate, product)
            });
          }),
          newestProducts: data.newestProducts.map(function (product) {
            return Object.assign({}, product, {
              productCardHtml: mustache__WEBPACK_IMPORTED_MODULE_2___default().render(_theme_utils__WEBPACK_IMPORTED_MODULE_1__.productCardTemplate, product)
            });
          })
        });
        var existProductIds = $tab.find('.product, .productCarousel-slide').map(function (i, el) {
          return $(el).data('productId');
        }).get();
        var $products = $(html).find('.product, .productCarousel-slide').filter(function (i, el) {
          return existProductIds.indexOf($(el).data('productId')) === -1;
        });
        $products.slice(_this4.defaultProductsCount).hide();
        $tab.find('.productGrid, .productList, .productCarousel').append($products);
        if (!$products.is(':hidden')) {
          _this4.$loadMore.hide();
        }
        if ($products.length > 0) {
          _this4.$collapse.show();
        }
      });
    } else {
      var $products = $tab.find('.product, .productCarousel-slide').filter(':hidden');
      $products.slice(0, this.defaultProductsCount).show();
      if (!$products.is(':hidden')) {
        this.$loadMore.hide();
      }
      this.$collapse.show();
    }
  };
  _proto2.onCollapse = function onCollapse(event) {
    event.preventDefault();
    var $tab = this.$scope.find('.tab-content.is-active');
    var $products = $tab.find('.product, .productCarousel-slide');
    $products.slice(this.defaultProductsCount).hide();
    this.$collapse.hide();
    if ($products.length > this.defaultProductsCount) {
      this.$loadMore.show();
    }
    $('html, body').animate({
      scrollTop: $tab.offset().top
    });
  };
  _proto2.onTabToggled = function onTabToggled(event, tab) {
    var $tabContent = $($('a', tab).attr('href'));
    $('[data-slick]', $tabContent).slick('setPosition');
    if (this.$viewportCheck.length > 0) {
      this.onCheckViewport();
    }
    var $products = $tabContent.find('.product, .productCarousel-slide');
    var visible = $products.filter(':visible').length;
    if (this.context.themeSettings.specialProductsTab_more) {
      if (!$tabContent.data('loadedMore') || $products.is(':hidden')) {
        this.$loadMore.show();
      } else {
        this.$loadMore.hide();
      }
      if (visible > this.defaultProductsCount) {
        this.$collapse.show();
      } else {
        this.$collapse.hide();
      }
    }
  };
  _proto2.loadViewportProducts = /*#__PURE__*/function () {
    var _loadViewportProducts = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(type, $container) {
      var limit, data, html, $products;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            this.$loading.show();
            limit = this.defaultProductsCount;
            _context2.n = 1;
            return this.gql.load(type, '', limit, true);
          case 1:
            data = _context2.v;
            this.$loading.hide();
            if (data) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2);
          case 2:
            html = mustache__WEBPACK_IMPORTED_MODULE_2___default().render(this.template, {
              featuredProducts: data.featuredProducts.map(function (product) {
                return Object.assign({}, product, {
                  productCardHtml: mustache__WEBPACK_IMPORTED_MODULE_2___default().render(_theme_utils__WEBPACK_IMPORTED_MODULE_1__.productCardTemplate, product)
                });
              }),
              bestsellingProducts: data.bestsellingProducts.map(function (product) {
                return Object.assign({}, product, {
                  productCardHtml: mustache__WEBPACK_IMPORTED_MODULE_2___default().render(_theme_utils__WEBPACK_IMPORTED_MODULE_1__.productCardTemplate, product)
                });
              }),
              newestProducts: data.newestProducts.map(function (product) {
                return Object.assign({}, product, {
                  productCardHtml: mustache__WEBPACK_IMPORTED_MODULE_2___default().render(_theme_utils__WEBPACK_IMPORTED_MODULE_1__.productCardTemplate, product)
                });
              })
            });
            $products = $(html).find('.product, .productCarousel-slide');
            $container.empty().append($products);
          case 3:
            return _context2.a(2);
        }
      }, _callee2, this);
    }));
    function loadViewportProducts(_x5, _x6) {
      return _loadViewportProducts.apply(this, arguments);
    }
    return loadViewportProducts;
  }();
  return SpecialProductsTabs;
}();
function init(_ref) {
  var _ref$selector = _ref.selector,
    selector = _ref$selector === void 0 ? '[data-special-products-tabs]' : _ref$selector,
    context = _ref.context;
  $(selector).each(function (i, el) {
    var $el = $(el);
    if (!$el.data('specialProductsTabsInstance')) {
      $el.data('specialProductsTabsInstance', new SpecialProductsTabs($el, context));
    }
  });
}

/***/ }),

/***/ "./assets/js/emthemes-modez/youtube-carousel.js":
/*!******************************************************!*\
  !*** ./assets/js/emthemes-modez/youtube-carousel.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ youtubeCarouselFactory)
/* harmony export */ });
/* harmony import */ var _theme_common_media_query_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/common/media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var uid = 1;
var YoutubeSlick = /*#__PURE__*/function () {
  function YoutubeSlick(slick) {
    this.$slick = $(slick);
    this.$videos = this.$slick.find('[data-youtube]');
    this.onSlickInit = this.onSlickInit.bind(this);
    this.onSlickBeforeChange = this.onSlickBeforeChange.bind(this);
    this.onSlickAfterChange = this.onSlickAfterChange.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    this.bindEvents();
  }
  var _proto = YoutubeSlick.prototype;
  _proto.bindEvents = function bindEvents() {
    if (this.$slick.hasClass('slick-initialized')) {
      this.onSlickInit();
    }
    this.$slick.on('init', this.onSlickInit);
    this.$slick.on('beforeChange', this.onSlickBeforeChange);
    this.$slick.on('afterChange', this.onSlickAfterChange);
  };
  _proto.onPlayerReady = function onPlayerReady(event) {
    var _this = this;
    // store player object for use later
    $(event.target.getIframe()).closest('.slick-slide').data('youtube-player', event.target);
    this.$slick.addClass('slick-video-playing');
    setTimeout(function () {
      if ($(event.target.getIframe()).closest('.slick-slide').hasClass('slick-active')) {
        if (_this.$slick.is('[data-youtube-mute]')) {
          event.target.mute();
        }
        if (_this.$slick.is('[data-youtube-autoplay]')) {
          _this.$slick.slick('slickPause');
          event.target.playVideo();
        }
      }
    }, 200);
  };
  _proto.onPlayerStateChange = function onPlayerStateChange(event) {
    // Stop slick autoplay when video start playing
    if (event.data === YT.PlayerState.PLAYING) {
      // eslint-disable-line
      this.$slick.addClass('slick-video-playing');
      this.$slick.slick('slickPause');
    }
    if (event.data === YT.PlayerState.PAUSED) {
      // eslint-disable-line
      this.$slick.removeClass('slick-video-playing');
    }

    // go to next slide and enable autoplay back when video ended
    if (event.data === YT.PlayerState.ENDED) {
      // eslint-disable-line
      this.$slick.removeClass('slick-video-playing');
      this.$slick.slick('slickPlay');
      this.$slick.slick('slickNext');
    }
  };
  _proto.onSlickInit = function onSlickInit() {
    var _this2 = this;
    this.$videos.each(function (j, vid) {
      var $vid = $(vid);
      var id = "youtube_player_" + uid++;
      $vid.attr('id', id);

      // init player
      var player = new YT.Player(id, {
        // eslint-disable-line
        // host: 'http://www.youtube.com',
        videoId: $vid.data('youtube'),
        wmode: 'transparent',
        playerVars: {
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          wmode: 'transparent',
          // autoplay: 1,
          playsinline: 1
        },
        events: {
          onReady: _this2.onPlayerReady,
          onStateChange: _this2.onPlayerStateChange
        }
      });
    });
  };
  _proto.onSlickBeforeChange = function onSlickBeforeChange() {
    var player = this.$slick.find('.slick-slide.slick-active').data('youtube-player');
    if (player) {
      player.stopVideo();
    }
  };
  _proto.onSlickAfterChange = function onSlickAfterChange() {
    // Enable auto slide
    this.$slick.slick('slickPlay');

    // On desktop:
    // - Auto play video when open next slide
    // - Stop auto slide
    var player = this.$slick.find('.slick-slide.slick-active').data('youtube-player');
    if (player) {
      if (this.$slick.is('[data-youtube-mute]')) {
        player.mute();
      }
      if (this.$slick.is('[data-youtube-autoplay]')) {
        this.$slick.slick('slickPause');
        player.playVideo();
      }
    }
  };
  return YoutubeSlick;
}();
function initCarousel($carousel) {
  $carousel.each(function (i, slick) {
    var $slick = $(slick);
    if ($slick.find('[data-youtube]').length > 0) {
      $slick.addClass('slick-slider--video');
      new YoutubeSlick(slick); // eslint-disable-line
    }
  });
}
function youtubeCarouselFactory($carousel) {
  if ($carousel.find('[data-youtube]').length > 0) {
    if (typeof window.onYouTubeIframeAPIReady === 'undefined') {
      window.onYouTubeIframeAPIReady = initCarousel.bind(window, $carousel);

      // Load the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.nonce = window.__webpack_nonce__;
      tag.src = 'https://www.youtube.com/player_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // $('body').append('<script src="https://www.youtube.com/iframe_api"></script>');
    } else {
      initCarousel($carousel);
    }
  }
}

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _emthemes_modez_products_by_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emthemes-modez/products-by-category */ "./assets/js/emthemes-modez/products-by-category.js");
/* harmony import */ var _emthemes_modez_special_products_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emthemes-modez/special-products-tabs */ "./assets/js/emthemes-modez/special-products-tabs.js");
/* harmony import */ var _emthemes_modez_youtube_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emthemes-modez/youtube-carousel */ "./assets/js/emthemes-modez/youtube-carousel.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * This file is added by Supermarket theme.
 */





var Home = /*#__PURE__*/function (_PageManager) {
  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Home, _PageManager);
  var _proto = Home.prototype;
  _proto.onReady = function onReady() {
    this.initProductsByCategorySection();
    this.initSpecialProductsTabsSection();
    this.initMainCarouselSection();
    this.initBrandsCarouselSection();
  };
  _proto.initProductsByCategorySection = function initProductsByCategorySection() {
    if (this.context.hasProductsByCategorySortingTabs) {
      (0,_emthemes_modez_products_by_category__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-pbcst-group]', this.context);
    }
  };
  _proto.initSpecialProductsTabsSection = function initSpecialProductsTabsSection() {
    // Refresh products carousel when tab is open
    if (this.context.hasSpecialProductsTabs) {
      (0,_emthemes_modez_special_products_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])({
        context: this.context
      });
    }
  };
  _proto.initMainCarouselSection = function initMainCarouselSection() {
    if (this.context.hasMainCarousel) {
      (0,_emthemes_modez_youtube_carousel__WEBPACK_IMPORTED_MODULE_3__["default"])($('[data-slick]'));

      //
      // Update main slideshow min-height to equal the vertical categories menu
      //
      var $categoriesMenu = $('body.papaSupermarket-layout--default .emthemesModez-verticalCategories--open');
      var updateMainSlideshowHeight = function updateMainSlideshowHeight() {
        $('.heroCarousel-slide').css('min-height', $(window).width() > 768 ? $categoriesMenu.height() + 20 + "px" : '');
      };
      if ($categoriesMenu.length > 0) {
        updateMainSlideshowHeight();
        $(window).on('resize', function () {
          return updateMainSlideshowHeight();
        });
      }
    }
  };
  _proto.initBrandsCarouselSection = function initBrandsCarouselSection() {
    $('[data-emthemesmodez-brand-carousel]').slick({
      dots: false,
      infinite: false,
      mobileFirst: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [{
        breakpoint: 1260,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 5
        }
      }, {
        breakpoint: 800,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 5
        }
      }, {
        breakpoint: 550,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 3
        }
      }]
    });
  };
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ob21lX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxTQUFBQSxhQUFBLElBQ0EsdUtBQUFDLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEs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QUFDQTtBQUNBLG9EQUFvRCxtQkFBbUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1zdXBlcm1hcmtldC8uL2Fzc2V0cy9qcy9lbXRoZW1lcy1tb2Rlei9wcm9kdWN0cy1ieS1jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLXN1cGVybWFya2V0Ly4vYXNzZXRzL2pzL2VtdGhlbWVzLW1vZGV6L3NwZWNpYWwtcHJvZHVjdHMtdGFicy5qcyIsIndlYnBhY2s6Ly9wYXBhdGhlbWVzLXN1cGVybWFya2V0Ly4vYXNzZXRzL2pzL2VtdGhlbWVzLW1vZGV6L3lvdXR1YmUtY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1zdXBlcm1hcmtldC8uL2Fzc2V0cy9qcy90aGVtZS9ob21lLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMtc3VwZXJtYXJrZXQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuXG5pbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcbmltcG9ydCBmb3VuZGF0aW9uIGZyb20gJy4uL3RoZW1lL2dsb2JhbC9mb3VuZGF0aW9uJztcbmltcG9ydCB7IFN1cGVybWFya2V0UHJvZHVjdENhcmRzR3JhcGhRTFF1ZXJ5LCBwcm9kdWN0Q2FyZFRlbXBsYXRlIGFzIGRlZmF1bHRQcm9kdWN0Q2FyZFRlbXBsYXRlIH0gZnJvbSAnLi90aGVtZS11dGlscyc7XG5cbmxldCBpc1JlcXVlc3RpbmdDYXRlZ29yeVBhZ2UgPSAwO1xuZXhwb3J0IGNsYXNzIENhdGVnb3J5UHJvZHVjdHNHcmFwaFFMUXVlcnkgZXh0ZW5kcyBTdXBlcm1hcmtldFByb2R1Y3RDYXJkc0dyYXBoUUxRdWVyeSB7XG4gICAgLyoqXG4gICAgICogTG9hZCBwcm9kdWN0cyBieSBjYXRlZ29yeSBJRCB1c2luZyBHcmFwaFFMXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNhdGVnb3J5SWQgQ2F0ZWdvcnkgSURcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYWZ0ZXJDdXJzb3IgUHJvZHVjdCBJRCBhZnRlciB3aGljaCB0byBsb2FkIG1vcmUgcHJvZHVjdHNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGltaXQgTnVtYmVyIG9mIHByb2R1Y3RzIHRvIGxvYWRcbiAgICAgKiBAcGFyYW0ge0FfVE9fWnxCRVNUX1JFVklFV0VEfEJFU1RfU0VMTElOR3xERUZBVUxUfEZFQVRVUkVEfEhJR0hFU1RfUFJJQ0V8TE9XRVNUX1BSSUNFfE5FV0VTVHxaX1RPX0F9IHNvcnQgU29ydCBvcmRlclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaGlkZU91dE9mU3RvY2sgSGlkZSBvdXQgb2Ygc3RvY2sgcHJvZHVjdHNcbiAgICAgKiBAcmV0dXJucyBjYXRlZ29yeVxuICAgICAqL1xuICAgIGFzeW5jIGxvYWQoY2F0ZWdvcnlJZCwgYWZ0ZXJDdXJzb3IgPSAnJywgbGltaXQgPSAxMCwgc29ydCA9ICdERUZBVUxUJywgaGlkZU91dE9mU3RvY2sgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gYCR7dGhpcy5jdXJyZW5jeUNvZGV9XyR7Y2F0ZWdvcnlJZH1fJHthZnRlckN1cnNvcn1fJHtsaW1pdH1fJHtzb3J0fV8ke2hpZGVPdXRPZlN0b2NrfWA7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlZFByb2R1Y3RzW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZWRQcm9kdWN0c1tjYWNoZUtleV0gPSBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5IGNhdGVnb3J5UHJvZHVjdHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbnRpdHlJZDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFmdGVyOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmaXJzdDogSW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGlkZU91dE9mU3RvY2s6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzb3J0Qnk6IENhdGVnb3J5UHJvZHVjdFNvcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJlbmN5Q29kZTogY3VycmVuY3lDb2RlIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5KGVudGl0eUlkOiAkZW50aXR5SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzKGFmdGVyOiAkYWZ0ZXIsIGZpcnN0OiAkZmlyc3QsIGhpZGVPdXRPZlN0b2NrOiAkaGlkZU91dE9mU3RvY2ssIHNvcnRCeTogJHNvcnRCeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0VXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHVyY2hhc2VRdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFB1cmNoYXNlUXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXNXaXRoVGF4OiBwcmljZXMoaW5jbHVkZVRheDogdHJ1ZSwgY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZVJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXNXaXRob3V0VGF4OiBwcmljZXMoaW5jbHVkZVRheDogZmFsc2UsIGN1cnJlbmN5Q29kZTogJGN1cnJlbmN5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uSW1hZ2VGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLkltYWdlRmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlld1N1bW1hcnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmVyYWdlUmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zKGZpcnN0OiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5VjIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJblN0b2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEN1cnNvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTmV4dFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5VHJlZShyb290RW50aXR5SWQ6ICRlbnRpdHlJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRPdXRPZlN0b2NrTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZWZyb250IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0YWxvZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29tcGFyaXNvbnNFbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeShjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBJbWFnZUZpZWxkcyBvbiBJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDgwd2lkZTogdXJsKHdpZHRoOiA4MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsMTYwd2lkZTogdXJsKHdpZHRoOiAxNjApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDMyMHdpZGU6IHVybCh3aWR0aDogMzIwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw2NDB3aWRlOiB1cmwod2lkdGg6IDY0MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXI6IGFmdGVyQ3Vyc29yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0OiBsaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3V0T2ZTdG9jayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0Qnk6IHNvcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlOiB0aGlzLmN1cnJlbmN5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuZ3JhcGhRTFRva2VufWAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHhockZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVzcC5kYXRhLnNpdGUuY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IHJlc3AuZGF0YS5zaXRlLmNhdGVnb3J5VHJlZVswXT8uY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW46IHJlc3AuZGF0YS5zaXRlLmNhdGVnb3J5VHJlZVswXT8uaGFzQ2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMubWFwR3JhcGhRTFByb2R1Y3RzKHJlc3AuZGF0YS5zaXRlLmNhdGVnb3J5LnByb2R1Y3RzLCByZXNwLmRhdGEuc2l0ZS5zZXR0aW5ncywgcmVzcC5kYXRhLnNpdGUuY3VycmVuY3kpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRDdXJzb3I6IHJlc3AuZGF0YS5zaXRlLmNhdGVnb3J5LnByb2R1Y3RzLnBhZ2VJbmZvLmVuZEN1cnNvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTmV4dFBhZ2U6IHJlc3AuZGF0YS5zaXRlLmNhdGVnb3J5LnByb2R1Y3RzLnBhZ2VJbmZvLmhhc05leHRQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUHJvZHVjdHNbY2FjaGVLZXldO1xuICAgIH1cbn1cblxuY2xhc3MgUHJvZHVjdHNCeUNhdGVnb3J5IHtcbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIGlkLFxuICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgIHNvcnQgPSAnJyxcbiAgICAgICAgbGltaXQgPSAnJyxcbiAgICAgICAgJHBhcmVudCxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgc2VjdGlvblRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtdGhlbWVzTW9kZXotc2VjdGlvbiBlbXRoZW1lc01vZGV6LXNlY3Rpb24tLXByb2R1Y3RzQnlDYXRlZ29yeVNvcnRpbmdUYWJzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtdGhlbWVzTW9kZXotc2VjdGlvbi1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW10aGVtZXNNb2Rlei1wcm9kdWN0c0J5Q2F0ZWdvcnlUYWJzIGVtdGhlbWVzTW9kZXotcHJvZHVjdHNCeUNhdGVnb3J5VGFicy0tc29ydGluZyBlbXRoZW1lc01vZGV6LXByb2R1Y3RzQnlDYXRlZ29yeVRhYnMtLXN1cGVybWFya2V0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidGFic1wiIGRhdGEtdGFiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGktaGVhZGluZ1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48aDIgY2xhc3M9XCJwYWdlLWhlYWRpbmdcIiByb2xlPVwidGFiXCI+PGEgaHJlZj1cInt7dXJsfX1cIj57e25hbWV9fTwvYT48L2gyPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNzaG93QmVzdHNlbGxpbmd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0YWJ7eyNpc0Jlc3RzZWxsaW5nQWN0aXZlfX0gaXMtYWN0aXZle3svaXNCZXN0c2VsbGluZ0FjdGl2ZX19XCIgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGNsYXNzPVwidGFiLXRpdGxlXCIgaHJlZj1cIiN0YWItcHJvZHVjdHNCeUNhdGVnb3J5VGFicy1iZXN0c2VsbGluZy17e2lkfX1cIiByb2xlPVwidGFiXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1zZWxlY3RlZD1cInt7I2lzQmVzdHNlbGxpbmdBY3RpdmV9fXRydWV7ey9pc0Jlc3RzZWxsaW5nQWN0aXZlfX17e15pc0Jlc3RzZWxsaW5nQWN0aXZlfX1mYWxzZXt7L2lzQmVzdHNlbGxpbmdBY3RpdmV9fVwiIGFyaWEtY29udHJvbHM9XCJ0YWItcHJvZHVjdHNCeUNhdGVnb3J5VGFicy1iZXN0c2VsbGluZy17e2lkfX1cIj57e3R4dEJlc3RzZWxsaW5nVGFifX08L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9zaG93QmVzdHNlbGxpbmd9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjc2hvd0ZlYXR1cmVkfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGFie3sjaXNGZWF0dXJlZEFjdGl2ZX19IGlzLWFjdGl2ZXt7L2lzRmVhdHVyZWRBY3RpdmV9fVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBjbGFzcz1cInRhYi10aXRsZVwiIGhyZWY9XCIjdGFiLXByb2R1Y3RzQnlDYXRlZ29yeVRhYnMtZmVhdHVyZWQte3tpZH19XCIgcm9sZT1cInRhYlwiIHRhYmluZGV4PVwiMFwiIGFyaWEtc2VsZWN0ZWQ9XCJ7eyNpc0ZlYXR1cmVkQWN0aXZlfX10cnVle3svaXNGZWF0dXJlZEFjdGl2ZX19e3teaXNGZWF0dXJlZEFjdGl2ZX19ZmFsc2V7ey9pc0ZlYXR1cmVkQWN0aXZlfX1cIiBhcmlhLWNvbnRyb2xzPVwidGFiLXByb2R1Y3RzQnlDYXRlZ29yeVRhYnMtZmVhdHVyZWQte3tpZH19XCI+e3t0eHRGZWF0dXJlZFRhYn19PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3svc2hvd0ZlYXR1cmVkfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I3Nob3dOZXd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0YWJ7eyNpc05ld0FjdGl2ZX19IGlzLWFjdGl2ZXt7L2lzTmV3QWN0aXZlfX1cIiByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgY2xhc3M9XCJ0YWItdGl0bGVcIiBocmVmPVwiI3RhYi1wcm9kdWN0c0J5Q2F0ZWdvcnlUYWJzLW5ld2VzdC17e2lkfX1cIiByb2xlPVwidGFiXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1zZWxlY3RlZD1cInt7I2lzTmV3QWN0aXZlfX10cnVle3svaXNOZXdBY3RpdmV9fXt7XmlzTmV3QWN0aXZlfX1mYWxzZXt7L2lzTmV3QWN0aXZlfX1cIiBhcmlhLWNvbnRyb2xzPVwidGFiLXByb2R1Y3RzQnlDYXRlZ29yeVRhYnMtbmV3ZXN0LXt7aWR9fVwiPnt7dHh0TmV3VGFifX08L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9zaG93TmV3fX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I3Nob3dSZXZpZXdzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGFie3sjaXNSZXZpZXdzQWN0aXZlfX0gaXMtYWN0aXZle3svaXNSZXZpZXdzQWN0aXZlfX1cIiByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgY2xhc3M9XCJ0YWItdGl0bGVcIiBocmVmPVwiI3RhYi1wcm9kdWN0c0J5Q2F0ZWdvcnlUYWJzLWF2Z2N1c3RvbWVycmV2aWV3LXt7aWR9fVwiIHJvbGU9XCJ0YWJcIiB0YWJpbmRleD1cIjBcIiBhcmlhLXNlbGVjdGVkPVwie3sjaXNSZXZpZXdzQWN0aXZlfX10cnVle3svaXNSZXZpZXdzQWN0aXZlfX17e15pc1Jldmlld3NBY3RpdmV9fWZhbHNle3svaXNSZXZpZXdzQWN0aXZlfX1cIiBhcmlhLWNvbnRyb2xzPVwidGFiLXByb2R1Y3RzQnlDYXRlZ29yeVRhYnMtYXZnY3VzdG9tZXJyZXZpZXcte3tpZH19XCI+e3t0eHRSZXZpZXdzVGFifX08L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9zaG93UmV2aWV3c319XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sjc2hvd0Jhbm5lck9yU3ViY2F0ZWdvcmllc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtdGhlbWVzTW9kZXotcHJvZHVjdHNCeUNhdGVnb3J5VGFicy1kZXRhaWxze3sjc2hvd0Jhbm5lcn19IGVtdGhlbWVzTW9kZXotcHJvZHVjdHNCeUNhdGVnb3J5VGFicy1kZXRhaWxzLS1oYXNJbWFnZXt7L3Nob3dCYW5uZXJ9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNzaG93QmFubmVyfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbXRoZW1lc01vZGV6LXByb2R1Y3RzQnlDYXRlZ29yeVRhYnMtZGV0YWlscy1pbWFnZVwiIGRhdGEtYmFubmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7e3VybH19XCI+PGltZyBhbHQ9XCJ7e25hbWV9fVwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L3Nob3dCYW5uZXJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNzdWJjYXRlZ29yaWVzLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtdGhlbWVzTW9kZXotcHJvZHVjdHNCeUNhdGVnb3J5VGFicy1kZXRhaWxzLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJlbXRoZW1lc01vZGV6LXByb2R1Y3RzQnlDYXRlZ29yeVRhYnMtZGV0YWlscy1zdWItaGVhZGluZ1wiPnt7dHh0U3ViSGVhZGluZ319PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZW10aGVtZXNNb2Rlei1wcm9kdWN0c0J5Q2F0ZWdvcnlUYWJzLWRldGFpbHMtc3ViLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjc3ViY2F0ZWdvcmllc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJlbXRoZW1lc01vZGV6LXByb2R1Y3RzQnlDYXRlZ29yeVRhYnMtZGV0YWlscy1zdWItaXRlbVwiPjxhIGhyZWY9XCJ7e3VybH19XCI+e3tuYW1lfX08L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svc3ViY2F0ZWdvcmllc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L3N1YmNhdGVnb3JpZXMubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L3Nob3dCYW5uZXJPclN1YmNhdGVnb3JpZXN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYnMtY29udGVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNzaG93QmVzdHNlbGxpbmd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWhpZGRlbj1cInt7I2lzQmVzdHNlbGxpbmdBY3RpdmV9fWZhbHNle3svaXNCZXN0c2VsbGluZ0FjdGl2ZX19e3teaXNCZXN0c2VsbGluZ0FjdGl2ZX19dHJ1ZXt7L2lzQmVzdHNlbGxpbmdBY3RpdmV9fVwiIGNsYXNzPVwidGFiLWNvbnRlbnQge3sjaXNCZXN0c2VsbGluZ0FjdGl2ZX19aXMtYWN0aXZle3svaXNCZXN0c2VsbGluZ0FjdGl2ZX19XCIgaWQ9XCJ0YWItcHJvZHVjdHNCeUNhdGVnb3J5VGFicy1iZXN0c2VsbGluZy17e2lkfX1cIiBkYXRhLXNvcnQ9XCJiZXN0c2VsbGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaXNCZXN0c2VsbGluZ0FjdGl2ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smcHJvZHVjdHNIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lzQmVzdHNlbGxpbmdBY3RpdmV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3teaXNCZXN0c2VsbGluZ0FjdGl2ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smcHJvZHVjdHNMb2FkaW5nSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pc0Jlc3RzZWxsaW5nQWN0aXZlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L3Nob3dCZXN0c2VsbGluZ319XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNzaG93RmVhdHVyZWR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWhpZGRlbj1cInt7I2lzRmVhdHVyZWRBY3RpdmV9fWZhbHNle3svaXNGZWF0dXJlZEFjdGl2ZX19e3teaXNGZWF0dXJlZEFjdGl2ZX19dHJ1ZXt7L2lzRmVhdHVyZWRBY3RpdmV9fVwiIGNsYXNzPVwidGFiLWNvbnRlbnQge3sjaXNGZWF0dXJlZEFjdGl2ZX19aXMtYWN0aXZle3svaXNGZWF0dXJlZEFjdGl2ZX19XCIgaWQ9XCJ0YWItcHJvZHVjdHNCeUNhdGVnb3J5VGFicy1mZWF0dXJlZC17e2lkfX1cIiBkYXRhLXNvcnQ9XCJmZWF0dXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaXNGZWF0dXJlZEFjdGl2ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smcHJvZHVjdHNIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lzRmVhdHVyZWRBY3RpdmV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3teaXNGZWF0dXJlZEFjdGl2ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smcHJvZHVjdHNMb2FkaW5nSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pc0ZlYXR1cmVkQWN0aXZlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L3Nob3dGZWF0dXJlZH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNzaG93TmV3fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1oaWRkZW49XCJ7eyNpc05ld0FjdGl2ZX19ZmFsc2V7ey9pc05ld0FjdGl2ZX19e3teaXNOZXdBY3RpdmV9fXRydWV7ey9pc05ld0FjdGl2ZX19XCIgY2xhc3M9XCJ0YWItY29udGVudCB7eyNpc05ld0FjdGl2ZX19aXMtYWN0aXZle3svaXNOZXdBY3RpdmV9fVwiIGlkPVwidGFiLXByb2R1Y3RzQnlDYXRlZ29yeVRhYnMtbmV3ZXN0LXt7aWR9fVwiIGRhdGEtc29ydD1cIm5ld2VzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaXNOZXdBY3RpdmV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JnByb2R1Y3RzSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pc05ld0FjdGl2ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e15pc05ld0FjdGl2ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smcHJvZHVjdHNMb2FkaW5nSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pc05ld0FjdGl2ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9zaG93TmV3fX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I3Nob3dSZXZpZXdzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1oaWRkZW49XCJ7eyNpc1Jldmlld3NBY3RpdmV9fWZhbHNle3svaXNSZXZpZXdzQWN0aXZlfX17e15pc1Jldmlld3NBY3RpdmV9fXRydWV7ey9pc1Jldmlld3NBY3RpdmV9fVwiIGNsYXNzPVwidGFiLWNvbnRlbnQge3sjaXNSZXZpZXdzQWN0aXZlfX1pcy1hY3RpdmV7ey9pc1Jldmlld3NBY3RpdmV9fVwiIGlkPVwidGFiLXByb2R1Y3RzQnlDYXRlZ29yeVRhYnMtYXZnY3VzdG9tZXJyZXZpZXcte3tpZH19XCIgZGF0YS1zb3J0PVwiYXZnY3VzdG9tZXJyZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2lzUmV2aWV3c0FjdGl2ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smcHJvZHVjdHNIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lzUmV2aWV3c0FjdGl2ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e15pc1Jldmlld3NBY3RpdmV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JnByb2R1Y3RzTG9hZGluZ0h0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svaXNSZXZpZXdzQWN0aXZlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L3Nob3dSZXZpZXdzfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW10aGVtZXNNb2Rlei1wcm9kdWN0c0J5Q2F0ZWdvcnlUYWJzLWxvYWRlciBsb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbXRoZW1lc01vZGV6LXByb2R1Y3RzQnlDYXRlZ29yeVRhYnMtYWN0aW9uR3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tc21hbGwgbG9hZE1vcmVcIj57e3R4dExvYWRNb3JlfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXNtYWxsIGNvbGxhcHNlXCI+e3t0eHRDb2xsYXBzZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHByb2R1Y3RzTG9hZGluZ1RlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtdGhlbWVzTW9kZXotcHJvZHVjdExvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW10aGVtZXNNb2Rlei1wcm9kdWN0TG9hZGluZy1pdGVtXCI+PGltZyBjbGFzcz1cImxhenlsb2FkXCIgZGF0YS1zaXplcz1cImF1dG9cIiBzcmM9XCJ7e2xvYWRpbmdJbWFnZX19XCIgZGF0YS1zcmM9XCJ7e3Byb2R1Y3RMb2FkaW5nSW1hZ2V9fVwiIGFsdD1cImxvYWRpbmdcIiB0aXRsZT1cImxvYWRpbmdcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbXRoZW1lc01vZGV6LXByb2R1Y3RMb2FkaW5nLWl0ZW1cIj48aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBkYXRhLXNpemVzPVwiYXV0b1wiIHNyYz1cInt7bG9hZGluZ0ltYWdlfX1cIiBkYXRhLXNyYz1cInt7cHJvZHVjdExvYWRpbmdJbWFnZX19XCIgYWx0PVwibG9hZGluZ1wiIHRpdGxlPVwibG9hZGluZ1wiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtdGhlbWVzTW9kZXotcHJvZHVjdExvYWRpbmctaXRlbVwiPjxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgc3JjPVwie3tsb2FkaW5nSW1hZ2V9fVwiIGRhdGEtc3JjPVwie3twcm9kdWN0TG9hZGluZ0ltYWdlfX1cIiBhbHQ9XCJsb2FkaW5nXCIgdGl0bGU9XCJsb2FkaW5nXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW10aGVtZXNNb2Rlei1wcm9kdWN0TG9hZGluZy1pdGVtXCI+PGltZyBjbGFzcz1cImxhenlsb2FkXCIgZGF0YS1zaXplcz1cImF1dG9cIiBzcmM9XCJ7e2xvYWRpbmdJbWFnZX19XCIgZGF0YS1zcmM9XCJ7e3Byb2R1Y3RMb2FkaW5nSW1hZ2V9fVwiIGFsdD1cImxvYWRpbmdcIiB0aXRsZT1cImxvYWRpbmdcIiAvPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHByb2R1Y3RzVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW10aGVtZXNNb2Rlei1wcm9kdWN0c0J5Q2F0ZWdvcnlUYWJzLXByb2R1Y3RzXCIgZGF0YS1lbmQtY3Vyc29yPVwie3tlbmRDdXJzb3J9fVwiIHt7I2hhc05leHRQYWdlfX1kYXRhLWhhcy1uZXh0LXBhZ2U9XCJ0cnVlXCJ7ey9oYXNOZXh0UGFnZX19PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2R1Y3RHcmlkIHt7I21heENvbHVtbnN9fXByb2R1Y3RHcmlkLS1tYXhDb2x7e21heENvbHVtbnN9fXt7L21heENvbHVtbnN9fVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyNwcm9kdWN0c319XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9kdWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3smcHJvZHVjdENhcmRIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIHt7L3Byb2R1Y3RzfX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHByb2R1Y3RDYXJkVGVtcGxhdGUsXG4gICAgfSkge1xuICAgICAgICB0aGlzLm9uTG9hZE1vcmUgPSB0aGlzLm9uTG9hZE1vcmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNvbGxhcHNlID0gdGhpcy5vbkNvbGxhcHNlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMubGltaXQgPSBsaW1pdDtcbiAgICAgICAgdGhpcy4kcGFyZW50ID0gJHBhcmVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5zZWN0aW9uVGVtcGxhdGUgPSBzZWN0aW9uVGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJvZHVjdHNMb2FkaW5nVGVtcGxhdGUgPSBwcm9kdWN0c0xvYWRpbmdUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0c1RlbXBsYXRlID0gcHJvZHVjdHNUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0Q2FyZFRlbXBsYXRlID0gcHJvZHVjdENhcmRUZW1wbGF0ZSB8fCBkZWZhdWx0UHJvZHVjdENhcmRUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkKCc8ZGl2IGNsYXNzPVwiZW10aGVtZXNNb2Rlei1wcm9kdWN0c0J5Q2F0ZWdvcnlUYWJzLWxvYWRpbmdcIj48L2Rpdj4nKTtcbiAgICAgICAgdGhpcy4kbG9hZE1vcmUgPSAkKCk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNlID0gJCgpO1xuICAgICAgICB0aGlzLiRsb2FkZXIgPSAkKCk7XG5cbiAgICAgICAgdGhpcy5ncWwgPSBuZXcgQ2F0ZWdvcnlQcm9kdWN0c0dyYXBoUUxRdWVyeShjb250ZXh0KTtcblxuICAgICAgICB0aGlzLiRwYXJlbnQuYXBwZW5kKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICB0aGlzLnJlcXVlc3QoKTtcbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0KCkge1xuICAgICAgICBsZXQgc29ydDtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuc29ydCkge1xuICAgICAgICBjYXNlICdiZXN0c2VsbGluZyc6XG4gICAgICAgICAgICBzb3J0ID0gJ0JFU1RfU0VMTElORyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZmVhdHVyZWQnOlxuICAgICAgICAgICAgc29ydCA9ICdGRUFUVVJFRCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbmV3ZXN0JzpcbiAgICAgICAgICAgIHNvcnQgPSAnTkVXRVNUJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdmdjdXN0b21lcnJldmlldyc6XG4gICAgICAgICAgICBzb3J0ID0gJ0JFU1RfUkVWSUVXRUQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzb3J0ID0gJ0RFRkFVTFQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IHRoaXMuZ3FsLmxvYWQodGhpcy5pZCwgJycsIHRoaXMubGltaXQsIHNvcnQsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlQYXRoID0gY2F0ZWdvcnk/LnBhdGg7XG5cbiAgICAgICAgLy8gSWYgbm8gcHJvZHVjdCByZXR1cm5lZCBieSBHcmFwaFFMLCB0aGVuIHVzZSBBSkFYIGZldGNoIGZyb20gY2F0ZWdvcnkgcGFnZVxuICAgICAgICBpZiAoY2F0ZWdvcnkgJiYgIWNhdGVnb3J5LnByb2R1Y3RzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDYXRlZ29yeVBhZ2VPblZpZXdwb3J0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNhdGVnb3J5KSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5zZWN0aW9uVGVtcGxhdGUsIHtcbiAgICAgICAgICAgIG5hbWU6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICB1cmw6IGNhdGVnb3J5LnBhdGgsXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIHNob3dCZXN0c2VsbGluZzogdGhpcy5jb250ZXh0LnBiY3N0X3Nob3dfYmVzdHNlbGxpbmcsXG4gICAgICAgICAgICBpc0Jlc3RzZWxsaW5nQWN0aXZlOiB0aGlzLnNvcnQgPT09ICdiZXN0c2VsbGluZycsXG4gICAgICAgICAgICB0eHRCZXN0c2VsbGluZ1RhYjogdGhpcy5jb250ZXh0LnR4dEJlc3RzZWxsaW5nVGFiLFxuICAgICAgICAgICAgc2hvd0ZlYXR1cmVkOiB0aGlzLmNvbnRleHQucGJjc3Rfc2hvd19mZWF0dXJlZCxcbiAgICAgICAgICAgIGlzRmVhdHVyZWRBY3RpdmU6IHRoaXMuc29ydCA9PT0gJ2ZlYXR1cmVkJyxcbiAgICAgICAgICAgIHR4dEZlYXR1cmVkVGFiOiB0aGlzLmNvbnRleHQudHh0RmVhdHVyZWRUYWIsXG4gICAgICAgICAgICBzaG93TmV3OiB0aGlzLmNvbnRleHQucGJjc3Rfc2hvd19uZXcsXG4gICAgICAgICAgICBpc05ld0FjdGl2ZTogdGhpcy5zb3J0ID09PSAnbmV3ZXN0JyxcbiAgICAgICAgICAgIHR4dE5ld1RhYjogdGhpcy5jb250ZXh0LnR4dE5ld1RhYixcbiAgICAgICAgICAgIHNob3dSZXZpZXdzOiB0aGlzLmNvbnRleHQucGJjc3Rfc2hvd19yZXZpZXdzLFxuICAgICAgICAgICAgaXNSZXZpZXdzQWN0aXZlOiB0aGlzLnNvcnQgPT09ICdhdmdjdXN0b21lcnJldmlldycsXG4gICAgICAgICAgICB0eHRSZXZpZXdzVGFiOiB0aGlzLmNvbnRleHQudHh0UmV2aWV3c1RhYixcbiAgICAgICAgICAgIHNob3dCYW5uZXJPclN1YmNhdGVnb3JpZXM6IHRoaXMuY29udGV4dC5wYmNzdF9zaG93X2Jhbm5lciB8fCB0aGlzLmNvbnRleHQucGJjc3Rfc3ViY2F0ZWdvcmllcyA+IDAgJiYgY2F0ZWdvcnkuaGFzQ2hpbGRyZW4sXG4gICAgICAgICAgICBzaG93QmFubmVyOiB0aGlzLmNvbnRleHQucGJjc3Rfc2hvd19iYW5uZXIsXG4gICAgICAgICAgICB0eHRTdWJIZWFkaW5nOiB0aGlzLmNvbnRleHQudHh0U3ViY2F0ZWdvcnlIZWFkaW5nLFxuICAgICAgICAgICAgc3ViY2F0ZWdvcmllczogY2F0ZWdvcnkuY2hpbGRyZW4uc2xpY2UoMCwgdGhpcy5jb250ZXh0LnBiY3N0X3N1YmNhdGVnb3JpZXMpLm1hcChjYXQgPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBjYXQubmFtZSxcbiAgICAgICAgICAgICAgICB1cmw6IGNhdC5wYXRoLFxuICAgICAgICAgICAgfSkpLFxuXG4gICAgICAgICAgICBwcm9kdWN0c0h0bWw6IHRoaXMuZ2VuZXJhdGVQcm9kdWN0c0h0bWwoY2F0ZWdvcnkpLFxuICAgICAgICAgICAgcHJvZHVjdHNMb2FkaW5nSHRtbDogbXVzdGFjaGUucmVuZGVyKHRoaXMucHJvZHVjdHNMb2FkaW5nVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nSW1hZ2U6IHRoaXMuY29udGV4dC5sb2FkaW5nSW1hZ2UsXG4gICAgICAgICAgICAgICAgcHJvZHVjdExvYWRpbmdJbWFnZTogdGhpcy5jb250ZXh0LnByb2R1Y3RMb2FkaW5nSW1hZ2UsXG4gICAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICAgIHR4dExvYWRNb3JlOiB0aGlzLmNvbnRleHQudHh0TG9hZE1vcmUsXG4gICAgICAgICAgICB0eHRDb2xsYXBzZTogdGhpcy5jb250ZXh0LnR4dENvbGxhcHNlLFxuICAgICAgICB9LCBudWxsKTtcblxuICAgICAgICBjb25zdCAkaHRtbCA9ICQoaHRtbCk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUucmVwbGFjZVdpdGgoJGh0bWwpO1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRodG1sO1xuICAgICAgICB0aGlzLiRsb2FkZXIgPSB0aGlzLiRzY29wZS5maW5kKCcubG9hZGVyJyk7XG5cbiAgICAgICAgdGhpcy5pbml0VGFicygpO1xuICAgICAgICB0aGlzLmluaXRTbGljaygpO1xuICAgICAgICB0aGlzLmluaXRCYW5uZXIoKTtcbiAgICAgICAgdGhpcy5pbml0QnV0dG9ucygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RDYXRlZ29yeVBhZ2VPblZpZXdwb3J0KCkge1xuICAgICAgICBjb25zdCAkc3B0TG9hZGluZyA9ICQoJ1tkYXRhLXNwZWNpYWwtcHJvZHVjdHMtdGFic10gLmxvYWRpbmcnKTtcbiAgICAgICAgY29uc3Qgb25DaGVja1ZpZXdwb3J0ID0gdGhyb3R0bGUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCRzcHRMb2FkaW5nLmxlbmd0aCA+IDAgJiYgJHNwdExvYWRpbmcuaXMoJzp2aXNpYmxlJykpIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gNTA7XG4gICAgICAgICAgICBjb25zdCBlbFRvcCA9IHRoaXMuJHNjb3BlLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIGNvbnN0IGVsQm90dG9tID0gZWxUb3AgKyB0aGlzLiRzY29wZS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgY29uc3Qgd2luVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgY29uc3Qgd2luQm90dG9tID0gd2luVG9wICsgJCh3aW5kb3cpLmlubmVySGVpZ2h0KCk7XG5cbiAgICAgICAgICAgIGlmIChlbFRvcCAtIG9mZnNldCA8IHdpbkJvdHRvbSAmJiBlbEJvdHRvbSArIG9mZnNldCA+IHdpblRvcCkge1xuICAgICAgICAgICAgICAgICQod2luZG93KS5vZmYoJ2xvYWQgcmVzaXplIHNjcm9sbCcsIG9uQ2hlY2tWaWV3cG9ydCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0Q2F0ZWdvcnlQYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgICQod2luZG93KS5vbignbG9hZCByZXNpemUgc2Nyb2xsJywgb25DaGVja1ZpZXdwb3J0KTtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIG9uQ2hlY2tWaWV3cG9ydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdENhdGVnb3J5UGFnZSgpIHtcbiAgICAgICAgY29uc3QgdGFzayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0UXVlcnkgPSB0aGlzLmxpbWl0ID8gYCZsaW1pdD0ke3RoaXMubGltaXR9YCA6ICcnO1xuICAgICAgICAgICAgY29uc3Qgc29ydFF1ZXJ5ID0gdGhpcy5zb3J0ID8gYCZzb3J0PSR7dGhpcy5zb3J0fWAgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gJ3BhcGEtc3VwZXJtYXJrZXQvcHJvZHVjdHMtYnktY2F0ZWdvcnktc29ydGluZy10YWJzL3NlY3Rpb24nO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5jYXRlZ29yeVBhdGggPyBgJHt0aGlzLmNhdGVnb3J5UGF0aH0/JHtsaW1pdFF1ZXJ5fSR7c29ydFF1ZXJ5fWAgOiBgL2NhdGVnb3JpZXMucGhwP2NhdGVnb3J5PSR7dGhpcy5pZH0ke2xpbWl0UXVlcnl9JHtzb3J0UXVlcnl9YDtcblxuICAgICAgICAgICAgaXNSZXF1ZXN0aW5nQ2F0ZWdvcnlQYWdlKys7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgaXNSZXF1ZXN0aW5nQ2F0ZWdvcnlQYWdlLS07XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyIHx8ICFyZXNwIHx8IHJlc3AuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkcmVzcCA9ICQocmVzcCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9wIGlmIHRoZSByZXNwb25zZSBjb250YWlucyBtdWx0aXBsZSByb290IGVsZW1lbnRzIChzZXJ2ZXIgZXJyb3IpXG4gICAgICAgICAgICAgICAgaWYgKCRyZXNwLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZS5yZXBsYWNlV2l0aCgkcmVzcCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUgPSAkcmVzcDtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkZXIgPSB0aGlzLiRzY29wZS5maW5kKCcubG9hZGVyJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmluaXRUYWJzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U2xpY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRCYW5uZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRCdXR0b25zKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaXNSZXF1ZXN0aW5nQ2F0ZWdvcnlQYWdlIDw9IDApIHtcbiAgICAgICAgICAgIHRhc2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc1JlcXVlc3RpbmdDYXRlZ29yeVBhZ2UgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGFzaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZVByb2R1Y3RzSHRtbChjYXRlZ29yeSkge1xuICAgICAgICByZXR1cm4gbXVzdGFjaGUucmVuZGVyKHRoaXMucHJvZHVjdHNUZW1wbGF0ZSwge1xuICAgICAgICAgICAgbWF4Q29sdW1uczogKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LnBiY3N0X3Byb2R1Y3RzID09PSA1KSByZXR1cm4gNTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LnBiY3N0X3Byb2R1Y3RzID09PSA2KSByZXR1cm4gNjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LnBiY3N0X3Byb2R1Y3RzID09PSAxMCkgcmV0dXJuIDU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5wYmNzdF9wcm9kdWN0cyA9PT0gMTIgJiYgdGhpcy5jb250ZXh0LnBiY3N0X3N1YmNhdGVnb3JpZXMgPT09IDApIHJldHVybiA2O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQucGJjc3RfcHJvZHVjdHMgPT09IDE1KSByZXR1cm4gNTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LnBiY3N0X3Byb2R1Y3RzID09PSAxOCkgcmV0dXJuIDY7XG4gICAgICAgICAgICB9KSgpLFxuICAgICAgICAgICAgcHJvZHVjdHM6IGNhdGVnb3J5LnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q2FyZEh0bWw6IG11c3RhY2hlLnJlbmRlcih0aGlzLnByb2R1Y3RDYXJkVGVtcGxhdGUsIHByb2R1Y3QpLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgZW5kQ3Vyc29yOiBjYXRlZ29yeS5wcm9kdWN0c0luZm8uZW5kQ3Vyc29yLFxuICAgICAgICAgICAgaGFzTmV4dFBhZ2U6IGNhdGVnb3J5LnByb2R1Y3RzSW5mby5oYXNOZXh0UGFnZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZFByb2R1Y3RzKHtcbiAgICAgICAgc29ydCA9ICcnLFxuICAgICAgICBhZnRlckN1cnNvciA9ICcnLFxuICAgICAgICAkY29udGVudCxcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuJGxvYWRlci5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgIGxldCBzb3J0UGFyYW07XG4gICAgICAgIHN3aXRjaCAoc29ydCkge1xuICAgICAgICBjYXNlICdiZXN0c2VsbGluZyc6XG4gICAgICAgICAgICBzb3J0UGFyYW0gPSAnQkVTVF9TRUxMSU5HJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmZWF0dXJlZCc6XG4gICAgICAgICAgICBzb3J0UGFyYW0gPSAnRkVBVFVSRUQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25ld2VzdCc6XG4gICAgICAgICAgICBzb3J0UGFyYW0gPSAnTkVXRVNUJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdmdjdXN0b21lcnJldmlldyc6XG4gICAgICAgICAgICBzb3J0UGFyYW0gPSAnQkVTVF9SRVZJRVdFRCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNvcnRQYXJhbSA9ICdERUZBVUxUJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCB0aGlzLmdxbC5sb2FkKHRoaXMuaWQsIGFmdGVyQ3Vyc29yLCB0aGlzLmxpbWl0LCBzb3J0UGFyYW0sIHRydWUpO1xuXG4gICAgICAgIC8vIElmIGNhdGVnb3J5IGhhcyBubyBwcm9kdWN0LCB0aGVuIGxvYWQgcHJvZHVjdHMgZnJvbSB0aGUgZmlyc3Qgc3ViY2F0ZWdvcnlcbiAgICAgICAgaWYgKGNhdGVnb3J5ICYmICFjYXRlZ29yeS5wcm9kdWN0cz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjYXRJZCA9IGNhdGVnb3J5LmNoaWxkcmVuWzBdPy5lbnRpdHlJZDtcbiAgICAgICAgICAgIGlmIChjYXRJZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YiA9IGF3YWl0IHRoaXMuZ3FsLmxvYWQoY2F0SWQsIGFmdGVyQ3Vyc29yLCB0aGlzLmxpbWl0LCBzb3J0UGFyYW0sIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChzdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkucHJvZHVjdHMgPSBzdWIucHJvZHVjdHM7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnByb2R1Y3RzSW5mbyA9IHN1Yi5wcm9kdWN0c0luZm87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBlbmRDdXJzb3IsIGhhc05leHRQYWdlIH0gPSBjYXRlZ29yeS5wcm9kdWN0c0luZm87XG5cbiAgICAgICAgdGhpcy4kbG9hZGVyLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgaWYgKCFjYXRlZ29yeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaHRtbCA9IHRoaXMuZ2VuZXJhdGVQcm9kdWN0c0h0bWwoY2F0ZWdvcnkpO1xuICAgICAgICBjb25zdCAkaHRtbCA9ICQoaHRtbCk7XG5cbiAgICAgICAgY29uc3QgJHByb2R1Y3RHcmlkQ29udGFpbmVyID0gJGNvbnRlbnQuZmluZCgnW2RhdGEtZW5kLWN1cnNvcl0nKTtcbiAgICAgICAgaWYgKCRwcm9kdWN0R3JpZENvbnRhaW5lci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkcHJvZHVjdEdyaWRDb250YWluZXIuZGF0YSh7XG4gICAgICAgICAgICAgICAgZW5kQ3Vyc29yLFxuICAgICAgICAgICAgICAgIGhhc05leHRQYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkcHJvZHVjdEdyaWRDb250YWluZXIuZmluZCgnLnByb2R1Y3RHcmlkJykuYXBwZW5kKCRodG1sLmZpbmQoJy5wcm9kdWN0R3JpZCcpLmNoaWxkcmVuKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGNvbnRlbnRcbiAgICAgICAgICAgICAgICAuaHRtbCgkaHRtbClcbiAgICAgICAgICAgICAgICAuZGF0YSgnbG9hZGVkJywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRTbGljaygpO1xuXG4gICAgICAgIGlmIChoYXNOZXh0UGFnZSkge1xuICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZEN1cnNvcikge1xuICAgICAgICAgICAgdGhpcy4kY29sbGFwc2Uuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kY29sbGFwc2UuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFByb2R1Y3RzRnJvbUNhdGVnb3J5UGFnZSh7XG4gICAgICAgIHNvcnQgPSAnJyxcbiAgICAgICAgcGFnZSA9ICcnLFxuICAgICAgICAkY29udGVudCxcbiAgICB9KSB7XG4gICAgICAgIGNvbnN0IGxpbWl0UXVlcnkgPSB0aGlzLmxpbWl0ID8gYCZsaW1pdD0ke3RoaXMubGltaXR9YCA6ICcnO1xuICAgICAgICBjb25zdCBzb3J0UXVlcnkgPSBzb3J0ID8gYCZzb3J0PSR7c29ydH1gIDogJyc7XG4gICAgICAgIGNvbnN0IHBhZ2VRdWVyeSA9IHBhZ2UgPyBgJnBhZ2U9JHtwYWdlfWAgOiAnJztcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSAncGFwYS1zdXBlcm1hcmtldC9wcm9kdWN0cy1ieS1jYXRlZ29yeS1zb3J0aW5nLXRhYnMvcHJvZHVjdHMnO1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmNhdGVnb3J5UGF0aCA/IGAke3RoaXMuY2F0ZWdvcnlQYXRofT8ke2xpbWl0UXVlcnl9JHtzb3J0UXVlcnl9JHtwYWdlUXVlcnl9YCA6IGAvY2F0ZWdvcmllcy5waHA/Y2F0ZWdvcnk9JHt0aGlzLmlkfSR7bGltaXRRdWVyeX0ke3NvcnRRdWVyeX0ke3BhZ2VRdWVyeX1gO1xuXG4gICAgICAgIHRoaXMuJGxvYWRlci5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRsb2FkZXIucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgaWYgKGVyciB8fCAhcmVzcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJHJlc3AgPSAkKHJlc3ApO1xuXG4gICAgICAgICAgICAvLyBTdG9wIGlmIHRoZSByZXNwb25zZSBjb250YWlucyBtdWx0aXBsZSByb290IGVsZW1lbnRzIChzZXJ2ZXIgZXJyb3IpXG4gICAgICAgICAgICBpZiAoJHJlc3AubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRQYWdlID0gJGNvbnRlbnQuZmluZCgnW2RhdGEtY3VycmVudC1wYWdlXScpO1xuXG4gICAgICAgICAgICBpZiAoJGN1cnJlbnRQYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkY3VycmVudFBhZ2UuZGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAkcmVzcC5kYXRhKCdjdXJyZW50UGFnZScpLFxuICAgICAgICAgICAgICAgICAgICBoYXNOZXh0UGFnZTogQm9vbGVhbigkcmVzcC5kYXRhKCdoYXNOZXh0UGFnZScpKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkY3VycmVudFBhZ2UuZmluZCgnLnByb2R1Y3RHcmlkJykuYXBwZW5kKCRyZXNwLmZpbmQoJy5wcm9kdWN0R3JpZCcpLmNoaWxkcmVuKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkY29udGVudFxuICAgICAgICAgICAgICAgICAgICAuaHRtbChyZXNwKVxuICAgICAgICAgICAgICAgICAgICAuZGF0YSgnbG9hZGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdFNsaWNrKCk7XG5cbiAgICAgICAgICAgIGlmICgkcmVzcC5kYXRhKCdoYXNOZXh0UGFnZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkcmVzcC5kYXRhKCdjdXJyZW50UGFnZScpID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNlLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29sbGFwc2UuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0VGFicygpIHtcbiAgICAgICAgZm91bmRhdGlvbih0aGlzLiRzY29wZSk7XG5cbiAgICAgICAgY29uc3QgJGFjdGl2ZVRhYkNvbnRlbnQgPSB0aGlzLiRzY29wZS5maW5kKCcudGFiLWNvbnRlbnQuaXMtYWN0aXZlJykuZGF0YSgnbG9hZGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgJCgnW2RhdGEtdGFiXScsIHRoaXMuJHNjb3BlKS5vbigndG9nZ2xlZCcsIChldmVudCwgdGFiKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICQoJCh0YWIpLmZpbmQoJ2EnKS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgICAgICBpZiAoJGNvbnRlbnQuZGF0YSgnbG9hZGVkJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdEdyaWRDb250YWluZXIgPSAkY29udGVudC5maW5kKCdbZGF0YS1lbmQtY3Vyc29yXSwgW2RhdGEtY3VycmVudC1wYWdlXScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRwcm9kdWN0R3JpZENvbnRhaW5lci5kYXRhKCdoYXNOZXh0UGFnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLnNob3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRwcm9kdWN0R3JpZENvbnRhaW5lci5kYXRhKCdlbmRDdXJzb3InKSB8fCBOdW1iZXIoJHByb2R1Y3RHcmlkQ29udGFpbmVyLmRhdGEoJ2N1cnJlbnRQYWdlJykpID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzZS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29sbGFwc2UuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy4kY29sbGFwc2UuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoJGFjdGl2ZVRhYkNvbnRlbnQuZmluZCgnW2RhdGEtZW5kLWN1cnNvcl0nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvZHVjdHMoe1xuICAgICAgICAgICAgICAgICAgICBzb3J0OiAkY29udGVudC5kYXRhKCdzb3J0JyksXG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRQcm9kdWN0c0Zyb21DYXRlZ29yeVBhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBzb3J0OiAkY29udGVudC5kYXRhKCdzb3J0JyksXG4gICAgICAgICAgICAgICAgICAgICRjb250ZW50LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0U2xpY2soKSB7XG4gICAgICAgIC8vIGluaXQgcHJvZHVjdHMgY2Fyb3VzZWxcbiAgICAgICAgJCgnW2RhdGEtc2xpY2tdJywgdGhpcy4kc2NvcGUpXG4gICAgICAgICAgICAub24oJ2luaXQnLCBlID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGluaXQgbmVzdGVkIGNhcm91c2VsXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpY2stbmVzdGVkXScsIGUudGFyZ2V0KS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKGVsKS5zbGljaygkKGVsKS5kYXRhKCdzbGlja05lc3RlZCcpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDIwMCkpXG4gICAgICAgICAgICAub24oJ2JyZWFrcG9pbnQnLCBlID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWNrLW5lc3RlZF0nLCBlLnRhcmdldCkuc2xpY2soJ3NldFBvc2l0aW9uJyk7XG4gICAgICAgICAgICB9LCAyMDApKVxuICAgICAgICAgICAgLnNsaWNrKCk7XG4gICAgfVxuXG4gICAgaW5pdEJhbm5lcigpIHtcbiAgICAgICAgY29uc3QgJGltZyA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWJhbm5lcl0gaW1nJyk7XG4gICAgICAgIGNvbnN0IHNyYyA9IGAvcHJvZHVjdF9pbWFnZXMvdXBsb2FkZWRfaW1hZ2VzL3Byb2R1Y3RzLWJ5LWNhdGVnb3J5LSR7dGhpcy5pbmRleCArIDF9LmpwZz9jPTImdD0ke3RoaXMuY29udGV4dC5jb25maWd1cmF0aW9uSWR9YDtcblxuICAgICAgICBpZiAoJGltZy5oYXNDbGFzcygnbGF6eWxvYWQnKSkge1xuICAgICAgICAgICAgJGltZy5hdHRyKCdkYXRhLXNyYycsIHNyYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkaW1nLmF0dHIoJ3NyYycsIHNyYyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0QnV0dG9ucygpIHtcbiAgICAgICAgdGhpcy4kbG9hZE1vcmUgPSB0aGlzLiRzY29wZS5maW5kKCcubG9hZE1vcmUnKS5oaWRlKCk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNlID0gdGhpcy4kc2NvcGUuZmluZCgnLmNvbGxhcHNlJykuaGlkZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLiRzY29wZS5maW5kKCcudGFiLWNvbnRlbnQuaXMtYWN0aXZlJykuZmluZCgnW2RhdGEtZW5kLWN1cnNvcl0sIFtkYXRhLWN1cnJlbnQtcGFnZV0nKS5kYXRhKCdoYXNOZXh0UGFnZScpKSB7XG4gICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5zaG93KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRsb2FkTW9yZS5vbignY2xpY2snLCB0aGlzLm9uTG9hZE1vcmUpO1xuICAgICAgICB0aGlzLiRjb2xsYXBzZS5vbignY2xpY2snLCB0aGlzLm9uQ29sbGFwc2UpO1xuICAgIH1cblxuICAgIG9uTG9hZE1vcmUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkY29udGVudCA9IHRoaXMuJHNjb3BlLmZpbmQoJy50YWItY29udGVudC5pcy1hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RHcmlkQ29udGFpbmVyID0gJGNvbnRlbnQuZmluZCgnW2RhdGEtZW5kLWN1cnNvcl0sIFtkYXRhLWN1cnJlbnQtcGFnZV0nKTtcbiAgICAgICAgY29uc3QgJGhpZGUgPSAkY29udGVudC5maW5kKCcucHJvZHVjdC5oaWRlJyk7XG5cbiAgICAgICAgaWYgKCRoaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICRoaWRlLnNob3coKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgdGhpcy4kY29sbGFwc2Uuc2hvdygpO1xuXG4gICAgICAgICAgICBpZiAoISRwcm9kdWN0R3JpZENvbnRhaW5lci5kYXRhKCdoYXNOZXh0UGFnZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcm9kdWN0R3JpZENvbnRhaW5lci5kYXRhKCdoYXNOZXh0UGFnZScpKSB7XG4gICAgICAgICAgICBjb25zdCBzb3J0ID0gJGNvbnRlbnQuZGF0YSgnc29ydCcpO1xuICAgICAgICAgICAgY29uc3QgYWZ0ZXJDdXJzb3IgPSAkcHJvZHVjdEdyaWRDb250YWluZXIuZGF0YSgnZW5kQ3Vyc29yJyk7XG4gICAgICAgICAgICBjb25zdCBwYWdlID0gTnVtYmVyKCRwcm9kdWN0R3JpZENvbnRhaW5lci5kYXRhKCdjdXJyZW50UGFnZScpKTtcblxuICAgICAgICAgICAgaWYgKGFmdGVyQ3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvZHVjdHMoe1xuICAgICAgICAgICAgICAgICAgICBzb3J0LFxuICAgICAgICAgICAgICAgICAgICBhZnRlckN1cnNvcixcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRQcm9kdWN0c0Zyb21DYXRlZ29yeVBhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBzb3J0LFxuICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYWdlICsgMSxcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbGxhcHNlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMubGltaXQpIHtcbiAgICAgICAgICAgIGNvbnN0ICR0YWIgPSB0aGlzLiRzY29wZS5maW5kKCcudGFiLWNvbnRlbnQuaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICBjb25zdCAkaGlkZSA9ICR0YWIuZmluZCgnLnByb2R1Y3QnKS5zbGljZSh0aGlzLmxpbWl0KS5oaWRlKCkuYWRkQ2xhc3MoJ2hpZGUnKTtcblxuICAgICAgICAgICAgaWYgKCRoaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICR0YWIub2Zmc2V0KCkudG9wLFxuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGNvbGxhcHNlLmhpZGUoKTtcbiAgICB9XG59XG5cbmNsYXNzIFByb2R1Y3RzQnlDYXRlZ29yaWVzIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMubGF6eSA9IHRoaXMuJHNjb3BlLmlzKCdbZGF0YS1sYXp5XScpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25DaGVja1ZpZXdwb3J0ID0gdGhyb3R0bGUodGhpcy5vbkNoZWNrVmlld3BvcnQuYmluZCh0aGlzKSwgMTAwKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgICAgICBpZiAoIXRoaXMubGF6eSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgY29uc3Qgc29ydCA9IHRoaXMuJHNjb3BlLmRhdGEoJ3NvcnQnKTtcbiAgICAgICAgY29uc3QgbGltaXQgPSB0aGlzLiRzY29wZS5kYXRhKCdsaW1pdCcpO1xuXG4gICAgICAgIFN0cmluZyh0aGlzLiRzY29wZS5kYXRhKCdwYmNzdEdyb3VwJykpLnNwbGl0KCcsJykubWFwKChpZFN0ciwgaW5kZXgpID0+IG5ldyBQcm9kdWN0c0J5Q2F0ZWdvcnkoe1xuICAgICAgICAgICAgaWQ6IE51bWJlcihpZFN0ci50cmltKCkpLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBzb3J0LFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAkcGFyZW50OiB0aGlzLiRzY29wZSxcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuY29udGV4dCxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgICQoJ2JvZHknKS5vbmUoJ2JlZm9yZWxvYWQuaW5zdGFudGxvYWQnLCAoKSA9PiB0aGlzLnVuYmluZEV2ZW50cygpKTtcblxuICAgICAgICBpZiAodGhpcy5sYXp5KSB7XG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQgcmVzaXplIHNjcm9sbCcsIHRoaXMub25DaGVja1ZpZXdwb3J0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgJCh3aW5kb3cpLm9mZignbG9hZCByZXNpemUgc2Nyb2xsJywgdGhpcy5vbkNoZWNrVmlld3BvcnQpO1xuICAgIH1cblxuICAgIG9uQ2hlY2tWaWV3cG9ydCgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGVkKSB7XG4gICAgICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkIHJlc2l6ZSBzY3JvbGwnLCB0aGlzLm9uQ2hlY2tWaWV3cG9ydCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuJHNjb3BlLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSAzMDA7XG4gICAgICAgIGNvbnN0IGVsVG9wID0gdGhpcy4kc2NvcGUub2Zmc2V0KCkudG9wO1xuICAgICAgICBjb25zdCBlbEJvdHRvbSA9IGVsVG9wICsgdGhpcy4kc2NvcGUub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgY29uc3Qgd2luVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICBjb25zdCB3aW5Cb3R0b20gPSB3aW5Ub3AgKyAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKTtcblxuICAgICAgICBpZiAoZWxUb3AgLSBvZmZzZXQgPCB3aW5Cb3R0b20gJiYgZWxCb3R0b20gKyBvZmZzZXQgPiB3aW5Ub3ApIHtcbiAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KHNlbGVjdG9yID0gJ1tkYXRhLXBiY3N0LWdyb3VwXScsIGNvbnRleHQpIHtcbiAgICAkKHNlbGVjdG9yKS5lYWNoKChpLCBlbCkgPT4gbmV3IFByb2R1Y3RzQnlDYXRlZ29yaWVzKCQoZWwpLCBjb250ZXh0KSk7XG59XG4iLCJpbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTdXBlcm1hcmtldFByb2R1Y3RDYXJkc0dyYXBoUUxRdWVyeSwgcHJvZHVjdENhcmRUZW1wbGF0ZSB9IGZyb20gJy4vdGhlbWUtdXRpbHMnO1xuaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcblxuZXhwb3J0IGNsYXNzIFNwZWNpYWxQcm9kdWN0c0dyYXBoUUxRdWVyeSBleHRlbmRzIFN1cGVybWFya2V0UHJvZHVjdENhcmRzR3JhcGhRTFF1ZXJ5IHtcbiAgICAvKipcbiAgICAgKiBMb2FkIHNwZWNpYWwgcHJvZHVjdHMgZnJvbSBHcmFwaFFMXG4gICAgICogQHBhcmFtIHtuZXd8dG9wfGZlYXR1cmVkfSB0eXBlIExvYWQgbmV3ZXN0LCBiZXN0c2VsbGluZyBvciBmZWF0dXJlZCBwcm9kdWN0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhZnRlckN1cnNvciBMb2FkIHByb2R1Y3RzIGFmdGVyIGN1cnNvclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsaW1pdCBOdW1iZXIgb2YgcHJvZHVjdHMgdG8gbG9hZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaGlkZU91dE9mU3RvY2sgSGlkZSBvdXQgb2Ygc3RvY2sgcHJvZHVjdHNcbiAgICAgKiBAcmV0dXJucyBwcm9kdWN0c1xuICAgICAqL1xuICAgIGFzeW5jIGxvYWQoXG4gICAgICAgIHR5cGUgPSAnbmV3JyxcbiAgICAgICAgYWZ0ZXJDdXJzb3IgPSAnJyxcbiAgICAgICAgbGltaXQgPSAxMCxcbiAgICAgICAgaGlkZU91dE9mU3RvY2sgPSB0cnVlLFxuICAgICkge1xuICAgICAgICBjb25zdCBjYWNoZUtleSA9IGAke3RoaXMuY3VycmVuY3lDb2RlfV8ke3R5cGV9XyR7YWZ0ZXJDdXJzb3J9XyR7bGltaXR9XyR7aGlkZU91dE9mU3RvY2t9YDtcblxuICAgICAgICBpZiAoIXRoaXMuY2FjaGVkUHJvZHVjdHNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlZFByb2R1Y3RzW2NhY2hlS2V5XSA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgY2F0ZWdvcnlQcm9kdWN0cyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFmdGVyOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmaXJzdDogSW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGlkZU91dE9mU3RvY2s6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3R5cGUgPT09ICduZXcnID8gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3ZXN0UHJvZHVjdHMoYWZ0ZXI6ICRhZnRlciwgZmlyc3Q6ICRmaXJzdCwgaGlkZU91dE9mU3RvY2s6ICRoaWRlT3V0T2ZTdG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRDdXJzb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTmV4dFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3R5cGUgPT09ICd0b3AnID8gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdFNlbGxpbmdQcm9kdWN0cyhhZnRlcjogJGFmdGVyLCBmaXJzdDogJGZpcnN0LCBoaWRlT3V0T2ZTdG9jazogJGhpZGVPdXRPZlN0b2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEN1cnNvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNOZXh0UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dHlwZSA9PT0gJ2ZlYXR1cmVkJyA/IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVkUHJvZHVjdHMoYWZ0ZXI6ICRhZnRlciwgZmlyc3Q6ICRmaXJzdCwgaGlkZU91dE9mU3RvY2s6ICRoaWRlT3V0T2ZTdG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRDdXJzb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTmV4dFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRPdXRPZlN0b2NrTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZWZyb250IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0YWxvZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29tcGFyaXNvbnNFbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeShjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBJbWFnZUZpZWxkcyBvbiBJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDgwd2lkZTogdXJsKHdpZHRoOiA4MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsMTYwd2lkZTogdXJsKHdpZHRoOiAxNjApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDMyMHdpZGU6IHVybCh3aWR0aDogMzIwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw2NDB3aWRlOiB1cmwod2lkdGg6IDY0MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgUHJvZHVjdEZpZWxkcyBvbiBQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0NhcnRVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHVyY2hhc2VRdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhQdXJjaGFzZVF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlc1dpdGhUYXg6IHByaWNlcyhpbmNsdWRlVGF4OiB0cnVlLCBjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZVJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXNXaXRob3V0VGF4OiBwcmljZXMoaW5jbHVkZVRheDogZmFsc2UsIGN1cnJlbmN5Q29kZTogJGN1cnJlbmN5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5JbWFnZUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5JbWFnZUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXdTdW1tYXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2ZXJhZ2VSYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0T3B0aW9ucyhmaXJzdDogMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFiaWxpdHlWMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJblN0b2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlcjogYWZ0ZXJDdXJzb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Q6IGxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPdXRPZlN0b2NrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZTogdGhpcy5jdXJyZW5jeUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmdyYXBoUUxUb2tlbn1gLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3ZXN0UHJvZHVjdHM6IHR5cGUgPT09ICduZXcnICYmIHJlc3AuZGF0YS5zaXRlLm5ld2VzdFByb2R1Y3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5tYXBHcmFwaFFMUHJvZHVjdHMocmVzcC5kYXRhLnNpdGUubmV3ZXN0UHJvZHVjdHMsIHJlc3AuZGF0YS5zaXRlLnNldHRpbmdzLCByZXNwLmRhdGEuc2l0ZS5jdXJyZW5jeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdlc3RQcm9kdWN0c0luZm86IHR5cGUgPT09ICduZXcnICYmIHJlc3AuZGF0YS5zaXRlLm5ld2VzdFByb2R1Y3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQ3Vyc29yOiByZXNwLmRhdGEuc2l0ZS5uZXdlc3RQcm9kdWN0cy5wYWdlSW5mby5lbmRDdXJzb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNOZXh0UGFnZTogcmVzcC5kYXRhLnNpdGUubmV3ZXN0UHJvZHVjdHMucGFnZUluZm8uaGFzTmV4dFBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7IGVuZEN1cnNvcjogJycsIGhhc05leHRQYWdlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RzZWxsaW5nUHJvZHVjdHM6IHR5cGUgPT09ICd0b3AnICYmIHJlc3AuZGF0YS5zaXRlLmJlc3RTZWxsaW5nUHJvZHVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm1hcEdyYXBoUUxQcm9kdWN0cyhyZXNwLmRhdGEuc2l0ZS5iZXN0U2VsbGluZ1Byb2R1Y3RzLCByZXNwLmRhdGEuc2l0ZS5zZXR0aW5ncywgcmVzcC5kYXRhLnNpdGUuY3VycmVuY3kpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdHNlbGxpbmdQcm9kdWN0c0luZm86IHR5cGUgPT09ICd0b3AnICYmIHJlc3AuZGF0YS5zaXRlLmJlc3RTZWxsaW5nUHJvZHVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRDdXJzb3I6IHJlc3AuZGF0YS5zaXRlLmJlc3RTZWxsaW5nUHJvZHVjdHMucGFnZUluZm8uZW5kQ3Vyc29yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTmV4dFBhZ2U6IHJlc3AuZGF0YS5zaXRlLmJlc3RTZWxsaW5nUHJvZHVjdHMucGFnZUluZm8uaGFzTmV4dFBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7IGVuZEN1cnNvcjogJycsIGhhc05leHRQYWdlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVkUHJvZHVjdHM6IHR5cGUgPT09ICdmZWF0dXJlZCcgJiYgcmVzcC5kYXRhLnNpdGUuZmVhdHVyZWRQcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubWFwR3JhcGhRTFByb2R1Y3RzKHJlc3AuZGF0YS5zaXRlLmZlYXR1cmVkUHJvZHVjdHMsIHJlc3AuZGF0YS5zaXRlLnNldHRpbmdzLCByZXNwLmRhdGEuc2l0ZS5jdXJyZW5jeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlZFByb2R1Y3RzSW5mbzogdHlwZSA9PT0gJ2ZlYXR1cmVkJyAmJiByZXNwLmRhdGEuc2l0ZS5mZWF0dXJlZFByb2R1Y3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQ3Vyc29yOiByZXNwLmRhdGEuc2l0ZS5mZWF0dXJlZFByb2R1Y3RzLnBhZ2VJbmZvLmVuZEN1cnNvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc05leHRQYWdlOiByZXNwLmRhdGEuc2l0ZS5mZWF0dXJlZFByb2R1Y3RzLnBhZ2VJbmZvLmhhc05leHRQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogeyBlbmRDdXJzb3I6ICcnLCBoYXNOZXh0UGFnZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFByb2R1Y3RzW2NhY2hlS2V5XTtcbiAgICB9XG59XG5cbmNsYXNzIFNwZWNpYWxQcm9kdWN0c1RhYnMge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgY29udGV4dCkge1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy4kdmlld3BvcnRDaGVjayA9ICRzY29wZS5maW5kKCdbZGF0YS12aWV3cG9ydC1jaGVja10nKTtcbiAgICAgICAgdGhpcy4kbG9hZGluZyA9ICRzY29wZS5maW5kKCcubG9hZGluZycpLmhpZGUoKTtcbiAgICAgICAgdGhpcy4kbG9hZE1vcmUgPSAkc2NvcGUuZmluZCgnLmxvYWRNb3JlJykuaGlkZSgpO1xuICAgICAgICB0aGlzLiRjb2xsYXBzZSA9ICRzY29wZS5maW5kKCcuY29sbGFwc2UnKS5oaWRlKCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByb2R1Y3RzQ291bnQgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5zcGVjaWFsUHJvZHVjdHNUYWJfbGF6eV9jb3VudCArIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnNwZWNpYWxQcm9kdWN0c1RhYl9pbml0X2NvdW50O1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtdGhlbWVzTW9kZXotc3BlY2lhbFByb2R1Y3RzVGFicy1wcm9kdWN0c1wiPlxuICAgICAgICAgICAgICAgIHt7I2ZlYXR1cmVkUHJvZHVjdHMubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvZHVjdEdyaWQgcHJvZHVjdEdyaWQtLW1heENvbDRcIiBkYXRhLXByb2R1Y3QtdHlwZT1cImZlYXR1cmVkXCIgZGF0YS1saXN0LW5hbWU9XCJGZWF0dXJlZCBQcm9kdWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sjZmVhdHVyZWRQcm9kdWN0c319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHJvZHVjdFwiIGRhdGEtcHJvZHVjdC1pZD1cInt7aWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZwcm9kdWN0Q2FyZEh0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ey9mZWF0dXJlZFByb2R1Y3RzfX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICB7ey9mZWF0dXJlZFByb2R1Y3RzLmxlbmd0aH19XG5cbiAgICAgICAgICAgICAgICB7eyNiZXN0c2VsbGluZ1Byb2R1Y3RzLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2R1Y3RHcmlkIHByb2R1Y3RHcmlkLS1tYXhDb2w0XCIgZGF0YS1wcm9kdWN0LXR5cGU9XCJiZXN0c2VsbGluZ1wiIGRhdGEtbGlzdC1uYW1lPVwiTW9zdCBQb3B1bGFyIFByb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyNiZXN0c2VsbGluZ1Byb2R1Y3RzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9kdWN0XCIgZGF0YS1wcm9kdWN0LWlkPVwie3tpZH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JnByb2R1Y3RDYXJkSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L2Jlc3RzZWxsaW5nUHJvZHVjdHN9fVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIHt7L2Jlc3RzZWxsaW5nUHJvZHVjdHMubGVuZ3RofX1cblxuICAgICAgICAgICAgICAgIHt7I25ld2VzdFByb2R1Y3RzLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2R1Y3RHcmlkIHByb2R1Y3RHcmlkLS1tYXhDb2w0XCIgZGF0YS1wcm9kdWN0LXR5cGU9XCJuZXdlc3RcIiBkYXRhLWxpc3QtbmFtZT1cIk1vc3QgUG9wdWxhciBQcm9kdWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sjbmV3ZXN0UHJvZHVjdHN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInByb2R1Y3RcIiBkYXRhLXByb2R1Y3QtaWQ9XCJ7e2lkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smcHJvZHVjdENhcmRIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAge3svbmV3ZXN0UHJvZHVjdHN9fVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIHt7L25ld2VzdFByb2R1Y3RzLmxlbmd0aH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgdGhpcy5vbkNoZWNrVmlld3BvcnQgPSB0aHJvdHRsZSh0aGlzLm9uQ2hlY2tWaWV3cG9ydC5iaW5kKHRoaXMpLCAxMDApO1xuICAgICAgICB0aGlzLm9uTG9hZE1vcmUgPSB0aGlzLm9uTG9hZE1vcmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNvbGxhcHNlID0gdGhpcy5vbkNvbGxhcHNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25UYWJUb2dnbGVkID0gdGhpcy5vblRhYlRvZ2dsZWQuYmluZCh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3Muc3BlY2lhbFByb2R1Y3RzVGFiX21vcmUpIHtcbiAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLnNob3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMuZ3FsID0gbmV3IFNwZWNpYWxQcm9kdWN0c0dyYXBoUUxRdWVyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAkKCdib2R5Jykub25lKCdiZWZvcmVsb2FkLmluc3RhbnRsb2FkJywgKCkgPT4gdGhpcy51bmJpbmRFdmVudHMoKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHZpZXdwb3J0Q2hlY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkIHJlc2l6ZSBzY3JvbGwnLCB0aGlzLm9uQ2hlY2tWaWV3cG9ydCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3Muc3BlY2lhbFByb2R1Y3RzVGFiX21vcmUpIHtcbiAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLm9uKCdjbGljaycsIHRoaXMub25Mb2FkTW9yZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRjb2xsYXBzZS5vbignY2xpY2snLCB0aGlzLm9uQ29sbGFwc2UpO1xuXG4gICAgICAgICQoJ1tkYXRhLXRhYl0nLCB0aGlzLiRzY29wZSkub24oJ3RvZ2dsZWQnLCB0aGlzLm9uVGFiVG9nZ2xlZCk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkIHJlc2l6ZSBzY3JvbGwnLCB0aGlzLm9uQ2hlY2tWaWV3cG9ydCk7XG4gICAgICAgIHRoaXMuJGxvYWRNb3JlLm9mZignY2xpY2snLCB0aGlzLm9uTG9hZE1vcmUpO1xuICAgICAgICB0aGlzLiRjb2xsYXBzZS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNvbGxhcHNlKTtcbiAgICAgICAgJCgnW2RhdGEtdGFiXScsIHRoaXMuJHNjb3BlKS5vZmYoJ3RvZ2dsZWQnLCB0aGlzLm9uVGFiVG9nZ2xlZCk7XG4gICAgfVxuXG4gICAgb25DaGVja1ZpZXdwb3J0KCkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSAyNTA7XG5cbiAgICAgICAgdGhpcy4kdmlld3BvcnRDaGVjay5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG5cbiAgICAgICAgICAgIGlmICghJGVsLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBlbFRvcCA9ICRlbC5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICBjb25zdCBlbEJvdHRvbSA9IGVsVG9wICsgJGVsLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICBjb25zdCB3aW5Ub3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICBjb25zdCB3aW5Cb3R0b20gPSB3aW5Ub3AgKyAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKTtcblxuICAgICAgICAgICAgaWYgKGVsVG9wIC0gb2Zmc2V0IDwgd2luQm90dG9tICYmIGVsQm90dG9tICsgb2Zmc2V0ID4gd2luVG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVmlld3BvcnRQcm9kdWN0cyhcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ3ZpZXdwb3J0Q2hlY2snKSxcbiAgICAgICAgICAgICAgICAgICAgJGVsLmNsb3Nlc3QoJy50YWItY29udGVudCcpLmZpbmQoJy5wcm9kdWN0R3JpZCwgLnByb2R1Y3RMaXN0LCAucHJvZHVjdENhcm91c2VsJyksXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJHZpZXdwb3J0Q2hlY2sgPSB0aGlzLiR2aWV3cG9ydENoZWNrLm5vdCgkZWwpO1xuICAgICAgICAgICAgICAgICRlbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Mb2FkTW9yZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICR0YWIgPSB0aGlzLiRzY29wZS5maW5kKCcudGFiLWNvbnRlbnQuaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgaWYgKCEkdGFiLmRhdGEoJ2xvYWRlZE1vcmUnKSkge1xuICAgICAgICAgICAgJHRhYi5kYXRhKCdsb2FkZWRNb3JlJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gNTA7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gJHRhYi5kYXRhKCdwcm9kdWN0VHlwZScpO1xuXG4gICAgICAgICAgICB0aGlzLiRsb2FkaW5nLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ3FsLmxvYWQodHlwZSwgJycsIGxpbWl0LCB0cnVlKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGxvYWRpbmcuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy50ZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlZFByb2R1Y3RzOiBkYXRhLmZlYXR1cmVkUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q2FyZEh0bWw6IG11c3RhY2hlLnJlbmRlcihwcm9kdWN0Q2FyZFRlbXBsYXRlLCBwcm9kdWN0KSxcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICBiZXN0c2VsbGluZ1Byb2R1Y3RzOiBkYXRhLmJlc3RzZWxsaW5nUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q2FyZEh0bWw6IG11c3RhY2hlLnJlbmRlcihwcm9kdWN0Q2FyZFRlbXBsYXRlLCBwcm9kdWN0KSxcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICBuZXdlc3RQcm9kdWN0czogZGF0YS5uZXdlc3RQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDYXJkSHRtbDogbXVzdGFjaGUucmVuZGVyKHByb2R1Y3RDYXJkVGVtcGxhdGUsIHByb2R1Y3QpLFxuICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdFByb2R1Y3RJZHMgPSAkdGFiXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcucHJvZHVjdCwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGksIGVsKSA9PiAkKGVsKS5kYXRhKCdwcm9kdWN0SWQnKSkuZ2V0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdHMgPSAkKGh0bWwpXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcucHJvZHVjdCwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGksIGVsKSA9PiBleGlzdFByb2R1Y3RJZHMuaW5kZXhPZigkKGVsKS5kYXRhKCdwcm9kdWN0SWQnKSkgPT09IC0xKTtcblxuICAgICAgICAgICAgICAgICRwcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UodGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudClcbiAgICAgICAgICAgICAgICAgICAgLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICR0YWJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5wcm9kdWN0R3JpZCwgLnByb2R1Y3RMaXN0LCAucHJvZHVjdENhcm91c2VsJylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkcHJvZHVjdHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEkcHJvZHVjdHMuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRwcm9kdWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNlLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0cyA9ICR0YWIuZmluZCgnLnByb2R1Y3QsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5maWx0ZXIoJzpoaWRkZW4nKTtcblxuICAgICAgICAgICAgJHByb2R1Y3RzXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIHRoaXMuZGVmYXVsdFByb2R1Y3RzQ291bnQpXG4gICAgICAgICAgICAgICAgLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKCEkcHJvZHVjdHMuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kY29sbGFwc2Uuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db2xsYXBzZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICR0YWIgPSB0aGlzLiRzY29wZS5maW5kKCcudGFiLWNvbnRlbnQuaXMtYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0cyA9ICR0YWIuZmluZCgnLnByb2R1Y3QsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKTtcblxuICAgICAgICAkcHJvZHVjdHMuc2xpY2UodGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudCkuaGlkZSgpO1xuXG4gICAgICAgIHRoaXMuJGNvbGxhcHNlLmhpZGUoKTtcblxuICAgICAgICBpZiAoJHByb2R1Y3RzLmxlbmd0aCA+IHRoaXMuZGVmYXVsdFByb2R1Y3RzQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLnNob3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJHRhYi5vZmZzZXQoKS50b3AsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVGFiVG9nZ2xlZChldmVudCwgdGFiKSB7XG4gICAgICAgIGNvbnN0ICR0YWJDb250ZW50ID0gJCgkKCdhJywgdGFiKS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgICQoJ1tkYXRhLXNsaWNrXScsICR0YWJDb250ZW50KS5zbGljaygnc2V0UG9zaXRpb24nKTtcblxuICAgICAgICBpZiAodGhpcy4kdmlld3BvcnRDaGVjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hlY2tWaWV3cG9ydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgJHByb2R1Y3RzID0gJHRhYkNvbnRlbnQuZmluZCgnLnByb2R1Y3QsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKTtcbiAgICAgICAgY29uc3QgdmlzaWJsZSA9ICRwcm9kdWN0cy5maWx0ZXIoJzp2aXNpYmxlJykubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5zcGVjaWFsUHJvZHVjdHNUYWJfbW9yZSkge1xuICAgICAgICAgICAgaWYgKCEkdGFiQ29udGVudC5kYXRhKCdsb2FkZWRNb3JlJykgfHwgJHByb2R1Y3RzLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZpc2libGUgPiB0aGlzLmRlZmF1bHRQcm9kdWN0c0NvdW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29sbGFwc2Uuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzZS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBsb2FkVmlld3BvcnRQcm9kdWN0cyh0eXBlLCAkY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuJGxvYWRpbmcuc2hvdygpO1xuXG4gICAgICAgIGNvbnN0IGxpbWl0ID0gdGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudDtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZ3FsLmxvYWQodHlwZSwgJycsIGxpbWl0LCB0cnVlKTtcblxuICAgICAgICB0aGlzLiRsb2FkaW5nLmhpZGUoKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy50ZW1wbGF0ZSwge1xuICAgICAgICAgICAgZmVhdHVyZWRQcm9kdWN0czogZGF0YS5mZWF0dXJlZFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q2FyZEh0bWw6IG11c3RhY2hlLnJlbmRlcihwcm9kdWN0Q2FyZFRlbXBsYXRlLCBwcm9kdWN0KSxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIGJlc3RzZWxsaW5nUHJvZHVjdHM6IGRhdGEuYmVzdHNlbGxpbmdQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgcHJvZHVjdENhcmRIdG1sOiBtdXN0YWNoZS5yZW5kZXIocHJvZHVjdENhcmRUZW1wbGF0ZSwgcHJvZHVjdCksXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBuZXdlc3RQcm9kdWN0czogZGF0YS5uZXdlc3RQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgcHJvZHVjdENhcmRIdG1sOiBtdXN0YWNoZS5yZW5kZXIocHJvZHVjdENhcmRUZW1wbGF0ZSwgcHJvZHVjdCksXG4gICAgICAgICAgICB9KSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0cyA9ICQoaHRtbCkuZmluZCgnLnByb2R1Y3QsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKTtcbiAgICAgICAgJGNvbnRhaW5lci5lbXB0eSgpLmFwcGVuZCgkcHJvZHVjdHMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCh7IHNlbGVjdG9yID0gJ1tkYXRhLXNwZWNpYWwtcHJvZHVjdHMtdGFic10nLCBjb250ZXh0IH0pIHtcbiAgICAkKHNlbGVjdG9yKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgaWYgKCEkZWwuZGF0YSgnc3BlY2lhbFByb2R1Y3RzVGFic0luc3RhbmNlJykpIHtcbiAgICAgICAgICAgICRlbC5kYXRhKCdzcGVjaWFsUHJvZHVjdHNUYWJzSW5zdGFuY2UnLCBuZXcgU3BlY2lhbFByb2R1Y3RzVGFicygkZWwsIGNvbnRleHQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSBmcm9tICcuLi90aGVtZS9jb21tb24vbWVkaWEtcXVlcnktbGlzdCc7XG5cbmxldCB1aWQgPSAxO1xuXG5jbGFzcyBZb3V0dWJlU2xpY2sge1xuICAgIGNvbnN0cnVjdG9yKHNsaWNrKSB7XG4gICAgICAgIHRoaXMuJHNsaWNrID0gJChzbGljayk7XG4gICAgICAgIHRoaXMuJHZpZGVvcyA9IHRoaXMuJHNsaWNrLmZpbmQoJ1tkYXRhLXlvdXR1YmVdJyk7XG4gICAgICAgIHRoaXMub25TbGlja0luaXQgPSB0aGlzLm9uU2xpY2tJbml0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25TbGlja0JlZm9yZUNoYW5nZSA9IHRoaXMub25TbGlja0JlZm9yZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU2xpY2tBZnRlckNoYW5nZSA9IHRoaXMub25TbGlja0FmdGVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSA9IHRoaXMub25QbGF5ZXJSZWFkeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2UgPSB0aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuJHNsaWNrLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICB0aGlzLm9uU2xpY2tJbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRzbGljay5vbignaW5pdCcsIHRoaXMub25TbGlja0luaXQpO1xuICAgICAgICB0aGlzLiRzbGljay5vbignYmVmb3JlQ2hhbmdlJywgdGhpcy5vblNsaWNrQmVmb3JlQ2hhbmdlKTtcbiAgICAgICAgdGhpcy4kc2xpY2sub24oJ2FmdGVyQ2hhbmdlJywgdGhpcy5vblNsaWNrQWZ0ZXJDaGFuZ2UpO1xuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcbiAgICAgICAgLy8gc3RvcmUgcGxheWVyIG9iamVjdCBmb3IgdXNlIGxhdGVyXG4gICAgICAgICQoZXZlbnQudGFyZ2V0LmdldElmcmFtZSgpKS5jbG9zZXN0KCcuc2xpY2stc2xpZGUnKS5kYXRhKCd5b3V0dWJlLXBsYXllcicsIGV2ZW50LnRhcmdldCk7XG5cbiAgICAgICAgdGhpcy4kc2xpY2suYWRkQ2xhc3MoJ3NsaWNrLXZpZGVvLXBsYXlpbmcnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQuZ2V0SWZyYW1lKCkpLmNsb3Nlc3QoJy5zbGljay1zbGlkZScpLmhhc0NsYXNzKCdzbGljay1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRzbGljay5pcygnW2RhdGEteW91dHViZS1tdXRlXScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5tdXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRzbGljay5pcygnW2RhdGEteW91dHViZS1hdXRvcGxheV0nKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzbGljay5zbGljaygnc2xpY2tQYXVzZScpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQucGxheVZpZGVvKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIG9uUGxheWVyU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgLy8gU3RvcCBzbGljayBhdXRvcGxheSB3aGVuIHZpZGVvIHN0YXJ0IHBsYXlpbmdcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT09IFlULlBsYXllclN0YXRlLlBMQVlJTkcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgdGhpcy4kc2xpY2suYWRkQ2xhc3MoJ3NsaWNrLXZpZGVvLXBsYXlpbmcnKTtcbiAgICAgICAgICAgIHRoaXMuJHNsaWNrLnNsaWNrKCdzbGlja1BhdXNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuZGF0YSA9PT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIHRoaXMuJHNsaWNrLnJlbW92ZUNsYXNzKCdzbGljay12aWRlby1wbGF5aW5nJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnbyB0byBuZXh0IHNsaWRlIGFuZCBlbmFibGUgYXV0b3BsYXkgYmFjayB3aGVuIHZpZGVvIGVuZGVkXG4gICAgICAgIGlmIChldmVudC5kYXRhID09PSBZVC5QbGF5ZXJTdGF0ZS5FTkRFRCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICB0aGlzLiRzbGljay5yZW1vdmVDbGFzcygnc2xpY2stdmlkZW8tcGxheWluZycpO1xuICAgICAgICAgICAgdGhpcy4kc2xpY2suc2xpY2soJ3NsaWNrUGxheScpO1xuICAgICAgICAgICAgdGhpcy4kc2xpY2suc2xpY2soJ3NsaWNrTmV4dCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TbGlja0luaXQoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5lYWNoKChqLCB2aWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR2aWQgPSAkKHZpZCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGB5b3V0dWJlX3BsYXllcl8ke3VpZCsrfWA7XG5cbiAgICAgICAgICAgICR2aWQuYXR0cignaWQnLCBpZCk7XG5cbiAgICAgICAgICAgIC8vIGluaXQgcGxheWVyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKGlkLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICAvLyBob3N0OiAnaHR0cDovL3d3dy55b3V0dWJlLmNvbScsXG4gICAgICAgICAgICAgICAgdmlkZW9JZDogJHZpZC5kYXRhKCd5b3V0dWJlJyksXG4gICAgICAgICAgICAgICAgd21vZGU6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sczogMCxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWtiOiAxLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVqc2FwaTogMSxcbiAgICAgICAgICAgICAgICAgICAgZnM6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJlbDogMCxcbiAgICAgICAgICAgICAgICAgICAgc2hvd2luZm86IDAsXG4gICAgICAgICAgICAgICAgICAgIGl2X2xvYWRfcG9saWN5OiAzLFxuICAgICAgICAgICAgICAgICAgICBtb2Rlc3RicmFuZGluZzogMSxcbiAgICAgICAgICAgICAgICAgICAgd21vZGU6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIC8vIGF1dG9wbGF5OiAxLFxuICAgICAgICAgICAgICAgICAgICBwbGF5c2lubGluZTogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgICAgICBvblJlYWR5OiB0aGlzLm9uUGxheWVyUmVhZHksXG4gICAgICAgICAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2U6IHRoaXMub25QbGF5ZXJTdGF0ZUNoYW5nZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU2xpY2tCZWZvcmVDaGFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMuJHNsaWNrLmZpbmQoJy5zbGljay1zbGlkZS5zbGljay1hY3RpdmUnKS5kYXRhKCd5b3V0dWJlLXBsYXllcicpO1xuICAgICAgICBpZiAocGxheWVyKSB7XG4gICAgICAgICAgICBwbGF5ZXIuc3RvcFZpZGVvKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNsaWNrQWZ0ZXJDaGFuZ2UoKSB7XG4gICAgICAgIC8vIEVuYWJsZSBhdXRvIHNsaWRlXG4gICAgICAgIHRoaXMuJHNsaWNrLnNsaWNrKCdzbGlja1BsYXknKTtcblxuICAgICAgICAvLyBPbiBkZXNrdG9wOlxuICAgICAgICAvLyAtIEF1dG8gcGxheSB2aWRlbyB3aGVuIG9wZW4gbmV4dCBzbGlkZVxuICAgICAgICAvLyAtIFN0b3AgYXV0byBzbGlkZVxuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLiRzbGljay5maW5kKCcuc2xpY2stc2xpZGUuc2xpY2stYWN0aXZlJykuZGF0YSgneW91dHViZS1wbGF5ZXInKTtcbiAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuJHNsaWNrLmlzKCdbZGF0YS15b3V0dWJlLW11dGVdJykpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubXV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuJHNsaWNrLmlzKCdbZGF0YS15b3V0dWJlLWF1dG9wbGF5XScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2xpY2suc2xpY2soJ3NsaWNrUGF1c2UnKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDYXJvdXNlbCgkY2Fyb3VzZWwpIHtcbiAgICAkY2Fyb3VzZWwuZWFjaCgoaSwgc2xpY2spID0+IHtcbiAgICAgICAgY29uc3QgJHNsaWNrID0gJChzbGljayk7XG4gICAgICAgIGlmICgkc2xpY2suZmluZCgnW2RhdGEteW91dHViZV0nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkc2xpY2suYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlci0tdmlkZW8nKTtcbiAgICAgICAgICAgIG5ldyBZb3V0dWJlU2xpY2soc2xpY2spOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24geW91dHViZUNhcm91c2VsRmFjdG9yeSgkY2Fyb3VzZWwpIHtcbiAgICBpZiAoJGNhcm91c2VsLmZpbmQoJ1tkYXRhLXlvdXR1YmVdJykubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGluaXRDYXJvdXNlbC5iaW5kKHdpbmRvdywgJGNhcm91c2VsKTtcblxuICAgICAgICAgICAgLy8gTG9hZCB0aGUgSUZyYW1lIFBsYXllciBBUEkgY29kZSBhc3luY2hyb25vdXNseS5cbiAgICAgICAgICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgdGFnLm5vbmNlID0gd2luZG93Ll9fd2VicGFja19ub25jZV9fO1xuICAgICAgICAgICAgdGFnLnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9wbGF5ZXJfYXBpJztcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICAgICAgZmlyc3RTY3JpcHRUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFnLCBmaXJzdFNjcmlwdFRhZyk7XG5cbiAgICAgICAgICAgIC8vICQoJ2JvZHknKS5hcHBlbmQoJzxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiPjwvc2NyaXB0PicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5pdENhcm91c2VsKCRjYXJvdXNlbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKipcbiAqIFRoaXMgZmlsZSBpcyBhZGRlZCBieSBTdXBlcm1hcmtldCB0aGVtZS5cbiAqL1xuXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBpbml0UHJvZHVjdHNCeUNhdGVnb3JpZXMgZnJvbSAnLi4vZW10aGVtZXMtbW9kZXovcHJvZHVjdHMtYnktY2F0ZWdvcnknO1xuaW1wb3J0IGluaXRTcGVjaWFsUHJvZHVjdHNUYWJzIGZyb20gJy4uL2VtdGhlbWVzLW1vZGV6L3NwZWNpYWwtcHJvZHVjdHMtdGFicyc7XG5pbXBvcnQgeW91dHViZUNhcm91c2VsRmFjdG9yeSBmcm9tICcuLi9lbXRoZW1lcy1tb2Rlei95b3V0dWJlLWNhcm91c2VsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICB0aGlzLmluaXRQcm9kdWN0c0J5Q2F0ZWdvcnlTZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuaW5pdFNwZWNpYWxQcm9kdWN0c1RhYnNTZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuaW5pdE1haW5DYXJvdXNlbFNlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5pbml0QnJhbmRzQ2Fyb3VzZWxTZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgaW5pdFByb2R1Y3RzQnlDYXRlZ29yeVNlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuaGFzUHJvZHVjdHNCeUNhdGVnb3J5U29ydGluZ1RhYnMpIHtcbiAgICAgICAgICAgIGluaXRQcm9kdWN0c0J5Q2F0ZWdvcmllcygnW2RhdGEtcGJjc3QtZ3JvdXBdJywgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRTcGVjaWFsUHJvZHVjdHNUYWJzU2VjdGlvbigpIHtcbiAgICAgICAgLy8gUmVmcmVzaCBwcm9kdWN0cyBjYXJvdXNlbCB3aGVuIHRhYiBpcyBvcGVuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuaGFzU3BlY2lhbFByb2R1Y3RzVGFicykge1xuICAgICAgICAgICAgaW5pdFNwZWNpYWxQcm9kdWN0c1RhYnMoeyBjb250ZXh0OiB0aGlzLmNvbnRleHQgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0TWFpbkNhcm91c2VsU2VjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5oYXNNYWluQ2Fyb3VzZWwpIHtcbiAgICAgICAgICAgIHlvdXR1YmVDYXJvdXNlbEZhY3RvcnkoJCgnW2RhdGEtc2xpY2tdJykpO1xuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gVXBkYXRlIG1haW4gc2xpZGVzaG93IG1pbi1oZWlnaHQgdG8gZXF1YWwgdGhlIHZlcnRpY2FsIGNhdGVnb3JpZXMgbWVudVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGNvbnN0ICRjYXRlZ29yaWVzTWVudSA9ICQoJ2JvZHkucGFwYVN1cGVybWFya2V0LWxheW91dC0tZGVmYXVsdCAuZW10aGVtZXNNb2Rlei12ZXJ0aWNhbENhdGVnb3JpZXMtLW9wZW4nKTtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlTWFpblNsaWRlc2hvd0hlaWdodCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuaGVyb0Nhcm91c2VsLXNsaWRlJykuY3NzKCdtaW4taGVpZ2h0JywgJCh3aW5kb3cpLndpZHRoKCkgPiA3NjggPyBgJHskY2F0ZWdvcmllc01lbnUuaGVpZ2h0KCkgKyAyMH1weGAgOiAnJyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoJGNhdGVnb3JpZXNNZW51Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVNYWluU2xpZGVzaG93SGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKSA9PiB1cGRhdGVNYWluU2xpZGVzaG93SGVpZ2h0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEJyYW5kc0Nhcm91c2VsU2VjdGlvbigpIHtcbiAgICAgICAgJCgnW2RhdGEtZW10aGVtZXNtb2Rlei1icmFuZC1jYXJvdXNlbF0nKS5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjYwLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwidmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvciIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwicmV0dXJuIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2luaGVyaXRzTG9vc2UiLCJjb25zdHJ1Y3RvciIsIl9zZXRQcm90b3R5cGVPZiIsInV0aWxzIiwibXVzdGFjaGUiLCJmb3VuZGF0aW9uIiwiU3VwZXJtYXJrZXRQcm9kdWN0Q2FyZHNHcmFwaFFMUXVlcnkiLCJwcm9kdWN0Q2FyZFRlbXBsYXRlIiwiZGVmYXVsdFByb2R1Y3RDYXJkVGVtcGxhdGUiLCJpc1JlcXVlc3RpbmdDYXRlZ29yeVBhZ2UiLCJDYXRlZ29yeVByb2R1Y3RzR3JhcGhRTFF1ZXJ5IiwiX1N1cGVybWFya2V0UHJvZHVjdENhIiwiX3Byb3RvIiwibG9hZCIsIl9sb2FkIiwiX2NhbGxlZSIsImNhdGVnb3J5SWQiLCJhZnRlckN1cnNvciIsImxpbWl0Iiwic29ydCIsImhpZGVPdXRPZlN0b2NrIiwiX3RoaXMiLCJjYWNoZUtleSIsIl9jb250ZXh0IiwiY3VycmVuY3lDb2RlIiwiY2FjaGVkUHJvZHVjdHMiLCIkIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJlbnRpdHlJZCIsImFmdGVyIiwiZmlyc3QiLCJzb3J0QnkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdyYXBoUUxUb2tlbiIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsInN1Y2Nlc3MiLCJyZXNwIiwiX3Jlc3AkZGF0YSRzaXRlJGNhdGVnIiwiX3Jlc3AkZGF0YSRzaXRlJGNhdGVnMiIsImNhdGVnb3J5IiwiYXNzaWduIiwic2l0ZSIsImNoaWxkcmVuIiwiY2F0ZWdvcnlUcmVlIiwiaGFzQ2hpbGRyZW4iLCJwcm9kdWN0cyIsIm1hcEdyYXBoUUxQcm9kdWN0cyIsInNldHRpbmdzIiwiY3VycmVuY3kiLCJwcm9kdWN0c0luZm8iLCJlbmRDdXJzb3IiLCJwYWdlSW5mbyIsImhhc05leHRQYWdlIiwiZXJyb3IiLCJfeCIsIl94MiIsIl94MyIsIl94NCIsIl94NSIsIlByb2R1Y3RzQnlDYXRlZ29yeSIsIl9yZWYiLCJpZCIsIl9yZWYkaW5kZXgiLCJpbmRleCIsIl9yZWYkc29ydCIsIl9yZWYkbGltaXQiLCIkcGFyZW50IiwiY29udGV4dCIsIl9yZWYkc2VjdGlvblRlbXBsYXRlIiwic2VjdGlvblRlbXBsYXRlIiwiX3JlZiRwcm9kdWN0c0xvYWRpbmdUIiwicHJvZHVjdHNMb2FkaW5nVGVtcGxhdGUiLCJfcmVmJHByb2R1Y3RzVGVtcGxhdGUiLCJwcm9kdWN0c1RlbXBsYXRlIiwib25Mb2FkTW9yZSIsIm9uQ29sbGFwc2UiLCIkc2NvcGUiLCIkbG9hZE1vcmUiLCIkY29sbGFwc2UiLCIkbG9hZGVyIiwiZ3FsIiwiYXBwZW5kIiwicmVxdWVzdCIsIl9wcm90bzIiLCJfcmVxdWVzdCIsIl9jYWxsZWUyIiwiX2NhdGVnb3J5JHByb2R1Y3RzIiwiaHRtbCIsIiRodG1sIiwiX3QiLCJfY29udGV4dDIiLCJjYXRlZ29yeVBhdGgiLCJwYXRoIiwicmVxdWVzdENhdGVnb3J5UGFnZU9uVmlld3BvcnQiLCJyZW1vdmUiLCJyZW5kZXIiLCJuYW1lIiwic2hvd0Jlc3RzZWxsaW5nIiwicGJjc3Rfc2hvd19iZXN0c2VsbGluZyIsImlzQmVzdHNlbGxpbmdBY3RpdmUiLCJ0eHRCZXN0c2VsbGluZ1RhYiIsInNob3dGZWF0dXJlZCIsInBiY3N0X3Nob3dfZmVhdHVyZWQiLCJpc0ZlYXR1cmVkQWN0aXZlIiwidHh0RmVhdHVyZWRUYWIiLCJzaG93TmV3IiwicGJjc3Rfc2hvd19uZXciLCJpc05ld0FjdGl2ZSIsInR4dE5ld1RhYiIsInNob3dSZXZpZXdzIiwicGJjc3Rfc2hvd19yZXZpZXdzIiwiaXNSZXZpZXdzQWN0aXZlIiwidHh0UmV2aWV3c1RhYiIsInNob3dCYW5uZXJPclN1YmNhdGVnb3JpZXMiLCJwYmNzdF9zaG93X2Jhbm5lciIsInBiY3N0X3N1YmNhdGVnb3JpZXMiLCJzaG93QmFubmVyIiwidHh0U3ViSGVhZGluZyIsInR4dFN1YmNhdGVnb3J5SGVhZGluZyIsInN1YmNhdGVnb3JpZXMiLCJzbGljZSIsIm1hcCIsImNhdCIsInByb2R1Y3RzSHRtbCIsImdlbmVyYXRlUHJvZHVjdHNIdG1sIiwicHJvZHVjdHNMb2FkaW5nSHRtbCIsImxvYWRpbmdJbWFnZSIsInByb2R1Y3RMb2FkaW5nSW1hZ2UiLCJ0eHRMb2FkTW9yZSIsInR4dENvbGxhcHNlIiwicmVwbGFjZVdpdGgiLCJmaW5kIiwiaW5pdFRhYnMiLCJpbml0U2xpY2siLCJpbml0QmFubmVyIiwiaW5pdEJ1dHRvbnMiLCJfdGhpczIiLCIkc3B0TG9hZGluZyIsIm9uQ2hlY2tWaWV3cG9ydCIsIl90aHJvdHRsZSIsImlzIiwib2Zmc2V0IiwiZWxUb3AiLCJ0b3AiLCJlbEJvdHRvbSIsIm91dGVySGVpZ2h0Iiwid2luVG9wIiwid2luZG93Iiwic2Nyb2xsVG9wIiwid2luQm90dG9tIiwiaW5uZXJIZWlnaHQiLCJvZmYiLCJyZXF1ZXN0Q2F0ZWdvcnlQYWdlIiwib24iLCJfdGhpczMiLCJ0YXNrIiwibGltaXRRdWVyeSIsInNvcnRRdWVyeSIsInRlbXBsYXRlIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsIiRyZXNwIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJfdGhpczQiLCJtYXhDb2x1bW5zIiwicGJjc3RfcHJvZHVjdHMiLCJwcm9kdWN0IiwicHJvZHVjdENhcmRIdG1sIiwibG9hZFByb2R1Y3RzIiwiX2xvYWRQcm9kdWN0cyIsIl9jYWxsZWUzIiwiX3JlZjIiLCJfY2F0ZWdvcnkkcHJvZHVjdHMyIiwiX3JlZjIkc29ydCIsIl9yZWYyJGFmdGVyQ3Vyc29yIiwiJGNvbnRlbnQiLCJzb3J0UGFyYW0iLCJfY2F0ZWdvcnkkY2hpbGRyZW4kIiwiY2F0SWQiLCJzdWIiLCJfY2F0ZWdvcnkkcHJvZHVjdHNJbmYiLCIkcHJvZHVjdEdyaWRDb250YWluZXIiLCJfdDIiLCJfY29udGV4dDMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2hvdyIsImhpZGUiLCJfeDYiLCJsb2FkUHJvZHVjdHNGcm9tQ2F0ZWdvcnlQYWdlIiwiX3JlZjMiLCJfdGhpczUiLCJfcmVmMyRzb3J0IiwiX3JlZjMkcGFnZSIsInBhZ2UiLCJwYWdlUXVlcnkiLCIkY3VycmVudFBhZ2UiLCJjdXJyZW50UGFnZSIsIkJvb2xlYW4iLCJfdGhpczYiLCIkYWN0aXZlVGFiQ29udGVudCIsImV2ZW50IiwidGFiIiwiYXR0ciIsIk51bWJlciIsInNldFRpbWVvdXQiLCJ0YXJnZXQiLCJlYWNoIiwiZWwiLCJzbGljayIsIiRpbWciLCJzcmMiLCJjb25maWd1cmF0aW9uSWQiLCJoYXNDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiJGhpZGUiLCIkdGFiIiwiYW5pbWF0ZSIsIlByb2R1Y3RzQnlDYXRlZ29yaWVzIiwibGF6eSIsImxvYWRlZCIsImJpbmRFdmVudHMiLCJfcHJvdG8zIiwiX3RoaXM3IiwiU3RyaW5nIiwic3BsaXQiLCJpZFN0ciIsInRyaW0iLCJfdGhpczgiLCJvbmUiLCJ1bmJpbmRFdmVudHMiLCJpbml0Iiwic2VsZWN0b3IiLCJTcGVjaWFsUHJvZHVjdHNHcmFwaFFMUXVlcnkiLCJ0eXBlIiwibmV3ZXN0UHJvZHVjdHMiLCJuZXdlc3RQcm9kdWN0c0luZm8iLCJiZXN0c2VsbGluZ1Byb2R1Y3RzIiwiYmVzdFNlbGxpbmdQcm9kdWN0cyIsImJlc3RzZWxsaW5nUHJvZHVjdHNJbmZvIiwiZmVhdHVyZWRQcm9kdWN0cyIsImZlYXR1cmVkUHJvZHVjdHNJbmZvIiwiU3BlY2lhbFByb2R1Y3RzVGFicyIsIiR2aWV3cG9ydENoZWNrIiwiJGxvYWRpbmciLCJkZWZhdWx0UHJvZHVjdHNDb3VudCIsInRoZW1lU2V0dGluZ3MiLCJzcGVjaWFsUHJvZHVjdHNUYWJfbGF6eV9jb3VudCIsInNwZWNpYWxQcm9kdWN0c1RhYl9pbml0X2NvdW50Iiwib25UYWJUb2dnbGVkIiwic3BlY2lhbFByb2R1Y3RzVGFiX21vcmUiLCIkZWwiLCJsb2FkVmlld3BvcnRQcm9kdWN0cyIsImNsb3Nlc3QiLCJub3QiLCJyZW1vdmVBdHRyIiwiZXhpc3RQcm9kdWN0SWRzIiwiZ2V0IiwiJHByb2R1Y3RzIiwiZmlsdGVyIiwiaW5kZXhPZiIsIiR0YWJDb250ZW50IiwidmlzaWJsZSIsIl9sb2FkVmlld3BvcnRQcm9kdWN0cyIsIiRjb250YWluZXIiLCJlbXB0eSIsIl9yZWYkc2VsZWN0b3IiLCJtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkiLCJ1aWQiLCJZb3V0dWJlU2xpY2siLCIkc2xpY2siLCIkdmlkZW9zIiwib25TbGlja0luaXQiLCJvblNsaWNrQmVmb3JlQ2hhbmdlIiwib25TbGlja0FmdGVyQ2hhbmdlIiwib25QbGF5ZXJSZWFkeSIsIm9uUGxheWVyU3RhdGVDaGFuZ2UiLCJnZXRJZnJhbWUiLCJtdXRlIiwicGxheVZpZGVvIiwiWVQiLCJQbGF5ZXJTdGF0ZSIsIlBMQVlJTkciLCJQQVVTRUQiLCJFTkRFRCIsImoiLCJ2aWQiLCIkdmlkIiwicGxheWVyIiwiUGxheWVyIiwidmlkZW9JZCIsIndtb2RlIiwicGxheWVyVmFycyIsImNvbnRyb2xzIiwiZGlzYWJsZWtiIiwiZW5hYmxlanNhcGkiLCJmcyIsInJlbCIsInNob3dpbmZvIiwiaXZfbG9hZF9wb2xpY3kiLCJtb2Rlc3RicmFuZGluZyIsInBsYXlzaW5saW5lIiwiZXZlbnRzIiwib25SZWFkeSIsIm9uU3RhdGVDaGFuZ2UiLCJzdG9wVmlkZW8iLCJpbml0Q2Fyb3VzZWwiLCIkY2Fyb3VzZWwiLCJ5b3V0dWJlQ2Fyb3VzZWxGYWN0b3J5Iiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJ0YWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJub25jZSIsIl9fd2VicGFja19ub25jZV9fIiwiZmlyc3RTY3JpcHRUYWciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJQYWdlTWFuYWdlciIsImluaXRQcm9kdWN0c0J5Q2F0ZWdvcmllcyIsImluaXRTcGVjaWFsUHJvZHVjdHNUYWJzIiwiSG9tZSIsIl9QYWdlTWFuYWdlciIsImluaXRQcm9kdWN0c0J5Q2F0ZWdvcnlTZWN0aW9uIiwiaW5pdFNwZWNpYWxQcm9kdWN0c1RhYnNTZWN0aW9uIiwiaW5pdE1haW5DYXJvdXNlbFNlY3Rpb24iLCJpbml0QnJhbmRzQ2Fyb3VzZWxTZWN0aW9uIiwiaGFzUHJvZHVjdHNCeUNhdGVnb3J5U29ydGluZ1RhYnMiLCJoYXNTcGVjaWFsUHJvZHVjdHNUYWJzIiwiaGFzTWFpbkNhcm91c2VsIiwiJGNhdGVnb3JpZXNNZW51IiwidXBkYXRlTWFpblNsaWRlc2hvd0hlaWdodCIsImNzcyIsIndpZHRoIiwiaGVpZ2h0IiwiZG90cyIsImluZmluaXRlIiwibW9iaWxlRmlyc3QiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=
