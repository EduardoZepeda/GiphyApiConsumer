import React, { Component, Fragment } from 'react'

class Gif extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      error: '',
    }
  }

    handleLoad = () => {
      console.log("Loaded")
    }

    render(){
      return(
         <Fragment>
           <img
             key={this.props.id}
             src={this.props.src}
             onLoad={this.handleLoad}
             alt={this.props.alt}/>
         </Fragment>
      )
    }
}

export default Gif
