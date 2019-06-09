import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'

const Blog = ({ data }) => {
    return (
        <Layout>
            <StyledHero img={data.file.childImageSharp.fluid} />
            <p>BLOG Page</p>
        </Layout>
    )
}

export const data = graphql`
    {
        file(relativePath: { eq: "blogBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default Blog
