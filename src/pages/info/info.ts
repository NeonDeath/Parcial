import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  producto;
  cart = [];
 //nombre = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto = this.navParams.get('producto');
    //this.nombre = this.navParams.get('producto').nombre;
    this.cart = this.navParams.get('carrito');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  clickCarro()
  {
    this.cart.push(this.producto);
    this.navCtrl.pop();
  }
}
