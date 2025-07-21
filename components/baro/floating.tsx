import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandGitlab,
    IconBrandInstagram,
    IconBrandLinkedin,
} from '@tabler/icons-react'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

const FloatingCard = () => {
    return (
        <div className="fixed top-50 right-[20px] bg-white border border-white/10 rounded-lg z-50 p-2 flex flex-col gap-2">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        href="/"
                        className="hover:text-white hover:bg-black rounded-md p-2 transition-all duration-300"
                    >
                        <IconBrandLinkedin size={24} />
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="left">
                    <p>Linkedin</p>
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        href="/"
                        className="hover:text-white hover:bg-black rounded-md p-2 transition-all duration-300"
                    >
                        <IconBrandGithub size={24} />
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="left">
                    <p>Github</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        href="/"
                        className="hover:text-white hover:bg-black rounded-md p-2 transition-all duration-300"
                    >
                        <IconBrandInstagram size={24} />
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="left">
                    <p>Instagram</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        href="/"
                        className="hover:text-white hover:bg-black rounded-md p-2 transition-all duration-300"
                    >
                        <IconBrandFacebook size={24} />
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="left">
                    <p>Facebook</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        href="/"
                        className="hover:text-white hover:bg-black rounded-md p-2 transition-all duration-300"
                    >
                        <IconBrandGitlab size={24} />
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="left">
                    <p>Gitlab</p>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}

export default FloatingCard
