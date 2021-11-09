import React from 'react';
import CardList from './cards';
import BodyHeader from './body-header';

import './Body.css';

class Body extends React.Component {
    render() {
        return (
            <div className="divBody">
                <BodyHeader />
                <CardList />
            </div>
        );
    }
}

export default Body;
