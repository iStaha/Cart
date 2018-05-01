
import { Component } from '@angular/core';
import { NavController, IonicPage,    MenuController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the CopyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-copy',
  templateUrl: 'copy.html',
})
export class CopyPage {

 
  

  username = '';
  email = '';

 /*  tab1Root: any = 'FeedPage';
  tab2Root: any = 'SearchPage'; */
 /*   tab3Root: any = 'AccountPage';  */
 

  constructor(public nav: NavController,  private auth: AuthServiceProvider ,  public menu: MenuController) {

    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CopyPage');
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

public launchCreatePage() {
  console.log("dcsdc");
  this.nav.setRoot('CreatePage');
}


}
