import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import PokemonContext, { OwnedPokemon } from '../../context/PokemonContext'

//type
import * as CSS from 'csstype'

type statsProps = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

type DataProps = {
  abilities: []
  base_experience: number
  forms: []
  game_indices: []
  height: number
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: []
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
  stats: statsProps[]
  types: []
  weight: number
}

const Index = () => {
  //state
  const [pokemonData, setPokemonData] = useState<DataProps | null>(null)

  //get url params
  const params = useParams()
  const pokemonName = params.pokemonname

  //context
  const { ownedPokemon } = useContext(PokemonContext)
  const myPokemon = ownedPokemon.find((item) => item.name === pokemonName)

  //Handler
  const handleCatchPokemon = (name: string | undefined) => {
    console.log(`catch ${name}`)
  }

  const handleReleasePokemon = (nickname: string | undefined) => {
    console.log(`release ${nickname}`)
  }

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
      <div style={boxStyle}>
        <h5 className="text-center">
          <b>Pokemon Detail</b>
        </h5>
        <div className="d-flex justify-content-center">
          <img
            className="pokemon-img img-fluid"
            src={pokemonData?.sprites.other['official-artwork'].front_default}
          />
        </div>
        <div className="pokemon-detail mt-3">
          <p className="text-center">
            Name: <b>{pokemonData?.name}</b>
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
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleCatchPokemon(pokemonData?.name)}
          >
            Catch {pokemonData?.name}
          </button>
        </div>
      </div>

      <div style={boxStyle}>
        {myPokemon ? (
          <>
            <h5 className="text-center">
              <b>
                You have {myPokemon.owned} {pokemonData?.name}
              </b>
            </h5>

            <div className="my-pokemon-nickname mt-3">
              <div className="row">
                {myPokemon.list.map((item) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12"
                    key={item.nickname}
                  >
                    <div className="d-flex my-1">
                      <p className="pokemon-nickname mt-1">
                        nickname: <b>{item.nickname}</b>
                      </p>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleReleasePokemon(item.nickname)}
                      >
                        Release
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <h5 className="text-center">
            <b>You currently don't have {pokemonData?.name}</b>
          </h5>
        )}
      </div>
    </div>
  )
}

const boxStyle: CSS.Properties<string> = {
  margin: '0.5rem 0 0.5rem 0',
  padding: '1rem 1.5rem 1rem 1.5rem',
  border: '1px solid black',
  borderRadius: '10px',
}

export default Index
