import { Card, Button, Container, Carousel } from 'react-bootstrap'
import { GymContext } from '../GymProvider'
import { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function ClaseCard({ clase, onApply }) {
    const imageUrl = `/images/${clase.imagen}`
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} alt={clase.nombre} />
            <Card.Body>
                <Card.Title>{clase.nombre}</Card.Title>
                <Card.Text>
                    {clase.tutor} - {clase.hora}
                </Card.Text>
                <Button variant="primary" onClick={() => onApply(clase)}>Apuntarse</Button>
            </Card.Body>
        </Card>
    )
}

export default function Clases() {
    const { clases } = useContext(GymContext)

    const handleApply = (clase) => {
        console.log(`Apuntando a la clase: ${clase.id} - ${clase.nombre}`)
    }

    return (
        <Container>
            <h2>Clases</h2>
            <Carousel>
                {clases.map((clase) => (
                    <Carousel.Item key={clase.id}>
                        <div className="d-flex justify-content-center">
                            <ClaseCard clase={clase} onApply={handleApply} />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    )
}