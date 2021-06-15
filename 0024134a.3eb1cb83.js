(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{111:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=a.a.createContext({}),p=function(t){var e=a.a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.a.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,b=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(b,".").concat(m)]||d[m]||s[m]||i;return n?a.a.createElement(f,l(l({ref:e},c),{},{components:n})):a.a.createElement(f,l({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,b=new Array(i);b[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:r,b[1]=l;for(var c=2;c<i;c++)b[c]=n[c];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return o})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(111)),b=["components"],l={title:"ink! vs. Solidity",slug:"/ink-vs-solidity"},o={unversionedId:"intro/ink-vs-solidity",id:"intro/ink-vs-solidity",isDocsHomePage:!1,title:"ink! vs. Solidity",description:"Here is a brief comparison of features between ink! and Solidity:",source:"@site/docs/intro/ink-vs-solidity.md",slug:"/ink-vs-solidity",permalink:"/ink-docs/ink-vs-solidity",editUrl:"https://github.com/ink-docs/edit/master/docs/intro/ink-vs-solidity.md",version:"current",sidebar:"reference",previous:{title:"How it Works \u2012 Substrate",permalink:"/ink-docs/how-it-works"},next:{title:"Setup",permalink:"/ink-docs/getting-started/setup"}},c=[],p={rightToc:c};function d(t){var e=t.components,n=Object(a.a)(t,b);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Here is a brief comparison of features between ink! and Solidity:"),Object(i.b)("div",{class:"comparison"},Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"}),Object(i.b)("th",{parentName:"tr",align:"left"},"ink!"),Object(i.b)("th",{parentName:"tr",align:"left"},"Solidity"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Virtual Machine"),Object(i.b)("td",{parentName:"tr",align:"left"},"Any Wasm VM"),Object(i.b)("td",{parentName:"tr",align:"left"},"EVM")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Encoding"),Object(i.b)("td",{parentName:"tr",align:"left"},"Wasm"),Object(i.b)("td",{parentName:"tr",align:"left"},"EVM Byte Code")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Language"),Object(i.b)("td",{parentName:"tr",align:"left"},"Rust"),Object(i.b)("td",{parentName:"tr",align:"left"},"Standalone")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Overflow Protection"),Object(i.b)("td",{parentName:"tr",align:"left"},"Enabled by default"),Object(i.b)("td",{parentName:"tr",align:"left"},"None")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Constructor Functions"),Object(i.b)("td",{parentName:"tr",align:"left"},"Multiple"),Object(i.b)("td",{parentName:"tr",align:"left"},"Single")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Tooling"),Object(i.b)("td",{parentName:"tr",align:"left"},"Anything that supports Rust"),Object(i.b)("td",{parentName:"tr",align:"left"},"Custom")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Versioning"),Object(i.b)("td",{parentName:"tr",align:"left"},"Semantic"),Object(i.b)("td",{parentName:"tr",align:"left"},"Semantic")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Has Metadata?"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Multi-File Project"),Object(i.b)("td",{parentName:"tr",align:"left"},"Planned"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Storage Entries"),Object(i.b)("td",{parentName:"tr",align:"left"},"Variable"),Object(i.b)("td",{parentName:"tr",align:"left"},"256 bits")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Supported Types"),Object(i.b)("td",{parentName:"tr",align:"left"},"Docs"),Object(i.b)("td",{parentName:"tr",align:"left"},"Docs")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Has Interfaces?"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes (Rust Traits)"),Object(i.b)("td",{parentName:"tr",align:"left"},"Yes"))))))}d.isMDXComponent=!0}}]);