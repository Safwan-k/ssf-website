import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'part-a-exam/:student_id',
    loadComponent: () => import('./part-a-exam/part-a-exam.page').then( m => m.PartAExamPage)
  },
  {
    path: 'part-b-exam/:student_id',
    loadComponent: () => import('./part-b-exam/part-b-exam.page').then( m => m.PartBExamPage)
  },
  {
    path: 'download/:student_id',
    loadComponent: () => import('./download/download.page').then( m => m.DownloadPage)
  },
];
