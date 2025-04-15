import React, { createContext, useState, useEffect } from 'react'

export const GymContext = createContext()

export const GymProvider = ({ children }) => {

    const [maquinas, setMaquinas] = useState([])
    const [clases, setClases] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/gym.json')
            const data = await response.json()
            setMaquinas(data.maquinas)
            setClases(data.clases)
        }

        fetchData()
    }, [])

    const value = {
        maquinas,
        clases,
    }

    return (
        <GymContext.Provider value={value}>
            {children}
        </GymContext.Provider>
    )
}