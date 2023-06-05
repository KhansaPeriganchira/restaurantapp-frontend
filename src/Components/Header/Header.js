import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div> <Navbar bg="dark" variant="dark">
    <Container>
      {/* main pagileek varaan change href="#" to below */}
      <Navbar.Brand href="/">
      <i class="fa-solid fa-utensils fa-bounce"></i>
      {' '}
        Hilas cafe
      </Navbar.Brand>
    </Container>
  </Navbar>
</div>
  )
}

export default Header