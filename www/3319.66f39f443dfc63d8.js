"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3319],{3319:(I,c,u)=>{u.r(c),u.d(c,{SignupPage:()=>w});var Z=u(5861),b=u(6895),l=u(433),s=u(6114);const p={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let m;const y=new Uint8Array(16);function x(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(y)}const i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));const U=function v(e,t,o){if(p.randomUUID&&!t&&!e)return p.randomUUID();const r=(e=e||{}).random||(e.rng||x)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){o=o||0;for(let a=0;a<16;++a)t[o+a]=r[a];return t}return function g(e,t=0){return(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase()}(r)};var h=u(529),n=u(8256),T=u(1407);let w=(()=>{class e{constructor(o,r,a){this.formBuilder=o,this.route=r,this.http=a,console.log("here coming")}ngOnInit(){this.studentForm=this.formBuilder.group({name:["",l.kI.required],address:["",l.kI.required],email:["",[l.kI.required,l.kI.email]],mobile:["",l.kI.required],pursuingClass:["",l.kI.required]})}onSubmit(){var o=this;return(0,Z.Z)(function*(){try{const r=parseInt(U().replace(/[^\d]/g,"").substr(0,6),10);if(console.log(r),o.studentForm.valid){const a=o.studentForm.value,A="http://34.100.168.105/api/api/signup",f={id:r,name:a.name,address:a.address,email:a.email,mobile:a.mobile,pursuing_class:a.pursuingClass};console.log(f);try{o.http.post(A,f).subscribe(d=>{console.log(d),o.route.navigate(["/part-a-exam",r])})}catch(d){console.log("exception occured :::",d)}console.log(o.studentForm.value)}}catch(r){console.log("exception occured",r)}})()}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(l.qu),n.Y36(T.F0),n.Y36(h.eN))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-signup"]],standalone:!0,features:[n.jDz],decls:40,vars:1,consts:[[1,"ion-padding"],[1,"image"],["src","assets/images/logo.png","alt","",2,"max-width","200px","height","100px !important"],[1,"row-form"],[1,"form-div"],[2,"padding","10px !important",3,"formGroup","ngSubmit"],[1,"ion-no-padding","ion-no-margin","back-trans"],["mode","md","placeholder","Enter name","label","Name","label-placement","floating","formControlName","name"],["mode","md","placeholder","Enter address","label","Address","label-placement","floating","formControlName","address"],["mode","md","placeholder","Enter email","label","Email","label-placement","floating","formControlName","email"],["mode","md","placeholder","Enter mobile","label","Mobile","label-placement","floating","formControlName","mobile"],["mode","md","formControlName","pursuingClass","label","Pursuing Class","label-placement","floating"],["value","8th"],["value","9th"],["value","10th"],["value","Plus one"],["value","Plus two"],["mode","ios","type","submit","expand","block",1,"ion-margin-vertical","ion-padding-horizontal",2,"margin-top","50px","--background","rgb(13,92,143)"],[2,"font-size","18px"],[1,"ion-no-border",2,"margin-bottom","30px"],[2,"display","flex","flex-direction","column","align-items","center"],[1,"footer"],[2,"font-size","18px","font-weight","900","color","rgb(13,92,143)"],[2,"font-size","14px"],["href","https://wefionline.in/",2,"text-decoration","none","font-size","14px"]],template:function(o,r){1&o&&(n.TgZ(0,"ion-content",0)(1,"div")(2,"ion-row",1),n._UZ(3,"img",2),n.qZA(),n.TgZ(4,"ion-row",3)(5,"div",4)(6,"form",5),n.NdJ("ngSubmit",function(){return r.onSubmit()}),n.TgZ(7,"ion-item",6),n._UZ(8,"ion-input",7),n.qZA(),n.TgZ(9,"ion-item",6),n._UZ(10,"ion-input",8),n.qZA(),n.TgZ(11,"ion-item",6),n._UZ(12,"ion-input",9),n.qZA(),n.TgZ(13,"ion-item",6),n._UZ(14,"ion-input",10),n.qZA(),n.TgZ(15,"ion-item",6)(16,"ion-select",11)(17,"ion-select-option",12),n._uU(18,"8th"),n.qZA(),n.TgZ(19,"ion-select-option",13),n._uU(20,"9th"),n.qZA(),n.TgZ(21,"ion-select-option",14),n._uU(22,"10th"),n.qZA(),n.TgZ(23,"ion-select-option",15),n._uU(24,"Plus one"),n.qZA(),n.TgZ(25,"ion-select-option",16),n._uU(26,"Plus two"),n.qZA()()(),n.TgZ(27,"ion-button",17)(28,"ion-text",18),n._uU(29," Submit "),n.qZA()()()()()()(),n.TgZ(30,"ion-footer",19)(31,"div",20)(32,"ion-row",21)(33,"ion-text",22),n._uU(34," WEFI KERALA "),n.qZA()(),n.TgZ(35,"ion-text",23),n._uU(36," Studnets center, Calicut - 4 "),n.qZA(),n.TgZ(37,"ion-text")(38,"a",24),n._uU(39,"www.wefionline.in"),n.qZA()()()()),2&o&&(n.xp6(6),n.Q6J("formGroup",r.studentForm))},dependencies:[s.Pc,s.YG,s.W2,s.fr,s.pK,s.Ie,s.Nd,s.t9,s.n0,s.yW,s.QI,s.j9,b.ez,l.u5,l._Y,l.JJ,l.JL,l.UX,l.sg,l.u,h.JF],styles:[".image[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:50px;padding-bottom:50px}.row-form[_ngcontent-%COMP%]{display:flex;justify-content:center}.form-div[_ngcontent-%COMP%]{width:320px!important}.footer[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),e})()}}]);