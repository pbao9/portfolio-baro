import ShinyText from '../../blocks/TextAnimations/ShinyText/ShinyText.tsx'

export const Pulse = () => {
    return (
        <div className="p-2 inline-flex justify-center items-center mb-3 rounded gap-3">
            <div className="h-3 w-3 bg-green-custom rounded-full animate-pluse-expand" />
            <ShinyText
                text="Available for work"
                disabled={false}
                speed={3}
                className="custom-class"
            />
        </div>
    )
}
