import React, { Component, Fragment } from 'react'
//Material-ui
import CircularProgress from '@material-ui/core/CircularProgress';

class Gif extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
    }
  }

    handleLoad = () => {
      this.setState({
        loading: false
      })
    }

    render(){
      return(
        <Fragment>
          <div style={{display: this.state.loading ? 'none' : 'block' }}>
            <img
              className='gif'
              key={this.props.id}
              src={this.props.src}
              onLoad={this.handleLoad}
              alt={this.props.alt}/>
          </div>
          <div className='spinner' style={{display: !this.state.loading ? 'none' : 'block' }}>
              <CircularProgress/>
          </div>
        </Fragment>

      )
    }
}

export default Gif
