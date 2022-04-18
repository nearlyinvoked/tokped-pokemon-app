import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import PokemonContext from '../../context/PokemonContext'
import { boxStyle, DataProps } from './Detail'

const Catch = () => {
  //50% chance
  const random = Math.random() < 0.5

  //get url params
  const params = useParams()
  const pokemonName = params.pokemonname
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

  //state
  const [pokemonData, setPokemonData] = useState<DataProps | null>(null)
  const [success, setSuccess] = useState<boolean>(random)
  const [error, setError] = useState<boolean>(false)
  const [newNickname, setNickname] = useState<string>('')

  //context
  const { ownedPokemon, updateReducer } = useContext(PokemonContext)

  const navigate = useNavigate()

  //Handler
  // const handleCatchPokemon = ({ name, url, nickname }: UpdatePokemonProps) => {
  //   const data = ownedPokemon.find((item: any) => item.name === name)
  //   const filter = data?.list?.filter((item: any) => item.nickname === nickname)
  //   console.log(filter)

  //   if (filter?.length > 0) {
  //     setError(true)
  //   } else {
  //     updateReducer({ type: 'Update', payload: { name, url, nickname } })
  //     navigate(`/detail/${pokemonName}`)
  //   }
  // }

  const handleCatchPokemon = (e: React.FormEvent) => {
    e.preventDefault()
    const data = ownedPokemon.find((item: any) => item.name === pokemonName)
    const filter = data?.list?.filter(
      (item: any) => item.nickname === newNickname,
    )
    console.log(filter)

    if (filter?.length > 0) {
      setError(true)
    } else {
      updateReducer({
        type: 'Update',
        payload: { name: pokemonName!, url: url, nickname: newNickname },
      })
      navigate(`/detail/${pokemonName}`)
    }
  }

  useEffect(() => {
    const getPokemonDetail = async (name: string | undefined) => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        setPokemonData(res.data)
      } catch (error: any) {
        console.log(error.message)
      }
    }
    getPokemonDetail(pokemonName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container">
      <div style={boxStyle}>
        <h5 className="text-center mt-1">
          {success ? (
            <b>Successfully catch {pokemonData?.name.toUpperCase()} ✅</b>
          ) : (
            <b>Failed catch {pokemonData?.name.toUpperCase()} ❌</b>
          )}
        </h5>
        <div className="d-flex justify-content-center">
          <img
            className="pokemon-img img-fluid my-3"
            src={pokemonData?.sprites.other['official-artwork'].front_default}
          />
        </div>

        {success ? (
          <form onSubmit={handleCatchPokemon}>
            {error ? (
              <div className="alert alert-danger" role="alert">
                Please choose different nickname
              </div>
            ) : (
              ''
            )}
            <div className="d-flex justify-content-center">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="input-nickname"
                  aria-describedby="nickname"
                  placeholder="Enter Nickname"
                  onChange={(e) => setNickname(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Add
              </button>
            </div>
          </form>
        ) : (
          <div className="d-flex justify-content-center">
            <Link className="btn btn-primary" to={`/detail/${pokemonName}`}>
              Return
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Catch
