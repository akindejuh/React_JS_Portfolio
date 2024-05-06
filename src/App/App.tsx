import React from 'react';
import './app.scss';

import Header from 'src/components/header';
import AboutMe from 'src/components/about-me';
import MyWork from 'src/components/ny-work';

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <Header />
            <AboutMe />
            <MyWork />
        </div>
    );
};

export default App;
