"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,k=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"Testing with Live State",hide_title:!0,slug:"/basics/contract-testing/with-live-state"},s=void 0,a={unversionedId:"testing/testing-with-live-state",id:"version-5.x/testing/testing-with-live-state",title:"Testing with Live State",description:"On this page we explain how to do End-to-End (E2E) testing of ink!",source:"@site/versioned_docs/version-5.x/testing/testing-with-live-state.md",sourceDirName:"testing",slug:"/basics/contract-testing/with-live-state",permalink:"/es/5.x/basics/contract-testing/with-live-state",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/testing/testing-with-live-state.md",tags:[],version:"5.x",frontMatter:{title:"Testing with Live State",hide_title:!0,slug:"/basics/contract-testing/with-live-state"},sidebar:"reference",previous:{title:"End-to-End (E2E) Tests",permalink:"/es/5.x/basics/contract-testing/end-to-end-e2e-testing"},next:{title:"Debugging",permalink:"/es/5.x/basics/contract-debugging"}},l={},c=[{value:"Run a node",id:"run-a-node",level:2},{value:"Setup Chopsticks",id:"setup-chopsticks",level:2},{value:"Run ink! e2e tests",id:"run-ink-e2e-tests",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("img",{src:"/img/title/testing1.svg",className:"titlePic"}),(0,i.kt)("h1",{id:"test-end-to-end-with-live-chain-state"},"Test End-to-End with Live Chain State"),(0,i.kt)("p",null,"On this page we explain how to do End-to-End (E2E) testing of ink!\ncontracts with the state of a particular chain."),(0,i.kt)("h2",{id:"run-a-node"},"Run a node"),(0,i.kt)("p",null,"In a real world case you will already have a live node. This will be the node you want to test you contracts off of. For example purposes we will be running a ",(0,i.kt)("inlineCode",{parentName:"p"},"substrate-contracts-node"),"."),(0,i.kt)("p",null,"Clone substrate-contracts-node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/paritytech/substrate-contracts-node\n")),(0,i.kt)("p",null,"Compile and run it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cargo build\n./target/debug/substrate-contracts-node\n")),(0,i.kt)("p",null,"You should get output similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' % ./target/debug/substrate-contracts-node\n2023-09-26 07:58:28.885  INFO main sc_cli::runner: Substrate Contracts Node    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \u270c\ufe0f  version 0.30.0-124c159ba94    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \u2764\ufe0f  by Parity Technologies <admin@parity.io>, 2021-2023    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \ud83d\udccb Chain specification: Development    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \ud83c\udff7  Node name: chilly-desire-6458    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \ud83d\udc64 Role: AUTHORITY    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \ud83d\udcbe Database: ParityDb at /tmp/substrateoKCAts/chains/dev/paritydb/full    \n2023-09-26 07:58:38.723  INFO main sc_rpc_server: Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["*"]  \n')),(0,i.kt)("p",null,"Next, produce one or two blocks by running ",(0,i.kt)("inlineCode",{parentName:"p"},"system.remark()")," extrinsics. You can use the PolkadotJs Apps to do this. This is so we have 1 or 2 blocks produced on the node for the next step."),(0,i.kt)("h2",{id:"setup-chopsticks"},"Setup Chopsticks"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AcalaNetwork/chopsticks"},"Chopsticks")," is a powerful tool in our ecosystem that will allow us to mirror a running node. We will run chopsticks and have it mirror the substrate-contracts-node that is already running on our machince from the previous step. This will allow us to have a node with live chain state to test our contracts off of."),(0,i.kt)("p",null,"Clone chopsticks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/AcalaNetwork/chopsticks\n")),(0,i.kt)("p",null,"Modify the dev.yml config file in the repo or create one from scratch that you can reference later:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"endpoint: ws://127.0.0.1:9944\nmock-signature-host: true\nblock: 1\ndb: ./db.sqlite\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In the example above chopsticks will be mirroring up until block 1 from the substrate-contracts-node. For real world use case you would want to use a different block number and this is the place where you can configure other variables such as a sudo key. Read the chopsticks docs for more info.")),(0,i.kt)("p",null,"You can either run chopsticks locally by following the instructions here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AcalaNetwork/chopsticks#install"},"https://github.com/AcalaNetwork/chopsticks#install"))),(0,i.kt)("p",null,"Or you can run chopsticks using npx:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx @acala-network/chopsticks@latest --config=configs/dev.yml\n")),(0,i.kt)("p",null,"You should get output similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx @acala-network/chopsticks@latest --config=configs/dev.yml\n[08:22:31.231] INFO (rpc/3037748): Development RPC listening on port 8000\n")),(0,i.kt)("p",null,"Recap: We have our live node running on port 9944 and our test node running on port 8000."),(0,i.kt)("h2",{id:"run-ink-e2e-tests"},"Run ink! e2e tests"),(0,i.kt)("p",null,"Next we would like to run the integration tests for our ink! smart contract. For example purposes we will use the flipper ink! integration tests which reside in the ink! repo."),(0,i.kt)("p",null,"Let's get started, clone ink!:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/paritytech/ink\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"integration-tests/flipper"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd integration-tests/flipper\n")),(0,i.kt)("p",null,"Let's now run our flipper integration tests against the chopsticks node (which has the live chain state):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CONTRACTS_NODE=/home/bruno/src/substrate-contracts-node/target/debug/substrate-contracts-node WS_PORT=8000 cargo test --features e2e-tests\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Notice how we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTRACTS_NODE")," environment variable to specify where our chopsticks node is running. This is essential.")),(0,i.kt)("p",null,"You will get output similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"running 4 tests\ntest flipper::tests::it_works ... ok\ntest flipper::tests::default_works ... ok\ntest flipper::e2e_tests::default_works ... ok\ntest flipper::e2e_tests::it_works ... ok\n\ntest result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.29s\n\n   Doc-tests flipper\n\nrunning 0 tests\n\ntest result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n")),(0,i.kt)("p",null,"Success! We just ran ink! integration tests against live chain state!"))}d.isMDXComponent=!0}}]);