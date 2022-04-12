import React, { createContext, useState } from 'react'

export type OwnedPokemon = {
  name: string
  owned: number
}

type Props = {
  children: React.ReactNode
}

const useValue = () => {
  const mypokemondata = [
    {
      name: 'bulbasaur',
      owned: 5,
    },
    {
      name: 'charmander',
      owned: 2,
    },
    {
      name: 'jigglypuff',
      owned: 3,
    },
  ]
  const [ownedPokemon, setOwnedPokemon] =
    useState<OwnedPokemon[]>(mypokemondata)

  return {
    ownedPokemon,
    setOwnedPokemon,
  }
}

const PokemonContext = createContext({} as ReturnType<typeof useValue>)

export const PokemonProvider = ({ children }: Props) => {
  return (
    <PokemonContext.Provider value={useValue()}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContext
