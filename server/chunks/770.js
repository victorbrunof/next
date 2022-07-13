"use strict";
exports.id = 770;
exports.ids = [770];
exports.modules = {

/***/ 5257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
// EXTERNAL MODULE: ./src/contexts/SidebarDrawerContext.tsx
var SidebarDrawerContext = __webpack_require__(611);
;// CONCATENATED MODULE: ./src/components/Header/Logo.tsx


function Logo() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
        fontSize: [
            "2xl",
            "3xl"
        ],
        fontWeight: "bold",
        letterSpacing: "tight",
        w: "64",
        children: [
            "dashgo",
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                as: "span",
                ml: "1",
                color: "pink.500",
                children: "."
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Header/NotificationsNav.tsx



function NotificationsNav() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
        spacing: [
            "6",
            "8"
        ],
        mx: [
            "6",
            "8"
        ],
        pr: [
            "6",
            "8"
        ],
        py: "1",
        color: "gray.300",
        borderRightWidth: 1,
        borderColor: "gray.700",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                as: ri_.RiNotificationLine,
                fontSize: "20"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                as: ri_.RiUserAddLine,
                fontSize: "20"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Header/Profile.tsx


function Profile({ showProfileData =true  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        align: "center",
        children: [
            showProfileData && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                mr: "4",
                textAlign: "right",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: "Victor Bruno"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        color: "gray.300",
                        fontSize: "small",
                        children: "victorbrunof@icloud.com"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                size: "md",
                name: "Victor Bruno",
                src: "https://github.com/victorbrunof.png"
            })
        ]
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Header/SearchBox.tsx




function SearchBox() {
    // const [search, setSearch] = useState('') 
    const searchInputRef = (0,external_react_.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        as: "label",
        flex: "1",
        py: "4",
        px: "8",
        ml: "6",
        maxWidth: "400",
        alignSelf: "center",
        color: "gray.200",
        position: "relative",
        bg: "gray.800",
        borderRadius: "full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                color: "gray.50",
                variant: "unstyled",
                px: "4",
                mr: "4",
                placeholder: "Buscar na plataforma",
                _placeholder: {
                    color: "gray.400"
                },
                ref: searchInputRef
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                as: ri_.RiSearchLine,
                fontSize: "20"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Header/index.tsx








function Header() {
    const { onOpen  } = (0,SidebarDrawerContext/* useSidebarDrawer */.S)();
    const isWideVersion = (0,react_.useBreakpointValue)({
        base: false,
        lg: true
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        as: "header",
        w: "100%",
        maxWidth: 1480,
        h: "20",
        mx: "auto",
        mt: "4",
        px: "6",
        align: "center",
        children: [
            !isWideVersion && /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                "aria-label": "Open navigation",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                    as: ri_.RiMenuLine
                }),
                fontSize: "24",
                variant: "unstyled",
                onClick: onOpen,
                mr: "2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
            isWideVersion && /*#__PURE__*/ jsx_runtime_.jsx(SearchBox, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                align: "center",
                ml: "auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NotificationsNav, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Profile, {
                        showProfileData: isWideVersion
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/contexts/SidebarDrawerContext.tsx
var SidebarDrawerContext = __webpack_require__(611);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/ActiveLink.tsx




function ActiveLink({ children , shouldMatchExactHref =false , ...rest }) {
    const { asPath  } = (0,router_.useRouter)();
    let isActive = false;
    //if (asPath === rest.href || asPath === rest.as) {
    if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }
    if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
        isActive = true;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        ...rest,
        children: /*#__PURE__*/ (0,external_react_.cloneElement)(children, {
            color: isActive ? "pink.400" : "gray.50"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Sidebar/NavLink.tsx



function NavLink({ icon , children , href , ...rest }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink, {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
            display: "flex",
            alignItems: "center",
            ...rest,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                    as: icon,
                    fontSize: "20"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    ml: "4",
                    fontWeight: "medium",
                    children: children
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Sidebar/NavSection.tsx


function NavSection({ title , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                fontWeight: "bold",
                color: "gray.400",
                fontSize: "small",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                spacing: "4",
                mt: "8",
                align: "stretch",
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Sidebar/SidebarNav.tsx





function SidebarNav() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        spacing: "12",
        align: "flex-star",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavSection, {
                title: "GERAL",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                        icon: ri_.RiDashboardLine,
                        href: "/dashboard",
                        children: "Dashboard"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                        icon: ri_.RiContactsLine,
                        href: "/users",
                        children: "Usu\xe1rios"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavSection, {
                title: "AUTOMA\xc7\xc2O",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                        icon: ri_.RiInputMethodLine,
                        href: "/forms",
                        children: "Formul\xe1rios"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                        icon: ri_.RiGitMergeLine,
                        href: "/automation",
                        children: "Automa\xe7\xe3o"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Sidebar/index.tsx




function Sidebar() {
    const { isOpen , onClose  } = (0,SidebarDrawerContext/* useSidebarDrawer */.S)();
    const isDrawerSidebar = (0,react_.useBreakpointValue)({
        base: true,
        lg: false
    });
    if (isDrawerSidebar) {
        return /*#__PURE__*/ jsx_runtime_.jsx(react_.Drawer, {
            isOpen: isOpen,
            placement: "left",
            onClose: onClose,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerOverlay, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerContent, {
                    bg: "gray.800",
                    p: "4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerCloseButton, {
                            mt: "6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerHeader, {
                            children: "Navega\xe7\xe3o"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerBody, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(SidebarNav, {})
                        })
                    ]
                })
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "aside",
        w: "64",
        mr: "8",
        children: /*#__PURE__*/ jsx_runtime_.jsx(SidebarNav, {})
    });
}


/***/ }),

/***/ 611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ SidebarDrawerProvider),
/* harmony export */   "S": () => (/* binding */ useSidebarDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const SidebarDrawerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});
function SidebarDrawerProvider({ children  }) {
    const disclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        disclosure.onClose();
    }, [
        router.asPath
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarDrawerContext.Provider, {
        value: disclosure,
        children: children
    });
}
const useSidebarDrawer = ()=>(0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(SidebarDrawerContext);


/***/ })

};
;