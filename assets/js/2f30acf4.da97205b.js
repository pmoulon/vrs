"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[730],{3905:(e,i,n)=>{n.r(i),n.d(i,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>m});var a=n(67294);function t(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function l(){return l=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function r(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?r(Object(n),!0).forEach((function(i){t(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function d(e,i){if(null==e)return{};var n,a,t=function(e,i){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),m=function(e){return function(i){var n=p(i.components);return a.createElement(e,l({},i,{components:n}))}},p=function(e){var i=a.useContext(s),n=i;return e&&(n="function"==typeof e?e(i):o(o({},i),e)),n},c=function(e){var i=p(e.components);return a.createElement(s.Provider,{value:i},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},f=a.forwardRef((function(e,i){var n=e.components,t=e.mdxType,l=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(n),c=t,u=m["".concat(r,".").concat(c)]||m[c]||h[c]||l;return n?a.createElement(u,o(o({ref:i},s),{},{components:n})):a.createElement(u,o({ref:i},s))}));function x(e,i){var n=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var l=n.length,r=new Array(l);r[0]=f;var o={};for(var d in i)hasOwnProperty.call(i,d)&&(o[d]=i[d]);o.originalType=e,o[u]="string"==typeof e?e:t,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86876:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),t=(n(67294),n(3905));const l={sidebar_position:8,title:"The FileHandler Interface"},r=void 0,o={unversionedId:"FileHandler",id:"FileHandler",title:"The FileHandler Interface",description:"The VRS toolbox offers a powerful layer to abstract storage access: the FileHandler interface.",source:"@site/docs/FileHandler.md",sourceDirName:".",slug:"/FileHandler",permalink:"/vrs/docs/FileHandler",draft:!1,editUrl:"https://github.com/facebookresearch/vrs/edit/main/website/docs/FileHandler.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"The FileHandler Interface"},sidebar:"tutorialSidebar",previous:{title:"Image Support",permalink:"/vrs/docs/ImageSupport"},next:{title:"The vrs Command Line Tool",permalink:"/vrs/docs/VrsCliTool"}},d={},s=[{value:"Why is <code>FileHandler</code> useful?",id:"why-is-filehandler-useful",level:2},{value:"What does <code>FileHandler</code> do?",id:"what-does-filehandler-do",level:2},{value:"File Paths, URIs, and JSON File Specifications",id:"file-paths-uris-and-json-file-specifications",level:2},{value:"JSON File Specifications",id:"json-file-specifications",level:3},{value:"URIs",id:"uris",level:3},{value:"<code>FileSpec</code>",id:"filespec",level:3},{value:"<code>FileHandlerFactory</code>",id:"filehandlerfactory",level:2},{value:"Further Nested Delegation",id:"further-nested-delegation",level:3},{value:"Interpreting Strings as JSON File Specifications, URIs, or File Paths",id:"interpreting-strings-as-json-file-specifications-uris-or-file-paths",level:2},{value:"<code>FileHandler</code> vs. <code>WriteFileHandler</code>",id:"filehandler-vs-writefilehandler",level:2},{value:"Reading is easy",id:"reading-is-easy",level:3},{value:"Writing is complex",id:"writing-is-complex",level:3},{value:"Do not use <code>WriteFileHandler</code> implementations directly",id:"do-not-use-writefilehandler-implementations-directly",level:3}],m={toc:s},p="wrapper";function c(e){let{components:i,...n}=e;return(0,t.mdx)(p,(0,a.Z)({},m,n,{components:i,mdxType:"MDXLayout"}),(0,t.mdx)("p",null,"The VRS toolbox offers a powerful layer to abstract storage access: the ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," interface."),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," offers benefits similar to those of Python file-like objects, but goes beyond that by expanding the scope of \u201cfile path\u201d to include URIs and JSON-format file specifications. It also provides mechanisms to create a ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," that will be able to interpret them."),(0,t.mdx)("p",null,"While the ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," interface is part of the VRS toolbox, it is effectively a layer below the code that accesses the VRS files. In practice, all IO accesses made by the VRS library use ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," objects, but the ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," interface knows nothing intrinsically about VRS or any storage."),(0,t.mdx)("h2",{id:"why-is-filehandler-useful"},"Why is ",(0,t.mdx)("inlineCode",{parentName:"h2"},"FileHandler")," useful?"),(0,t.mdx)("p",null,"VRS files are not necessarily a single file on a hard drive. They can be any of the following types of files:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Chunked files on one or more local hard drives"),(0,t.mdx)("li",{parentName:"ul"},"A binary blob in cloud storage"),(0,t.mdx)("li",{parentName:"ul"},"A list of binary blobs in cloud storage (chunks in cloud storage)"),(0,t.mdx)("li",{parentName:"ul"},"Some kind of database reference that points to any of the above...")),(0,t.mdx)("h2",{id:"what-does-filehandler-do"},"What does ",(0,t.mdx)("inlineCode",{parentName:"h2"},"FileHandler")," do?"),(0,t.mdx)("p",null,"The ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," interface enables you to do the following read operations with a file:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Open the file with a given path (a text string to interpret, details are below)"),(0,t.mdx)("li",{parentName:"ul"},"Provide the file size"),(0,t.mdx)("li",{parentName:"ul"},"Move the read position"),(0,t.mdx)("li",{parentName:"ul"},"Read a number of bytes"),(0,t.mdx)("li",{parentName:"ul"},"Provide caching hints"),(0,t.mdx)("li",{parentName:"ul"},"Close the file and release the allocated resources (such as file system handles and caches)")),(0,t.mdx)("p",null,"At the core, that is all ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," does."),(0,t.mdx)("h2",{id:"file-paths-uris-and-json-file-specifications"},"File Paths, URIs, and JSON File Specifications"),(0,t.mdx)("p",null,"The primary way to identify a file is to provide a file path, but that is insufficient."),(0,t.mdx)("p",null,"We need to be able to handle the following use cases:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Chunked files"),(0,t.mdx)("li",{parentName:"ul"},"Files in cloud storage"),(0,t.mdx)("li",{parentName:"ul"},"Chunked files in cloud storage"),(0,t.mdx)("li",{parentName:"ul"},"References to a database entry, pointing to a file in another storage location"),(0,t.mdx)("li",{parentName:"ul"},"Files stored in Amazon AWS S3, Microsoft Azure, Google Cloud Storage, etc.")),(0,t.mdx)("p",null,"We want to avoid making special-case implementations of our APIs and keep them simple, so using a single string to represent any path is a requirement. URIs are powerful and convenient, but chunked files quickly become difficult to represent, as chunked files can be a collection of URIs. For extreme cases, JSON appears to be the only reasonable option."),(0,t.mdx)("p",null,"In the end, VRS supports regular file paths, URIs, and JSON file specifications, as transparently as possible."),(0,t.mdx)("h3",{id:"json-file-specifications"},"JSON File Specifications"),(0,t.mdx)("p",null,"A JSON file specification must have the following required fields:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},'\u201cstorage"'),": the name of the ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler")," able to read that location."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"\u201cchunks\u201d"),": an ordered list of strings, each representing a chunk of the logical file, in a format that the designated ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler")," can handle.")),(0,t.mdx)("p",null,"A valid JSON file specification can simply be as follows:",(0,t.mdx)("br",{parentName:"p"}),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},'{"storage":"diskfile","chunks":["/local/folder/file.vrs"]}')),(0,t.mdx)("p",null,"A chunked local file may look like this:",(0,t.mdx)("br",{parentName:"p"}),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},'{"storage":"diskfile","chunks":["/local/folder/file.vrs","/local/folder/file.vrs_part_2"]}')),(0,t.mdx)("p",null,"A chunked file in the cloud might be accessed using chunks published as HTTP objects, and be represented like this:",(0,t.mdx)("br",{parentName:"p"}),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},'{"storage":"http","chunks":["http://cdn.meta.com/HASH1","http://cdn.meta.com/HASH2"]}')),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Optional Fields")),(0,t.mdx)("p",null,"When dealing with objects in cloud storage, it can be expensive to do a basic operation, such as getting the size of a file chunk, particularly when you have many. Knowing how to name a file to download, and remembering how a file was originally referenced is critical. Therefore, the following optional fields have been introduced to answer these questions:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"chunk_sizes"),": an ordered list of integers, which should match the list of ",(0,t.mdx)("inlineCode",{parentName:"li"},"chunks"),"."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"filename"),": a name suitable to save the file locally. It might be the name of the file before it was uploaded to cloud storage."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"source_uri"),": a URI representation of how the object was initially represented, in particular if the JSON file specification was generated from a URI.")),(0,t.mdx)("p",null,"Example:",(0,t.mdx)("br",{parentName:"p"}),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},'{"storage":"http","chunks":["http://cdn.meta.com/HASH1"],"chunk_sizes":[123456],"filename":"scene23.vrs","source_uri":"aria:456789"}')),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Extra fields")),(0,t.mdx)("p",null,"Additional fields can be provided, outside of the core JSON file specifications. Extra values are string values, which name isn't reserved for required or optional fields. These might include authentication options for some cloud storage implementations, for instance:",(0,t.mdx)("br",{parentName:"p"}),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},'{"storage":"http","chunks":["http://cdn.meta.com/HASH1"],"source_uri":"aria:456789","auth_token":"09*JOYBAaSLBG@#O@"}')),(0,t.mdx)("h3",{id:"uris"},"URIs"),(0,t.mdx)("p",null,"URIs can be very compact and convenient, and they are commonly used already, so ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," can also handle URIs. VRS interprets the scheme part of the URI as a ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," name, and uses a ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," with that name to interpret the rest of the URI.",(0,t.mdx)("br",{parentName:"p"}),"\n","Example: ",(0,t.mdx)("inlineCode",{parentName:"p"},"aria:456789?auth_token=09%2AJOYBAaSLBG%40%23O%40")),(0,t.mdx)("h3",{id:"filespec"},(0,t.mdx)("inlineCode",{parentName:"h3"},"FileSpec")),(0,t.mdx)("p",null,"Parsing JSON messages and URIs can become expensive if we need to repeat the operation multiple times. This is why, internally, string paths are always immediately converted into ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileSpec")," objects, which are used for all file location operations."),(0,t.mdx)("p",null,"At its core, a ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileSpec")," object is simply a struct with the following public fields:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"  string fileHandlerName;\n  string fileName;\n  string uri;\n  vector<string> chunks;\n  vector<int64_t> chunkSizes;\n  map<string, string> extras;\n")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"FileSpec")," provides helper functions to convert to and from JSON and to get the size of a file (when specified directly). In practice, JSON file specifications and ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileSpec")," objects are equivalent."),(0,t.mdx)("h2",{id:"filehandlerfactory"},(0,t.mdx)("inlineCode",{parentName:"h2"},"FileHandlerFactory")),(0,t.mdx)("p",null,"The primary role of ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," is to provide an abstract way to read files. VRS core provides a single ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," implementation that can read local files. All other ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," implementations do not belong in the VRS core. This is so that its dependencies can be limited as much as possible, and it can be easily compiled for mobile and other embedded environments."),(0,t.mdx)("p",null,"The ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandlerFactory")," singleton allows:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Registering additional ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler")," implementations"),(0,t.mdx)("li",{parentName:"ul"},"Requesting the construction of ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler")," objects by name"),(0,t.mdx)("li",{parentName:"ul"},"Interpreting a file represented by a local file path, a URI, or a JSON file specification using the appropriate ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler"),".")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandlerFactory")," is a pretty small but essential class, used to open files as follows:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Convert a string path into a ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileSpec")),(0,t.mdx)("li",{parentName:"ul"},"Create a ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler")," instance specified by name in the ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileSpec")," object"),(0,t.mdx)("li",{parentName:"ul"},"Request a ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler")," instance to actually open the ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileSpec"),", whatever that means for that ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler")),(0,t.mdx)("li",{parentName:"ul"},"Return an error code and the ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler")," object")),(0,t.mdx)("p",null,"All this is done by the ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandlerFactory")," API as shown below:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"int FileHandlerFactory::delegateOpen(\n  const string& path,\n  unique_ptr<FileHandler>& outNewDelegate);\n")),(0,t.mdx)("p",null,"When the VRS ",(0,t.mdx)("inlineCode",{parentName:"p"},"RecordFileReader")," class opens a VRS file using the string path, the ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandlerFactory")," API finds the ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," that is needed for all read operations. The ",(0,t.mdx)("inlineCode",{parentName:"p"},"RecordFileReader")," object does not need to know if the VRS file is local, chunked, or in cloud storage."),(0,t.mdx)("h3",{id:"further-nested-delegation"},"Further Nested Delegation"),(0,t.mdx)("p",null,"For completeness, more levels of indirection might be required. When ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandlerFactory")," asks ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," to open a file, it uses the ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," eponym API to open the ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileSpec"),", using ",(0,t.mdx)("inlineCode",{parentName:"p"},"delegateOpen"),". This is so the ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," itself may delegate the actual handling of the ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileSpec")," to yet another ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," implementation."),(0,t.mdx)("p",null,"For example, imagine you have an HTTP ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler"),', which can stream data from an HTTP file. Also imagine you have a database of VRS files in cloud storage, named "MyAIDataSet", which references files using a 64 bit number. You can implement a custom ',(0,t.mdx)("inlineCode",{parentName:"p"},"MyAIDataSetFileHandler"),", which accesses the MyAIDataSet database, and converts MyAIDataSet URIs into HTTP URLs. The ",(0,t.mdx)("inlineCode",{parentName:"p"},"MyAIDataSetFileHandler"),' code will convert the URI, "myaidataset:12345", for the MyAIDataSet dataset #12345, into a content delivery network (CDN) URL, appropriate for your computer (it might do that by looking up the dataset online using a service that will return that URL after validations and permissions checks). Then, the ',(0,t.mdx)("inlineCode",{parentName:"p"},"MyAIDataSetFileHandler")," logic will delegate reading the data from that URL to the HTTP ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," that can stream the data from an HTTP URL. The ",(0,t.mdx)("inlineCode",{parentName:"p"},"RecordFileReader")," will decode the remove VRS file just as if it were a local file, because all its file accesses are done using a ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," instance."),(0,t.mdx)("h2",{id:"interpreting-strings-as-json-file-specifications-uris-or-file-paths"},"Interpreting Strings as JSON File Specifications, URIs, or File Paths"),(0,t.mdx)("p",null,"Putting it all together, when VRS needs to interpret a string path, the following logic is used:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"If the string path is a JSON specification, it is converted into a ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileSpec")," object with a ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler")," name."),(0,t.mdx)("li",{parentName:"ul"},"If the string path is a URI, it is parsed and made into a valid ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileSpec")," object, by the ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler")," with the same name as the URI scheme, if such a ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler")," is available."),(0,t.mdx)("li",{parentName:"ul"},"Otherwise, the string path is assumed to be a local file path, that is readable to the VRS built-in disk file ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler"),", using the standard POSIX file APIs."),(0,t.mdx)("li",{parentName:"ul"},"Once the ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileSpec")," object is built, the ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandlerFactory")," tries to open the file, using ",(0,t.mdx)("inlineCode",{parentName:"li"},"delegateOpen()")," to find the correct ",(0,t.mdx)("inlineCode",{parentName:"li"},"FileHandler")," for the job.")),(0,t.mdx)("h2",{id:"filehandler-vs-writefilehandler"},(0,t.mdx)("inlineCode",{parentName:"h2"},"FileHandler")," vs. ",(0,t.mdx)("inlineCode",{parentName:"h2"},"WriteFileHandler")),(0,t.mdx)("p",null,"As you may have noticed, ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," is strictly a read-only interface, because most ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," implementations, by far, only support reading. This is largely because cloud storage is usually either completely immutable, or only offers very limited creation and mutation options. Some cloud storage might only support creating new objects. Other cloud storage might only support creating new objects of constrained size, but will be able to concatenate existing objects to create new objects."),(0,t.mdx)("p",null,"The ",(0,t.mdx)("inlineCode",{parentName:"p"},"WriteFileHandler")," classes that derive from ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," can add support for write operations, but they may not be able to support any write operations. Creating a ",(0,t.mdx)("inlineCode",{parentName:"p"},"WriteFileHandler")," is much more complicated than creating a read-only ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler"),"."),(0,t.mdx)("h3",{id:"reading-is-easy"},"Reading is easy"),(0,t.mdx)("p",null,"A (read) ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," only really needs to implement the following operations:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"open()")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"close()")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"getFileSize()")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"setPos(position)")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"read(length)"))),(0,t.mdx)("p",null,"Effectively, cloud storage is typically stateless, and only offers support for ",(0,t.mdx)("inlineCode",{parentName:"p"},"getFileSize()")," and ",(0,t.mdx)("inlineCode",{parentName:"p"},"readRange(position, length)"),", but these can be enough to implement the ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," interface. As a result, it is easy to read cloud-stored data using the same interface as for files, even if performance will obviously differ greatly. In practice, all our ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," interfaces fully implement the read operations, or delegate them to other ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," implementations, that implement caching too."),(0,t.mdx)("h3",{id:"writing-is-complex"},"Writing is complex"),(0,t.mdx)("p",null,"You can do the following file operations with typical disk file APIs:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Create a file at a location, so that an entry appears in the file system, immediately."),(0,t.mdx)("li",{parentName:"ul"},"Write bytes to the file and extend the file."),(0,t.mdx)("li",{parentName:"ul"},"Write more bytes to the file, and extend the file further."),(0,t.mdx)("li",{parentName:"ul"},"Handle write requests of any size (OS system caching minimizes performance issues for you)."),(0,t.mdx)("li",{parentName:"ul"},"Seek to a past location, to read what is written before."),(0,t.mdx)("li",{parentName:"ul"},"Overwrite or extend a file. (You cannot insert bytes into the middle of a file.)"),(0,t.mdx)("li",{parentName:"ul"},"Open an existing file to modify it."),(0,t.mdx)("li",{parentName:"ul"},"If your app crashes or does not close the file explicitly, the data may not be fully written to disk, depending on the implementation, so it is common to have partially written files.")),(0,t.mdx)("p",null,"In contrast, when writing files to a cloud storage, things typically happen as follows:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Files are not actually created until the final close/commit/submit/finalize operation is performed, after a series of successful write operations."),(0,t.mdx)("li",{parentName:"ul"},"Write operations are network operations. They have very high latencies and high error rates. Retrying file write operations is often required."),(0,t.mdx)("li",{parentName:"ul"},"Small write operations can be extremely inefficient on the backend, in terms of storage. So, writing data in large chunks makes a huge difference."),(0,t.mdx)("li",{parentName:"ul"},"You can not read back data you have just written, until you have finalized the object, and it is fully committed."),(0,t.mdx)("li",{parentName:"ul"},"You can not overwrite or modify data you have already written."),(0,t.mdx)("li",{parentName:"ul"},"If an app crashes before the upload is finalized, anything uploaded is probably lost. Some cloud storage solutions can recover partial uploads or chunks, but at the cost of added code complexity.")),(0,t.mdx)("p",null,"In practice, all these constraints vary greatly between cloud storage solutions. Even if you only need to upload existing files, as they are, to a cloud storage, the cloud storage may have a maximum file size, or a chunking preference. So, if you want to store large files in the cloud, you have to chunk them and manage the chunks yourself to a certain extent."),(0,t.mdx)("h3",{id:"do-not-use-writefilehandler-implementations-directly"},"Do not use ",(0,t.mdx)("inlineCode",{parentName:"h3"},"WriteFileHandler")," implementations directly"),(0,t.mdx)("p",null,"Cloud storage write operations do not provide the same type of flexibility as file APIs. Consequently, it is usually not be possible to provide a generic ",(0,t.mdx)("inlineCode",{parentName:"p"},"WriteFileHandler")," implementation - one that will work for all use cases. While any ",(0,t.mdx)("inlineCode",{parentName:"p"},"FileHandler")," implementation can safely be used to access any type of file anywhere, you cannot think of ",(0,t.mdx)("inlineCode",{parentName:"p"},"WriteFileHandler")," as something that will work for all use cases."))}c.isMDXComponent=!0}}]);