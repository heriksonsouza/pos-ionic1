import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

imc={};
listaImc=[];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  converterNumber(numero):number{
    return parseFloat(numero);
  }

//método para calcular o imc e jogar na lista
  calcularImc(){
    this.imc.resultado = (this.imc.peso) / Math.pow((this.imc.altura), 2);
    this.listaImc.push(this.imc);
    this.imc={peso:'', altura:'', nome:'', resultado:''};
  }

  //método para exibir alert
  exibirImc(imcLista){
    this.alertCtrl.create({
      title: 'Dados IMC',
      subTitle: 'Olá '+ imcLista.nome + ', o seu IMC é de ' + imcLista.resultado,
      buttons: ['OK']
    }).present();

  }

}
