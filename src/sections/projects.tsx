import React from 'react';
import WorkCard from 'src/components/work-card';
import {
  backend_work,
  mobile_work,
  oss_work,
  rust_work,
  web_work,
} from 'src/temp/projects';

const Projects: React.FunctionComponent = () => {
  return (
    <section id="my-projects" className="container relative max-w-[1000px] flex flex-col self-center max-lg:max-w-full max-lg:px-4">
      <h1 className="font-space-grotesk-700 mt-5 text-[35px] text-black max-lg:text-[30px]">
        Projects
      </h1>
      <p className="font-space-grotesk-400 text-[16px] text-[#333333] leading-6">Here is a glimpse of some of the projects I have worked on.</p>

      <h2 className="font-space-grotesk-700 text-[24px] mt-8 mb-2 ml-1 text-[#333333]">
        Mobile - React Native
      </h2>
      <div className="flex flex-wrap justify-start gap-6 mb-5 max-lg:justify-around max-md:gap-6">
        {mobile_work.map(work => (
          <WorkCard
            key={work.project_desc}
            project_desc={work.project_desc}
            project_link={work.project_link}
            project_name={work.project_name}
            project_dp={work.project_dp}
          />
        ))}
      </div>

      <h2 className="font-space-grotesk-700 text-[24px] mt-8 mb-2 ml-1 text-[#333333]">
        OpenSource Projects
      </h2>
      <div className="flex flex-wrap justify-start gap-6 mb-5 max-lg:justify-around max-md:gap-6">
        {oss_work.map(work => (
          <WorkCard
            key={work.project_desc}
            project_desc={work.project_desc}
            project_link={work.project_link}
            project_name={work.project_name}
          />
        ))}
      </div>

      <h2 className="font-space-grotesk-700 text-[24px] mt-8 mb-2 ml-1 text-[#333333]">
        Web - React.js
      </h2>
      <div className="flex flex-wrap justify-stretch gap-6 mb-5 max-lg:justify-around max-md:gap-6">
        {web_work.map(work => (
          <WorkCard
            key={work.project_desc}
            project_desc={work.project_desc}
            project_link={work.project_link}
            project_name={work.project_name}
            project_dp={work.project_dp}
          />
        ))}
      </div>

      <h2 className="font-space-grotesk-700 text-[24px] mt-8 mb-2 ml-1 text-[#333333]">
        Backend - Node.js
      </h2>
      <div className="flex flex-wrap justify-stretch gap-6 mb-5 max-lg:justify-around max-md:gap-6">
        {backend_work.map(work => (
          <WorkCard
            key={work.project_desc}
            project_desc={work.project_desc}
            project_link={work.project_link}
            project_name={work.project_name}
          />
        ))}
      </div>

      <h2 className="font-space-grotesk-700 text-[24px] mt-8 mb-2 ml-1 text-[#333333]">
        Rust 👀
      </h2>
      <div className="flex flex-wrap justify-stretch gap-6 mb-5 max-lg:justify-around max-md:gap-6">
        {rust_work.map(work => (
          <WorkCard
            key={work.project_desc}
            project_desc={work.project_desc}
            project_link={work.project_link}
            project_name={work.project_name}
          />
        ))}
      </div>

      <h1 className="font-space-grotesk-700 text-[24px] mt-11 mb-2 text-[#333333]">
        Any Authentication Required:
      </h1>
      <p className="san-serif text-[15px] text-black">
        <b className="mr-1">Username:</b>
        {'agmadev10@gmail.com'}
      </p>
      <p className="san-serif text-[15px] text-black">
        <b className="mr-1">Password:</b>
        {'Software10@'}
      </p>

      <h1 className="font-space-grotesk-700 text-[24px] mt-16 mb-1 text-[#333333]">
        Note to Recruiters:
      </h1>
      <p className="font-space-grotesk-400 text-[15px] text-black">
        {
          "Thank you for taking the time to review my portfolio. I would like to bring to your attention a potential issue that may arise when accessing my projects hosted on free servers like OnRender. Due to the nature of these free hosting services, servers may become inactive after a period of inactivity, leading to a loading state for my applications. If you encounter such a situation, I kindly request that you wait for 2-3 minutes, then reopen the application. Typically, the server should be back online by then, allowing you to experience the full functionality of the application. I apologize for any inconvenience this may cause and appreciate your understanding."
        }
      </p>
      <p className="font-space-grotesk-400 text-[15px] mt-2 text-black">
        {'Best regards,'}
      </p>
      <p className="font-space-grotesk-500 text-[15px] text-black">
        {'Akindeju Oluwagbemiga Michael'}
      </p>
    </section>
  );
};

export default Projects;
