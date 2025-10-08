"use strict";
(self["webpackChunkpapathemes_supermarket"] = self["webpackChunkpapathemes_supermarket"] || []).push([["assets_js_theme_brands_js"],{

/***/ "./assets/js/emthemes-modez/azbrands.js":
/*!**********************************************!*\
  !*** ./assets/js/emthemes-modez/azbrands.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AZBrands)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");


var AZBrands = /*#__PURE__*/function () {
  function AZBrands() {}
  var _proto = AZBrands.prototype;
  _proto.onReady = function onReady() {
    var $brands = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-brands-list]');
    if ($brands.length > 0) {
      var $azBrands = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.getElementById($brands.data('azbrands')));
      if ($azBrands.length > 0) {
        this.generateAZBrands($azBrands);
        this.updateAZBrands($brands, $azBrands);
      }
      var url = $brands.data('brands-list-next');
      if (url) {
        this.loadMoreBrands($brands, url, true);
      }
    }
  };
  _proto.generateAZBrands = function generateAZBrands($azBrands) {
    var azBrandsTableID = $azBrands.attr('id') + "Table";
    var $azBrandsTable = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + azBrandsTableID);
    $azBrandsTable.append('<li data-letter=""><a href="#">All</a></li>');
    for (var i = 97; i <= 123; i++) {
      var ch = '#';
      if (i < 123) {
        ch = String.fromCharCode(i);
      }
      $azBrands.append("<div class=\"azBrands-group\" data-letter=\"" + ch + "\" id=\"azBrands-code-" + i + "\"><h3 class=\"azBrands-group-title\">" + ch + "</h3><ul class=\"brandGrid\"></ul><p class=\"azBrands-group-topLink\"><a href=\"#topOfPage\">Top of Page</a></p></div>");
      $azBrandsTable.append("<li data-letter=\"" + ch + "\"><a href=\"#azBrands-code-" + i + "\" data-target=\"azBrands-code-" + i + "\">" + ch + "</a></li>");
    }
    $azBrands.children().addClass('is-active');
    $azBrandsTable.children().first().addClass('is-active');
    $azBrandsTable.on('click', 'a', function (event) {
      event.preventDefault();
      var $a = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target);
      $azBrandsTable.children('li').removeClass('is-active');
      $a.addClass('is-active');
      var target = $a.data('target');
      if (target) {
        $azBrands.children('.azBrands-group').removeClass('is-active');
        $azBrands.children("#" + target).addClass('is-active');
      } else {
        $azBrands.children('.azBrands-group').addClass('is-active');
      }
    });
  };
  _proto.updateAZBrands = function updateAZBrands($brands, $azBrands) {
    var $azBrandsTable = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + $azBrands.attr('id') + "Table");
    $brands.children('.brand').each(function (i, el) {
      var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var code = String($el.data('brand-code'));
      var letter = code.charAt(0).toLowerCase();
      var $group = $azBrands.children("[data-letter=" + letter + "]");
      if ($group.length === 0) {
        $group = $azBrands.children().last();
      }
      var $li = $azBrandsTable.children("[data-letter=" + letter + "]");
      if ($li.length === 0) {
        $li = $azBrandsTable.children().last();
      }
      var $brandGrid = $group.find('.brandGrid');
      var $elIns;
      $brandGrid.children('.brand').each(function (j, el2) {
        var $el2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el2);
        var code2 = $el2.data('brand-code');
        if (code < code2) {
          $elIns = $el2;
        } else {
          return false;
        }
      });
      if ($elIns) {
        $el.insertAfter($elIns);
      } else {
        $el.appendTo($brandGrid);
      }
    });
  };
  _proto.loadMoreBrands = function loadMoreBrands($brands, url, recursive) {
    var _this = this;
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.getPage(url, {
      template: 'papa-supermarket/brands/brands-list',
      config: {
        brands: {
          limit: 100
        }
      }
    }, function (err, resp) {
      var $brandsList = jquery__WEBPACK_IMPORTED_MODULE_0___default()(resp).find('[data-brands-list]');
      $brands.append($brandsList.children());
      var $azBrands = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.getElementById($brands.data('azbrands')));
      if ($azBrands.length > 0) {
        _this.updateAZBrands($brands, $azBrands);
      }
      var nextUrl = $brandsList.data('brands-list-next');
      if (nextUrl && recursive) {
        _this.loadMoreBrands($brands, nextUrl, recursive);
      }
    });
  };
  return AZBrands;
}();


/***/ }),

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brands)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _emthemes_modez_azbrands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emthemes-modez/azbrands */ "./assets/js/emthemes-modez/azbrands.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Brands = /*#__PURE__*/function (_PageManager) {
  function Brands() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Brands, _PageManager);
  var _proto = Brands.prototype;
  _proto.onReady = function onReady() {
    if (this.context.themeSettings.brandspage_layout === 'aztable') {
      var azbrands = new _emthemes_modez_azbrands__WEBPACK_IMPORTED_MODULE_1__["default"]();
      azbrands.onReady();
    }
  };
  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZHNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUN3QjtBQUFBLElBRTFCRSxRQUFRO0VBQUEsU0FBQUEsU0FBQTtFQUFBLElBQUFDLE1BQUEsR0FBQUQsUUFBQSxDQUFBRSxTQUFBO0VBQUFELE1BQUEsQ0FDekJFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTixJQUFNQyxPQUFPLEdBQUdOLDZDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDdkMsSUFBSU0sT0FBTyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3BCLElBQU1DLFNBQVMsR0FBR1IsNkNBQUMsQ0FBQ1MsUUFBUSxDQUFDQyxjQUFjLENBQUNKLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7TUFDdEUsSUFBSUgsU0FBUyxDQUFDRCxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLElBQUksQ0FBQ0ssZ0JBQWdCLENBQUNKLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUNLLGNBQWMsQ0FBQ1AsT0FBTyxFQUFFRSxTQUFTLENBQUM7TUFDM0M7TUFFQSxJQUFNTSxHQUFHLEdBQUdSLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDLGtCQUFrQixDQUFDO01BQzVDLElBQUlHLEdBQUcsRUFBRTtRQUNMLElBQUksQ0FBQ0MsY0FBYyxDQUFDVCxPQUFPLEVBQUVRLEdBQUcsRUFBRSxJQUFJLENBQUM7TUFDM0M7SUFDSjtFQUNKLENBQUM7RUFBQVgsTUFBQSxDQUVEUyxnQkFBZ0IsR0FBaEIsU0FBQUEsZ0JBQWdCQSxDQUFDSixTQUFTLEVBQUU7SUFDeEIsSUFBTVEsZUFBZSxHQUFNUixTQUFTLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBTztJQUN0RCxJQUFNQyxjQUFjLEdBQUdsQiw2Q0FBQyxPQUFLZ0IsZUFBaUIsQ0FBQztJQUUvQ0UsY0FBYyxDQUFDQyxNQUFN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QTZELE1BQUE7QUFBQSxFQU4rQkQscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBhdGhlbWVzLXN1cGVybWFya2V0Ly4vYXNzZXRzL2pzL2VtdGhlbWVzLW1vZGV6L2F6YnJhbmRzLmpzIiwid2VicGFjazovL3BhcGF0aGVtZXMtc3VwZXJtYXJrZXQvLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBWkJyYW5kcyB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgJGJyYW5kcyA9ICQoJ1tkYXRhLWJyYW5kcy1saXN0XScpO1xuICAgICAgICBpZiAoJGJyYW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCAkYXpCcmFuZHMgPSAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCRicmFuZHMuZGF0YSgnYXpicmFuZHMnKSkpO1xuICAgICAgICAgICAgaWYgKCRhekJyYW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUFaQnJhbmRzKCRhekJyYW5kcyk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBWkJyYW5kcygkYnJhbmRzLCAkYXpCcmFuZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB1cmwgPSAkYnJhbmRzLmRhdGEoJ2JyYW5kcy1saXN0LW5leHQnKTtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNb3JlQnJhbmRzKCRicmFuZHMsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZUFaQnJhbmRzKCRhekJyYW5kcykge1xuICAgICAgICBjb25zdCBhekJyYW5kc1RhYmxlSUQgPSBgJHskYXpCcmFuZHMuYXR0cignaWQnKX1UYWJsZWA7XG4gICAgICAgIGNvbnN0ICRhekJyYW5kc1RhYmxlID0gJChgIyR7YXpCcmFuZHNUYWJsZUlEfWApO1xuXG4gICAgICAgICRhekJyYW5kc1RhYmxlLmFwcGVuZCgnPGxpIGRhdGEtbGV0dGVyPVwiXCI+PGEgaHJlZj1cIiNcIj5BbGw8L2E+PC9saT4nKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gOTc7IGkgPD0gMTIzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaCA9ICcjJztcbiAgICAgICAgICAgIGlmIChpIDwgMTIzKSB7XG4gICAgICAgICAgICAgICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGF6QnJhbmRzLmFwcGVuZChgPGRpdiBjbGFzcz1cImF6QnJhbmRzLWdyb3VwXCIgZGF0YS1sZXR0ZXI9XCIke2NofVwiIGlkPVwiYXpCcmFuZHMtY29kZS0ke2l9XCI+PGgzIGNsYXNzPVwiYXpCcmFuZHMtZ3JvdXAtdGl0bGVcIj4ke2NofTwvaDM+PHVsIGNsYXNzPVwiYnJhbmRHcmlkXCI+PC91bD48cCBjbGFzcz1cImF6QnJhbmRzLWdyb3VwLXRvcExpbmtcIj48YSBocmVmPVwiI3RvcE9mUGFnZVwiPlRvcCBvZiBQYWdlPC9hPjwvcD48L2Rpdj5gKTtcbiAgICAgICAgICAgICRhekJyYW5kc1RhYmxlLmFwcGVuZChgPGxpIGRhdGEtbGV0dGVyPVwiJHtjaH1cIj48YSBocmVmPVwiI2F6QnJhbmRzLWNvZGUtJHtpfVwiIGRhdGEtdGFyZ2V0PVwiYXpCcmFuZHMtY29kZS0ke2l9XCI+JHtjaH08L2E+PC9saT5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRhekJyYW5kcy5jaGlsZHJlbigpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgJGF6QnJhbmRzVGFibGUuY2hpbGRyZW4oKS5maXJzdCgpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAkYXpCcmFuZHNUYWJsZS5vbignY2xpY2snLCAnYScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgICAgICAgICRhekJyYW5kc1RhYmxlLmNoaWxkcmVuKCdsaScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICRhLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gJGEuZGF0YSgndGFyZ2V0Jyk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgJGF6QnJhbmRzLmNoaWxkcmVuKCcuYXpCcmFuZHMtZ3JvdXAnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJGF6QnJhbmRzLmNoaWxkcmVuKGAjJHt0YXJnZXR9YCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkYXpCcmFuZHMuY2hpbGRyZW4oJy5hekJyYW5kcy1ncm91cCcpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQVpCcmFuZHMoJGJyYW5kcywgJGF6QnJhbmRzKSB7XG4gICAgICAgIGNvbnN0ICRhekJyYW5kc1RhYmxlID0gJChgIyR7JGF6QnJhbmRzLmF0dHIoJ2lkJyl9VGFibGVgKTtcbiAgICAgICAgJGJyYW5kcy5jaGlsZHJlbignLmJyYW5kJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IFN0cmluZygkZWwuZGF0YSgnYnJhbmQtY29kZScpKTtcbiAgICAgICAgICAgIGNvbnN0IGxldHRlciA9IGNvZGUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGxldCAkZ3JvdXAgPSAkYXpCcmFuZHMuY2hpbGRyZW4oYFtkYXRhLWxldHRlcj0ke2xldHRlcn1dYCk7XG4gICAgICAgICAgICBpZiAoJGdyb3VwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICRncm91cCA9ICRhekJyYW5kcy5jaGlsZHJlbigpLmxhc3QoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0ICRsaSA9ICRhekJyYW5kc1RhYmxlLmNoaWxkcmVuKGBbZGF0YS1sZXR0ZXI9JHtsZXR0ZXJ9XWApO1xuICAgICAgICAgICAgaWYgKCRsaS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkbGkgPSAkYXpCcmFuZHNUYWJsZS5jaGlsZHJlbigpLmxhc3QoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGJyYW5kR3JpZCA9ICRncm91cC5maW5kKCcuYnJhbmRHcmlkJyk7XG5cbiAgICAgICAgICAgIGxldCAkZWxJbnM7XG4gICAgICAgICAgICAkYnJhbmRHcmlkLmNoaWxkcmVuKCcuYnJhbmQnKS5lYWNoKChqLCBlbDIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkZWwyID0gJChlbDIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGUyID0gJGVsMi5kYXRhKCdicmFuZC1jb2RlJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29kZSA8IGNvZGUyKSB7XG4gICAgICAgICAgICAgICAgICAgICRlbElucyA9ICRlbDI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCRlbElucykge1xuICAgICAgICAgICAgICAgICRlbC5pbnNlcnRBZnRlcigkZWxJbnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwuYXBwZW5kVG8oJGJyYW5kR3JpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRNb3JlQnJhbmRzKCRicmFuZHMsIHVybCwgcmVjdXJzaXZlKSB7XG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdwYXBhLXN1cGVybWFya2V0L2JyYW5kcy9icmFuZHMtbGlzdCcsXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBicmFuZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDEwMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgKGVyciwgcmVzcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGJyYW5kc0xpc3QgPSAkKHJlc3ApLmZpbmQoJ1tkYXRhLWJyYW5kcy1saXN0XScpO1xuICAgICAgICAgICAgJGJyYW5kcy5hcHBlbmQoJGJyYW5kc0xpc3QuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgIGNvbnN0ICRhekJyYW5kcyA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJGJyYW5kcy5kYXRhKCdhemJyYW5kcycpKSk7XG4gICAgICAgICAgICBpZiAoJGF6QnJhbmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFaQnJhbmRzKCRicmFuZHMsICRhekJyYW5kcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRVcmwgPSAkYnJhbmRzTGlzdC5kYXRhKCdicmFuZHMtbGlzdC1uZXh0Jyk7XG4gICAgICAgICAgICBpZiAobmV4dFVybCAmJiByZWN1cnNpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNb3JlQnJhbmRzKCRicmFuZHMsIG5leHRVcmwsIHJlY3Vyc2l2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IEFaQnJhbmRzIGZyb20gJy4uL2VtdGhlbWVzLW1vZGV6L2F6YnJhbmRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmRzIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5icmFuZHNwYWdlX2xheW91dCA9PT0gJ2F6dGFibGUnKSB7XG4gICAgICAgICAgICBjb25zdCBhemJyYW5kcyA9IG5ldyBBWkJyYW5kcygpO1xuICAgICAgICAgICAgYXpicmFuZHMub25SZWFkeSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIiQiLCJ1dGlscyIsIkFaQnJhbmRzIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsIiRicmFuZHMiLCJsZW5ndGgiLCIkYXpCcmFuZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YSIsImdlbmVyYXRlQVpCcmFuZHMiLCJ1cGRhdGVBWkJyYW5kcyIsInVybCIsImxvYWRNb3JlQnJhbmRzIiwiYXpCcmFuZHNUYWJsZUlEIiwiYXR0ciIsIiRhekJyYW5kc1RhYmxlIiwiYXBwZW5kIiwiaSIsImNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiY2hpbGRyZW4iLCJhZGRDbGFzcyIsImZpcnN0Iiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGEiLCJ0YXJnZXQiLCJyZW1vdmVDbGFzcyIsImVhY2giLCJlbCIsIiRlbCIsImNvZGUiLCJsZXR0ZXIiLCJjaGFyQXQiLCJ0b0xvd2VyQ2FzZSIsIiRncm91cCIsImxhc3QiLCIkbGkiLCIkYnJhbmRHcmlkIiwiZmluZCIsIiRlbElucyIsImoiLCJlbDIiLCIkZWwyIiwiY29kZTIiLCJpbnNlcnRBZnRlciIsImFwcGVuZFRvIiwicmVjdXJzaXZlIiwiX3RoaXMiLCJhcGkiLCJnZXRQYWdlIiwidGVtcGxhdGUiLCJjb25maWciLCJicmFuZHMiLCJsaW1pdCIsImVyciIsInJlc3AiLCIkYnJhbmRzTGlzdCIsIm5leHRVcmwiLCJkZWZhdWx0IiwiUGFnZU1hbmFnZXIiLCJCcmFuZHMiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiY29udGV4dCIsInRoZW1lU2V0dGluZ3MiLCJicmFuZHNwYWdlX2xheW91dCIsImF6YnJhbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==
