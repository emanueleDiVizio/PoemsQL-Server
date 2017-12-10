// showLastCommitMessageForThisLibrary.js
import apolloFetch from '../apolloFetch';
import queries from './queries';

export const authorPortrait = name =>
  apolloFetch({ query: queries.authorPortrait, variables: { name } }).then(res => res.data.allPortraits[0]);
