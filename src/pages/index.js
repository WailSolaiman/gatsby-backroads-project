import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
//import SimpleHero from '../components/SimpleHero'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

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
                                <Link to="/tours" className="btn-white">
                                    Explore Tours
                                </Link>
                            </Banner>
                        </StyledHero>
                    )
                }}
            />
            <About />
            <Services />
        </Layout>
    )
}

export default Home
