const serverUrl = 'http://localhost:9040/api';

function getSpeakers() {
  return fetch(serverUrl + '/speakers/basic-info');
}

/*
async function getSpeakers() {
  const promise = await fetch(serverUrl + '/speakers/basic-info');
  const result = await promise.json();
  return result;
}
*/

export default getSpeakers;
