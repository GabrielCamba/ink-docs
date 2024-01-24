"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5934],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),c=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=c(r),h=n,f=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return r?a.createElement(f,s(s({ref:e},u),{},{components:r})):a.createElement(f,s({ref:e},u))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[p]="string"==typeof t?t:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},59387:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Why Rust for Smart Contracts?",hide_title:!0,slug:"/why-rust-for-smart-contracts"},s=void 0,i={unversionedId:"intro/why-rust",id:"intro/why-rust",title:"Why Rust for Smart Contracts?",description:"ink! chooses not to invent a new programming language, but rather adapt a subset of Rust to serve our purpose.",source:"@site/docs/intro/why-rust.md",sourceDirName:"intro",slug:"/why-rust-for-smart-contracts",permalink:"/why-rust-for-smart-contracts",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/intro/why-rust.md",tags:[],version:"current",frontMatter:{title:"Why Rust for Smart Contracts?",hide_title:!0,slug:"/why-rust-for-smart-contracts"},sidebar:"reference",previous:{title:"Welcome!",permalink:"/"},next:{title:"Why WebAssembly for Smart Contracts?",permalink:"/why-webassembly-for-smart-contracts"}},l={},c=[],u={toc:c},p="wrapper";function m(t){let{components:e,...r}=t;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("img",{src:"/img/title/rust.svg",className:"titlePic"}),(0,n.kt)("h1",{id:"why-rust-for-smart-contracts"},"Why Rust for Smart Contracts?"),(0,n.kt)("p",null,"ink! chooses not to invent a new programming language, but rather adapt a subset of Rust to serve our purpose.\nIf this doesn't already convince you, you find many more good reasons here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Rust is an ideal smart contract language:")," It is type safe, memory safe, and free of undefined behaviors. It generates small binaries because it doesn\u2019t include extra bloat, like a garbage collector, and advanced optimizations and tree shaking remove dead code. Through compiler flags, Rust can automatically protect against integer overflow."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Rust ecosystem:")," You gain from all of the support available to the Rust ecosystem for free. As the language develops, ink! will automatically gain access to new features and functionality, improving how you can write smart contracts in the future."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Tooling:")," Because ink! follows Rust standards, tools like rustfmt, clippy and rust-analyzer already work out of the box. The same goes for code formatting and syntax highlighting in most modern text editors. Also, Rust has an integrated test and benchmark runner,"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"No overhead:")," Minimal runtime."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Safe & Efficient:")," Zero-cost & safe abstractions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Productive:")," Cargo + ",(0,n.kt)("a",{href:"https://crates.io"},"crates.io")," Ecosystem."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"1st class Wasm:")," Rust provides the first class support for the WebAssembly."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Small Size:")," In the space-constrained blockchain world size is important. The Rust compiler is a great help for that, since it reorders struct fields in order to make each type as small as possible. Thus, Rust data structures are very compact, in many cases even more compact than in C.")))}m.isMDXComponent=!0}}]);