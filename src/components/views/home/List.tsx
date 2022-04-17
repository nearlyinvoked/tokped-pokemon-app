import { useContext } from 'react'
import { Link } from 'react-router-dom'
import PokemonContext from '../../context/PokemonContext'
import { boxStyle, DataProps } from './Home'

type Props = {
  item: DataProps
}

const List = ({ item }: Props) => {
  const { ownedPokemon } = useContext(PokemonContext)
  const myPokemon = ownedPokemon?.find((data) => data.name === item.name)

  return (
    <div className="col-md-6 col-sm-12">
      <div style={boxStyle}>
        <h5 className="pokemon-name" style={{ marginTop: '0.5rem' }}>
          <b data-testid={`test-${item.name}`}>{item.name.toUpperCase()}</b>{' '}
          (owned:{' '}
          <b data-testid={`test-owned-${item.name}`}>
            {myPokemon ? myPokemon.owned : 0}
          </b>
          )
        </h5>
        <Link
          to={`/detail/${item.name}`}
          className="btn btn-primary"
          data-testid={`test-button-${item.name}`}
        >
          View
        </Link>
      </div>
    </div>
  )
}

export default List
