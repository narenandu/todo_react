import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <Container>
          <h2>ToDos</h2>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </Container>
      </div>
    </header>
  );
}

export default Header;
