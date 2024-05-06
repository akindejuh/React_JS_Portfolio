import React from 'react';
import { Icons } from 'src/assets/icons/_icons';
import { Images } from 'src/assets/images/_images';

const AboutMe: React.FunctionComponent = () => {
    return (
        <section className="container relative max-w-[1000px] flex z-0 self-center mt-[12rem] mb-[10rem] max-lg:mt-[6rem] max-lg:mb-[4rem] max-lg:max-w-full max-lg:flex-col max-lg:px-4">
            <div className="w-1/2 max-lg:w-full">
                <p className="font-space-grotesk-400 mt-7">Hello there 👋</p>
                <h1 className="font-space-grotesk-700 mt-5 text-3xl max-w-[90%] text-black leading-10 max-lg:text-[25px]">
                    {
                        "Hi, I'm Oluwagbemiga, a Full Stack Mobile Developer with a knack for creativity and a great sense of humor!"
                    }
                </h1>
                <h2 className="font-space-grotesk-400 mt-6 max-w-[90%] text-[16px] text-[#333333] leading-7">
                    {
                        "I'm a dedicated Full Stack Mobile Developer with a track record of crafting intuitive, user-centric designs. I pride myself on delivering top-notch solutions tailored to each client's requirements. Let's collaborate to turn your ideas into reality swiftly."
                    }
                </h2>
                <button className="bg-black mt-10 max-lg:mt-7 h-[44px] px-3 w-[155px] flex items-center justify-center rounded transition-all duration-300 ease-in-out hover:bg-opacity-70">
                    <p className="font-space-grotesk-700 text-white">
                        See Work
                    </p>
                    <img
                        className="ml-2 w-[13px] h-[13px]"
                        src={Icons.arrowRight}
                    />
                </button>
            </div>
            <div className="w-1/2 max-lg:w-full flex item-center justify-center relative max-lg:mt-14">
                <img
                    src={Images.dp}
                    className="z-10 rounded-lg w-[400px] max-lg:w-[100%]"
                />
                <div className="max-lg:hidden absolute z-0 w-[32.5rem] h-[32.5rem] bg-black opacity-5 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
        </section>
    );
};

export default AboutMe;
