import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CountryItem from '../CountryItem'

import {
  AppMainContainer,
  AppTitle,
  LoaderContainer,
  CountriesList,
} from './styledComponents'

class TravelGuide extends Component {
  state = {placesList: {}, isLoading: true}

  componentDidMount() {
    this.getPlacesDetails()
  }

  getPlacesDetails = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedData = {
      packages: data.packages.map(Item => ({
        id: Item.id,
        name: Item.name,
        imageUrl: Item.image_url,
        description: Item.description,
      })),
    }
    this.setState({placesList: updatedData, isLoading: false})
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderCountriesList = () => {
    const {placesList} = this.state
    const {packages = []} = placesList

    return (
      <CountriesList>
        {packages.map(Item => (
          <CountryItem key={Item.id} item={Item} />
        ))}
      </CountriesList>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <AppMainContainer>
        <AppTitle>Travel Guide</AppTitle>
        {isLoading ? this.renderLoadingView() : this.renderCountriesList()}
      </AppMainContainer>
    )
  }
}

export default TravelGuide
