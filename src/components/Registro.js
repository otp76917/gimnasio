import React from 'react'

export default function Registro() {
    return (
        <div className="Registro">
        <h1>Registro</h1>
        <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
            
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required />
            
            <button type="submit">Registrar</button>
        </form>
        </div>
    )
    }