import React from 'react';

const MyWork: React.FunctionComponent = () => {
    return (
        <section className="container relative max-w-[1000px] flex flex-col self-center max-lg:max-w-full max-lg:px-4">
            <h1 className="font-space-grotesk-700 mt-5 text-3xl text-black max-lg:text-[25px]">
                My Work
            </h1>
            <p className="font-space-grotesk-400 mt-2 max-w-[380px] text-[16px] text-[#333333] leading-7">
                {
                    "I've been busy past few years, working on some of the best projects. Here's a Glimpse!"
                }
            </p>
        </section>
    );
};

export default MyWork;
