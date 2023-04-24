import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class DownloadPage implements OnInit {

  student_id;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.student_id = this.route.snapshot.paramMap.get('student_id')
    console.log(this.student_id)

  }

  ngOnInit() {
  }

  downloadReport(){
    this.http.get(`http://34.100.168.105/api/api/report?student_id=${this.student_id}`, { responseType: 'blob' }).subscribe((response) => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    })

  }

}
