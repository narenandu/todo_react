import React from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Jumbotron fluid>
                <Container>
                    <h2>ToDos</h2><Link to="/">Home</Link> | <Link to="/about">About</Link>
                </Container>
            </Jumbotron>
        </header>
    )
}

export default Header;
