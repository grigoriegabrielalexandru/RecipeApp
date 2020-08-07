var firebaseConfig = {
  apiKey: "AIzaSyALlJgUKCHQbr4vUypbIxa9snjAlbujf1M",
  authDomain: "recipebox-96888.firebaseapp.com",
  databaseURL: "https://recipebox-96888.firebaseio.com",
  projectId: "recipebox-96888",
  storageBucket: "recipebox-96888.appspot.com",
  messagingSenderId: "266510048653",
  appId: "1:266510048653:web:4438050b6b6e79977af1c4",
  measurementId: "G-WR8W756VWT"
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
function login(){
  var firebaseConfig = {
    apiKey: "AIzaSyALlJgUKCHQbr4vUypbIxa9snjAlbujf1M",
    authDomain: "recipebox-96888.firebaseapp.com",
    databaseURL: "https://recipebox-96888.firebaseio.com",
    projectId: "recipebox-96888",
    storageBucket: "recipebox-96888.appspot.com",
    messagingSenderId: "266510048653",
    appId: "1:266510048653:web:4438050b6b6e79977af1c4",
    measurementId: "G-WR8W756VWT"
  };
  var userEmail = document.getElementById("emailFiled").value;
  var userPass = document.getElementById("passwordFiled").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
}
function signin(){
  var userEmail = document.getElementById("emailFiled").value;
  var userPass = document.getElementById("passwordFiled").value;
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}
