import { Helmet } from 'react-helmet-async'
import TechStack from '../components/TechStack'

export const Tools = () => {
    return (
        <>
            <Helmet>
                <title>Baro Pham — Tools & Technologies</title>
                <meta name="description" content="Technologies and tools used by Baro Pham including Laravel, Next.js, Vue.js, React, TypeScript, and more." />
            </Helmet>
            <TechStack />
        </>
    )
}
