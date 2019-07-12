import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogList from '../components/blog/BlogList'
import StyledHero from '../components/StyledHero'

const Blog = ({ data }) => {
    return (
        <Layout>
            <StyledHero img={data.file.childImageSharp.fluid} />
            <BlogList />
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
