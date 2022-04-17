import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import Navbar from './Navbar'

afterEach(() => {
  cleanup()
})

describe('render Navbar components', () => {
  test('should render Navbar components', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
  })

  test('should render Navbar Link', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
    expect(screen.getByTestId('link1')).toBeInTheDocument()
    expect(screen.getByTestId('link2')).toBeInTheDocument()
  })
})
