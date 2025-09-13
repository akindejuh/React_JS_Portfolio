import React from 'react';
import { Icons } from 'src/assets/icons/_icons';

export interface IWorkCard {
  project_name: string;
  project_desc: string;
  project_link: string;
  project_dp?: any;
}

const WorkCard: React.FunctionComponent<IWorkCard> = ({
  project_name,
  project_desc,
  project_link,
  // project_dp,
}) => {
  const open_link = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Invalid URL!');
    }
  };
  return (
    <div className="min-w-[300px] w-full max-md:max-w-full flex bg-[#F5F5F5] rounded-lg p-5">
      <div className='flex flex-col'>
        <h1 className="font-space-grotesk-500 text-xl w-full">
          {project_name || ''}
        </h1>

        <p className="mt-1 leading-6 text-[14px] text-[#333333] font-space-grotesk-400 w-full mb-10">
          {project_desc || ''}
        </p>

        <button
          onClick={() => open_link(project_link)}
          className="bg-gray-600 mt-[auto] max-lg:mt-7 h-[44px] px-3 w-[155px] flex items-center justify-center rounded transition-all duration-300 ease-in-out hover:bg-opacity-70">
          <p className="font-space-grotesk-500 text-white">View Project</p>
          <img className="ml-2 w-[15px] h-[15px]" src={Icons.arrowRight} />
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
