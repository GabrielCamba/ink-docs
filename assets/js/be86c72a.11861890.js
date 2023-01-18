"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[235],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),u=n,d=h["".concat(l,".").concat(u)]||h[u]||m[u]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={title:"Why WebAssembly for Smart Contracts?",slug:"/why-webassembly-for-smart-contracts"},i=void 0,s={unversionedId:"intro/why-webassembly",id:"intro/why-webassembly",title:"Why WebAssembly for Smart Contracts?",description:"* High performance: Wasm is high performance \u2014 it\u2019s built to be as close to native machine code as possible while still being platform independent.",source:"@site/docs/intro/why-webassembly.md",sourceDirName:"intro",slug:"/why-webassembly-for-smart-contracts",permalink:"/why-webassembly-for-smart-contracts",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/intro/why-webassembly.md",tags:[],version:"current",frontMatter:{title:"Why WebAssembly for Smart Contracts?",slug:"/why-webassembly-for-smart-contracts"},sidebar:"reference",previous:{title:"Why Rust for Smart Contracts?",permalink:"/why-rust-for-smart-contracts"},next:{title:"How it Works \u2012 Substrate",permalink:"/how-it-works"}},l={},c=[],p={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"High performance: "),"Wasm is high performance \u2014 it\u2019s built to be as close to native machine code as possible while still being platform independent."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Small size: "),"It facilitates small binaries to ship over the internet to devices with potentially slow internet connection. This is a great fit for the space-constrainted blockchain world."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"General VM & bytecode: "),"It was developed so that code can be deployed in any browser with the same result. Contrary to the EVM it was not developed towards a very specific use case, this has the benefit of a lot of tooling being available and large companies putting a lot of resources into furthering Wasm development."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Efficient JIT execution: "),"64 and 32-bit integer operation support that maps one-to-one with CPU instructions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Minimalistic: ")," Formal spec that fits on a single page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Deterministic execution: "),"Wasm is easily made deterministic by removing floating point operations, which is necessary for consensus algorithms."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Open Standards > Custom Solutions: "),"Wasm is a standard for web browsers developed by W3C workgroup that includes Google, Mozilla, and others. There\u2019s been many years of work put into Wasm, both by compiler and standardisation teams."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Many languages available: ")," Wasm expands the family of languages available to smart contract developers to include Rust, C/C++, C#, Typescript, Haxe, and Kotlin. This means you can write smart contracts in whichever language you\u2019re familiar with, though we\u2019re partial to Rust due to its lack of runtime overhead and inherent security properties."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Memory-safe, sandboxed, and platform-independent.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"LLVM support: "),"Supported by the LLVM compiler infrastructure project, meaning that Wasm benefits from over a decade of LLVM\u2019s compiler optimisation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{class:"highlight"},"Large companies involved: ")," Continually developed by major companies such as Google, Apple, Microsoft, Mozilla, and Facebook.")))}m.isMDXComponent=!0}}]);