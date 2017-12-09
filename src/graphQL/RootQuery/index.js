import Author from '../Author';
import Painting from '../Painting';
import { authors, poem } from '../../externalApis/poemsApi';
import RootQuery from './rootQuery.graphql';

const paintings = require('../../data/paintings');

export const resolvers = {
  RootQuery: {
    author(_, { name }) {
      return { name };
    },
    authors() {
      return authors().then(res => res.authors);
    },
    poem(_, { author, title }) {
      return poem(author, title);
    },
    painting() {
      return paintings[Math.floor(Math.random() * paintings.length)];
    },
  },
};

export default () => [RootQuery, Author, Painting];
