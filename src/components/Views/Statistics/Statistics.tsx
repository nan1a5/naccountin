import React from 'react';
import './Statistics.scss';

const Statistics: React.FC = () => {
    return (
        <div className='Statistics'>
            <div className="line-chart"></div>
            <div className="statitics"></div>
            <div className="pie-chart"></div>
        </div>
    )
}

export default Statistics;