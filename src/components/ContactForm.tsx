import { useState } from 'react'
import { FiSend, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi'

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSending(true)
        await new Promise((r) => setTimeout(r, 1500))
        setSending(false)
        setSent(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSent(false), 4000)
    }

    return (
        <section className="py-16">
            <div className="mb-12">
                <p className="text-accent text-sm font-jetbrains-mono uppercase tracking-wider mb-3">
                    // Contact
                </p>
                <h2 className="font-jetbrains-mono font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                    Get in
                    <br />
                    <span className="text-white/40">Touch</span>
                </h2>
                <p className="text-white/50 max-w-2xl leading-relaxed">
                    Have a project in mind? Fill out the form below and I'll get back to you within
                    24 hours.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                    {sent && (
                        <div className="mb-6 p-4 rounded-xl border border-accent/20 bg-accent/5 text-accent text-sm">
                            Message sent successfully! I'll get back to you soon.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm text-white/40 mb-2 font-jetbrains-mono">
                                Name
                            </label>
                            <div className="relative">
                                <FiUser
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                                    size={18}
                                />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-white placeholder:text-white/20 focus:border-accent/30 focus:outline-none transition-colors text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-white/40 mb-2 font-jetbrains-mono">
                                Email
                            </label>
                            <div className="relative">
                                <FiMail
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                                    size={18}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-white placeholder:text-white/20 focus:border-accent/30 focus:outline-none transition-colors text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-white/40 mb-2 font-jetbrains-mono">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Project inquiry"
                                className="w-full px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-white placeholder:text-white/20 focus:border-accent/30 focus:outline-none transition-colors text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-white/40 mb-2 font-jetbrains-mono">
                                Message
                            </label>
                            <div className="relative">
                                <FiMessageSquare
                                    className="absolute left-4 top-4 text-white/20"
                                    size={18}
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-white placeholder:text-white/20 focus:border-accent/30 focus:outline-none transition-colors text-sm resize-none"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={sending}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-canvas font-medium rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        >
                            {sending ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-canvas/30 border-t-canvas rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FiSend size={18} />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h3 className="font-jetbrains-mono text-sm text-accent/60 uppercase tracking-wider mb-4">
                            Contact Info
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-white/40 mb-1">Email</p>
                                <a
                                    href="mailto:info@devro-tech.com"
                                    className="text-sm text-white/70 hover:text-accent transition-colors"
                                >
                                    info@devro-tech.com
                                </a>
                                <p className="text-xs text-white/30 mt-0.5">
                                    Contact for development
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-white/40 mb-1">Location</p>
                                <p className="text-sm text-white/70">Ho Chi Minh City, Vietnam</p>
                            </div>
                            <div>
                                <p className="text-sm text-white/40 mb-1">Response Time</p>
                                <p className="text-sm text-white/70">Within 24 hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                        <h3 className="font-jetbrains-mono text-sm text-accent/60 uppercase tracking-wider mb-4">
                            Services
                        </h3>
                        <ul className="space-y-2">
                            {[
                                'Web Development',
                                'Mobile Apps',
                                'API Development',
                                'WordPress',
                                'E-commerce',
                                'UI/UX Design',
                                'LMS',
                                'POS System',
                                'IT Management System',
                            ].map((s, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2 text-sm text-white/50"
                                >
                                    <span className="w-1 h-1 rounded-full bg-accent/60" />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
