import {useState, useEffect} from 'react'
import DestinationItemComponent from '../DestinationItem'
import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  const [searchInput, setSearchInput] = useState('')
  const [updatedDestinationsList, setUpdatedDestinationsList] =
    useState(destinationsList)

  const setSearchInputHandle = event => {
    setSearchInput(event.target.value)
  }

  useEffect(() => {
    const updatedListData = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    setUpdatedDestinationsList(updatedListData)
  }, [searchInput, destinationsList])

  return (
    <div className="main-container">
      <h1 className="main-heading">Destination Search</h1>
      <div>
        <input
          placeholder="Search Destination"
          type="search"
          value={searchInput}
          onChange={setSearchInputHandle}
        />
      </div>
      <ul className="un-order-list">
        {updatedDestinationsList.map(eachItems => (
          <DestinationItemComponent key={eachItems.id} eachItems={eachItems} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
