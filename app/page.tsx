
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-['Pacifico'] text-2xl text-gray-900">
              Editz Block
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Portfolio
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20graphic%20design%20workspace%20with%20creative%20tools%2C%20vibrant%20colors%2C%20and%20design%20elements%20scattered%20across%20a%20clean%20minimal%20desk%2C%20professional%20lighting%20creating%20artistic%20shadows%2C%20contemporary%20aesthetic%20with%20computer%20screen%20showing%20design%20work%2C%20inspiring%20creative%20environment%20with%20color%20swatches%20and%20typography%20samples&width=1920&height=1080&seq=hero_bg_001&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="w-full max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Design That <span className="text-blue-400">Drives</span> Action
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm Harsh Suthar, transforming raw ideas into compelling digital stories through strategic design that doesn't just look good — it works hard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/portfolio" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="border border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where Design Meets Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every pixel has purpose. Every color tells a story. Every layout drives results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=YouTube%20play%20button%20icon%20with%20vibrant%20red%20background%2C%20modern%20clean%20design%2C%20professional%20thumbnail%20concept%20with%20click-worthy%20elements%2C%20bold%20graphics%20and%20engaging%20visual%20style&width=64&height=64&seq=youtube_icon_001&orientation=squarish')`,
                  backgroundSize: 'cover'
                }}
              >
                <i className="ri-play-circle-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">YouTube Thumbnails</h3>
              <p className="text-gray-600 leading-relaxed">
                Thumbnails that don't just catch the eye — they command clicks. Strategic visual storytelling that turns browsers into viewers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Social%20media%20posts%20collage%20with%20Instagram%20and%20Facebook%20style%20layouts%2C%20vibrant%20colorful%20designs%2C%20engagement-focused%20graphics%20with%20modern%20typography%20and%20trendy%20visual%20elements&width=64&height=64&seq=social_icon_001&orientation=squarish')`,
                  backgroundSize: 'cover'
                }}
              >
                <i className="ri-instagram-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Posts</h3>
              <p className="text-gray-600 leading-relaxed">
                Converting scrollers into followers through designs that stop thumbs mid-scroll and spark engagement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Brand%20identity%20elements%20with%20corporate%20logos%2C%20business%20cards%2C%20and%20professional%20branding%20materials%2C%20clean%20modern%20design%20with%20sophisticated%20color%20palette%20and%20typography&width=64&height=64&seq=brand_icon_001&orientation=squarish')`,
                  backgroundSize: 'cover'
                }}
              >
                <i className="ri-palette-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Identity</h3>
              <p className="text-gray-600 leading-relaxed">
                From eco-conscious EcoVibes Daily to sleek BlueprintBay corporates — brands that resonate and remember.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into projects where creativity meets strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group relative overflow-hidden rounded-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=EcoVibes%20Daily%20brand%20identity%20showcase%20with%20eco-friendly%20green%20branding%20elements%2C%20sustainable%20design%20concepts%2C%20natural%20color%20palette%20with%20organic%20shapes%20and%20environmental%20themes%2C%20modern%20eco-conscious%20visual%20identity&width=600&height=400&seq=ecovibe_project_001&orientation=landscape"
                alt="EcoVibes Daily Project"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">EcoVibes Daily</h3>
                  <p className="text-gray-200">Eco-conscious brand identity that speaks sustainability</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=BlueprintBay%20corporate%20branding%20with%20sleek%20professional%20blue%20color%20scheme%2C%20modern%20business%20visual%20identity%2C%20clean%20geometric%20designs%20and%20corporate%20materials%2C%20sophisticated%20brand%20elements&width=600&height=400&seq=blueprint_project_001&orientation=landscape"
                alt="BlueprintBay Project"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">BlueprintBay</h3>
                  <p className="text-gray-200">Sleek corporate visuals that command authority</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/portfolio" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap inline-block"
            >
              Explore Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Beyond Pixels, It's About <span className="text-blue-400">Energy</span>
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-8">
            Great design isn't decoration — it's strategy, it's identity, it's power. 
            Every project I create bridges bold creativity with strategic thinking, 
            understanding what makes people click, care, and remember.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-flash-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Strategic Thinking</h3>
              <p className="text-gray-300">Every design decision is backed by purpose and psychology</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-palette-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Visual Impact</h3>
              <p className="text-gray-300">Creating memorable experiences through powerful visual storytelling</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-target-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Results Driven</h3>
              <p className="text-gray-300">Designs that don't just look good — they convert and perform</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-xl mb-8">
            Let's create something extraordinary together. Because your brand deserves design that works as hard as you do.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="font-['Pacifico'] text-3xl mb-4">Editz Block</div>
            <p className="text-gray-400 mb-6">Where design meets strategy</p>
            <div className="flex items-center justify-center space-x-6">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-xl text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-xl text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-dribbble-fill text-xl text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-behance-fill text-xl text-white"></i>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
              <p>&copy; 2024 Harsh Suthar - Editz Block. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
