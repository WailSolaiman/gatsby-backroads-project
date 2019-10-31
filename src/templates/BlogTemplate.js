import React from 'react'
import { graphql } from 'gatsby'
import BlogItemPreview from '../components/blog/BlogItemPreview'

const BlogTemplate = ({ data }) => {
    const { post } = data
    const { contentful_id, title, published, text } = post

    return (
        <BlogItemPreview
            key={contentful_id}
            title={title}
            published={published}
            text={text}
        />
    )
}

export default BlogTemplate

export const query = graphql`
    query($slug: String!) {
        post: contentfulPost(slug: { eq: $slug }) {
            contentful_id
            title
            published(formatString: "dddd MMM Do, YYYY")
            text {
                json
            }
        }
    }
`
