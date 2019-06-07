import React from 'react'
import SectionTitle from '../SectionTitle'
import AboutStyles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const About = () => {
    return (
        <section className={AboutStyles.about}>
            <SectionTitle title="about" subtitle="us" />
            <div className={AboutStyles.aboutCenter}>
                <article className={AboutStyles.aboutImg}>
                    <div className={AboutStyles.imgContainer}>
                        <img src={img} alt="about company" />
                    </div>
                </article>
                <article className={AboutStyles.aboutInfo}>
                    <h4>explore the difference</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nulla doloribus enim necessitatibus?
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nulla doloribus enim necessitatibus?
                    </p>
                    <button type="button" className="btn-primary">
                        read more
                    </button>
                </article>
            </div>
        </section>
    )
}

export default About
