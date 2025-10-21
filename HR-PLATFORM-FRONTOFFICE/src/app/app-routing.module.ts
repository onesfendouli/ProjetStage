import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'jobs', loadChildren: () => import('./features/jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'profile', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'contact', loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule) },
  { path: '**', redirectTo: '' } ,// route par défaut

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
