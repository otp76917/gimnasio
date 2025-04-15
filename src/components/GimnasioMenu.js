import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const GimnasioMenu = () => {
    return (
        <Navbar className="custom-navbar" expand="lg">
            <Container>
                <Navbar.Brand href="/">Gimnasio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/maquinas">Máquinas</Nav.Link>
                        <Nav.Link href="/clases">Clases</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default GimnasioMenu