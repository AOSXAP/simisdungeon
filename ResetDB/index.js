const firebase = require("firebase/app");

require("firebase/firestore");

const express = require('express');

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBZpblHaO-aPZQowIpJxMTOO8pvjgah3R8",
        authDomain: "reactnative-f7bd3.firebaseapp.com",
        databaseURL: "https://reactnative-f7bd3.firebaseio.com",
        projectId: "reactnative-f7bd3",
        storageBucket: "reactnative-f7bd3.appspot.com",
        messagingSenderId: "720581141542",
        appId: "1:720581141542:web:23c918b7c08704446a72e7",
    });
}

const firestore = firebase.firestore();

const app = express();

const port = 7300;

const messagesRef = firestore.collection("messages");

const query = messagesRef.orderBy("createdAt").limit(25);

app.get('/', async(req, res) => {
    res.send('heloo');
    const citiesRef = firestore.collection('messages');
    const snapshot = await citiesRef.get();

    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });

});

app.listen(port, () => console.log(`App runinng`));
