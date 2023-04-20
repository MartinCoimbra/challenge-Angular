import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './features/profile/profile.component';

const routes: Routes = [
  {
   path:'profile',
   component: ProfileComponent
  },
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
