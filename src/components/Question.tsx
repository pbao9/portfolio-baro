import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

type QuestionItem = {
    question: string
    answer: string
}

const questions: QuestionItem[] = [
    {
        question: 'What services do you offer?',
        answer: 'I offer web and mobile development, database management, WordPress development, and API development, all tailored to your project needs.',
    },
    {
        question: 'What is your development process?',
        answer: 'My process includes understanding project requirements, designing solutions, building with best practices, testing for quality, and deploying for production. I maintain open communication to ensure alignment and successful delivery.',
    },
    {
        question: 'How do you handle project timelines?',
        answer: 'I manage timelines by setting clear milestones, breaking projects into phases, regularly updating clients, and adjusting as needed to ensure on-time delivery while maintaining high quality.',
    },
    {
        question: 'Can you work with existing teams?',
        answer: 'Yes, I collaborate seamlessly with teams, providing expertise and integrating smoothly into workflows to achieve project goals efficiently.',
    },
    {
        question: 'What tools do you use?',
        answer: 'I use Laravel, Next.js, React, TypeScript, Tailwind CSS, Prisma, MySQL, and React Native for development. For collaboration, I use Git, GitHub, and GitLab.',
    },
]

export const Question = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-16">
            <div className="mb-10">
                <p className="text-accent text-sm font-jetbrains-mono uppercase tracking-wider mb-3">// FAQ</p>
                <h2 className="font-outfit font-semibold text-3xl md:text-4xl leading-tight">
                    Frequently Asked<br />
                    <span className="text-white/40">Questions</span>
                </h2>
            </div>

            <div className="space-y-3">
                {questions.map((item, index) => (
                    <div
                        key={index}
                        className="border border-white/5 rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/10 transition-colors"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="flex items-center justify-between w-full p-5 text-left"
                        >
                            <span className="font-medium text-white/80 pr-4">{item.question}</span>
                            <FiChevronDown
                                size={18}
                                className={`text-white/30 shrink-0 transition-transform duration-300 ${
                                    openIndex === index ? 'rotate-180 text-accent' : ''
                                }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${
                                openIndex === index ? 'max-h-40' : 'max-h-0'
                            }`}
                        >
                            <p className="px-5 pb-5 text-sm text-white/50 leading-relaxed">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
