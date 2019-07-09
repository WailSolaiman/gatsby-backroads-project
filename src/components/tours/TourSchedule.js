import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import TourScheduleStyles from '../../css/day.module.css'

const TourSchedule = ({ day, info }) => {
    const [showInfo, setInfo] = useState(false)
    const toggleInfo = () => {
        setInfo(showInfo => !showInfo)
    }

    return (
        <article className={TourScheduleStyles.day}>
            <h4>
                {day}
                <button className={TourScheduleStyles.btn} onClick={toggleInfo}>
                    <FaAngleDown />
                </button>
            </h4>
            {showInfo && <p>{info}</p>}
        </article>
    )
}

export default TourSchedule
