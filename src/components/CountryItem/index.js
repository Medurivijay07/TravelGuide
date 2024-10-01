import {EachCountry, CountryImage} from './styledComponents'

const CountryItem = props => {
  const {item} = props
  const {name, imageUrl, description} = item
  return (
    <EachCountry>
      <CountryImage src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </EachCountry>
  )
}

export default CountryItem
