import {Helmet} from "react-helmet-async";
import TechStack from "../components/TechStack.tsx";

export const Tools = () => {
    return (
        <>
            <Helmet>
                <title>Baro | Tools</title>
            </Helmet>
            <TechStack />
        </>
    )
}