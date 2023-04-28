import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {Router} from "@angular/router";
import { v4 as uuidv4 } from "uuid";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BaseApi} from "../base/base-api";
import {LocalStorage} from "../base/local-storage";



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
    localStorage.clear()
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
     let student_id = parseInt(uuidv4().replace(/[^\d]/g, '').substr(1, 6), 10);
     while (student_id < 100000) {
       student_id *= 10;
     }
     student_id = parseInt(String(student_id))
     console.log(student_id)
     if (this.studentForm.valid) {

       const form = this.studentForm.value
       const url = BaseApi.PLATFORM_API_HOST_URL +'/api/signup';
       const data = {
         "id": student_id,
         "name": form.name,
         "address": form.address,
         "email": form.email,
         "mobile": form.mobile,
         "pursuing_class": form.pursuingClass
       };
       LocalStorage.setResponse(JSON.stringify(data))
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
