import React, { useState } from 'react'
import firebase from '../../firebase';

export default function StudentPage() {


    //  This page should listen to any changes made to a page.. Easily done with Firebase or MongoDB I think.

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const handleForm = e => {
        e.preventDefault()

        

    }


        return (
            <div>
                <h1>
                    Welcome 
                </h1>
                <form onSubmit={handleForm}>
                <h2>Choose a name</h2>
                    <input onChange={e => setName(e.target.value)} type='text' name="name" value={name} autoComplete='off' />
                <h2>Enter Room Number</h2>
                    <input onChange={e => setRoom(e.target.value)} type='text' name="room" value={room} autoComplete='off' />
                    <button type="submit" id='submit' onClick={handleForm}>Submit</button>
                </form>
            </div>
        )
    }
