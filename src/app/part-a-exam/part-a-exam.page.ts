import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {BaseApi} from "../base/base-api";
import {LocalStorage} from "../base/local-storage";

@Component({
  selector: 'app-part-a-exam',
  templateUrl: './part-a-exam.page.html',
  styleUrls: ['./part-a-exam.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
})
export class PartAExamPage implements OnInit {

  questions: any[] = [];
  check = false;
  examForm!: FormGroup;
  radioControl: any
  selectedValue: any
  questionForms: any[] = []
  checkQuestionFormHasDemoVal = false;
  marksheet_final: any[] = []
  grouped_data: any = {}
  answer_loaded = false;

  student_id: any;


  choices_mark: any = {
    "പൂർണ്ണമായി വിയോജിക്കുന്നു": 1,
    "ഭാഗികമായി വിയോജിക്കുന്നു": 2,
    "ഭാഗികമായി സമ്മതിക്കുന്നു": 3,
    "പൂർണ്ണമായി സമ്മതിക്കുന്നു": 4
  }


  constructor(private http: HttpClient, private formBuilder: FormBuilder, private route: Router, private activateRoute: ActivatedRoute) {

    this.student_id = this.activateRoute.snapshot.paramMap.get('student_id')
  }

  ngOnInit() {
    this.examForm = this.formBuilder.group({
      QALI1: ['', Validators.required],
      QALI2: ['', Validators.required],
      QALI3: ['', Validators.required],
      QALI4: ['', Validators.required],
      QALI5: ['', Validators.required],
      QALO1: ['', Validators.required],
      QALO2: ['', Validators.required],
      QALO3: ['', Validators.required],
      QALO4: ['', Validators.required],
      QALO5: ['', Validators.required],
      QAMU1: ['', Validators.required],
      QAMU2: ['', Validators.required],
      QAMU3: ['', Validators.required],
      QAMU4: ['', Validators.required],
      QAMU5: ['', Validators.required],
      QABK1: ['', Validators.required],
      QABK2: ['', Validators.required],
      QABK3: ['', Validators.required],
      QABK4: ['', Validators.required],
      QABK5: ['', Validators.required],
      QASP1: ['', Validators.required],
      QASP2: ['', Validators.required],
      QASP3: ['', Validators.required],
      QASP4: ['', Validators.required],
      QASP5: ['', Validators.required],
      QAIE1: ['', Validators.required],
      QAIE2: ['', Validators.required],
      QAIE3: ['', Validators.required],
      QAIE4: ['', Validators.required],
      QAIE5: ['', Validators.required],
      QAIA1: ['', Validators.required],
      QAIA2: ['', Validators.required],
      QAIA3: ['', Validators.required],
      QAIA4: ['', Validators.required],
      QAIA5: ['', Validators.required],
    });
    this.http.get<any>(BaseApi.PLATFORM_API_HOST_URL+'/api/json?file=part-a').subscribe(response => {
      this.questions = response;
      this.answer_loaded = true;
      console.log(response)
      this.check = true
      if (!this.checkQuestionFormHasDemoVal) {
        this.checkQuestionForm()
      }
    });
  }

  onRadioChange(selectedValue: any, questionIndex: number, question: any) {
    const mark = this.choices_mark[selectedValue.detail.value]
    const data = {
      "question_id": question.question_id,
      "group": question.group,
      "value": selectedValue.detail.value,
      "mark": mark
    }
    this.questionForms.splice(questionIndex, 1, data)
  }

  checkQuestionForm() {
    this.checkQuestionFormHasDemoVal = true;
    for (let i = 0; i < this.questions.length; i++) {
      this.questionForms.push({'question_id': this.questions[i].question_id, 'group': this.questions[i].group})
    }
  }

  async submitForm() {
    try{
      this.grouped_data = {}
      if (this.examForm.valid) {
        this.questionForms.forEach(({mark, group}) => {
          if (!this.grouped_data[group]) {
            this.grouped_data[group] = [];
          }
          this.grouped_data[group].push(mark);
        });

        this.grouped_data = JSON.parse(JSON.stringify(this.grouped_data))

        const groupdata = {
          "groups": [this.grouped_data]
        }

        console.log(groupdata)
        let total_mark_of_logical = this.total_mark_of_an_array(groupdata.groups[0].Logical)
        let total_mark_of_bk = this.total_mark_of_an_array(groupdata.groups[0].BodilyKinesthetic)
        let total_mark_of_musical = this.total_mark_of_an_array(groupdata.groups[0].Musical)
        let total_mark_of_linguistic = this.total_mark_of_an_array(groupdata.groups[0].Linguistic)
        let total_mark_of_spacial = this.total_mark_of_an_array(groupdata.groups[0].Spacial)
        let total_mark_of_interpersonal = this.total_mark_of_an_array(groupdata.groups[0].Interpersonal)
        let total_mark_of_intrapersonal = this.total_mark_of_an_array(groupdata.groups[0].Intrapersonal)

        const url = BaseApi.PLATFORM_API_HOST_URL+'/api/question?part=a';
        const data = {
          student_id: this.student_id,
          linguistic: total_mark_of_linguistic,
          logistics: total_mark_of_logical,
          musical: total_mark_of_musical,
          bodily_kinesthetic: total_mark_of_bk,
          spacial: total_mark_of_spacial,
          interpersonal: total_mark_of_interpersonal,
          intrapersonal: total_mark_of_intrapersonal,
        };
        LocalStorage.setPartA(JSON.stringify(data))
        await this.route.navigate(['/part-b-exam', this.student_id])

      } else {
        console.log('this is valid')
      }
    } catch (e) {
      console.log(e)
    }
  }


  total_mark_of_an_array(data: any[]) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    return (sum / 20) * 100
  }

}
