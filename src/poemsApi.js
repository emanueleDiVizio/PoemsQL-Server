// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce';

// define the api
const api = create({
  baseURL: 'http://poetrydb.org',
  headers: { Accept: 'application/vnd.github.v3+json' },
});

export const poemsForAuthor = author =>
  api.get(`/author/${author.replace(' ', '+')}`).then(res => res.data);

export const linesForPoem = poem => api.get(`/title/${poem}`).then(res => res.data);

export const authors = () => api.get('/author').then(res => res.data);
