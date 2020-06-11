import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import fetchMock from 'fetch-mock-jest';

import Homepage from './index';

describe('Homepage component', () => {
  it('should render the component', () => {
    const { getByText } = render(
      <Router>
        <Homepage />
      </Router>
    );

    const titleElement = getByText(/Click "Random Joke" for a random Chuck Norris Joke/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should fetch and display new joke on Random click', async () => {
    const { getByText, getByTestId } = render(
      <Router>
        <Homepage />
      </Router>
    );

    fetchMock.get('http://api.icndb.com/jokes/random?escape=javascript&exclude=[explicit]', {
      value: {
        joke: 'Chuck Norris hosting is 101% uptime guaranteed.'
      }
    });
    
    const randomJokeButton = getByTestId(/randomJoke/i);
    const titleElement = getByText(/Click "Random Joke" for a random Chuck Norris Joke/i);

    fireEvent.click(randomJokeButton);

    await waitFor(() => expect(titleElement.innerHTML).toBe('Chuck Norris hosting is 101% uptime guaranteed.'));
  });

  it('should throw an alert if fetch fails', () => {

  });
});