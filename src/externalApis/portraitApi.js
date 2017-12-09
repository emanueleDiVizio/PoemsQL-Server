// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce';

// define the api
const api = create({
  baseURL: 'https://api.cognitive.microsoft.com/bing/v7.0/images',
  headers: { 'Ocp-Apim-Subscription-Key': process.env.BING_API_KEY },
});

const naviMonitor = response => console.log(response);
api.addMonitor(naviMonitor);

export const authorPortrait = author =>
  api
    .get('/search', { q: author, count: 1 })
    .then(res => res.data)
    .then(res => res.value[0].thumbnailUrl);
