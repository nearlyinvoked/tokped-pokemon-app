import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import List from './List'

//type
import * as CSS from 'csstype'

export type DataProps = {
  name: string
  url: string
}

const Index = () => {
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
      let pokemon: DataProps[] = res.data.results
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
          return <List item={item} key={item.name} />
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

export const boxStyle: CSS.Properties = {
  display: 'flex',
  margin: '0.5rem 0 0.5rem 0',
  padding: '0.5rem 0.5rem 0.5rem 0.5rem',
  border: '1px solid black',
  borderRadius: '10px',
}

export default Index
