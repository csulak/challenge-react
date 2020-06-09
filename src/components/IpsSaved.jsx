import React, {useEffect} from 'react';

const IpsSaved = () => {

    //EN ESTE EJEMPLO MUESTRO TODAS LAS IPS SIN TENER QUE PEGARLE A NINGUN ENDPOINT ME TRAE TODA INFO AL IR A ESTA VENTANA

    const[ipsSaved, setIpsSaved] = React.useState([])

    // useEffect se ejecutara una vez que levante este componente (IpsSaved.jsx)
    useEffect(() => {
        //console.log("useEffect")
        obtenerDatos()
    }, [])


    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:8080/challenge/api/ips/saved')
        const todasLasIpsIngresadas = await data.json()
        console.log("que tenemos aca", todasLasIpsIngresadas)
        setIpsSaved(todasLasIpsIngresadas)
    }

    return (

        <div>
            <h3>Aca visualizamos todas las ips que se fueron persistiendo</h3>

            <ul>
            <li> ip - distancia to bs as</li>
                {
                    ipsSaved.map(item => (
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