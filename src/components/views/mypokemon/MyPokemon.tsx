import { useContext } from 'react'
import { Link } from 'react-router-dom'
import PokemonContext, {
  UpdatePokemonProps,
} from '../../context/PokemonContext'

//type
import * as CSS from 'csstype'

const Index = () => {
  const { ownedPokemon, updateReducer } = useContext(PokemonContext)

  const handleReleasePokemon = ({
    name,
    url,
    nickname,
  }: UpdatePokemonProps) => {
    updateReducer({
      type: 'Delete',
      payload: {
        name,
        url,
        nickname,
      },
    })
  }

  return (
    <div className="container">
      <div className="row mt-4">
        {ownedPokemon.length > 0 ? (
          <>
            {ownedPokemon?.map((item) => {
              return (
                <div key={item.name} className="col-md-6 col-sm-12">
                  <div style={boxStyle}>
                    <div className="d-flex">
                      <h5
                        className="pokemon-name"
                        style={{ marginTop: '0.5rem' }}
                      >
                        <b data-testid={`test-${item.name}`}>
                          {item.name.toUpperCase()}
                        </b>{' '}
                        (owned:{' '}
                        <b data-testid={`test-owned-${item.name}`}>
                          {item.owned}
                        </b>
                        )
                      </h5>
                      <Link
                        to={`/detail/${item.name}`}
                        className="btn btn-primary"
                      >
                        View
                      </Link>
                    </div>
                    <hr />
                    <ul>
                      {item.list.map((list: any) => (
                        <li>
                          <div className="d-flex">
                            <p style={{ flexGrow: 1 }}>{list.nickname}</p>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() =>
                                handleReleasePokemon({
                                  name: item.name,
                                  url: item.url,
                                  nickname: list.nickname,
                                })
                              }
                              style={{ fontSize: '0.9rem' }}
                            >
                              Release
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </>
        ) : (
          <h5 className="text-center">
            <b>You Currently don't have any Pokemon</b>
          </h5>
        )}

        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
    </div>
  )
}

const boxStyle: CSS.Properties = {
  margin: '0.5rem 0 0.5rem 0',
  padding: '0.5rem 0.5rem 0.5rem 0.5rem',
  border: '1px solid black',
  borderRadius: '10px',
}

export default Index
