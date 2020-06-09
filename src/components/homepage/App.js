import React, {Fragment} from 'react';
import './App.css';

import Button from '../button';

const Homepage = () => {
  const onRandomJokeClick = () => {
    fetch('http://api.icndb.com/jokes/random?escape=javascript&exclude=[explicit]')
    .then(res => res.json())
    .then(data => {
      console.log(data.value.joke)
    })
    .catch()
  }

  const onSearchJokeClick = () => {
    fetch('http://api.icndb.com/jokes/random?escape=javascript&exclude=[explicit]&firstName=Malcolm&lastName=McConaghy')
    .then(res => res.json())
    .then(data => {
      console.log(data.value.joke)
    })
    .catch()
  }

  return (
    <Fragment>    
      <Button onClick={onRandomJokeClick}>Random Joke</Button>
      <Button onClick={onSearchJokeClick}>Search Joke</Button>
    </Fragment>
  );
}

export default Homepage;
