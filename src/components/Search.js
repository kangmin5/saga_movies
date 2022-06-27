import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getMovies } from '../redux/features/movieSlice';
import useStyles from '../styles'

const Search = () => {
  const [name, setname] = useState('love')
  const classes = useStyles();
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name))
  },[dispatch,name])
  return (
    <>
      <h2 className={classes.title}>Movie Search App</h2> 
      <form className={classes.form} onSubmit={e => e.preventDefault()}>
        <TextField
          type='text'
          fullWidth
          value={name}
          sx={{ m: 1, width: "55ch" }}
          onChange={e=>setname(e.target.value)}
        />
        
      </form>
    </>
  )
}

export default Search
