// author.js
import { poemsForAuthor } from '../../externalApis/poemsApi';
import { authorPortrait } from '../../externalApis/graphQl/portraits/portraitApi';
import Author from './author.graphql';
import Poem from '../Poem';

export const resolvers = {
  Author: {
    poems(author) {
      return poemsForAuthor(author.name);
    },
    portrait(author) {
      return authorPortrait(author.name);
    },
  },
};

export default () => [Author, Poem];
