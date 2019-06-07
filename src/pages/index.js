import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

const Home = () => {
    return (
        <Layout>
            <SimpleHero>
                <Banner
                    title="Continue Exploring"
                    info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum aperiam ipsum hic reiciendis deleniti voluptates!"
                >
                    <Link to="/tours" className="btn-white">
                        Explore Tours
                    </Link>
                </Banner>
            </SimpleHero>
            <About />
            <Services />
        </Layout>
    )
}

export default Home
