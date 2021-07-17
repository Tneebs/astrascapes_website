import React from 'react';

import PlansCard from './PlansCard'

const Plans = () => {
    let plansCards = [
        {
            id: 1,
            title: 'Bronze Plan',
            price: '$80',
            every: 'Every Month',
            package: 'Lawn Care Bronze Package',
            valid: 'Valid for 10 Months',
            work: ['Lawn Care Bronze Package', 'Bi-Weekly Maintenance', 'Mow', 'Edge', 'Weedeat', 'Blow off / Cleanup']
        },
        {
            id: 2,
            title: 'Silver Plan',
            price: '$35',
            every: 'Every Week',
            package: 'Lawn Care Silver Package',
            valid: 'Valid for 36 Weeks',
            work: ['Lawn Care Silver Package', 'Weekly Maintenance', 'Cut', 'Edge', 'Weedeat', 'Blow off / Cleanup']
        },
        {
            id: 3,
            title: 'Gold Plan',
            price: '$160',
            every: 'Every Month',
            package: 'Lawn Care Gold Package',
            valid: 'Valid for 12 Months',
            work: ['Lawn Care Gold Package', 'Mow', 'Edge', 'Weedeat', 'Blow off / Cleanup', 'Off Season Debris Removal', 'Off Season Tree Cleanup', 'Shrub / Small Tree Maintenance']
        },
        {
            id: 4,
            title: 'Bronze Pressure Wash',
            price: '$200',
            every: 'Every Month',
            package: 'A gentle cleanse of your walk ways and patio/porch',
            work: ['Bronze Package Pressure Washing', 'Gentle Chemical Application', 'Front Porch Cleaning', 'Walkways from Driveway to Front Porch']
        }
    ]


    return (
        <div className='plans-container'>
            <p className='plans-choose'> Choose your pricing plan </p>

            <div className='plans-card-container'>
                {plansCards.map(card => <PlansCard key={card.id} card={card} />)}
            </div>
        </div>
    )
}

export default Plans;