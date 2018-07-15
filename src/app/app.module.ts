import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import these modules
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular5-social-login";
import { AppComponent } from './app.component';

//export these configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("2033144283602371")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("708836277970-iuvg64i6hiug5eolvsm399ncjkm2pr5k.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    //import this module
    SocialLoginModule
  ],
  providers: [
	{
      //add these services
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
