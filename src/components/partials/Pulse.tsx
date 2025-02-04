import {GoDotFill} from "react-icons/go";
import ShinyText from "../../blocks/TextAnimations/ShinyText/ShinyText.tsx";

export const Pulse = () => {
    return (
        <div className='p-2 inline-flex justify-center item-center mb-3 rounded gap-3'>
            <div className="h-5 w-5 bg-green-custom rounded-full flex justify-center items-center animate-pluse-expand">
                <GoDotFill size={16}/>
            </div>
            <ShinyText text="Available for work" disabled={false} speed={3} className='custom-class' />
        </div>
    );
}