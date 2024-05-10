"use strict";exports.id=5737,exports.ids=[5737],exports.modules={3468:(e,t,l)=>{l.d(t,{Z:()=>r});var i=l(997),s=l(9755),o=l.n(s),a=l(1664),n=l.n(a);function r(e){let{blogClass:t,Slug:l,Img:s,Title:a,Author:r,publishedDate:g,btnText:d,imgWidth:m,imgHeight:c}=e;return(0,i.jsxs)("div",{className:t||"it-blog-item",children:[i.jsx("div",{className:"it-blog-thumb fix",children:i.jsx(n(),{href:`/blog/${l||"details"}`,children:i.jsx(o(),{src:s||"/img/blog/blog-1-7.jpg",width:m||648,height:c||427,alt:""})})}),(0,i.jsxs)("div",{className:"it-blog-content",children:[(0,i.jsxs)("div",{className:"it-blog-meta pb-25",children:[(0,i.jsxs)("span",{children:[i.jsx("i",{className:"fa-light fa-user"}),r||"Sunilra Smoth"]}),(0,i.jsxs)("span",{children:[i.jsx("i",{className:"fa-light fa-calendar-days"}),g||"March 28, 2023"]})]}),i.jsx("h4",{className:"it-blog-title pb-5",children:i.jsx(n(),{href:`/blog/${l||"details"}`,children:a||"velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"})}),i.jsx(n(),{href:`/blog/${l||"details"}`,className:"it-btn blue-bg",children:(0,i.jsxs)("span",{children:[d||"Read More",(0,i.jsxs)("svg",{width:"17",height:"14",viewBox:"0 0 17 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M11 1.24023L16 7.24023L11 13.2402",stroke:"currentcolor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M1 7.24023H16",stroke:"currentcolor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]})]})})]})]})}},4939:(e,t,l)=>{l.d(t,{Z:()=>a});var i=l(997),s=l(1664),o=l.n(s);function a(e){let{Img:t,Title:l,subTitle:s}=e,a={backgroundImage:`url(${t||"/img/breadcrumb/ACEDARS-ABOUT.jpg"})`};return i.jsx("div",{className:"it-breadcrumb-area it-breadcrumb-bg",style:a,children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"row ",children:i.jsx("div",{className:"col-md-12",children:(0,i.jsxs)("div",{className:"it-breadcrumb-content z-index-3 text-center",children:[i.jsx("div",{className:"it-breadcrumb-title-box",children:i.jsx("h3",{className:"it-breadcrumb-title",children:l||"About Us"})}),i.jsx("div",{className:"it-breadcrumb-list-wrap",children:(0,i.jsxs)("div",{className:"it-breadcrumb-list",children:[i.jsx("span",{children:i.jsx(o(),{href:"/",children:"home"})}),i.jsx("span",{className:"dvdr"}),i.jsx("span",{children:s||"about us"})]})})]})})})})})}},6360:(e,t,l)=>{l.d(t,{Z:()=>a});var i=l(997),s=l(9755),o=l.n(s);function a(){return(0,i.jsxs)("div",{id:"it-newsletter",className:"it-newsletter-area it-newsletter-height fix p-relative theme-bg",children:[i.jsx("div",{className:"it-newsletter-shape-1 d-none d-lg-block",children:i.jsx(o(),{src:"/img/newsletter/shape-1-1.png",alt:"",width:302,height:268})}),i.jsx("div",{className:"it-newsletter-shape-2 d-none d-lg-block",children:i.jsx(o(),{src:"/img/newsletter/shape-1-2.png",alt:"",width:392,height:223})}),i.jsx("div",{className:"it-newsletter-shape-3 d-none d-xl-block",children:i.jsx(o(),{src:"/img/newsletter/shape-1-3.png",alt:"",width:66,height:65})}),i.jsx("div",{className:"it-newsletter-shape-4 d-none d-xl-block",children:i.jsx(o(),{src:"/img/newsletter/shape-1-4.png",alt:"",width:77,height:85})}),i.jsx("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[i.jsx("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,i.jsxs)("div",{className:"it-newsletter-left",children:[i.jsx("h4",{className:"it-section-title text-white pb-20",children:"Join Our Newsletter"}),i.jsx("span",{children:"Subscribe our newsletter to get our latest update & news."})]})}),i.jsx("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,i.jsxs)("div",{className:"it-newsletter-right p-relative text-end",children:[i.jsx("input",{type:"text",placeholder:"Enter your email:"}),i.jsx("button",{className:"it-btn black-bg",type:"submit",children:i.jsx("span",{children:"subscribe now"})})]})})]})})]})}},631:(e,t,l)=>{l.d(t,{Z:()=>o});var i=l(997),s=l(6689);let o=e=>{let{scrollClassName:t}=e,[l,o]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{window.pageYOffset>200?o(!0):o(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),i.jsx(i.Fragment,{children:l&&i.jsx("button",{className:`${t||"scroll-top scroll-to-target"} ${l?"open":""}`,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:i.jsx("i",{className:"far fa-angle-double-up"})})})}},5737:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var i=l(997),s=l(4939),o=l(3468),a=l(4349);function n(){return i.jsx("div",{className:"it-blog-area it-blog-style-3 it-blog-style-6 grey-bg pt-120 pb-90",children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"row",children:a.map(e=>i.jsx("div",{className:"col-xl-6 col-lg-6 col-md-6 mb-30",children:i.jsx(o.Z,{Slug:e.slug,Title:e.title,Img:e.image,Author:e.author,publishedDate:e.publishedDate,btnText:e.btnText})},e.id)).slice(6,12)})})})}var r=l(6360),g=l(631);function d(){return(0,i.jsxs)("main",{children:[i.jsx(s.Z,{Title:"Blog Two",subTitle:"Blog"}),i.jsx(n,{}),i.jsx(r.Z,{}),i.jsx(g.Z,{})]})}},4349:e=>{e.exports=JSON.parse('[{"id":1,"slug":"VICE-CHANCELLOR HANDS OVER ACEDHARS SITE TO CONTRACTORS","title":"VICE-CHANCELLOR HANDS OVER ACEDHARS SITE TO CONTRACTORS    ","image":"/img/blog/Acedar-news.jpg","detailsImg":"/img/blog/Acedar-news.jpg","category":"Development","commentCount":"0","publishedDate":"3rd April 2023","author":"Admin","btnText":"Read More"},{"id":2,"slug":"WORLD BANK, AAU OFFICIALS ARRIVE UNIVERSITY OF LAGOS FOR ACEDHARS PROJECT VERIFICATION EXERCISE","title":"WORLD BANK, AAU OFFICIALS ARRIVE UNIVERSITY OF LAGOS FOR ACEDHARS PROJECT VERIFICATION EXERCISE","image":"/img/blog/Acedars-news-2.jpg","detailsImg":"/img/blog/Acedars-news-2.jpg","category":"Development","commentCount":"06","publishedDate":"24th January 2023","author":"Admin","btnText":"Read More"},{"id":3,"slug":"ACEDHARS RESEARCHER PROPOSES INTERDISCIPLINARY COLLABORATION AT INAUGURAL LECTURE","title":"ACEDHARS RESEARCHER PROPOSES INTERDISCIPLINARY COLLABORATION AT INAUGURAL LECTURE","image":"/img/blog/ACEDARS-News-3.png","detailsImg":"/img/blog/ACEDARS-News-3.png","category":"Development","commentCount":"06","publishedDate":"13 January 2023","author":"Admin","btnText":"Read More"},{"id":4,"slug":"blog-four","title":"Pellentesque dignissim enim sit amet venenatis cursus eget nunc.","image":"/img/blog/blog-1-4.jpg","detailsImg":"/img/blog/blog-details-1.jpg","category":"Development","commentCount":"06","publishedDate":"14 March 2023","author":"Jonathon Lopez","btnText":"Read More"},{"id":5,"slug":"blog-five","title":"Curabitur at fermentum purus. Interdum et malesuada fames ipsum","image":"/img/blog/blog-1-5.jpg","detailsImg":"/img/blog/blog-details-1.jpg","category":"Development","commentCount":"06","publishedDate":"14 February 2023","author":"Jonathon Lopez","btnText":"Read More"},{"id":6,"slug":"blog-six","title":"Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed do.","image":"/img/blog/blog-1-6.jpg","detailsImg":"/img/blog/blog-details-1.jpg","category":"Development","commentCount":"06","publishedDate":"14 January 2023","author":"Jonathon Lopez","btnText":"Read More"},{"id":7,"slug":"blog-seven","title":"Velit esse cillum dolore eu fugiat nulla Excepteur pariatur.","image":"/img/blog/blog-1-7.jpg","detailsImg":"/img/blog/blog-details-1.jpg","category":"Development","commentCount":"06","publishedDate":"14 June 2023","author":"Jonathon Lopez","btnText":"Read More"},{"id":8,"slug":"blog-eight","title":"Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed do.","image":"/img/blog/blog-1-8.jpg","detailsImg":"/img/blog/blog-details-1.jpg","category":"Development","commentCount":"06","publishedDate":"14 June 2023","author":"Jonathon Lopez","btnText":"Read More"},{"id":9,"slug":"blog-nine","title":"Velit esse cillum dolore eu fugiat nulla Excepteur pariatur.","image":"/img/blog/blog-1-7.jpg","detailsImg":"/img/blog/blog-details-1.jpg","category":"Development","commentCount":"06","publishedDate":"14 June 2023","author":"Jonathon Lopez","btnText":"Read More"},{"id":10,"slug":"blog-ten","title":"Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed do.","image":"/img/blog/blog-1-8.jpg","detailsImg":"/img/blog/blog-details-1.jpg","category":"Development","commentCount":"06","publishedDate":"14 June 2023","author":"Jonathon Lopez","btnText":"Read More"},{"id":11,"slug":"blog-eleven","title":"Velit esse cillum dolore eu fugiat nulla Excepteur pariatur.","image":"/img/blog/blog-1-7.jpg","detailsImg":"/img/blog/blog-details-1.jpg","category":"Development","commentCount":"06","publishedDate":"14 June 2023","author":"Jonathon Lopez","btnText":"Read More"},{"id":12,"slug":"blog-twelve","title":"Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed do.","image":"/img/blog/blog-1-8.jpg","detailsImg":"/img/blog/blog-details-1.jpg","category":"Development","commentCount":"06","publishedDate":"14 June 2023","author":"Jonathon Lopez","btnText":"Read More"},{"id":12,"slug":"blog-twelve","title":"Lorem ipsum dolor sit amet, consectetur Adipiscing elit, sed do.","image":"/img/blog/blog-1-8.jpg","detailsImg":"/img/blog/blog-details-1.jpg","category":"Development","commentCount":"06","publishedDate":"14 June 2023","author":"Jonathon Lopez","btnText":"Read More"},{"id":13,"slug":"blog-thirteen","title":"Curabitur at fermentum purus. Interdum et malesuada fames ipsum","image":"/img/blog/blog-sidebar-1.jpg","detailsImg":"/img/blog/blog-details-1.jpg","category":"Development","commentCount":"06","publishedDate":"14 August 2023","author":"Jonathon Lopez","btnText":"Read More"},{"id":14,"slug":"blog-fourteen","title":"Pellentesque dignissim enim sit amet venenatis cursus eget nunc.","image":"/img/blog/blog-sidebar-2.jpg","detailsImg":"/img/blog/blog-details-1.jpg","category":"Development","commentCount":"06","publishedDate":"14 March 2023","author":"Jonathon Lopez","btnText":"Read More"},{"id":15,"slug":"blog-fifteen","title":"Curabitur at fermentum purus. Interdum et malesuada fames ipsum","image":"/img/blog/blog-sidebar-3.jpg","detailsImg":"/img/blog/blog-details-1.jpg","category":"Development","commentCount":"06","publishedDate":"14 February 2023","author":"Jonathon Lopez","btnText":"Read More"}]')}};