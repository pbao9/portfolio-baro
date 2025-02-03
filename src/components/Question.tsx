type QuestionItem = {
    question: string;
    answer: string;
};

const questions: QuestionItem[] = [
    {
        question: "What services do you offer?",
        answer: "I offer web and mobile development, database management, WordPress development, and API development, all tailored to your project needs.",
    },
    {
        question: "What is your development process?",
        answer: "My process includes understanding project requirements, designing solutions, building with best practices, testing for quality, and deploying for production. I maintain open communication to ensure alignment and successful delivery.",
    },
    {
        question: "How do you handle project timelines?",
        answer: "I manage timelines by setting clear milestones, breaking projects into phases, regularly updating clients, and adjusting as needed to ensure on-time delivery while maintaining high quality.",
    },
    {
        question: "Can you work with existing teams?",
        answer: "Yes, I collaborate seamlessly with teams, providing expertise and integrating smoothly into workflows to achieve project goals efficiently.",
    },
    {
        question: "What tools do you use?",
        answer: "I use Laravel, Next.js, React, TypeScript, Tailwind CSS, Prisma, MySQL, and React Native for development. For collaboration, I use Git, GitHub, and GitLab.",
    },
];

export const Question = () => {
    return (
        <>
            <div className='animate-fade-down'>
                <h1 className='font-bold text-6xl mb-5'>
                    Frequently <br/>
                    Asked <span className='text-green-custom'>Questions</span>
                </h1>

                {questions.map((item, index) => (
                    <div key={index} className="collapse collapse-arrow bg-dark-custom mb-3">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-xl font-medium">{item.question}</div>
                        <div className="collapse-content">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
