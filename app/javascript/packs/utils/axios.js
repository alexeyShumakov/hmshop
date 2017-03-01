import axios from 'axios';

function getToken() {
  const token = document.querySelector('meta[name="csrf-token"]');
  if (token && (token instanceof window.HTMLMetaElement)) {
    return token.content;
  }
  return null;
}

export default axios.create({ headers: { 'X-CSRF-Token': getToken() }});
