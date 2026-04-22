import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import TechStack from '../components/TechStack'
import { Experience } from './Experience'
import Projects from './Projects'
import { ContactForm } from '../components/ContactForm'
import { Question } from '../components/Question'
import { Collaborate } from '../components/Collaborate'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Baro Pham — Software Engineer & Fullstack Developer</title>
                <meta name="description" content="Portfolio of Baro Pham, a Software Engineer at Devro Tech specializing in fullstack development with Laravel, Next.js, Vue.js, and more. 35+ projects completed for clients worldwide." />
                <meta name="keywords" content="software engineer, fullstack developer, web developer, Laravel, Next.js, Vue.js, React, TypeScript, portfolio, Baro Pham, Devro Tech" />
                <meta property="og:title" content="Baro Pham — Software Engineer & Fullstack Developer" />
                <meta property="og:description" content="Portfolio of Baro Pham, a Software Engineer at Devro Tech specializing in fullstack development. 35+ projects completed for clients worldwide." />
                <meta property="og:image" content="https://res.cloudinary.com/dqtxna4oa/image/upload/v1776831433/Logo_latw69.png" />
                <meta property="og:type" content="website" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Baro Pham — Software Engineer & Fullstack Developer" />
                <meta property="twitter:description" content="Portfolio of Baro Pham, a Software Engineer at Devro Tech specializing in fullstack development. 35+ projects completed for clients worldwide." />
                <meta property="twitter:image" content="https://res.cloudinary.com/dqtxna4oa/image/upload/v1776831433/Logo_latw69.png" />
            </Helmet>
            <Hero />
            <Projects />
            <Experience />
            <TechStack />
            <ContactForm />
            <Question />
            <Collaborate />
        </div>
    )
}

export default Home
