import { createStore } from 'redux'
import dataJugadores from './json/dataJugadores'

const initialState={ 
    jugadores:dataJugadores
        
        
        
       ,
    titulares:[],
    suplentes:[]
}

const reducerEntrenador=(state =initialState,action)=>{

    if(action.type ==="AGREGAR_TITULAR"){
        return{
            ...state,
            titulares:state.titulares.concat(action.jugador),
            jugadores:state.jugadores.filter(jugador =>jugador.id !== action.jugador.id)



        }
    }
    else if (action.type ==="AGREGAR_SUPLENTE") {
        return{
            ...state,
            suplentes:state.suplentes.concat(action.jugador),
            jugadores:state.jugadores.filter(jugador =>jugador.id !== action.jugador.id)



        }
        
    } 



    
    return(
          state

    )

}




export default createStore(reducerEntrenador);