import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MainPage.css'

export default class MainPage extends Component {
    render() {
        return (
            <div className='container'>
                <h1>
                    Choose your role.
                </h1>
                <div className='links'>
                    <Link to="Student" className="link">Student</Link>
                    <Link to="Docent" className="link">Docent</Link>
                </div>
            </div>
        )
    }
}
