import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import './index.css';

import {jokeFetch} from '../../helpers/jokeFetch';

import Button from '../button';

const Homepage = () => {
  const [joke, setJoke] = useState('Click "Random Joke" for a random Chuck Norris Joke. Click "Search Joke" for a random joke where you are the Chuck.');

  const onRandomJokeClick = () => {
    jokeFetch()
    .then(joke => setJoke(joke))
  };

  return (
    <Fragment>
      <h1>{joke}</h1>
      <Button onButtonClick={onRandomJokeClick}>Random Joke</Button>
      <Link to="/searchJoke">Search Joke</Link>
    </Fragment>
  );
}

export default Homepage;
