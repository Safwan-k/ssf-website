"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3319],{3319:(T,c,u)=>{u.r(c),u.d(c,{SignupPage:()=>C});var v=u(5861),y=u(6895),r=u(433),s=u(6114);const p={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let d;const U=new Uint8Array(16);function f(){if(!d&&(d=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!d))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return d(U)}const l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));const S=function I(e,o,t){if(p.randomUUID&&!o&&!e)return p.randomUUID();const i=(e=e||{}).random||(e.rng||f)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,o){t=t||0;for(let a=0;a<16;++a)o[t+a]=i[a];return o}return function g(e,o=0){return(l[e[o+0]]+l[e[o+1]]+l[e[o+2]]+l[e[o+3]]+"-"+l[e[o+4]]+l[e[o+5]]+"-"+l[e[o+6]]+l[e[o+7]]+"-"+l[e[o+8]]+l[e[o+9]]+"-"+l[e[o+10]]+l[e[o+11]]+l[e[o+12]]+l[e[o+13]]+l[e[o+14]]+l[e[o+15]]).toLowerCase()}(i)};var h=u(529),n=u(8256),Z=u(1407);let C=(()=>{class e{constructor(t,i,a){this.formBuilder=t,this.route=i,this.http=a,console.log("here coming")}ngOnInit(){this.studentForm=this.formBuilder.group({name:["",r.kI.required],address:["",r.kI.required],email:["",[r.kI.required,r.kI.email]],mobile:["",r.kI.required],pursuingClass:["",r.kI.required]})}onSubmit(){var t=this;return(0,v.Z)(function*(){try{const i=parseInt(S().replace(/[^\d]/g,"").substr(0,6),10);if(console.log(i),t.studentForm.valid){const a=t.studentForm.value,P="http://34.100.168.105/api/api/signup",b={id:i,name:a.name,address:a.address,email:a.email,mobile:a.mobile,pursuing_class:a.pursuingClass};console.log(b);try{t.http.post(P,b).subscribe(m=>{console.log(m),t.route.navigate(["/part-a-exam",i])})}catch(m){console.log("exception occured :::",m)}console.log(t.studentForm.value)}}catch(i){console.log("exception occured",i)}})()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r.qu),n.Y36(Z.F0),n.Y36(h.eN))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-signup"]],standalone:!0,features:[n.jDz],decls:20,vars:1,consts:[[1,"ion-padding"],[3,"formGroup","ngSubmit"],["mode","md","placeholder","Enter name","label","Name","label-placement","floating","fill","solid","formControlName","name"],["mode","md","placeholder","Enter address","label","Address","label-placement","floating","fill","solid","formControlName","address"],["mode","md","placeholder","Enter email","label","Email","label-placement","floating","fill","solid","formControlName","email"],["mode","md","placeholder","Enter mobile","label","Mobile","label-placement","floating","fill","solid","formControlName","mobile"],["mode","md","formControlName","pursuingClass","label","Pursuing Class","label-placement","floating","fill","solid"],["value","8th"],["value","9th"],["value","10th"],["value","Plus one"],["value","Plus two"],["type","submit","expand","block",1,"ion-margin-vertical"]],template:function(t,i){1&t&&(n.TgZ(0,"ion-content",0)(1,"div")(2,"form",1),n.NdJ("ngSubmit",function(){return i.onSubmit()}),n._UZ(3,"ion-input",2)(4,"ion-input",3)(5,"ion-input",4)(6,"ion-input",5),n.TgZ(7,"ion-select",6)(8,"ion-select-option",7),n._uU(9,"8th"),n.qZA(),n.TgZ(10,"ion-select-option",8),n._uU(11,"9th"),n.qZA(),n.TgZ(12,"ion-select-option",9),n._uU(13,"10th"),n.qZA(),n.TgZ(14,"ion-select-option",10),n._uU(15,"Plus one"),n.qZA(),n.TgZ(16,"ion-select-option",11),n._uU(17,"Plus two"),n.qZA()(),n.TgZ(18,"ion-button",12),n._uU(19,"Submit"),n.qZA()()()()),2&t&&(n.xp6(2),n.Q6J("formGroup",i.studentForm))},dependencies:[s.Pc,s.YG,s.W2,s.pK,s.t9,s.n0,s.QI,s.j9,y.ez,r.u5,r._Y,r.JJ,r.JL,r.UX,r.sg,r.u,h.JF]}),e})()}}]);