import React, { useEffect, useState}from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import RoomFormPage from '../RoomFormPage/RoomFormPage'
import RoomQuestionsPage from '../RoomQuestionsPage/RoomQuestionsPage'

export default function RoomPage() {

    const isDocent = useSelector(state => state.isDocent)
    const {id}=useParams()
    
    return (
        <div>
            {isDocent?<RoomFormPage id={id}/>:<RoomQuestionsPage id={id}/>}
        </div>
    )
}
