"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[884],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>b,useMDXComponents:()=>m,withMDXComponents:()=>s});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){return function(t){var r=m(t.components);return a.createElement(e,o({},t,{components:r}))}},m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=m(r),d=n,u=s["".concat(i,".").concat(d)]||s[d]||f[d]||o;return r?a.createElement(u,c(c({ref:t},l),{},{components:r})):a.createElement(u,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},71944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905)),o=r(39960);const i={sidebar_position:2,title:"Organization"},c=void 0,p={unversionedId:"Organization",id:"Organization",title:"Organization",description:"The VRS documentation has different parts:",source:"@site/docs/Organization.md",sourceDirName:".",slug:"/Organization",permalink:"/vrs/docs/Organization",draft:!1,editUrl:"https://github.com/facebookresearch/vrs/edit/main/website/docs/Organization.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Organization"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/vrs/docs/Overview"},next:{title:"File Structure",permalink:"/vrs/docs/FileStructure"}},l={},s=[],m={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.mdx)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"The VRS documentation has different parts:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"This documentation, which describes the concepts, features, and principles of VRS."),(0,n.mdx)("li",{parentName:"ul"},"The ",(0,n.mdx)(o.default,{target:"_blank",to:"/doxygen/index.html",mdxType:"Link"},"API Documentation"),", generated using Doxygen.",(0,n.mdx)("br",{parentName:"li"}),"To generate the API documentation from the VRS code, run:",(0,n.mdx)("pre",{parentName:"li"},(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"  cd <vrs_repo_top_level_folder>\n  doxygen vrs/Doxyfile\n")),"You'll find the API documentation in html at ",(0,n.mdx)("inlineCode",{parentName:"li"},"website/static/doxygen/index.html"),"."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/tree/main/sample_code"},"Sample code"),", which is not functional, but demonstrates how to use the APIs.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/blob/main/sample_code/SampleRecordAndPlay.cpp"},"SampleRecordAndPlay.cpp")," demonstrates different ways to create a file, by dumping the whole content from memory to disk after creating all the records in memory, or by writing the record to disk while continuing to create records."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/blob/main/sample_code/SampleImageReader.cpp"},"SampleImageReader.cpp")," demonstrates how to read typical image records, that is, records containing metadata and an image."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/blob/main/sample_code/SampleRecordFormatDataLayout.cpp"},"SampleRecordFormatDataLayout.cpp")," demonstrates how to read metadata blocks."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/tree/main/sample_apps"},"Sample apps"),", which are runnable apps (though not actually useful). ",(0,n.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/blob/main/sample_apps/SampleRecordingApp.cpp"},"The first app")," generates a VRS file with different record types containing made-up data. ",(0,n.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/blob/main/sample_apps/SamplePlaybackApp.cpp"},"The second app")," reads that VRS file and verifies that the record content is as expected.")))}u.isMDXComponent=!0}}]);