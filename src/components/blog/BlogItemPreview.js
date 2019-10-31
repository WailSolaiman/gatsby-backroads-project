import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../Layout'
import BlogItemPreviewStyles from '../../css/single-blog.module.css'

const BlogItemPreview = ({ title, published, text }) => {
    const options = {
        renderNode: {
            'embedded-asset-block': node => {
                return (
                    <div className="rich">
                        <h3>this is awesome image</h3>
                        <img
                            width="400"
                            src={node.data.target.fields.file['en-US'].url}
                            alt={title}
                        />
                        <p>images provided by john doe</p>
                    </div>
                )
            },
        },
    }

    return (
        <Layout>
            <section className={BlogItemPreviewStyles.blog}>
                <div className={BlogItemPreviewStyles.center}>
                    <h1>{title}</h1>
                    <h4>published at: {published}</h4>
                    <article className={BlogItemPreviewStyles.post}>
                        {documentToReactComponents(text.json, options)}
                    </article>
                    <AniLink fade to="/blog" className="btn-primary">
                        all posts
                    </AniLink>
                </div>
            </section>
        </Layout>
    )
}

export default BlogItemPreview
