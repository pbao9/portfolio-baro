import { Helmet } from 'react-helmet-async'
import { ContactForm } from '../components/ContactForm'

export const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Baro Pham — Contact</title>
                <meta name="description" content="Get in touch with Baro Pham for web development, fullstack projects, and collaboration opportunities." />
            </Helmet>
            <ContactForm />
        </>
    )
}
