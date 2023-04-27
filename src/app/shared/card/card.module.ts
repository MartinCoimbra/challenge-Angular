import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import CardComponent from './card.component';
import { QuoteComponent } from './quote/quote.component';
import { ProductComponent } from './product/product.component';
import { PostComponent } from './post/post.component';
import { AdDirective } from './ad.directive';

@NgModule({
  declarations: [
    CardComponent,
    QuoteComponent,
    ProductComponent,
    PostComponent,
    AdDirective
  ],
  imports: [CommonModule],
  exports: [CardComponent, QuoteComponent, ProductComponent, PostComponent],
})
export class CardModule {}
