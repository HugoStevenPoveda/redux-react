import { createStore } from 'redux'
import dataJugadores from './json/dataJugadores'

const initialState={ 
    jugadores:dataJugadores
        
        
        
       ,
    titulares:[],
    suplentes:[]
}

const reducerEntrenador=(state =initialState,action)=>{


    switch (action.type) {
        case "AGREGAR_TITULAR":
            return{
                ...state,
                titulares:state.titulares.concat(action.jugador),
                jugadores:state.jugadores.filter(jugador =>jugador.id !== action.jugador.id)
            }
            
            break;
        case "AGREGAR_SUPLENTE":
            return{
                ...state,
                suplentes:state.suplentes.concat(action.jugador),
                jugadores:state.jugadores.filter(jugador =>jugador.id !== action.jugador.id)
            }
            break;
        case "RETIRAR_TITULAR":
            return{
                ...state,
                jugadores:state.jugadores.concat(action.jugador),
                titulares:state.titulares.filter(jugador =>jugador.id !== action.jugador.id)
            }
            break;
        case "RETIRAR_SUPLENTE":
            return{
                ...state,
                jugadores:state.jugadores.concat(action.jugador),
                suplentes:state.suplentes.filter(jugador =>jugador.id !== action.jugador.id)

            }
        
    }






    
    return(
          state

    )

}




export default createStore(reducerEntrenador);