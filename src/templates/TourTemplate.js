import React from 'react'
import { graphql } from 'gatsby'
import TourItemPreview from '../components/tours/TourItemPreview'

export default ({ data }) => {
    const { tour } = data
    const {
        name,
        price,
        start,
        days,
        country,
        contentful_id,
        description: { description },
        journey,
        images,
    } = tour
    const [heroImage, ...defaultImages] = images
    return (
        <TourItemPreview
            key={contentful_id}
            name={name}
            price={price}
            start={start}
            days={days}
            country={country}
            description={description}
            journey={journey}
            heroImage={heroImage}
            defaultImages={defaultImages}
        />
    )
}

export const query = graphql`
    query($slug: String!) {
        tour: contentfulTour(slug: { eq: $slug }) {
            name
            price
            start(formatString: "dddd MMM Do, YYYY")
            days
            country
            contentful_id
            description {
                description
            }
            journey {
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
`
