import { createApolloFetch } from 'apollo-fetch';
import queries from './queries';

const uri = 'https://api.graph.cool/simple/v1/cjb13kudd0wdw0181jrw8e7to';
const apolloFetch = createApolloFetch({ uri });

const randomFromArray = array => array[Math.floor(Math.random() * array.length)];
const allPaintings = () =>
  apolloFetch({ query: queries.allPaintingsQuery }).then(res => res.data.allPaintings);

const randomPainting = () => allPaintings().then(randomFromArray);

const paintingsByPainter = painter =>
  apolloFetch({ query: queries.painterPaintings, variables: { painter } }).then(res => res.data.allPaintings);

const paintingByTitle = title =>
  apolloFetch({ query: queries.painting, variables: { title } }).then(res => res.data.allPaintings[0]);

export const painting = (title) => {
  if (title) {
    return paintingByTitle(title);
  }
  return randomPainting();
};

export const paintings = (painter) => {
  if (painter) {
    return paintingsByPainter(painter);
  }
  return allPaintings();
};
