module.exports = {
  siteMetadata: {
    title: 'Cosmic JS Gatsby Starter Localization',
    nav: [
      { slug: '', name: 'Home' },
      { slug: 'about', name: 'About' },
      { slug: 'contact', name: 'Contact' },
      { slug: 'not-found', name: 'Not Found' },
    ],
    languages: [
      { slug: '', name: 'English' },
      { slug: 'de', name: 'German' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: process.env.COSMIC_BUCKET || `node-starter-localization`,
        objectTypes: [`pages`],
        // If you have enabled read_key to fetch data (optional).
        apiAccess: {
          read_key: ``,
        }
      }
    },
  ],
}
