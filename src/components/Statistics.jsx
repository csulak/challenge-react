import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {obtenerStatisticsAccion, } from '../redux/statisticsDucks'

const Statistics = () => {

    // el useDispatch() que importamos nos sirve para poder consumir nuestras acciones creadas en los ducks
    const dispatch = useDispatch()


    // el useSelector() que importamos para poder leer toda la tienda
    // dentro de la tienda(store.js) tenemos statistics y countryInfo. y en statistics entre otras cosas
    // tiene un objeto con toda la info de las estadisticas que le pega al endpoint correspondiente
    const statistics = useSelector(store => store.statistics.objetoo)

    console.log("statistics Compoent", statistics)

    return (
        <div>
            Estadisticas Generales

            <p></p>
            
            <button onClick={() => dispatch(obtenerStatisticsAccion() )}>Get Statistics</button>


            <div>
                average distance To Bs AS - quantity of IPs saved
            </div>

            <div>
                {statistics.average} - {statistics.quantity}
            </div>


        </div>
    )
}


export default Statistics