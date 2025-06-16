import ButtonShadow from "../../components/input/Button.tsx";
import { Link } from "react-router";
import { HiArrowLongLeft } from "react-icons/hi2";

export const TGSExp = () => {
    return (
        <>
            <Link to={'/experience'}>
                <div className="group flex w-80 items-center gap-3 text-white translate-x-0 hover:text-green-custom transition-all ease-in-out hover:-translate-x-1.5">
                    <HiArrowLongLeft size={24} />
                    Back to Experience
                </div>
            </Link>

            <div className='w-full animate-fade-down'>
                <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl my-5'>DIGIWORLD TECH SOLUTIONS JSC</h1>
                <span>17/04/2025 - Present</span>

                <h2 className='my-3 font-bold text-2xl sm:text-3xl md:text-xl'>Overview</h2>
                <p>
                    DIGIWORLD TECH SOLUTIONS JSC is a technology company specializing in web hosting services and digital solutions.
                    The company provides infrastructure powered by WHMCS and develops customized platforms for both internal and external clients.
                </p>

                <h2 className='my-3 font-bold text-2xl sm:text-3xl md:text-xl'>My Role</h2>
                <p>
                    As a <b>Web Developer</b>, I was involved in developing and maintaining platforms for hosting services, building web applications,
                    and working closely with internal departments to ensure project success.
                </p>

                <ul className='list-disc pl-0 lg:pl-4'>
                    <li>Maintained and extended WHMCS-based hosting platforms.</li>
                    <li>Developed and upgraded web apps using <b>Laravel</b>, <b>WordPress</b>, and <b>CodeIgniter</b>.</li>
                    <li>Collaborated with other departments including support, sales, and management.</li>
                    <li>Took initiative in <b>Business Analyst</b> and <b>Web Project Management</b> roles.</li>
                    <li>Contributed ideas to improve system usability and user workflows.</li>
                </ul>

                <h2 className='my-3 font-bold text-2xl sm:text-3xl md:text-xl'>Skills Acquired</h2>
                <ul className='list-disc pl-0 lg:pl-4 mb-3'>
                    <li>WHMCS Development and Customization</li>
                    <li>Fullstack Development with <b>Laravel</b> and <b>WordPress</b></li>
                    <li>Legacy System Maintenance with <b>CodeIgniter</b></li>
                    <li>Project Management and Team Communication</li>
                    <li>Requirement Analysis and BA Documentation</li>
                    <li>Cross-functional Collaboration</li>
                    <li>Process Optimization and Automation</li>
                </ul>

                <ButtonShadow title={'Company Website'} path={'https://tgs.com.vn/'} />
            </div>
        </>
    );
}
