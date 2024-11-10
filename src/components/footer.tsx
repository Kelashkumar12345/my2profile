import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-500 text-white py-6 px-4 text-center mt-5">
            <p className="text-sm md:text-base mb-4">© {new Date().getFullYear()} Deewan Kelash Kumar. All Rights Reserved.</p>
            <div className="flex justify-center gap-6 text-xl">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="hover:text-blue-300 transition-colors duration-300" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub className="hover:text-gray-300 transition-colors duration-300" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter className="hover:text-blue-400 transition-colors duration-300" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

