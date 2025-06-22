import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router";

export const CardCustom = ({ title, desc, date, link }: { title: string, desc: string, date: string, link: string }) => {
    return (
        <Link to={link} >
            <div
                className='group cursor-pointer animate-fade-down flex flex-row items-start relative theme-card hover:bg-green-custom w-full rounded-lg p-3 transition transition-all duration-500 my-[5rem]'>
                <div>
                    <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl my-5 theme-text'>
                        {title}
                    </h1>
                    <div>
                        <p className='mb-3 theme-text-secondary'>
                            {desc}
                        </p>
                        <span className="theme-text-muted">
                            {date}
                        </span>
                    </div>
                </div>
                <div className="bg-green-custom group-hover:bg-gray-800 dark:group-hover:bg-theme-text rounded-full inline p-3 relative">
                    <HiOutlineArrowLongRight
                        size={26}
                        className="text-white group-hover:text-gray-800 dark:group-hover:text-gray-800 -rotate-45 group-hover:opacity-0 opacity-100 group-hover:translate-x-8 group-hover:-translate-y-8 transition-all duration-300"
                    />

                    <HiOutlineArrowLongRight
                        size={26}
                        className="text-gray-800 dark:text-green-custom -rotate-45 -translate-x-6 translate-y-0 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 absolute transition-all duration-300"
                    />
                </div>

            </div>
        </Link>
    );
}