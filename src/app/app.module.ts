import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListCameraPage } from '../pages/list-camera/list-camera';
import { NewCameraPage } from '../pages/new-camera/new-camera';
import { AlarmPage } from '../pages/alarm/alarm';
import { ConfigPage } from '../pages/config/config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Md5 } from 'ts-md5/dist/md5';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { DataServiceProvider } from '../providers/data-service/data-service';

import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';

import { NativeAudio } from '@ionic-native/native-audio';

import { FCM } from '@ionic-native/fcm';
import { QRScanner } from '@ionic-native/qr-scanner';
import { Network } from '@ionic-native/network';
import { SettingsProvider } from '../providers/settings/settings';
import { IonicImageLoader } from 'ionic-image-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListCameraPage,
    NewCameraPage,
    AlarmPage,
    ConfigPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicImageLoader.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListCameraPage,
    NewCameraPage,
    AlarmPage,
    ConfigPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    Toast,
    DataServiceProvider,
    HTTP,
    Md5,
    Media,
    File,
    Transfer,
    NativeAudio,
    FCM,
    QRScanner,
    Network,
    SettingsProvider
  ]
})
export class AppModule {}
