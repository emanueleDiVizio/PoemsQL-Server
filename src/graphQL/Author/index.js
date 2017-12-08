// author.js

import Author from './author.graphql';
import Poem from '../Poem';

export const resolvers = {
  Author: {
    poems(author) {
      return [];
    },
    name(author) {
      return author.name;
    },
  },
};

export default () => [Author, Poem];
