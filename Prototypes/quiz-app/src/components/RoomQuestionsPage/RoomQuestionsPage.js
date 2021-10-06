import { collection, onSnapshot } from '@firebase/firestore'
import React,{useState, useEffect}from 'react'
import firebase from '../../firebase'


export default function RoomQuestionsPage(props) {

    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(false)

    const questionsRef = collection(firebase,'rooms', props.id ,'questions')
    
    useEffect(() =>  getQuestions() , [])

    const getQuestions = async () => {
        setLoading(true);
        let items = []
        onSnapshot( questionsRef , querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.data())
                items.push(doc.data())
            })
            setQuestions(items)
        })
        setLoading(false)
    }


    return (
        <div>
            {loading?"Please wait, page is loading":""}
            <h1>Your tag is : #{props.id}</h1>
            {
                questions.map(question => (
                    <div key={question.id}>
                        <h1>{question.data.title}</h1>
                        <h2>{question.data.type}</h2>
                        <input type="text" placeholder="Type your answer here"></input>
                    </div>
                ))
            }
        </div>
    )
}
