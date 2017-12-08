import schema from './graphQL/Schema';

const { GraphQLServer } = require('graphql-yoga');

const server = new GraphQLServer({ schema });

server.start(() => console.log('Server is running on localhost:4000'));
