import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
/*  import { HomePage } from '../pages/home/home';  */
/* import { WelcomePage } from '../pages/welcome/welcome'; */
/* import { LoginPage } from '../pages/login/login'; */
/* import { RegisterPage } from '../pages/register/register'; */
import { OtherPage } from '../pages/other/other';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { PreventivePage } from '../pages/preventive/preventive';
 /* import { CopyPage } from '../pages/copy/copy'; 
 */
@NgModule({
  declarations: [
    MyApp,
     OtherPage,
     PreventivePage,
     /* CopyPage , */
     

  /*   WelcomePage, */
  /*   LoginPage, */
   /*  RegisterPage,  */
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     OtherPage, 
     PreventivePage,
/*      CopyPage  */
  
   /*  WelcomePage, */
   /*  LoginPage, */
   /*  RegisterPage,    */
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ],
 
})
export class AppModule {}
