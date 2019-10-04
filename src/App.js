import React, { Component, Fragment } from 'react';
//Components
import SearchBar from './components/SearchBar'
import GifContainer from './components/GifContainer'
//Endpoints
import { SEARCH_ENDPOINT, TRENDING_ENDPOINT, RANDOM_ENDPOINT } from './endpoints'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      searchQuery: '',
      arrayOfGifs : [],
      loading: false
    }
  }

 fetchGifs = query => {
    fetch(SEARCH_ENDPOINT + '&q=' + query)
    .then(response => response.json())
    .then(json=>{
      this.setState({
        searchQuery: '',
        arrayOfGifs: json.data,
      })
    })

  }

  fetchRandomGifs = () => {
    fetch(RANDOM_ENDPOINT)
    .then(response => response.json())
    .then(json=>{
      this.setState({
        searchQuery: '',
        arrayOfGifs: [json.data],
      })
    })
  }

  fetchTrendingGifs = () => {
    fetch(TRENDING_ENDPOINT)
    .then(response => response.json())
    .then(json=>{
      this.setState({
        searchQuery: '',
        arrayOfGifs: json.data,
      })
    })
  }

  updateValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchGifs(this.state.searchQuery)
  }

  render(){
    return (
      <Fragment>
        <SearchBar
          handleSubmit={this.handleSubmit}
          updateValue={this.updateValue}
          searchQuery={this.state.searchQuery}
          fetchRandomGifs={this.fetchRandomGifs}
          fetchTrendingGifs={this.fetchTrendingGifs}/>
        <GifContainer
          arrayOfGifs={this.state.arrayOfGifs}/>
      </Fragment>
    );
  }

}

export default App;
