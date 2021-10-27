import {
  doc, updateDoc, addDoc, collection,
} from '@firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import React, { useState, useEffect } from 'react';
import db, { storage } from '../../firebase';

export default function RoomFormPage(props) {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('text');
  const [time, setTime] = useState(0);
  const [url, setURL] = useState('');
  const [video, setVideo] = useState();
  const [audio, setAudio] = useState();

  const colRef = collection(db, 'rooms', props.id, 'questions');

  useEffect(() => {
    console.log('Component built');
    return () => {
      updateDoc(doc(db, 'rooms', props.id), {
        isActive: false,
      });
    };
  });

  const uploadFile = (file) => {
    const uploadTask = uploadBytesResumable(ref(storage, file.name), file);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        const downloaduRL = getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          return downloadURL;
        });

        return downloaduRL;
      });
  };
  const handleForm = (event) => {
    event.preventDefault();

    let myURL = '';
    if (url.includes('youtube')) {
      myURL = url.replace('/watch?v=', '/embed/');
      console.log(myURL);
    } else {
      myURL = url;
    }
    if ((type === 'video' || type === 'audio') && url === '') {
      if (video) {
        const downloadURL = uploadFile(video);
        console.log(downloadURL);
      } else {
        uploadFile(audio);
      }
    }
    console.log(`This is the new url ${myURL}`);

    addDoc(colRef, {
      title,
      type,
      time,
      url: myURL,
    });

    setTitle('');
    setType('text');
    setTime(0);
    setURL('');
    setVideo();
    setAudio();
  };

  const renderForm = (type) => {
    switch (type) {
      case 'text':
        return;
      case 'video':
        return (
          <div>
            <label htmlFor="url">URL</label>
            <input type="url" name="url" onChange={(e) => setURL(e.target.value)} value={url} autoComplete="off" disabled={video !== undefined} />
            <label htmlFor="video">Video</label>
            <input type="file" name="video" onChange={(e) => setVideo(e.target.files[0])} disabled={url !== ''} />
          </div>
        );

      case 'audio':
        return (
          <div>
            <label htmlFor="url">URL</label>
            <input type="url" name="url" onChange={(e) => setURL(e.target.value)} value={url} autoComplete="off" disabled={audio !== undefined} />
            <label htmlFor="audio">Audio</label>
            <input type="file" name="audio" onChange={(e) => setAudio(e.target.files[0])} disabled={url !== ''} />
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div>

      <h1>
        Your room tag is : #
        {props.id}
      </h1>

      <label htmlFor="type">Type: </label>
      <select name="type" onChange={(e) => setType(e.target.value)}>
        <option value="text">Text</option>
        <option value="video">Video</option>
        <option value="audio">Audio</option>
      </select>
      <form onSubmit={handleForm}>
        <label htmlFor="title">Question: </label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} name="title" value={title} autoComplete="off" />

        {renderForm(type)}
        <label htmlFor="time">Time (in seconds)</label>
        <input type="number" name="time" onChange={(e) => setTime(e.target.value)} value={time} autoComplete="off" />
        <button type="submit" onClick={handleForm}>Send Question</button>
      </form>
    </div>
  );
}
