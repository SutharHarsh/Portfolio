
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'EcoVibes Daily Brand Identity',
      category: 'branding',
      image: 'https://readdy.ai/api/search-image?query=EcoVibes%20Daily%20complete%20brand%20identity%20package%20with%20eco-friendly%20green%20color%20palette%2C%20sustainable%20logo%20design%2C%20business%20cards%20and%20letterhead%2C%20natural%20organic%20shapes%20and%20environmental%20themes%2C%20professional%20brand%20guidelines&width=600&height=400&seq=eco_brand_001&orientation=landscape',
      description: 'Complete brand identity for eco-conscious lifestyle brand'
    },
    {
      id: 2,
      title: 'Viral YouTube Thumbnail Series',
      category: 'youtube',
      image: 'https://readdy.ai/api/search-image?query=YouTube%20thumbnail%20collection%20with%20bold%20typography%2C%20vibrant%20colors%2C%20engaging%20faces%20with%20expressions%2C%20click-worthy%20design%20elements%2C%20professional%20quality%20with%20high%20contrast%20and%20eye-catching%20visuals&width=600&height=400&seq=youtube_thumb_001&orientation=landscape',
      description: 'High-converting thumbnails that increased CTR by 340%'
    },
    {
      id: 3,
      title: 'BlueprintBay Corporate Suite',
      category: 'branding',
      image: 'https://readdy.ai/api/search-image?query=BlueprintBay%20corporate%20brand%20materials%20with%20sleek%20blue%20color%20scheme%2C%20professional%20business%20cards%2C%20letterhead%2C%20and%20corporate%20identity%20elements%2C%20modern%20geometric%20design%20with%20sophisticated%20typography&width=600&height=400&seq=blueprint_corp_001&orientation=landscape',
      description: 'Sophisticated corporate visual identity and materials'
    },
    {
      id: 4,
      title: 'Instagram Carousel Campaign',
      category: 'social',
      image: 'https://readdy.ai/api/search-image?query=Instagram%20carousel%20posts%20with%20cohesive%20design%20theme%2C%20modern%20typography%2C%20engaging%20visual%20storytelling%2C%20swipe-worthy%20content%20design%20with%20consistent%20brand%20colors%20and%20professional%20layout&width=600&height=400&seq=insta_carousel_001&orientation=landscape',
      description: 'Multi-slide storytelling that boosted engagement 250%'
    },
    {
      id: 5,
      title: 'Tech Conference Poster Series',
      category: 'print',
      image: 'https://readdy.ai/api/search-image?query=Modern%20tech%20conference%20poster%20design%20with%20futuristic%20elements%2C%20bold%20typography%2C%20tech-inspired%20graphics%2C%20professional%20event%20branding%20with%20geometric%20patterns%20and%20contemporary%20color%20scheme&width=600&height=400&seq=tech_poster_001&orientation=landscape',
      description: 'Event branding that created buzz before the event'
    },
    {
      id: 6,
      title: 'Fashion Brand Social Strategy',
      category: 'social',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20brand%20social%20media%20posts%20with%20elegant%20typography%2C%20luxury%20aesthetic%2C%20high-fashion%20photography%20style%2C%20Instagram-worthy%20layouts%20with%20sophisticated%20color%20palette%20and%20premium%20brand%20feel&width=600&height=400&seq=fashion_social_001&orientation=landscape',
      description: 'Luxury fashion content that elevated brand perception'
    },
    {
      id: 7,
      title: 'Gaming Channel Rebrand',
      category: 'youtube',
      image: 'https://readdy.ai/api/search-image?query=Gaming%20YouTube%20channel%20branding%20with%20dynamic%20thumbnails%2C%20gaming-inspired%20graphics%2C%20bold%20neon%20colors%2C%20action-packed%20designs%20with%20gaming%20elements%20and%20energetic%20visual%20style&width=600&height=400&seq=gaming_rebrand_001&orientation=landscape',
      description: 'Complete channel makeover with 500% subscriber growth'
    },
    {
      id: 8,
      title: 'Restaurant Menu & Brochure',
      category: 'print',
      image: 'https://readdy.ai/api/search-image?query=Restaurant%20menu%20and%20brochure%20design%20with%20appetizing%20food%20photography%2C%20elegant%20typography%2C%20warm%20color%20palette%2C%20professional%20layout%20with%20appetizing%20visual%20presentation%20and%20premium%20dining%20aesthetic&width=600&height=400&seq=restaurant_menu_001&orientation=landscape',
      description: 'Appetite-inspiring designs that increased orders by 40%'
    },
    {
      id: 9,
      title: 'Fitness Influencer Content',
      category: 'social',
      image: 'https://readdy.ai/api/search-image?query=Fitness%20influencer%20social%20media%20content%20with%20motivational%20typography%2C%20energetic%20colors%2C%20workout-inspired%20graphics%2C%20Instagram%20stories%20and%20posts%20with%20dynamic%20layouts%20and%20inspiring%20fitness%20visuals&width=600&height=400&seq=fitness_content_001&orientation=landscape',
      description: 'Motivational content that built a 100k+ community'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'branding', label: 'Brand Identity' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'social', label: 'Social Media' },
    { id: 'print', label: 'Print Design' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/portfolio" className="text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
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
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated collection of design projects that transform ideas into compelling visual stories. 
            Each piece represents strategic thinking meeting creative execution.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2">
                      <i className="ri-external-link-fill text-lg"></i>
                      <span className="font-semibold">View Project</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tools & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mastering the craft with industry-leading tools and techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-image-edit-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Photoshop</h3>
              <p className="text-gray-600">Advanced photo manipulation and digital art</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-pencil-ruler-2-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Illustrator</h3>
              <p className="text-gray-600">Vector graphics and logo design</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-layout-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">InDesign</h3>
              <p className="text-gray-600">Print layout and publication design</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-brain-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Design Thinking</h3>
              <p className="text-gray-600">Strategic problem-solving approach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak louder than pixels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">340%</div>
              <div className="text-gray-600">Average CTR increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">250%</div>
              <div className="text-gray-600">Engagement boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500%</div>
              <div className="text-gray-600">Subscriber growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">40%</div>
              <div className="text-gray-600">Sales increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Like What You See?
          </h2>
          <p className="text-xl mb-8">
            Let's create something amazing together. Your next project could be the one that changes everything.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Start Your Project
            </Link>
            <Link 
              href="/about" 
              className="border border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Learn More About Me
            </Link>
          </div>
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
