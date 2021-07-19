import React from 'react';

import PlansCard from './PlansCard'

const Plans = () => {
    let plansCards = [
        {
            id: 1,
            title: 'Bronze Plan',
            price: '$40',
            every: 'Bi-Weekly',
            package: 'Lawn Care Bronze Package',
            valid: 'No Contract',
            work: ['Lawn Care Bronze Package', 'Bi-Weekly Maintenance', 'Mow', 'Edge', 'Weedeat', 'Blow off / Cleanup']
        },
        {
            id: 2,
            title: 'Silver Plan',
            price: '$35',
            every: 'Weekly',
            package: 'Lawn Care Silver Package',
            valid: 'No Contract',
            work: ['Lawn Care Silver Package', 'Weekly Maintenance', 'Cut', 'Edge', 'Weedeat', 'Blow off / Cleanup']
        },
        {
            id: 3,
            title: 'Gold Plan',
            price: '$160',
            every: 'Every Month',
            package: 'Lawn Care Gold Package',
            valid: '12 Month Contract',
            work: ['Lawn Care Gold Package', 'Mow', 'Edge', 'Weedeat', 'Blow off / Cleanup', 'Off Season Debris Removal', 'Off Season Tree Cleanup', 'Shrub / Small Tree Maintenance', 'Front Windows Washed']
        },
        {
            id: 4,
            title: 'All-in-One Pressure Washing',
            price: '$149.99',
            package: 'A gentle cleanse of your walk ways and front patio/porch. Price is based on minimum, additional Pressure Washing work can be fulfilled with a consultation.',
            work: ['Bronze Package Pressure Washing', 'Gentle Chemical Application', 'Front Porch Cleaning', 'Walkways from Driveway to Front Porch', 'Additional Power Washing subject to Consultation']
        },
        {
            id: 5,
            title: 'All-in-One Window Washing',
            price: '$49.99',
            package: 'Thorough cleaning and shine on front windows. Price is based on minimum, additional Window Washing work can be fulfilled with a consultation.',
            work: ['Front Window Washing', 'Gentle Chemical Application', 'Clean and Shine', 'Additional Window Washing subject to Consultation']
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