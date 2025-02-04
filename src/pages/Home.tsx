import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import TechStack from "../components/TechStack.tsx";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Baro</title>
            </Helmet>
            <Hero />
            <TechStack/>
        </div>
    )
}

export default Home
