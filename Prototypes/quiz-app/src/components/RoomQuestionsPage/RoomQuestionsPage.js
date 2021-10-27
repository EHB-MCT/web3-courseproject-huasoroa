import { collection, onSnapshot } from '@firebase/firestore';
import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';

export default function RoomQuestionsPage({ roomId }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const questionsRef = collection(firebase, 'rooms', roomId, 'questions');

  useEffect(() => {
    setLoading(true);
    const items = [];
    const unsub = onSnapshot(questionsRef, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      const uniqueQuestions = items.filter((val, id, array) => id === array.findIndex((o) => o.id === val.id));
      setQuestions(uniqueQuestions);
    });
    setLoading(false);
    return () => unsub();
  }, []);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const displayIframe = (url, type) => {
    if (type === 'text') {

    } else {
      return (
        <div>
          <iframe width="640" height="360" src={url} allowFullScreen frameBorder="0" title="Title" />
        </div>
      );
    }
  };

  return (
    <div>
      {loading ? 'Please wait, page is loading' : (
        <div>
          <h1>
            Your tag is : #
            {props.id}
          </h1>
          {
                questions.map((question) => {
                  const {
                    id, title, type, url,
                  } = question;
                  return (
                    <div key={id}>
                      <h1>{title}</h1>
                      <h2>{type}</h2>
                      {displayIframe(url, type)}
                      <input type="text" placeholder="Type your answer here" />
                    </div>
                  );
                })
            }
        </div>
      )}
    </div>
  );
}
