import axios from 'axios';

// constantes
 const dataInicial = {
     objetoo : {},
 }


 const POST_INFO_COUNTRY_EXITO = 'POST_INFO_COUNTRY_EXITO'

 // reducer
 export default function countryInfoReducer(state = dataInicial, action){
    switch(action.type){

        case POST_INFO_COUNTRY_EXITO:
               return {
                  ...state,
                  objetoo: action.payload
            }

        default:
            return state
    }

 }

 // acciones 
  export const postearCountryInfoByIpAccion = (title) => async (dispatch, getState) => {
    // getState lo que retorna es el "pokemones" de la tienda y todo lo que tenga asignado a ese parametro

    try{
        const res = await axios.post(`http://localhost:8080/challenge/api/country/info?ip=${title}`)
       
        console.log("country Info ducks" , res.data)
       // todo el dispatch va a hacer que se ejecute el pokeReducer
       // por esto tenemos el type que es el case especifico del switch a ejecutar
       // y el payload seria todo el state (array y en el ejemplo de abajo array y offset)
        dispatch({
            type: POST_INFO_COUNTRY_EXITO,
            payload: res.data
        })
    }catch (error){
        console.log(error)
    }
 }
