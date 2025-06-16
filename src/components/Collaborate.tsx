import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {Link} from "react-router";

export const Collaborate = () => {
    return (
        <Link to={"/contact"}>
            <div className='group cursor-pointer animate-fade-down flex flex-row items-start relative bg-dark-custom hover:bg-green-custom w-full rounded-lg p-3 transition-all duration-500 my-[5rem]'>
                <div>
                    <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl my-5'>
                        Let's<br/>
                        <span className='text-green-custom group-hover:text-white transition-all duration-500'>
                        collaborate
                </span>
                    </h1>
                    <div>
                        <p>
                            Unlock the potential of your product with expert design and development services. Let’s collaborate to create user-centered solutions that not only meet your goals but also delight your users.
                        </p>
                    </div>
                </div>
                <div className="bg-green-custom group-hover:bg-white rounded-full inline p-3 relative">
                    <HiOutlineArrowLongRight
                        size={26}
                        className="text-white -rotate-45 group-hover:opacity-0 opacity-100 group-hover:translate-x-8 group-hover:-translate-y-8 transition-all duration-300"
                    />

                    <HiOutlineArrowLongRight
                        size={26}
                        className="text-dark-custom -rotate-45 -translate-x-6 translate-y-0 group-hover:translate-x-0 opacity-100 group-hover:-translate-y-6 absolute transition-all duration-300"
                    />
                </div>

            </div>
        </Link>

    );
}