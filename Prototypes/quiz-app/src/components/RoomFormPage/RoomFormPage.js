import { doc, updateDoc, addDoc, collection } from '@firebase/firestore'
import React, { useState , useEffect } from 'react'
import db from '../../firebase'


export default function RoomFormPage(props) {

    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [time, setTime] = useState(0)
    
    const colRef = collection(db,'rooms',props.id,'questions')

    useEffect(() => {
        console.log('Component built')
        return () => {
            updateDoc(doc(db,'rooms',props.id), {
                isActive: false
            })
        }
    }, [])
    
    const handleForm = event => {
        event.preventDefault();
        addDoc(colRef, {
            title,
            type,
            time
        })

        setTitle('')
        setType('')
        setTime(0)
    
    }

    return (
        <div>

<h1>Your tag is : #{props.id}</h1>

            <form onSubmit={handleForm}>
                <label htmlFor='title'>Question: </label>
                <input type='text' onChange={e => setTitle(e.target.value)} name="title" value={title} autoComplete='off'  />
                <label htmlFor='type'>Type: </label>
                <input type='text' name='type' onChange={e => setType(e.target.value)} value={type} autoComplete='off' />
                <label htmlFor='time'>Time (in seconds)</label>
                <input type='number' name='time' onChange={e => setTime(e.target.value)} value={time} autoComplete='off' />
                <button type="submit" onClick={handleForm}>Send Question</button>
            </form>
        </div>
    )
}
