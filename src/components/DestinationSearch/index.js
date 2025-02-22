import DestinationItemComponent from './components/DestinationItem'
import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props

  return (
    <div className="main-container">
      <h1 className="main-heading">Destination Search</h1>
      <input type="search" />
      <ul className="un-order-list">
        {destinationsList.map(eachItems => (
          <DestinationItemComponent key={eachItems.id} eachItems={eachItems} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
