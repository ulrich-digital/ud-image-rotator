/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"ud/image-rotator","title":"Bild-Rotator mit Button","category":"media","icon":"format-image","description":"Zeigt zufällig ein Bild, optional mit Button und Text.","textdomain":"ud-plugin","editorStyle":"file:./build/editor-style.css","style":"file:./build/frontend-style.css","editorScript":"file:./build/editor-script.js","script":"file:./build/frontend-script.js","attributes":{"images":{"type":"array","default":[]},"text":{"type":"string","default":""},"buttonUrl":{"type":"string","default":""},"buttonLabelLine1":{"type":"string","default":""},"buttonLabelLine2":{"type":"string","default":""},"enableDateRange":{"type":"boolean","default":false},"startDate":{"type":"string","default":""},"endDate":{"type":"string","default":""}}}');

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/edit.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/edit.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pencil */ "./node_modules/@wordpress/icons/build-module/library/pencil.js");
/**
 * Internal dependencies
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_pencil__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=edit.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/pencil.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/pencil.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const pencil = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pencil);
//# sourceMappingURL=pencil.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/trash.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/trash.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const trash = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trash);
//# sourceMappingURL=trash.js.map

/***/ }),

/***/ "./src/js/edit.js":
/*!************************!*\
  !*** ./src/js/edit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/trash.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/edit.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






function Edit({
  attributes,
  setAttributes
}) {
  const {
    images,
    text,
    buttonUrl,
    buttonLabelLine1,
    buttonLabelLine2,
    startDate,
    endDate,
    enableDateRange
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: "ud-image-rotator-block alignfull"
  });
  const [editing, setEditing] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null); // 'text' | 'button'
  const [showImageModal, setShowImageModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [randomImage, setRandomImage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (images.length > 0) {
      const pick = images[Math.floor(Math.random() * images.length)];
      setRandomImage(pick);
    }
  }, [images]);
  const onSelectImages = media => {
    const selected = Array.isArray(media) ? media : [media];
    const mapped = selected.map(item => {
      // Manuelles srcset bauen:
      const sizeEntries = item.sizes ? Object.values(item.sizes).filter(s => s?.url && s?.width).map(s => `${s.url} ${s.width}w`) : [];
      return {
        id: item.id,
        url: item.url,
        alt: item.alt || "",
        srcset: sizeEntries.join(", "),
        sizes: "100vw" // oder dynamisch
      };
    });
    setAttributes({
      images: mapped
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "ud-image-rotator-block__image-wrapper",
      children: [randomImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: randomImage.url,
        alt: randomImage.alt || ""
      }), showImageModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "image-modal-backdrop",
        onClick: () => setShowImageModal(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "image-modal",
          onClick: e => e.stopPropagation(),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bilder bearbeiten", "ud-plugin")
          }), images.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "image-preview",
            children: images.map((img, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "image-wrapper",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: img.url,
                alt: img.alt || ""
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bild entfernen", "ud-plugin"),
                onClick: () => {
                  const updated = [...images];
                  updated.splice(index, 1);
                  setAttributes({
                    images: updated
                  });
                },
                className: "remove-button"
              })]
            }, img.id))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "button_line",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: () => setShowImageModal(false),
              variant: "link",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Schliessen", "ud-plugin")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                onSelect: onSelectImages,
                allowedTypes: ["image"],
                multiple: true,
                gallery: true,
                value: images.map(img => img.id),
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  onClick: open,
                  isPrimary: true,
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bilder auswählen", "ud-plugin")
                })
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bild bearbeiten", "ud-plugin"),
        onClick: () => setShowImageModal(true),
        className: "edit-button"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "ud-image-rotator-block__text-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "p",
        className: "ud-image-rotator-block__text",
        value: text,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spruch hier eingeben…", "ud-plugin"),
        onChange: val => setAttributes({
          text: val
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "ud-image-rotator-block__button-wrapper",
      children: [(buttonLabelLine1 || buttonLabelLine2) && buttonUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
        href: buttonUrl,
        className: "button",
        children: [buttonLabelLine1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "line1",
          children: buttonLabelLine1
        }), buttonLabelLine2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "line2",
          children: buttonLabelLine2
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Teaser-Button bearbeiten", "ud-plugin"),
        onClick: () => setEditing(editing === "button" ? null : "button"),
        className: "edit-button"
      }), editing === "button" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
        position: "middle center",
        onClose: () => setEditing(null),
        focusOnMount: false,
        anchor: null // ← wirklich null, nicht undefined
        ,
        className: "ud-image-rotator-block__popover teaser_button",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "ud-image-rotator-block__popover__content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Teaser-Button bearbeiten", "ud-plugin")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "input-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: "Button-Text (Zeile 1)",
                value: buttonLabelLine1,
                onChange: val => setAttributes({
                  buttonLabelLine1: val
                }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: "Button-Text (Zeile 2)",
                value: buttonLabelLine2,
                onChange: val => setAttributes({
                  buttonLabelLine2: val
                }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: "Button-Link (URL)",
                value: buttonUrl,
                onChange: val => setAttributes({
                  buttonUrl: val
                }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button zeitlich begrenzen", "ud-plugin"),
            checked: !!enableDateRange,
            onChange: value => setAttributes({
              enableDateRange: value
            }),
            __nextHasNoMarginBottom: true
          }), attributes.enableDateRange && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "date-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Startdatum", "ud-plugin")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DatePicker, {
                currentDate: attributes.startDate,
                onChange: val => setAttributes({
                  startDate: val
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enddatum", "ud-plugin")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DatePicker, {
                currentDate: attributes.endDate,
                onChange: val => setAttributes({
                  endDate: val
                })
              })]
            })]
          })]
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/js/save.js":
/*!************************!*\
  !*** ./src/js/save.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    images,
    text,
    buttonUrl,
    buttonLabelLine1,
    buttonLabelLine2,
    startDate,
    endDate,
    enableDateRange
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: "ud-image-rotator-block alignfull",
    "data-images": JSON.stringify(images)
  });

  // === Datumskontrolle für Button ===
  let showButton = true;
  if (enableDateRange) {
    try {
      const now = new Date();
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      if (start && now < start) showButton = false;
      if (end && now > end) showButton = false;
    } catch (e) {
      console.warn("Fehler beim Datumsvergleich:", e);
      showButton = false;
    }
  }

  // === Target-Regel ===
  let linkTarget = undefined;
  let linkRel = undefined;
  if (buttonUrl) {
    try {
      const isMediaFile = /\.(pdf|jpe?g|png|gif|webp|avif|mp4|mov|zip|docx?)$/i.test(buttonUrl);
      const isExternal = !buttonUrl.startsWith("/") && !buttonUrl.includes(window?.location?.host);
      if (isMediaFile || isExternal) {
        linkTarget = "_blank";
        linkRel = "noopener noreferrer";
      }
    } catch (e) {
      console.warn("Fehler bei Linkprüfung:", e);
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "ud-image-rotator-block__image-wrapper"
    }), text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "ud-image-rotator-block__text-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "p",
        className: "ud-image-rotator-block__text",
        value: text
      })
    }), showButton && (buttonLabelLine1 || buttonLabelLine2) && buttonUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "ud-image-rotator-block__button-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
        href: buttonUrl,
        className: "button",
        target: linkTarget,
        rel: linkRel,
        children: [buttonLabelLine1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "line1",
          children: buttonLabelLine1
        }), buttonLabelLine2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "line2",
          children: buttonLabelLine2
        })]
      })
    })]
  });
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/js/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block.json */ "./block.json");
/**
 * editor.js
 *
 * JavaScript für den Block-Editor (Gutenberg).
 * Wird ausschließlich im Backend geladen.
 *
 * Hinweis:
 * Diese Datei enthält editor-spezifische Interaktionen oder React-Komponenten.
 * Wird über webpack zu editor.js gebündelt und in block.json oder enqueue.php eingebunden.
 */




wp.blocks.registerBlockType(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=editor-script.js.map