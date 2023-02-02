import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
    return (

        <Container className="mb-5">
            <Navbar  expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="/">FakeShop</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>

    )
}

export default Header