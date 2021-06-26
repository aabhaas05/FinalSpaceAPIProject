import React from 'react'

const PersonList = () => {
    const names = ['Nabendu', 'Shikha', 'Hriday'];

    return names.map(name => <h1>{name}</h1>)
}

export default PersonList
