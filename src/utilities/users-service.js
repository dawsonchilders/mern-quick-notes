//Service modules export business/app logic
//such as managing tokents, etc
// service modules often depend on API modules
// for making AJAX requests to the server

import * as usersAPI from './users-api';


export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export function logOut() {
  localStorage.removeItem('token');
}

export async function login(userData) {
  const token = await usersAPI.login(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export function getToken() {
  // getItem will return null if the key does not exist
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split('.')[1]));
  // a JWT's expiration is expressed in seconds, not milliseconds, so convert
  if (payload.exp * 1000 < Date.now()) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // if there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

// remove checkToken before cloning for future use
export function checkToken() {
  return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr));
}

