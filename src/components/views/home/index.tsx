import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PokemonContext from '../../context/PokemonContext'

//type
import * as CSS from 'csstype'

type PokemonProps = {
  name: string
  url: string
}

type DataProps = {
  name: string
  url: string
  owned: number
}

const Index = () => {
  //context
  const { ownedPokemon } = useContext(PokemonContext)

  //state
  const [pokemonList, setPokemonList] = useState<DataProps[]>([])
  const [pokemonURL, setPokemonURL] = useState<string>(
    'https://pokeapi.co/api/v2/pokemon',
  )

  //loading state
  const [loadMore, setLoadMore] = useState<boolean>(false)

  const handleLoadMore = () => {
    setLoadMore(true)
    fetchPokemon(pokemonURL)
    setLoadMore(false)
  }

  const fetchPokemon = async (url: string) => {
    try {
      const res = await axios.get(url)
      const data = res.data.results

      let pokemon: DataProps[] = []

      data.forEach((item: PokemonProps) => {
        let mypokemon = ownedPokemon.find((el) => el.name === item.name)
        pokemon.push({
          name: item.name,
          url: item.url,
          owned: mypokemon ? mypokemon.owned : 0,
        })
      })

      let newState: DataProps[] = pokemonList.concat(pokemon)

      setPokemonURL(res.data.next)
      setPokemonList(newState)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchPokemon(pokemonURL)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container">
      <div className="row mt-4">
        {pokemonList.map((item) => {
          const myPokemon = ownedPokemon.find((data) => data.name === item.name)
          return (
            <div key={item.name} className="col-md-6 col-sm-12">
              <div style={boxStyle}>
                <h5 className="pokemon-name" style={{ marginTop: '0.5rem' }}>
                  <b>{item.name}</b> (owned: {myPokemon ? myPokemon.owned : 0})
                </h5>
                <Link to="/detail" className="btn btn-primary">
                  Detail
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleLoadMore}
        >
          Load More
        </button>
        {loadMore ? <p style={{ marginLeft: '1rem' }}>loading...</p> : ''}
      </div>
    </div>
  )
}

const boxStyle: CSS.Properties = {
  display: 'flex',
  margin: '0.5rem 0 0.5rem 0',
  padding: '0.5rem 0.5rem 0.5rem 0.5rem',
  border: '1px solid black',
  borderRadius: '10px',
}

export default Index
