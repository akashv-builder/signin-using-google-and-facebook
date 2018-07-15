import {Component, OnInit} from '@angular/core';
//import these modules
import {
    AuthService,
    SocialUser,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//implements OnInit

export class AppComponent {
 
	private user: SocialUser;
  public authorized: boolean = false;
  

  //making instance of service
  constructor( private socialAuthService: AuthService ) {}
  
  //function to get data
  public socialSignIn(socialPlatform : string) {  

    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData        
        console.log(userData);
        if (userData != null) {
               this.authorized = true;
               this.user = userData;               
            }       
      }
    );
  }

  //function to sign out
  public signOut(){
          this.socialAuthService.signOut();
          this.authorized = false;
      }
  
}
