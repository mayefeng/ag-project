import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent, ParentComponent, ChildComponent } from './components';
import { HomeService, token } from './services';


@NgModule({
  declarations: [
    HomeContainerComponent, 
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
    ParentComponent,
    ChildComponent
  ],
  providers: [/*HomeService,*/ {provide: token, useValue: 'http:localhost'}],
  imports: [
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
