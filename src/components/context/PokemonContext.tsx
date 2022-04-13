import React, { createContext, useState } from 'react'

type PokemonNicknameProps = {
  nickname: string
}

export type OwnedPokemon = {
  name: string
  url: string
  owned: number
  list: PokemonNicknameProps[]
}

type Props = {
  children: React.ReactNode
}

const useValue = () => {
  const mypokemondata = [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
      owned: 5,
      list: [
        {
          nickname: 'lulba1',
        },
        {
          nickname: 'lulba2',
        },
        {
          nickname: 'lulba3',
        },
        {
          nickname: 'lulba4',
        },
        {
          nickname: 'lulba5',
        },
      ],
    },
    {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/',
      owned: 2,
      list: [
        {
          nickname: 'char',
        },
        {
          nickname: 'mander',
        },
      ],
    },
    {
      name: 'jigglypuff',
      url: 'https://pokeapi.co/api/v2/pokemon/39/',
      owned: 3,
      list: [
        {
          nickname: 'jiggly',
        },
        {
          nickname: 'puff',
        },
        {
          nickname: 'jigjig',
        },
      ],
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
