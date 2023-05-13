module.exports = {
  siteMetadata: {
    title: `Legal-Niti `,
    description: `Leagal Niti where ai meets law to deliver you excellent services.`,
    author: `@r-ichard`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -70
      }
    }
  ],
}
