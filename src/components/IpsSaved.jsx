import React, {useEffect} from 'react';

const IpsSaved = () => {

    

    const[equipo, setEquipo] = React.useState([])

    // useEffect se ejecutara una vez que levante este componente (Nosotros.jsx)
    useEffect(() => {
        //console.log("useEffect")
        obtenerDatos()
    }, [])


    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:8080/challenge/api/ips/saved')
        const users = await data.json()
        console.log("que tenemos aca", users)
        setEquipo(users)
    }

    return (

        <div>
            <h3>Aca visualizamos todas las ips que se fueron persistiendo</h3>

            <ul>
            <li> ip - distancia to bs as</li>
                {
                    equipo.map(item => (
                        <li key={item.statistics_id}> 
                                {item.ip} - {item.distance_to_buenos_aires}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default IpsSaved