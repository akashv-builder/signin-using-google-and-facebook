# signin-using-google-and-facebook

Step 1 : npm install --save angular5-social-login

Step 2 : Get Facebook app ID. Log In- https://developers.facebook.com/ and create an app.

Step 3: Get Google+ client id. Enable Google+ Api and auth2 credentials. https://www.youtube.com/watch?time_continue=69&v=fLmADYIs00s


Reference- https://github.com/ERS-HCL/angular5-social-Login

Sign In Logic- Authorize through google or faceboom, if valid get the id, hit the api, check user exists with that id, if not send a message to register else create a jwt token with that id and give a role.

Register Logic- Fill the form details with the information recieved.
