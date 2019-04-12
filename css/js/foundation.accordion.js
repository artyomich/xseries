(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("jquery")); else if (typeof define === 'function' && define.amd)
        define(["./foundation.core", "./foundation.util.keyboard", "jquery"], factory); else if (typeof exports === 'object')
        exports["foundation.accordion"] = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("jquery")); else
        root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.accordion"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
    return (function (modules) {
        var installedModules = {};

        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {i: moduleId, l: false, exports: {}};
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }

        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function (exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {enumerable: true, get: getter});
            }
        };
        __webpack_require__.r = function (exports) {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
            }
            Object.defineProperty(exports, '__esModule', {value: true});
        };
        __webpack_require__.t = function (value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, 'default', {enumerable: true, value: value});
            if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
                return value[key];
            }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function (module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module['default'];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, 'a', getter);
            return getter;
        };
        __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 1);
    })
    ({
        "./foundation.core":/*!****************************************************************************************************************************************************************!*\
!*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core","commonjs":"./foundation.core","commonjs2":"./foundation.core"} ***!
\****************************************************************************************************************************************************************//*!no static exports found*/(function (module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_core__;
        }), "./foundation.util.keyboard":/*!****************************************************************************************************************************************************************************************************!*\
!*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.keyboard"],"amd":"./foundation.util.keyboard","commonjs":"./foundation.util.keyboard","commonjs2":"./foundation.util.keyboard"} ***!
\****************************************************************************************************************************************************************************************************//*!no static exports found*/(function (module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__;
        }), "./js/entries/plugins/foundation.accordion.js":/*!****************************************************!*\
!*** ./js/entries/plugins/foundation.accordion.js ***!
\****************************************************//*!exports provided: Foundation, Accordion*/(function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var _foundation_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*!./foundation.core*/"./foundation.core");
            var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
            __webpack_require__.d(__webpack_exports__, "Foundation", function () {
                return _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"];
            });
            var _foundation_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*!../../foundation.accordion*/"./js/foundation.accordion.js");
            __webpack_require__.d(__webpack_exports__, "Accordion", function () {
                return _foundation_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"];
            });
            _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"], 'Accordion');
        }), "./js/foundation.accordion.js":/*!************************************!*\
!*** ./js/foundation.accordion.js ***!
\************************************//*!exports provided: Accordion*/(function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "Accordion", function () {
                return Accordion;
            });
            var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*!jquery*/"jquery");
            var jquery__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
            var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*!./foundation.core.utils*/"./foundation.core");
            var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__);
            var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*!./foundation.util.keyboard*/"./foundation.util.keyboard");
            var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__);

            function _typeof(obj) {
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                } else {
                    _typeof = function _typeof(obj) {
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

            function _possibleConstructorReturn(self, call) {
                if (call && (_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                }
                return _assertThisInitialized(self);
            }

            function _assertThisInitialized(self) {
                if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return self;
            }

            function _getPrototypeOf(o) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) _setPrototypeOf(subClass, superClass);
            }

            function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }

            var Accordion = function (_Plugin) {
                _inherits(Accordion, _Plugin);

                function Accordion() {
                    _classCallCheck(this, Accordion);
                    return _possibleConstructorReturn(this, _getPrototypeOf(Accordion).apply(this, arguments));
                }

                _createClass(Accordion, [{
                    key: "_setup", value: function _setup(element, options) {
                        this.$element = element;
                        this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Accordion.defaults, this.$element.data(), options);
                        this.className = 'Accordion';
                        this._init();
                        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('Accordion', {
                            'ENTER': 'toggle',
                            'SPACE': 'toggle',
                            'ARROW_DOWN': 'next',
                            'ARROW_UP': 'previous'
                        });
                    }
                }, {
                    key: "_init", value: function _init() {
                        var _this2 = this;
                        this._isInitializing = true;
                        this.$element.attr('role', 'tablist');
                        this.$tabs = this.$element.children('[data-accordion-item]');
                        this.$tabs.each(function (idx, el) {
                            var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el),
                                $content = $el.children('[data-tab-content]'),
                                id = $content[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'accordion'),
                                linkId = el.id ? "".concat(el.id, "-label") : "".concat(id, "-label");
                            $el.find('a:first').attr({
                                'aria-controls': id,
                                'role': 'tab',
                                'id': linkId,
                                'aria-expanded': false,
                                'aria-selected': false
                            });
                            $content.attr({
                                'role': 'tabpanel',
                                'aria-labelledby': linkId,
                                'aria-hidden': true,
                                'id': id
                            });
                        });
                        var $initActive = this.$element.find('.is-active').children('[data-tab-content]');
                        if ($initActive.length) {
                            this._initialAnchor = $initActive.prev('a').attr('href');
                            this._openSingleTab($initActive);
                        }
                        this._checkDeepLink = function () {
                            var anchor = window.location.hash;
                            if (!anchor.length) {
                                if (_this2._isInitializing) return;
                                if (_this2._initialAnchor) anchor = _this2._initialAnchor;
                            }
                            var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);
                            var $link = anchor && _this2.$element.find("[href$=\"".concat(anchor, "\"]"));
                            var isOwnAnchor = !!($anchor.length && $link.length);
                            if ($anchor && $link && $link.length) {
                                if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
                                    _this2._openSingleTab($anchor);
                                }
                                ;
                            } else {
                                _this2._closeAllTabs();
                            }
                            if (isOwnAnchor) {
                                if (_this2.options.deepLinkSmudge) {
                                    Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
                                        var offset = _this2.$element.offset();
                                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({scrollTop: offset.top}, _this2.options.deepLinkSmudgeDelay);
                                    });
                                }
                                _this2.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
                            }
                        };
                        if (this.options.deepLink) {
                            this._checkDeepLink();
                        }
                        this._events();
                        this._isInitializing = false;
                    }
                }, {
                    key: "_events", value: function _events() {
                        var _this = this;
                        this.$tabs.each(function () {
                            var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
                            var $tabContent = $elem.children('[data-tab-content]');
                            if ($tabContent.length) {
                                $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function (e) {
                                    e.preventDefault();
                                    _this.toggle($tabContent);
                                }).on('keydown.zf.accordion', function (e) {
                                    _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'Accordion', {
                                        toggle: function toggle() {
                                            _this.toggle($tabContent);
                                        }, next: function next() {
                                            var $a = $elem.next().find('a').focus();
                                            if (!_this.options.multiExpand) {
                                                $a.trigger('click.zf.accordion');
                                            }
                                        }, previous: function previous() {
                                            var $a = $elem.prev().find('a').focus();
                                            if (!_this.options.multiExpand) {
                                                $a.trigger('click.zf.accordion');
                                            }
                                        }, handled: function handled() {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }
                                    });
                                });
                            }
                        });
                        if (this.options.deepLink) {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
                        }
                    }
                }, {
                    key: "toggle", value: function toggle($target) {
                        if ($target.closest('[data-accordion]').is('[disabled]')) {
                            console.info('Cannot toggle an accordion that is disabled.');
                            return;
                        }
                        if ($target.parent().hasClass('is-active')) {
                            this.up($target);
                        } else {
                            this.down($target);
                        }
                        if (this.options.deepLink) {
                            var anchor = $target.prev('a').attr('href');
                            if (this.options.updateHistory) {
                                history.pushState({}, '', anchor);
                            } else {
                                history.replaceState({}, '', anchor);
                            }
                        }
                    }
                }, {
                    key: "down", value: function down($target) {
                        if ($target.closest('[data-accordion]').is('[disabled]')) {
                            console.info('Cannot call down on an accordion that is disabled.');
                            return;
                        }
                        if (this.options.multiExpand) this._openTab($target); else this._openSingleTab($target);
                    }
                }, {
                    key: "up", value: function up($target) {
                        if (this.$element.is('[disabled]')) {
                            console.info('Cannot call up on an accordion that is disabled.');
                            return;
                        }
                        var $targetItem = $target.parent();
                        if (!$targetItem.hasClass('is-active')) return;
                        var $othersItems = $targetItem.siblings();
                        if (!this.options.allowAllClosed && !$othersItems.hasClass('is-active')) return;
                        this._closeTab($target);
                    }
                }, {
                    key: "_openSingleTab", value: function _openSingleTab($target) {
                        var $activeContents = this.$element.children('.is-active').children('[data-tab-content]');
                        if ($activeContents.length) {
                            this._closeTab($activeContents.not($target));
                        }
                        this._openTab($target);
                    }
                }, {
                    key: "_openTab", value: function _openTab($target) {
                        var _this3 = this;
                        var $targetItem = $target.parent();
                        var targetContentId = $target.attr('aria-labelledby');
                        $target.attr('aria-hidden', false);
                        $targetItem.addClass('is-active');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
                            'aria-expanded': true,
                            'aria-selected': true
                        });
                        $target.slideDown(this.options.slideSpeed, function () {
                            _this3.$element.trigger('down.zf.accordion', [$target]);
                        });
                    }
                }, {
                    key: "_closeTab", value: function _closeTab($target) {
                        var _this4 = this;
                        var $targetItem = $target.parent();
                        var targetContentId = $target.attr('aria-labelledby');
                        $target.attr('aria-hidden', true);
                        $targetItem.removeClass('is-active');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
                            'aria-expanded': false,
                            'aria-selected': false
                        });
                        $target.slideUp(this.options.slideSpeed, function () {
                            _this4.$element.trigger('up.zf.accordion', [$target]);
                        });
                    }
                }, {
                    key: "_closeAllTabs", value: function _closeAllTabs() {
                        var $activeTabs = this.$element.children('.is-active').children('[data-tab-content]');
                        if ($activeTabs.length) {
                            this._closeTab($activeTabs);
                        }
                    }
                }, {
                    key: "_destroy", value: function _destroy() {
                        this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
                        this.$element.find('a').off('.zf.accordion');
                        if (this.options.deepLink) {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
                        }
                    }
                }]);
                return Accordion;
            }(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
            Accordion.defaults = {
                slideSpeed: 250,
                multiExpand: false,
                allowAllClosed: false,
                deepLink: false,
                deepLinkSmudge: false,
                deepLinkSmudgeDelay: 300,
                updateHistory: false
            };
        }), 1:/*!**********************************************************!*\
!*** multi ./js/entries/plugins/foundation.accordion.js ***!
\**********************************************************//*!no static exports found*/(function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*!/Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.accordion.js*/"./js/entries/plugins/foundation.accordion.js");
        }), "jquery":/*!********************************************************************************************!*\
!*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
\********************************************************************************************//*!no static exports found*/(function (module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;
        })
    });
});