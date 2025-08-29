import React from 'react';
import { work_done } from 'src/temp/projects';

const WorkDone: React.FunctionComponent = () => {
  return (
    <section id="my-work" className="container relative max-w-[1000px] flex flex-col z-0 self-center mt-[3rem] mb-[3rem] max-lg:mt-[1rem] max-lg:mb-[2rem] max-lg:max-w-full max-lg:px-4">
      <h1 className="font-space-grotesk-700 mt-5 text-[35px] text-black max-lg:text-[30px]">
        Work & Achievements
      </h1>
      {work_done.map(work => (
        <div key={work.title}>
          <p className="font-space-grotesk-400 mt-2 text-[16px] text-[#333333] leading-6">
            <b className="font-space-grotesk-500 mt-11">{work.title} - </b>{work.desc}
          </p>
        </div>
      ))}
    </section>
  );
};

export default WorkDone;
