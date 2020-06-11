import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import './index.css';

import {jokeFetch} from '../../helpers/jokeFetch';

import Button from '../button';

const SearchJoke = () => {
  const [joke, setJoke] = useState('Enter your first and last name to put yourself in place of Chuck Norris in the jokes');
  const [name, setName] = useState('');

  const onSearchJokeClick = e => {
    e.preventDefault();
    const reg = /^[a-z ]+$/i;
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ')[1];

    if (reg.test(name)) {
      jokeFetch(firstName, lastName)
      .then(joke => setJoke(joke));
    } else {
      setJoke('Please enter only letters and spaces');
    };
  };

  return (
    <Fragment>
      <h1 className="searchJoke__title">{joke}</h1>
      <form className="searchJoke__form">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your first and last name"
          className="searchJoke__form-input-name"
        />
        <Button onButtonClick={onSearchJokeClick} testId="searchCustomJoke">Search</Button>
      </form>
      <Link to="/" className="searchJoke__linkButton">Back to Home</Link>
    </Fragment>
  );
}

export default SearchJoke;