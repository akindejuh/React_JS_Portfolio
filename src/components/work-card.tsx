import React from 'react';
import { Icons } from 'src/assets/icons/_icons';

//! Test
import projectCard from 'src/temp/project-card.png';

export interface IWorkCard {
  project_name: string;
  project_desc: string;
  project_link: string;
}

const WorkCard: React.FunctionComponent<IWorkCard> = ({
  project_name,
  project_desc,
  project_link,
}) => {
  const open_link = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Invalid URL!');
    }
  };
  return (
    <div className="max-w-[300px] max-md:max-w-full">
      <img className="w-full rounded-lg" src={projectCard} />
      <h1 className="mt-5 font-space-grotesk-700 text-2xl truncate w-full">
        {project_name || ''}
      </h1>
      <p className="mt-1 leading-6 text-[14px] text-[#333333] font-space-grotesk-400 truncate w-full">
        {project_desc || ''}
      </p>
      <button
        onClick={() => open_link(project_link)}
        className="bg-black mt-5 max-lg:mt-7 h-[44px] px-3 w-[155px] flex items-center justify-center rounded transition-all duration-300 ease-in-out hover:bg-opacity-70">
        <p className="font-space-grotesk-700 text-white">View Project</p>
        <img className="ml-2 w-[15px] h-[15px]" src={Icons.arrowRight} />
      </button>
    </div>
  );
};

export default WorkCard;
