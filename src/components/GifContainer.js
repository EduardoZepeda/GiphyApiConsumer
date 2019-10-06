import React, { Component } from 'react'
//components
import Gif from './Gif'
//Material-ui
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

class GifContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      arrayOfGifs: [],
      loading: false,
      error: ''
    }
  }

  setLoadingTrue(){
    this.setState({
      loading: true
    })
  }

  componentDidMount(){
    this.setLoadingTrue()
    fetch(this.props.urlToFetch)
    .then(response => response.json())
    .then(json=>{
      if(Array.isArray(json.data)){
        this.setState({
          arrayOfGifs: json.data,
          loading: false,
          error: ''
        })
      }else{
        this.setState({
          arrayOfGifs: [json.data],
          loading: false,
          error: ''
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
    if(this.state.error){
      return <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="center">
                <h2>There has been an error with the page</h2>
              </Box>

    }
    if(this.state.loading){
      return  <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="center">
                <CircularProgress/>
              </Box>
    }
    const arrayOfGifs = this.state.arrayOfGifs.map((element)=> {
      return(<Gif
        id= {element.id}
        key={element.id}
        alt={element.title}
        src={element.images.original.url}/>)
    })

    return (
      <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center">
          {arrayOfGifs}
      </Box>
    )
  }
}

export default GifContainer
