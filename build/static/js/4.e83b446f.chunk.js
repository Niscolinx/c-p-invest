(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{507:function(e,n,t){"use strict";var a=t(1),r=t.n(a),o=t(17);n.a=function(e){return e.link?r.a.createElement(o.Link,{className:["button","button--".concat(e.design),"button--".concat(e.mode)].join(" "),to:e.link},e.children):r.a.createElement("button",{className:["button","button--".concat(e.design),"button--".concat(e.mode)].join(" "),onClick:e.onClick,disabled:e.disabled||e.loading,type:e.type},e.loading?"Loading...":e.children)}},508:function(e,n,t){"use strict";var a=t(1),r=t.n(a),o=t(17);n.a=function(e){var n=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"form__linkText"},"I agree with the"," ",r.a.createElement(o.Link,{to:"/",className:"form__link"},"Terms and Conditions")));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form"},e.label&&r.a.createElement("label",{className:"form__label",htmlFor:e.id},"checkbox"!==e.label?e.label:null),"input"===e.control&&r.a.createElement("input",{className:["form__input",!e.valid&&e.touched?"invalid":"valid"].join(" "),minLength:e.minLength,type:e.type,id:e.id,required:e.required,value:e.value,placeholder:e.placeholder,onChange:function(n){return e.onChange(e.id,n.target.value,n.target.files)},onBlur:e.onBlur}),"textarea"===e.control&&r.a.createElement("textarea",{className:["form__textarea",e.valid?"valid":"invalid",e.touched?"touched":"untouched"].join(" "),id:e.id,rows:e.rows,required:e.required,value:e.value,onChange:function(n){return e.onChange(e.id,n.target.value)},onBlur:e.onBlur}),e.label&&"checkbox"===e.control&&r.a.createElement("label",{className:"form__checkboxLabel",htmlFor:e.id},r.a.createElement("input",{className:"form__checkbox",id:e.id,type:e.type,onChange:function(n){e.onChange(e.id,n.target.checked)}}),"checkbox"===e.label?n:null)))}},509:function(e,n,t){"use strict";t.d(n,"c",function(){return a}),t.d(n,"b",function(){return r}),t.d(n,"a",function(){return o});var a=function(e){return""!==e.trim()},r=function(e){return function(n){var t=!0;return e.min&&(t=t&&n.trim().length>=e.min),e.max&&(t=t&&n.trim().length<=e.max),t}},o=function(e){return/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)}},510:function(e,n,t){"use strict";var a=t(1),r=t.n(a);n.a=function(e){var n=!1;e.message&&("error"===Object.keys(e.message)[0]||"success"===Object.keys(e.message)[0]?null!==Object.values(e.message)[0]&&(n=!0):n=!1);var t=n?Object.values(e.message):null,a={display:t?"block":"none"},o=["auth__message"];return t&&e.message.error&&(o.length>1?o.pop()&&o.push("auth__message--error"):o.push("auth__message--error")),t&&e.message.success&&(o.length>1?o.pop()&&o.push("auth__message--success"):o.push("auth__message--success")),r.a.createElement("section",{className:e.login?"auth-form auth-form__login":"auth-form"},r.a.createElement("p",{className:o.join(" "),style:a},t),e.children)}},512:function(e,n,t){"use strict";t.r(n);var a=t(96),r=t(32),o=t(19),i=t(1),l=t.n(i),c=t(35),u=t(46),s=t(508),m=t(507),d=t(509),g=t(510);function h(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw o}}}}function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}n.default=Object(c.b)(function(e){return{err:e.auth.error,loading:e.order.loading,redirectToLoginPage:e.auth.redirect,tokenId:e.auth.tokenId,userId:e.auth.userId}},function(e){return{onInitSignup:function(n){return e(u.d(n))}}})(function(e){var n=Object(i.useState)({signupForm:{fullname:{value:"",valid:!1,touched:!1,validators:[d.c,Object(d.b)({min:6})]},username:{value:"",valid:!1,touched:!1,validators:[d.c,Object(d.b)({min:3})]},email:{value:"",valid:!1,touched:!1,validators:[d.c,d.a]},confirmEmail:{value:"",valid:!1,touched:!1,validators:[d.c,d.a]},password:{value:"",valid:!1,touched:!1,validators:[d.c,Object(d.b)({min:6})]},confirmPassword:{value:"",valid:!1,touched:!1,validators:[d.c,Object(d.b)({min:6})]},secretQuestion:{value:"",valid:!1,touched:!1,validators:[d.c,Object(d.b)({min:6})]},secretAnswer:{value:"",valid:!1,touched:!1,validators:[d.c,Object(d.b)({min:6})]},bitcoinAccount:{value:"",valid:!1,touched:!1,validators:[Object(d.b)({min:26})]},ethereumAccount:{value:"",valid:!1,touched:!1,validators:[Object(d.b)({min:40})]},formValid:!1}}),t=Object(o.a)(n,2),c=t[0],u=t[1],v=Object(i.useState)(!1),p=Object(o.a)(v,2),f=p[0],b=p[1],E=Object(i.useState)(null),y=Object(o.a)(E,2),F=y[0],w=y[1];Object(i.useEffect)(function(){console.log("set message",F,e.err),e.err?w({error:"signup"===e.err.page?e.err.error[0].message:null}):e.tokenId&&w({success:"Success"})},[e]);var _=function(e,n){u(function(t){var o,i=!0,l=h(t.signupForm[e].validators);try{for(l.s();!(o=l.n()).done;){var c=o.value,u=t.signupForm.email.value,s=t.signupForm.password.value;"confirmEmail"===e&&(i=u===n),"confirmPassword"===e&&(i=s===n),i=i&&c(n)}}catch(v){l.e(v)}finally{l.f()}var m=Object(r.a)({},t.signupForm,Object(a.a)({},e,Object(r.a)({},t.signupForm[e],{valid:i,value:n,touched:!0}))),d=!0;for(var g in m)"formValid"!==g&&"[object Object]"!==g&&"bitcoinAccount"!==g&&"ethereumAccount"!==g&&(d=d&&m[g].valid);return{signupForm:m,formValid:d}})},j=function(e){};return console.log("history",e.history),e.redirectToLoginPage&&(console.log("redirect is true",e.redirectToLoginPage),e.history.replace(e.redirectToLoginPage)),console.log("props message",F),l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{message:F},l.a.createElement("form",{onSubmit:function(n){n.preventDefault(),console.log("validation",c.formValid,f),c.formValid&&f?e.onInitSignup(c):(console.log("invalid form"),w({error:"Wrong Input, please check your entries"}))},className:"form__box"},l.a.createElement("div",{className:"form-1"},l.a.createElement("h3",{className:"heading-3 form__heading"},"Personal Information"),l.a.createElement(s.a,{id:"fullname",label:"Fullname",type:"text",control:"input",minLength:6,onChange:_,onBlur:j.bind("fullname"),value:c.signupForm.fullname.value,valid:c.signupForm.fullname.valid,touched:c.signupForm.fullname.touched}),l.a.createElement(s.a,{id:"username",label:"Username",type:"text",control:"input",minLength:3,onChange:_,onBlur:j.bind("username"),value:c.signupForm.username.value,valid:c.signupForm.username.valid,touched:c.signupForm.username.touched}),l.a.createElement(s.a,{id:"email",label:"E-Mail",type:"email",control:"input",onChange:_,onBlur:j.bind("email"),value:c.signupForm.email.value,valid:c.signupForm.email.valid,touched:c.signupForm.email.touched}),l.a.createElement(s.a,{id:"confirmEmail",label:"Confirm E-Mail",type:"email",control:"input",onChange:_,onBlur:j.bind("confirmEmail"),value:c.signupForm.confirmEmail.value,valid:c.signupForm.confirmEmail.valid,touched:c.signupForm.confirmEmail.touched})),l.a.createElement("div",{className:"form-2"},l.a.createElement("h3",{className:"heading-3 form__heading"},"Account Information"),l.a.createElement(s.a,{id:"password",label:"Password",type:"password",control:"input",minLength:6,onChange:_,onBlur:j.bind("password"),value:c.signupForm.password.value,valid:c.signupForm.password.valid,touched:c.signupForm.password.touched}),l.a.createElement(s.a,{id:"confirmPassword",label:"confirm Password",type:"password",control:"input",minLength:6,onChange:_,onBlur:j.bind("confirmPassword"),value:c.signupForm.confirmPassword.value,valid:c.signupForm.confirmPassword.valid,touched:c.signupForm.confirmPassword.touched}),l.a.createElement(s.a,{id:"secretQuestion",label:"Secret Question",type:"text",control:"input",minLength:6,onChange:_,onBlur:j.bind("secretQuestion"),value:c.signupForm.secretQuestion.value,valid:c.signupForm.secretQuestion.valid,touched:c.signupForm.secretQuestion.touched}),l.a.createElement(s.a,{id:"secretAnswer",label:"Secret Answer",type:"text",control:"input",minLength:6,onChange:_,onBlur:j.bind("secretAnswer"),value:c.signupForm.secretAnswer.value,valid:c.signupForm.secretAnswer.valid,touched:c.signupForm.secretAnswer.touched})),l.a.createElement("div",{className:"form-3"},l.a.createElement("h3",{className:"heading-3 form__heading"},"Currency Information"),l.a.createElement(s.a,{id:"bitcoinAccount",label:"Bitcoin Account",type:"text",control:"input",minLength:26,placeholder:"optional",onChange:_,onBlur:j.bind("bitcoinAccount"),value:c.signupForm.bitcoinAccount.value,valid:c.signupForm.bitcoinAccount.valid,touched:c.signupForm.bitcoinAccount.touched}),l.a.createElement(s.a,{id:"ethereumAccount",label:"Ethereum Account",type:"ethereumAccount",control:"input",placeholder:"optional",minLength:40,onChange:_,onBlur:j.bind("ethereumAccount"),value:c.signupForm.ethereumAccount.value,valid:c.signupForm.ethereumAccount.valid,touched:c.signupForm.ethereumAccount.touched})),l.a.createElement("div",{className:"form-btn"},l.a.createElement(s.a,{id:"signupCheckbox",label:"checkbox",type:"checkbox",control:"checkbox",onChange:function(e,n){b(n)}}),l.a.createElement(m.a,{design:"raised",type:"submit",loading:e.loading},"Signup")))))})}}]);
//# sourceMappingURL=4.e83b446f.chunk.js.map