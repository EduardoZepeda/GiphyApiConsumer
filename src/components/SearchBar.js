import React, { Fragment} from 'react'
//Material-ui
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const SearchBar = (props) =>{
  const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));
  const classes = useStyles();
  return(
    <Fragment>
      <Box textAlign="center" m={1} fontSize="h3.fontSize">
        Welcome!
      </Box>
      <Box p={4} textAlign="center" m={1} fontSize="h3.fontSize">
        <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
          <TextField
            name="searchQuery"
            onChange = {props.updateValue}
            value={props.searchQuery}
            type="text"
            margin="normal"
            variant="outlined"
            label="Search gifs of..."
            fullWidth/>
        </form>
      </Box>
      <Box textAlign="center" m={1} fontSize="h3.fontSize">
        <Link to='/random'>
          <Button
            variant="contained"
            color="primary"
            onClick={props.fetchRandomGifs}
            className={classes.button}>
            Try a random gif
          </Button>
        </Link>
        <Link to='/trending'>
          <Button
            variant="contained"
            color="primary"
            onClick={props.fetchTrendingGifs}
            className={classes.button} >
            Show trending gifs
          </Button>
        </Link>
      </Box>
    </Fragment>
  )
}

export default SearchBar
