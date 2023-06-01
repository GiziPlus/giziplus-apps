const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register({
    plugin: require('hapi-mongodb'),
    options: {
      url: 'mongodb+srv://{YOUR-USERNAME}:{YOUR-PASSWORD}@main.zxsxp.mongodb.net/sample_mflix?retryWrites=true&w=majority',
      settings: {
        useUnifiedTopology: true,
      },
      decorate: true,
    },
  });

  // Get all movies
  server.route({
    method: 'GET',
    path: '/movies',
    handler: (req, h) => 'List all the movies',
  });

  // Add a new movie to the database
  server.route({
    method: 'POST',
    path: '/movies',
    handler: (req, h) => 'Add new movie',
  });

  // Get a single movie
  server.route({
    method: 'GET',
    path: '/movies/{id}',
    handler: (req, h) => 'Return a single movie',
  });

  // Update the details of a movie
  server.route({
    method: 'PUT',
    path: '/movies/{id}',
    handler: (req, h) => 'Update a single movie',
  });

  // Delete a movie from the database
  server.route({
    method: 'DELETE',
    path: '/movies/{id}',
    handler: (req, h) => 'Delete a single movie',
  });

  // Search for a movie
  server.route({
    method: 'GET',
    path: '/search',
    handler: (req, h) => 'Return search results for the specified term',
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
