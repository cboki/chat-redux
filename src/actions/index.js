// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function fetchMessages(channel) {

  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  }

}

export function createMessage(channel, author, content) {

  const url_base = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { author, content };

  const promise = fetch(url_base, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  }
}
