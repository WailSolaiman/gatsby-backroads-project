import React from 'react'
import SectionTitle from '../SectionTitle'
import ServicesStyles from '../../css/services.module.css'
import services from '../../constants/services'

const Services = () => {
    return (
        <section className={ServicesStyles.services}>
            <SectionTitle title="our" subtitle="services" />
            <div className={ServicesStyles.center}>
                {services.map((item, index) => {
                    return (
                        <article key={index} className={ServicesStyles.service}>
                            <span>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
