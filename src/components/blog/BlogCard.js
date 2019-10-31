import React from 'react'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import BlogCardStyles from '../../css/blog-card.module.css'

const BlogCard = ({ post }) => {
    const { title, image, slug, published } = post
    return (
        <section className={BlogCardStyles.blog}>
            <div className={BlogCardStyles.imgContainer}>
                <Image
                    fluid={image.fluid}
                    className={BlogCardStyles.img}
                    alt={title}
                />
                <AniLink
                    fade
                    to={`/blog/${slug}`}
                    className={BlogCardStyles.link}
                >
                    Read more
                </AniLink>
                <h6 className={BlogCardStyles.date}>{published}</h6>
            </div>
            <div className={BlogCardStyles.footer}>
                <h4>{title}</h4>
            </div>
        </section>
    )
}

export default BlogCard
