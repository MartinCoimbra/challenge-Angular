import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import CardComponent from './card.component';
import { QuoteComponent } from './quote/quote.component';
import { ProductComponent } from './product/product.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [CardComponent, QuoteComponent, ProductComponent, PostComponent],
  imports: [CommonModule],
  exports: [CardComponent],
})
export class CardModule {}
