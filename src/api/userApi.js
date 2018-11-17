import 'whatwg-fetch';
//What Working Group-fetch
//assure that this code run in a browsers they dont have fetch support natively 

import getBaseUrl from './baseUrl';
const baseUrl = getBaseUrl();

export function getUsers() {
  return get('users');
}
// exporting one public function all the other functions below are private.

export function deleteUser(id){
  return del(`users/${id}`);
}

function get(url) {//the actual call using fetch occurs here
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url){
  const request = new Request(baseUrl + url,{
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
