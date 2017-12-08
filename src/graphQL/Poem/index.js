import schema from './poem.graphql';

export const resolvers = {
  Poem: {
    author(poem) {
      return poem.author;
    },
    title(poem) {
      return poem.title;
    },
    lines(poem) {
      return poem.lines;
    },
  },
};

export default schema;
