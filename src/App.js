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
      queryParams: '',
    }
  }

  updateValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.history.push('search/' + this.state.searchQuery);
    this.setState({
      searchQuery: '',
      queryParams: '&q=' + this.state.searchQuery
    })
  }

  render(){
    return (
      <Fragment>
        <SearchBar
          handleSubmit={this.handleSubmit}
          updateValue={this.updateValue}
          searchQuery={this.state.searchQuery}/>
        <Route path='/random'>
            <GifContainer urlToFetch = {RANDOM_ENDPOINT} />
        </Route>
        <Route path='/trending'>
            <GifContainer urlToFetch = {TRENDING_ENDPOINT} />
        </Route>
        <Route path='/search/:query'>
            <GifContainer urlToFetch = {SEARCH_ENDPOINT + this.state.queryParams}/>
        </Route>
      </Fragment>
    );
  }
}

export default withRouter(App);
