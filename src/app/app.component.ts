import { Component , ViewChild } from '@angular/core';
import { Nav,App, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

 import { OtherPage } from '../pages/other/other';
/* import { GettingstartedPage } from '../pages/gettingstarted/gettingstarted'; 
/* s */
/*   import { FeedPage } from '../pages/feed/feed';  */
/* import { HomePage } from '../pages/home/home'; */
/* import { CopyPage } from '../pages/copy/copy'; */
import { PreventivePage } from '../pages/preventive/preventive';
import { WorkspacesPage } from '../pages/workspaces/workspaces';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;



 
  rootPage:any = 'GettingstartedPage';

  pages: Array<{title: string,icon: string, component :any}>;

  constructor(platform: Platform, statusBar: StatusBar,  splashScreen: SplashScreen, public menu: MenuController,  public appCtrl: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
       
    });

 
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Workspaces',  icon: 'cart', component: WorkspacesPage },
   /*    { title: 'Fault Report', component: CopyPage }, */
      { title: 'GIS',  icon: 'cart', component: OtherPage },
      { title: 'Preventive Maintaince', icon: 'cart', component: PreventivePage }
    ];
 
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

   /*  console.log(page.component);
    console.log(this.nav.getActive().component); */

    console.log(page)
    if (this.nav.getActive().component != page.component ) {
     
    /*   console.log(this.nav.setRoot(page.component)); */

    console.log("else");

   /*  console.log( this.appCtrl.getRootNav()); */

      this.nav.setRoot(page.component);  
    /*  this.nav.popToRoot;  */

     /*  this.nav.goToRoot(page.component); */

      
    /*   this.app.getRootNav().setRoot(SetupPage); */
     } 


     /* else{
      this.nav.setRoot('CopyPage');
     } */

     
    

     

 
    
  }

   launchHmePage(){
   
   /*  console.log(this.appCtrl.getRootNav() )
    console.log( this.appCtrl.getRootNavById('n4'));
     this.nav.setRoot('WorkspacesPage');

    console.log( this.nav.getActive().component); */
     this.nav.setRoot('CopyPage').then(data => {
      console.log(data);
      this.nav.popToRoot();
  }, (error) => {
      console.log(error);
  })  
  } 

    
}

