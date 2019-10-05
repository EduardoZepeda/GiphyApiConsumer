import React, { Component, Fragment } from 'react';
//Components
import SearchBar from './components/SearchBar'
import GifContainer from './components/GifContainer'
import Info from './components/Info'
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
      query: '',
      loading: false,
      error: ''
    }
  }

  setLoadingTrue = () => {
    this.setState({
      loading: true
    })
  }

 fetchGifs = query => {
    this.setLoadingTrue()
    fetch(SEARCH_ENDPOINT + '&q=' + query)
    .then(response => response.json())
    .then(json=>{
      this.setState({
        searchQuery: '',
        arrayOfGifs: json.data,
        query,
        loading: false,
        error: ''
      })
    })
    .catch((error)=>{
      this.setState({
        error,
      })
    })
    this.props.history.push('/search/' + query);
  }


  fetchRandomGifs = () => {
    this.setLoadingTrue()
    fetch(RANDOM_ENDPOINT)
    .then(response => response.json())
    .then(json=>{
      this.setState({
        searchQuery: '',
        arrayOfGifs: [json.data],
        query: 'random',
        loading: false,
        error: ''
      })
    })
    .catch((error)=>{
      this.setState({
        error,
      })
    })
  }

  fetchTrendingGifs = () => {
    this.setLoadingTrue()
    fetch(TRENDING_ENDPOINT)
    .then(response => response.json())
    .then(json=>{
      this.setState({
        searchQuery: '',
        arrayOfGifs: json.data,
        query: 'trending',
        loading: false,
        error: ''
      })
    })
    .catch((error)=>{
      this.setState({
        error,
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
            <Info query={this.state.query}/>
            <GifContainer
              arrayOfGifs={this.state.arrayOfGifs}
              loading={this.state.loading}
              query={this.state.query}
              error={this.state.error}/>
        </Route>
      </Fragment>
    );
  }

}

export default withRouter(App);
