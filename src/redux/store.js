import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import statisticsReducer from './statisticsDucks'
import countryInfoReducer from './countryInfoDucks'

const rootReducer = combineReducers({

    // el statisticsReducer y countryInfoReducer son las funciones que estamos exportando de countryInfoDucks.js y statisticsDucks.js
    // y se lo asignamos a statistics y countryInfo y queda guardada toda la info
    
    // el nombre statistics y countryInfo es el nombre que va a recibir de la tienda
    // cuando veo mi pagina F12 -> pestaña redux dentro de state -> state
    // ahi voy a ver que se llama pokemones y dentro todo lo que le asignamos con statisticsReducer y countryInfoReducer

    // toda esta informacion de statistics y countryInfo la obtengo de todos los ...Ducks.js
    statistics: statisticsReducer,
    countryInfo: countryInfoReducer

})
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store;
}