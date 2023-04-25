import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import CardComponent from './card/card.component';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [],
  imports: [],
  exports: [ReactiveFormsModule, CardModule],
})
export class SharedModule {}
