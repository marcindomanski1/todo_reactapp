import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCSzwQhGFsO1MNsNQ8ZlIHlrsuW2L67I8Q",
    authDomain: "todoapp-2e2eb.firebaseapp.com",
    databaseURL: "https://todoapp-2e2eb.firebaseio.com",
    projectId: "todoapp-2e2eb",
    storageBucket: "todoapp-2e2eb.appspot.com",
    messagingSenderId: "463760640429"
};

const firebaseApp = firebase.initializeApp(config);

export const database = firebaseApp.database();