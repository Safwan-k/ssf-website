import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,FormsModule],
})
export class AppComponent {
  constructor() {}
}
