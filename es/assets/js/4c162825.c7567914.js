"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4569],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||n;return r?a.createElement(f,s(s({ref:t},l),{},{components:r})):a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<n;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var a=r(87462),o=(r(67294),r(3905));const n={title:"Por qu\xe9 Rust para Smart Contracts?",slug:"/por-que-rust-para-smart-contracts",hide_title:!0},s=void 0,i={unversionedId:"intro/why-rust",id:"version-5.x/intro/why-rust",title:"Por qu\xe9 Rust para Smart Contracts?",description:"ink! no busca crear su nuevo lenguaje de programaci\u0153, sino que busca adaptarse a un subconjunto de rust para poder cumplir su prop\xf3sito. Si esto no es suficiente para convencerte, aqu\xed van otras buenas razones:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/intro/why-rust.md",sourceDirName:"intro",slug:"/por-que-rust-para-smart-contracts",permalink:"/es/5.x/por-que-rust-para-smart-contracts",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/intro/why-rust.md",tags:[],version:"5.x",frontMatter:{title:"Por qu\xe9 Rust para Smart Contracts?",slug:"/por-que-rust-para-smart-contracts",hide_title:!0},sidebar:"reference",previous:{title:"Introducci\xf3n",permalink:"/es/5.x/"},next:{title:"Por qu\xe9 WebAssembly para Smart Contracts?",permalink:"/es/5.x/por-que-webassembly-para-smart-contracts"}},c={},u=[],l={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/title/rust.svg",className:"titlePic"}),(0,o.kt)("h1",{id:"por-qu\xe9-rust-para-smart-contracts"},"Por qu\xe9 Rust para Smart Contracts?"),(0,o.kt)("p",null,"ink! no busca crear su nuevo lenguaje de programaci\u0153, sino que busca adaptarse a un subconjunto de rust para poder cumplir su prop\xf3sito. Si esto no es suficiente para convencerte, aqu\xed van otras buenas razones:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Rust es un lenguaje ideal para smart contracts:")," Es type safe, memory safe, y libre de comportamientos indefinidos. Genera peque\xf1os binarios porque no incluye un extra bloat, como garbage collector, y optimizaciones avanzadas y un \xe1rbol que elimina el c\xf3digo muerto. A trav\xe9s de indicadores del compilador, Rust puede proteger autom\xe1ticamente contra el overflow de enteros."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Ecosistema de Rust:")," Obtiene de todo el soporte disponible para el ecosistema de Rust de forma gratuita. A medida que se desarrolla el lenguaje, ink! obtendr\xe1 autom\xe1ticamente acceso a nuevas caracter\xedsticas y funcionalidades, mejorando la forma en que se podran escribir smart contracts en el futuro."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Herramientas:")," Dado que ink! sigue los est\xe1ndares de Rust, herramientas como rustfmt, clippy y rust-analyzer funcionen directamente. Lo mismo sucede con sismtemas de resaltado de sint\xe1xis o formateo de c\xf3digo en los editores de texto moderno. Adem\xe1s, Rust tiene test y benchmark incorporados directamente en el runner."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"No overhead:")," Runtime m\xednimo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Seguro & Eficiente:")," Cero costo y abstraciones seguros."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Productivo:")," Cargo + Ecosistema de ",(0,o.kt)("a",{href:"https://crates.io"},"crates.io"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"1st class Wasm:")," Rust provee soporte primario para WebAssembly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Tama\xf1o compacto:")," El tama\xf1o es importante en los blockchains donde existen restriciones de espacio. El compilador de Rust es ideal en este sentido, dado que reordena los campos de struct para poder hacer cada tipo lo m\xe1s compacto posible. Es por eso que las estructuras de datos en Rust son muy compactas, hasta m\xe1s compactas que en C en ciertos casos.")))}m.isMDXComponent=!0}}]);