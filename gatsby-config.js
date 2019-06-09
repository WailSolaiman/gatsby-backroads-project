module.exports = {
    siteMetadata: {
        title: 'BackRoads Website',
        description: 'Explore awesome worldwide Tours.',
        author: 'Wail Solaiman',
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-transition-link`,
    ],
}
