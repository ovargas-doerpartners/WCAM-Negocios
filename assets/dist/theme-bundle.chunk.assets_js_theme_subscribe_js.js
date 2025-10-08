(self["webpackChunkpapathemes_supermarket"] = self["webpackChunkpapathemes_supermarket"] || []).push([["assets_js_theme_subscribe_js"],{

/***/ "./assets/js/theme/subscribe.js":
/*!**************************************!*\
  !*** ./assets/js/theme/subscribe.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Subscribe)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _emthemes_modez_newsletter_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emthemes-modez/newsletter-popup */ "./assets/js/emthemes-modez/newsletter-popup.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// Supermarket Theme: Implement for newsletter popup




var Subscribe = /*#__PURE__*/function (_PageManager) {
  function Subscribe() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Subscribe, _PageManager);
  var _proto = Subscribe.prototype;
  _proto.loaded = function loaded(next) {
    if (this.context.themeSettings.nl_popup_show !== '' && this.context.themeSettings.nl_popup_show !== 'hide') {
      var url = url__WEBPACK_IMPORTED_MODULE_1__.parse(window.location.href, true);
      if (url.query.result === 'success') {
        (0,_emthemes_modez_newsletter_popup__WEBPACK_IMPORTED_MODULE_2__.hideForSubscribed)();
      }
    }
    next();
  };
  return Subscribe;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zdWJzY3JpYmVfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRTBDO0FBQ3BCO0FBQ2lEO0FBQUEsSUFFbERHLFNBQVMsMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxVQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLFNBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsU0FBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDMUJFLE1BQU0sR0FBTixTQUFBQSxNQUFNQSxDQUFDQyxJQUFJLEVBQUU7SUFDVCxJQUFJLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxhQUFhLENBQUNDLGFBQWEsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDRixPQUFPLENBQUNDLGFBQWEsQ0FBQ0MsYUFBYSxLQUFLLE1BQU0sRUFBRTtNQUN4RyxJQUFNQyxHQUFHLEdBQUdkLHNDQUFTLENBQUNnQixNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQztNQUNqRCxJQUFJSixHQUFHLENBQUNLLEtBQUssQ0FBQ0MsTUFBTSxLQUFLLFNBQVMsRUFBRTtRQUNoQ25CLG1GQUFpQixDQUFDLENBQUM7TUFDdkI7SUFDSjtJQUNBUyxJQUFJLENBQUMsQ0FBQztFQUNWLENBQUM7RUFBQSxPQUFBUixTQUFBO0FBQUEsRUFUa0NILHFEQUFXOzs7Ozs7Ozs7OztBQ05sRCxlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1zdXBlcm1hcmtldC8uL2Fzc2V0cy9qcy90aGVtZS9zdWJzY3JpYmUuanMiLCJ3ZWJwYWNrOi8vcGFwYXRoZW1lcy1zdXBlcm1hcmtldC9pZ25vcmVkfEM6XFxVc2Vyc1xcZUNvcmVcXERvd25sb2Fkc1xcQmlnQ29tbWVyY2VcXFN1cGVybWFya2V0X2N1c3RvbTEyMDgyNVxcbm9kZV9tb2R1bGVzXFxvYmplY3QtaW5zcGVjdHwuL3V0aWwuaW5zcGVjdCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdXBlcm1hcmtldCBUaGVtZTogSW1wbGVtZW50IGZvciBuZXdzbGV0dGVyIHBvcHVwXG5cbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHsgaGlkZUZvclN1YnNjcmliZWQgfSBmcm9tICcuLi9lbXRoZW1lcy1tb2Rlei9uZXdzbGV0dGVyLXBvcHVwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic2NyaWJlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGxvYWRlZChuZXh0KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5ubF9wb3B1cF9zaG93ICE9PSAnJyAmJiB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5ubF9wb3B1cF9zaG93ICE9PSAnaGlkZScpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAodXJsLnF1ZXJ5LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgaGlkZUZvclN1YnNjcmliZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXh0KCk7XG4gICAgfVxufVxuIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiVXJsIiwiaGlkZUZvclN1YnNjcmliZWQiLCJTdWJzY3JpYmUiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwibG9hZGVkIiwibmV4dCIsImNvbnRleHQiLCJ0aGVtZVNldHRpbmdzIiwibmxfcG9wdXBfc2hvdyIsInVybCIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicXVlcnkiLCJyZXN1bHQiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==
