import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'

const Contact = ({ data }) => {
    return (
        <Layout>
            <StyledHero img={data.file.childImageSharp.fluid} />
            <p>Contact Page</p>
        </Layout>
    )
}

export const data = graphql`
    {
        file(relativePath: { eq: "connectBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default Contact
