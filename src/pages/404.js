import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import NotFoundStyles from '../css/error.module.css'

const NotFound = () => {
    return (
        <Layout>
            <header className={NotFoundStyles.error}>
                <Banner title="oops, it is a dead end">
                    <AniLink fade to="/" className="btn-white">
                        Back to Home
                    </AniLink>
                </Banner>
            </header>
        </Layout>
    )
}

export default NotFound
