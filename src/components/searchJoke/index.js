import React from 'react';

import {jokeFetch} from '../../helpers/jokeFetch';

import Button from '../button';

const SearchJoke = () => {
  const onSearchJokeClick = () => {
    jokeFetch();
  }

  return (
    <Button onButtonClick={onSearchJokeClick}>Search</Button>
  );
}

export default SearchJoke;