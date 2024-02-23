import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export function getNotes() {
  return sendRequest(BASE_URL)
}

export function createNote(note) {
  return sendRequest(`${BASE_URL}/create`, 'POST', note);
}

export function deleteNote(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
