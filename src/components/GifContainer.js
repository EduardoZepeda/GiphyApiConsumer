import React from 'react'
//components
import Gif from './Gif'
//Material-ui
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const GifContainer = (props) =>{
  if(props.error){
    return <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="center">
              <h2>There has been an error with the page</h2>
            </Box>
  }else if(props.loading){
    return  <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="center">
              <CircularProgress/>
            </Box>
  } else {
      const arrayOfGifs = props.arrayOfGifs.map((element)=> {
        return(<Gif
          id= {element.id}
          key={element.id}
          alt={element.title}
          src={element.images.original.url}
          width={element.images.original.width}
          height={element.images.original.height}/>)
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
