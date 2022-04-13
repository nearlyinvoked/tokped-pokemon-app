import './App.css'
import { Routes, Route } from 'react-router-dom'

// Component
import Layout from './components/Layout'
import Home from './components/views/home/Home'
import MyPokemon from './components/views/mypokemon/MyPokemon'
import Detail from './components/views/detail/Detail'
import { PokemonProvider } from './components/context/PokemonContext'

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="mypokemon" element={<MyPokemon />} />
            <Route path="detail/:pokemonname" element={<Detail />} />
          </Routes>
        </Layout>
      </div>
    </PokemonProvider>
  )
}

export default App
