import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-part-b-exam',
  templateUrl: './part-b-exam.page.html',
  styleUrls: ['./part-b-exam.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule]
})
export class PartBExamPage implements OnInit {

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
    "Yes": 1,
    "No": 2
  }

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.student_id = this.route.snapshot.paramMap.get('student_id')
    console.log(this.student_id)

  }

  ngOnInit() {
    this.examForm = this.formBuilder.group({
      QBRE1: ['', Validators.required],
      QBRE2: ['', Validators.required],
      QBRE3: ['', Validators.required],
      QBRE4: ['', Validators.required],
      QBRE5: ['', Validators.required],
      QBIN1: ['', Validators.required],
      QBIN2: ['', Validators.required],
      QBIN3: ['', Validators.required],
      QBIN4: ['', Validators.required],
      QBIN5: ['', Validators.required],
      QBAR1: ['', Validators.required],
      QBAR2: ['', Validators.required],
      QBAR3: ['', Validators.required],
      QBAR4: ['', Validators.required],
      QBAR5: ['', Validators.required],
      QBSO1: ['', Validators.required],
      QBSO2: ['', Validators.required],
      QBSO3: ['', Validators.required],
      QBSO4: ['', Validators.required],
      QBSO5: ['', Validators.required],
      QBEN1: ['', Validators.required],
      QBEN2: ['', Validators.required],
      QBEN3: ['', Validators.required],
      QBEN4: ['', Validators.required],
      QBEN5: ['', Validators.required],
      QBCO1: ['', Validators.required],
      QBCO2: ['', Validators.required],
      QBCO3: ['', Validators.required],
      QBCO4: ['', Validators.required],
      QBCO5: ['', Validators.required],
    });

   try{
     this.http.get<any>('http://34.100.168.105/api/api/json?file=part-b').subscribe(response => {
       this.questions = response;
       this.answer_loaded = true;
       console.log(response)
       this.check = true
       if (!this.checkQuestionFormHasDemoVal) {
         this.checkQuestionForm()
       }
     });
   } catch (e) {
     console.log('exception occured: ', e)
   }
  }

  checkQuestionForm() {
    this.checkQuestionFormHasDemoVal = true;
    for (let i = 0; i < this.questions.length; i++) {
      this.questionForms.push({'question_id': this.questions[i].question_id, 'group': this.questions[i].group})
    }
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

  async submitForm() {
    try {
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
        let total_mark_of_artistic = this.total_mark_of_an_array(groupdata.groups[0].Artistic)
        let total_mark_of_conventional = this.total_mark_of_an_array(groupdata.groups[0].Conventional)
        let total_mark_of_enterprising = this.total_mark_of_an_array(groupdata.groups[0].Enterprising)
        let total_mark_of_investigative = this.total_mark_of_an_array(groupdata.groups[0].Investigative)
        let total_mark_of_realistic = this.total_mark_of_an_array(groupdata.groups[0].Realistic)
        let total_mark_of_social = this.total_mark_of_an_array(groupdata.groups[0].Social)

        const url = 'http://34.100.168.105/api/api/question?part=b';
        const data = {
          student_id: this.student_id,
          realistic: total_mark_of_realistic,
          investigative: total_mark_of_investigative,
          artistic: total_mark_of_artistic,
          social: total_mark_of_social,
          enterprising: total_mark_of_enterprising,
          conventional: total_mark_of_conventional,
        };
        this.http.post(url, data).subscribe(response => {
          console.log(response);
        });
        await this.router.navigate(['/download', this.student_id])

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
    return (sum / 10) * 100
  }


}
