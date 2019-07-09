import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/Layout'
//import SimpleHero from '../components/SimpleHero'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/home/About'
import Services from '../components/home/Services'
import FeaturedTours from '../components/home/FeaturedTours'

const data = graphql`
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
const Home = () => {
    return (
        <Layout>
            <StaticQuery
                query={data}
                render={data => {
                    return (
                        <StyledHero
                            img={data.file.childImageSharp.fluid}
                            home="true"
                        >
                            <Banner
                                title="Continue Exploring"
                                info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum aperiam ipsum hic reiciendis deleniti voluptates!"
                            >
                                <AniLink fade to="/tours" className="btn-white">
                                    Explore Tours
                                </AniLink>
                            </Banner>
                        </StyledHero>
                    )
                }}
            />
            <About />
            <Services />
            <FeaturedTours />
        </Layout>
    )
}

export default Home
