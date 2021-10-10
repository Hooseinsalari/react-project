import React, { Component } from 'react';

import Banner from './Banner';
import Cards from './Cards';
import Search from './Search';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Cards />
                <Search />
            </div>
        );
    }
}

export default LandingPage;