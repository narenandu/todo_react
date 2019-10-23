import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>ToDo App</h1>
            <h5> (made in React) </h5>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}
export default Header;
