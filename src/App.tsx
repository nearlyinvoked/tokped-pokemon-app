import './App.css'
import { Routes, Route } from 'react-router-dom'

// Component
import Layout from './components/Layout'
import Home from './components/views/home'
import MyPokemon from './components/views/mypokemon'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mypokemon" element={<MyPokemon />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
