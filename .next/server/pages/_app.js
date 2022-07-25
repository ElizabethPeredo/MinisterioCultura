(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
const react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");
;// CONCATENATED MODULE: external "@fortawesome/free-solid-svg-icons"
const free_solid_svg_icons_namespaceObject = require("@fortawesome/free-solid-svg-icons");
;// CONCATENATED MODULE: ./src/components/Header/Navbar/Navbar.js






function Navbar() {
    function openMenu() {
        let menu = document.querySelector("#menu-bars");
        let navbar = document.querySelector(".navbar__items");
        navbar.classList.toggle("hidden");
    }
    function filterSelection() {
        if (false) {}
    }
    filterSelection();
    function dark() {
        let id = document.querySelector("#__next");
        id.classList.toggle("theme-dark");
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "z-50bg-white px-2 sm:px-4 py-2.5 dark:bg-principal shadow-xl ",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container flex flex-wrap justify-between items-center mx-auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "",
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "https://empleoz.com/media/logo/59b2b6325a0c6037f1aa734e.png",
                                className: "mr-3 h-6 sm:h-9"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "self-center text-xl font-semibold whitespace-nowrap dark:text-white",
                                children: "UE008"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        "data-collapse-toggle": "navbar-default",
                        type: "button",
                        className: "inline-flex items-center p-2 ml-3 text-base text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:txt-color1 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                        "aria-controls": "navbar-default",
                        "aria-expanded": "false",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                            className: "i color1",
                            icon: free_solid_svg_icons_namespaceObject.faBars,
                            id: "menu-bars",
                            onClick: openMenu
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "navbar__items hidden w-full md:block md:w-auto ",
                        id: "navbar-default",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium list-none ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: {
                                            pathname: "/"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "block py-2 pr-4 pl-3 text-txt-color1 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-color2 dark:hover:bg-color1 dark:hover:text-white md:dark:hover:bg-transparent text-base ",
                                            "aria-current": "page",
                                            children: "Home"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: {
                                            pathname: "/Blog"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "block py-2 pr-4 pl-3 text-txt-color1 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-color2 dark:hover:bg-color1 dark:hover:text-white md:dark:hover:bg-transparent text-base",
                                            children: "Blog"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: external "@fortawesome/free-brands-svg-icons"
const free_brands_svg_icons_namespaceObject = require("@fortawesome/free-brands-svg-icons");
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js





function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "p-4 bg-white shadow-lg shadow-black sm:p-6 dark:bg-principal block",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center sm:justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "text-sm text-gray-500 sm:text-center dark:text-gray-400",
                    children: [
                        "\xa9 2022 ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "",
                            className: "hover:underline",
                            children: "Unidad Ejecutora 008™"
                        }),
                        ". All Rights Reserved."
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex mt-4 space-x-6 sm:justify-center sm:mt-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-gray-500 hover:text-gray-900 dark:hover:text-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                    className: "",
                                    icon: free_brands_svg_icons_namespaceObject.faFacebook
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-gray-500 hover:text-gray-900 dark:hover:text-white",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                    className: "",
                                    icon: free_brands_svg_icons_namespaceObject.faFacebook
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(5800);
;// CONCATENATED MODULE: external "@fortawesome/fontawesome-svg-core"
const fontawesome_svg_core_namespaceObject = require("@fortawesome/fontawesome-svg-core");
;// CONCATENATED MODULE: ./pages/_app.js



 //importing font awesome css

fontawesome_svg_core_namespaceObject.config.autoAddCss = false;

/*import 'tailwindcss/tailwind.css';*/ function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5800:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675], () => (__webpack_exec__(1187)));
module.exports = __webpack_exports__;

})();