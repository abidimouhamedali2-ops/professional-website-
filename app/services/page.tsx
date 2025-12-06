import Link from 'next/link'
import { Code, Smartphone, Cloud, Lightbulb, Palette, Users, ArrowRight } from 'lucide-react'

const services = [
    {
        icon: Code,
        title: 'Web Development',
        description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js. We create responsive, accessible, and performant websites.',
        href: '/services/web-development'
    },
    {
        icon: Smartphone,
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile solutions for iOS and Android using React Native. Reach your customers on their favorite devices.',
        href: '/services/mobile-applications'
    },
    {
        icon: Cloud,
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure, migration services, and DevOps automation. We help you leverage the power of AWS, Azure, and Google Cloud.',
        href: '/services/cloud-solutions'
    },
    {
        icon: Lightbulb,
        title: 'Digital Strategy',
        description: 'Strategic digital transformation consulting to drive business growth and innovation. We help you navigate the complex digital landscape.',
        href: '/services/digital-strategy'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'User-centered design that creates intuitive, engaging, and beautiful digital experiences. We focus on usability and aesthetics.',
        href: '/services/ui-ux-design'
    },
    {
        icon: Users,
        title: 'Technology Consulting',
        description: 'Expert guidance on technology stack selection, architecture, and best practices. We act as your trusted technical advisor.',
        href: '/services/technology-consulting'
    }
]

export const metadata = {
    title: 'Our Services | Nexus Digital',
    description: 'Explore our comprehensive range of digital services including web development, mobile apps, cloud solutions, and more.',
}

export default function Services() {
    return (
        <div className="flex flex-col gap-20 pb-20">
            {/* Hero Section */}
            <section className="bg-gray-900 py-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We provide end-to-end digital solutions to help your business thrive in the modern economy.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link
                                href={service.href}
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 duration-200"
                            >
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6">
                <div className="bg-blue-50 rounded-3xl p-12 md:p-20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Not sure what you need?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Schedule a free consultation with our experts to discuss your business goals and find the right solution.
                    </p>
                    <Link href="/contact" className="btn-primary">
                        Book a Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
