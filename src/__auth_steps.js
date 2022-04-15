/* 
1.Create a new firebase Project in console.google.com
2.npm install firebase
3. copy-paste firebase.init.js, add const auth and export auth;
4. firebase settings > Authentication> enable Email-password auth
5. crearte signin,Login compo, setup route
6. attach form field handler and submit handler
7. npm install --save react-firebase-hooks
8. useCreateUserWithEmailAndPassword(auth) from react-firebase-hooks
9. if user is created redirect to the expected page
10.  useSignInWithEmailAndPassword(auth);
11. Create RequireAuth compo. ==> check user excist also check user location
12. In route wrap protected component by using RequireAuth Compo
*/