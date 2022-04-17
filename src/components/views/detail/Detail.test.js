import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PokemonProvider } from '../../context/PokemonContext'

import Detail from './Detail'

afterEach(() => {
  cleanup()
})

describe('rendere My Pokemon components', () => {
  test('should render Pokemon list from context', () => {
    render(
      <BrowserRouter>
        <PokemonProvider>
          <Detail />
        </PokemonProvider>
      </BrowserRouter>,
    )
  })
})
