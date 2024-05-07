import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from 'src/components/header';
import AboutMe from 'src/sections/about-me';
import MyWork from 'src/sections/ny-work';

const App: React.FunctionComponent = () => {
  return (
    <div className="overflow-y-hidden">
      <Header />
      <div className="flex flex-col h-full">
        <AboutMe />
        <MyWork />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
