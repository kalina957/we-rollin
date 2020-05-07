  
  
  // Firebase configuration setup 
  import React from "react";
  import firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  
  

  var firebaseConfig = {
    apiKey: "AIzaSyDN-hrw3L0yKt92s38Px47m2aCFOeKrN3M",
    authDomain: "werollin-72db6.firebaseapp.com",
    databaseURL: "https://werollin-72db6.firebaseio.com",
    projectId: "werollin-72db6",
    storageBucket: "werollin-72db6.appspot.com",
    messagingSenderId: "257092130559",
    appId: "1:257092130559:web:8d0299d592f4c1a22d9eca",
    measurementId: "G-WM846EP7NB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const firestore = firebase.firestore();

  const storageRef = storage.ref();


  // let images = new Array();
  // storageRef.child('images-133/').listAll().then(function(result){
  //  result.items.forEach(function(imageRef){
  //      imageRef.getDownloadURL().then(url=>{
  //        console.log(url);
       

      //    images.push(url);
      //  var table = document.getElementById("List");
      //  var row = table.insertRow(0);
      //  var cell1 = row.insertCell(0);
      //  cell1.innerHTML = '<img src="'+url+'"> ';
      


  
  export {
    storage, firestore, firebase as default
  }