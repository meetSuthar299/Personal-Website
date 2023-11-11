import webDevImg1 from "../Assets/images/webDevImg-1.jpg"
import webDevImg2 from "../Assets/images/webDevImg-2.png"
import webDevImg3 from "../Assets/images/webDevImg-3.png"
import React from 'react';

export default function WebDevService() {
    return (
        <div className="relative px-4 py-24 lg:py-20 backdrop-blur rounded-3xl bg-[rgba(0,0,0,0.53)]" >
            <div className="max-w-xl mb-10 sm:text-center md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                    Web Application Development
                </h2>
            </div>
            <div className="grid max-w-screen-xl gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="flex flex-col justify-center">
                    <div className="flex">
                        <div className="mr-4">
                            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                                <svg
                                    className="w-8 h-8 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold leading-5 text-white text-2xl pb-3">
                                Expert Web Application Development
                            </h6>
                            <p className="text-sm text-white">
                                Having a solid background in computer science, my enthusiasm lies in the field of web design and development,
                                with a keen interest in mobile app development. As I grow as a developer, my ultimate goal is to write clean
                                and readable code for every software solution.
                            </p>
                            <hr className="w-full my-6 border-gray-300" />
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <h6 className="mb-2 font-semibold leading-5 text-2xl text-white pb-3">
                                Seamless User Experience
                            </h6>
                            <p className="text-sm text-white">
                                Design encompasses the internal functionality of a product as well as the overall user experience.
                                I prioritize providing a seamless and intuitive user experience in all the web applications I develop.
                                From responsive designs to optimized performance, I ensure that users can effortlessly navigate and interact
                                with the application.
                            </p>
                            <hr className="w-full my-6 border-gray-300" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mr-4">
                            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                                <svg
                                    className="w-8 h-8 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold leading-5 text-2xl text-white pb-3">
                                Customized Solutions
                            </h6>
                            <p className="text-sm text-white">
                                I offer personalized solutions by closely collaborating with clients, understanding their needs,
                                and delivering custom-built web applications with custom CSS designs that align with their vision and objectives. With a strong
                                focus on clean code and scalability, I create applications that are flexible and adaptable to future growth.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <img
                        className="object-cover w-full h-56 col-span-2 rounded-xl shadow-lg"
                        src={webDevImg2}
                        alt=""
                        loading="lazy"
                        
                    />
                    <img
                        className="object-cover w-full h-48 rounded-xl shadow-lg"
                        src={webDevImg1}
                        alt=""
                        loading="lazy"
                    />
                    <img
                        className="object-cover w-full h-48 rounded-xl shadow-lg"
                        src={webDevImg3}
                        alt=""
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};