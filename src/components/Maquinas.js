import { Card, Button, Container, Carousel } from 'react-bootstrap'
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
        console.log(`Alquilando máquina: ${maquina.id} - ${maquina.nombre}`)
    }

    return (
        <Container>
            <h2>Máquinas</h2>
            <Carousel>
                {maquinas.map((maquina) => (
                    <Carousel.Item key={maquina.id}>
                        <div className="d-flex justify-content-center">
                            <MaquinaCard maquina={maquina} onRent={handleRent} />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    )

}