import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import NotFoundStyles from '../css/error.module.css'

const NotFound = () => {
    return (
        <Layout>
            <header className={NotFoundStyles.error}>
                <Banner title="oops, it is a dead end">
                    <Link to="/" className="btn-white">
                        Back to Home
                    </Link>
                </Banner>
            </header>
        </Layout>
    )
}

export default NotFound
