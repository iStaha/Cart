import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/* import { CopyPage } from '../copy/copy';    */

/**
 * Generated class for the WorkspacesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workspaces',
  templateUrl: 'workspaces.html',
})
export class WorkspacesPage {

  constructor(public navCtrl: NavController,private auth: AuthServiceProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkspacesPage');
  }

  public launchHmePage() {
    console.log("dcsdc");
   /*   this.navCtrl.push(HomePage);   */
     this.navCtrl.setRoot('CopyPage');   
  }

  public launchHomePage() {
    console.log("dcsdc");
   /*   this.navCtrl.push(HomePage);   */
     this.navCtrl.setRoot('HomePage');   
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });

}
}
