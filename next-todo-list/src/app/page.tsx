import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-5xl mb-56 tracking-wide">
                Hello, you want to do something?
            </h1>
            <div className="relative flex -mt-16 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
            <Link href="/todo" className="z-50" >
                <span className="text-md font-normal tracking-wide border-2 px-7 py-3 rounded-lg hover:border-blue-800 hover:bg-blue-800 transition-colors duration-300">
                    {"Let's try"}
                </span>
            </Link>
        </main>
    );
}
