import { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import PokemonContext from '../../context/PokemonContext'

//component
import Abilities from './Abilities'
import MyCurrentPokemon from './MyCurrentPokemon'

//type
import * as CSS from 'csstype'

export type AbilitiesProps = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export type MovesProps = {
  move: {
    name: string
    url: string
  }
  version_group_details: []
}

export type TypesProps = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export type StatsProps = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export type DataProps = {
  abilities: AbilitiesProps[]
  base_experience: number
  forms: []
  game_indices: []
  height: number
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: MovesProps[]
  name: string
  order: number
  past_types: []
  species: {}
  sprites: {
    back_default: string
    front_default: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  stats: StatsProps[]
  types: TypesProps[]
  weight: number
}

export type UpdatePokemonProps = {
  name: string
  url: string
  nickname: string
}

const Index = () => {
  //state
  const [pokemonData, setPokemonData] = useState<DataProps | null>(null)

  //get url params
  const params = useParams()
  const pokemonName = params.pokemonname
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

  //context
  const { ownedPokemon } = useContext(PokemonContext)
  const myPokemon = ownedPokemon.find((item) => item.name === pokemonName)

  useEffect(() => {
    const getPokemonDetail = async (name: string | undefined) => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        setPokemonData(res.data)
      } catch (error) {}
    }
    getPokemonDetail(pokemonName)
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div style={boxStyle}>
            <h5 className="text-center">
              <b>Pokemon</b>
            </h5>
            <div className="d-flex justify-content-center">
              <img
                className="pokemon-img img-fluid"
                src={
                  pokemonData?.sprites.other['official-artwork'].front_default
                }
              />
            </div>
            <div className="pokemon-detail mt-3">
              <p className="text-center">
                Name: <b>{pokemonData?.name.toUpperCase()}</b>
              </p>
              <p className="text-center">
                Base XP: <b>{pokemonData?.base_experience}</b>
              </p>
              <p className="text-center">
                Height: <b>{pokemonData?.height}</b>
              </p>
              <p className="text-center">
                Weight: <b>{pokemonData?.weight}</b>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <Link
                className="btn btn-success"
                to={`/catch/${pokemonData?.name}`}
              >
                Catch {pokemonData?.name.toUpperCase()}
              </Link>
            </div>
          </div>
        </div>
        <Abilities
          abilities={pokemonData?.abilities}
          moves={pokemonData?.moves}
          types={pokemonData?.types}
          stats={pokemonData?.stats}
        />
        <div className="col-lg-4 col-md-6 col-sm-12"></div>
      </div>

      <MyCurrentPokemon
        pokemonData={pokemonData}
        myPokemon={myPokemon}
        url={url}
      />
    </div>
  )
}

export const boxStyle: CSS.Properties<string> = {
  maxHeight: '800px',
  margin: '0.5rem 0 0.5rem 0',
  padding: '1rem 1.5rem 1rem 1.5rem',
  border: '1px solid black',
  borderRadius: '10px',
}

export default Index
