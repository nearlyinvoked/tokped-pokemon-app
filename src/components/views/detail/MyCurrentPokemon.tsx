import React from 'react'
import { boxStyle, DataProps } from './Detail'
import { OwnedPokemon } from '../../context/PokemonContext'

type Props = {}

type MyCurrentPokemonProps = {
  pokemonData: DataProps | null
  myPokemon: OwnedPokemon | undefined
}

const MyCurrentPokemon = ({
  pokemonData,
  myPokemon,
}: MyCurrentPokemonProps) => {
  //handler
  const handleReleasePokemon = (nickname: string | undefined) => {
    console.log(`release ${nickname}`)
  }

  return (
    <div style={boxStyle}>
      {myPokemon ? (
        <>
          <h5 className="text-center">
            <b>
              You have {myPokemon.owned} {pokemonData?.name.toUpperCase()}
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
  )
}

export default MyCurrentPokemon
