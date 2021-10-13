import { collection, onSnapshot } from '@firebase/firestore'
import React,{useState, useEffect}from 'react'
import firebase from '../../firebase'


export default function RoomQuestionsPage(props) {

    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(false)

    const questionsRef = collection(firebase,'rooms', props.id ,'questions')
    
    useEffect(() =>  {
        setLoading(true);
        let items = []
        const unsub = onSnapshot( questionsRef , querySnapshot => {
            querySnapshot.forEach(doc => {
                items.push({id:doc.id,...doc.data()})
            })
            const uniqueQuestions = items.filter((val, id, array) => id === array.findIndex(o => o.id === val.id)
            ) 
            setQuestions(uniqueQuestions)
        })
        setLoading(false)
        return () => unsub();
    }, [])

    useEffect(() => {
        console.log(questions)
        return () => {
            
        }   
    }, [questions])

    const displayIframe = (url, type) => {
        if (type === 'text') {
            return
        }else{
            return (
                <div>
                    <iframe width="640" height="360" src={url} allowFullScreen frameBorder="0" title="Title"></iframe>
                </div>
                        ) 
        }
    }

    return (
        <div>
            {loading?"Please wait, page is loading":(
                <div>
                <h1>Your tag is : #{props.id}</h1>
            {
                questions.map(question => (
                    <div key={question.id}>
                        <h1>{question.title}</h1>
                        <h2>{question.type}</h2>
                        {displayIframe(question.url,question.type)}
                        <input type="text" placeholder="Type your answer here"></input>
                    </div>
                ))
            }
            </div>
            )}
            </div>
    )
}
