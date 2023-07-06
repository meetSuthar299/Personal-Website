import react from 'react';
import { FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';

function SocualMediaLinks() {
    return (
        <div className="flex items-center mt-1 space-x-3 content-center">
            <a href="https://www.instagram.com/meetsuthar/" className='text-2xl text-white transition-all hover:scale-125 shadow-xl'>
                <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/meetsuthar/" className='text-2xl text-white transition-all hover:scale-125 shadow-xl'>
                <FaLinkedin />
            </a>
            <a href="https://github.com/meetSuthar299" className='text-2xl text-white transition-all hover:scale-125 shadow-xl'>
                <FaGithub />
            </a>
        </div>

    )
}

export default SocualMediaLinks;
