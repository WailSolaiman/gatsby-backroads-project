import React from 'react'
import Image from 'gatsby-image'
import TourStyles from '../../css/tour.module.css'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Tour = ({ tour }) => {
    const { name, price, country, days, slug, images } = tour

    let mainImage = images[0].fluid

    return (
        <article className={TourStyles.tour}>
            <div className={TourStyles.imgContainer}>
                <Image
                    fluid={mainImage}
                    className={TourStyles.img}
                    alt="single tour"
                />
                <AniLink fade className={TourStyles.link} to={`/tours/${slug}`}>
                    details
                </AniLink>
            </div>
            <div className={TourStyles.footer}>
                <h3>{name}</h3>
                <div className={TourStyles.info}>
                    <h4 className={TourStyles.country}>
                        <FaMap className={TourStyles.icon} />
                        {country}
                    </h4>
                    <div className={TourStyles.details}>
                        <h6>{days} days</h6>
                        <h6>from ${price}</h6>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Tour
