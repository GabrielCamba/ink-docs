"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={title:"no_main",hide_title:!0,description:"no_main lint documentation"},a="no_main",l={unversionedId:"linter/rules/no_main",id:"version-5.x/linter/rules/no_main",title:"no_main",description:"no_main lint documentation",source:"@site/versioned_docs/version-5.x/linter/rules/no_main.md",sourceDirName:"linter/rules",slug:"/linter/rules/no_main",permalink:"/es/5.x/linter/rules/no_main",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/linter/rules/no_main.md",tags:[],version:"5.x",frontMatter:{title:"no_main",hide_title:!0,description:"no_main lint documentation"},sidebar:"reference",previous:{title:"Overview",permalink:"/es/5.x/linter/overview"},next:{title:"primitive_topic",permalink:"/es/5.x/linter/rules/primitive_topic"}},c={},s=[{value:"What it does",id:"what-it-does",level:2},{value:"Why is this necessary?",id:"why-is-this-necessary",level:2},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"no_main"},"no_main"),(0,i.kt)("h2",{id:"what-it-does"},"What it does"),(0,i.kt)("p",null,"Checks if a contract is annotated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"no_main")," inner attribute."),(0,i.kt)("h2",{id:"why-is-this-necessary"},"Why is this necessary?"),(0,i.kt)("p",null,"Contracts must be annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"no_main")," inner attribute when compiled for on-chain\nexecution."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// Bad: Contract does not contain the `no_main` attribute,\n// so it cannot be compiled to Wasm\n#![cfg_attr(not(feature = "std"), no_std)]\n#[ink::contract]\nmod my_contract { /* ... */ }\n')),(0,i.kt)("p",null,"Use instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n#[ink::contract]\nmod my_contract { /* ... */ }\n')))}m.isMDXComponent=!0}}]);