import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comment: ''
        }
    }

    handleUserChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={this.state.username} onChange={this.handleUserChange} />
                </div>
                <div>
                    <label htmlFor="comment">Comments</label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                {/* TODO -- Drop-down, radio, checkbox */}
            </form>
        )
    }
}

export default DemoForm
