/* eslint-disable prettier/prettier */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyD8Km5FjA5UCybqwMqscoQnhoKkDvQteW8",
    authDomain: "tarefas-f2447.firebaseapp.com",
    projectId: "tarefas-f2447",
    storageBucket: "tarefas-f2447.appspot.com",
    messagingSenderId: "952033676847",
    appId: "1:952033676847:web:faccd24773cf2cd44480da"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;