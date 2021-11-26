module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.liamjones.com',
    title: 'Liam Jones',
    author: '@LiamJones',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Open Sans:bold', 'Open Sans:semibold'],
        },
      },
    },
  ],
}
