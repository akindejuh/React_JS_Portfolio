import React from 'react';
import { Icons } from 'src/assets/icons/_icons';
import { Images } from 'src/assets/images/_images';
import { scrollToSection } from 'src/utils/helper';

const AboutMe: React.FunctionComponent = () => {
    return (
        <section id="about-me" className="container relative max-w-[1000px] flex z-0 self-center mt-[9rem] mb-[10px] max-lg:mt-[6rem] max-lg:mb-[2rem] max-lg:max-w-full max-lg:flex-col max-lg:px-4">
            <div className="w-1/2 max-lg:w-full">
                <p className="font-space-grotesk-400 mt-7">Hello there 👋</p>
                <h1 className="font-space-grotesk-700 mt-5 text-3xl max-w-[90%] text-black leading-10 max-lg:text-[25px]">
                    {"Hi, I’m Oluwagbemiga — I build mobile and web apps that don’t just work, they win."}
                </h1>
                <h2 className="font-space-grotesk-400 mt-6 max-w-[90%] text-[16px] text-[#333333] leading-7">
                    {"I’m a Full Stack Mobile/Web Developer with 4 years of experience delivering fast, intuitive, and user-focused solutions. From sleek interfaces to scalable backends, I ship products that solve problems and create impact. Let’s bring your next idea to life — efficiently and exceptionally."}
                </h2>
                <button className="bg-black mt-10 max-lg:mt-7 h-[44px] px-3 w-[155px] flex items-center justify-center rounded transition-all duration-300 ease-in-out hover:bg-opacity-70">
                    <p onClick={() => scrollToSection('my-work', 120)} className="font-space-grotesk-700 text-white">
                        See Work
                    </p>
                    <img
                        className="ml-2 w-[15px] h-[15px]"
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
