import Author from '../Author';
import Painting from '../Painting';
import { authors, poem } from '../../externalApis/poemsApi';
import { painting, paintings } from '../../externalApis/paintings/paintingsApi';
import RootQuery from './rootQuery.graphql';

export const resolvers = {
  RootQuery: {
    author(_, { name }) {
      return { name };
    },
    authors(_, { size, offset }) {
      return authors().then(res =>
        res.authors.slice(offset, offset + size).map(name => ({ name })));
    },
    poem(_, { author, title }) {
      return poem(author, title);
    },
    painting(_, { title }) {
      return painting(title);
    },
    paintings(_, { painter }) {
      return paintings(painter);
    },
  },
};

export default () => [RootQuery, Author, Painting];
