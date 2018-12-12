import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdPage } from './prod';

@NgModule({
  declarations: [
    ProdPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdPage),
  ],
})
export class ProdPageModule {}
