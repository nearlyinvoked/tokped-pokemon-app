import { useContext } from 'react'
import { Link } from 'react-router-dom'
import PokemonContext from '../../context/PokemonContext'

//type
import * as CSS from 'csstype'

const Index = () => {
  const { ownedPokemon } = useContext(PokemonContext)

  return (
    <div className="container">
      <div className="row mt-4">
        {ownedPokemon?.map((item) => {
          return (
            <div key={item.name} className="col-md-6 col-sm-12">
              <div style={boxStyle}>
                <h5 className="pokemon-name" style={{ marginTop: '0.5rem' }}>
                  <b data-testid={`test-${item.name}`}>
                    {item.name.toUpperCase()}
                  </b>{' '}
                  (owned:{' '}
                  <b data-testid={`test-owned-${item.name}`}>{item.owned}</b>)
                </h5>
                <Link to={`/detail/${item.name}`} className="btn btn-primary">
                  View
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const boxStyle: CSS.Properties = {
  display: 'flex',
  margin: '0.5rem 0 0.5rem 0',
  padding: '0.5rem 0.5rem 0.5rem 0.5rem',
  border: '1px solid black',
  borderRadius: '10px',
}

export default Index
