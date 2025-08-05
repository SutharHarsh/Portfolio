"use client";

import Link from "next/link";
import { useState } from "react";
import image from "../public/assets/profile.jpg";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-['Pacifico'] text-2xl text-gray-900">
            Harsh Suthar
          </Link>

          {/* Hamburger for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`flex-col lg:flex-row lg:flex lg:items-center w-full lg:w-auto absolute lg:static top-full left-0 bg-white lg:bg-transparent border-t lg:border-none border-gray-200 lg:border-0 transition-all duration-300 ease-in-out ${
              menuOpen ? "flex" : "hidden"
            } lg:flex`}
          >
            <Link
              href="/"
              className="block px-6 py-3 text-gray-700 hover:text-blue-600 lg:px-3 lg:py-0"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="block px-6 py-3 text-gray-700 hover:text-blue-600 lg:px-3 lg:py-0"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block px-6 py-3 text-gray-700 hover:text-blue-600 lg:px-3 lg:py-0"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-6 py-3 text-gray-900 font-semibold hover:text-blue-600 lg:px-3 lg:py-0"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Hey! I am, <span className="text-blue-600">Harsh Suthar</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A graphic designer who transforms raw ideas into compelling
                digital stories. Where design isn't just visual — it's visceral.
              </p>
              <div className="flex items-center space-x-6">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Let's Connect
                </Link>
                <Link
                  href="/portfolio"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 cursor-pointer"
                >
                  <span>View My Work</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={image.src}
                alt="Harsh Suthar - Graphic Designer"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl">
                <div className="text-2xl font-bold">1.5+ Years</div>
                <div className="text-sm">Design Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Design Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every pixel has purpose. Every color tells a story. Every layout
              drives results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-flash-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Strategy First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Before I touch a single pixel, I understand your goals,
                audience, and message. Design without strategy is just
                decoration.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-pulse-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Emotional Connection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Great design creates feelings. I craft visuals that don't just
                communicate — they resonate and inspire action.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-line-chart-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Measurable Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful isn't enough. My designs are built to perform —
                driving clicks, conversions, and meaningful results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Creative Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From curious beginnings to strategic design thinking
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img
                  src="https://readdy.ai/api/search-image?query=Early%20design%20sketches%20and%20creative%20exploration%2C%20traditional%20art%20supplies%20mixed%20with%20digital%20tools%2C%20artistic%20journey%20beginning%20with%20passion%20for%20visual%20storytelling%20and%20creative%20expression&width=400&height=300&seq=journey_start_001&orientation=landscape"
                  alt="Early Design Days"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Spark
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  It all started with a fascination for visual communication.
                  What began as doodling in margins evolved into understanding
                  how design shapes perception and drives behavior.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I discovered that great design isn't about making things
                  pretty — it's about making them work. This realization changed
                  everything.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20design%20education%20and%20skill%20development%2C%20advanced%20design%20courses%20and%20workshops%2C%20learning%20industry%20tools%20and%20techniques%2C%20growing%20expertise%20in%20graphic%20design%20principles&width=400&height=300&seq=education_growth_001&orientation=landscape"
                  alt="Skill Development"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mastering the Craft
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Formal education combined with relentless self-learning. From
                  mastering Photoshop and Illustrator to understanding color
                  theory, typography, and composition.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  But the real education came from projects — each one teaching
                  me something new about audience psychology and visual impact.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img
                  src="https://readdy.ai/api/search-image?query=Client%20collaboration%20and%20professional%20design%20projects%2C%20creative%20meetings%20and%20strategic%20planning%20sessions%2C%20building%20successful%20design%20partnerships%20and%20delivering%20impactful%20results&width=400&height=300&seq=client_work_001&orientation=landscape"
                  alt="Client Success"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Strategic Partnership
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Working with diverse clients taught me that design isn't a
                  one-size-fits-all solution. Each brand has unique needs,
                  challenges, and opportunities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From EcoVibes Daily's sustainable messaging to BlueprintBay's
                  corporate authority — I learned to adapt while maintaining
                  design excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for visual storytelling and strategic
              design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Design Specialties
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">YouTube Thumbnails</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">95%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Brand Identity</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">90%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Social Media Design</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">92%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Print Design</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "88%" }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">88%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Technical Skills
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Adobe Photoshop</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">95%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Adobe Illustrator</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">90%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Canva</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">90%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Design Strategy</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "93%" }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">93%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Drives Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every project and partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-user-heart-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Client-Centric Approach
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your success is my success. I don't just create designs — I
                create solutions that align with your goals and exceed your
                expectations.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-rocket-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Continuous Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Design trends evolve rapidly. I stay ahead by constantly
                learning, experimenting, and pushing creative boundaries.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-hand-heart-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Authentic Collaboration
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The best work happens when client and designer truly understand
                each other. I build relationships, not just projects.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-focus-3-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality Over Quantity</h3>
              <p className="text-gray-300 leading-relaxed">
                I'd rather create one outstanding piece than ten mediocre ones.
                Excellence takes time, and it's always worth it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-xl mb-8">
            Let's turn your vision into visual reality. Because great design
            isn't decoration — it's strategy, identity, and power.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="border border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              See My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="font-['Pacifico'] text-3xl mb-4">Harsh Suthar</div>
            <p className="text-gray-400 mb-6">Where design meets strategy</p>
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://www.instagram.com/harsh._.2804/"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <i className="ri-instagram-fill text-xl text-white"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/harshsuthar28/"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill text-xl text-white"></i>
              </a>
              <a
                href="https://www.behance.net/harshsuthar8"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <i className="ri-behance-fill text-xl text-white"></i>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
              <p>&copy; 2024 Harsh Suthar. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
