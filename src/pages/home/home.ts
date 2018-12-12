import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NewPage } from '../new/new';
import { Storage } from '@ionic/storage';
import { ProdPage } from '../prod/prod';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  registrar = NewPage;
  producto = ProdPage;
  usuarios = [];
  mail = '';
  password = '';
  nombre = '';
  numero = '';

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage: Storage) { 
      this.storage.keys()
      .then(keys => {
        if (keys.some(k => k == 'usuarios')){
          this.storage.get('usuarios')
          .then(usuarios => {
            this.usuarios = JSON.parse(usuarios);
          });
        }
      });
  }

  clickInicio()
  {
    this.navCtrl.push(this.registrar, {usuarios: this.usuarios});
  }

  clickStart()
  {
    let index = this.usuarios.findIndex( usuario => usuario.mail == this.mail && usuario.password == this.password)

    if (index >= 0)
    {
      const alert = this.alertCtrl.create({
        title: 'Usuario registrado',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push(this.producto);
    }
    else 
    {
      const alert = this.alertCtrl.create({
        title: 'Usuario no registrado',
        buttons: ['OK']
      });
      alert.present();
    }

  }
}
