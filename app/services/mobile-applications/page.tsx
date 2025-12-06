import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile Applications Services | Professional Website',
  description: 'Native and cross-platform mobile solutions. Expert iOS, Android, and React Native development services.',
  keywords: 'mobile applications, ios, android, react native, cross-platform development',
}

export default function MobileApplications() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
              ← Back to Home
            </Link>
            
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Mobile Application Development
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Creating powerful, intuitive mobile applications that deliver exceptional user experiences across iOS and Android platforms.
            </p>
            
            <Link href="/contact" className="btn-primary">
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cross-Platform</h3>
                  <p className="text-gray-600">Single codebase deployment across iOS and Android with React Native</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">High Performance</h3>
                  <p className="text-gray-600">Optimized for speed and smooth user experience</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                  <p className="text-gray-600">Built with security best practices and robust architecture</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Centered Design</h3>
                  <p className="text-gray-600">Intuitive interfaces designed for optimal mobile experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technologies We Use</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['React Native', 'Flutter', 'Swift', 'Kotlin', 'TypeScript', 'Firebase', 'AWS', 'Docker'].map((tech) => (
                <div key={tech} className="text-center">
                  <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Benefits for Your Business</h2>
            
            <div className="space-y-6">
              {[
                'Wider reach with iOS and Android apps',
                'Enhanced customer engagement and retention',
                'Streamlined mobile business processes',
                'Real-time data synchronization',
                'Offline functionality capabilities',
                'App Store optimization and distribution'
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recent Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">E-Commerce Mobile App</h3>
                <p className="text-gray-600 mb-4">Full-featured shopping app with payment integration and real-time inventory</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React Native</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fitness Tracking App</h3>
                <p className="text-gray-600 mb-4">Health and fitness app with workout tracking and social features</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Flutter</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Firebase</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">REST API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Launch Your Mobile App?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our mobile development solutions can bring your app ideas to life.
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
