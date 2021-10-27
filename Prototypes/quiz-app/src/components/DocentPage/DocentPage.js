import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  collection, doc, getDoc, setDoc,
} from '@firebase/firestore';
import { makeDocent } from '../../store/actions';
import db from '../../firebase';

export default function DocentPage() {
  // Docent should be able to create room. ROOM CODE IS A 4 CHAR TAG
  // After creating a room... Students attending the room should be visible
  // Docent should then be able to create questions adding video or audio.

  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  // program to generate random strings
  // declare all characters
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const createRoom = async () => { // Recursive function that will create a new tag if it already exists otherwise it creates a room
    const roomRef = collection(db, 'rooms');
    const tag = generateString(4);
    const docSnap = await getDoc(doc(roomRef, tag));
    if (docSnap.exists()) {
      await createRoom();
    } else {
      await setDoc(doc(roomRef, tag), {
        tag,
        isActive: true,
      });
    }
    return tag;
  };

  const handleForm = async (e) => { // Docent creates a room and becomes moderator of the room. Enabling him to create questions.
    e.preventDefault();
    dispatch(makeDocent());

    const tag = await createRoom();
    if (tag !== undefined) {
      history.push(`/Room/${tag}`);
    }
  };

  return (
    <div>
      <h1>
        HEY YOU ARE A DOCENT
      </h1>
      <form onSubmit={handleForm}>
        <h2>Choose a name</h2>
        <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} autoComplete="off" />
        <button type="submit" id="submit" onClick={handleForm}>Create Room</button>
      </form>
    </div>
  );
}
