
import React from 'react'
import './styles/App.css';
import {Provider} from 'react-redux'
import Jugadores from './components/Jugadores'
import EquipoSeleccionado from './components/EquipoSeleccionado'
import './styles/style.scss'
import store from './store';

const App =()=>(
  <Provider store={store} >
      <main>
          <h1> Manager</h1>
          <Jugadores />
          <EquipoSeleccionado />
      </main>
  </Provider>




  )


  





export default App;
