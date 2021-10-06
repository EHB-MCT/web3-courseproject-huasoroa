import React, { Component } from 'react'

export default class DocentPage extends Component {

    // Docent should be able to create room. ROOM CODE IS A 4 CHAR TAG
    // After creating a room... Students attending the room should be visible 
    // Docent should then be able to create questions adding video or audio.

    state = {
        name:'',
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value,
        })
        console.log(name,value)
    }

    handleForm = event => { // Docent creates a room and becomes moderator of the room. Enabling him to create questions.



    }

    render() {
        return (
            <div>
                <h1>
                    HEY YOU ARE A DOCENT
                </h1>
                <form>
                <h2>Choose a name</h2>
                    <input onChange={this.handleChange} type='text' name="name" value={this.state.name} autoComplete='off' />
                    <button type="submit" id='submit' onClick={this.handleForm}>Create Room</button>
                </form>
            </div>
        )
    }
}
