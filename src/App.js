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
      arrayOfGifs: [],
      loading: false,
      error: ''
    }
  }

  updateValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleRandom = () =>{
    this.fetchGifs(RANDOM_ENDPOINT)
  }

  handleTrending = () =>{
    this.fetchGifs(TRENDING_ENDPOINT)
  }

  handleSearch = () => {
    this.fetchGifs(SEARCH_ENDPOINT + '&q=' + this.state.searchQuery)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.history.push('/search/' + this.state.searchQuery);
    this.handleSearch()
  }

  setLoadingTrue(){
    this.setState({
      loading: true
    })
  }

  fetchGifs(urlToFetch){
    this.setLoadingTrue()
    fetch(urlToFetch)
    .then(response => response.json())
    .then(json=>{
      if(Array.isArray(json.data)){
        this.setState({
          arrayOfGifs: json.data,
          loading: false,
          error: '',
          searchQuery: ''
        })
      }else{
        this.setState({
          arrayOfGifs: [json.data],
          loading: false,
          error: '',
          searchQuery: ''
        })
      }
    })
    .catch((error)=>{
      this.setState({
        error,
      })
    })
  }

  render(){
    return (
      <Fragment>
        <SearchBar
          handleSubmit={this.handleSubmit}
          updateValue={this.updateValue}
          searchQuery={this.state.searchQuery}
          handleRandom={this.handleRandom}
          handleTrending={this.handleTrending}/>
        <Route path='/random'>
            <GifContainer arrayOfGifs={this.state.arrayOfGifs}/>
        </Route>
        <Route path='/trending'>
            <GifContainer arrayOfGifs={this.state.arrayOfGifs}/>
        </Route>
        <Route path='/search/:query'>
            <GifContainer arrayOfGifs={this.state.arrayOfGifs}/>
        </Route>
      </Fragment>
    );
  }
}

export default withRouter(App);
