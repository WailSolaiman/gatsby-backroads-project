import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'

class Tours extends Component {
    render() {
        return (
            <Layout>
                <StyledHero img={this.props.data.file.childImageSharp.fluid} />
                <p>Tours Page</p>
            </Layout>
        )
    }
}

export const data = graphql`
    {
        file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default Tours
