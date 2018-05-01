import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , MenuController } from 'ionic-angular';

/* import { LoginPage } from '../login/login'; */

/**
 * Generated class for the GettingstartedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gettingstarted',
  templateUrl: 'gettingstarted.html',
})
export class GettingstartedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GettingstartedPage');
  }

  ionViewDidEnter() {
    //to disable menu, or
   /*  this.menu.enable(false); */
    
    this.menu.swipeEnable( false )
  }

  launchWelcomePage(){
    this.navCtrl.push('WelcomePage');
  }

  launchLoginPage(){
    this.navCtrl.push('LoginPage');
  }

}
