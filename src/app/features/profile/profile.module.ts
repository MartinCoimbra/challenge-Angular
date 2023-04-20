import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { RandomPipe } from 'src/app/shared/pipe/random.pipe';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, RandomPipe, RouterModule.forChild(routes)],
})
export class ProfileModule {}
