import React from 'react';
// Importar componentes necesarios de React Bootstrap
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate que Bootstrap CSS está importado

export default function Registro() {
    return (
        // Usar un Container para centrar y limitar el ancho en pantallas grandes
        <Container className="card mt-5" style={{ backgroundColor: '#888888', border: 'none'}}> 
            <Row className="justify-content-md-center">
                <Col md={6}>
                    
                    <h1 className="text-center mb-4">Registro</h1> 
                    
                    <div className="p-4 border rounded-3 shadow-sm bg-white">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicNombre">
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control className="rounded-pill" type="text" placeholder="Ingresa tu nombre" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicApellido">
                                <Form.Label>Apellido:</Form.Label>
                                <Form.Control className="rounded-pill" type="text" placeholder="Ingresa tu apellido" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control className="rounded-pill" type="email" placeholder="Ingresa tu email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicTelefono">
                                <Form.Label>Teléfono:</Form.Label>
                                <Form.Control className="rounded-pill" type="tel" placeholder="Ingresa tu teléfono" required />
                            </Form.Group>

                            <div className="d-grid">
                              <Button variant="primary" type="submit" className="btn-registro-red rounded-pill">
                                  Registrar
                              </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}