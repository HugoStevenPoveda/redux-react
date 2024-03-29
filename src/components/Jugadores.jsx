import React , { useEffect, createRef }  from 'react'

import {connect} from "react-redux"

 const Jugadores=({jugadores,agregarTitular,agregarSuplente})=>{
    const gridJugadores = createRef()
    useEffect(() => {
        setScrollContainer()
        document.addEventListener('click', setScrollContainer)
      }, [])

      const setScrollContainer = (desktop = true) => {
        let container = gridJugadores.current
        if (container) {
          const generatedGrid = () => {
            let items = container.getElementsByClassName('jugador')
            let itemsLength = items.length
            let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1
    
            const getWidth = () => {
              let n = bp + (itemsLength > bp ? 0.3 : 0)
              return (itemsLength / n) * 100
            }
            return `
                    display: grid;
                    grid-template-columns: repeat(${itemsLength}, 225px);
                    grid-gap: 1rem;
                    width : ${getWidth()}%;
                  `
          }
          let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
          container.setAttribute('style', styles)
        }
      }

   return(

   <section>
         <h2>Jugadores</h2>
         <div className="contenedor-jugadores">
                {jugadores.map(jugador =>(
                    <article className="jugador"  key={jugador.id}>
                        <img  src={jugador.foto} alt={jugador.nombre}/>
                        <h3>{jugador.nombre}</h3>
                        <button onClick={()=>agregarTitular(jugador)} > Titular </button>
                        <button  onClick ={()=>agregarSuplente(jugador)}   >Suplente</button>
                    </article>
                ))}
         </div>
     </section>
   )

 }

    



    
 







         
        


const mapStateToProps = state =>({
    jugadores:state.jugadores
    
    })

const mapDispatchToProps = dispatch =>({
    agregarTitular(jugador){
        dispatch({
            type:"AGREGAR_TITULAR",
            jugador
        })
    },
    agregarSuplente(jugador){
        dispatch({
            type:"AGREGAR_SUPLENTE",
            jugador
        })
    }

})






















 export default connect(mapStateToProps,mapDispatchToProps)(Jugadores)