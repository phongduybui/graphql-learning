const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true, 
  })
);

app.listen(4000, () => console.log('Server listening at port 4000'));
