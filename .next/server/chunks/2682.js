"use strict";exports.id=2682,exports.ids=[2682],exports.modules={4939:(e,i,t)=>{t.d(i,{Z:()=>a});var n=t(997),s=t(1664),l=t.n(s);function a(e){let{Img:i,Title:t,subTitle:s}=e,a={backgroundImage:`url(${i||"/img/breadcrumb/ACEDARS-ABOUT.jpg"})`};return n.jsx("div",{className:"it-breadcrumb-area it-breadcrumb-bg",style:a,children:n.jsx("div",{className:"container",children:n.jsx("div",{className:"row ",children:n.jsx("div",{className:"col-md-12",children:(0,n.jsxs)("div",{className:"it-breadcrumb-content z-index-3 text-center",children:[n.jsx("div",{className:"it-breadcrumb-title-box",children:n.jsx("h3",{className:"it-breadcrumb-title",children:t||"About Us"})}),n.jsx("div",{className:"it-breadcrumb-list-wrap",children:(0,n.jsxs)("div",{className:"it-breadcrumb-list",children:[n.jsx("span",{children:n.jsx(l(),{href:"/",children:"home"})}),n.jsx("span",{className:"dvdr"}),n.jsx("span",{children:s||"about us"})]})})]})})})})})}},6967:(e,i,t)=>{t.d(i,{Z:()=>m});var n=t(997),s=t(9755),l=t.n(s),a=t(1664),o=t.n(a);function m(e){let{eventClass:i,Slug:t,Img:s,Title:a,Description:m,eventDate:r,eventMonth:d,eventLocation:c,eventTime:v,imgWidth:g,imgHeight:h}=e;return n.jsx("div",{className:i||"it-event-2-item-box",children:(0,n.jsxs)("div",{className:"it-event-2-item",children:[(0,n.jsxs)("div",{className:"it-event-2-thumb fix",children:[n.jsx(o(),{href:`/event/${t||"details"}`,children:n.jsx(l(),{src:s||"/img/event/event-1-1.jpg",width:g||422,height:h||256,alt:""})}),n.jsx("div",{className:"it-event-2-date",children:(0,n.jsxs)("span",{children:[n.jsx("i",{children:r||"08"})," ",n.jsx("br",{}),d||"October"]})})]}),(0,n.jsxs)("div",{className:"it-event-2-content",children:[n.jsx("h4",{className:"it-event-2-title",children:n.jsx(o(),{href:`/event/${t||"details"}`,children:a||"print, and publishing industries for previewing"})}),n.jsx("div",{className:"it-event-2-text",children:n.jsx("p",{className:"mb-0 pb-10",children:m||"Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor"})}),(0,n.jsxs)("div",{className:"it-event-2-meta",children:[(0,n.jsxs)("span",{children:[n.jsx("i",{className:"fa-light fa-clock"}),v||"Time: 11:00am 03;00pm"]}),(0,n.jsxs)("span",{children:[n.jsx(o(),{href:"#",children:n.jsx("i",{className:"fa-light fa-location-dot"})}),"Location: ",c||"USA"]})]})]})]})})}},6360:(e,i,t)=>{t.d(i,{Z:()=>a});var n=t(997),s=t(9755),l=t.n(s);function a(){return(0,n.jsxs)("div",{id:"it-newsletter",className:"it-newsletter-area it-newsletter-height fix p-relative theme-bg",children:[n.jsx("div",{className:"it-newsletter-shape-1 d-none d-lg-block",children:n.jsx(l(),{src:"/img/newsletter/shape-1-1.png",alt:"",width:302,height:268})}),n.jsx("div",{className:"it-newsletter-shape-2 d-none d-lg-block",children:n.jsx(l(),{src:"/img/newsletter/shape-1-2.png",alt:"",width:392,height:223})}),n.jsx("div",{className:"it-newsletter-shape-3 d-none d-xl-block",children:n.jsx(l(),{src:"/img/newsletter/shape-1-3.png",alt:"",width:66,height:65})}),n.jsx("div",{className:"it-newsletter-shape-4 d-none d-xl-block",children:n.jsx(l(),{src:"/img/newsletter/shape-1-4.png",alt:"",width:77,height:85})}),n.jsx("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[n.jsx("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,n.jsxs)("div",{className:"it-newsletter-left",children:[n.jsx("h4",{className:"it-section-title text-white pb-20",children:"Join Our Newsletter"}),n.jsx("span",{children:"Subscribe our newsletter to get our latest update & news."})]})}),n.jsx("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,n.jsxs)("div",{className:"it-newsletter-right p-relative text-end",children:[n.jsx("input",{type:"text",placeholder:"Enter your email:"}),n.jsx("button",{className:"it-btn black-bg",type:"submit",children:n.jsx("span",{children:"subscribe now"})})]})})]})})]})}},631:(e,i,t)=>{t.d(i,{Z:()=>l});var n=t(997),s=t(6689);let l=e=>{let{scrollClassName:i}=e,[t,l]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{window.pageYOffset>200?l(!0):l(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),n.jsx(n.Fragment,{children:t&&n.jsx("button",{className:`${i||"scroll-top scroll-to-target"} ${t?"open":""}`,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:n.jsx("i",{className:"far fa-angle-double-up"})})})}},2682:(e,i,t)=>{t.r(i),t.d(i,{default:()=>d});var n=t(997),s=t(4939),l=t(6967),a=t(9444);function o(){return n.jsx("div",{className:"it-event-2-area it-event-style-3 p-relative pt-90 pb-90",children:n.jsx("div",{className:"container",children:n.jsx("div",{className:"row",children:a.map(e=>n.jsx("div",{className:"col-xl-4 col-lg-6 col-md-6 mb-30",children:n.jsx(l.Z,{Slug:e.slug,Title:e.title,Img:e.image,Description:e.description,eventDate:e.eventDate,eventMonth:e.eventMonth,eventLocation:e.location,eventTime:e.eventTime})},e.id)).slice(0,6)})})})}var m=t(6360),r=t(631);function d(){return(0,n.jsxs)("main",{children:[n.jsx(s.Z,{Title:"Event",subTitle:"Event"}),n.jsx(o,{}),n.jsx(m.Z,{}),n.jsx(r.Z,{})]})}},9444:e=>{e.exports=JSON.parse('[{"id":1,"slug":"event-one","title":"Print, and publishing industries for previewing","description":"Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor","image":"/img/event/event-1-1.jpg","detailsImg":"/img/event/details-1.jpg","eventTime":"4:00 Pm 6:00 Pm","eventDate":"22","eventMonth":"March","location":"USA","venue":"3783 Columbia Mine Road Shinnston, WV 26431","skillLevel":"Beginner","email":"infomail@gmail.com","phone":"+9870123456789","lessonCount":"10"},{"id":2,"slug":"event-two","title":"These are Designed to Provide Hands Training and Skill-Building","description":"Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor","image":"/img/event/event-1-2.jpg","detailsImg":"/img/event/details-1.jpg","eventTime":"4:00 Pm 6:00 Pm","eventDate":"22","eventMonth":"March","location":"USA","venue":"3783 Columbia Mine Road Shinnston, WV 26431","skillLevel":"Beginner","email":"infomail@gmail.com","phone":"+9870123456789","lessonCount":"10"},{"id":3,"slug":"event-three","title":"It Statistics Data Science And Business Analysis","description":"Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor","image":"/img/event/event-1-3.jpg","detailsImg":"/img/event/details-1.jpg","eventTime":"4:00 Pm 6:00 Pm","eventDate":"22","eventMonth":"March","location":"USA","venue":"3783 Columbia Mine Road Shinnston, WV 26431","skillLevel":"Beginner","email":"infomail@gmail.com","phone":"+9870123456789","lessonCount":"10"},{"id":4,"slug":"event-four","title":"Beginner Adobe Illustrator For Graphic Design","description":"Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor","image":"/img/event/event-1-2.jpg","detailsImg":"/img/event/details-1.jpg","eventTime":"4:00 Pm 6:00 Pm","eventDate":"22","eventMonth":"March","location":"USA","venue":"3783 Columbia Mine Road Shinnston, WV 26431","skillLevel":"Beginner","email":"infomail@gmail.com","phone":"+9870123456789","lessonCount":"10"},{"id":5,"slug":"event-five","title":"It Statistics Data Science And Business Analysis","description":"Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor","image":"/img/event/event-1-3.jpg","detailsImg":"/img/event/details-1.jpg","eventTime":"4:00 Pm 6:00 Pm","eventDate":"22","eventMonth":"March","location":"USA","venue":"3783 Columbia Mine Road Shinnston, WV 26431","skillLevel":"Beginner","email":"infomail@gmail.com","phone":"+9870123456789","lessonCount":"10"},{"id":6,"slug":"event-six","title":"Beginner Adobe Illustrator For Graphic Design","description":"Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor","image":"/img/event/event-1-1.jpg","detailsImg":"/img/event/details-1.jpg","eventTime":"4:00 Pm 6:00 Pm","eventDate":"22","eventMonth":"March","location":"USA","venue":"3783 Columbia Mine Road Shinnston, WV 26431","skillLevel":"Beginner","email":"infomail@gmail.com","phone":"+9870123456789","lessonCount":"10"},{"id":7,"slug":"event-seven","title":"It Statistics Data Science And Business Analysis","description":"Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor","image":"/img/event/event-1-2.jpg","detailsImg":"/img/event/details-1.jpg","eventTime":"4:00 Pm 6:00 Pm","eventDate":"22","eventMonth":"March","location":"USA","venue":"3783 Columbia Mine Road Shinnston, WV 26431","skillLevel":"Beginner","email":"infomail@gmail.com","phone":"+9870123456789","lessonCount":"10"},{"id":8,"slug":"event-eight","title":"Beginner Adobe Illustrator For Graphic Design","description":"Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor","image":"/img/event/event-1-3.jpg","detailsImg":"/img/event/details-1.jpg","eventTime":"4:00 Pm 6:00 Pm","eventDate":"22","eventMonth":"March","location":"USA","venue":"3783 Columbia Mine Road Shinnston, WV 26431","skillLevel":"Beginner","email":"infomail@gmail.com","phone":"+9870123456789","lessonCount":"10"},{"id":9,"slug":"event-nine","title":"It Statistics Data Science And Business Analysis","description":"Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor","image":"/img/event/event-1-1.jpg","detailsImg":"/img/event/details-1.jpg","eventTime":"4:00 Pm 6:00 Pm","eventDate":"22","eventMonth":"March","location":"USA","venue":"3783 Columbia Mine Road Shinnston, WV 26431","skillLevel":"Beginner","email":"infomail@gmail.com","phone":"+9870123456789","lessonCount":"10"},{"id":10,"slug":"event-ten","title":"Beginner Adobe Illustrator For Graphic Design","description":"Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor","image":"/img/event/event-1-2.jpg","detailsImg":"/img/event/details-1.jpg","eventTime":"4:00 Pm 6:00 Pm","eventDate":"22","eventMonth":"March","location":"USA","venue":"3783 Columbia Mine Road Shinnston, WV 26431","skillLevel":"Beginner","email":"infomail@gmail.com","phone":"+9870123456789","lessonCount":"10"},{"id":11,"slug":"event-eleven","title":"It Statistics Data Science And Business Analysis","description":"Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor","image":"/img/event/event-1-1.jpg","detailsImg":"/img/event/details-1.jpg","eventTime":"4:00 Pm 6:00 Pm","eventDate":"22","eventMonth":"March","location":"USA","venue":"3783 Columbia Mine Road Shinnston, WV 26431","skillLevel":"Beginner","email":"infomail@gmail.com","phone":"+9870123456789","lessonCount":"10"},{"id":12,"slug":"event-twelve","title":"Beginner Adobe Illustrator For Graphic Design","description":"Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor","image":"/img/event/event-1-3.jpg","detailsImg":"/img/event/details-1.jpg","eventTime":"4:00 Pm 6:00 Pm","eventDate":"22","eventMonth":"March","location":"USA","venue":"3783 Columbia Mine Road Shinnston, WV 26431","skillLevel":"Beginner","email":"infomail@gmail.com","phone":"+9870123456789","lessonCount":"10"}]')}};