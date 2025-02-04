import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Baro</title>
            </Helmet>
            <Hero />
        </div>
    )
}

export default Home
