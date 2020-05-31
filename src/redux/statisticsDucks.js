import axios from 'axios';

// constantes
 const dataInicial = {
     objetoo : {},
 }

 const GET_STATISTICS_EXITO = 'GET_STATISTICS_EXITO'

 // reducer
 export default function statisticsReducer(state = dataInicial, action){
    switch(action.type){
        case GET_STATISTICS_EXITO:
            return {
                ...state,
                objetoo: action.payload
            }

        default:
            return state
    }

 }

 // acciones 

 export const obtenerStatisticsAccion = () => async (dispatch, getState) => {
    // getState lo que retorna es el "pokemones" de la tienda y todo lo que tenga asignado a ese parametro

    try{
        const res = await axios.get(`http://localhost:8080/challenge/api/statistics`)
       
        console.log("statistics ducks" , res.data)
       // todo el dispatch va a hacer que se ejecute el pokeReducer
       // por esto tenemos el type que es el case especifico del switch a ejecutar
       // y el payload seria todo el state (array y en el ejemplo de abajo array y offset)
        dispatch({
            type: GET_STATISTICS_EXITO,
            payload: res.data
        })
    }catch (error){
        console.log(error)
    }
 }

