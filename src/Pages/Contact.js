import { FaMailBulk } from 'react-icons/fa';
import SocualMediaLinks from '../components/SocialmediaLinks';

function Contact() {
    return (
        <div id="contact" className="text-white mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen d:px-8 lg:px-8 relative z-20 bg-[rgba(46,46,46,0.69)] backdrop-blur">
            <div className="relative px-4 md:px-24 py-20 backdrop-blur rounded-3xl grid max-w-screen-xl gap-8 lg:grid-cols-2 sm:mx-auto bg-[rgba(0,0,0,0.53)]">
                <div className='flex flex-col justify-center'>
                    <h1 className="mb-10 font-sans text-3xl font-bold text-white sm:text-4xl">
                        Let's Connect!
                    </h1>
                    <h1 className="mb-4 text-xl pb-5 pr-5">Whether you have an idea for a project or just want to chat, feel free to shoot me an email!</h1>
                    <div className="flex items-center mb-4 text-left text-xl">
                        <FaMailBulk className="mr-3" />
                        <p>meetsuthar299@gmail.com</p>
                    </div>
                    <SocualMediaLinks/>
                </div>
                <div className=" p-4 text-xl">
                    <form method="POST" action="">
                        <label className="block mb-6">
                            <span className="">Your name</span>
                            <input
                                type="text"
                                name="name"
                                className="text-white p-2 block w-full mt-1 rounded-md focus:shadow-lg bg-[rgba(117,117,117,0.14)] shadow-inner"
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="">Email address</span>
                            <input
                                name="email"
                                type="email"
                                className="block p-2 text-white w-full mt-1 rounded-md focus:shadow-lg bg-[rgba(117,117,117,0.14)] shadow-inner "
                                required
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="">Message</span>
                            <textarea
                                name="message"
                                className="p-2 text-white block w-full mt-1] rounded-lg focus:shadow-lg bg-[rgba(117,117,117,0.14)] shadow-inner"
                                rows="3"
                            ></textarea>
                        </label>
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="text-lg text-white transition-all duration-200 ease-in-out hover:scale-110 bg-[rgba(255,255,255,0.21)] px-3 py-3 rounded-xl focus:bg-[rgba(139,139,139,0.21)] hover:shadow-2xl w-full"
                            >
                                Contact
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
