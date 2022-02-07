var firebaseConfig = {
    apiKey: "AIzaSyBS1SBL2OHJIzUdMGFvpPrIlJ0zg29WAT4",
    authDomain: "to-do-list-a2f02.firebaseapp.com",
    projectId: "to-do-list-a2f02",
    storageBucket: "to-do-list-a2f02.appspot.com",
    messagingSenderId: "19848818619",
    appId: "1:19848818619:web:4c9a5a44d287c9c86f9e9e",
    measurementId: "G-MNT58WT2CQ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();