(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(19),s=a.n(c),r=a(18),i=a(33),l=a(5),o=(a(41),a(6)),j=a(13),u=a(0),d=function(){return Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsxs)(j.b,{to:"/",className:"brand",children:[Object(u.jsx)("i",{className:"fas fa-file-invoice-dollar"}),"MONEY LOAN"]}),Object(u.jsxs)("div",{className:"nav-links",children:[Object(u.jsxs)(j.b,{to:"/",className:"navLink",children:[Object(u.jsx)("i",{className:"fas fa-home"}),"Home"]}),Object(u.jsxs)(j.b,{to:"/loans",className:"navLink",children:[Object(u.jsx)("i",{className:"fas fa-info"}),"Loans"]}),Object(u.jsxs)("a",{href:"#calci",className:"navLink",children:[Object(u.jsx)("i",{className:"fas fa-calculator"}),"EMI Calculator"]})]})]})},b=function(){return Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsxs)("div",{className:"about",children:[Object(u.jsx)("h3",{children:"About"}),Object(u.jsxs)("ul",{className:"footer-list",children:[Object(u.jsx)("li",{children:"Our Story"}),Object(u.jsx)("li",{children:"Lorem espum"}),Object(u.jsx)("li",{children:"Contact"}),Object(u.jsx)("li",{children:"Jobs"})]})]}),Object(u.jsxs)("div",{className:"resources",children:[Object(u.jsx)("h3",{children:"Resources"}),Object(u.jsxs)("ul",{className:"footer-list",children:[Object(u.jsx)("li",{children:"FAQs"}),Object(u.jsx)("li",{children:"Blog"}),Object(u.jsx)("li",{children:"Support"}),Object(u.jsx)("li",{children:"Developer APIs"})]})]}),Object(u.jsxs)("div",{className:"legal",children:[Object(u.jsx)("h3",{children:"Legal"}),Object(u.jsxs)("ul",{className:"footer-list",children:[Object(u.jsx)("li",{children:"Privacy"}),Object(u.jsx)("li",{children:"Terms of Services"}),Object(u.jsx)("li",{children:"Security"})]})]}),Object(u.jsxs)("div",{className:"Stay Connected",children:[Object(u.jsx)("h3",{children:"Stay Connected"}),Object(u.jsxs)("ul",{className:"footer-list eicons",children:[Object(u.jsx)("li",{children:Object(u.jsx)("i",{className:"fab fa-instagram eicon"})}),Object(u.jsx)("li",{children:Object(u.jsx)("i",{className:"fab fa-facebook-square eicon"})}),Object(u.jsx)("li",{children:Object(u.jsx)("i",{className:"fab fa-twitter-square eicon"})}),Object(u.jsx)("li",{children:Object(u.jsx)("i",{className:"fab fa-linkedin eicon"})})]})]})]})},O=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{}),e.children,Object(u.jsx)(b,{})]})},m=a(2),x=function(){return Object(u.jsxs)("section",{className:"info-container",id:"info",children:[Object(u.jsx)("h2",{children:"How to Apply ?"}),Object(u.jsxs)("ul",{className:"info-list",children:[Object(u.jsx)("li",{className:"info-list__item",children:"Login with your email and password."}),Object(u.jsx)("li",{className:"info-list__item",children:"Fill the application form"}),Object(u.jsx)("li",{className:"info-list__item",children:"After successfull submission wait for the approval"})]})]})},h=a(3),p=a(12),v=a.n(p),f=a(15),N=a(16),g=a.n(N),y="GET_LOAN_REQUEST",S="GET_LOAN_SUCCESS",_="GET_LOAN_FAIL",E="SET_LOAN",I="GET_MYLOAN_REQUEST",C="GET_MYLOAN_SUCCESS",L="GET_MYLOAN_FAIL",A="USER_REG_REQUEST",k="USER_REG_SUCCESS",T="USER_REG_FAIL",w="USER_LOGIN_REQUEST",R="USER_LOGIN_SUCCESS",D="USER_LOGIN_FAIL",F="USER_LOGOUT",M="APPLICATION_FORM_REQUEST",U="GET_REG_FORM",q="HIDE_REG_FORM",P="CREATE_APPLICATION_REQUEST",G="CREATE_APPLICATION_SUCCESS",B="CREATE_APPLICATION_FAIL",Q=function(e){return function(){var t=Object(f.a)(v.a.mark((function t(a){var n,c,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:I}),n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}},t.next=5,g.a.get("https://moneyloan.herokuapp.com/api/v1/loans/my-application",n);case 5:c=t.sent,s=c.data,a({type:C,payload:s}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:L,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},J=function(){return localStorage.getItem("userInfo")&&localStorage.removeItem("userInfo"),{type:F}},H=function(){return Object(u.jsxs)("div",{className:"lds-ring",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})},Y=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(h.a)(s,2),i=r[0],o=r[1],j=Object(n.useState)(""),d=Object(h.a)(j,2),b=d[0],O=d[1],m=Object(n.useState)(""),x=Object(h.a)(m,2),p=x[0],N=x[1],y=Object(n.useState)(""),S=Object(h.a)(y,2),_=S[0],E=S[1],I=Object(l.b)(),C=Object(l.c)((function(e){return e.user})),L=C.loading,w=C.userInfo,R=C.error,D=function(e,t){e.preventDefault(),I(function(e){return function(){var t=Object(f.a)(v.a.mark((function t(a){var n,c,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:A}),n={headers:{"Content-Type":"application/json"}},t.next=5,g.a.post("https://moneyloan.herokuapp.com/api/v1/users/",{name:e.name,email:e.email,password:e.password,contact:e.contact,address:e.address},n);case 5:c=t.sent,s=c.data,a({type:k,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:T,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))};return Object(u.jsx)("div",{className:"form",children:L?Object(u.jsx)(H,{}):Object(u.jsxs)("form",{onSubmit:function(e){return D(e,{name:a,email:i,password:b,contact:p,address:_})},className:"register-form",children:[R&&Object(u.jsx)("div",{className:"errorDiv",children:R}),w&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"welcome",children:["Welcome, ",w.name]}),Object(u.jsx)("div",{className:"button",id:"logoutBtn",onClick:function(){I(J())},children:"Logout"})]}),!w&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"text",name:"name",value:a,onChange:function(e){return c(e.target.value)},required:!0}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:Object(u.jsx)("span",{children:"Name"})})]}),Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"text",name:"email",value:i,onChange:function(e){return o(e.target.value)},required:!0}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:Object(u.jsx)("span",{children:"Email"})})]}),Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"text",name:"email",value:p,onChange:function(e){return N(e.target.value)},required:!0}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:Object(u.jsx)("span",{children:"Contact no."})})]}),Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"text",name:"address",value:_,onChange:function(e){return E(e.target.value)},required:!0}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:Object(u.jsx)("span",{children:"Address"})})]}),Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"password",name:"password",value:b,onChange:function(e){return O(e.target.value)},required:!0}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:Object(u.jsx)("span",{children:"Password"})})]}),Object(u.jsx)("button",{className:"button",id:"regBtn",children:"Register"}),Object(u.jsx)("div",{className:"btnToLogin",onClick:function(){I({type:q})},children:Object(u.jsx)("p",{children:"Login"})})]})]})})},W=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(h.a)(s,2),i=r[0],o=r[1],j=Object(l.b)(),d=Object(l.c)((function(e){return e.user})),b=d.loading,O=d.userInfo,m=d.error;return Object(u.jsx)("div",{className:"form",children:b?Object(u.jsx)(H,{}):Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(function(e,t){return function(){var a=Object(f.a)(v.a.mark((function a(n){var c,s,r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:w}),c={headers:{"Content-Type":"application/json"}},a.next=5,g.a.post("https://moneyloan.herokuapp.com/api/v1/users/login",{email:e,password:t},c);case 5:s=a.sent,r=s.data,n({type:R,payload:r}),localStorage.setItem("userInfo",JSON.stringify(r)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),n({type:D,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(a,i))},className:"login-form",children:[m&&Object(u.jsx)("div",{className:"errorDiv",children:m}),O&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"welcome",children:["Welcome, ",O.name]}),Object(u.jsx)("div",{className:"button",id:"logoutBtn",onClick:function(){j(J())},children:"Logout"})]}),!O&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"text",name:"email",value:a,onChange:function(e){return c(e.target.value)},required:!0}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:Object(u.jsx)("span",{children:"Email"})})]}),Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"password",name:"password",value:i,onChange:function(e){return o(e.target.value)},required:!0}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:Object(u.jsx)("span",{children:"Password"})})]}),Object(u.jsx)("button",{className:"button",id:"loginBtn",children:"Login"}),!O&&Object(u.jsx)("div",{className:"btnToRegister",onClick:function(){j({type:U})},children:Object(u.jsx)("p",{children:"New User ?"})})]})]})})},z=function(e){var t=Object(l.c)((function(e){return e.user})).showRegForm;return Object(u.jsxs)("section",{className:"login-container",id:"login",children:[Object(u.jsx)("div",{className:"login-container__text",children:Object(u.jsxs)("div",{className:"text",children:[Object(u.jsxs)("h1",{children:["GET PERSONAL LOANS FASTER WITH OUR ",Object(u.jsx)("span",{children:"SIMPLE APPLICATION "}),"PROCESS"]}),Object(u.jsx)("p",{children:"Availability of personal loans for salaried individual depend on job stability, income, age, work experience, and CIBIL score."})]})}),t?Object(u.jsx)(Y,{}):Object(u.jsx)(W,{})]})},X=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(z,Object(m.a)({},e)),Object(u.jsx)(x,{})]})},V=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(h.a)(s,2),i=r[0],o=r[1],j=Object(n.useState)(""),d=Object(h.a)(j,2),b=d[0],O=d[1],m=Object(n.useState)(""),x=Object(h.a)(m,2),p=x[0],N=x[1],y=Object(n.useState)(""),S=Object(h.a)(y,2),_=S[0],E=S[1],I=Object(n.useState)(""),C=Object(h.a)(I,2),L=C[0],A=C[1],k=Object(n.useState)(""),T=Object(h.a)(k,2),w=T[0],R=T[1],D=Object(n.useState)(""),F=Object(h.a)(D,2),M=F[0],U=F[1],q=Object(n.useState)(!0),J=Object(h.a)(q,2),H=J[0],Y=J[1],W=Object(n.useState)(!1),z=Object(h.a)(W,2),X=z[0],V=z[1],K=Object(l.b)(),Z=Object(l.c)((function(e){return e.user})),$=Object(l.c)((function(e){return e.loans})).loanId,ee=Object(l.c)((function(e){return e.application})).error,te=Z.userInfo;Object(n.useEffect)((function(){c(te.token),o(te.name),O(te.address),N(te.contact)}),[te,$]);var ae=function(e,t){e.preventDefault(),K(function(e){return function(){var t=Object(f.a)(v.a.mark((function t(a){var n,c,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:P}),n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}},t.next=5,g.a.post("https://moneyloan.herokuapp.com/api/v1/loans/application",{loanId:e.loanId,amount:e.amount,startDate:e.startDate,endDate:e.endDate,emi:e.emi,method:e.fixed?"fixed":"floating"},n);case 5:c=t.sent,s=c.data,a({type:G,payload:s}),a(Q(e.token)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:B,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"loan-application__container",children:[Object(u.jsx)("p",{children:"Loan Application Form"}),ee&&Object(u.jsx)("div",{className:"errorDiv",children:ee}),Object(u.jsxs)("form",{onSubmit:function(e){return ae(e,{token:a,loanId:$,amount:_,startDate:L,endDate:w,emi:M,fixed:H,float:X})},className:"loan-application__form",children:[Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"text",name:"text",value:i,onChange:function(e){return o(e.target.value)},required:!0}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:"Applicant Name"})]}),Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"text",name:"address",value:b,onChange:function(e){return O(e.target.value)},required:!0}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:"Address"})]}),Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"phone",name:"contact",value:p,onChange:function(e){return N(e.target.value)},required:!0}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:"Contact No."})]}),Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"number",name:"amount",value:_,onChange:function(e){return E(e.target.value)},required:!0}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:"Loan Amount"})]}),Object(u.jsxs)("div",{className:"input-box__date",children:[Object(u.jsx)("label",{children:"Loan Start Date"}),Object(u.jsx)("input",{type:"date",name:"loanStartDate",value:L,onChange:function(e){return A(e.target.value)},required:!0})]}),Object(u.jsxs)("div",{className:"input-box__date",children:[Object(u.jsx)("label",{children:"Loan Expiry Date"}),Object(u.jsx)("input",{type:"date",name:"loanEndDate",value:w,onChange:function(e){return R(e.target.value)},required:!0})]}),Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"number",name:"emis",value:M,onChange:function(e){return U(e.target.value)},required:!0}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:"Monthly Installments"})]}),Object(u.jsxs)("div",{className:"checked-btn",children:[Object(u.jsx)("input",{type:"radio",name:"method",checked:H,onChange:function(e){Y((function(e){return!e})),V((function(e){return!e}))},required:!0}),Object(u.jsx)("label",{children:"Fixed"}),Object(u.jsx)("input",{type:"radio",name:"method",checked:X,onChange:function(e){V((function(e){return!e})),Y((function(e){return!e}))},required:!0}),Object(u.jsx)("label",{children:"Floating"})]}),Object(u.jsx)("button",{className:"button",id:"loanFormSubmit",children:"Submit"})]})]})})},K=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),c=a[0],s=a[1],r=Object(l.b)(),i=Object(l.c)((function(e){return e.user})).userInfo,j=function(e){r({type:M}),r(function(e){return{type:E,payload:e}}(e)),s(!0)},d=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"backdrop",onClick:function(){s(!1)}}),i?Object(u.jsx)(V,{}):Object(u.jsx)(o.a,{to:"/"})]});return Object(u.jsxs)(u.Fragment,{children:[c?d:null,Object(u.jsxs)("div",{className:"loan-card",onClick:e.clickMethod?function(){return j(e.loanId)}:null,children:[Object(u.jsx)("div",{className:"loan-card__img",children:Object(u.jsx)("i",{className:"fas fa-user-check"})}),"application"===e.type?Object(u.jsxs)("div",{className:"loan-application__card",children:[Object(u.jsx)("div",{className:"loan-card__category",children:e.head}),Object(u.jsxs)("div",{className:"loan-card__amount",children:["Loan Amount: ",e.amount," \u20b9"]}),Object(u.jsxs)("div",{className:"loan-card__startDate",children:["Start: ",new Date(e.startDate).toDateString()]}),Object(u.jsxs)("div",{className:"loan-card__endDate",children:["End: ",new Date(e.endDate).toDateString()]}),Object(u.jsxs)("div",{className:"loan-card__emi",children:["EMI: ",e.emi," \u20b9"]}),Object(u.jsxs)("div",{className:"loan-card__method",children:["Method: ",e.method]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"loan-card__amount",children:e.endAmount?"".concat(e.startAmount,"\u20b9 - ").concat(e.endAmount,"\u20b9"):"".concat(e.startAmount,"\u20b9")}),Object(u.jsxs)("div",{className:"loan-card__tenure",children:["Tenure(yrs)"," ",e.endTenure?"".concat(e.startTenure," - ").concat(e.endTenure):e.startTenure]}),Object(u.jsxs)("div",{className:"loan-card__interest",children:["On ",e.rate,"% Interest"]})]})]})]})},Z=function(e){var t=e.token,a=Object(l.b)(),c=Object(l.c)((function(e){return e.loans})),s=c.loading,r=c.error,i=c.myLoans;return Object(n.useEffect)((function(){a(Q(t))}),[a,t]),Object(u.jsxs)("div",{className:"myloans-container",children:[Object(u.jsx)("h3",{children:"My Application"}),r&&Object(u.jsx)("div",{className:"errorDiv",children:r}),s?Object(u.jsx)(H,{}):i.length>0?Object(u.jsx)("div",{className:"myLoans",children:i.map((function(e){return Object(u.jsx)(K,{type:"application",head:e.loan.category,amount:e.amount,emi:e.emi,method:e.method,startDate:e.startDate,endDate:e.endDate,clickMethod:!1},e._id)}))}):Object(u.jsx)("div",{className:"myLoans",children:"No loan applications"})]})},$=function(e){var t=Object(l.b)(),a=Object(l.c)((function(e){return e.loans})),c=a.loading,s=a.error,r=a.loans;return Object(n.useEffect)((function(){t(function(){var e=Object(f.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:y}),e.next=4,g.a.get("https://moneyloan.herokuapp.com/api/v1/loans");case 4:a=e.sent,n=a.data,t({type:S,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:_,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(u.jsxs)("div",{className:"loans-container",children:[Object(u.jsx)("h3",{children:"Available Loans"}),s&&Object(u.jsx)("div",{className:"errorDiv",children:s}),c?Object(u.jsx)(H,{}):r.length>0?Object(u.jsx)("div",{className:"loans",children:r.map((function(e){return Object(u.jsx)(K,{loanId:e._id,head:e.category,startAmount:e.amount.start,endAmount:e.amount.end,rate:e.interestRate,startTenure:e.tenure.start,endTenure:e.tenure.end,clickMethod:!0},e._id)}))}):Object(u.jsx)("div",{className:"loans",children:"No loans here to show"})]})},ee=function(){var e=Object(l.c)((function(e){return e.user})).userInfo;return Object(u.jsxs)(u.Fragment,{children:[e&&Object(u.jsx)(Z,{token:e.token}),Object(u.jsx)($,{})]})},te=function(){var e=Object(n.useState)(1e3),t=Object(h.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(10),r=Object(h.a)(s,2),i=r[0],l=r[1],o=Object(n.useState)(20),j=Object(h.a)(o,2),d=j[0],b=j[1],O=Object(n.useState)(54.306),m=Object(h.a)(O,2),x=m[0],p=m[1],v=Object(n.useState)(86.119),f=Object(h.a)(v,2),N=f[0],g=f[1],y=Object(n.useState)(1086.119),S=Object(h.a)(y,2),_=S[0],E=S[1];return Object(u.jsxs)("section",{className:"calci-container",id:"calci",children:[Object(u.jsx)("h2",{children:"EMI Calculator"}),Object(u.jsxs)("div",{className:"calci",children:[Object(u.jsxs)("div",{className:"calci-cal",children:[Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"number",name:"amount",value:a,required:!0,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:"Loan Amount (\u20b9)"})]}),Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"number",name:"interest",value:i,required:!0,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:"Interest Rate (%)"})]}),Object(u.jsxs)("div",{className:"input-box",children:[Object(u.jsx)("input",{type:"number",name:"tenure",value:d,required:!0,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("div",{className:"underline"}),Object(u.jsx)("label",{children:"Loan Tenure (Months)"})]}),Object(u.jsx)("button",{className:"button",id:"calBtn",onClick:function(){var e=(i/12/100).toFixed(3),t=a*Number(e)*parseFloat(Math.pow(1+Number(e),Number(d))/(Math.pow(1+Number(e),Number(d))-1));p(Number(t).toFixed(3));var n=t*d,c=n-a;E(Number(n).toFixed(3)),g(Number(c).toFixed(3))},children:"Calculate"})]}),Object(u.jsxs)("div",{className:"calci-res",children:[Object(u.jsx)("p",{children:"Loan EMI"}),Object(u.jsxs)("h4",{children:["\u20b9 ",x]}),Object(u.jsx)("p",{children:"Total Interest Payable"}),Object(u.jsxs)("h4",{children:["\u20b9 ",N]}),Object(u.jsx)("p",{children:"Total Payment (Principal + Interest)"}),Object(u.jsxs)("h4",{children:["\u20b9 ",_]})]})]})]})};var ae=function(){return Object(u.jsxs)(O,{children:[Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/loans",exact:!0,component:ee}),Object(u.jsx)(o.b,{path:"/",exact:!0,component:X}),Object(u.jsx)(o.a,{to:"/"})]}),Object(u.jsx)(te,{})]})},ne={loans:[],myLoans:[]},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(m.a)(Object(m.a)({},e),{},{loanId:t.payload});case y:return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:null});case S:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,loans:t.payload,error:null});case _:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:t.payload});case I:return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:null});case C:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,myLoans:t.payload,error:null});case L:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:t.payload});default:return e}},se={userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(m.a)(Object(m.a)({},e),{},{showRegForm:!1});case U:return Object(m.a)(Object(m.a)({},e),{},{showRegForm:!0});case A:return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:null});case k:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,userInfo:t.payload,error:null});case T:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:t.payload});case w:return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:null});case R:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,userInfo:t.payload,error:null});case D:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:t.payload});case F:return{loading:!1,userInfo:null,error:null};default:return e}},ie={},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(m.a)(Object(m.a)({},e),{},{error:null});case P:return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:null});case G:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,data:t.data,error:null});case B:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:t.payload});default:return e}},oe=Object(r.b)({loans:ce,user:re,application:le}),je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.c,ue=Object(r.d)(oe,je(Object(r.a)(i.a)));s.a.render(Object(u.jsx)(j.a,{children:Object(u.jsx)(l.a,{store:ue,children:Object(u.jsx)(ae,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.b489f40e.chunk.js.map