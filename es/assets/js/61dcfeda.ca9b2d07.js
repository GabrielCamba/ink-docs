"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5780],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||i;return a?n.createElement(d,o(o({ref:t},l),{},{components:a})):n.createElement(d,o({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"April '22",slug:"/monthly-update/2022/04"},o=void 0,s={unversionedId:"monthly-update/2022/04",id:"monthly-update/2022/04",title:"April '22",description:"Releases \ud83c\udd95",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/monthly-update/2022/04.md",sourceDirName:"monthly-update/2022",slug:"/monthly-update/2022/04",permalink:"/es/monthly-update/2022/04",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/monthly-update/2022/04.md",tags:[],version:"current",frontMatter:{title:"April '22",slug:"/monthly-update/2022/04"},sidebar:"reference",previous:{title:"May '22",permalink:"/es/monthly-update/2022/05"},next:{title:"March '22",permalink:"/es/monthly-update/2022/03"}},c={},p=[{value:"Releases \ud83c\udd95",id:"releases-",level:2},{value:"Community Badges \ud83d\ude4c",id:"community-badges-",level:2},{value:"Normal Design",id:"normal-design",level:3},{value:"Flat Design",id:"flat-design",level:3},{value:"Team Retreat in Athens \ud83c\uddec\ud83c\uddf7",id:"team-retreat-in-athens-",level:2},{value:"Spanish Twitter Space \ud83d\udc26",id:"spanish-twitter-space-",level:2},{value:"StackExchange Public Beta",id:"stackexchange-public-beta",level:2},{value:"Canvas Update",id:"canvas-update",level:2}],l={toc:p};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"releases-"},"Releases \ud83c\udd95"),(0,r.kt)("p",null,"For ink! we released ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/releases/tag/v3.0.1"},"v3.0.1")," with\nminor bugfixes. Besides that we made a number of improvements to our examples \u2012 mostly to\nour ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/tree/master/examples/upgradeable-contracts"},"upgradeable contracts examples"),"."),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},(0,r.kt)("inlineCode",{parentName:"a"},"cargo-contract"))," we released\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract/releases/tag/v1.1.1"},"v1.1.1")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract/releases/tag/v1.2.0"},"v1.2.0"),"\nwith bug fixes, a new sub-command ",(0,r.kt)("inlineCode",{parentName:"p"},"decode"),", and improved support for the ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"instantiate")," sub-commands."),(0,r.kt)("p",null,"For tutorials, development and testing we recommend using our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node"},(0,r.kt)("inlineCode",{parentName:"a"},"substrate-contracts-node")),".\nWe issued the release ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node/releases/tag/v0.13.0"},"v0.13.0"),",\nwhich is in sync with a recent Substrate ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," (see the release notes for the specific commit hash).\nPre-built binaries for the release are available for Linux and Mac."),(0,r.kt)("h2",{id:"community-badges-"},"Community Badges \ud83d\ude4c"),(0,r.kt)("p",null,"We've added two versions of a community badge."),(0,r.kt)("p",null,"If you have a public repository with an ink! contract it would be awesome\nif you could add one of those!"),(0,r.kt)("h3",{id:"normal-design"},"Normal Design"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/paritytech/ink/master/.images/badge.svg",alt:"Built with ink!"}))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"[![Built with ink!](https://raw.githubusercontent.com/paritytech/ink/master/.images/badge.svg)](https://github.com/paritytech/ink)\n")),(0,r.kt)("h3",{id:"flat-design"},"Flat Design"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/paritytech/ink/master/.images/badge_flat.svg",alt:"Built with ink!"}))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"[![Built with ink!](https://raw.githubusercontent.com/paritytech/ink/master/.images/badge_flat.svg)](https://github.com/paritytech/ink)\n")),(0,r.kt)("h2",{id:"team-retreat-in-athens-"},"Team Retreat in Athens \ud83c\uddec\ud83c\uddf7"),(0,r.kt)("p",null,"We \u2012 the developers working on ink!, Substrate's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"pallet-contracts")),",\nand the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/contracts-ui"},"Contracts UI")," \u2012\nwent on a team retreat in April. We discussed our roadmap for the rest\nof this year, as well as some technical designs of how we want to implement\ne.g.  XCM in ink!. We're normally working across different time zones, with\nsome of us embracing the digital nomad lifestyle. Hence it was very\nproductive to gather together for a week."),(0,r.kt)("p",null,"We also did a little hackathon to do some dog-fooding: we've built a\nDapp that makes use of all components by the above teams. We plan\nto open source it soon, stay tuned for that \ud83d\ude0e."),(0,r.kt)("p",null,"There's a lot on the horizon and we're enthusiastic about the rest of this year!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Athens 2022",src:a(8228).Z,width:"610",height:"410"})),(0,r.kt)("h2",{id:"spanish-twitter-space-"},"Spanish Twitter Space \ud83d\udc26"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hcastano"},"Hernando")," was a guest at the spanish Polkadot\nTwitter Space. The space has been recorded:\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/i/spaces/1MnGnkgmNdBJO"},"https://twitter.com/i/spaces/1MnGnkgmNdBJO"),"."),(0,r.kt)("h2",{id:"stackexchange-public-beta"},"StackExchange Public Beta"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.stackexchange.com/"},"Substrate & Polkadot StackExchange")," site\nhas graduated from its private beta \u2012 the site is now in public beta!"),(0,r.kt)("p",null,"This means that the site is now indexed by search engines and can be\nbrowser without any user account."),(0,r.kt)("p",null,"If you have any questions regarding ink! or smart contracts on Substrate this is\nthe place to be."),(0,r.kt)("h2",{id:"canvas-update"},"Canvas Update"),(0,r.kt)("p",null,"You may know that we were working on a common good smart contracts parachain\nnamed Canvas. We've decided to put this project on hold. This gives us more\nroom to make ink! and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"pallet-contracts")),"\nas competitive as possible, as well as help parachain teams include those.\nThis is not to say that we'll never get back to Canvas, but as of right now\nwe're no longer working on this project."))}h.isMDXComponent=!0},8228:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/athens-2022-ef4ebaea93332cd2ab41cdd15133e440.jpg"}}]);