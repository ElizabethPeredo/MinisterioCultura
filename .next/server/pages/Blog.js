"use strict";
(() => {
var exports = {};
exports.id = 128;
exports.ids = [128];
exports.modules = {

/***/ 9190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Blog),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Card/Card.js


function Card({ post  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `card-post ${post.frontmatter.type}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "m-6 flex flex-col bg-white rounded-lg border shadow-lg md:flex-row md:min-w-3xl md:max-w-3xl lg:h-max lg:max-w-2xl dark:bg-white ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "max-h-48 md:w-2/6 md:max-h-full ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "object-cover w-full h-48 md:min-h-full md:w-auto rounded-t-lg md:rounded-none md:rounded-l-lg",
                            src: post.frontmatter.cover_image,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "h-5/6 py-3 px-6 md:w-4/6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "card-tag inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-color1 mr-2 mb-2",
                                children: post.frontmatter.type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-2 text-coolGray-500 dark:text-principal font-medium",
                                "data-config-id": "auto-txt-15-1",
                                "data-path": "0.0.2.1.2",
                                children: post.frontmatter.date
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "leading-6 mb-2 text-txt-color1 dark:text-principal",
                                children: post.frontmatter.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                className: "block text-lg font-bold text-txt-color1 dark:text-principal mr-2 mb-2",
                                children: [
                                    "PIM: ",
                                    post.frontmatter.pim
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/blog/${post.slug}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "inline-flex items-center py-2 px-3 text-base font-medium text-center text-white bg-color2 rounded-lg hover:bg-hv-color2 focus:ring-4 focus:outline-none focus:ring-color2-300 dark:bg-color2 dark:hover:bg-hv-color1",
                                    children: "Leer m\xe1s"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/containers/CardContainer/CardContainer.js


function CardContainer({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "",
        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
            className: "grid col-auto 2xl:grid-cols-2 justify-center mx-4 mb-12 md:mb-20",
            children: children
        })
    });
};

;// CONCATENATED MODULE: ./src/utils/index.js
const sortByDate = (a, b)=>{
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

;// CONCATENATED MODULE: ./src/components/Card/FilterCard.js


function FilterCard() {
    function filterSelection(c) {
        if (false) {}
    }
    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for(i = 0; i < arr2.length; i++){
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }
    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for(i = 0; i < arr2.length; i++){
            while(arr1.indexOf(arr2[i]) > -1){
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }
    filterSelection("all");
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            id: "btnContainer",
            className: "m-1 flex justify-center flex-wrap",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "mt-3 mr-3 text-white bg-principal hover:bg-principal focus:ring-4 focus:outline-none focus:ring-principal font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-color2 dark:hover:bg-principal dark:focus:ring-principal active",
                    onClick: ()=>filterSelection("all"),
                    children: " Mostrar Todo"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "mt-3 mr-3 text-white bg-principal hover:bg-principal focus:ring-4 focus:outline-none focus:ring-principal font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-color2 dark:hover:bg-principal dark:focus:ring-principal",
                    onClick: ()=>filterSelection("Estudio"),
                    children: " Pre Inversi\xf3n"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "mt-3 mr-3 text-white bg-principal hover:bg-principal focus:ring-4 focus:outline-none focus:ring-principal font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-color2 dark:hover:bg-principal dark:focus:ring-principal",
                    onClick: ()=>filterSelection("Inversion"),
                    children: " Inversi\xf3n"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "mt-3 mr-3 text-white bg-principal hover:bg-principal focus:ring-4 focus:outline-none focus:ring-principal font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-color2 dark:hover:bg-principal dark:focus:ring-principal",
                    onClick: ()=>filterSelection("IOARR"),
                    children: " IOARR"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/Blog.js








function Blog({ posts  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(FilterCard, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(CardContainer, {
                children: posts.map((post, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                        post: post
                    }, index))
            })
        ]
    });
};
async function getStaticProps() {
    //**GET FILES FROM THE POST DIR (FOLDER) */
    const files = external_fs_default().readdirSync(external_path_default().join("posts"));
    console.log(files);
    //**GET SLUG AND FRONTMATTER FROM POSTS */
    const posts = files.map((filename)=>{
        //**CREATE SLUG */
        const slug = filename.replace(".md", "");
        //**GET FRONTMATTER */
        const markdownWithMeta = external_fs_default().readFileSync(external_path_default().join("posts", filename), "utf-8");
        const { data: frontmatter  } = external_gray_matter_default()(markdownWithMeta);
        return {
            slug,
            frontmatter
        };
    });
    /*console.log(posts)*/ return {
        props: {
            posts: posts.sort(sortByDate)
        }
    };
}


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(9190)));
module.exports = __webpack_exports__;

})();