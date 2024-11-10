export default function Contact() {
    return (
        <section className="bg-blue-500 text-white py-12 px-6 mt-5">
            <div className="container mx-auto max-w-5xl flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
                
                {/* Left Section: Contact Information */}
                <div className="md:w-1/2 space-y-6 ">
                    <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
                    <p className="text-lg">
                        I’d love to hear from you! Whether you have a question, an opportunity, or just want to say hello, feel free to reach out.
                    </p>
                    
                    <div className="space-y-4 text-lg">
                        <div>
                            <p>Email: <span className="font-semibold">deewankelash@gmail.com.com</span></p>
                        </div>
                        <div>
                            <p>Phone: <span className="font-semibold">03342885311</span></p>
                        </div>
                        <div>
                            <p>Location: <span className="font-semibold">Karachi, Pakistan</span></p>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-6 mt-4">
                        <a href="https://www.linkedin.com/in/deewankelashkumar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            LinkedIn
                        </a>
                        <a href="https://github.com/deewankelash" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            GitHub
                        </a>
                        <a href="https://twitter.com/deewankelash" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            Twitter
                        </a>
                    </div>
                </div>

                {/* Right Section: Contact Form */}
                <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-gray-800">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-500">Send Me a Message</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}



// export default function Contact() {
//     return (
//         <section className="bg-blue-500 text-white py-10 px-6 space-y-8 text-center mt-5">
//             {/* Contact Heading */}
//             <h2 className="text-3xl md:text-5xl font-bold mt-5">Contact Me</h2>
//             <p className="text-lg md:text-xl max-w-2xl mx-auto">
//                 I’d love to hear from you! Whether you have a question, an opportunity, or just want to say hello, feel free to reach out.
//             </p>

//             {/* Contact Information */}
//             <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:space-x-10 text-lg md:text-xl">
//                 <div>
//                     <p>Email: <span className="font-semibold">deewankelash@example.com</span></p>
//                 </div>
//                 <div>
//                     <p>Phone: <span className="font-semibold">+92 123 4567890</span></p>
//                 </div>
//                 <div>
//                     <p>Location: <span className="font-semibold">Karachi, Pakistan</span></p>
//                 </div>
//             </div>

//             {/* Social Media Links */}
//             <div className="flex justify-center space-x-6 mt-4">
//                 <a href="https://www.linkedin.com/in/deewankelashkumar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
//                     LinkedIn
//                 </a>
//                 <a href="https://github.com/deewankelash" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
//                     GitHub
//                 </a>
//                 <a href="https://twitter.com/deewankelash" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
//                     Twitter
//                 </a>
//             </div>

//             {/* Contact Form */}
//             <form className="max-w-lg mx-auto space-y-4 mt-6 bg-white p-6 rounded-lg shadow-lg text-gray-800">
//                 <input
//                     type="text"
//                     placeholder="Your Name"
//                     required
//                     className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                     type="email"
//                     placeholder="Your Email"
//                     required
//                     className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <textarea
//                     placeholder="Your Message"
//                     required
//                     className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
//                 ></textarea>
//                 <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors"
//                 >
//                     Send Message
//                 </button>
//             </form>
//         </section>
//     );
// }






// export default function Contact(){
//     return(
        
//         <section className=" bg-blue-500 space-y-6 text-center px-4 mt-5">
//             <h2 className="text-2xl  md:text-4xl font-semibold text-white mt-5 pt-5">
//                 Contact Me
//             </h2>
//             <p className="text-base md:text-lg text-white">
//                 I’d love to hear from you! Feel free to reach out with any questions or opportunities.
//             </p>
//             <form className="max-w-md mx-auto space-y-4">
//                 <input
//                     type="text"
//                     placeholder="Your Name"
//                     required
//                     className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-slate-500"
//                 />
//                 <input
//                     type="email"
//                     placeholder="Your Email"
//                     required
//                     className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-slate-500"
//                 />
//                 <textarea
//                     placeholder="Your Message"
//                     required
//                     className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-slate-500 h-32"
//                 ></textarea>
//                 <button
//                     type="submit"
//                     className="w-full  bg-slate-700 text-white py-3 rounded hover:bg-slate-600 transition-colors  "
//                 >
//                     Send Message
//                 </button>
//             </form>
//         </section>
    
// );
// };


    
