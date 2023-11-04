import React from "react";
import Link from "next/link";

function Navbar() {
    return (
        <header className="fixed top-0 z-[9999] w-full h-20 flex items-center px-20 bg-gradient-to-r from-cyan-500 to-blue-500">
            <nav>
                <Link
                    href={"/"}
                    className="font-semibold text-gray-200 hover:text-white hover:scale-105  border-none py-2 px-2 transition-all duration-300"
                >
                    My ToDo List
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;
