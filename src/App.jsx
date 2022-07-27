import { HashRouter, Routes, Route } from 'react-router-dom'
import Pokedex from './components/Pokedex'
import UserInput from './components/UserInput'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/protectedRoutes'
import './styles.css'

function App() {


  return (
    <div className="App">
      <HashRouter>
        <Routes>

          <Route path='/' element={<UserInput />} />

          <Route element={<ProtectedRoutes />} >
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokemondetail/:id' element={<PokemonDetail />} />
          </Route>

        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
