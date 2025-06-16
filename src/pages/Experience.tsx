import { Helmet } from 'react-helmet-async'
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText.tsx'
import { CardCustom } from '../components/CardCustom.tsx'

export const Experience = () => {
    return (
        <div>
            <Helmet>
                <title>Baro | Experience</title>
            </Helmet>
            <div className="w-full animate-fade-down">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl my-5">
                    Over 2 Years of
                    <br /> Develop
                    <ShinyText
                        text="Expertise"
                        disabled={false}
                        speed={3}
                        className="custom-class mx-2"
                    />
                </h1>
            </div>

            <div>
                <CardCustom
                    title={'DIGIWORLD TECH SOLUTIONS JSC'}
                    desc={
                        'Developed and maintained WHMCS-based hosting platforms, and upgraded web applications using Laravel, WordPress, and CodeIgniter.' +
                        ' Collaborated cross-functionally with departments to fulfill assigned tasks while also taking on Business Analyst and Web Project Manager roles within the company.'
                    }
                    link={'/experience/tgs'}
                    date={'17/04/2025 - Current'}
                />

                <CardCustom
                    title={'Mevivu Technology'}
                    desc={
                        'Developed scalable websites and APIs with Laravel, built custom WordPress e-commerce sites, and managed web hosting with DirectAdmin.' +
                        ' Worked closely with frontend developers and business analysts to enhance user experience and project efficiency.'
                    }
                    link={'/experience/mevivu'}
                    date={'23/10/2023 - 26/11/2024'}
                />
            </div>
        </div>
    )
}
