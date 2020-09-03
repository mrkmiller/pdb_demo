const {singleInstances} = require('vue-cli-plugin-drupal-pdb');

// Set this to the path in Drupal where your pdb_vue 'dist' directory lives.
const drupalPath = '/modules/pdb_demo/pdb_vue/dist/';

module.exports = {
  // Disable filename hashing in Drupal.
  filenameHashing: false,
  // Generate individual files for each instance.
  pages: singleInstances(),
  // Set the public path so images will work.
  publicPath: process.env.NODE_ENV === 'production' ? drupalPath : '/'
}
