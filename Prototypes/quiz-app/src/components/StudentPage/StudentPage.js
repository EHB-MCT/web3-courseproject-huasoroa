import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { makeStudent } from '../../store/actions';

export default function StudentPage() {


    //  This page should listen to any changes made to a page.. Easily done with Firebase or MongoDB I think.

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const history = useHistory()
    const dispatch= useDispatch()

    const handleForm = e => {
        e.preventDefault()
        dispatch(makeStudent())

        if (room === "") {
            alert('You need to input something bro')
        }else{
            history.push(`/Room/${room}`)
        }
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
