import React from 'react';
import WorkCard from 'src/components/work-card';

const MyWork: React.FunctionComponent = () => {
    return (
        <section className="container relative max-w-[1000px] flex flex-col self-center max-lg:max-w-full max-lg:px-4">
            <h1 className="font-space-grotesk-700 mt-5 text-[35px] text-black max-lg:text-[30px]">
                My Work
            </h1>
            <p className="font-space-grotesk-400 mt-2 max-w-[380px] text-[16px] text-[#333333] leading-6">
                {
                    "I've been busy past few years, working on some of the best projects. Here's a Glimpse!"
                }
            </p>
            <div className='flex flex-wrap justify-between gap-11 mt-14 max-lg:justify-around max-md:gap-16'>
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
            </div>
        </section>
    );
};

export default MyWork;
