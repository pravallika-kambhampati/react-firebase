import * as firebase from "firebase";
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA914VHyRut3OdcAFcUe5fjkvnywDlH038",
    authDomain: "react-crud-805ab.firebaseapp.com",
    databaseURL: "https://react-crud-805ab.firebaseio.com",
    projectId: "react-crud-805ab",
    storageBucket: "react-crud-805ab.appspot.com",
    messagingSenderId: "314695417093",
    appId: "1:314695417093:web:be512f7d82b0ef06d24b6c"
  };
  // Initialize Firebase
var fireDB =  firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();