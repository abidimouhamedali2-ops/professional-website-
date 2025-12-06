import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI/UX Design Services | Professional Website',
  description: 'User-centered design for exceptional experiences. Expert interface design, user research, and design thinking services.',
  keywords: 'ui ux design, user interface, user experience, design thinking, product design',
}

export default function UIUXDesign() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
              <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7" />
              </svg>
              Back to Home
            </Link>
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              UI/UX Design Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              User-centered design solutions that create exceptional experiences and drive meaningful engagement with your digital products.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Quote
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Design Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">User Research</h3>
                  <p className="text-gray-600">Deep user insights through interviews, surveys, and behavioral analysis</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Prototyping</h3>
                  <p className="text-gray-600">Interactive prototypes to validate ideas and gather user feedback early</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15l2.86 2.86a2 2 0 00-1.14 3.14l-2.57-2.57a2 2 0 00-1.71 1.71l1.17 1.17a2 2 0 001.7 1.71l2.57-2.57a2 2 0 001.14-3.14l-2.86-2.86a2 2 0 000-2.83z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interface Design</h3>
                  <p className="text-gray-600">Beautiful, intuitive interfaces that delight users and drive conversions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Design</h3>
                  <p className="text-gray-600">Native and responsive mobile designs optimized for touch interactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Design Process</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Research', desc: 'Understand users and business goals' },
                { step: '02', title: 'Ideate', desc: 'Brainstorm creative solutions' },
                { step: '03', title: 'Design', desc: 'Create wireframes and mockups' },
                { step: '04', title: 'Test', desc: 'Validate with real users' }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Design Tools & Technologies</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Framer', 'Principle', 'Zeplin', 'Miro'].map((tool) => (
                <div key={tool} className="text-center">
                  <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Benefits for Your Business</h2>
            
            <div className="space-y-6">
              {[
                'Increased user engagement and retention',
                'Higher conversion rates and sales',
                'Reduced development costs with validated designs',
                'Improved brand perception and customer loyalty',
                'Better accessibility and inclusive design',
                'Faster time-to-market with proven methodologies'
              ].map((benefit) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Design Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Banking App Redesign</h3>
                <p className="text-gray-600 mb-4">Complete UX overhaul resulting in 50% increase in user engagement and 30% reduction in support tickets</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Mobile App</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">UX Research</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Prototyping</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4">End-to-end design for modern e-commerce experience with 40% conversion rate improvement</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Web Design</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">User Testing</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Design System</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Amazing Experiences?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's design user experiences that delight your customers and drive business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </Link>
            <Link href="/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
