import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SectionTitle from '../SectionTitle'
import AboutStyles from '../../css/about.module.css'

const data = graphql`
    {
        fluidImg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const About = () => {
    const { fluidImg } = useStaticQuery(data)
    return (
        <section className={AboutStyles.about}>
            <SectionTitle title="about" subtitle="us" />
            <div className={AboutStyles.aboutCenter}>
                <article className={AboutStyles.aboutImg}>
                    <div className={AboutStyles.imgContainer}>
                        <Img
                            fluid={fluidImg.childImageSharp.fluid}
                            alt="about company"
                        />
                    </div>
                </article>
                <article className={AboutStyles.aboutInfo}>
                    <h4>explore the difference</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nulla doloribus enim necessitatibus?
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nulla doloribus enim necessitatibus?
                    </p>
                    <button type="button" className="btn-primary">
                        read more
                    </button>
                </article>
            </div>
        </section>
    )
}

export default About
