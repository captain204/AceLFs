"use strict";exports.id=246,exports.ids=[246],exports.modules={4939:(e,i,t)=>{t.d(i,{Z:()=>a});var s=t(997),n=t(1664),r=t.n(n);function a(e){let{Img:i,Title:t,subTitle:n}=e,a={backgroundImage:`url(${i||"/img/breadcrumb/ACEDARS-ABOUT.jpg"})`};return s.jsx("div",{className:"it-breadcrumb-area it-breadcrumb-bg",style:a,children:s.jsx("div",{className:"container",children:s.jsx("div",{className:"row ",children:s.jsx("div",{className:"col-md-12",children:(0,s.jsxs)("div",{className:"it-breadcrumb-content z-index-3 text-center",children:[s.jsx("div",{className:"it-breadcrumb-title-box",children:s.jsx("h3",{className:"it-breadcrumb-title",children:t||"About Us"})}),s.jsx("div",{className:"it-breadcrumb-list-wrap",children:(0,s.jsxs)("div",{className:"it-breadcrumb-list",children:[s.jsx("span",{children:s.jsx(r(),{href:"/",children:"home"})}),s.jsx("span",{className:"dvdr"}),s.jsx("span",{children:n||"about us"})]})})]})})})})})}},6360:(e,i,t)=>{t.d(i,{Z:()=>a});var s=t(997),n=t(9755),r=t.n(n);function a(){return(0,s.jsxs)("div",{id:"it-newsletter",className:"it-newsletter-area it-newsletter-height fix p-relative theme-bg",children:[s.jsx("div",{className:"it-newsletter-shape-1 d-none d-lg-block",children:s.jsx(r(),{src:"/img/newsletter/shape-1-1.png",alt:"",width:302,height:268})}),s.jsx("div",{className:"it-newsletter-shape-2 d-none d-lg-block",children:s.jsx(r(),{src:"/img/newsletter/shape-1-2.png",alt:"",width:392,height:223})}),s.jsx("div",{className:"it-newsletter-shape-3 d-none d-xl-block",children:s.jsx(r(),{src:"/img/newsletter/shape-1-3.png",alt:"",width:66,height:65})}),s.jsx("div",{className:"it-newsletter-shape-4 d-none d-xl-block",children:s.jsx(r(),{src:"/img/newsletter/shape-1-4.png",alt:"",width:77,height:85})}),s.jsx("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[s.jsx("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,s.jsxs)("div",{className:"it-newsletter-left",children:[s.jsx("h4",{className:"it-section-title text-white pb-20",children:"Join Our Newsletter"}),s.jsx("span",{children:"Subscribe our newsletter to get our latest update & news."})]})}),s.jsx("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,s.jsxs)("div",{className:"it-newsletter-right p-relative text-end",children:[s.jsx("input",{type:"text",placeholder:"Enter your email:"}),s.jsx("button",{className:"it-btn black-bg",type:"submit",children:s.jsx("span",{children:"subscribe now"})})]})})]})})]})}},631:(e,i,t)=>{t.d(i,{Z:()=>r});var s=t(997),n=t(6689);let r=e=>{let{scrollClassName:i}=e,[t,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{window.pageYOffset>200?r(!0):r(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),s.jsx(s.Fragment,{children:t&&s.jsx("button",{className:`${i||"scroll-top scroll-to-target"} ${t?"open":""}`,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:s.jsx("i",{className:"far fa-angle-double-up"})})})}},246:(e,i,t)=>{t.r(i),t.d(i,{default:()=>h});var s=t(997),n=t(4939),r=t(1664),a=t.n(r);function o(e){let{featureClass:i,Slug:t,Icon:n,Title:r,Description:o}=e;return(0,s.jsxs)("div",{className:i||"it-feature-3-item mb-30 text-center",children:[s.jsx("div",{className:"it-feature-3-icon",children:s.jsx("span",{children:s.jsx("i",{className:n||"flaticon-coach"})})}),(0,s.jsxs)("div",{className:"it-feature-3-content",children:[s.jsx("h4",{className:"it-feature-3-title",children:s.jsx(a(),{href:`/services/${t||"details"}`,children:r||"Best Coaching"})}),s.jsx("p",{children:o||"In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet."})]}),s.jsx("div",{className:"it-feature-3-btn",children:s.jsx(a(),{className:"it-btn-theme-sm",href:`/services/${t||"details"}`,children:(0,s.jsxs)("span",{children:["view details",(0,s.jsxs)("svg",{width:"17",height:"14",viewBox:"0 0 17 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M11 1.24023L16 7.24023L11 13.2402",stroke:"currentcolor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M1 7.24023H16",stroke:"currentcolor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]})]})})})]})}var c=t(2026);function l(){return s.jsx("div",{className:"it-feature-3-area it-feature-3-bg it-feature-3-style grey-bg pt-120 pb-90",children:s.jsx("div",{className:"container",children:s.jsx("div",{className:"row",children:c.map(e=>s.jsx("div",{className:"col-xl-4 col-lg-4 col-md-6 mb-30",children:s.jsx(o,{Slug:e.slug,Icon:e.icon,Title:e.title,Description:e.description},e.id)},e.id)).slice(0,6)})})})}var d=t(6360),u=t(631);function h(){return(0,s.jsxs)("main",{children:[s.jsx(n.Z,{Title:"Service Two",subTitle:"Service"}),s.jsx(l,{}),s.jsx(d.Z,{}),s.jsx(u.Z,{})]})}},2026:e=>{e.exports=JSON.parse('[{"id":1,"slug":"service-one","title":"Masters Programme MSC","icon":"flaticon-coach","courseCount":"5","description":"This Master of Science (M.Sc.) program offers a comprehensive exploration of the scientific and regulatory aspects of healthcare. Delve into the world of Herbal Medicine, examining the science behind traditional remedies. Alternatively, focus on the cutting-edge field of Drug Development, learning about the process of bringing new medications to market. If your interests lie in ensuring safety and efficacy, specialize in Regulatory Science or Pharmacovigilance, the monitoring of drug safety after approval. Finally, explore the scientific study of toxins and their effects on living systems with a concentration in Biomedical Toxicology. This program provides a diverse range of pathways to equip you with the knowledge and skills to navigate the ever-evolving field of healthcare.","btnText":"Learn More"},{"id":2,"slug":"service-two","title":"Masters In Philosophy M.PHIL","icon":"flaticon-study","courseCount":"3","description":"This Master\'s in Philosophy (M.Phil.) program dives deep into the philosophical underpinnings of health sciences, offering specialized tracks in Regulatory Science, Pharmacovigilance, and Biomedical Toxicology. You\'ll explore the ethical, social, and conceptual issues surrounding drug development, safety monitoring, and the study of toxins, equipping you to critically examine the evolving landscape of healthcare practices","btnText":"Learn More"},{"id":3,"slug":"service-three","title":"Doctor of Philosophy (P.H.D)","icon":"flaticon-certificate","courseCount":"3","description":"This Doctor of Philosophy (Ph.D.) program offers a focused research journey in the critical areas of Regulatory Science, Pharmacovigilance, and Biomedical Toxicology. Dive deep into the complexities of ensuring drug safety and efficacy. Explore the philosophical and scientific foundations of regulations governing drug development (Regulatory Science). Specialize in Pharmacovigilance, rigorously monitoring medication safety after approval, or Biomedical Toxicology, investigating the mechanisms and impacts of toxins on living organisms. This program equips you with the advanced research skills and knowledge to become a leading voice in shaping the future of safe and effective healthcare practices","btnText":"Learn More"},{"id":4,"slug":"service-four","title":"IT And Software","icon":"flaticon-mobile-development","courseCount":"33","description":"In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.","btnText":"Learn More"},{"id":5,"slug":"service-five","title":"Sales Marketing","icon":"flaticon-promotion","courseCount":"34","description":"In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.","btnText":"Learn More"},{"id":6,"slug":"service-six","title":"Art & Humanities","icon":"flaticon-art","courseCount":"28","description":"In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.","btnText":"Learn More"},{"id":7,"slug":"service-seven","title":"Mobile Application","icon":"flaticon-mobile-development","courseCount":"27","description":"In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.","btnText":"Learn More"},{"id":8,"slug":"service-eight","title":"Finance & Accounting","icon":"flaticon-bars","courseCount":"32","description":"In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.","btnText":"Learn More"},{"id":9,"slug":"service-nine","title":"ACTIVE LEARNING","icon":"flaticon-study","courseCount":"22","description":"Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore","btnText":"Learn More"},{"id":10,"slug":"service-ten","title":"EXPERT TEACHERS","icon":"flaticon-coach","courseCount":"23","description":"Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore","btnText":"Learn More"},{"id":11,"slug":"service-eleven","title":"STRATEGI LOCATION","icon":"flaticon-study","courseCount":"25","description":"Lorem ipsum dolor amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore","btnText":"Learn More"}]')}};