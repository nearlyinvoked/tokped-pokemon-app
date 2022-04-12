import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

//type
import * as CSS from 'csstype'

type DataProps = {
  name: string
  url: string
}

const Index = () => {
  const [pokemonList, setPokemonList] = useState<DataProps[]>([])
  const [pokemonURL, setPokemonURL] = useState<string>(
    'https://pokeapi.co/api/v2/pokemon',
  )

  const fetchPokemon = async (url: string) => {
    try {
      const res = await axios.get(url)
      setPokemonURL(res.data.next)
      setPokemonList(res.data.results)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchPokemon(pokemonURL)
  }, [])

  return (
    <div className="container">
      <div className="row mt-4">
        {pokemonList.map((item) => (
          <div key={item.name} className="col-md-6 col-sm-12">
            <div style={boxStyle}>
              <h5 className="pokemon-name">{item.name}</h5>
              <Link to="/detail" className="btn btn-primary">
                Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const boxStyle: CSS.Properties = {
  display: 'flex',
  margin: '0.5rem 0 0.5rem 0',
  padding: '0.5rem 0.5rem 0.5rem 0.5rem',
  border: '1px solid black',
}

export default Index
