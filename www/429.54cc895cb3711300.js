"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[429],{429:(T,h,s)=>{s.r(h),s.d(h,{PartAExamPage:()=>O});var c=s(6895),o=s(433),n=s(6114),A=s(529),f=s(7667),q=s(4168),t=s(8256),I=s(1407);function P(e,_){if(1&e&&(t.TgZ(0,"ion-item",12)(1,"ion-radio",13),t._uU(2),t.qZA()()),2&e){const i=_.$implicit;t.xp6(1),t.Q6J("value",i),t.xp6(1),t.Oqu(i)}}function x(e,_){if(1&e){const i=t.EpF();t.TgZ(0,"ion-item",7)(1,"div",8)(2,"ion-label",9)(3,"b"),t._uU(4),t.qZA(),t._uU(5),t.qZA(),t.TgZ(6,"ion-radio-group",10),t.NdJ("ionChange",function(a){const u=t.CHM(i),l=u.index,d=u.$implicit,m=t.oxw(2);return t.KtG(m.onRadioChange(a,l,d))}),t.YNc(7,P,3,2,"ion-item",11),t.qZA()()()}if(2&e){const i=_.$implicit,r=_.index;t.xp6(4),t.hij("",r+1,".\xa0"),t.xp6(1),t.hij(" ",i.Question,""),t.xp6(1),t.s9C("formControlName",i.question_id),t.xp6(1),t.Q6J("ngForOf",i.choices)}}function Q(e,_){if(1&e){const i=t.EpF();t.TgZ(0,"ion-row",14)(1,"ion-button",15),t.NdJ("click",function(){t.CHM(i);const a=t.oxw(2);return t.KtG(a.submitForm())}),t.TgZ(2,"ion-text",16),t._uU(3,"Submit"),t.qZA()()()}if(2&e){const i=t.oxw(2);t.xp6(1),t.Q6J("disabled",!i.examForm.valid)}}function E(e,_){if(1&e&&(t.TgZ(0,"ion-row",3)(1,"form",4)(2,"ion-list"),t.YNc(3,x,8,4,"ion-item",5),t.qZA(),t.YNc(4,Q,4,1,"ion-row",6),t.qZA()()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("formGroup",i.examForm),t.xp6(2),t.Q6J("ngForOf",i.questions),t.xp6(1),t.Q6J("ngIf",i.answer_loaded)}}let O=(()=>{class e{constructor(i,r,a,u){this.http=i,this.formBuilder=r,this.route=a,this.activateRoute=u,this.questions=[],this.check=!1,this.questionForms=[],this.checkQuestionFormHasDemoVal=!1,this.marksheet_final=[],this.grouped_data={},this.answer_loaded=!1,this.choices_mark={"\u0d2a\u0d42\u0d7c\u0d23\u0d4d\u0d23\u0d2e\u0d3e\u0d2f\u0d3f \u0d35\u0d3f\u0d2f\u0d4b\u0d1c\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41":1,"\u0d2d\u0d3e\u0d17\u0d3f\u0d15\u0d2e\u0d3e\u0d2f\u0d3f \u0d35\u0d3f\u0d2f\u0d4b\u0d1c\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41":2,"\u0d2d\u0d3e\u0d17\u0d3f\u0d15\u0d2e\u0d3e\u0d2f\u0d3f \u0d38\u0d2e\u0d4d\u0d2e\u0d24\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41":3,"\u0d2a\u0d42\u0d7c\u0d23\u0d4d\u0d23\u0d2e\u0d3e\u0d2f\u0d3f \u0d38\u0d2e\u0d4d\u0d2e\u0d24\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41":4},this.student_id=this.activateRoute.snapshot.paramMap.get("student_id")}ngOnInit(){this.examForm=this.formBuilder.group({QALI1:["",o.kI.required],QALI2:["",o.kI.required],QALI3:["",o.kI.required],QALI4:["",o.kI.required],QALI5:["",o.kI.required],QALO1:["",o.kI.required],QALO2:["",o.kI.required],QALO3:["",o.kI.required],QALO4:["",o.kI.required],QALO5:["",o.kI.required],QAMU1:["",o.kI.required],QAMU2:["",o.kI.required],QAMU3:["",o.kI.required],QAMU4:["",o.kI.required],QAMU5:["",o.kI.required],QABK1:["",o.kI.required],QABK2:["",o.kI.required],QABK3:["",o.kI.required],QABK4:["",o.kI.required],QABK5:["",o.kI.required],QASP1:["",o.kI.required],QASP2:["",o.kI.required],QASP3:["",o.kI.required],QASP4:["",o.kI.required],QASP5:["",o.kI.required],QAIE1:["",o.kI.required],QAIE2:["",o.kI.required],QAIE3:["",o.kI.required],QAIE4:["",o.kI.required],QAIE5:["",o.kI.required],QAIA1:["",o.kI.required],QAIA2:["",o.kI.required],QAIA3:["",o.kI.required],QAIA4:["",o.kI.required],QAIA5:["",o.kI.required]}),this.http.get(f.e.PLATFORM_API_HOST_URL+"/api/json?file=part-a").subscribe(i=>{this.questions=i,this.answer_loaded=!0,console.log(i),this.check=!0,this.checkQuestionFormHasDemoVal||this.checkQuestionForm()})}onRadioChange(i,r,a){this.questionForms.splice(r,1,{question_id:a.question_id,group:a.group,value:i.detail.value,mark:this.choices_mark[i.detail.value]})}checkQuestionForm(){this.checkQuestionFormHasDemoVal=!0;for(let i=0;i<this.questions.length;i++)this.questionForms.push({question_id:this.questions[i].question_id,group:this.questions[i].group})}submitForm(){try{if(this.grouped_data={},this.examForm.valid){this.questionForms.forEach(({mark:g,group:p})=>{this.grouped_data[p]||(this.grouped_data[p]=[]),this.grouped_data[p].push(g)}),this.grouped_data=JSON.parse(JSON.stringify(this.grouped_data));const i={groups:[this.grouped_data]};console.log(i);let r=this.total_mark_of_an_array(i.groups[0].Logical),a=this.total_mark_of_an_array(i.groups[0].BodilyKinesthetic),u=this.total_mark_of_an_array(i.groups[0].Musical),l=this.total_mark_of_an_array(i.groups[0].Linguistic),d=this.total_mark_of_an_array(i.groups[0].Spacial),m=this.total_mark_of_an_array(i.groups[0].Interpersonal),F=this.total_mark_of_an_array(i.groups[0].Intrapersonal);const M=f.e.PLATFORM_API_HOST_URL+"/api/question?part=a",k={student_id:this.student_id,linguistic:l,logistics:r,musical:u,bodily_kinesthetic:a,spacial:d,interpersonal:m,intrapersonal:F};q.m.setPartA(JSON.stringify(k)),this.http.post(M,k).subscribe(g=>{console.log(g)}),this.route.navigate(["/part-b-exam",this.student_id])}else console.log("this is valid")}catch(i){console.log(i)}}total_mark_of_an_array(i){let r=0;for(let a=0;a<i.length;a++)r+=i[a];return r/20*100}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(A.eN),t.Y36(o.qu),t.Y36(I.F0),t.Y36(I.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-part-a-exam"]],standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[2,"display","flex","justify-content","center","margin-top","30px","font-weight","600"],[2,"font-size","22px","color","rgb(13,92,143)"],["style","background: aliceblue","class","row-form",4,"ngIf"],[1,"row-form",2,"background","aliceblue"],[2,"max-width","400px",3,"formGroup"],["class","ion-margin-vertical back-trans",4,"ngFor","ngForOf"],["class","row-footer",4,"ngIf"],[1,"ion-margin-vertical","back-trans"],[2,"width","100%"],[1,"ion-margin-vertical","ion-margin-horizontal","ion-text-wrap"],[1,"ion-padding",3,"formControlName","ionChange"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["mode","md",3,"value"],[1,"row-footer"],["mode","ios","type","submit","expand","block",1,"ion-margin-vertical","ion-margin-horizontal","no-ripple",2,"--background","rgb(13,92,143)",3,"disabled","click"],[2,"font-size","18px"]],template:function(i,r){1&i&&(t.TgZ(0,"ion-content")(1,"ion-row",0)(2,"ion-text",1),t._uU(3,"Part A"),t.qZA()(),t.YNc(4,E,5,3,"ion-row",2),t.qZA()),2&i&&(t.xp6(4),t.Q6J("ngIf",r.answer_loaded))},dependencies:[n.Pc,n.YG,n.W2,n.Ie,n.Q$,n.q_,n.B7,n.se,n.Nd,n.yW,n.U5,n.QI,c.ez,c.sg,c.O5,o.u5,o._Y,o.JJ,o.JL,A.JF,o.UX,o.sg,o.u],styles:[".row-form[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),e})()}}]);