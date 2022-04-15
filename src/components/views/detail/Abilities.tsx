import {
  boxStyle,
  AbilitiesProps,
  MovesProps,
  TypesProps,
  StatsProps,
} from './Detail'

type AbilitiesComponentProps = {
  abilities: AbilitiesProps[] | undefined
  moves: MovesProps[] | undefined
  types: TypesProps[] | undefined
  stats: StatsProps[] | undefined
}

const Abilities = ({
  abilities,
  moves,
  types,
  stats,
}: AbilitiesComponentProps) => {
  let ability = ''
  abilities?.forEach((item, index) => {
    if (index === abilities.length - 1) {
      ability += item.ability.name
    } else {
      ability += item.ability.name + ', '
    }
  })

  let move = ''
  moves?.forEach((item, index) => {
    if (index < 35) {
      move += item.move.name + ', '
    } else if (index === 35) {
      let remaining = moves.length - 1 - index
      move += item.move.name + `, ... +${remaining} more`
    } else {
      return
    }
  })

  let type = ''
  types?.forEach((item, index) => {
    if (index === types.length - 1) {
      type += item.type.name
    } else {
      type += item.type.name + ', '
    }
  })

  return (
    <div className="col-md-6 col-sm-12">
      <div style={boxStyle}>
        <h5 className="text-center">
          <b>Abilities & Moves</b>
        </h5>

        <div className="pokemon-detail mt-4">
          <div className="d-flex">
            <p>Ability:</p>
            <p style={{ marginLeft: '0.5rem' }}>
              <b>{ability}</b>
            </p>
          </div>
          <div className="d-flex">
            <p>Moves:</p>
            <p style={{ marginLeft: '0.5rem' }}>
              <b>{move}</b>
            </p>
          </div>
          <div className="d-flex">
            <p>Types:</p>
            <p style={{ marginLeft: '0.5rem' }}>
              <b>{type}</b>
            </p>
          </div>
        </div>

        <h5 className="text-center">
          <b>Stats</b>
        </h5>
        <div className="pokemon-stats row mt-4">
          {stats?.map((item) => (
            <div className="col-md-4 col-sm-6" key={item.stat.name}>
              <p>
                {item.stat.name}: <b>{item.base_stat}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Abilities
