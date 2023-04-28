import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import "@lottiefiles/lottie-player";
import {BaseApi} from "../base/base-api";
import {LocalStorage} from "../base/local-storage";


@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DownloadPage implements OnInit {

  student_id;

  signup: any;
  part_a: any;
  part_b: any;

  check_available = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.student_id = this.route.snapshot.paramMap.get('student_id')
    console.log(this.student_id)

  }

  ngOnInit() {
    this.signup = LocalStorage.getResponse()
    this.part_a = LocalStorage.getPartA()
    this.part_b = LocalStorage.getPartB()
  }

  downloadReport() {
    this.http.get(BaseApi.PLATFORM_API_HOST_URL + `/api/report?student_id=${this.student_id}`, {responseType: 'blob'}).subscribe(
      (response) => {
        if (response) {
          this.check_available = true;
        }
        const blob = new Blob([response], {type: 'application/pdf'});
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      })

    if (!this.check_available) {
      this.masterSyncData()
    }
  }

  masterSyncData() {
    const sign_up = JSON.parse(this.signup)
    const part_a = JSON.parse(this.part_a)
    const part_b = JSON.parse(this.part_b)
    console.log(sign_up)
    console.log(part_a)
    console.log(part_b)

    const data = {
      id: sign_up.id,
      name: sign_up.name,
      address: sign_up.address,
      email: sign_up.email,
      mobile: sign_up.mobile,
      pursuing_class: sign_up.pursuing_class,
      linguistic: part_a.linguistic,
      logistics: part_a.logistics,
      musical: part_a.musical,
      bodily_kinesthetic: part_a.bodily_kinesthetic,
      spacial: part_a.spacial,
      interpersonal: part_a.interpersonal,
      intrapersonal: part_a.intrapersonal,
      realistic: part_b.realistic,
      investigative: part_b.investigative,
      artistic: part_b.artistic,
      social: part_b.social,
      enterprising: part_b.enterprising,
      conventional: part_b.conventional
    }

    try {
     this.http.post(BaseApi.PLATFORM_API_HOST_URL + '/api/local-report', data, {responseType: 'blob'}).subscribe(
        (response) => {
          const blob = new Blob([response], {type: 'application/pdf'});
          const url = window.URL.createObjectURL(blob);
          window.open(url);
        })

    } catch (e) {
      console.log("error occures", e)
    }
  }

}
