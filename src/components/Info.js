import React from 'react'
import { Typography } from '@material-ui/core';

const Info = (props) => {
  return (
    <Typography
      align='center'
      variant='h4'
      paragraph>{props.query? props.query + ' gifs': ''}
    </Typography>)
}

export default Info
