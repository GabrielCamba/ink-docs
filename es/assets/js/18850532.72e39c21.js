"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1678],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5184:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"March '22",slug:"/monthly-update/2022/03"},i=void 0,l={unversionedId:"monthly-update/2022/03",id:"monthly-update/2022/03",title:"March '22",description:"StackExchange Beta",source:"@site/docs/monthly-update/2022/03.md",sourceDirName:"monthly-update/2022",slug:"/monthly-update/2022/03",permalink:"/es/monthly-update/2022/03",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/monthly-update/2022/03.md",tags:[],version:"current",frontMatter:{title:"March '22",slug:"/monthly-update/2022/03"}},c={},p=[{value:"StackExchange Beta",id:"stackexchange-beta",level:2},{value:"ink! 3.0 \ud83e\udd91",id:"ink-30-",level:2},{value:"cargo-contract 1.0",id:"cargo-contract-10",level:2},{value:"Delegate Call",id:"delegate-call",level:2},{value:"Workshop &amp; Talk at EthDenver",id:"workshop--talk-at-ethdenver",level:2}],s={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"stackexchange-beta"},"StackExchange Beta"),(0,r.kt)("p",null,"We are participating in the Beta of ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.stackexchange.com/"},"the Substrate StackExchange")," site!"),(0,r.kt)("p",null,"If this StackExchange site gains traction it will be made available to the general public.\nTo reach this goal it's important to have the community engage there though."),(0,r.kt)("p",null,"Head over to ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.stackexchange.com/"},"substrate.stackexchange.com"),"\nto ask us any questions (there is an ",(0,r.kt)("inlineCode",{parentName:"p"},"ink")," tag)!"),(0,r.kt)("h2",{id:"ink-30-"},"ink! 3.0 \ud83e\udd91"),(0,r.kt)("p",null,"The star of the show this month is the release of ink! 3.0:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can find the release notes ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink/releases/tag/v3.0.0"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"We've also published a blog post with some more context:\n",(0,r.kt)("a",{parentName:"li",href:"https://www.parity.io/blog/ink-3-0-paritys-rust-based-language-gets-a-major-update"},"ink! 3.0: Parity\u2019s Rust-Based Language for WASM Smart Contracts Gets a Major Update"),".")),(0,r.kt)("p",null,"The team has been working on this release for a while. If you're a developer you're\nprobably aware of this thanks to the long list of release candidates (",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0-rcX"),") we've\npushed out in preparation for the stable 3.0 release."),(0,r.kt)("p",null,"The main idea behind ink! 3.0 is that it's just Rust. The syntax is pretty much\nidentical, and all the tooling you know and love, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"rust-analyzer")," and Clippy,\njust works."),(0,r.kt)("p",null,"Some other included changes worth highlighting:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reduced contract sizes for better performance in a parachain context."),(0,r.kt)("li",{parentName:"ul"},"Support for cross-contract calls, making it easier to write complex applications."),(0,r.kt)("li",{parentName:"ul"},"Trait support, allowing for a more Rusty development experience.")),(0,r.kt)("h2",{id:"cargo-contract-10"},"cargo-contract 1.0"),(0,r.kt)("p",null,"Alongside the release of ink! 3.0 we're also releasing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},(0,r.kt)("inlineCode",{parentName:"a"},"cargo-contract"))," in\nits first stable version 1.0.\n",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," is a handy developer tool for building, testing, and deploying ink!\ncontracts."),(0,r.kt)("p",null,"Some notable updates in this release include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support for uploading and calling contracts on a chain with ",(0,r.kt)("inlineCode",{parentName:"li"},"pallet-contracts"),"."),(0,r.kt)("li",{parentName:"ul"},"Linting rules for ink! contracts, giving developers warnings about common errors.")),(0,r.kt)("h2",{id:"delegate-call"},"Delegate Call"),(0,r.kt)("p",null,"Another update worth pointing out is the addition of ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate_call"),". What this allows is\na way for contracts to forward a call they received to another contract."),(0,r.kt)("p",null,"One use case for this is implementing a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies"},"Proxy Upgrade Pattern")," for smart contracts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"User ---- tx ---\x3e Proxy ----------\x3e Implementation_v0\n                     |\n                      ------------\x3e Implementation_v1\n                     |\n                      ------------\x3e Implementation_v2\n")),(0,r.kt)("p",null,"This required some work in both ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," and ink!. Shoutout to the team over\nat ",(0,r.kt)("a",{parentName:"p",href:"https://supercolony.net/"},"Supercolony")," for driving the development here!"),(0,r.kt)("p",null,"We now have two example contracts for writing upgradeable contracts in ink!.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/tree/master/upgradeable-contracts"},"See here"),"\nfor a deeper explanation."),(0,r.kt)("h2",{id:"workshop--talk-at-ethdenver"},"Workshop & Talk at EthDenver"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hcastano"},"Hernando")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/achimcc"},"Achim")," went to EthDenver to\ngive a workshop and talk regarding ink! on the Substrate stage!"),(0,r.kt)("p",null,"The recording is available ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?t=7122&v=NrG3co6UWEg"},"here"),"."))}h.isMDXComponent=!0}}]);