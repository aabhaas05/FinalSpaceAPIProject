import React, { Component } from 'react'
import Parent from './Parent'

class GrandParent extends Component {
    render() {
        return (
            <div>
                <Parent />
            </div>
        )
    }
}

export default GrandParent
