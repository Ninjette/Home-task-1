/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(6);
	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?minimize!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?minimize!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body{padding-top:140px;background-color:#323330;color:#fff;font-family:Open Sans,sans-serif}.btn{position:absolute;right:90px;top:50%;padding:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.btn__content{position:relative;height:20px;font-size:11px;padding:1px 8px 1px 6px;font-weight:500;color:#fff;cursor:pointer;background-color:#1b95e0;border-radius:3px;box-sizing:border-box}.btn__content:hover{background-color:#0c7abf}.btn__icon{width:12px;height:12px;margin-right:4px;display:inline-block;vertical-align:middle;background:url(" + __webpack_require__(4) + ");background-size:contain}.header{position:fixed;top:0;right:0;left:0;z-index:1030;margin-bottom:0;padding:10px 0;background-color:#eedb59;border-bottom:1px solid #242424;text-align:center}.header__subtitle,.header__title{font:normal 13px Open Sans,sans-serif;color:#2f2e2d;text-shadow:1px 0 1px hsla(0,0%,100%,.6);margin:0}.header__subtitle{font-size:12px;color:#9e8c09}.header__subtitle:hover{color:#9b8120}.header__logo{max-width:100%;vertical-align:middle;border:0;width:200px;height:54px}.header__info{position:absolute;right:50px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:hsla(0,0%,100%,.9);text-shadow:0 1px 0 rgba(0,0,0,.4);font:700 26px Arial,Helvetica,sans-serif;line-height:26px;-webkit-transition:color .3s linear;transition:color .3s linear}.header__info:focus,.header__info:hover{color:#000;text-decoration:none}.header__link{max-height:113px;position:fixed;top:0;left:0;border:0;z-index:20}.footer{padding:10px 0;text-align:center}.footer__logo-media{width:150px;height:29px}.footer__title{color:#fff;font-size:10px}.footer__decor{width:75%;margin:0 auto 9px}.section-products{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:distribute;justify-content:space-around;max-width:1570px;margin:auto}.section-search{max-width:1570px;padding:0 30px;margin:auto}@media (min-width:768px){.product{max-width:340px}}.product{margin:15px;width:100%}.product__media{outline:3px solid #fff;background-size:cover;max-width:100%;max-height:100%;position:absolute;top:0;bottom:0;left:0;right:0}.product__title{text-transform:uppercase;margin:0 0 3px;font:400 16px Open Sans Condensed,sans-serif;line-height:18px;color:#efa121;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.product__author{font-size:18px;line-height:13px;margin:0 0 3px;font-family:inherit;font-weight:700;display:block;color:inherit;text-rendering:optimizelegibility;text-decoration:underline;font:normal 12px Helvetica Neue,Helvetica,Arial,sans-serif;color:#cfb798}.product__author:focus,.product__author:hover{color:#cfb798}.product__link{position:relative;width:140px;height:184px;margin-right:20px;display:block;float:left}.product__cover{position:absolute;top:0;left:0;bottom:0;right:0;background-color:#ff0;z-index:1;text-align:center;color:#000;text-shadow:0 0 10px #fff;background-color:rgba(247,223,30,.9);font:700 18px Open Sans Condensed,sans-serif;line-height:184px;-webkit-transition:opacity .2s linear;transition:opacity .2s linear;text-transform:uppercase;opacity:0}.product__cover:hover{opacity:1}.product__level{font-size:10px;margin-bottom:20px}.product__description{font-size:12px;line-height:1.5;margin-top:17px;height:70px;padding-bottom:10px;overflow:hidden}.announcement{margin-bottom:20px}.announcement__title{display:inline;margin-right:10px}.announcement__link{width:100px;height:16px;display:inline-block}.announcement__media{max-width:100%}.filter__title{min-height:28px;float:left;margin-right:10px}.filter__elem{float:left;margin-right:10px;list-style:none}.filter__item{color:#eedb59;font-size:13px}.filter__item:focus,.filter__item:hover{color:#eedb59}.filter__item.active{color:#fff}.search{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:20px;padding:10px;text-align:right;background-color:#252624}.search__input{background-color:#4b4d49;border:none;display:block;max-width:400px;width:100%;padding:3px 6px;height:30px;margin-right:3px;-webkit-transition:box-shadow .25s ease-out;transition:box-shadow .25s ease-out}.search__input:focus{outline:none;-webkit-transition:box-shadow 0s;transition:box-shadow 0s;box-shadow:0 0 2px 1px #eedb59}@media (max-width:991px){.btn,.header__info,.header__link{display:none}}@media (max-width:767px){.header__logo{max-width:140px;max-height:40px}.header__subtitle{display:none}.header__title{font:normal 14px Open Sans Condensed,sans-serif}}@media (max-width:480px){.filter__title{float:none}.filter__list{padding-left:0}}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "src/images/icons/twitter-logo.png";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	angular.module("listApp", []);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var data = __webpack_require__(8);

	angular.module("listApp", []).controller('mainController', function ($scope) {

		$scope.products = data;
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
		"books": [
			{
				"title": "Apuntes de Javascript I - Nivel Intermedio",
				"author": "JuanMa Garrido",
				"authorUrl": "https://leanpub.com/u/juanmanuelgarrido",
				"level": "Intermediate",
				"info": "(En Castellano) Revision de conceptos (actuales) de javascript desde basicos hasta un nivel intermedio",
				"url": "https://leanpub.com/apuntes-javascript-intermedio",
				"cover": "http://jsbooks.revolunet.com/img/cover-apuntes-javascript-intermedio.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "Apuntes de Javascript I - Nivel Avanzado",
				"author": "JuanMa Garrido",
				"authorUrl": "https://leanpub.com/u/juanmanuelgarrido",
				"level": "Advanced",
				"info": "(En Castellano) Revision de conceptos (actuales) de javascript avanzados",
				"url": "https://leanpub.com/apuntes-javascript-avanzado",
				"cover": "http://jsbooks.revolunet.com/img/cover-apuntes-javascript-avanzado.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "Javascript Enlightenment",
				"author": "Cody Lindley",
				"authorUrl": "http://www.javascriptenlightenment.com",
				"level": "Intermediate",
				"info": "An accurate JavaScript worldview through an examination of native JavaScript objects and supporting nuances.",
				"url": "http://www.javascriptenlightenment.com/JavaScript_Enlightenment.pdf",
				"cover": "http://jsbooks.revolunet.com/img/cover_jsenlight.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "Eloquent Javascript",
				"author": "Marijn Haverbeke",
				"authorUrl": "http://eloquentjavascript.net",
				"level": "Beginner",
				"info": "A book providing an introduction to the JavaScript language and programming in general.",
				"url": "http://eloquentjavascript.net/",
				"cover": "http://jsbooks.revolunet.com/img/cover_eloquentjs.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "Building A JavaScript Framework",
				"author": "Alex Young",
				"authorUrl": "http://dailyjs.com",
				"level": "Advanced",
				"info": "best Of LetвЂ™s Make a Framework articles.",
				"url": "http://dailyjs.com/files/build-a-javascript-framework.pdf",
				"cover": "http://jsbooks.revolunet.com/img/cover_buildingjsframework.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "JS in ten minutes",
				"author": "Spencer Tipping",
				"authorUrl": "http://spencertipping.com/",
				"level": "Advanced",
				"info": "This guide is for anyone who knows some Javascript but would like a quick intro to its advanced features.",
				"url": "https://github.com/spencertipping/js-in-ten-minutes/blob/master/js-in-ten-minutes.pdf?raw=true",
				"cover": "http://jsbooks.revolunet.com/img/cover_js10minutes.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "Smooth CoffeeScript",
				"author": "E. Hoigaard",
				"authorUrl": "http://autotelicum.github.com/Smooth-CoffeeScript",
				"level": "Intermediate",
				"info": "An introduction to CoffeeScript programming with an emphasis on clarity, abstraction and verification.",
				"url": "http://autotelicum.github.com/Smooth-CoffeeScript/interactive/interactive-coffeescript.html",
				"cover": "http://jsbooks.revolunet.com/img/cover_smoothcoffeescript.png",
				"tags": [
					"coffeescript"
				]
			},
			{
				"title": "Hard Rock CoffeeScript",
				"author": "Alex Chaplinsky",
				"authorUrl": "https://github.com/alchapone/hard-rock-coffeescript",
				"level": "Intermediate",
				"info": "CoffeeScript programming language guide with javascript design patterns explained in coffeescript.",
				"url": "http://hardrockcoffeescript.org",
				"cover": "http://jsbooks.revolunet.com/img/hard_rock_coffeescript.png",
				"tags": [
					"coffeescript"
				]
			},
			{
				"title": "Up and Running with Node.js",
				"author": "Tom Hughes-Croucher",
				"authorUrl": "http://tomhughescroucher.com/",
				"level": "Advanced",
				"info": "Discover NodeJS APIS, tools, modules and best practices and learn how to extend it.",
				"url": "http://chimera.labs.oreilly.com/books/1234000001808/index.html",
				"cover": "http://jsbooks.revolunet.com/img/cover_upandrunningnode.png",
				"tags": [
					"nodejs"
				]
			},
			{
				"title": "jQuery Fundamentals",
				"author": "Rebecca Murphey",
				"authorUrl": "http://jqfundamentals.com",
				"level": "Beginner",
				"info": "Community driven Javascript and jQuery book.",
				"url": "http://jqfundamentals.com/",
				"cover": "http://jsbooks.revolunet.com/img/cover_jqueryfund.png",
				"tags": [
					"jquery",
					"frontend"
				]
			},
			{
				"title": "Developing Backbone.js Applications",
				"author": "Addy Osmani",
				"authorUrl": "https://twitter.com/addyosmani",
				"level": "Intermediate",
				"info": "In this book we will explore MVC theory and how to build applications using Backbone's models, views, collections and routers.",
				"url": "http://addyosmani.github.com/backbone-fundamentals",
				"cover": "http://jsbooks.revolunet.com/img/cover_backbonefundamentals.jpg",
				"tags": [
					"backbone",
					"frontend"
				]
			},
			{
				"title": "Javascript Guide",
				"author": "Mozilla Developer Network",
				"authorUrl": "https://developer.mozilla.org",
				"level": "Beginner",
				"info": "JavaScript is a cross-platform, object-based scripting language. This guide explains everything you need to know about using JavaScript.",
				"url": "https://developer.mozilla.org/en/JavaScript/Guide/JavaScript_Overview",
				"cover": "http://jsbooks.revolunet.com/img/cover_jsguidemozilla.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "JavaScript For Cats",
				"author": "Max Ogden",
				"authorUrl": "http://github.com/maxogden",
				"level": "Beginner",
				"info": "An in-browser interactive introductory programming text designed for cats. Humans are probably also capable of following along.",
				"url": "http://jsforcats.com",
				"cover": "http://jsbooks.revolunet.com/img/cover_jsforcats.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "Javascript Design Patterns",
				"author": "Addy Osmani",
				"authorUrl": "https://twitter.com/addyosmani",
				"level": "Beginner",
				"info": "In this book we will explore applying both classical and modern design patterns to the JavaScript programming language",
				"url": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
				"cover": "http://jsbooks.revolunet.com/img/cover_jspatterns.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "Writing Modular JavaScript With AMD, CommonJS & ES Harmony",
				"author": "Addy Osmani",
				"authorUrl": "https://twitter.com/addyosmani",
				"level": "Advanced",
				"info": "In this article, we're going to look at three formats for writing modular JavaScript: AMD, CommonJS and proposals for the next version of JavaScript, Harmony.",
				"url": "http://addyosmani.com/writing-modular-js",
				"cover": "http://jsbooks.revolunet.com/img/cover_modularjavascript.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "The little Book on CoffeeScript",
				"author": "Alex MacCaw",
				"authorUrl": "http://arcturo.github.com/",
				"level": "Intermediate",
				"info": "This book is designed to help you learn CoffeeScript, understand best practices and start building awesome client side applications.",
				"url": "http://arcturo.github.com/library/coffeescript/01_introduction.html",
				"cover": "http://jsbooks.revolunet.com/img/cover_littlecoffeescript.png",
				"tags": [
					"coffeescript"
				]
			},
			{
				"title": "Master Space and time with JavaScript - The Basics",
				"author": "Noel Rappin",
				"authorUrl": "http://www.noelrappin.com/",
				"level": "Intermediate",
				"info": "[NOTE : Free registration needed]. A four book series aimed at developers who have a basic knowledge of JavaScript but who need to learn about newer tools and practices.",
				"url": "http://www.noelrappin.com/mstwjs",
				"cover": "http://jsbooks.revolunet.com/img/cover_masterspacetime.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "HTML Canvas Deep Dive",
				"author": "Josh Marinacci",
				"authorUrl": "http://joshondesign.com/",
				"level": "Advanced",
				"info": "For those who allready know JavaScript basics and wants to learn HTML Canvas.",
				"url": "http://joshondesign.com/p/books/canvasdeepdive/toc.html",
				"cover": "http://jsbooks.revolunet.com/img/cover_htmlcanvas.png",
				"tags": [
					"games",
					"frontend"
				]
			},
			{
				"title": "Dynamisez vos sites web avec JavaScript !",
				"author": "Le Site du Zero",
				"authorUrl": "http://www.siteduzero.com/",
				"level": "Beginner",
				"info": "[IN FRENCH] Le tutorial rГ©fГ©rence en francais pour apprendre le JavaScript. Culte !",
				"url": "http://www.siteduzero.com/tutoriel-3-309961-dynamisez-vos-sites-web-avec-javascript.html#part_309955",
				"cover": "http://jsbooks.revolunet.com/img/cover_sitezero.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "Testing with CoffeeScript",
				"author": "Jack Franklin",
				"authorUrl": "http://jackfranklin.co.uk/",
				"level": "Intermediate",
				"info": "[NOTE : Download needed]. You will be guided through the creation of a shopping cart system. YouвЂ™ll learn about using and testing jQuery code, writing more idiomatic CoffeeScript and building a well thought out and structured, complex JavaScript application.",
				"url": "https://efendibooks.com/minibooks/testing-with-coffeescript",
				"cover": "http://jsbooks.revolunet.com/img/cover_testingcf.png",
				"tags": [
					"coffeescript",
					"testing"
				]
			},
			{
				"title": "Dive into HTML 5",
				"author": "Mark Pilgrim",
				"authorUrl": "http://en.wikipedia.org/wiki/Mark_Pilgrim_(software_developer)",
				"level": "Intermediate",
				"info": "A community ebook to discover HTML5 best practices and experiment with Javascript.",
				"url": "http://diveintohtml5.info/index.html",
				"cover": "http://jsbooks.revolunet.com/img/cover_diveintohtml5.png",
				"tags": [
					"html5",
					"frontend"
				]
			},
			{
				"title": "Javascript Garden",
				"author": "Ivo Wetzel",
				"authorUrl": "https://github.com/BonsaiDen",
				"level": "Advanced",
				"info": "A collection of documentation about the most quirky parts of JavaScript.",
				"url": "http://bonsaiden.github.com/JavaScript-Garden",
				"cover": "http://jsbooks.revolunet.com/img/cover_javascriptgarden.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "The little MongoDB book",
				"author": "Karl Seguin",
				"authorUrl": "http://openmymind.net/",
				"level": "Advanced",
				"info": "Discover NoSQL with MongoDB and commons Javascript usage patterns.",
				"url": "http://openmymind.net/mongodb.pdf",
				"cover": "http://jsbooks.revolunet.com/img/cover_mongodbbook.png",
				"tags": [
					"mongodb",
					"backend"
				]
			},
			{
				"title": "Mixu's Node book",
				"author": "Mikito Takada",
				"authorUrl": "http://mixu.net/",
				"level": "Advanced",
				"info": "A comprehensive and interesting NodeJS overview covering many aspects in details.",
				"url": "http://book.mixu.net/",
				"cover": "http://jsbooks.revolunet.com/img/cover_nodemixu.png",
				"tags": [
					"nodejs"
				]
			},
			{
				"title": "Single page apps in depth",
				"author": "Mikito Takada",
				"authorUrl": "http://mixu.net/",
				"level": "Advanced",
				"info": "Learn the best practices for implementing single page web apps.",
				"url": "http://singlepageappbook.com/",
				"cover": "http://jsbooks.revolunet.com/img/cover_singlepagewebapps.png",
				"tags": [
					"spa",
					"frontend"
				]
			},
			{
				"title": "Mastering NodeJS",
				"author": "TJ Holowaychuk",
				"authorUrl": "https://github.com/tj",
				"level": "Advanced",
				"info": "In Mastering Node we will discover how to write high concurrency web servers,вЂ¦",
				"url": "http://github.com/visionmedia/masteringnode/raw/master/book.pdf",
				"cover": "http://jsbooks.revolunet.com/img/cover_masteringnode.png",
				"tags": [
					"nodejs"
				]
			},
			{
				"title": "JS The Right Way",
				"author": "William Oliveira",
				"authorUrl": "https://twitter.com/gnuwilliam",
				"level": "Intermediate",
				"info": "An easy-to-read, quick reference for JS best practices, accepted coding standards, and links around the Web.",
				"url": "http://jstherightway.org/",
				"cover": "http://jsbooks.revolunet.com/img/cover_jsrightway.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "Programming Windows 8 Apps",
				"author": "Devon Musgrave",
				"authorUrl": "http://social.msdn.microsoft.com/profile/devon%20musgrave/",
				"level": "Beginner",
				"info": "[NOTE : Download needed]This book is about writing Windows Store apps using HTML5, CSS3, and JavaScript.",
				"url": "http://go.microsoft.com/FWLink/?Linkid=270056",
				"cover": "http://jsbooks.revolunet.com/img/cover_windows8app.png",
				"tags": [
					"windows"
				]
			},
			{
				"title": "CoffeeScript Cookbook",
				"author": "Multiple Owner",
				"authorUrl": "https://coffeescript-cookbook.github.io/authors",
				"level": "Beginner",
				"info": "CoffeeScript recipes for the community by the community.",
				"url": "https://coffeescript-cookbook.github.io/",
				"cover": "http://jsbooks.revolunet.com/img/cover_coffeescriptcookbook.png",
				"tags": [
					"coffeescript"
				]
			},
			{
				"title": "DOM Enlightenment",
				"author": "Cody Lindley",
				"authorUrl": "http://twitter.com/codylindley",
				"level": "Advanced",
				"info": "Exploring the relationship between JavaScript and the modern HTML DOM",
				"url": "http://domenlightenment.com/",
				"cover": "http://jsbooks.revolunet.com/img/cover_domenlightenment.png",
				"tags": [
					"dom",
					"frontend"
				]
			},
			{
				"title": "Bootstrap, Responsive Web Development",
				"author": "Jake Spurlock",
				"authorUrl": "https://jakespurlock.com",
				"level": "Beginner",
				"info": "Discover how easy it is to design killer interfaces and responsive websites with the Bootstrap framework. This practical book gets you started building pages with BootstrapвЂ™s HTML/CSS-based tools and design templates right away. YouвЂ™ll also learn how to extend your app with interactive features, using its suite of jQuery pluginsвЂ”often without writing a single line of code.",
				"url": "https://github.com/whyisjake/bootstrap",
				"cover": "http://jsbooks.revolunet.com/img/cover_bootstrap.png",
				"tags": [
					"bootstrap",
					"frontend"
				]
			},
			{
				"title": "Art of Node",
				"author": "Max Odgen",
				"authorUrl": "https://maxodgen.com",
				"level": "Intermediate",
				"info": "a free short e-book that teaches you the fundamentals of Node.js by Max Odgen, a popular Node supporter",
				"url": "https://github.com/maxogden/art-of-node",
				"cover": "http://jsbooks.revolunet.com/img/artofnode.png",
				"tags": [
					"nodejs"
				]
			},
			{
				"title": "Stream handbook",
				"author": "James Halliday (substack)",
				"authorUrl": "http://substack.net",
				"level": "Advanced",
				"info": "a free short e-book that teaches you how to write node programs with streams, by James Halliday a famous NodeJS supporter that published numerous awesome NodeJS modules",
				"url": "https://github.com/substack/stream-handbook",
				"cover": "http://jsbooks.revolunet.com/img/streamshandbook.png",
				"tags": [
					"nodejs"
				]
			},
			{
				"title": "JavaScript Succinctly",
				"author": "Cody Lindley",
				"authorUrl": "http://twitter.com/codylindley",
				"level": "Beginner",
				"info": "JavaScript Succinctly was written to give readers an accurate, concise examination of JavaScript objects and their supporting nuances, such as complex values, primitive values, scope, inheritance, the head object, and more. If youвЂ™re an intermediate JavaScript developer and want to solidify your understanding of the language, or if youвЂ™ve only used JavaScript beneath the mantle of libraries such as jQuery or Prototype, this is the book for you.",
				"url": "http://www.syncfusion.com/resources/techportal/ebooks/javascript",
				"cover": "http://jsbooks.revolunet.com/img/cover_javascriptsuccinctly.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "jQuery Succinctly",
				"author": "Cody Lindley",
				"authorUrl": "http://twitter.com/codylindley",
				"level": "Intermediate",
				"info": "jQuery Succinctly was written to express, in short-order, the concepts essential to intermediate and advanced jQuery development. Its purpose is to instill in you, the reader, practices that jQuery developers take as common knowledge. Each chapter contains concepts essential to becoming a seasoned jQuery developer.",
				"url": "http://www.syncfusion.com/resources/techportal/ebooks/jquery",
				"cover": "http://jsbooks.revolunet.com/img/cover_jquerysuccinctly.png",
				"tags": [
					"jquery"
				]
			},
			{
				"title": "Knockout.js Succinctly",
				"author": "Ryan Hodson",
				"authorUrl": "http://rypress.com/",
				"level": "Intermediate",
				"info": "Knockout.js Succinctly is intended for professional web developers who need to build dynamic, scalable user interfaces with minimal code. Author Ryan Hodson guides you through the essentials of the library, starting with a brief overview of Knockout and its data-oriented aspects, followed by a thorough examination of binding data to various HTML elements, and finally examples of accessing external data and combining Knockout with jQuery animation routines.",
				"url": "http://www.syncfusion.com/resources/techportal/ebooks/knockoutjs",
				"cover": "http://jsbooks.revolunet.com/img/cover_knockoutjssuccinctly.png",
				"tags": [
					"knockout"
				]
			},
			{
				"title": "TypeScript Succinctly",
				"author": "Steve Fenton",
				"authorUrl": "http://www.stevefenton.co.uk/",
				"level": "Intermediate",
				"info": "With TypeScript Succinctly by Steve Fenton, you will learn how TypeScript provides optional static typing and classes to JavaScript development, how to create and load modules, and how to work with existing JavaScript libraries through ambient declarations. TypeScript is even significantly integrated with Visual Studio to provide the autocompletion and type checking you are most comfortable with.",
				"url": "http://www.syncfusion.com/resources/techportal/ebooks/typescript",
				"cover": "http://jsbooks.revolunet.com/img/cover_typescriptsuccinctly.png",
				"tags": [
					"typescript"
				]
			},
			{
				"title": "AngularJS Fundamentals in 60 minutes",
				"author": "Dan Wahlin",
				"authorUrl": "https://blog.codewithdan.com/",
				"level": "Beginner",
				"info": "This eBook is a documented transcription of the famous 'AngularJS in 60 minutes' video; The ebook is going through all of the key fundamentals you need to know about the AngularJS SPA framework.",
				"url": "http://fastandfluid.com/publicdownloads/AngularJSIn60MinutesIsh_DanWahlin_May2013.pdf",
				"cover": "http://jsbooks.revolunet.com/img/angular-fundamentals.jpg",
				"tags": [
					"angularjs",
					"frontend"
				]
			},
			{
				"title": "JavaScript Allonge",
				"author": "Reginald Braithwaite",
				"authorUrl": "http://braythwayt.com/",
				"level": "Intermediate",
				"info": "JavaScript AllongГ© is a book about programming with functions, because JavaScript is a programming language built on flexible and powerful functions.",
				"url": "https://leanpub.com/javascriptallongesix/read",
				"cover": "http://jsbooks.revolunet.com/img/JavaScriptAllonge.jpg",
				"tags": [
					"core"
				]
			},
			{
				"title": "jQuery Enlightenment",
				"author": "Cody Lindley",
				"authorUrl": "http://www.jqueryenlightenment.com",
				"level": "Intermediate",
				"info": "A book for jQuery developers who have surpassed the introductory concepts.",
				"url": "http://jqueryenlightenment.com/jquery_enlightenment.pdf",
				"cover": "http://jsbooks.revolunet.com/img/cover_jqueryenlight.png",
				"tags": [
					"jquery",
					"frontend"
				]
			},
			{
				"title": "D3 Tips and Tricks",
				"author": "Malcolm Maclean",
				"authorUrl": "https://leanpub.com/u/d3noob",
				"level": "Intermediate",
				"info": "Over 430 pages of tips and tricks for using d3.js, one of the leading data visualization tools for the web. It's aimed at helping people get started and also includes loads of help for more complicated tasks.",
				"url": "https://leanpub.com/D3-Tips-and-Tricks/read",
				"cover": "http://jsbooks.revolunet.com/img/cover_d3tips.jpg",
				"tags": [
					"d3",
					"frontend"
				]
			},
			{
				"title": "Recipes with Angular.js",
				"author": "Frederik Dietz",
				"authorUrl": "http://fdietz.de/",
				"level": "Beginner",
				"info": "Practical concepts and techniques for rapid web application development",
				"url": "https://leanpub.com/recipes-with-angular-js/read",
				"cover": "http://jsbooks.revolunet.com/img/recipes_with_angular.png",
				"tags": [
					"angularjs",
					"frontend"
				]
			},
			{
				"title": "Speaking Javascript",
				"author": "Axel Rauschmayer",
				"authorUrl": "http://www.rauschma.de/",
				"level": "Beginner",
				"info": "Like it or not, JavaScript is everywhere these daysвЂ”from browser to server to mobileвЂ”and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
				"url": "http://speakingjs.com/es5",
				"cover": "http://jsbooks.revolunet.com/img/speakingjs.jpg",
				"tags": [
					"core"
				]
			},
			{
				"title": "You Don't Know JS (series)",
				"author": "Kyle Simpson",
				"authorUrl": "http://getify.me",
				"level": "Advanced",
				"info": "Learn and deeply know *all* of JS (not just the 'good parts')",
				"url": "http://YouDontKnowJS.com",
				"cover": "http://jsbooks.revolunet.com/img/ydkjs.jpg",
				"tags": [
					"core"
				]
			},
			{
				"title": "ECMAscript language reference",
				"author": "various authors",
				"authorUrl": "http://www.ecma-international.org",
				"level": "Advanced",
				"info": "Learn all about the Javacript language specifications with this official ECMA-262 bible.",
				"url": "http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf",
				"cover": "http://jsbooks.revolunet.com/img/ecma-262.jpg",
				"tags": [
					"core"
				]
			},
			{
				"title": "Human Javascript",
				"author": "Henrik Joreteg",
				"authorUrl": "http://www.andyet.com",
				"level": "Intermediate",
				"info": "Practical patterns for simple but powerful javascript apps. No magic frameworks. No monolithic toolkits. You're going to work with proper, real-life javascript in a way you'll understand, and with explanations that help you learn how to make great choices as you build your apps.",
				"url": "http://read.humanjavascript.com/ch01-introduction.html",
				"cover": "http://jsbooks.revolunet.com/img/human-javascript.jpg",
				"tags": [
					"core"
				]
			},
			{
				"title": "Canvassing",
				"author": "Seth Vincent",
				"authorUrl": "http://sethvincent.com",
				"level": "Beginner",
				"info": "Learn to use JavaScript and the HTML5 canvas tag to create art, games, and other creative coding projects.",
				"url": "http://learnjs.io/canvassing/read",
				"cover": "http://jsbooks.revolunet.com/img/cover_canvassing.png",
				"tags": [
					"games",
					"frontend"
				]
			},
			{
				"title": "Understanding ECMAScript 6",
				"author": "Nicholas C. Zakas",
				"authorUrl": "http://www.nczonline.net",
				"level": "Intermediate",
				"info": "ECMAScript 6 is coming, are you ready? There's a lot of new concepts to learn and understand. Get a headstart with this book!",
				"url": "https://leanpub.com/understandinges6/read/",
				"cover": "http://jsbooks.revolunet.com/img/understandinges6.jpg",
				"tags": [
					"core"
				]
			},
			{
				"title": "Programming JavaScript Applications",
				"author": "Eric Elliott",
				"authorUrl": "http://ericelliottjs.com/",
				"level": "Intermediate",
				"info": "Take advantage of JavaScriptвЂ™s power to build robust web-scale or enterprise applications that are easy to extend and maintain.",
				"url": "http://chimera.labs.oreilly.com/books/1234000000262",
				"cover": "http://jsbooks.revolunet.com/img/Programming-JavaScript-Applications.jpg",
				"tags": [
					"core"
				]
			},
			{
				"title": "Javascript Challenges",
				"author": "Tomas Corral",
				"authorUrl": "http://javascriptnews.overblog.com/",
				"level": "Intermediate",
				"info": "A book to challenge your knowledge about the most obscure parts of Javascript. Learn with us and don't be afraid again of Javascript.",
				"url": "https://github.com/tcorral/javascript-challenges-book",
				"cover": "http://jsbooks.revolunet.com/img/javascript_challenges.jpg",
				"tags": [
					"core"
				]
			},
			{
				"title": "Angular Succinctly",
				"author": "Frederik Dietz",
				"authorUrl": "http://twitter.com/fdietz",
				"level": "Beginner",
				"info": "Whether you are a novice looking to understand Angular.js or an expert seeking a reference guide, AngularJS Succinctly is indispensable!",
				"url": "https://www.syncfusion.com/resources/techportal/ebooks/angularjs",
				"cover": "http://jsbooks.revolunet.com/img/cover_angularjssuccinctly.jpg",
				"tags": [
					"angularjs",
					"frontend"
				]
			},
			{
				"title": "The offline cookbook",
				"author": "Jake Archibald",
				"authorUrl": "http://jakearchibald.com/",
				"level": "Intermediate",
				"info": "Excellent overview and recipes using the current offline browsers capabilities",
				"url": "http://jakearchibald.com/2014/offline-cookbook/",
				"cover": "http://jsbooks.revolunet.com/img/offlinecookbook.jpg",
				"tags": [
					"mobile",
					"html5",
					"frontend"
				]
			},
			{
				"title": "You Don't Know JS: Up & Going",
				"author": "Kyle Simpson",
				"authorUrl": "https://twitter.com/getify",
				"level": "Beginner",
				"info": "ItвЂ™s easy to learn parts of JavaScript, but much harder to learn it completelyвЂ”or even sufficientlyвЂ”whether youвЂ™re new to the language or have used it for years. With the 'You DonвЂ™t Know JS' book series, youвЂ™ll get a more complete understanding of JavaScript, including trickier parts of the language that many experienced...",
				"url": "http://shop.oreilly.com/product/0636920039303.do",
				"cover": "http://jsbooks.revolunet.com/img/YDKJS-UpAndGoing.jpg",
				"tags": [
					"core"
				]
			},
			{
				"title": "Felix's Node.js Guide",
				"author": "Felix GeisendГ¶rfer",
				"authorUrl": "http://twitter.com/felixge",
				"level": "Intermediate",
				"info": "Node.js Beginner Guide and Style Guide. The guide is a work in progress by Felix GeisendГ¶rfer, an early Node.js core contributor.",
				"url": "http://nodeguide.com/",
				"cover": "http://jsbooks.revolunet.com/img/cover_felix_nodejs_guide.png",
				"tags": [
					"nodejs",
					"core",
					"backend"
				]
			},
			{
				"title": "Exploring ES6",
				"author": "Axel Rauschmayer",
				"authorUrl": "http://www.2ality.com/",
				"level": "Intermediate",
				"info": "Upgrade to the next version of JavaScript",
				"url": "http://exploringjs.com/es6/",
				"cover": "http://jsbooks.revolunet.com/img/cover_exploringes6.png",
				"tags": [
					"core"
				]
			},
			{
				"title": "SurviveJS - Webpack",
				"author": "Juho VepsГ¤lГ¤inen",
				"authorUrl": "https://twitter.com/bebraw",
				"level": "Beginner",
				"info": "Learn to understand Webpack, the bundler.",
				"url": "http://survivejs.com/webpack/introduction",
				"cover": "http://jsbooks.revolunet.com/img/cover_survivejs_webpack.png",
				"tags": [
					"webpack",
					"frontend"
				]
			},
			{
				"title": "SurviveJS - React",
				"author": "Juho VepsГ¤lГ¤inen",
				"authorUrl": "https://twitter.com/bebraw",
				"level": "Beginner",
				"info": "Learn how to build a Kanban application using React.",
				"url": "http://survivejs.com/react/introduction",
				"cover": "http://jsbooks.revolunet.com/img/cover_survivejs_react.png",
				"tags": [
					"react",
					"frontend"
				]
			},
			{
				"title": "Mostly adequate guide to functional programming",
				"author": "Brian Lonsdorf (DrBoolean)",
				"authorUrl": "https://twitter.com/drboolean",
				"level": "Intermediate",
				"info": "Pure Happiness with Pure Functions",
				"url": "https://github.com/DrBoolean/mostly-adequate-guide",
				"cover": "http://jsbooks.revolunet.com/img/cover_mostly-adequate-guide.jpg",
				"tags": [
					"fp"
				]
			},
			{
				"title": "The introduction to Reactive Programming you've been missing",
				"author": "AndrГ© Staltz (andrestaltz)",
				"authorUrl": "https://twitter.com/andrestaltz",
				"level": "Intermediate",
				"info": "So you're curious in learning this new thing called Reactive Programming, particularly its variant comprising of Rx, Bacon.js, RAC, and others.",
				"url": "https://gist.github.com/staltz/868e7e9bc2a7b8c1f754",
				"cover": "http://jsbooks.revolunet.com/img/rxintro.jpg",
				"tags": [
					"fp"
				]
			},
			{
				"title": "Book on Building Front-End Web Apps with Plain JavaScript",
				"author": "Gerd Wagner",
				"authorUrl": "https://plus.google.com/104237216582874489152",
				"level": "Intermediate",
				"info": "This book shows how to build front-end web applications with plain JavaScript, not using any (third-party) framework or library.",
				"url": "https://oxygen.informatik.tu-cottbus.de/webeng/JsFrontendApp/book/",
				"cover": "http://jsbooks.revolunet.com/img/buildingfrontend.jpg",
				"tags": [
					"frontend"
				]
			},
			{
				"title": "AngularJS Directives in Traction",
				"author": "Amit Gharat",
				"authorUrl": "https://amitgharat.wordpress.com/",
				"level": "Intermediate",
				"info": "This eBook helps you understand how built-in directives work and teaches you to build custom directives on your own.",
				"url": "http://codef0rmer.gitbooks.io/angularjs-directives-in-traction-the-book/",
				"cover": "http://jsbooks.revolunet.com/img/angular-directives-in-traction.jpg",
				"tags": [
					"angularjs",
					"angular directives",
					"frontend"
				]
			}
		]
	};

/***/ }
/******/ ]);