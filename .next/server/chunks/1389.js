"use strict";exports.id=1389,exports.ids=[1389],exports.modules={4939:(e,s,i)=>{i.d(s,{Z:()=>r});var t=i(997),a=i(1664),l=i.n(a);function r(e){let{Img:s,Title:i,subTitle:a}=e,r={backgroundImage:`url(${s||"/img/breadcrumb/ACEDARS-ABOUT.jpg"})`};return t.jsx("div",{className:"it-breadcrumb-area it-breadcrumb-bg",style:r,children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row ",children:t.jsx("div",{className:"col-md-12",children:(0,t.jsxs)("div",{className:"it-breadcrumb-content z-index-3 text-center",children:[t.jsx("div",{className:"it-breadcrumb-title-box",children:t.jsx("h3",{className:"it-breadcrumb-title",children:i||"About Us"})}),t.jsx("div",{className:"it-breadcrumb-list-wrap",children:(0,t.jsxs)("div",{className:"it-breadcrumb-list",children:[t.jsx("span",{children:t.jsx(l(),{href:"/",children:"home"})}),t.jsx("span",{className:"dvdr"}),t.jsx("span",{children:a||"about us"})]})})]})})})})})}},6360:(e,s,i)=>{i.d(s,{Z:()=>r});var t=i(997),a=i(9755),l=i.n(a);function r(){return(0,t.jsxs)("div",{id:"it-newsletter",className:"it-newsletter-area it-newsletter-height fix p-relative theme-bg",children:[t.jsx("div",{className:"it-newsletter-shape-1 d-none d-lg-block",children:t.jsx(l(),{src:"/img/newsletter/shape-1-1.png",alt:"",width:302,height:268})}),t.jsx("div",{className:"it-newsletter-shape-2 d-none d-lg-block",children:t.jsx(l(),{src:"/img/newsletter/shape-1-2.png",alt:"",width:392,height:223})}),t.jsx("div",{className:"it-newsletter-shape-3 d-none d-xl-block",children:t.jsx(l(),{src:"/img/newsletter/shape-1-3.png",alt:"",width:66,height:65})}),t.jsx("div",{className:"it-newsletter-shape-4 d-none d-xl-block",children:t.jsx(l(),{src:"/img/newsletter/shape-1-4.png",alt:"",width:77,height:85})}),t.jsx("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[t.jsx("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,t.jsxs)("div",{className:"it-newsletter-left",children:[t.jsx("h4",{className:"it-section-title text-white pb-20",children:"Join Our Newsletter"}),t.jsx("span",{children:"Subscribe our newsletter to get our latest update & news."})]})}),t.jsx("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,t.jsxs)("div",{className:"it-newsletter-right p-relative text-end",children:[t.jsx("input",{type:"text",placeholder:"Enter your email:"}),t.jsx("button",{className:"it-btn black-bg",type:"submit",children:t.jsx("span",{children:"subscribe now"})})]})})]})})]})}},631:(e,s,i)=>{i.d(s,{Z:()=>l});var t=i(997),a=i(6689);let l=e=>{let{scrollClassName:s}=e,[i,l]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{window.pageYOffset>200?l(!0):l(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),t.jsx(t.Fragment,{children:i&&t.jsx("button",{className:`${s||"scroll-top scroll-to-target"} ${i?"open":""}`,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:t.jsx("i",{className:"far fa-angle-double-up"})})})}},1389:(e,s,i)=>{i.r(s),i.d(s,{default:()=>j});var t=i(997),a=i(4939),l=i(9755),r=i.n(l),n=i(1664),c=i.n(n),d=i(183),o=i.n(d);function h({item:e}){if(!e)return t.jsx("div",{children:"Loading..."});let{image:s,name:i,designation:a,bio:l,email:n,phone:d,address:h}=e;return t.jsx("div",{className:"it-teacher-details-area pt-120 pb-120",children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"it-teacher-details-wrap",children:(0,t.jsxs)("div",{className:"row",children:[t.jsx("div",{className:"col-xl-3 col-lg-3",children:(0,t.jsxs)("div",{className:"it-teacher-details-left",children:[t.jsx("div",{className:"it-teacher-details-left-thumb",children:t.jsx(r(),{src:s||"/img/team/team-inner.jpg",alt:"",width:284,height:284})}),(0,t.jsxs)("div",{className:"it-teacher-details-left-social text-center",children:[t.jsx(c(),{href:"#",children:t.jsx("i",{className:"fab fa-facebook-f"})}),t.jsx(c(),{href:"#",children:t.jsx("i",{className:"fab fa-twitter"})}),t.jsx(c(),{href:"#",children:t.jsx("i",{className:"fab fa-skype"})}),t.jsx(c(),{href:"#",children:t.jsx("i",{className:"fab fa-linkedin-in"})})]}),t.jsx("div",{className:"it-teacher-details-left-info",children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[t.jsx("i",{className:"fa-light fa-phone-volume"}),t.jsx("a",{href:`tel:${d||"(568) 367-987-237"}`,children:d||"(568) 367-987-237"})]}),(0,t.jsxs)("li",{children:[t.jsx("i",{className:"fa-light fa-location-dot"}),t.jsx("a",{href:"https://www.google.com/maps",target:"_blank",children:h||"Hudson, Wisconsin(WI), 54016"})]}),(0,t.jsxs)("li",{children:[t.jsx("i",{className:"fa-light fa-envelope"}),t.jsx("a",{href:`mailto:${n||"govillage@gmail.com"}`,children:n||"govillage@gmail.com"})]})]})}),t.jsx("div",{className:"it-teacher-details-left-btn",children:t.jsx(c(),{className:"it-btn",href:"/contact",children:(0,t.jsxs)("span",{children:["Contact us teacher",(0,t.jsxs)("svg",{width:"17",height:"14",viewBox:"0 0 17 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M11 1.24023L16 7.24023L11 13.2402",stroke:"currentcolor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M1 7.24023H16",stroke:"currentcolor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]})]})})})]})}),t.jsx("div",{className:"col-xl-9 col-lg-9",children:(0,t.jsxs)("div",{className:"it-teacher-details-right",children:[(0,t.jsxs)("div",{className:"it-teacher-details-right-title-box",children:[t.jsx("h4",{children:i||"Melvin Warner"}),t.jsx("span",{children:a||"teacher"}),t.jsx("p",{children:l||"Tempor orci dapibus ultrices in iaculis nunc sed augue. Feugiat in ante metus dictum at tempor commodo. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Arcu dictum varius duis at consectetur lorem donec massa"}),t.jsx("p",{children:"Tempor orci dapibus ultrices in iaculis nunc sed augue. Feugiat in ante metus dictum at tempor commodo lectus magna fringilla."})]}),(0,t.jsxs)("div",{className:"it-teacher-details-right-content mb-40",children:[t.jsx("h4",{children:"Education:"}),t.jsx("p",{children:"I’ve spent years figuring out the “formula” to teaching technical skills in a classroom environment, and I’m really excited to finally share my expertise with you. I can confidently say that my online courses are without a doubt the most comprehensive ones on the market."})]}),(0,t.jsxs)("div",{className:"it-progress-bar-wrap",children:[t.jsx("h4",{children:"Expertise & Skills:"}),(0,t.jsxs)("div",{className:"it-progress-bar-item",children:[t.jsx("label",{children:"Lectures"}),t.jsx("div",{className:"it-progress-bar",children:t.jsx(o(),{completed:90,className:"progress-bar",baseBgColor:"rgba(137, 186, 180, 0.3)",bgColor:"#116E63",labelColor:"#fff",height:"10px",animateOnRender:!0,transitionTimingFunction:"ease"})})]}),(0,t.jsxs)("div",{className:"it-progress-bar-item",children:[t.jsx("label",{children:"My Skill"}),t.jsx("div",{className:"it-progress-bar",children:t.jsx(o(),{completed:82,className:"progress-bar",baseBgColor:"rgba(137, 186, 180, 0.3)",bgColor:"#116E63",labelColor:"#fff",height:"10px",animateOnRender:!0,transitionTimingFunction:"ease"})})]}),(0,t.jsxs)("div",{className:"it-progress-bar-item",children:[t.jsx("label",{children:"Consulting"}),t.jsx("div",{className:"it-progress-bar",children:t.jsx(o(),{completed:65,className:"progress-bar",baseBgColor:"rgba(137, 186, 180, 0.3)",bgColor:"#116E63",labelColor:"#fff",height:"10px",animateOnRender:!0,transitionTimingFunction:"ease"})})]})]})]})})]})})})})}var m=i(6360),x=i(631);function j(e){return(0,t.jsxs)("main",{children:[t.jsx(a.Z,{Title:"Teacher Details",subTitle:"Teacher"}),t.jsx(h,{item:e.item}),t.jsx(m.Z,{}),t.jsx(x.Z,{})]})}}};