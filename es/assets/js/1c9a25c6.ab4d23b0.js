"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5696],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||s;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[f]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={title:"transfer",hide_title:!0,description:"Transfer tokens to an address"},o="transfer",c={unversionedId:"frontend/core/substrate/transfer",id:"frontend/core/substrate/transfer",title:"transfer",description:"Transfer tokens to an address",source:"@site/docs/frontend/core/substrate/transfer.md",sourceDirName:"frontend/core/substrate",slug:"/frontend/core/substrate/transfer",permalink:"/es/frontend/core/substrate/transfer",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/substrate/transfer.md",tags:[],version:"current",frontMatter:{title:"transfer",hide_title:!0,description:"Transfer tokens to an address"},sidebar:"reference",previous:{title:"getTimestampDate",permalink:"/es/frontend/core/substrate/get-timestamp-date"},next:{title:"chainDecimals",permalink:"/es/frontend/core/substrate/chain-decimals"}},i={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}],u={toc:l},f="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transfer"},"transfer"),(0,a.kt)("p",null,"Transfer tokens to an address"),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { transfer } from 'useink/core'\n\nconst to = '5EyR7vEk7DtvEWeefGcXXMV6hKwB8Ex5uvjHufm466mbjJkR'\nconst amount = 1_000_000\nconst hash = await transfer(apiPromiseInstance, to, amount, signer)\nconsole.log(hash.toHex())\n")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Hash extends H256;\n")))}p.isMDXComponent=!0}}]);