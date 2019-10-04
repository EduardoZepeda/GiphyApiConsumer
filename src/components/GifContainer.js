import React from 'react'
//Material-ui
import Box from '@material-ui/core/Box';
import Gif from './Gif'

const GifContainer = props => {
  const arrayOfGifs = props.arrayOfGifs.map((element)=> {
    return(<Gif id= {element.id} key={element.id} alt={element.title} src={element.images.original.url}/>)
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

export default GifContainer
