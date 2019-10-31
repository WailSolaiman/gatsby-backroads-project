import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BlogCard from './BlogCard'
import SectionTitle from '../SectionTitle'
import BlogListStyles from '../../css/blog.module.css'

const getPosts = graphql`
    {
        posts: allContentfulPost(sort: { fields: published, order: DESC }) {
            edges {
                node {
                    contentful_id
                    title
                    image {
                        fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyContentfulFluid_noBase64
                        }
                    }
                    slug
                    published(formatString: "dddd MMM Do, YYYY")
                }
            }
        }
    }
`

const BlogList = () => {
    const { posts } = useStaticQuery(getPosts)

    return (
        <section className={BlogListStyles.blog}>
            <SectionTitle title="our" subtitle="blog" />
            <div className={BlogListStyles.center}>
                {posts.edges.map(({ node: post }) => {
                    return <BlogCard key={post.contentful_id} post={post} />
                })}
            </div>
        </section>
    )
}

export default BlogList
