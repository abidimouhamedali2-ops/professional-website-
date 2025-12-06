import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="text-2xl font-bold text-white mb-6 block">
                            Nexus<span className="text-blue-400">Digital</span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Transforming businesses through innovative digital solutions. We build the future of technology, today.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services/web-development" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/mobile-applications" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Mobile Apps
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/cloud-solutions" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Cloud Solutions
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/digital-strategy" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Digital Strategy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start text-gray-400">
                                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                                <span>123 Business Avenue, Suite 100<br />New York, NY 10001</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                                <span>hello@nexusdigital.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {currentYear} Nexus Digital. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
