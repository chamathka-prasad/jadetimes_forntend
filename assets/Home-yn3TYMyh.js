import{r as h,j as e,L as i,C as k,u as T,a as F,b as q,c as M,d as Y}from"./index-CBKPNOPX.js";import{I as z,L as I,T as R,F as O,Y as U,a as W}from"./FourthBigArticles-DofkNUhF.js";import{P as p,A as t}from"./Articles-S3CPSkbQ.js";import{S as C}from"./Section-D9jUMA0O.js";const L=({length:s})=>{const[l,a]=h.useState(0),r=h.useRef(null);function f(){r.current&&r.current.scrollBy({top:0,left:r.current.clientWidth,behavior:"smooth"}),a(x=>x===s-1?s-1:x+1)}function c(){r.current&&r.current.scrollBy({top:0,left:-r.current.clientWidth,behavior:"smooth"}),a(x=>x===0?0:x-1)}return[l,r,f,c]},H=({articles:s})=>{const[l,a,r,f]=L(s.length);return e.jsx("div",{className:"lg:col-span-6 lg:border lg:border-neutral-300 lg:mr-5",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"flex flex-row overflow-x-hidden snap-x snap-mandatory",ref:a,children:s.map((c,x)=>e.jsxs("article",{className:`${l===x?"":"invisible"} snap-end flex-none w-full duration-1000`.trim(),children:[e.jsx(p,{link:c.link,children:e.jsx("img",{src:c.image,alt:s[0].title})}),e.jsxs("div",{className:"flex flex-col p-4 gap-4",children:[e.jsxs("div",{children:[e.jsx(i,{className:"block w-fit text-xs mb-1",children:c.authorName}),e.jsx("div",{className:"whitespace-nowrap text-xs",children:c.posted})]}),e.jsx(i,{to:c.categoryLink,className:"w-fit text-sm text-neutral-500 font-light",children:c.categoryTitle}),e.jsx(i,{to:c.link,className:"text-lg text-[1.375rem] line-clamp-2",children:c.title}),e.jsx("p",{className:"line-clamp-1 text-base",children:c.title})]})]},x))}),l!==s.length-1&&e.jsx("button",{className:"text-black absolute top-1/3 right-4 flex",onClick:r,"aria-label":"next slide",children:e.jsx(k,{className:"w-9"})}),l!==0&&e.jsx("button",{className:"text-black absolute top-1/3 left-4 flex",onClick:f,"aria-label":"previous slide",children:e.jsx(k,{className:"w-9 rotate-180"})})]})})},J=()=>{const[s,l]=h.useState([]),[a,r]=h.useState(""),[f,c]=h.useState(!0);return h.useEffect(()=>{const x=new AbortController,b=x.signal;return fetch("https://ilhamifham.github.io/data/youtube/playlist.json",{signal:b}).then(m=>{if(!m.ok)throw new Error(`HTTP error! Status: ${m.status}`);return m.json()}).then(m=>{const w=m.reverse().map((v,g)=>({...v,index:g}));l(w),c(!1)}).catch(m=>{if(m.name==="AbortError")return!1;r("An error occurred while fetching videos."),c(!1)}),()=>{x.abort()}},[]),[s,a,f]},$=({className:s})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:s,viewBox:"0 0 16 16",children:e.jsx("path",{d:"M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z"})}),D=()=>{const[s,l,a]=J(),[r,f]=h.useState({}),[c,x]=h.useState([]),[b,m,w,v]=L(c.length),[g,P,A]=T();function y(n){var o,u,d;f({title:(o=s[n])==null?void 0:o.title,videoId:(u=s[n])==null?void 0:u.videoId,index:(d=s[n])==null?void 0:d.index})}h.useEffect(()=>{y(0);const n=[];for(let o=0;o<s.length;o+=4)n.push(s.slice(o,o+4));x(n)},[s]);function _(n){y(n),A(),handleNextPlayClose()}function S(n){y(n),P()}return a?e.jsxs("div",{className:"col-[span_14_/_span_14] animate-pulse",children:[e.jsx("div",{className:"aspect-video mb-5 bg-neutral-300"}),e.jsx("div",{className:"grid grid-cols-4 gap-5 w-full",children:Array.from({length:4},(n,o)=>o).map((n,o)=>e.jsxs("div",{children:[e.jsx("div",{className:"aspect-video bg-neutral-300"}),e.jsx("div",{className:"bg-neutral-300 h-4 mt-2 mb-1"}),e.jsx("div",{className:"w-1/2 bg-neutral-300 h-4"})]},o))})]}):l?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"aspect-video mb-5 bg-red-50 border border-red-300 text-accent flex flex-col gap-4 items-center justify-center",children:e.jsx("div",{className:"text-lg",children:l})}),e.jsx("div",{className:"grid grid-cols-4 gap-5 w-full",children:Array.from({length:4},(n,o)=>o).map((n,o)=>e.jsx("div",{className:"aspect-video text-center p-4 bg-red-50 border border-red-300 text-sm text-accent flex flex-col items-center justify-center",children:l},o))})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"aspect-video mb-5 border border-neutral-300",children:g?e.jsx(z,{videoId:r.videoId,autoplay:"true"}):e.jsxs("div",{className:"h-full relative",children:[e.jsx("img",{src:`https://i.ytimg.com/vi/${r.videoId}/sddefault.jpg`,alt:"",loading:"lazy",className:"absolute top-0 h-full -z-[1] object-cover object-center"}),e.jsxs("div",{className:"bg-[#000000CC] text-white h-full flex flex-col items-center justify-center",children:[e.jsx("p",{className:"text-[0.9375rem] mb-2 text-white",children:r.title}),e.jsx("div",{className:"text-lg",children:"Jadetimes"}),e.jsx("div",{className:"flex flex-row gap-4 mt-8",children:e.jsxs("button",{className:"flex flex-row flex-nowrap items-center gap-2 bg-accent px-7 py-2 text-sm",onClick:P,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"w-6",viewBox:"0 0 16 16",children:e.jsx("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"})}),"Play Video"]})})]})]})}),e.jsx("div",{className:"flex flex-row gap-5 overflow-x-hidden snap-x snap-mandatory",ref:m,children:c.map((n,o)=>e.jsx("div",{className:`grid grid-cols-4 w-full flex-none gap-5 snap-center duration-1000 ${b===o?"visible":"invisible"}`,children:n.map(u=>e.jsxs("article",{className:"text-sm w-full h-full cursor-pointer group",onClick:()=>_(u.index),children:[e.jsx("div",{className:"aspect-video w-full group/2 border border-neutral-300 relative",children:e.jsxs(e.Fragment,{children:[e.jsx("img",{src:`https://i.ytimg.com/vi/${u.videoId}/mqdefault.jpg`,alt:"",loading:"lazy",className:"absolute top-0 h-full -z-[1] object-cover object-center"}),e.jsx("div",{className:`w-full h-full flex items-center justify-center text-white bg-[#000000CC] duration-300 ${r.index===u.index?"opacity-100":"opacity-0 group-focus-within:opacity-100 group-hover:opacity-100"}`,children:g&&r.index===u.index?e.jsx("div",{children:"Now Playing"}):e.jsx("button",{onClick:d=>{d.stopPropagation(),S(u.index)},"aria-label":"play",className:"flex",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"w-9",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),e.jsx("path",{d:"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"})]})})})]})}),e.jsx("p",{className:"line-clamp-1 mt-2",children:u.title}),e.jsx("div",{className:"text-neutral-500",children:"Jadetimes"})]},u.index))},o))}),e.jsxs("div",{className:"relative flex mt-6",children:[b!==0&&e.jsxs("button",{className:"flex flex-row flex-nowrap items-center gap-3 text-sm text-black",onClick:v,children:[e.jsx($,{className:"w-6 rotate-[135deg]"}),"Prev"]}),b!==c.length-1&&e.jsxs("button",{className:"flex flex-row flex-nowrap items-center gap-3 text-sm text-black ml-auto",onClick:w,children:["Next",e.jsx($,{className:"w-6 -rotate-45"})]})]})]})},B=({className:s,onClick:l,ariaLabel:a})=>e.jsx("button",{className:s,onClick:l,"aria-label":a,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),e.jsx("path",{d:"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"})]})}),G=()=>{const[s,l]=h.useState([]),[a,r]=h.useState(""),[f,c]=h.useState(!0);return h.useEffect(()=>{const x=new AbortController,b=x.signal;return fetch("https://ilhamifham.github.io/data/youtube/shorts.json",{signal:b}).then(m=>{if(!m.ok)throw new Error(`HTTP error! Status: ${m.status}`);return m.json()}).then(m=>{const w=m.reverse().map((v,g)=>({...v,index:g}));l(w),c(!1)}).catch(m=>{if(m.name==="AbortError")return!1;r("An error occurred while fetching videos."),c(!1)}),()=>{x.abort()}},[]),[s,a,f]},K=()=>{const[s,l,a]=G(),[r,f]=h.useState({}),[c,x]=h.useState([]),[b,m,w,v]=L(c.length),[g,P,A]=T(),[y,_,S]=T();F(g);function n(d){var j,N,V,E;f({title:(j=s[d])==null?void 0:j.title,videoId:(N=s[d])==null?void 0:N.videoId,index:(V=s[d])==null?void 0:V.index,description:(E=s[d])==null?void 0:E.description})}h.useEffect(()=>{n(0);const d=[];for(let j=0;j<s.length;j+=5)d.push(s.slice(j,j+5));x(d)},[s]);function o(){const d=r.index===s.length-1?s.length-1:r.index+1;n(d),S()}function u(){const d=r.index===0?0:r.index-1;n(d),S()}return a?e.jsx("div",{className:"grid grid-cols-5 gap-5 p-5",children:Array.from({length:5},(d,j)=>j).map((d,j)=>e.jsxs("div",{className:"animate-pulse",children:[e.jsx("div",{className:"aspect-video bg-neutral-300"}),e.jsx("div",{className:"mt-4 bg-neutral-300 h-5"}),e.jsx("div",{className:"bg-neutral-300 h-5 mt-2"}),e.jsx("div",{className:"mt-4 bg-neutral-300 h-3"}),e.jsx("div",{className:"bg-neutral-300 h-3 mt-2"})]},j))}):l?null:e.jsxs("div",{className:`${g?"bg-neutral-900 fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col":""}`.trim(),children:[e.jsxs("div",{className:"relative p-5 mb-auto order-1",children:[e.jsx("div",{className:"flex flex-row overflow-x-hidden gap-5 snap-x snap-mandatory peer",ref:m,children:c.map((d,j)=>e.jsx("div",{className:`grid grid-cols-5 w-full flex-none gap-5 snap-center duration-1000 ${b===j?"visible":"invisible"}`,children:d.map(N=>e.jsxs("div",{className:`aspect-video ${g?"border border-neutral-700":""}`.trim(),children:[e.jsxs("div",{className:`relative ${g?"":"mb-4"}`.trim(),children:[e.jsx("img",{src:`https://i.ytimg.com/vi/${N.videoId}/mqdefault.jpg`,alt:"",className:"absolute top-0 object-cover object-center -z-[1]",loading:"lazy"}),e.jsx("div",{className:`bg-[#00000080] aspect-video flex flex-col items-center justify-center p-4 font-medium text-white text-center  ${g&&r.index!==N.index?"duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100":""}`.trim(),children:y&&r.index===N.index?e.jsx("div",{children:"Now Playing"}):e.jsxs(e.Fragment,{children:[g&&e.jsx("p",{className:"mb-3 line-clamp-2",children:N.title}),e.jsx(B,{className:"w-10",onClick:()=>{P(),n(N.index),_()}})]})})]}),!g&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-heading font-semibold mb-3 line-clamp-2",children:N.title}),e.jsx("p",{className:"line-clamp-2 text-xs",children:N.description})]})]},N.index))},j))}),b!==c.length-1&&e.jsx("button",{className:"absolute text-black bg-white border border-neutral-300 shadow-lg rounded-full p-2 duration-300 opacity-0 peer-hover:opacity-100 hover:opacity-100 focus:opacity-100 flex top-1/2 -translate-y-1/2 focus:rounded-full right-9",onClick:w,"aria-label":"next slide",children:e.jsx(k,{className:"w-7 translate-x-[0.125rem]"})}),b!==0&&e.jsx("button",{className:"absolute text-black bg-white border border-neutral-300 shadow-lg rounded-full p-2 duration-300 opacity-0 peer-hover:opacity-100 hover:opacity-100 focus:opacity-100 flex top-1/2 -translate-y-1/2 focus:rounded-full left-9",onClick:v,"aria-label":"previous slide",children:e.jsx(k,{className:"w-7 rotate-180 -translate-x-[0.125rem]"})})]}),g&&e.jsx("div",{className:"px-5 mt-auto",children:e.jsxs("div",{className:"grid grid-cols-10 gap-5 aspect-[33/9]",children:[e.jsx("div",{className:"col-span-5 col-start-2 aspect-video",children:y?e.jsx(z,{videoId:r.videoId,autoplay:"true"}):e.jsxs("div",{className:"relative h-full",children:[e.jsx("img",{src:`https://i.ytimg.com/vi/${r.videoId}/sddefault.jpg`,alt:"",className:"absolute object-cover object-center h-full -z-[1]",loading:"lazy"}),e.jsxs("div",{className:"bg-[#00000080] w-full h-full flex flex-col items-center justify-center gap-4 text-center",children:[e.jsx("div",{className:"text-neutral-300",children:"Jadetimes"}),e.jsx("p",{className:"text-white font-semibold text-2xl xl:text-3xl",children:r.title}),e.jsx(B,{className:"w-12 text-white",onClick:_})]})]})}),e.jsxs("div",{className:"col-span-3 overflow-y-auto",children:[e.jsx("p",{className:"text-white text-2xl mb-4",children:r.title}),e.jsx("p",{className:"text-neutral-300",children:r.description})]}),e.jsx("div",{className:"col-span-1 flex items-center justify-center col-start-10",children:r.index!==s.length-1&&e.jsx("button",{onClick:o,children:e.jsx(k,{className:"w-9 text-white"})})}),e.jsx("div",{className:"col-span-1 flex items-center justify-center col-start-1 row-start-1",children:r.index!==0&&e.jsx("button",{onClick:u,children:e.jsx(k,{className:"w-9 text-white rotate-180"})})})]})}),g&&e.jsx("div",{className:"p-5 flex -order-1",children:e.jsx(q,{className:"w-[1.7rem] text-white ml-auto",onClick:()=>{A(),S()}})})]})},X="/jadetimes_forntend/assets/specialgraphics-FxzY3bXz.webp",Q="/jadetimes_forntend/assets/digitustecglobal-BtH10KDS.mp4",Z="/jadetimes_forntend/assets/specialprinters-Ctx0lPhL.mp4",ae=()=>{const s=M();return e.jsxs(e.Fragment,{children:[e.jsxs(C,{tag:"div",className:"relative sm:p-4",children:[s>=600&&e.jsx(I,{className:"text-[0.625rem] mb-4 px-2 py-[0.15rem] lg:mb-5"}),e.jsxs("div",{className:"sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-[repeat(17,_minmax(0,_1fr))] lg:gap-5 xl:col-start-2 xl:col-span-10 xl:row-start-2",children:[e.jsxs("article",{className:"sm:grid sm:grid-cols-2 sm:border sm:border-neutral-300 sm:col-span-2 lg:col-[13_span_/_13_span] lg:row-start-2",children:[e.jsxs("div",{className:"relative",children:[s<600&&e.jsx(I,{className:"px-3 py-2 text-sm absolute -bottom-[1.1875rem] left-1/2 -translate-x-1/2"}),e.jsx(p,{link:t[0].link,children:e.jsx("img",{src:t[0].image,alt:t[0].title,className:"aspect-video object-cover object-center sm:aspect-auto sm:h-full"})})]}),e.jsxs("div",{className:"p-4 pt-8 flex flex-col gap-2 sm:p-4 sm:gap-4 lg:p-8",children:[e.jsxs("div",{children:[s>=1200&&e.jsx(i,{className:"mb-1 w-fit block text-xs",children:t[0].authorName}),e.jsx("div",{className:"whitespace-nowrap lg:text-xs",children:t[0].posted})]}),e.jsx(i,{to:t[0].link,className:"text-2xl line-clamp-3 lg:text-3xl lg:leading-[2.8rem]",children:t[0].title}),e.jsx("p",{className:"line-clamp-2 lg:text-sm lg:line-clamp-3",children:t[0].title})]})]}),e.jsxs("div",{className:"m-4 flex flex-col gap-4 sm:m-0 sm:grid sm:grid-cols-2 sm:col-span-2 sm:gap-4 lg:grid-cols-10 lg:gap-5 lg:col-span-full",children:[t.slice(0,4).map((l,a)=>e.jsxs("article",{className:"flex flex-row p-4 gap-4 justify-between border border-neutral-300 lg:justify-normal lg:p-0 lg:flex-col lg:gap-0 lg:col-span-2",children:[e.jsx(p,{link:l.link,className:"order-2 lg:order-none",children:e.jsx("img",{src:l.image,alt:l.title,className:"aspect-square min-w-[5.5rem] w-[5.5rem] min-h-[5.5rem] h-[5.5rem] object-cover object-center lg:aspect-auto lg:w-full lg:h-full"})}),e.jsxs("div",{className:"flex flex-col justify-between gap-4 lg:justify-normal lg:p-4",children:[s>=1200&&e.jsx(i,{to:l.categoryLink,className:"w-fit text-sm font-light text-neutral-500",children:l.categoryTitle}),e.jsx(i,{to:l.link,className:"overflow-wrap-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3",children:l.title}),s>=1200&&e.jsx("p",{className:"lg:line-clamp-2 lg:text-xs",children:l.title}),s<1200&&e.jsx("div",{className:"whitespace-nowrap lg:text-xs",children:l.posted})]})]},a)),s>=1200&&e.jsxs("div",{className:"col-span-2",children:[e.jsx("a",{href:"https://specialgraphics.us/",className:"block",target:"_blank","aria-label":"visit special graphics website",children:e.jsx("img",{src:X,alt:"special graphics representation",className:"aspect-square object-cover object-center",loading:"lazy"})}),e.jsx(I,{className:"px-3 py-2 w-full text-xs mt-5"})]})]}),e.jsx(R,{articles:t.slice(0,4)}),e.jsx(O,{articles:t.slice(0,3)})]}),e.jsx("a",{href:"http://www.digitustecglobal.com/",className:"hidden 2xl:block absolute top-[157px] right-full w-[117px]",target:"_blank","aria-label":"visit digit us tec global website",children:e.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:e.jsx("source",{src:Q,type:"video/mp4"})})}),e.jsx("a",{href:"https://www.specialprinters.us/",className:"hidden 2xl:block absolute top-[157px] left-full w-[117px]",target:"_blank","aria-label":"visit special printers website",children:e.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:e.jsx("source",{src:Z,type:"video/mp4"})})})]}),e.jsxs(C,{className:"p-4",children:[e.jsx("h2",{className:"border-b-[3px] border-b-accent pb-1 font-semibold text-lg lg:mt-0 lg:text-xl",children:"More News"}),e.jsx("div",{className:"my-4 flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4 lg:my-5 lg:grid-cols-10 lg:gap-5",children:t.map((l,a)=>e.jsxs("article",{className:"flex flex-row p-4 gap-4 justify-between lg:justify-normal border border-neutral-300 lg:col-span-2 lg:flex-col lg:p-0 lg:gap-0",children:[e.jsx(p,{link:l.link,className:"order-2 lg:order-none",children:e.jsx("img",{src:l.image,alt:l.title,className:"aspect-square min-w-[5.5rem] w-[5.5rem] min-h-[5.5rem] h-[5.5rem] object-cover object-center lg:aspect-auto lg:w-full lg:h-full"})}),e.jsxs("div",{className:"flex flex-col justify-between lg:justify-normal gap-4 lg:p-4",children:[e.jsx(i,{to:l.link,className:"overflow-wrap-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3",children:l.title}),s<1200&&e.jsx("div",{className:"whitespace-nowrap",children:l.posted})]})]},a))}),e.jsxs("div",{className:"lg:grid lg:grid-cols-10 lg:mb-5",children:[s<1200&&e.jsx("div",{className:"flex flex-col gap-4 sm:grid sm:grid-cols-2",children:t.slice(0,2).map((l,a)=>e.jsxs("article",{className:"border border-neutral-300 aspect-square relative",children:[e.jsx("img",{src:l.image,alt:"",className:"absolute top-0 h-full object-cover object-center -z-[1]",loading:"lazy"}),e.jsxs("div",{className:"flex flex-col justify-between h-full p-4 bg-[#000000aa] text-white",children:[e.jsx("div",{className:"whitespace-nowrap",children:l.posted}),e.jsx(i,{to:l.link,className:"text-lg line-clamp-3",children:l.title})]})]},a))}),s>=1200&&e.jsx(H,{articles:t.slice(0,2)}),e.jsxs("section",{className:"lg:pl-5 lg:border-l lg:border-neutral-300 lg:col-span-4 lg:flex lg:flex-col lg:gap-5",children:[e.jsxs("div",{className:"my-4 lg:mx-0 lg:flex lg:flex-row lg:gap-5 lg:items-center lg:my-0",children:[e.jsxs("h3",{className:"text-lg lg:text-xl font-semibold lg:mt-0",children:["Whats ",e.jsx("span",{className:"font-normal",children:"Trending"})]}),s>=1200&&e.jsx(Y,{className:"font-semibold text-[0.625rem]"})]}),e.jsx("div",{className:"flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-2 lg:gap-5 lg:p-0",children:t.slice(0,8).map((l,a)=>e.jsxs("article",{className:"flex flex-row p-4 gap-4 border border-neutral-300",children:[e.jsx(p,{className:"lg:order-2 cursor-pointer",link:l.link,children:e.jsx("img",{src:l.image,alt:l.title,className:"aspect-square min-w-[5.5rem] w-[5.5rem] min-h-[5.5rem] h-[5.5rem] lg:min-w-[3.75rem] lg:w-[3.75rem] lg:min-h-[3.75rem] lg:h-[3.75rem] object-cover object-center"})}),e.jsxs("div",{className:"flex flex-col justify-between lg:h-fit gap-4 lg:justify-normal lg:gap-2",children:[e.jsx(i,{to:l.link,className:"line-clamp-2 overflow-wrap-anywhere lg:text-sm lg:line-clamp-3",children:l.title}),s<1200&&e.jsx("div",{className:"whitespace-nowrap",children:l.posted}),s>=1200&&e.jsx(i,{to:l.categoryLink,className:"text-sm font-light w-fit text-neutral-500",children:l.categoryTitle})]})]},a))})]})]}),s>=1200&&e.jsxs("div",{className:"grid grid-cols-[repeat(19,_minmax(0,_1fr))] gap-5",children:[e.jsxs("section",{className:"col-[span_14_/_span_14]",children:[e.jsxs("h3",{className:"mb-5 font-semibold text-xl",children:["Must Watch ",e.jsx("span",{className:"font-normal",children:"Top 10 Ranking Segments"})]}),e.jsx(D,{})]}),e.jsxs("div",{className:"col-span-5 mt-12",children:[e.jsx("div",{className:"flex flex-col gap-5 mb-5",children:t.slice(0,3).map((l,a)=>e.jsxs("article",{className:"flex flex-row gap-4 border border-neutral-300 p-4",children:[e.jsx(p,{link:l.link,children:e.jsx("img",{src:l.image,alt:l.title,className:"min-w-20 w-20 min-h-20 h-20 object-cover object-center"})}),e.jsxs("div",{className:"flex flex-col gap-4 justify-between",children:[e.jsx(i,{to:l.link,className:"line-clamp-2 overflow-wrap-anywhere text-sm",children:l.title}),e.jsx(i,{to:l.categoryLink,className:"inline-block w-fit text-sm text-neutral-500 font-light",children:l.categoryTitle})]})]},a))}),e.jsxs("section",{children:[e.jsx("h3",{className:"mb-4 border-b-2 border-neutral-900 pb-1",children:e.jsxs(i,{to:"/political",className:"font-semibold text-lg lg:text-xl",children:["Political ",e.jsx("span",{className:"font-normal",children:"Updates"})]})}),t.slice(0,6).map((l,a)=>e.jsx(i,{to:l.link,className:"text-sm mb-3 line-clamp-2 overflow-wrap-anywhere last:mb-0",children:l.title},a))]})]})]}),e.jsxs("div",{className:"sm:grid sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 mt-4 lg:mt-5",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"mb-4 border-b-2 border-neutral-900 pb-1 text-lg font-semibold",children:e.jsx(i,{to:"news/asia",children:"Asia"})}),t.slice(0,3).map((l,a)=>e.jsx("article",{link:l.link,className:"mb-4 sm:last-of-type:mb-0 lg:odd:my-8 border border-neutral-300 lg:border-0",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[s<1200&&e.jsx(p,{link:l.link,children:e.jsx("img",{src:l.image,alt:""})}),e.jsxs("div",{className:"flex flex-col gap-4 px-4 pb-4 lg:p-0",children:[e.jsx("div",{className:"whitespace-nowrap lg:text-xs lg:order-2",children:l.posted}),e.jsx(i,{to:l.link,className:"text-lg line-clamp-2 lg:text-base",children:l.title})]})]})},a))]}),e.jsxs("section",{children:[e.jsx("h3",{className:"mb-4 border-b-2 border-neutral-900 pb-1 text-lg font-semibold",children:e.jsx(i,{to:"news/australia",children:"Australia"})}),t.slice(0,3).map((l,a)=>e.jsx("article",{link:l.link,className:"mb-4 sm:last-of-type:mb-0 lg:odd:my-8 border border-neutral-300 lg:border-0",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[s<1200&&e.jsx(p,{link:l.link,children:e.jsx("img",{src:l.image,alt:""})}),e.jsxs("div",{className:"flex flex-col gap-4 px-4 pb-4 lg:p-0",children:[e.jsx("div",{className:"whitespace-nowrap lg:text-xs lg:order-2",children:l.posted}),e.jsx(i,{to:l.link,className:"text-lg line-clamp-2 lg:text-base",children:l.title})]})]})},a))]}),e.jsxs("section",{children:[e.jsx("h3",{className:"mb-4 border-b-2 border-neutral-900 pb-1 text-lg font-semibold",children:e.jsx(i,{to:"news/usa",children:"USA"})}),t.slice(0,3).map((l,a)=>e.jsx("article",{link:l.link,className:"mb-4 sm:last-of-type:mb-0 lg:odd:my-8 border border-neutral-300 lg:border-0",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[s<1200&&e.jsx(p,{link:l.link,children:e.jsx("img",{src:l.image,alt:""})}),e.jsxs("div",{className:"flex flex-col gap-4 px-4 pb-4 lg:p-0",children:[e.jsx("div",{className:"whitespace-nowrap lg:text-xs lg:order-2",children:l.posted}),e.jsx(i,{to:l.link,className:"text-lg line-clamp-2 lg:text-base",children:l.title})]})]})},a))]}),e.jsxs("section",{children:[e.jsx("h3",{className:"mb-4 border-b-2 border-neutral-900 pb-1 text-lg font-semibold",children:e.jsx(i,{to:"news/europe",children:"Europe"})}),t.slice(0,3).map((l,a)=>e.jsx("article",{link:l.link,className:"mb-4 sm:last-of-type:mb-0 lg:odd:my-8 border border-neutral-300 lg:border-0",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[s<1200&&e.jsx(p,{link:l.link,children:e.jsx("img",{src:l.image,alt:""})}),e.jsxs("div",{className:"flex flex-col gap-4 px-4 pb-4 lg:p-0",children:[e.jsx("div",{className:"whitespace-nowrap lg:text-xs lg:order-2",children:l.posted}),e.jsx(i,{to:l.link,className:"text-lg line-clamp-2 lg:text-base",children:l.title})]})]})},a))]})]})]}),e.jsxs(C,{className:"p-4 lg:pb-5",children:[e.jsx("h2",{className:"border-b-[3px] border-b-accent pb-1 font-semibold text-lg lg:text-xl lg:mt-0",children:e.jsxs(i,{to:"/sports",children:["News Updates",e.jsx("span",{className:"font-normal",children:" | Sports"})]})}),e.jsx("div",{className:"mt-4 flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-10 lg:gap-5 lg:mt-5",children:t.slice(0,5).map((l,a)=>e.jsx("article",{className:"border border-neutral-300 block sm:m-0 lg:col-span-2",children:e.jsxs("div",{className:"flex flex-row p-4 gap-4 justify-between lg:justify-normal lg:p-0 lg:flex-col lg:gap-0",children:[e.jsx(p,{className:"order-2 lg:order-none",link:l.link,children:e.jsx("img",{src:l.image,alt:"",className:"min-w-[5.5rem] w-[5.5rem] min-h-[5.5rem] h-[5.5rem] object-cover object-center lg:w-full lg:h-full"})}),e.jsxs("div",{className:"flex flex-col justify-between lg:justify-normal gap-4 lg:p-4",children:[e.jsx(i,{to:l.link,className:"overflow-wrap-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3",children:l.title}),s>=1200&&e.jsx("p",{className:"lg:line-clamp-2 lg:text-xs",children:l.title}),s<1200&&e.jsx("div",{className:"whitespace-nowrap lg:text-xs lg:order-[-1]",children:l.posted})]})]})},a))})]}),e.jsx("div",{className:"bg-neutral-900",children:e.jsxs(C,{className:"p-4 pt-3",children:[e.jsxs("h2",{className:"border-b-[3px] border-b-accent pb-1 text-white font-semibold text-lg lg:text-xl mb-4 lg:m-0",children:["Exclusive Pulse ",e.jsx("span",{className:"font-normal",children:"| Jadetimes"})]}),e.jsxs("div",{className:"text-white flex flex-col gap-4 md:grid md:grid-cols-2 place-items-center lg:gap-5 lg:mt-5 lg:mb-1",children:[e.jsx(z,{title:t[0].title,videoId:""}),e.jsx(U,{className:"flex flex-col gap-4 lg:w-96",article:t[0]})]})]})}),e.jsxs(C,{tag:"div",className:"p-4 flex flex-col gap-4 md:grid md:grid-cols-3 lg:grid-cols-8 lg:gap-5 lg:py-5",children:[e.jsxs("div",{className:"lg:col-span-2 lg:flex lg:flex-col lg:gap-5",children:[e.jsxs("article",{className:"border border-neutral-300 lg:col-span-2 h-full lg:h-auto lg:border-none flex flex-row p-4 justify-between md:justify-normal gap-4 md:gap-0 lg:gap-2 md:p-0 md:flex-col",children:[e.jsx(p,{link:t[0].link,className:"order-2 md:order-none",children:e.jsx("img",{src:t[0].image,alt:"",className:"min-w-[5.5rem] w-[5.5rem] min-h-[5.5rem] h-[5.5rem] object-cover object-center md:w-full md:h-full"})}),e.jsxs("div",{className:"flex flex-col justify-between md:justify-normal gap-4 md:p-4 lg:p-0",children:[e.jsx(i,{to:t[0].link,className:"overflow-wrap-anywhere line-clamp-2 lg:text-lg lg:font-medium lg:text-heading",children:t[0].title}),s<1200&&e.jsx("div",{className:"whitespace-nowrap lg:text-xs md:order-[-1]",children:t[0].posted})]})]}),s>=1200&&e.jsx("div",{className:"lg:flex lg:flex-col lg:gap-5",children:t.slice(0,3).map((l,a)=>e.jsxs("article",{className:"flex flex-row gap-4 items-center",children:[e.jsx(p,{link:l.link,children:e.jsx("img",{src:l.image,alt:"",className:"min-w-28 w-28 min-h-20 h-20 object-cover object-center"})}),e.jsx(i,{to:l.link,className:"overflow-wrap-anywhere text-sm line-clamp-3",children:l.title})]},a))})]}),e.jsx("div",{className:"block aspect-square border border-neutral-300 h-full md:w-full lg:aspect-auto lg:col-span-4 lg:border-none",children:e.jsxs("article",{className:"h-full relative",children:[s<1200&&e.jsx("img",{src:t[0].image,alt:"",className:"absolute top-0 h-full object-cover object-center -z-[1]",loading:"lazy"}),s>=1200&&e.jsx(p,{link:t[0].link,children:e.jsx("img",{src:t[0].image,alt:""})}),e.jsxs("div",{className:"flex flex-col justify-between h-full p-4 bg-[#000000aa] lg:h-auto lg:bg-white lg:gap-2 lg:p-0 lg:justify-normal lg:mt-2",children:[e.jsx(i,{to:t[0].link,className:"order-2 line-clamp-3 text-white text-lg lg:text-2xl lg:line-clamp-2 lg:font-medium lg:text-heading lg:mt-4",children:t[0].title}),s>=1200&&e.jsx("p",{className:"lg:line-clamp-2 lg:text-lg lg:order-3",children:t[0].title}),s<1200&&e.jsx("div",{className:"whitespace-nowrap text-white lg:text-xs lg:text-neutral-900",children:t[0].posted})]})]})}),e.jsxs("div",{className:"lg:col-span-2 lg:flex lg:flex-col lg:gap-5",children:[e.jsxs("article",{className:"border border-neutral-300 lg:col-span-2 h-full lg:h-auto lg:border-none flex flex-row p-4 justify-between md:justify-normal gap-4 md:gap-0 lg:gap-2 md:p-0 md:flex-col",children:[e.jsx(p,{link:t[0].link,className:"order-2 md:order-none",children:e.jsx("img",{src:t[0].image,alt:"",className:"min-w-[5.5rem] w-[5.5rem] min-h-[5.5rem] h-[5.5rem] object-cover object-center md:w-full md:h-full"})}),e.jsxs("div",{className:"flex flex-col justify-between md:justify-normal gap-4 md:p-4 lg:p-0",children:[e.jsx(i,{to:t[0].link,className:"overflow-wrap-anywhere line-clamp-2 lg:text-lg lg:font-medium lg:text-heading",children:t[0].title}),s<1200&&e.jsx("div",{className:"whitespace-nowrap lg:text-xs md:order-[-1]",children:t[0].posted})]})]}),s>=1200&&e.jsx("div",{className:"lg:flex lg:flex-col lg:gap-5",children:t.slice(0,3).map((l,a)=>e.jsxs("article",{className:"flex flex-row gap-4 items-center",children:[e.jsx(p,{link:l.link,className:"order-2",children:e.jsx("img",{src:l.image,alt:"",className:"min-w-28 w-28 min-h-20 h-20 object-cover object-center"})}),e.jsx(i,{to:l.link,className:"overflow-wrap-anywhere text-sm line-clamp-3",children:l.title})]},a))})]})]}),e.jsx(W,{articles:t.slice(0,3)}),s>=1200&&e.jsx(K,{})]})};export{ae as default};
//# sourceMappingURL=Home-yn3TYMyh.js.map
