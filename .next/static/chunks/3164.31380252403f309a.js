"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3164],{4939:function(e,t,s){s.d(t,{Z:function(){return r}});var i=s(5893),a=s(1664),l=s.n(a);function r(e){let{Img:t,Title:s,subTitle:a}=e;return(0,i.jsx)("div",{className:"it-breadcrumb-area it-breadcrumb-bg",style:{backgroundImage:"url(".concat(t||"/img/breadcrumb/ACEDARS-ABOUT.jpg",")")},children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row ",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsxs)("div",{className:"it-breadcrumb-content z-index-3 text-center",children:[(0,i.jsx)("div",{className:"it-breadcrumb-title-box",children:(0,i.jsx)("h3",{className:"it-breadcrumb-title",children:s||"About Us"})}),(0,i.jsx)("div",{className:"it-breadcrumb-list-wrap",children:(0,i.jsxs)("div",{className:"it-breadcrumb-list",children:[(0,i.jsx)("span",{children:(0,i.jsx)(l(),{href:"/",children:"home"})}),(0,i.jsx)("span",{className:"dvdr"}),(0,i.jsx)("span",{children:a||"about us"})]})})]})})})})})}},6360:function(e,t,s){s.d(t,{Z:function(){return r}});var i=s(5893),a=s(9755),l=s.n(a);function r(){return(0,i.jsxs)("div",{id:"it-newsletter",className:"it-newsletter-area it-newsletter-height fix p-relative theme-bg",children:[(0,i.jsx)("div",{className:"it-newsletter-shape-1 d-none d-lg-block",children:(0,i.jsx)(l(),{src:"/img/newsletter/shape-1-1.png",alt:"",width:302,height:268})}),(0,i.jsx)("div",{className:"it-newsletter-shape-2 d-none d-lg-block",children:(0,i.jsx)(l(),{src:"/img/newsletter/shape-1-2.png",alt:"",width:392,height:223})}),(0,i.jsx)("div",{className:"it-newsletter-shape-3 d-none d-xl-block",children:(0,i.jsx)(l(),{src:"/img/newsletter/shape-1-3.png",alt:"",width:66,height:65})}),(0,i.jsx)("div",{className:"it-newsletter-shape-4 d-none d-xl-block",children:(0,i.jsx)(l(),{src:"/img/newsletter/shape-1-4.png",alt:"",width:77,height:85})}),(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,i.jsxs)("div",{className:"it-newsletter-left",children:[(0,i.jsx)("h4",{className:"it-section-title text-white pb-20",children:"Join Our Newsletter"}),(0,i.jsx)("span",{children:"Subscribe our newsletter to get our latest update & news."})]})}),(0,i.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6",children:(0,i.jsxs)("div",{className:"it-newsletter-right p-relative text-end",children:[(0,i.jsx)("input",{type:"text",placeholder:"Enter your email:"}),(0,i.jsx)("button",{className:"it-btn black-bg",type:"submit",children:(0,i.jsx)("span",{children:"subscribe now"})})]})})]})})]})}},631:function(e,t,s){var i=s(5893),a=s(7294);t.Z=e=>{let{scrollClassName:t}=e,[s,l]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{window.pageYOffset>200?l(!0):l(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,i.jsx)(i.Fragment,{children:s&&(0,i.jsx)("button",{className:"".concat(t||"scroll-top scroll-to-target"," ").concat(s?"open":""),onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,i.jsx)("i",{className:"far fa-angle-double-up"})})})}},3164:function(e,t,s){s.r(t),s.d(t,{default:function(){return A}});var i=s(5893),a=s(4939),l=s(7294);let r={origin:"https://api.emailjs.com",blockHeadless:!1},n=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{};class c{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let o=async(e,t,s={})=>{let i=await fetch(r.origin+e,{method:"POST",headers:s,body:t}),a=await i.text(),l=new c(i.status,a);if(i.ok)return l;throw l},d=(e,t,s)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||"string"!=typeof s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},h=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},m=e=>e.webdriver||!e.languages||0===e.languages.length,x=()=>new c(451,"Unavailable For Headless Browser"),j=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},p=e=>!e.list?.length||!e.watchVariable,u=(e,t)=>e instanceof FormData?e.get(t):e[t],b=(e,t)=>{if(p(e))return!1;j(e.list,e.watchVariable);let s=u(t,e.watchVariable);return"string"==typeof s&&e.list.includes(s)},f=()=>new c(403,"Forbidden"),g=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"},w=(e,t,s)=>{let i=Number(s.getItem(e)||0);return t-Date.now()+i},v=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},N=(e,t,s)=>{if(!s.throttle)return!1;g(s.throttle,s.id);let i=s.id||t,a=w(i,s.throttle,e);return a>0?(v(i,a,e),!0):(e.setItem(i,Date.now().toString()),v(i,s.throttle,e),!1)},_=()=>new c(429,"Too Many Requests"),k=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},y=e=>"string"==typeof e?document.querySelector(e):e;var L={init:(e,t="https://api.emailjs.com")=>{if(!e)return;let s=n(e);r.publicKey=s.publicKey,r.blockHeadless=s.blockHeadless,r.blockList=s.blockList,r.limitRate=s.limitRate,r.origin=s.origin||t},send:(e,t,s,i)=>{let a=n(i),l=a.publicKey||r.publicKey,c=a.blockHeadless||r.blockHeadless,j={...r.blockList,...a.blockList},p={...r.limitRate,...a.limitRate};return c&&m(navigator)?Promise.reject(x()):(d(l,e,t),h(s),s&&b(j,s))?Promise.reject(f()):N(localStorage,location.pathname,p)?Promise.reject(_()):o("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:l,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"})},sendForm:(e,t,s,i)=>{let a=n(i),l=a.publicKey||r.publicKey,c=a.blockHeadless||r.blockHeadless,h={...r.blockList,...a.blockList},j={...r.limitRate,...a.limitRate};if(c&&m(navigator))return Promise.reject(x());let p=y(s);d(l,e,t),k(p);let u=new FormData(p);return b(h,u)?Promise.reject(f()):N(localStorage,location.pathname,j)?Promise.reject(_()):(u.append("lib_version","4.1.0"),u.append("service_id",e),u.append("template_id",t),u.append("user_id",l),o("/api/v1.0/email/send-form",u))}},S=s(9755),T=s.n(S);function E(){let e=(0,l.useRef)();return(0,i.jsx)("div",{className:"it-contact__area pt-120 pb-120",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"it-contact__wrap fix z-index-3 p-relative",children:[(0,i.jsx)("div",{className:"it-contact__shape-1 d-none d-xl-block",children:(0,i.jsx)(T(),{src:"/img/contact/shape-2-1.png",alt:"",width:340,height:340})}),(0,i.jsxs)("div",{className:"row align-items-end",children:[(0,i.jsx)("div",{className:"col-xl-7",children:(0,i.jsxs)("div",{className:"it-contact__right-box",children:[(0,i.jsxs)("div",{className:"it-contact__section-box pb-20",children:[(0,i.jsx)("h4",{className:"it-contact__title pb-15",children:"Get in Touch"}),(0,i.jsxs)("p",{children:["ACEDHARS UNILAG: African Centre of Excellence for Drug Research, ",(0,i.jsx)("br",{}),"Herbal Medicine Development and Regulatory Science."," "]})]}),(0,i.jsx)("div",{className:"it-contact__content mb-55",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsxs)("div",{className:"it-contact__list d-flex align-items-start",children:[(0,i.jsx)("div",{className:"it-contact__icon",children:(0,i.jsx)("span",{children:(0,i.jsx)("i",{className:"fa-solid fa-location-dot"})})}),(0,i.jsxs)("div",{className:"it-contact__text",children:[(0,i.jsx)("span",{children:"Our Address"}),(0,i.jsxs)("a",{href:"#",children:["Lagos ",(0,i.jsx)("br",{}),"Nigeria"]})]})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("div",{className:"it-contact__list d-flex align-items-start",children:[(0,i.jsx)("div",{className:"it-contact__icon",children:(0,i.jsx)("span",{children:(0,i.jsx)("i",{className:"fa-solid fa-clock"})})}),(0,i.jsxs)("div",{className:"it-contact__text",children:[(0,i.jsx)("span",{children:"We are Open"}),(0,i.jsx)("a",{href:"#",children:"Mon - Fri: 9.00am to 5.00pm"})]})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("div",{className:"it-contact__list d-flex align-items-start",children:[(0,i.jsx)("div",{className:"it-contact__icon",children:(0,i.jsx)("span",{children:(0,i.jsx)("i",{className:"fa-solid fa-phone phone"})})}),(0,i.jsxs)("div",{className:"it-contact__text",children:[(0,i.jsx)("span",{children:"contact"}),(0,i.jsx)("a",{href:"tel:+2348023004426",children:"+2348023004426"}),(0,i.jsx)("a",{href:"mailto:acedhars@unilag.edu.ng",children:"acedhars@unilag.edu.ng"})]})]})})]})}),(0,i.jsx)("div",{className:"it-contact__bottom-box d-flex align-items-center justify-content-between",children:(0,i.jsxs)("div",{className:"it-footer-social",children:[(0,i.jsx)("a",{href:"www.facebook.com/acedhars-unilag",children:(0,i.jsx)("i",{className:"fab fa-facebook-f"})}),(0,i.jsx)("a",{href:"www.twitter.com/acedhars-unilag",children:(0,i.jsx)("i",{className:"fab fa-twitter"})}),(0,i.jsx)("a",{href:"www.linkedin.com/in/acedhars-unilag",children:(0,i.jsx)("i",{className:"fab fa-linkedin"})})]})})]})}),(0,i.jsx)("div",{className:"col-xl-5",children:(0,i.jsxs)("div",{className:"it-contact__form-box",children:[(0,i.jsx)("form",{ref:e,onSubmit:t=>{t.preventDefault(),L.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",e.current,{publicKey:"YOUR_PUBLIC_KEY"}).then(()=>{console.log("SUCCESS!")},e=>{console.log("FAILED...",e.text)})},children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-12 mb-25",children:(0,i.jsxs)("div",{className:"it-contact-input-box",children:[(0,i.jsx)("label",{children:"Name*"}),(0,i.jsx)("input",{type:"text",placeholder:"Name",name:"user_name"})]})}),(0,i.jsx)("div",{className:"col-12 mb-25",children:(0,i.jsxs)("div",{className:"it-contact-input-box",children:[(0,i.jsx)("label",{children:"Email Address*"}),(0,i.jsx)("input",{type:"email",placeholder:"Email",name:"user_email"})]})}),(0,i.jsx)("div",{className:"col-12 mb-25",children:(0,i.jsxs)("div",{className:"it-contact-input-box",children:[(0,i.jsx)("label",{children:"Phone*"}),(0,i.jsx)("input",{type:"text",placeholder:"Phone",name:"user_phone"})]})}),(0,i.jsx)("div",{className:"col-12 mb-25",children:(0,i.jsxs)("div",{className:"it-contact-input-box",children:[(0,i.jsx)("label",{children:"Subject*"}),(0,i.jsx)("input",{type:"text",placeholder:"Subject",name:"user_subject"})]})}),(0,i.jsx)("div",{className:"col-12 mb-25",children:(0,i.jsxs)("div",{className:"it-contact-textarea-box",children:[(0,i.jsx)("label",{children:"Message"}),(0,i.jsx)("textarea",{placeholder:"Message",name:"user_message"})]})})]})}),(0,i.jsx)("button",{type:"submit",className:"it-btn",children:(0,i.jsxs)("span",{children:["Send Message",(0,i.jsxs)("svg",{width:"17",height:"14",viewBox:"0 0 17 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M11 1.24023L16 7.24023L11 13.2402",stroke:"currentcolor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M1 7.24023H16",stroke:"currentcolor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]})]})})]})})]})]})})})}var R=s(6360),D=s(631);function A(){return(0,i.jsxs)("main",{children:[(0,i.jsx)(a.Z,{Title:"Contact",subTitle:"Contact"}),(0,i.jsx)(E,{}),(0,i.jsx)(R.Z,{}),(0,i.jsx)(D.Z,{})]})}}}]);