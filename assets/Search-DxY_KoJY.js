import{j as e,S as g,L as r}from"./index-nnfi-mF0.js";import{A as n,P as u}from"./Articles-BOnOTWkF.js";import{u as p,P as j}from"./usePagination-BpNhqbXp.js";const N=()=>{const[t,i,s,a,o,c,m,x,d]=p(3,n.length);return e.jsx("section",{className:"p-4",children:e.jsxs("div",{className:"max-w-[1000px] mx-auto",children:[e.jsxs("div",{className:"md:flex md:flex-row md:gap-4 md:items-center",children:[e.jsx("h1",{className:"text-3xl font-semibold md:text-2xl",children:"Search"}),e.jsxs("div",{className:"mt-5 relative md:mt-0 md:w-full",children:[e.jsx("input",{className:"border-2 border-neutral-300 w-full block text-xl duration-300 placeholder:text-neutral-500 py-3 pl-12 pr-4 md:text-base focus-visible:outline-none focus:border-neutral-900 lg:hover:border-neutral-900",type:"text",placeholder:"What are you looking for ?",autoFocus:!0}),e.jsx(g,{className:"w-6 text-black absolute left-[0.9rem] top-1/2 -translate-y-1/2 -z-10"})]})]}),e.jsx("div",{className:"flex flex-col gap-4 py-4 lg:grid lg:grid-cols-3",children:n.slice(t*s-s,s*t).map((l,h)=>e.jsxs("article",{className:"border border-neutral-300 p-4",children:[e.jsxs("div",{className:"flex flex-row gap-4 justify-between",children:[e.jsx("h2",{children:e.jsx(r,{to:l.link,className:"text-lg line-clamp-3 overflow-wrap-anywhere lg:text-sm",children:l.title})}),e.jsx(u,{link:l.link,children:e.jsx("img",{src:l.image,alt:l.title,className:"min-w-20 w-20 min-h-20 h-20 object-cover object-center lg:min-w-16 lg:w-16 lg:min-h-16 lg:h-16"})})]}),e.jsx(r,{to:l.categoryLink,className:"w-fit text-lg mt-2 block text-neutral-500 font-light lg:text-sm",children:l.categoryTitle}),e.jsx("div",{className:"whitespace-nowrap mt-2 lg:text-xs lg:mt-3",children:l.posted})]},h))}),a!==1&&e.jsx(j,{currentIndex:t,lastIndex:a,prevArticles:o,nextArticles:c,handlePrevDisabled:m,handleNextDisabled:x,handleCurrentArticle:d,visiblePages:i})]})})};export{N as default};
//# sourceMappingURL=Search-DxY_KoJY.js.map