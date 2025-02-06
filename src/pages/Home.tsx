import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import TechStack from '../components/TechStack.tsx'
import { Experience } from './Experience.tsx'
import Projects from './Projects.tsx'
const Home = () => {
    return (
        <div>
            <Hero />
            <Projects />
            <Experience />
            <TechStack />
            <Helmet>
                <title>Baro</title>
            </Helmet>
        </div>
    )
}

export default Home
