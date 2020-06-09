import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import statisticsReducer from './statisticsDucks'
import countryInfoReducer from './countryInfoDucks'

const rootReducer = combineReducers({

    // el pokemones va a ser el array de pokemones. [actualizacion: ahora le agregue en pokeDucks el offset asique ahora va a retorar
    //                                               el array y el offset (la paginacion)]
    // el pokeReducer es la funcion que estamos exportando de pokeDucks
    // y se lo asignamos a pokemones y queda guardada toda la info
    
    // el nombre pokemones es el nombre que va a recibir de la tienda
    // cuando veo mi pagina F12 -> pestaña redux dentro de state -> state
    // ahi voy a ver que se llama pokemones y dentro todo lo que le asignamos con pokeReducer

    // toda esta informacion de statistics y countryInfo la obtengo de todos los ...Ducks.js
    statistics: statisticsReducer,
    countryInfo: countryInfoReducer

})
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store;
}