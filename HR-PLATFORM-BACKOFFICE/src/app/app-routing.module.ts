import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared/shared.component';
import { HomeComponent } from './home/home.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import {CvsModule} from "./models/cvs/cvs.module";

const routes: Routes = [
  // Layout principal avec sidebar/navbar/footer
  {
    path: '',
    component: SharedComponent,
    children: [
      { path: '', component: HomeComponent }, // page d'accueil
      { path: 'users', loadChildren: () => import('./models/users/users.module').then(m => m.UsersModule) },
      {
        path: 'roles',
        loadChildren: () =>
          import('./models/roles/roles.module').then(m => m.RolesModule )
      },
      { path: 'cvs' ,   loadChildren: () =>
          import('./models/cvs/cvs.module').then(m => m.CvsModule )},
      { path:'demandes',  loadChildren: () =>
          import('./models/demandes/demandes.module').then(m => m.DemandesModule )},
      { path:'joboffres',  loadChildren: () =>
          import('./models/job-offres/job-offres.module').then(m => m.JobOffresModule)},
      { path:'entretiens',  loadChildren: () =>
          import('./models/entretiens/entretiens.module').then(m => m.EntretiensModule)},
    ]

  },


  // Authentification
  { path: 'loginSignup', component: AuthFormComponent },

  // Redirection si route non trouvée
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
