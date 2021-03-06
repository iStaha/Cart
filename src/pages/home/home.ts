import { Component } from '@angular/core';
import { NavController, IonicPage,    MenuController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/* import { LoginPage } from '../login/login'; */


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';

  tab1Root: any = 'FeedPage';
  tab2Root: any = 'SearchPage';
 /*  tab3Root: any = 'AccountPage';  */
 

  constructor(public nav: NavController,  private auth: AuthServiceProvider ,  public menu: MenuController) {

    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];

  }

  ionViewDidEnter() {
    //to disable menu, or
    this.menu.enable(true);
  }



  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });

    

}
}
