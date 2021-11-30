import React from 'react';

const CreationCard = ({ title, name }) => {
    return (
        <div className={ `creation-card--${name} creation-card` }>
            <h3 className='creation-card__title ff-josefin-sans'>
                { title }
            </h3>
        </div>
    );
};

export default CreationCard;
