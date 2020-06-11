import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import fetchMock from 'fetch-mock-jest';

import SearchJoke from './index';

describe('SearchJoke component', () => {
  it('should render the component', () => {
    const { getByText } = render(
      <Router>
        <SearchJoke />
      </Router>
    );

    const titleElement = getByText(/Enter your first and last name to put yourself in place of Chuck Norris in the jokes/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should fetch and display new joke on Search click and has firstName and lastName', async () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(
      <Router>
        <SearchJoke />
      </Router>
    );

    fetchMock.get('http://api.icndb.com/jokes/random?escape=javascript&exclude=[explicit]&firstName=Malcolm&lastName=McConaghy', {
      value: {
        joke: 'Chuck Norris hosting is 101% uptime guaranteed.'
      }
    });
    
    const searchJokeButton = getByTestId(/searchCustomJoke/i);
    const titleElement = getByText(/Enter your first and last name to put yourself in place of Chuck Norris in the jokes/i);
    const input = getByPlaceholderText('Enter your first and last name');

    fireEvent.change(input, { target: { value: 'Malcolm McConaghy'}});
    fireEvent.click(searchJokeButton);

    await waitFor(() => expect(titleElement.innerHTML).toBe('Chuck Norris hosting is 101% uptime guaranteed.'));
  });

  
  it('should fetch and display new joke on Search click with firstName only', async () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(
      <Router>
        <SearchJoke />
      </Router>
    );

    fetchMock.get('http://api.icndb.com/jokes/random?escape=javascript&exclude=[explicit]&firstName=Malcolm&lastName=', {
      value: {
        joke: 'Chuck Norris hosting is 101% uptime guaranteed.'
      }
    });
    
    const searchJokeButton = getByTestId(/searchCustomJoke/i);
    const titleElement = getByText(/Enter your first and last name to put yourself in place of Chuck Norris in the jokes/i);
    const input = getByPlaceholderText('Enter your first and last name');

    fireEvent.change(input, { target: { value: 'Malcolm'}});
    fireEvent.click(searchJokeButton);

    await waitFor(() => expect(titleElement.innerHTML).toBe('Chuck Norris hosting is 101% uptime guaranteed.'));
  });

  it('should show validation message if validation isnt met', async () => {
    const { getByText, getByTestId } = render(
      <Router>
        <SearchJoke />
      </Router>
    );

    fetchMock.get('http://api.icndb.com/jokes/random?escape=javascript&exclude=[explicit]', {
      value: {
        joke: 'Chuck Norris hosting is 101% uptime guaranteed.'
      }
    });
    
    const searchJokeButton = getByTestId(/searchCustomJoke/i);
    const titleElement = getByText(/Enter your first and last name to put yourself in place of Chuck Norris in the jokes/i);

    fireEvent.click(searchJokeButton);

    await waitFor(() => expect(titleElement.innerHTML).toBe('Please enter only letters and spaces'));
  });

  it('should throw an alert if fetch fails', () => {

  });
});