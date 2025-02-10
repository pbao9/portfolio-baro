import { Link } from 'react-router'

const ButtonShadow = ({ title, path }: { title: string; path: string }) => {
    return (
        <button className="text-green-custom hover:before:bg-green-custom relative h-[40px] w-full overflow-hidden border border-green-custom bg-white rounded-xl px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-custom before:transition-all before:duration-500 hover:text-white hover:shadow-green-custom hover:before:left-0 hover:before:w-full my-3">
            <Link to={path} target={'_blank'} className="relative z-10">
                {title}
            </Link>
        </button>
    )
}

export default ButtonShadow
