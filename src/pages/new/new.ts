import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  
  usuario = [];
  password = '';
  name = '';
  num = '';
  usuario_nuevo = '';
  mail_nuevo = '';
  password_nuevo = '';
  numero_nuevo = '';
  nombre_nuevo = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public storage: Storage) {

      this.usuario = this.navParams.get('usuarios');
  }
  clickAgregar()
  {

    if(this.password.length < 8 )
    {
      const alert = this.alertCtrl.create({
        title: 'Invalido',
         subTitle: 'La contraseña debe tener al menos 8 caracteres',
         buttons: ['OK']
       })
      alert.present();

       
    }
    else 
    {

      this.usuario.push({
        mail: this.mail_nuevo,
        password: this.password,
        name: this.nombre_nuevo,
        num: this.numero_nuevo,
        nombre: this.name,
        numero: this.num
      })
      // this.usuario.push({ 
      //   usuario: this.password_nuevo + this.mail_nuevo });
      //   this.usuario_nuevo = '';

      this.mail_nuevo = "";
      this.password_nuevo = "";
      this.numero_nuevo = '';
      this.nombre_nuevo = '';
      this.usuario_nuevo = '';
      this.name = '';
      this.num = '';

      this.storage.set('usuarios', JSON.stringify(this.usuario));
      this.navCtrl.pop();

      console.log(this.mail_nuevo);
     
    }

    

  


   // this.storage.set('datos', JSON.stringify(this.usuario));

   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }


}
