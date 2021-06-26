import React from 'react'
import './stylesheets.css'

const parastyled = {
    fontSize: '20px',
    backgroundColor: 'yellow'
}

const StyleSheets = () => {
    return (
        <>
            <h1 className="primary">CSS StyleSheets</h1>
            <p className="secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis eos iste vel eveniet eligendi! Dolorum quisquam enim aspernatur tempora porro.</p>
            <p style={parastyled}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio voluptas similique eius cumque eos voluptates esse mollitia molestias tempora dolorum vel rerum placeat error accusamus hic quaerat totam, vitae ipsa.</p>
            <p style={{ color: 'red', fontWeight: 'bolder' }}>Doloribus sapiente placeat facilis. Officiis facilis praesentium laudantium asperiores maiores expedita recusandae cumque optio ea incidunt id, dolor nisi!</p>
        </>
    )
}

export default StyleSheets
