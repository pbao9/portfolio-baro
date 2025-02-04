import { Helmet } from "react-helmet-async";
import SpotlightCard from "../blocks/Components/SpotlightCard/SpotlightCard.tsx";
import ButtonShadow from "../components/input/Button.tsx";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText.tsx";

const Projects = () => {
    return (
        <div className="container mx-auto px-4">
            <Helmet>
                <title>Baro | Projects</title>
            </Helmet>

            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-5">
                Recent Projects and
                <ShinyText
                    text="Achievements"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                />
            </h1>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project 1 */}
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <h1 className="font-semibold text-xl sm:text-2xl mb-5">Project Fishing Booking API/Admin 🌟</h1>
                    <ul className="mb-3 text-sm sm:text-base">
                        <li className="mb-2">
                            Developed an API and Admin CMS for managing fishing spots. Introduced an event feature allowing lower-rank players to earn rewards and commissions through referral codes.
                        </li>
                        <li className="mb-2">
                            Streamlined commission transfers to app and bank accounts with admin approval for better financial management.
                        </li>
                    </ul>
                    <ButtonShadow title={"Link"} path={"https://github.com/pbao9/VipFishing"} />
                </SpotlightCard>

                {/* Project 2 */}
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <h1 className="font-semibold text-xl sm:text-2xl mb-5">Project VisonLand API/Admin 🛸</h1>
                    <ul className="mb-3 text-sm sm:text-base">
                        <li className="mb-2">
                            Developed an API and Admin CMS for real estate postings. Implemented payment functions for direct and indirect commissions using in-app currency, with logic for commission calculations based on referral codes.
                        </li>
                        <li className="mb-2">
                            Optimized database queries with Eloquent ORM for better performance.
                        </li>
                        <li className="mb-2">
                            Designed a notification feature for new posts from the admin panel to enhance user interaction.
                        </li>
                    </ul>
                    <ButtonShadow title={"Link"} path={"https://github.com/pbao9/VisonLandAffiliate"} />
                </SpotlightCard>
            </div>
        </div>
    );
};

export default Projects;
