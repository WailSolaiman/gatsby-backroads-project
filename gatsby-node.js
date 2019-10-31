exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
        query {
            allContentfulTour {
                edges {
                    node {
                        slug
                    }
                }
            }
            allContentfulPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    data.allContentfulTour.edges.forEach(edge => {
        const slug = edge.node.slug
        actions.createPage({
            path: `/tours/${slug}`,
            component: require.resolve(`./src/templates/TourTemplate.js`),
            context: { slug: slug },
        })
    })

    data.allContentfulPost.edges.forEach(edge => {
        const slug = edge.node.slug
        actions.createPage({
            path: `/blog/${slug}`,
            component: require.resolve(`./src/templates/BlogTemplate.js`),
            context: { slug: slug },
        })
    })
}
