import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import { resolvers as AuthorResolvers } from '../Author';
import RootQuery, { resolvers as RootQueryResolvers } from '../RootQuery';
import { resolvers as PoemResolvers } from '../Poem';
import SchemaDefinition from './schema.graphql';

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery],
  resolvers: merge(PoemResolvers, AuthorResolvers, RootQueryResolvers),
});
