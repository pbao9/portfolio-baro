import { Helmet } from "react-helmet-async";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText.tsx";
import {Link} from "react-router";

export const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Baro | Contact</title>
            </Helmet>
            <div className='w-full animate-fade-down'>
                <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl my-5'>
                    Let’s Create
                    <ShinyText
                        text="Something Amazing"
                        disabled={false}
                        speed={3}
                        className="custom-class"
                    />
                </h1>
            </div>

            <div className="max-w-4xl mx-auto p-5 bg-dark-custom rounded-lg shadow-lg">
                <form
                    className="space-y-6"
                    action="YOUR_FORM_ACTION_URL"
                    method="POST"
                >

                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-white">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Full Name"
                            required
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-custom"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-white">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email Address"
                            required
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-custom"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-white">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            rows={4}
                            required
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-custom"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="text-green-custom hover:before:bg-green-custom relative h-[40px] w-full overflow-hidden border border-green-custom bg-white rounded-xl px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-custom before:transition-all before:duration-500 hover:text-white hover:shadow-green-custom hover:before:left-0 hover:before:w-full"
                        >
                            <Link to={'mailto:pbao.business@gmail.com'} className='relative z-10'>
                                Trust your crazy ideas
                            </Link>

                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
