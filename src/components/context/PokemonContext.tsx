import React, { createContext, useReducer } from 'react'

type PokemonNicknameProps = {
  nickname: string
}

export type OwnedPokemon = {
  name: string
  url: string
  owned: number
  list: PokemonNicknameProps[]
}

export type UpdatePokemonProps = {
  name: string
  url: string
  nickname: string
}

type Props = {
  children: React.ReactNode
}

type ReducerAction = {
  type: string
  payload: UpdatePokemonProps
}

const reducer = (state: Array<any>, action: ReducerAction) => {
  const { name, url, nickname } = action.payload
  const current = state?.find((item) => item.name === name)
  switch (action.type) {
    case 'Update':
      if (state == null) {
        localStorage.setItem('myPokemon', JSON.stringify([action.payload]))
        return [action.payload]
      }

      if (current) {
        let filter = state.filter((item) => item.name !== name)
        console.log(filter)
        let data = {
          name,
          url,
          owned: current.owned + 1,
          list: [...current.list, { nickname }],
        }
        localStorage.setItem('myPokemon', JSON.stringify([data, ...filter]))
        return [data, ...filter]
      }

      let data = {
        name,
        url,
        owned: 1,
        list: [{ nickname }],
      }
      localStorage.setItem('myPokemon', JSON.stringify([data, ...state]))
      return [data, ...state]
    case 'Delete':
      if (current?.owned === 1) {
        let deletedPokemon = state?.filter((item) => item.name !== name)
        localStorage.setItem('myPokemon', JSON.stringify(deletedPokemon))
        return [...deletedPokemon]
      } else {
        let filterDelete = state?.filter((item) => item.name !== name)
        let updateDelete = {
          name,
          url,
          owned: current?.owned! - 1,
          list: current?.list.filter((item: any) => item.nickname !== nickname),
        }
        localStorage.setItem(
          'myPokemon',
          JSON.stringify([updateDelete, ...filterDelete!]),
        )
        return [updateDelete, ...filterDelete!]
      }
    default:
      return state
  }
}

const useValue = () => {
  const getLocalStorage: OwnedPokemon[] | null = JSON.parse(
    localStorage.getItem('myPokemon')!,
  )
  let initialState: OwnedPokemon[]
  if (getLocalStorage == null) {
    initialState = []
  } else {
    initialState = getLocalStorage
  }

  const [ownedPokemon, dispatch] = useReducer(reducer, initialState)

  const updateReducer = ({ type, payload }: ReducerAction) => {
    dispatch({ type, payload })
  }

  return {
    ownedPokemon,
    updateReducer,
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
