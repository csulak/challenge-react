import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {obtenerStatisticsAccion, } from '../redux/statisticsDucks'

const Statistics = () => {

    // el useDispatch() que importamos nos sirve para poder consumir nuestras acciones creadas en pokeDucks
    const dispatch = useDispatch()


    // el useSelector() que importamos para poder leer toda la tienda
    // dentro de la tienda (por ahora) solo tengo pokemones y pokemones entre otras cosas
    // tiene un array con todos mis pokemones y eso es lo que termino asignando a una varialbe
    const statistics = useSelector(store => store.statistics.objetoo)

    console.log("statistics Compoent", statistics)

    return (
        <div>
            Estadisticas Generales

            <p></p>
            
            <button onClick={() => dispatch(obtenerStatisticsAccion() )}>Get Statistics</button>


            <div>
                distance To Bs AS - quantity of IPs saved
            </div>

            <div>
                {statistics.average} - {statistics.quantity}
            </div>


        </div>
    )
}


export default Statistics