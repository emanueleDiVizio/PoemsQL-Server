import schema from './painting.graphql';

export const resolvers = {
  Painting: {
    painter(painting) {
      return painting.author;
    },
    title(painting) {
      return painting.title;
    },
    thumbnail(painting) {
      return painting.image;
    },
  },
};

export default schema;
