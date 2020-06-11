import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import './index.css';

import {jokeFetch} from '../../helpers/jokeFetch';

import Button from '../button';

const Homepage = () => {
  const [joke, setJoke] = useState('Click "Random Joke" for a random Chuck Norris Joke. Click "Search Joke" for a random joke where you are the Chuck.');

  const onRandomJokeClick = () => {
    jokeFetch()
    .then(joke => setJoke(joke));
  };

  return (
    <Fragment>
      <h1 className="homepage__title">{joke}</h1>
      <div className="homepage__jokeButtons">
        <Button onButtonClick={onRandomJokeClick} testId='randomJoke'>Random Joke</Button>
        <Link className="homepage__linkButton" to="/searchJoke" data-testid="searchJoke">Search Joke</Link>
      </div>
    </Fragment>
  );
}

export default Homepage;
