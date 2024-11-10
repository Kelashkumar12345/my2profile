
export default function About() {
    return (
        <section className="space-y-10 px-4 mt-5 md:px-8 lg:px-16 py-10 bg-blue-500">
            <h2 className="text-2xl md:text-4xl font-semibold text-white text-center mt-5">
                About Me
            </h2>
            <p className="text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto text-center">
                I am a web developer with a strong focus on creating user-friendly and visually appealing websites. With experience in TypeScript, HTML, CSS, and React, I aim to deliver high-quality code and a great user experience. My journey in web development started with a passion for design, which evolved into coding and building functional websites.
            </p>

            {/* Skills Section */}
            <div className="skills-section bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-700 text-center mb-6">
                    My Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="skill-item">
                        <span className="text-blue-500 text-4xl">💻</span>
                        <p className="text-lg font-medium text-gray-700 mt-2">HTML</p>
                    </div>
                    <div className="skill-item">
                        <span className="text-blue-500 text-4xl">🎨</span>
                        <p className="text-lg font-medium text-gray-700 mt-2">CSS</p>
                    </div>
                    <div className="skill-item">
                        <span className="text-blue-500 text-4xl">📝</span>
                        <p className="text-lg font-medium text-gray-700 mt-2">JavaScript</p>
                    </div>
                    <div className="skill-item">
                        <span className="text-blue-500 text-4xl">⚛️</span>
                        <p className="text-lg font-medium text-gray-700 mt-2">React</p>
                    </div>
                    <div className="skill-item">
                        <span className="text-blue-500 text-4xl">🛠️</span>
                        <p className="text-lg font-medium text-gray-700 mt-2">TypeScript</p>
                    </div>
                    <div className="skill-item">
                        <span className="text-blue-500 text-4xl">🌐</span>
                        <p className="text-lg font-medium text-gray-700 mt-2">Next.js</p>
                    </div>
                    <div className="skill-item">
                        <span className="text-blue-500 text-4xl">🔧</span>
                        <p className="text-lg font-medium text-gray-700 mt-2">Git</p>
                    </div>
                    <div className="skill-item">
                        <span className="text-blue-500 text-4xl">🚀</span>
                        <p className="text-lg font-medium text-gray-700 mt-2">Responsive Design</p>
                    </div>
                </div>
            </div>
        </section>
    );
}



// export default function About(){
//     return(
//             <section className="space-y-6 px-4">
//                 <h2 className="text-2xl md:text-4xl font-semibold text-slate-700 text-center mt-5 ">
//                     About Me
//                 </h2>
//                 <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
//                     I am a web developer with a strong focus on creating user-friendly and visually appealing websites. With experience in TypeScript, HTML, CSS, and React, I aim to deliver high-quality code and a great user experience. My journey in web development started with a passion for design, which evolved into coding and building functional websites.
//                 </p>
//             </section>
        
//     );
// };



    


       



