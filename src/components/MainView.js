import React from 'react';
import CreationsView from './CreationsView';
import FeatureView from './FeatureView';

const MainView = () => {
    return (
        <div className='main'>
            <FeatureView />
            <CreationsView />
        </div>
    );
};

export default MainView;
