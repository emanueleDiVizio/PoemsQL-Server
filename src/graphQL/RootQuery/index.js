import Author from '../Author';
import Painting from '../Painting';
import { authors, poem } from '../../externalApis/poemsApi';
import { randomPainting, paintings } from '../../externalApis/paintingsApi';
import RootQuery from './rootQuery.graphql';

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
    randomPainting() {
      return randomPainting();
    },
    paintings(_, { painter }) {
      return paintings(painter);
    },
  },
};

export default () => [RootQuery, Author, Painting];
