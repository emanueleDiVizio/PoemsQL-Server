import Author from '../Author';
import RootQuery from './rootQuery.graphql';

export const resolvers = {
  RootQuery: {
    author(_, { name }) {
      return { name };
    },
    authors() {
      return [];
    },
  },
};

export default () => [RootQuery, Author];
