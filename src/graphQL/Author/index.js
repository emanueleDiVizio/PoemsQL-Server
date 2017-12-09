// author.js
import { poemsForAuthor } from '../../externalApis/poemsApi';
import Author from './author.graphql';
import Poem from '../Poem';

export const resolvers = {
  Author: {
    poems(author) {
      return poemsForAuthor(author.name);
    },
    name(author) {
      return author.name;
    },
  },
};

export default () => [Author, Poem];
