import React from 'react'

import { DatePicker } from "@y0c/react-datepicker";


//Styles
import './style.scss'


const Statistics = () => {
    return (
        <div className="statistics-container">
            <DatePicker dateFormat="DD-MM-YYYY" />
        </div>
    )
}

export default Statistics
