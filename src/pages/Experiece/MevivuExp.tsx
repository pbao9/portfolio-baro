import ButtonShadow from "../../components/input/Button.tsx";
import {Link} from "react-router";
import {HiArrowLongLeft} from "react-icons/hi2";

export const MevivuExp = () => {
    return (
        <>
            <Link to={'/experience'}>

                <div className="group flex w-80 items-center gap-3 text-white translate-x-0 hover:text-green-custom transition-all ease-in-out hover:-translate-x-1.5">
                    <HiArrowLongLeft
                        size={24}
                    />
                    Back to Experience
                </div>
            </Link>
            <div className='w-full animate-fade-down'>
                <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl my-5'>Mevivu Technology</h1>
                <span>16/10/2023 - 26/11/2024</span>
                <h2 className='my-3 font-bold text-2xl sm:text-3xl md:text-xl'>Overview</h2>
                <p>
                    Mevivu Technology is a company specializing in providing software for customers, sales, real estate
                    business, and car booking solutions such as grab, uber.
                </p>
                <h2 className='my-3 font-bold text-2xl sm:text-3xl md:text-xl'>My Role</h2>
                <p>
                    As a <b>Fullstack Developer</b> at Mevivu Technology, I contributed to both backend and frontend
                    development.
                </p>
                <ul className='list-disc pl-0 lg:pl-4'>
                    <li>
                        Developed scalable websites and APIs using Laravel
                    </li>
                    <li>Built and customized WordPress e-commerce websites, improving development efficiency and user
                        experience
                    </li>
                    <li>Managed web development with DirectAdmin Panel, reducing downtime.</li>
                    <li>Collaborated with Front-End developers and Business Analysts to enhance customer satisfaction.
                    </li>
                    <li>Managed project progress for interns.</li>
                </ul>
                <h2 className='my-3 font-bold text-2xl sm:text-3xl md:text-xl'>Skills Acquired</h2>
                <ul className='list-disc pl-0 lg:pl-4 mb-3'>
                    <li>
                        Web Development with <b>Laravel</b> and <b>WordPress</b>
                    </li>
                    <li>API Development and Integration</li>
                    <li>E-commerce Website Design and Customization</li>
                    <li>Project Management and <b>Team Collaboration</b></li>
                    <li><b>DirectAdmin Panel</b> for Website Management</li>
                    <li><b>Database Optimization</b> and Query Management</li>
                    <li><b>Customer Experience</b> Enhancement</li>
                    <li><b>Intern Management</b> and Progress Monitoring</li>
                </ul>

                <ButtonShadow title={'Company Website'} path={'https://mevivu.com/'}/>
            </div>
        </>

    )
}