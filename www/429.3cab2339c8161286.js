"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[429],{429:(w,f,s)=>{s.r(f),s.d(f,{PartAExamPage:()=>P});var k=s(5861),c=s(6895),o=s(433),n=s(6114),h=s(529),e=s(8256),A=s(1407);function I(i,_){if(1&i&&(e.TgZ(0,"ion-item",12)(1,"ion-radio",13),e._uU(2),e.qZA()()),2&i){const t=_.$implicit;e.xp6(1),e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function q(i,_){if(1&i){const t=e.EpF();e.TgZ(0,"ion-item",7)(1,"div",8)(2,"ion-label",9)(3,"b"),e._uU(4),e.qZA(),e._uU(5),e.qZA(),e.TgZ(6,"ion-radio-group",10),e.NdJ("ionChange",function(a){const u=e.CHM(t),l=u.index,d=u.$implicit,m=e.oxw(2);return e.KtG(m.onRadioChange(a,l,d))}),e.YNc(7,I,3,2,"ion-item",11),e.qZA()()()}if(2&i){const t=_.$implicit,r=_.index;e.xp6(4),e.hij("",r+1,".\xa0"),e.xp6(1),e.hij(" ",t.Question,""),e.xp6(1),e.s9C("formControlName",t.question_id),e.xp6(1),e.Q6J("ngForOf",t.choices)}}function x(i,_){if(1&i){const t=e.EpF();e.TgZ(0,"ion-row",14)(1,"ion-button",15),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.submitForm())}),e.TgZ(2,"ion-text",16),e._uU(3,"Submit"),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("disabled",!t.examForm.valid)}}function Q(i,_){if(1&i&&(e.TgZ(0,"ion-row",3)(1,"form",4)(2,"ion-list"),e.YNc(3,q,8,4,"ion-item",5),e.qZA(),e.YNc(4,x,4,1,"ion-row",6),e.qZA()()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.examForm),e.xp6(2),e.Q6J("ngForOf",t.questions),e.xp6(1),e.Q6J("ngIf",t.answer_loaded)}}let P=(()=>{class i{constructor(t,r,a,u){this.http=t,this.formBuilder=r,this.route=a,this.activateRoute=u,this.questions=[],this.check=!1,this.questionForms=[],this.checkQuestionFormHasDemoVal=!1,this.marksheet_final=[],this.grouped_data={},this.answer_loaded=!1,this.choices_mark={"\u0d2a\u0d42\u0d7c\u0d23\u0d4d\u0d23\u0d2e\u0d3e\u0d2f\u0d3f \u0d35\u0d3f\u0d2f\u0d4b\u0d1c\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41":1,"\u0d2d\u0d3e\u0d17\u0d3f\u0d15\u0d2e\u0d3e\u0d2f\u0d3f \u0d35\u0d3f\u0d2f\u0d4b\u0d1c\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41":2,"\u0d2d\u0d3e\u0d17\u0d3f\u0d15\u0d2e\u0d3e\u0d2f\u0d3f \u0d38\u0d2e\u0d4d\u0d2e\u0d24\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41":3,"\u0d2a\u0d42\u0d7c\u0d23\u0d4d\u0d23\u0d2e\u0d3e\u0d2f\u0d3f \u0d38\u0d2e\u0d4d\u0d2e\u0d24\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41":4},this.student_id=this.activateRoute.snapshot.paramMap.get("student_id")}ngOnInit(){this.examForm=this.formBuilder.group({QALI1:["",o.kI.required],QALI2:["",o.kI.required],QALI3:["",o.kI.required],QALI4:["",o.kI.required],QALI5:["",o.kI.required],QALO1:["",o.kI.required],QALO2:["",o.kI.required],QALO3:["",o.kI.required],QALO4:["",o.kI.required],QALO5:["",o.kI.required],QAMU1:["",o.kI.required],QAMU2:["",o.kI.required],QAMU3:["",o.kI.required],QAMU4:["",o.kI.required],QAMU5:["",o.kI.required],QABK1:["",o.kI.required],QABK2:["",o.kI.required],QABK3:["",o.kI.required],QABK4:["",o.kI.required],QABK5:["",o.kI.required],QASP1:["",o.kI.required],QASP2:["",o.kI.required],QASP3:["",o.kI.required],QASP4:["",o.kI.required],QASP5:["",o.kI.required],QAIE1:["",o.kI.required],QAIE2:["",o.kI.required],QAIE3:["",o.kI.required],QAIE4:["",o.kI.required],QAIE5:["",o.kI.required],QAIA1:["",o.kI.required],QAIA2:["",o.kI.required],QAIA3:["",o.kI.required],QAIA4:["",o.kI.required],QAIA5:["",o.kI.required]}),this.http.get("http://34.100.168.105/api/api/json?file=part-a").subscribe(t=>{this.questions=t,this.answer_loaded=!0,console.log(t),this.check=!0,this.checkQuestionFormHasDemoVal||this.checkQuestionForm()})}onRadioChange(t,r,a){this.questionForms.splice(r,1,{question_id:a.question_id,group:a.group,value:t.detail.value,mark:this.choices_mark[t.detail.value]})}checkQuestionForm(){this.checkQuestionFormHasDemoVal=!0;for(let t=0;t<this.questions.length;t++)this.questionForms.push({question_id:this.questions[t].question_id,group:this.questions[t].group})}submitForm(){var t=this;return(0,k.Z)(function*(){try{if(t.examForm.valid){t.questionForms.forEach(({mark:g,group:p})=>{t.grouped_data[p]||(t.grouped_data[p]=[]),t.grouped_data[p].push(g)}),t.grouped_data=JSON.parse(JSON.stringify(t.grouped_data));const r={groups:[t.grouped_data]};console.log(r);let a=t.total_mark_of_an_array(r.groups[0].Logical),u=t.total_mark_of_an_array(r.groups[0].BodilyKinesthetic),l=t.total_mark_of_an_array(r.groups[0].Musical),d=t.total_mark_of_an_array(r.groups[0].Linguistic),m=t.total_mark_of_an_array(r.groups[0].Spacial),E=t.total_mark_of_an_array(r.groups[0].Interpersonal),O=t.total_mark_of_an_array(r.groups[0].Intrapersonal);t.http.post("http://34.100.168.105/api/api/question?part=a",{student_id:t.student_id,linguistic:d,logistics:a,musical:l,bodily_kinesthetic:u,spacial:m,interpersonal:E,intrapersonal:O}).subscribe(g=>{console.log(g)}),yield t.route.navigate(["/part-b-exam",t.student_id])}else console.log("this is valid")}catch(r){console.log(r)}})()}total_mark_of_an_array(t){let r=0;for(let a=0;a<t.length;a++)r+=t[a];return r/20*100}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.eN),e.Y36(o.qu),e.Y36(A.F0),e.Y36(A.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-part-a-exam"]],standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[2,"display","flex","justify-content","center","margin-top","30px","font-weight","600"],[2,"font-size","22px","color","rgb(13,92,143)"],["style","background: aliceblue","class","row-form",4,"ngIf"],[1,"row-form",2,"background","aliceblue"],[2,"max-width","400px",3,"formGroup"],["class","ion-margin-vertical",4,"ngFor","ngForOf"],["class","row-footer",4,"ngIf"],[1,"ion-margin-vertical"],[2,"width","100%"],[1,"ion-margin-vertical","ion-margin-horizontal","ion-text-wrap"],[1,"ion-padding",3,"formControlName","ionChange"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["mode","md",3,"value"],[1,"row-footer"],["mode","ios","type","submit","expand","block",1,"ion-margin-vertical","ion-margin-horizontal",2,"--background","rgb(13,92,143)",3,"disabled","click"],[2,"font-size","18px"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-content")(1,"ion-row",0)(2,"ion-text",1),e._uU(3,"Part A"),e.qZA()(),e.YNc(4,Q,5,3,"ion-row",2),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngIf",r.answer_loaded))},dependencies:[n.Pc,n.YG,n.W2,n.Ie,n.Q$,n.q_,n.B7,n.se,n.Nd,n.yW,n.U5,n.QI,c.ez,c.sg,c.O5,o.u5,o._Y,o.JJ,o.JL,h.JF,o.UX,o.sg,o.u],styles:[".row-form[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),i})()}}]);