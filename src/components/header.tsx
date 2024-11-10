

// Header Component

import Link from "next/link";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
    return (
        <header className="bg-slate-900 flex justify-between items-center py-4 px-4 mx-auto max-w-4xl">
            {/* Logo */}
            <div className="text-white text-xl font-bold">
                Deewan Kelash Kumar
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
                <ul className="flex gap-6">
                    <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
                    <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
                    <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
                <SheetTrigger className="md:hidden">
                    <Menu className="text-white" size={24} />
                </SheetTrigger>
                <SheetContent side="right" className="flex flex-col bg-slate-900 p-4 text-white">
                    <SheetHeader>
                        <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="mt-4">
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
                            <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
                            <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    );
}





// import Link from "next/link"
// import { Menu } from "lucide-react"
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
//   } from "@/components/ui/sheet"
  
// export default function Header(){
//     return(
//     <header className="bg-slate-900 flex justify-between py-4 px-4 mx-auto max-w-2xl">
//         {/* logo */}
//         <div className=" text-white">
//             Deewan Kelash Kumar

//         </div>

//         {/* nav */}

//         <div className="hidden md:block">
//              <ul className="flex gap-6 ">
//                 <li><Link href={"/"} className="text-white">Home</Link></li>
//                 <li><Link href={"/about"} className="text-white">About</Link></li>
//                 <li><Link href={"/contact"} className="text-white">Contact</Link></li>
//             </ul> 
//             </div>
//             <Sheet>
//   <SheetTrigger className="md:hidden"> <Menu   /></SheetTrigger>
//   <SheetContent className="flex-col">
//             <ul className="flex gap-6">
//                 <li><Link href={"/"}>Home</Link></li>
//                 <li><Link href={"/about"}>About</Link></li>
//                 <li><Link href={"/contact"}>Contact</Link></li>
//             </ul>
    
//   </SheetContent>
// </Sheet>



        
//     </header>
//             )}