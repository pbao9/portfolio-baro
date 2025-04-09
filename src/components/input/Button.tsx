import { Link } from 'react-router'

interface ButtonShadowProps {
    title: string
    path: string
    icon?: React.ReactNode
    target?: string
}

const ButtonShadow = ({ title, path, icon, target }: ButtonShadowProps) => {
    return (
        <Link to={path} className="relative block w-full" target={target}>
            <button className="flex items-center justify-center gap-2 text-green-custom hover:text-white relative h-[45px] w-full overflow-hidden border border-green-custom bg-white rounded-xl px-4 py-2 shadow-md transition-all duration-300 ease-in-out before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-green-custom before:transition-all before:duration-500 before:ease-in-out hover:before:w-full hover:shadow-lg hover:shadow-green-custom active:scale-95 cursor-pointer my-3">
                <span className="relative z-10">{title}</span>
                {icon && <span className="relative z-10">{icon}</span>}
            </button>
        </Link>
    )
}

export default ButtonShadow
