import React, { Component, Fragment } from 'react';
//Components
import SearchBar from './components/SearchBar'
import GifContainer from './components/GifContainer'
//Endpoints
import { SEARCH_ENDPOINT, TRENDING_ENDPOINT, RANDOM_ENDPOINT } from './endpoints'
//React router
import { Route, withRouter } from 'react-router-dom'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      searchQuery: '',
      arrayOfGifs : [],
      query: ''
    }
  }

 fetchGifs = query => {
    fetch(SEARCH_ENDPOINT + '&q=' + query)
    .then(response => response.json())
    .then(json=>{
      this.setState({
        searchQuery: '',
        arrayOfGifs: json.data,
        query,
      })
    })
    this.props.history.push('/search/' + query);
  }

  fetchRandomGifs = () => {
    fetch(RANDOM_ENDPOINT)
    .then(response => response.json())
    .then(json=>{
      this.setState({
        searchQuery: '',
        arrayOfGifs: [json.data],
        query: 'random'
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
        query: 'trending'
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
      <Route path='/'>
        <GifContainer
          arrayOfGifs={this.state.arrayOfGifs}/>
      </Route>
      </Fragment>
    );
  }

}

export default withRouter(App);
