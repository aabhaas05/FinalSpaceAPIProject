import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            species: '',
            status: ''
        }
    }
    
    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const url = 'https://finalspaceapi.com/api/v0/character/';
        const settings = {
            mode: 'no-cors',
            method: 'CHARACTER',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        const res = await fetch(url, settings);
        const data = await res.json();
        console.log(data);
    }

    render() {
        const { id, species, status } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="id" value={id} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" name="species" value={species} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" name="status" value={status} onChange={this.handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm
