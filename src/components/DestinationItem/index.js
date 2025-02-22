import './index.css'

const DestinationItemComponent = props => {
  const {eachItems} = props

  return (
    <li className="li-element">
      <img src={eachItems.imgUrl} alt={eachItems.name} className="img-url" />
      <br />
      <p className="destinationItem">{eachItems.name}</p>
    </li>
  )
}

export default DestinationItemComponent
