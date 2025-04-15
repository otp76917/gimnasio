import { Card, Button, Container, Carousel, Row, Col } from 'react-bootstrap'
import { GymContext } from '../GymProvider'
import { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function MaquinaCard({ maquina, onRent }) {
    const imageUrl = `/images/${maquina.imagen}`
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} alt={maquina.nombre} />
            <Card.Body>
                <Card.Title>{maquina.nombre}</Card.Title>
                <Card.Text>
                    {maquina.descripcion}
                </Card.Text>
                <Button variant="primary" onClick={() => onRent(maquina)}>Alquilar</Button>
            </Card.Body>
        </Card>
    )
}

export default function Maquinas() {

    const { maquinas } = useContext(GymContext)

    const handleRent = (maquina) => {
        alert(`Alquilando máquina: ${maquina.id} - ${maquina.nombre}`)
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={8}> 
                    <h2 className="text-center mb-4">Máquinas</h2> 
                    <Carousel>
                        {maquinas.map((maquina) => (
                            <Carousel.Item key={maquina.id}>
                                <div className="d-flex justify-content-center">
                                    <MaquinaCard maquina={maquina} onRent={handleRent} />
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )

}