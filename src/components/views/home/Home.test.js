import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Home from './Home'
import List from './List'

afterEach(() => {
  cleanup()
})

describe('render Home components', () => {
  test('should render Home components', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    )
  })

  test('should render Pokemon list', () => {
    const fakeData = {
      name: 'fakePokemon',
      url: 'fakePokemonUrl',
    }

    render(
      <BrowserRouter>
        <List item={fakeData} />
      </BrowserRouter>,
    )

    const item = screen.getByTestId(`test-${fakeData.name}`).innerHTML
    expect(item).toBe('FAKEPOKEMON')

    const total = screen.getByTestId(`test-owned-${fakeData.name}`).innerHTML
    expect(total).toBe('0')

    const button = screen.getByTestId(`test-button-${fakeData.name}`)
    expect(button).toBeInTheDocument()
  })
})
