import ShinyText from "../../blocks/TextAnimations/ShinyText/ShinyText.tsx";

export const TitleCenter = ({ title }: { title: string }) => {
    return (
        <div className="relative w-fit mx-auto">
            <h1 className="text-center uppercase font-bold relative text-2xl before:absolute before:content-[''] before:w-10 before:h-[2px] before:bg-white before:top-[50%] before:-left-8 before:-translate-x-1/2 after:absolute after:content-[''] after:w-10 after:h-[2px] after:bg-white after:top-[50%] after:-right-12">
                <ShinyText text={title} />
            </h1>
        </div>
    );
};
