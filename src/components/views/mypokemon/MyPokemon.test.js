import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PokemonContext from '../../context/PokemonContext'

import MyPokemon from './MyPokemon'

afterEach(() => {
  cleanup()
})

const fakeData = [
  {
    name: 'fakepokemon',
    url: 'fakeurl',
    owned: 3,
    list: [{ nickname: 'fake1' }, { nickname: 'fake2' }, { nickname: 'fake3' }],
  },
]

const fakeUpdateReducer = ({ type, payload }) => {
  console.log('Reducer Action')
}

describe('rendere My Pokemon components', () => {
  test('should render Pokemon list from context', () => {
    render(
      <BrowserRouter>
        <PokemonContext.Provider value={{ fakeData, fakeUpdateReducer }}>
          <MyPokemon />
        </PokemonContext.Provider>
      </BrowserRouter>,
    )
  })

  //   test('should render pokemon name and total owned', () => {
  //     render(
  //       <BrowserRouter>
  //         <PokemonContext.Provider value={{ fakeData, fakeUpdateReducer }}>
  //           <MyPokemon />
  //         </PokemonContext.Provider>
  //       </BrowserRouter>,
  //     )

  //     const name = screen.getByTestId(fakeData[0].name).innerHTML
  //     expect(name).toBe('fakepokemon')
  //   })
})
