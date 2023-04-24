import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {Router} from "@angular/router";
import { v4 as uuidv4 } from "uuid";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class SignupPage implements OnInit {

  studentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router, private http: HttpClient) {
    console.log('here coming')


  }

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      pursuingClass: ['', Validators.required],
    })
  }

  async onSubmit() {
   try{
     const student_id = parseInt(uuidv4().replace(/[^\d]/g, '').substr(0, 6), 10);
     console.log(student_id)
     if (this.studentForm.valid) {

       const form = this.studentForm.value
       const url = 'http://34.100.168.105/api/api/signup';
       const data = {
         "id": student_id,
         "name": form.name,
         "address": form.address,
         "email": form.email,
         "mobile": form.mobile,
         "pursuing_class": form.pursuingClass
       };
       console.log(data)
       try{
         this.http.post(url, data).subscribe(response =>  {
           console.log(response);
           this.route.navigate(['/part-a-exam', student_id])
         });
       } catch (e) {
         console.log("exception occured :::", e)
       }
       console.log(this.studentForm.value)

     }
   } catch (e) {
     console.log('exception occured', e)
   }

  }

}
