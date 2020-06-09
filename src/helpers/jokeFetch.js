export const jokeFetch = (firstName, lastName) => {
  let fetchUrl = 'http://api.icndb.com/jokes/random?escape=javascript&exclude=[explicit]';

  if (firstName) {
    fetchUrl = `http://api.icndb.com/jokes/random?escape=javascript&exclude=[explicit]&firstName=${firstName}&lastName=${lastName}`;
  };

  return fetch(fetchUrl)
  .then(res => res.json())
  .then(data => data.value.joke)
  .catch(() => alert('Something went wrong. Please try again'))
}