import app from './app';

import { PORT } from './config';

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

// import app from './app';

// import { PORT } from './config';

// import { ApolloServer } from 'apollo-server-express';

// const schema = ...
// const resolvers = ...

// const server = new ApolloServer({
//   typeDefs: schema,
//   resolvers,
// });

// server.applyMiddleware({ app, path: '/graphql' });

// app.listen(PORT, () => {
//   console.log(`Apollo Server on http://localhost:${PORT}/graphql`);
// });

// // app.listen(PORT, () => {
// //   console.log(`Server listening at http://localhost:${PORT}`);
// // });
