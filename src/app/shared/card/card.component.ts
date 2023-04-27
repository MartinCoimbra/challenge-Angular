import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AdDirective } from './ad.directive';

export interface AdComponent {
  data: any;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [],
})
export default class CardComponent implements OnInit {
  /* input de la data que viene del ngFor */
  @Input() itemCard: any = {};

  /* referencia al elemento del dom */
  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    /* this.itemCard.component */
    const componentFactory: any =
      this.componentFactoryResolver.resolveComponentFactory(
        this.itemCard.component
      );

    /* referencia al contenedor especificamente al ng-template*/
    const viewContainerRef: ViewContainerRef = this.adHost.viewContainerRef;

    /* con createComponent creamos el component seleccionando this.itemCard.component */
    const componentRef =
      viewContainerRef.createComponent<AdComponent>(componentFactory);

    /* lo agregamos al DOM */
    componentRef.instance.data = this.itemCard.data;
  }
}
