import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello World'
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // this.setState({
        //     message: 'Hello JS'
        // })
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.handleClick.bind(this)}>Click</button>
                {/* <button onClick={() => this.handleClick()}>Click</button> */}
                {/* <button onClick={this.handleClick}>Click</button> */}
            </div>
        )
    }
}

export default EventBind
