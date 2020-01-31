import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'the jungle!!!!!!';
  Post = {
    nome_usuario: 'Carolina',
    serie: 'His Dark Materials',
    is_liked: true,
    num_likes: 10
  };

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Irado!',
      subHeader: 'Gostaria de avaliar o filme?',
      buttons: ['Não', 'Sim']
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionaado na sua lista! :)',
      duration: 2000
    });

    toast.present();
  }

}
