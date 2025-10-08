"use strict";
(self["webpackChunkpapathemes_supermarket"] = self["webpackChunkpapathemes_supermarket"] || []).push([["assets_js_emthemes-modez_fit-nav_js"],{

/***/ "./assets/js/emthemes-modez/fit-nav.js":
/*!*********************************************!*\
  !*** ./assets/js/emthemes-modez/fit-nav.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.min.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


var tpl = "\n    {{#list.length}}\n        <ul class=\"navPage-subMenu-list\">\n            <li class=\"navPage-subMenu-item\"></li>\n            {{#list}}\n                <li class=\"navPage-subMenu-item\">\n                    <a class=\"navPage-subMenu-action navPages-action {{#children.length}}has-subMenu is-open{{/children.length}}\" href=\"{{&url}}\">\n                        {{title}}\n                        {{#children.length}}\n                            <i class=\"icon navPages-action-moreIcon\" aria-hidden=\"true\"><svg><use xlink:href=\"#icon-caret-down\"></use></svg></i>\n                        {{/children.length}}\n                    </a>\n                    {{> childrenTpl }}\n                </li>\n            {{/list}}\n        </ul>\n    {{/list.length}}\n";
var childrenTpl = "\n    {{#children.length}}\n        <ul class=\"navPage-childList is-open\">\n            {{#children}}\n                <li class=\"navPage-childList-item\">\n                    <a class=\"navPage-childList-action navPages-action {{#children.length}}has-subMenu is-open{{/children.length}}\" href=\"{{&url}}\">\n                        {{title}}\n                        {{#children.length}}\n                            <i class=\"icon navPages-action-moreIcon\" aria-hidden=\"true\"><svg><use xlink:href=\"#icon-caret-down\"></use></svg></i>\n                        {{/children.length}}\n                    </a>\n                    {{#children.length}}\n                        {{> childrenTpl }}\n                    {{/children.length}}\n                </li>\n            {{/children}}\n        </ul>\n    {{/children.length}}\n";
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var $navPages = $('.navPages').first();
  var $navPagesList = $navPages.children('.navPages-list');
  var $vertCat = $navPages.children('.emthemesModez-navPages-verticalCategories-container');
  var $list = $('<ul/>').addClass($navPagesList.first().attr('class')).addClass('navPages-list--fitNav').append($navPagesList.not('.navPages-list--user').children('.navPages-item').clone());
  if ($list.children().length === 0) {
    return;
  }

  // Replace new ID of elements in the fitNav menu to avoid duplicate ID
  $list.find('[data-collapsible]').each(function (i, el) {
    return $(el).attr('data-collapsible', $(el).attr('data-collapsible').concat('-fitNav'));
  });
  $list.find('[aria-controls]').each(function (i, el) {
    return $(el).attr('aria-controls', $(el).attr('aria-controls').concat('-fitNav'));
  });
  $list.find('[id]').each(function (i, el) {
    return $(el).attr('id', $(el).attr('id').concat('-fitNav'));
  });
  if ($vertCat.length > 0) {
    $vertCat.after($list);
  } else {
    $navPages.prepend($list);
  }
  var txtMore = context.txtNavMore || 'More';
  var isStandardMenu = context.themeSettings.navPages_standard;
  var $more = $("\n        <li class=\"navPages-item " + (isStandardMenu ? 'navPages-item--standard' : '') + " navPages-item--more\">\n            <a class=\"navPages-action navPages-action--fitNav-more has-subMenu is-open\" href=\"#\">" + txtMore + " <i class=\"icon navPages-action-moreIcon\" aria-hidden=\"true\"><svg><use xlink:href=\"#icon-caret-down\"></use></svg></i></a>\n            <div class=\"navPage-subMenu " + (isStandardMenu ? 'navPage-subMenu--standard' : '') + " is-open\"></div>\n        </li>");
  $list.append($more);
  var resize = function resize() {
    $more.show();
    $more.nextAll().show();

    //
    // Move 'More' to the first line of the menu
    //
    var firstTop = Math.round($list.children().first().position().top);
    $more.appendTo($list);
    while (Math.round($more.position().top) > firstTop) {
      $more.insertBefore($more.prev());
    }

    // Hide all menu items after 'More'
    $more.nextAll().hide();

    //
    // Extract data from the menu items after 'more' item
    //
    var data = $more.nextAll().get().map(function (item1) {
      var $item1 = $(item1);
      var $a1 = $item1.find('> .navPages-action');
      var children1 = $item1.find('> .navPage-subMenu > .navPage-subMenu-list > .navPage-subMenu-item').not(':first').get().map(function (item2) {
        var $item2 = $(item2);
        var $a2 = $item2.find('> .navPage-subMenu-action');
        var children2 = $item2.find('> .navPage-childList > .navPage-childList-item').not(':first').get().map(function (item3) {
          var $item3 = $(item3);
          var $a3 = $item3.find('> .navPage-childList-action');
          var children3 = $item3.find('> .navPage-childList > .navPage-childList-item').not(':first').get().map(function (item4) {
            var $item4 = $(item4);
            var $a4 = $item4.find('> .navPage-childList-action');
            return {
              url: $a4.attr('href'),
              title: $a4.text(),
              children: []
            };
          });
          return {
            url: $a3.attr('href'),
            title: $a3.text(),
            children: children3
          };
        });
        return {
          url: $a2.attr('href'),
          title: $a2.text(),
          children: children2
        };
      });
      return {
        url: $a1.attr('href'),
        title: $a1.text(),
        children: children1
      };
    });

    // Build the new mega menu HTML
    var html = mustache__WEBPACK_IMPORTED_MODULE_1___default().render(tpl, {
      list: data
    }, {
      childrenTpl: childrenTpl
    });
    $more.find('> .navPage-subMenu').html(html);
    if (data.length === 0) {
      $more.hide();
    }
  };
  $(window).on('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(resize, 200));
  resize();
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19lbXRoZW1lcy1tb2Rlel9maXQtbmF2X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDZ0M7QUFFaEMsSUFBTUMsR0FBRyxneEJBaUJSO0FBRUQsSUFBTUMsV0FBVywyMEJBa0JoQjtBQUVELDZCQUFlLG9DQUFVQyxPQUFPLEVBQUU7RUFDOUIsSUFBTUMsU0FBUyxHQUFHQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDO0VBQ3hDLElBQU1DLGFBQWEsR0FBR0gsU0FBUyxDQUFDSSxRQUFRLENBQUMsZ0JBQWdCLENBQUM7RUFDMUQsSUFBTUMsUUFBUSxHQUFHTCxTQUFTLENBQUNJLFFBQVEsQ0FBQyxzREFBc0QsQ0FBQztFQUMzRixJQUFNRSxLQUFLLEdBQUdMLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FDbkJNLFFBQVEsQ0FBQ0osYUFBYSxDQUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDTSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FDN0NELFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUNqQ0UsTUFBTSxDQUFDTixhQUFhLENBQUNPLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDTixRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ08sS0FBSyxDQUFDLENBQUMsQ0FBQztFQUV6RixJQUFJTCxLQUFLLENBQUNGLFFBQVEsQ0FBQyxDQUFDLENBQUNRLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDL0I7RUFDSjs7RUFFQTtFQUNBTixLQUFLLENBQUNPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxFQUFFO0lBQUEsT0FBS2YsQ0FBQyxDQUFDZSxFQUFFLENBQUMsQ0FBQ1IsSUFBSSxDQUFDLGtCQUFrQixFQUFFUCxDQUFDLENBQUNlLEVBQUUsQ0FBQyxDQUFDUixJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQ1MsTUFB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RyxDQUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQztVQUNyQmlELEtBQUssRUFBRVYsR0FBRyxDQUFDVyxJQUFJLENBQUMsQ0FBQztVQUNqQnRELFFBQVEsRUFBRTRDO1FBQ2QsQ0FBQztNQUNMLENBQUMsQ0FBQztNQUVGLE9BQU87UUFDSFEsR0FBRyxFQUFFYixHQUFHLENBQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCaUQsS0FBSyxFQUFFZCxHQUFHLENBQUNlLElBQUksQ0FBQyxDQUFDO1FBQ2pCdEQsUUFBUSxFQUFFd0M7TUFDZCxDQUFDO0lBQ0wsQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBTWUsSUFBSSxHQUFHL0Qsc0RBQWUsQ0FBQ0MsR0FBRyxFQUFFO01BQUVnRSxJQUFJLEVBQUV2QjtJQUFLLENBQUMsRUFBRTtNQUFFeEMsV0FBVyxFQUFYQTtJQUFZLENBQUMsQ0FBQztJQUNsRTJCLEtBQUssQ0FBQ1osSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM4QyxJQUFJLENBQUNBLElBQUksQ0FBQztJQUUzQyxJQUFJckIsSUFBSSxDQUFDMUIsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUNuQmEsS0FBSyxDQUFDWSxJQUFJLENBQUMsQ0FBQztJQUNoQjtFQUNKLENBQUM7RUFFRHBDLENBQUMsQ0FBQzZELE1BQU0sQ0FBQyxDQUFDQyxFQUFFLENBQUMsUUFBUSxFQUFFQyxzREFBQSxDQUFTdEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0VBQzdDQSxNQUFNLENBQUMsQ0FBQztBQUNaLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBhdGhlbWVzLXN1cGVybWFya2V0Ly4vYXNzZXRzL2pzL2VtdGhlbWVzLW1vZGV6L2ZpdC1uYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IE11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcblxuY29uc3QgdHBsID0gYFxuICAgIHt7I2xpc3QubGVuZ3RofX1cbiAgICAgICAgPHVsIGNsYXNzPVwibmF2UGFnZS1zdWJNZW51LWxpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdlBhZ2Utc3ViTWVudS1pdGVtXCI+PC9saT5cbiAgICAgICAgICAgIHt7I2xpc3R9fVxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdlBhZ2Utc3ViTWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2UGFnZS1zdWJNZW51LWFjdGlvbiBuYXZQYWdlcy1hY3Rpb24ge3sjY2hpbGRyZW4ubGVuZ3RofX1oYXMtc3ViTWVudSBpcy1vcGVue3svY2hpbGRyZW4ubGVuZ3RofX1cIiBocmVmPVwie3smdXJsfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7dGl0bGV9fVxuICAgICAgICAgICAgICAgICAgICAgICAge3sjY2hpbGRyZW4ubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24gbmF2UGFnZXMtYWN0aW9uLW1vcmVJY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1jYXJldC1kb3duXCI+PC91c2U+PC9zdmc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAge3svY2hpbGRyZW4ubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICB7ez4gY2hpbGRyZW5UcGwgfX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAge3svbGlzdH19XG4gICAgICAgIDwvdWw+XG4gICAge3svbGlzdC5sZW5ndGh9fVxuYDtcblxuY29uc3QgY2hpbGRyZW5UcGwgPSBgXG4gICAge3sjY2hpbGRyZW4ubGVuZ3RofX1cbiAgICAgICAgPHVsIGNsYXNzPVwibmF2UGFnZS1jaGlsZExpc3QgaXMtb3BlblwiPlxuICAgICAgICAgICAge3sjY2hpbGRyZW59fVxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdlBhZ2UtY2hpbGRMaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZQYWdlLWNoaWxkTGlzdC1hY3Rpb24gbmF2UGFnZXMtYWN0aW9uIHt7I2NoaWxkcmVuLmxlbmd0aH19aGFzLXN1Yk1lbnUgaXMtb3Blbnt7L2NoaWxkcmVuLmxlbmd0aH19XCIgaHJlZj1cInt7JnVybH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3RpdGxlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I2NoaWxkcmVuLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIG5hdlBhZ2VzLWFjdGlvbi1tb3JlSWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSB4bGluazpocmVmPVwiI2ljb24tY2FyZXQtZG93blwiPjwvdXNlPjwvc3ZnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L2NoaWxkcmVuLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAge3sjY2hpbGRyZW4ubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7PiBjaGlsZHJlblRwbCB9fVxuICAgICAgICAgICAgICAgICAgICB7ey9jaGlsZHJlbi5sZW5ndGh9fVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB7ey9jaGlsZHJlbn19XG4gICAgICAgIDwvdWw+XG4gICAge3svY2hpbGRyZW4ubGVuZ3RofX1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgY29uc3QgJG5hdlBhZ2VzID0gJCgnLm5hdlBhZ2VzJykuZmlyc3QoKTtcbiAgICBjb25zdCAkbmF2UGFnZXNMaXN0ID0gJG5hdlBhZ2VzLmNoaWxkcmVuKCcubmF2UGFnZXMtbGlzdCcpO1xuICAgIGNvbnN0ICR2ZXJ0Q2F0ID0gJG5hdlBhZ2VzLmNoaWxkcmVuKCcuZW10aGVtZXNNb2Rlei1uYXZQYWdlcy12ZXJ0aWNhbENhdGVnb3JpZXMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgJGxpc3QgPSAkKCc8dWwvPicpXG4gICAgICAgIC5hZGRDbGFzcygkbmF2UGFnZXNMaXN0LmZpcnN0KCkuYXR0cignY2xhc3MnKSlcbiAgICAgICAgLmFkZENsYXNzKCduYXZQYWdlcy1saXN0LS1maXROYXYnKVxuICAgICAgICAuYXBwZW5kKCRuYXZQYWdlc0xpc3Qubm90KCcubmF2UGFnZXMtbGlzdC0tdXNlcicpLmNoaWxkcmVuKCcubmF2UGFnZXMtaXRlbScpLmNsb25lKCkpO1xuXG4gICAgaWYgKCRsaXN0LmNoaWxkcmVuKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIG5ldyBJRCBvZiBlbGVtZW50cyBpbiB0aGUgZml0TmF2IG1lbnUgdG8gYXZvaWQgZHVwbGljYXRlIElEXG4gICAgJGxpc3QuZmluZCgnW2RhdGEtY29sbGFwc2libGVdJykuZWFjaCgoaSwgZWwpID0+ICQoZWwpLmF0dHIoJ2RhdGEtY29sbGFwc2libGUnLCAkKGVsKS5hdHRyKCdkYXRhLWNvbGxhcHNpYmxlJykuY29uY2F0KCctZml0TmF2JykpKTtcbiAgICAkbGlzdC5maW5kKCdbYXJpYS1jb250cm9sc10nKS5lYWNoKChpLCBlbCkgPT4gJChlbCkuYXR0cignYXJpYS1jb250cm9scycsICQoZWwpLmF0dHIoJ2FyaWEtY29udHJvbHMnKS5jb25jYXQoJy1maXROYXYnKSkpO1xuICAgICRsaXN0LmZpbmQoJ1tpZF0nKS5lYWNoKChpLCBlbCkgPT4gJChlbCkuYXR0cignaWQnLCAkKGVsKS5hdHRyKCdpZCcpLmNvbmNhdCgnLWZpdE5hdicpKSk7XG5cbiAgICBpZiAoJHZlcnRDYXQubGVuZ3RoID4gMCkge1xuICAgICAgICAkdmVydENhdC5hZnRlcigkbGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJG5hdlBhZ2VzLnByZXBlbmQoJGxpc3QpO1xuICAgIH1cblxuICAgIGNvbnN0IHR4dE1vcmUgPSBjb250ZXh0LnR4dE5hdk1vcmUgfHwgJ01vcmUnO1xuICAgIGNvbnN0IGlzU3RhbmRhcmRNZW51ID0gY29udGV4dC50aGVtZVNldHRpbmdzLm5hdlBhZ2VzX3N0YW5kYXJkO1xuICAgIGNvbnN0ICRtb3JlID0gJChgXG4gICAgICAgIDxsaSBjbGFzcz1cIm5hdlBhZ2VzLWl0ZW0gJHtpc1N0YW5kYXJkTWVudSA/ICduYXZQYWdlcy1pdGVtLS1zdGFuZGFyZCcgOiAnJ30gbmF2UGFnZXMtaXRlbS0tbW9yZVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZQYWdlcy1hY3Rpb24gbmF2UGFnZXMtYWN0aW9uLS1maXROYXYtbW9yZSBoYXMtc3ViTWVudSBpcy1vcGVuXCIgaHJlZj1cIiNcIj4ke3R4dE1vcmV9IDxpIGNsYXNzPVwiaWNvbiBuYXZQYWdlcy1hY3Rpb24tbW9yZUljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWNhcmV0LWRvd25cIj48L3VzZT48L3N2Zz48L2k+PC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdlBhZ2Utc3ViTWVudSAke2lzU3RhbmRhcmRNZW51ID8gJ25hdlBhZ2Utc3ViTWVudS0tc3RhbmRhcmQnIDogJyd9IGlzLW9wZW5cIj48L2Rpdj5cbiAgICAgICAgPC9saT5gKTtcbiAgICAkbGlzdC5hcHBlbmQoJG1vcmUpO1xuXG4gICAgY29uc3QgcmVzaXplID0gKCkgPT4ge1xuICAgICAgICAkbW9yZS5zaG93KCk7XG4gICAgICAgICRtb3JlLm5leHRBbGwoKS5zaG93KCk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gTW92ZSAnTW9yZScgdG8gdGhlIGZpcnN0IGxpbmUgb2YgdGhlIG1lbnVcbiAgICAgICAgLy9cbiAgICAgICAgY29uc3QgZmlyc3RUb3AgPSBNYXRoLnJvdW5kKCRsaXN0LmNoaWxkcmVuKCkuZmlyc3QoKS5wb3NpdGlvbigpLnRvcCk7XG4gICAgICAgICRtb3JlLmFwcGVuZFRvKCRsaXN0KTtcbiAgICAgICAgd2hpbGUgKE1hdGgucm91bmQoJG1vcmUucG9zaXRpb24oKS50b3ApID4gZmlyc3RUb3ApIHtcbiAgICAgICAgICAgICRtb3JlLmluc2VydEJlZm9yZSgkbW9yZS5wcmV2KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGlkZSBhbGwgbWVudSBpdGVtcyBhZnRlciAnTW9yZSdcbiAgICAgICAgJG1vcmUubmV4dEFsbCgpLmhpZGUoKTtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBFeHRyYWN0IGRhdGEgZnJvbSB0aGUgbWVudSBpdGVtcyBhZnRlciAnbW9yZScgaXRlbVxuICAgICAgICAvL1xuICAgICAgICBjb25zdCBkYXRhID0gJG1vcmUubmV4dEFsbCgpLmdldCgpLm1hcCgoaXRlbTEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpdGVtMSA9ICQoaXRlbTEpO1xuICAgICAgICAgICAgY29uc3QgJGExID0gJGl0ZW0xLmZpbmQoJz4gLm5hdlBhZ2VzLWFjdGlvbicpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbjEgPSAkaXRlbTEuZmluZCgnPiAubmF2UGFnZS1zdWJNZW51ID4gLm5hdlBhZ2Utc3ViTWVudS1saXN0ID4gLm5hdlBhZ2Utc3ViTWVudS1pdGVtJykubm90KCc6Zmlyc3QnKS5nZXQoKS5tYXAoKGl0ZW0yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGl0ZW0yID0gJChpdGVtMik7XG4gICAgICAgICAgICAgICAgY29uc3QgJGEyID0gJGl0ZW0yLmZpbmQoJz4gLm5hdlBhZ2Utc3ViTWVudS1hY3Rpb24nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuMiA9ICRpdGVtMi5maW5kKCc+IC5uYXZQYWdlLWNoaWxkTGlzdCA+IC5uYXZQYWdlLWNoaWxkTGlzdC1pdGVtJykubm90KCc6Zmlyc3QnKS5nZXQoKS5tYXAoKGl0ZW0zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRpdGVtMyA9ICQoaXRlbTMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkYTMgPSAkaXRlbTMuZmluZCgnPiAubmF2UGFnZS1jaGlsZExpc3QtYWN0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4zID0gJGl0ZW0zLmZpbmQoJz4gLm5hdlBhZ2UtY2hpbGRMaXN0ID4gLm5hdlBhZ2UtY2hpbGRMaXN0LWl0ZW0nKS5ub3QoJzpmaXJzdCcpLmdldCgpLm1hcCgoaXRlbTQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRpdGVtNCA9ICQoaXRlbTQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJGE0ID0gJGl0ZW00LmZpbmQoJz4gLm5hdlBhZ2UtY2hpbGRMaXN0LWFjdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJGE0LmF0dHIoJ2hyZWYnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJGE0LnRleHQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAkYTMuYXR0cignaHJlZicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICRhMy50ZXh0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4zLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAkYTIuYXR0cignaHJlZicpLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJGEyLnRleHQoKSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuMixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiAkYTEuYXR0cignaHJlZicpLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAkYTEudGV4dCgpLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbjEsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCdWlsZCB0aGUgbmV3IG1lZ2EgbWVudSBIVE1MXG4gICAgICAgIGNvbnN0IGh0bWwgPSBNdXN0YWNoZS5yZW5kZXIodHBsLCB7IGxpc3Q6IGRhdGEgfSwgeyBjaGlsZHJlblRwbCB9KTtcbiAgICAgICAgJG1vcmUuZmluZCgnPiAubmF2UGFnZS1zdWJNZW51JykuaHRtbChodG1sKTtcblxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICRtb3JlLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGRlYm91bmNlKHJlc2l6ZSwgMjAwKSk7XG4gICAgcmVzaXplKCk7XG59XG4iXSwibmFtZXMiOlsiTXVzdGFjaGUiLCJ0cGwiLCJjaGlsZHJlblRwbCIsImNvbnRleHQiLCIkbmF2UGFnZXMiLCIkIiwiZmlyc3QiLCIkbmF2UGFnZXNMaXN0IiwiY2hpbGRyZW4iLCIkdmVydENhdCIsIiRsaXN0IiwiYWRkQ2xhc3MiLCJhdHRyIiwiYXBwZW5kIiwibm90IiwiY2xvbmUiLCJsZW5ndGgiLCJmaW5kIiwiZWFjaCIsImkiLCJlbCIsImNvbmNhdCIsImFmdGVyIiwicHJlcGVuZCIsInR4dE1vcmUiLCJ0eHROYXZNb3JlIiwiaXNTdGFuZGFyZE1lbnUiLCJ0aGVtZVNldHRpbmdzIiwibmF2UGFnZXNfc3RhbmRhcmQiLCIkbW9yZSIsInJlc2l6ZSIsInNob3ciLCJuZXh0QWxsIiwiZmlyc3RUb3AiLCJNYXRoIiwicm91bmQiLCJwb3NpdGlvbiIsInRvcCIsImFwcGVuZFRvIiwiaW5zZXJ0QmVmb3JlIiwicHJldiIsImhpZGUiLCJkYXRhIiwiZ2V0IiwibWFwIiwiaXRlbTEiLCIkaXRlbTEiLCIkYTEiLCJjaGlsZHJlbjEiLCJpdGVtMiIsIiRpdGVtMiIsIiRhMiIsImNoaWxkcmVuMiIsIml0ZW0zIiwiJGl0ZW0zIiwiJGEzIiwiY2hpbGRyZW4zIiwiaXRlbTQiLCIkaXRlbTQiLCIkYTQiLCJ1cmwiLCJ0aXRsZSIsInRleHQiLCJodG1sIiwicmVuZGVyIiwibGlzdCIsIndpbmRvdyIsIm9uIiwiX2RlYm91bmNlIl0sInNvdXJjZVJvb3QiOiIifQ==
