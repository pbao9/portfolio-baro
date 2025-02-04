import { Link } from 'react-router'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
const Hyperlink = ({ title, path }: { title: string; path: string }) => {
    return (
        <div className="group flex w-80 items-center gap-3 text-white hover:text-green-custom transition-all ease-in-out">
            <Link to={path}>{title}</Link>
            <HiOutlineArrowLongRight
                size={24}
                className="group-hover:translate-x-1.5 transition-all ease-in-out"
            />
        </div>
    )
}

export default Hyperlink
