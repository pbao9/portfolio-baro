import ButtonShadow from '../input/Button'

const Footer = () => {
    return (
        <>
            <div className="py-5">
                Made by <span className="text-pink-dark">Baro Pham</span>{' '}
            </div>

            <div className="fixed bottom-5 right-5 z-[999]">
                <ButtonShadow
                    path="https://www.facebook.com/"
                    title="Want this template? Contact now!"
                />
            </div>
        </>
    )
}

export default Footer
