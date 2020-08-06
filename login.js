(function() {
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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const txtEmail = document.getElementById("emailFiled");
const txtPassword = document.getElementById("passwordFiled");
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', e => {
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.singInwithEmailandPassword(email, password);
  promise.catch(e => console.log(e.message));
});

}());
