import React from 'react'
import {connect} from "react-redux"
import image from '../image'

const Titulares = ({titulares,retirarTitular})=>(
 <section>
     <h2> Titulares</h2>
     <div className="lucha" >
     {
        titulares.map(jugador=>(
              <article className="titular" key={jugador.id}>
                <div>
                    <img src={jugador.foto} alt={jugador.nombre} />
                    <button onClick={()=>retirarTitular(jugador)} >X</button>

                </div>
                <p>{jugador.nombre}</p>

              </article>
        ))
     }

     <img     src={image.cancha}  alt="cancha"  />

     </div>

 </section>


)

const mapStateToProps = state =>({
    titulares:state.titulares
    
    })

const mapDispatchToProps = dispatch =>({
    retirarTitular(jugador){
        dispatch({
            type:"RETIRAR_TITULAR",
            jugador
        })
    }



    


})



export default connect(mapStateToProps,mapDispatchToProps)(Titulares);












