import React, { Component } from 'react'
import TourItem from './TourItem'
import SectionTitle from '../SectionTitle'
import TourListStyles from '../../css/items.module.css'

export default class TourList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tours: [],
            filteredTorus: [],
        }
    }

    componentDidMount() {
        this.setState({
            tours: this.props.tours.edges,
            filteredTorus: this.props.tours.edges,
        })
    }

    render() {
        return (
            <section className={TourListStyles.tours}>
                <SectionTitle title="our" subtitle="tours" />
                <div className={TourListStyles.center}>
                    {this.state.filteredTorus.map(({ node: tour }) => {
                        return <TourItem key={tour.contentful_id} tour={tour} />
                    })}
                </div>
            </section>
        )
    }
}
