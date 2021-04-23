import  React from 'react'
import {connect} from 'react-redux'

const Suplente = ({suplentes})=>(
   
  <section>
     <h2>Suplentes</h2>
     <div className="suplentes" >

        {suplentes.map( jugador=>(
            <article className="suplente" key={jugador.id}>
              <div>
                <img src={jugador.foto} alt={jugador.name} />
                <button>X</button>

              </div>
              <p> {jugador.name} </p>
            </article>
        ))}

     </div>

  </section>
)


               



const mapStateToProps = state =>({
    suplentes:state.suplentes
    })

const mapDispatchToProps = dispatch =>({})







export default connect(mapStateToProps,mapDispatchToProps)(Suplente);