import Author from '../Author';
import { authors } from '../../poemsApi';
import RootQuery from './rootQuery.graphql';

export const resolvers = {
  RootQuery: {
    author(_, { name }) {
      return { name };
    },
    authors() {
      return authors().then(res => res.authors);
    },
  },
};

export default () => [RootQuery, Author];
