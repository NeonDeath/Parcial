import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the ProdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prod',
  templateUrl: 'prod.html',
})
export class ProdPage {

  info = InfoPage;
  cart = CartPage;
  carrito = [];

  producto= [
    {
      id:0,
      nombre:'Playera Polo Gris',
      precio:'$260',
      imagen: '../assets/ppg.jpg',
      vendedor: 'Esteban Julio Ricardo Montoya de la Rosa Ramírez',
       valor: [1,2,3],
       fecha: '20/01/2010',
       disponible: '20',
       usuario: 'Lupita. G',
       date:'26 Ago 2016',
       text: 'Le quería regalar una a mi hijo en su cumpleaños, ¿no tienen en talla grande?',
       image: '../assets/avatar1.png'

    },

    {
      id:1,
      nombre:'Saco Tinto para Hombre',
      precio:'$899',
      imagen: '../assets/sth.jpg',
      vendedor: 'Esteban Julio Ricardo Montoya de la Rosa Ramírez',
      valor: [1,2,3],
      fecha: '20/01/2010',
      disponible: '5',
      usuario: 'Julio. M',
      date: '16 Oct 2017',
      text: '¡Se ve muy bien, y tiene un precio muy accesible!',
      image: '../assets/av2.png'
    },

    {
      id:2,
      nombre:'Mochila de Piel',
      precio:'$500',
      imagen: '../assets/mdp.jpg',
      vendedor: 'Esteban Julio Ricardo Montoya de la Rosa Ramírez',
      valor: [1,2,3],
      fecha: '20/03/2013',
      disponible: '11',
      date: '04 Nov 2015',
      text: 'Muy práctica y útil para viajar',
      usuario: 'Jonathan J.',
      image: '../assets/av3.png'

    },

    {
      id:3,
      nombre:'Bolso para Hombre',
      precio:'$1200',
      imagen: '../assets/bph.jpg',
      vendedor: 'Esteban Julio Ricardo Montoya de la Rosa Ramírez',
      valor: [1,2,3],
      fecha: '2/04/2015',
      disponible: '6',
      date: '05 Enero 2001',
      text: 'Algo caro, pero a la vez útil y espacioso',
      usuario: 'Fernand',
      image: '../assets/av4.png'
    },

    {
      id:4,
      nombre:'Sombrero Negro',
      precio:'$400',
      imagen: '../assets/sn.jpg',
      vendedor: 'Esteban Julio Ricardo Montoya de la Rosa Ramírez',
      valor: [1,2,3],
      fecha: '15/08/2016',
      disponible: '15',
      date: '16 Nov 2010',
      text: 'Está genial el sombrero, ¿lo tienen en café?',
      usuario: 'Joseph. J',
      image: '../assets/av5.jpg'
      
    },
////////////////////////////////////
    {
      id:5,
      nombre:'Mochila Negra',
      precio:'$400',
      imagen: '../assets/mn.jpg',
      vendedor: 'Carmen Elizabeth Juanita de Costa Brava Cortez',
      valor: [1,2,3,4],
      fecha: '25/06/2009',
      disponible: '17',
      date: '16 Dic 2016',
      text: 'Es algo cara, pero es muy resistente',
      usuario: 'Lucy. A',
      image: '../assets/av5.jpg'
    },

    {
      id:6,
      nombre:'Aretes Tenis',
      precio:'$250',
      imagen: '../assets/ar.jpg',
      vendedor: 'Carmen Elizabeth Juanita de Costa Brava Cortez',
      valor: [1,2,3,4],
      fecha: '20/11/2018',
      disponible: '30',
      date: '09 Marzo 2015',
      text: 'Están geniales, son el regalo perfecto!',
      usuario: 'Jessie. S',
      image: '../assets/av4.png'
    },

    {
      id:7,
      nombre:'Pulsera Infinito',
      precio:'$300',
      imagen: '../assets/pi.jpg',
      vendedor: 'Carmen Elizabeth Juanita de Costa Brava Cortez',
      valor: [1,2,3,4],
      fecha: '03/08/2012',
      disponible: '10',
      date: '26 Mayo 2013',
      text: 'Está hermoso, muy cute la verdad',
      usuario: 'Elizabeth. L',
      image: '../assets/av3.png'
    },

    {
      id:8,
      nombre:'Reloj',
      precio:'$350',
      imagen: '../assets/r.jpg',
      vendedor: 'Carmen Elizabeth Juanita de Costa Brava Cortez',
      valor: [1,2,3,4],
      fecha: '28/09/2001',
      disponible: '23',
      date: '30 Agosto 2005',
      text: 'Precio justo y muy buena calidad',
      usuario: 'Martha. C',
      image: '../assets/av2.png'
    },

    {
      id:9,
      nombre:'Blusa verde ',
      precio:'$480',
      imagen: '../assets/bv.jpg',
      vendedor: 'Carmen Elizabeth Juanita de Costa Brava Cortez',
      valor: [1,2,3,4],
      fecha: '30/09/2002',
      disponible: '14',
      date: '30 Sept 2016',
      text: '¡Están hermosos y son muy cómodos!',
      usuario: 'Suzie. Q',
      image: '../assets/avatar1.png'
    },
//////////////////////////////////////////////////////
    {
      id:10,
      nombre:'Oso de peluche',
      precio:'$1,500',
      imagen: '../assets/Oso.jpg',
      vendedor: 'Joaguín Archivaldo Guzmán Loera ',
      valor: [1,2],
      fecha: '30/01/2016',
      disponible: '10,000',
      date: '25 Junio 2017',
      text: 'Está tierno y todo, pero, por qué está tan caro?',
      usuario: 'George. I',
      image: '../assets/avatar1.png'
    },

    {
      id:11,
      nombre:'Maleta de viaje',
      precio:'$35,000',
      imagen: '../assets/Maleta.jpg',
      vendedor: 'Joaguín Archivaldo Guzmán Loera ',
      valor: [1,2],
      fecha: '22/06/2018',
      disponible: '600',
      date: '30 Julio 2014',
      text: 'Muy espaciosa, podrías meter casi cualquier cosa…',
      usuario: 'Lamar',
      image: '../assets/av2.png'
    },

    {
      id:12,
      nombre:'Balón de Americano',
      precio:'$12,000',
      imagen: '../assets/Balon.jpg',
      vendedor: 'Joaguín Archivaldo Guzmán Loera ',
      valor: [1,2],
      fecha: '18/03/2018',
      disponible: '100',
      date: '28 Feb 2011',
      text: 'Muy bien hecho, y l relleno es el adecuado',
      usuario: 'Ricky. F',
      image: '../assets/av3.png'
    },

    {
      id:13,
      nombre:'Puros',
      precio:'$3,600',
      imagen: '../assets/Puros.png',
      vendedor: 'Joaguín Archivaldo Guzmán Loera ',
      valor: [1,2],
      fecha: '17/06/1995',
      disponible: '45',
      date: '19 Ago 2011',
      text: 'Muy práctica y de buen material',
      usuario: 'Michalel. R',
      image: '../assets/av4.png'
    },

    {
      id:14,
      nombre:'Pala',
      precio:'$150',
      imagen: '../assets/Pala.jpg',
      vendedor: 'Joaguín Archivaldo Guzmán Loera ',
      valor: [1,2],
      fecha: '09/08/2017',
      disponible: '50',
      date: '18 Sept 2006',
      text: 'Buena calidad',
      usuario: 'Rory H.',
      image: '../assets/av5.jpg'
    },
/////////////////////////////////////////////
    {
      id:15,
      nombre:'Katana ',
      precio:'$14,600',
      imagen: '../assets/Katana.jpg',
      vendedor: 'Ains Ooal Gown ',
      valor: [1,2],
      fecha: '02/10/2016',
      disponible: '10',
      date: '18 Sept 2006',
      text: 'Buena calidad',
      usuario: 'Rory H.',
      image: '../assets/av5.jpg'
    },

    {
      id:16,
      nombre:'Pintura ',
      precio:'$1,500',
      imagen: '../assets/Pintura.jpg',
      vendedor: 'Ains Ooal Gown ',
      valor: [1,2,3,4,5],
      fecha: '04/11/2015',
      disponible: '5',
      date: '11 Oct 2007',
      text: 'Buen diseño, mala calidad',
      usuario: 'Ryu. H',
      image: '../assets/av4.png'
    },

    {
      id:17,
      nombre:'Ramen ',
      precio:'$350',
      imagen: '../assets/Ramen.jpg',
      vendedor: 'Ains Ooal Gown ',
      valor: [1,2,3,4,5],
      fecha: '07/12/2018',
      disponible: '6',
      date: '26 Abril 2008',
      text: 'Gran estilo, mejoró la apariencia de mi sala',
      usuario: 'Suro C.',
      image: '../assets/av3.jpg'
    },

    {
      id:18,
      nombre:'Sake ',
      precio:'$500',
      imagen: '../assets/Sake.jpg',
      vendedor: 'Ains Ooal Gown ',
      valor: [1,2,3,4,5],
      fecha: '18/12/2018',
      disponible: '50',
      date: '10 Mayo 2009',
      text: 'Está delicioso, de veras!',
      usuario: 'Uzumaki. N',
      image: '../assets/av2.jpg'
    },

    {
      id:19,
      nombre:'Bonsai ',
      precio:'$4,500',
      imagen: '../assets/Bonsai.png',
      vendedor: 'Ains Ooal Gown ',
      valor: [1,2,3,4,5],
      fecha: '05/12/2018',
      disponible: '16',
      date: '07 Enero 2013',
      text: 'Muy buen sabor',
      usuario: 'Kawasaki. E',
      image: '../assets/avatar1.jpg'
    }
    
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdPage');
  }

  clickProducto(n:any)
  {
    this.navCtrl.push(this.info, {producto: n, carrito: this.carrito});
  }

  clickCart()
  {
    this.navCtrl.push(this.cart, {carrito: this.carrito});
  }

}
