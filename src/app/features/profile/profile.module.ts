import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { RandomPipe } from 'src/app/shared/pipe/random.pipe';

@NgModule({
  declarations: [ProfileComponent],
  providers:[RandomPipe],
  imports: [CommonModule, RandomPipe],
})
export class ProfileModule {}
