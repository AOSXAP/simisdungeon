import './App.css';
import React, { useEffect, useRef, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    // your own data here
  });
}

const auth = firebase.auth();
const firestore = firebase.firestore();

let generateID = () => {
  var id = Math.floor(Math.random() * 10000000);
  return id;
}



function App() {
  return (
    <div className="App">
      <header>
        <a href="https://simisdungeon.herokuapp.com/">
          <h1>Simi's Dungeon</h1>
        </a>
      </header>

      <section><ChatRoom /></section>
    </div>
  );
}
  let userID = generateID();

function ChatRoom() {

  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();


    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      name:'name',
      userID
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  

  return (
    <>
      <main style={{backgroundColor:'black'}}>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          Send
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid } = props.message;
  console.log(props.message.userID);
  const messageClass = props.message.userID === userID ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
      </div>
    </>
  );
}


export default App;
