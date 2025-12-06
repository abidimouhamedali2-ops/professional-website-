import Link from 'next/link'
import { ArrowRight, Code, Smartphone, Cloud, Lightbulb, Palette, Users, CheckCircle, Zap, Shield } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js.',
    href: '/services/web-development'
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile solutions for iOS and Android using React Native.',
    href: '/services/mobile-applications'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure, migration services, and DevOps automation.',
    href: '/services/cloud-solutions'
  },
  {
    icon: Lightbulb,
    title: 'Digital Strategy',
    description: 'Strategic digital transformation consulting to drive business growth and innovation.',
    href: '/services/digital-strategy'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive, engaging, and beautiful digital experiences.',
    href: '/services/ui-ux-design'
  },
  {
    icon: Users,
    title: 'Technology Consulting',
    description: 'Expert guidance on technology stack selection, architecture, and best practices.',
    href: '/services/technology-consulting'
  }
]

const features = [
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized for speed and efficiency to ensure the best user experience.'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'Enterprise-grade security measures implemented at every layer of development.'
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control to deliver bug-free solutions.'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="container mx-auto px-6 pt-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
              Innovate. Transform. Grow.
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
              Digital Solutions for <br />
              <span className="text-gradient">Modern Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              We help forward-thinking companies transform their business with our comprehensive suite of digital services, from web development to strategic consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive digital solutions tailored to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-hover bg-white rounded-2xl p-8 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your digital goals with our expert solutions.
              </p>
              <Link href="/contact" className="btn-secondary bg-white text-blue-600 hover:bg-blue-50 border-none">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
