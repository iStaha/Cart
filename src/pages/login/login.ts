import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/*  import { HomePage } from '../home/home'; 
import { RegisterPage } from '../register/register'; */

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    this.showLoading()
    console.log("LOG IN")
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
    /*      this.nav.setRoot(HomePage);  */
        this.nav.setRoot('WorkspacesPage'); 
      } 
      else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }


  launchForgetPage(){
    this.nav.push('ForgetPage')
  }

 /*  launchRegisterPage(){
    this.nav.push(RegisterPage)
  } */

  


  

}
