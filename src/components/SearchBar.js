import React, { Fragment} from 'react'
//Material-ui
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
      <Box textAlign="center" m={1} fontSize="h3.fontSize">
        <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
          <TextField name="searchQuery" onChange = {props.updateValue} value={props.searchQuery} type="text" label="Search gifs of..."/>
        </form>
      </Box>
      <Box textAlign="center" m={1} fontSize="h3.fontSize">
        <Button variant="contained" color="primary" onClick={props.fetchRandomGifs} className={classes.button}>
          Try a random gif
        </Button>
        <Button variant="contained" color="primary" onClick={props.fetchTrendingGifs} className={classes.button} >
          Trending gifs
        </Button>
      </Box>
    </Fragment>
  )
}

export default SearchBar
