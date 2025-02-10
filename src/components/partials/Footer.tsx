import ButtonShadow from '../input/Button'

const Footer = () => {
    return (
        <>
            <div className="py-5">
                Made by <span className="text-pink-dark">Baro Pham</span>{' '}
            </div>

            <div className="fixed bottom-5 right-5 z-[999]">
                <ButtonShadow
                    path="https://github.com/pbao9/portfolio-baro/"
                    title="Want this template? Contact now!"
                />
            </div>
        </>
    )
}

export default Footer
