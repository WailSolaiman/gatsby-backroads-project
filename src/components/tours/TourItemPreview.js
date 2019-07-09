import React from 'react'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'
import Layout from '../Layout'
import StyledHero from '../StyledHero'
import TourSchedule from '../tours/TourSchedule'
import TourItemPreviewStyles from '../../css/template.module.css'

const TourItemPreview = ({
    name,
    price,
    start,
    days,
    country,
    description,
    journey,
    heroImage,
    defaultImages,
}) => {
    return (
        <Layout>
            <StyledHero img={heroImage.fluid} />
            <section className={TourItemPreviewStyles.template}>
                <div className={TourItemPreviewStyles.center}>
                    <div className={TourItemPreviewStyles.images}>
                        {defaultImages.map((image, index) => {
                            return (
                                <Img
                                    key={index}
                                    fluid={image.fluid}
                                    alt={name}
                                    className={TourItemPreviewStyles.image}
                                />
                            )
                        })}
                    </div>
                    <h2>{name}</h2>
                    <div className={TourItemPreviewStyles.info}>
                        <p>
                            <FaMoneyBillWave
                                className={TourItemPreviewStyles.icon}
                            />
                            starting from ${price}
                        </p>
                        <p>
                            <FaMap className={TourItemPreviewStyles.icon} />
                            Country: {country}
                        </p>
                    </div>
                    <h4>Starts on: {start}</h4>
                    <h4>Duration: {days} Days</h4>
                    <p className={TourItemPreviewStyles.desc}>{description}</p>
                    {journey.map((item, index) => {
                        return (
                            <TourSchedule
                                key={index}
                                day={item.day}
                                info={item.info}
                            />
                        )
                    })}
                    <AniLink fade to="/tours" className="btn-primary">
                        Back to tours
                    </AniLink>
                </div>
            </section>
        </Layout>
    )
}

export default TourItemPreview
