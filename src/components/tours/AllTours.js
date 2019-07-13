import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import TourList from './TourList'

const allTours = graphql`
    query {
        tours: allContentfulTour {
            edges {
                node {
                    name
                    price
                    slug
                    start
                    featured
                    days
                    country
                    contentful_id
                    childrenContentfulTourJourneyJsonNode {
                        day
                        info
                    }
                    images {
                        fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyContentfulFluid_noBase64
                        }
                    }
                }
            }
        }
    }
`

const AllTours = () => {
    const { tours } = useStaticQuery(allTours)
    return <TourList tours={tours} />
}

export default AllTours
