'use client';

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Home() {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <section className="flex flex-col md:flex-row items-center justify-between h-screen mt-5 w max auto bg-gradient-to-b from-blue-400 to-blue-600 p-10 space-y-10 md:space-y-0">
            {/* Left Side - Text Content */}
            <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'} md:w-1/2 space-y-6 ml-10`}>
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                    Welcome to My Portfolio
                </h1>
                <p className="text-lg md:text-2xl text-white">
                    Hi, I&apos;m Deewan Kelash Kumar, a passionate web developer skilled in TypeScript, HTML, CSS, and React.
                </p>
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-blue-100 transition duration-300">
                    Hire Me
                </button>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 flex justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 shadow-lg">
                    <Image
                        src="/kelash.jpg"  // Replace with the correct path to your image
                        alt="Deewan Kelash Kumar"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </section>
    );
}


// 'use client';

// import { useInView } from 'react-intersection-observer';
// import Image from 'next/image';

// export default function Home() {
//     const { ref, inView } = useInView({
//         triggerOnce: true,
//     });

//     return (
//         <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-blue-600 mt-5">
//             {/* Image and Text Section */}
//             <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'} flex flex-col items-center`}>
//                 {/* Image Container */}
//                 <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg mb-6">
//                     <Image
//                         src="/kelas33333.jpg"  // Replace with the correct path to your image
//                         alt="Deewan Kelash Kumar"
//                         layout="fill"
//                         objectFit="cover"
//                         className="rounded-full"
//                     />
//                 </div>

//                 {/* Text Content */}
//                 <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Welcome to My Portfolio</h1>
//                 <p className="text-lg md:text-2xl text-white mt-4 text-center">
//                     Hi, I'm Deewan Kelash Kumar, a passionate web developer skilled in TypeScript, HTML, CSS, and React.
//                 </p>
//             </div>
//         </section>
//     );
// }

// 'use client';

// import { useInView } from 'react-intersection-observer';

// export default function Home() {
//     const { ref, inView } = useInView({
//         triggerOnce: true,
//     });

//     return (
//         <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-blue-600">
//             <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
//                 <h1 className="text-4xl md:text-6xl font-bold text-white">Welcome to My Portfolio</h1>
//                 <p className="text-lg md:text-2xl text-white mt-4">
//                     Hi, I'm Deewan Kelash Kumar, a passionate web developer skilled in TypeScript, HTML, CSS, and React.
//                 </p>
//             </div>
//         </section>
//     );
// }



//  "use client"
//  import Image from 'next/image';
//  import { useEffect } from 'react';
//  import { useInView } from 'react-intersection-observer';
 
//  export default function Home() {
//      const { ref, inView } = useInView({ triggerOnce: true });
 
//      return (
//          <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-center space-y-8 px-4">
//              {/* Profile Picture with Fade-in Animation */}
//              <div
//                  ref={ref}
//                  className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg transform transition duration-700 ${
//                      inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
//                  }`}
//              >
//                  <Image
//                      src="/kelas33333.jpg" // Apni image ka path yahan lagayein
//                      alt="Deewan Kelash Kumar"
//                      layout="fill"
//                      objectFit="cover"
//                      className="rounded-full"
//                  />
//              </div>
 
//              {/* Heading with Slide-in Animation */}
//              <h1
//                  className={`text-4xl md:text-6xl font-bold text-white transition transform duration-700 delay-200 ${
//                      inView ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
//                  }`}
//              >
//                  Welcome to My Portfolio
//              </h1>
 
//              {/* Text with Fade-in Animation */}
//              <p
//                  className={`text-lg md:text-2xl text-gray-200 max-w-xl mx-auto transition duration-700 delay-400 ${
//                      inView ? 'opacity-100' : 'opacity-0'
//                  }`}
//              >
//                  Hi, I'm <span className="text-yellow-200 font-semibold">Deewan Kelash Kumar</span>, a passionate web developer skilled in TypeScript, HTML, CSS, and React. I build responsive and engaging websites.
//              </p>
//          </section>
//      );
//  }
 
 
//  // import Image from 'next/image';

// // export default function Home() {
// //     return (
// //         <section className="flex flex-col items-center justify-center h-screen bg-blue-500 text-center space-y-8 px-4">
// //             {/* Profile Picture */}
// //             <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
// //                 <Image
// //                     src="/kelas33333.jpg"  // Apni image ka path yahan lagayein
// //                     alt="Deewan Kelash Kumar"
// //                     layout="fill"
// //                     objectFit="cover"
// //                     className="rounded-full"
// //                 />
// //             </div>

// //             <h1 className="text-4xl md:text-6xl font-bold text-slate-700">
// //                 Welcome to My Portfolio
// //             </h1>
// //             <p className="text-lg md:text-2xl text-gray-600 max-w-xl mx-auto">
// //                 Hi, I'm <span className="text-white font-semibold">Deewan Kelash Kumar</span>, a passionate web developer skilled in TypeScript, HTML, CSS, and React. I build responsive and engaging websites.
// //             </p>

//             {/* Call to Action Button 
//              <div className="flex space-x-4">
//                 <a
//                     href="/about"
//                     className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition duration-300"
//                 >
//                     Learn More About Me
//                 </a>
//                 <a
//                     href="/contact"
//                     className="px-6 py-3 border border-blue-600 text-blue-600 text-lg font-medium rounded-lg hover:bg-blue-100 transition duration-300"
//                 >
//                     Contact Me
//                 </a>
//             </div> */}
//         </section>
//     );
// }

// // export default function Home() {
// //     return (
// //         <section className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center space-y-8 px-4">
// //             <h1 className="text-4xl md:text-6xl font-bold text-slate-700">
// //                 Welcome to My Portfolio
// //             </h1>
// //             <p className="text-lg md:text-2xl text-gray-600 max-w-xl mx-auto">
// //                 Hi, I'm <span className="text-blue-600 font-semibold">Deewan Kelash Kumar</span>, a passionate web developer skilled in TypeScript, HTML, CSS, and React. I build responsive and engaging websites.
// //             </p>

// //             {/* Call to Action Button */}
// //             <div className="flex space-x-4">
// //                 <a
// //                     href="/about"
// //                     className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition duration-300"
// //                 >
// //                     Learn More About Me
// //                 </a>
// //                 <a
// //                     href="/contact"
// //                     className="px-6 py-3 border border-blue-600 text-blue-600 text-lg font-medium rounded-lg hover:bg-blue-100 transition duration-300"
// //                 >
// //                     Contact Me
// //                 </a>
// //             </div>
// //         </section>
// //     );
// // }


// // export default function Home (){

// //   return(


// //             <section className="text-center space-y-6 mt-5">
// //                 <h1 className="text-3xl md:text-5xl font-bold text-slate-700">
// //                     Welcome to My Portfolio
// //                 </h1>
// //                 <p className="text-lg md:text-xl text-gray-600 text-center">
// //                     Hi, I'm Deewan Kelash Kumar, a passionate web developer skilled in TypeScript, HTML, CSS, and React. I build responsive and engaging websites.
// //                 </p>
// //             </section>
        
// //     );
// // };



    

  
