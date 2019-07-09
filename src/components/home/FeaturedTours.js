import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import TourItem from '../tours/TourItem'
import SectionTitle from '../SectionTitle'
import FeaturedToursStyles from '../../css/items.module.css'

const data = graphql`
    query {
        featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
            edges {
                node {
                    name
                    price
                    slug
                    start
                    days
                    country
                    contentful_id
                    images {
                        fluid {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

const FeaturedTours = () => {
    const response = useStaticQuery(data)
    const tours = response.featuredTours.edges
    return (
        <section className={FeaturedToursStyles.tours}>
            <SectionTitle title="featured" subtitle="tours" />
            <p>FeaturedTours</p>
            <div className={FeaturedToursStyles.center}>
                {tours.map(({ node: tour }) => {
                    return <TourItem key={tour.contentful_id} tour={tour} />
                })}
            </div>
            <AniLink fade to="/tours" className="btn-primary">
                All Tours
            </AniLink>
        </section>
    )
}

export default FeaturedTours
