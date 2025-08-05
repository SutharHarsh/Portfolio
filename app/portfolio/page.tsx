
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'EcoVibes Daily Brand Identity',
      category: 'branding',
      image: 'https://readdy.ai/api/search-image?query=EcoVibes%20Daily%20complete%20brand%20identity%20package%20with%20eco-friendly%20green%20color%20palette%2C%20sustainable%20logo%20design%2C%20business%20cards%20and%20letterhead%2C%20natural%20organic%20shapes%20and%20environmental%20themes%2C%20professional%20brand%20guidelines&width=600&height=400&seq=eco_brand_001&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=EcoVibes%20Daily%20logo%20design%20with%20eco-friendly%20green%20color%20palette%2C%20sustainable%20organic%20leaf%20elements%2C%20modern%20minimalist%20branding%20on%20white%20background%2C%20professional%20quality&width=800&height=600&seq=eco_logo_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=EcoVibes%20Daily%20business%20cards%20and%20stationery%20design%20with%20natural%20green%20colors%2C%20eco-friendly%20materials%20texture%2C%20sustainable%20branding%20elements%2C%20professional%20layout&width=800&height=600&seq=eco_cards_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=EcoVibes%20Daily%20brand%20guidelines%20document%20showing%20color%20palette%2C%20typography%20samples%2C%20logo%20usage%20rules%2C%20environmental%20sustainability%20theme&width=800&height=600&seq=eco_guidelines_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=EcoVibes%20Daily%20product%20packaging%20design%20with%20eco-friendly%20materials%2C%20sustainable%20green%20branding%2C%20natural%20organic%20shapes%20and%20environmental%20messaging&width=800&height=600&seq=eco_packaging_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=EcoVibes%20Daily%20website%20mockup%20with%20eco-friendly%20design%2C%20green%20color%20scheme%2C%20sustainable%20lifestyle%20imagery%2C%20modern%20clean%20interface&width=800&height=600&seq=eco_website_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=EcoVibes%20Daily%20social%20media%20templates%20with%20eco-friendly%20branding%2C%20sustainable%20lifestyle%20content%2C%20green%20color%20palette%2C%20professional%20design&width=800&height=600&seq=eco_social_001&orientation=landscape'
      ],
      description: 'Complete brand identity for eco-conscious lifestyle brand',
      fullDescription: 'A comprehensive brand identity project for EcoVibes Daily, an eco-conscious lifestyle brand focused on sustainable living. The project included logo design, color palette development, typography selection, business stationery, and brand guidelines. The design emphasizes natural elements with a modern twist, using earthy greens and organic shapes to communicate environmental responsibility.',
      client: 'EcoVibes Daily',
      duration: '6 weeks',
      services: ['Logo Design', 'Brand Guidelines', 'Stationery Design', 'Color Strategy'],
      results: '40% increase in brand recognition, 60% boost in social media engagement'
    },
    {
      id: 2,
      title: 'Viral YouTube Thumbnail Series',
      category: 'youtube',
      image: 'https://readdy.ai/api/search-image?query=YouTube%20thumbnail%20collection%20with%20bold%20typography%2C%20vibrant%20colors%2C%20engaging%20faces%20with%20expressions%2C%20click-worthy%20design%20elements%2C%20professional%20quality%20with%20high%20contrast%20and%20eye-catching%20visuals&width=600&height=400&seq=youtube_thumb_001&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Tech%20review%20YouTube%20thumbnail%20with%20bold%20red%20and%20blue%20colors%2C%20shocked%20face%20expression%2C%20large%20text%20overlay%2C%20high%20contrast%20design%2C%20click-worthy%20elements&width=800&height=600&seq=youtube_tech1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Gaming%20YouTube%20thumbnail%20with%20neon%20colors%2C%20action-packed%20design%2C%20bold%20typography%2C%20energetic%20visuals%2C%20gaming%20controller%20elements&width=800&height=600&seq=youtube_gaming1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Tutorial%20YouTube%20thumbnail%20with%20bright%20yellow%20background%2C%20clear%20instructional%20text%2C%20professional%20presenter%2C%20step-by-step%20visual%20elements&width=800&height=600&seq=youtube_tutorial1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Product%20review%20YouTube%20thumbnail%20with%20product%20showcase%2C%20comparison%20elements%2C%20rating%20stars%2C%20professional%20layout%20with%20vibrant%20colors&width=800&height=600&seq=youtube_product1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Reaction%20YouTube%20thumbnail%20with%20exaggerated%20facial%20expression%2C%20colorful%20background%2C%20reaction%20elements%2C%20engaging%20visual%20design&width=800&height=600&seq=youtube_reaction1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Vlog%20YouTube%20thumbnail%20with%20lifestyle%20imagery%2C%20personal%20branding%20elements%2C%20warm%20colors%2C%20engaging%20personality-focused%20design&width=800&height=600&seq=youtube_vlog1_001&orientation=landscape'
      ],
      description: 'High-converting thumbnails that increased CTR by 340%',
      fullDescription: 'Created a series of high-impact YouTube thumbnails for a tech review channel. Each thumbnail was designed with psychological triggers, bold typography, and vibrant color schemes to maximize click-through rates. The project involved A/B testing different design approaches and analyzing performance metrics.',
      client: 'TechReview Pro',
      duration: '3 months',
      services: ['Thumbnail Design', 'A/B Testing', 'Performance Analysis', 'Brand Consistency'],
      results: '340% CTR increase, 2M+ additional views, 50K new subscribers'
    },
    {
      id: 3,
      title: 'BlueprintBay Corporate Suite',
      category: 'branding',
      image: 'https://readdy.ai/api/search-image?query=BlueprintBay%20corporate%20brand%20materials%20with%20sleek%20blue%20color%20scheme%2C%20professional%20business%20cards%2C%20letterhead%2C%20and%20corporate%20identity%20elements%2C%20modern%20geometric%20design%20with%20sophisticated%20typography&width=600&height=400&seq=blueprint_corp_001&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=BlueprintBay%20corporate%20logo%20design%20with%20modern%20blue%20geometric%20elements%2C%20construction%20industry%20symbolism%2C%20professional%20typography%2C%20clean%20minimalist%20style&width=800&height=600&seq=blueprint_logo_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=BlueprintBay%20business%20cards%20with%20sleek%20blue%20corporate%20design%2C%20professional%20layout%2C%20geometric%20patterns%2C%20construction%20management%20branding&width=800&height=600&seq=blueprint_cards_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=BlueprintBay%20corporate%20presentation%20templates%20with%20blue%20color%20scheme%2C%20professional%20layouts%2C%20construction%20industry%20graphics%2C%20modern%20design&width=800&height=600&seq=blueprint_presentation_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=BlueprintBay%20corporate%20brochure%20design%20with%20construction%20management%20content%2C%20blue%20branding%2C%20professional%20photography%2C%20architectural%20elements&width=800&height=600&seq=blueprint_brochure_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=BlueprintBay%20digital%20assets%20including%20email%20signatures%2C%20social%20media%20headers%2C%20website%20elements%2C%20corporate%20blue%20branding&width=800&height=600&seq=blueprint_digital_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=BlueprintBay%20corporate%20stationery%20suite%20with%20letterhead%2C%20envelopes%2C%20folders%2C%20professional%20blue%20branding%2C%20construction%20industry%20design&width=800&height=600&seq=blueprint_stationery_001&orientation=landscape'
      ],
      description: 'Sophisticated corporate visual identity and materials',
      fullDescription: 'Developed a complete corporate visual identity for BlueprintBay, a construction management software company. The project encompassed logo redesign, corporate stationery, presentation templates, and digital brand assets. The design reflects professionalism and innovation with clean geometric elements.',
      client: 'BlueprintBay Inc.',
      duration: '8 weeks',
      services: ['Corporate Identity', 'Logo Redesign', 'Stationery Suite', 'Digital Assets'],
      results: '70% improvement in brand perception, 25% increase in lead generation'
    },
    {
      id: 4,
      title: 'Instagram Carousel Campaign',
      category: 'social',
      image: 'https://readdy.ai/api/search-image?query=Instagram%20carousel%20posts%20with%20cohesive%20design%20theme%2C%20modern%20typography%2C%20engaging%20visual%20storytelling%2C%20swipe-worthy%20content%20design%20with%20consistent%20brand%20colors%20and%20professional%20layout&width=600&height=400&seq=insta_carousel_001&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Instagram%20carousel%20slide%201%20with%20minimalist%20living%20room%20setup%2C%20clean%20white%20aesthetics%2C%20modern%20furniture%2C%20inspiring%20lifestyle%20photography&width=800&height=600&seq=insta_slide1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Instagram%20carousel%20slide%202%20with%20minimalist%20bedroom%20design%2C%20neutral%20colors%2C%20organized%20space%2C%20lifestyle%20inspiration%20content&width=800&height=600&seq=insta_slide2_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Instagram%20carousel%20slide%203%20with%20minimalist%20kitchen%20organization%2C%20clean%20lines%2C%20decluttered%20space%2C%20lifestyle%20tips%20visualization&width=800&height=600&seq=insta_slide3_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Instagram%20carousel%20slide%204%20with%20minimalist%20wardrobe%20organization%2C%20capsule%20wardrobe%20concept%2C%20neutral%20clothing%2C%20lifestyle%20content&width=800&height=600&seq=insta_slide4_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Instagram%20carousel%20slide%205%20with%20minimalist%20workspace%20setup%2C%20clean%20desk%20organization%2C%20productivity%20tips%2C%20modern%20office%20design&width=800&height=600&seq=insta_slide5_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Instagram%20carousel%20slide%206%20with%20minimalist%20living%20tips%20infographic%2C%20clean%20design%2C%20lifestyle%20advice%2C%20modern%20typography%20layout&width=800&height=600&seq=insta_slide6_001&orientation=landscape'
      ],
      description: 'Multi-slide storytelling that boosted engagement 250%',
      fullDescription: 'Designed a comprehensive Instagram carousel campaign for a lifestyle brand focusing on minimalist living. Each carousel told a complete story through visual progression, maintaining brand consistency while maximizing swipe-through rates and engagement.',
      client: 'Minimal Living Co.',
      duration: '4 weeks',
      services: ['Social Media Design', 'Content Strategy', 'Visual Storytelling', 'Brand Consistency'],
      results: '250% engagement increase, 80% higher save rate, 15K new followers'
    },
    {
      id: 5,
      title: 'Tech Conference Poster Series',
      category: 'print',
      image: 'https://readdy.ai/api/search-image?query=Modern%20tech%20conference%20poster%20design%20with%20futuristic%20elements%2C%20bold%20typography%2C%20tech-inspired%20graphics%2C%20professional%20event%20branding%20with%20geometric%20patterns%20and%20contemporary%20color%20scheme&width=600&height=400&seq=tech_poster_001&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=TechSummit%202024%20main%20event%20poster%20with%20futuristic%20design%2C%20bold%20typography%2C%20tech%20conference%20branding%2C%20geometric%20patterns%2C%20vibrant%20colors&width=800&height=600&seq=tech_main_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=TechSummit%20speaker%20announcement%20poster%20with%20professional%20headshots%2C%20modern%20layout%2C%20tech%20conference%20branding%2C%20clean%20design&width=800&height=600&seq=tech_speakers_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=TechSummit%20workshop%20schedule%20poster%20with%20organized%20timeline%20layout%2C%20tech%20conference%20branding%2C%20clear%20information%20hierarchy&width=800&height=600&seq=tech_schedule_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=TechSummit%20sponsors%20poster%20with%20company%20logos%2C%20professional%20layout%2C%20tech%20conference%20branding%2C%20partnership%20recognition%20design&width=800&height=600&seq=tech_sponsors_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=TechSummit%20networking%20event%20poster%20with%20social%20elements%2C%20tech%20conference%20branding%2C%20community-focused%20design&width=800&height=600&seq=tech_networking_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=TechSummit%20venue%20map%20poster%20with%20location%20details%2C%20wayfinding%20elements%2C%20tech%20conference%20branding%2C%20practical%20information%20design&width=800&height=600&seq=tech_venue_001&orientation=landscape'
      ],
      description: 'Event branding that created buzz before the event',
      fullDescription: 'Created a series of promotional materials for TechSummit 2024, including posters, banners, and digital assets. The design incorporated futuristic elements and bold typography to appeal to the tech-savvy audience while maintaining professional credibility.',
      client: 'TechSummit 2024',
      duration: '5 weeks',
      services: ['Event Branding', 'Poster Design', 'Digital Marketing', 'Print Materials'],
      results: '500% increase in early bird registrations, sold out event'
    },
    {
      id: 6,
      title: 'Fashion Brand Social Strategy',
      category: 'social',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20brand%20social%20media%20posts%20with%20elegant%20typography%2C%20luxury%20aesthetic%2C%20high-fashion%20photography%20style%2C%20Instagram-worthy%20layouts%20with%20sophisticated%20color%20palette%20and%20premium%20brand%20feel&width=600&height=400&seq=fashion_social_001&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Luxury%20fashion%20Instagram%20post%20with%20elegant%20model%20photography%2C%20sophisticated%20typography%2C%20premium%20brand%20aesthetic%2C%20high-end%20fashion%20styling&width=800&height=600&seq=fashion_post1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Fashion%20brand%20product%20showcase%20with%20luxury%20accessories%2C%20elegant%20layout%2C%20premium%20branding%2C%20sophisticated%20color%20palette&width=800&height=600&seq=fashion_product1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Fashion%20brand%20story%20template%20with%20behind-the-scenes%20content%2C%20luxury%20aesthetic%2C%20elegant%20design%20elements%2C%20premium%20branding&width=800&height=600&seq=fashion_story1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Fashion%20brand%20collection%20announcement%20with%20luxury%20fashion%20photography%2C%20elegant%20typography%2C%20premium%20brand%20aesthetic&width=800&height=600&seq=fashion_collection1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Fashion%20brand%20event%20invitation%20with%20luxury%20design%20elements%2C%20elegant%20invitation%20layout%2C%20premium%20branding%2C%20sophisticated%20styling&width=800&height=600&seq=fashion_event1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Fashion%20brand%20testimonial%20post%20with%20customer%20quotes%2C%20luxury%20aesthetic%2C%20elegant%20design%2C%20premium%20brand%20presentation&width=800&height=600&seq=fashion_testimonial1_001&orientation=landscape'
      ],
      description: 'Luxury fashion content that elevated brand perception',
      fullDescription: 'Developed a complete social media design strategy for a luxury fashion brand, creating templates and guidelines for consistent, high-end visual content across all platforms. The design emphasized elegance and sophistication.',
      client: 'Luxe Fashion House',
      duration: '10 weeks',
      services: ['Social Strategy', 'Template Design', 'Brand Guidelines', 'Content Planning'],
      results: '400% increase in luxury market engagement, 60% boost in sales inquiries'
    },
    {
      id: 7,
      title: 'Gaming Channel Rebrand',
      category: 'youtube',
      image: 'https://readdy.ai/api/search-image?query=Gaming%20YouTube%20channel%20branding%20with%20dynamic%20thumbnails%2C%20gaming-inspired%20graphics%2C%20bold%20neon%20colors%2C%20action-packed%20designs%20with%20gaming%20elements%20and%20energetic%20visual%20style&width=600&height=400&seq=gaming_rebrand_001&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Gaming%20YouTube%20channel%20logo%20with%20neon%20colors%2C%20gaming%20controller%20elements%2C%20dynamic%20design%2C%20esports%20branding%20aesthetic&width=800&height=600&seq=gaming_logo_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Gaming%20YouTube%20channel%20art%20banner%20with%20futuristic%20design%2C%20gaming%20graphics%2C%20neon%20color%20scheme%2C%20professional%20gaming%20branding&width=800&height=600&seq=gaming_banner_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Gaming%20YouTube%20thumbnail%20template%20with%20action-packed%20design%2C%20bold%20typography%2C%20neon%20highlights%2C%20gaming%20interface%20elements&width=800&height=600&seq=gaming_thumbnail_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Gaming%20stream%20overlay%20graphics%20with%20HUD%20elements%2C%20subscriber%20alerts%2C%20chat%20box%20design%2C%20professional%20gaming%20interface&width=800&height=600&seq=gaming_overlay_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Gaming%20YouTube%20end%20screen%20template%20with%20subscribe%20buttons%2C%20video%20recommendations%2C%20gaming%20branding%20elements&width=800&height=600&seq=gaming_endscreen_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Gaming%20social%20media%20kit%20with%20Twitter%20headers%2C%20Instagram%20posts%2C%20gaming%20branding%20consistency%2C%20neon%20color%20scheme&width=800&height=600&seq=gaming_social_001&orientation=landscape'
      ],
      description: 'Complete channel makeover with 500% subscriber growth',
      fullDescription: 'Executed a complete visual rebrand for a gaming YouTube channel, including new logo, channel art, thumbnail templates, and overlay graphics. The design captured the high-energy gaming aesthetic while improving brand recognition.',
      client: 'GameMaster Pro',
      duration: '6 weeks',
      services: ['Channel Rebrand', 'Logo Design', 'Thumbnail Templates', 'Overlay Graphics'],
      results: '500% subscriber growth, 300% increase in watch time, viral video success'
    },
    {
      id: 8,
      title: 'Restaurant Menu & Brochure',
      category: 'print',
      image: 'https://readdy.ai/api/search-image?query=Restaurant%20menu%20and%20brochure%20design%20with%20appetizing%20food%20photography%2C%20elegant%20typography%2C%20warm%20color%20palette%2C%20professional%20layout%20with%20appetizing%20visual%20presentation%20and%20premium%20dining%20aesthetic&width=600&height=400&seq=restaurant_menu_001&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Italian%20restaurant%20menu%20design%20with%20appetizing%20food%20photography%2C%20elegant%20typography%2C%20warm%20colors%2C%20premium%20dining%20presentation&width=800&height=600&seq=restaurant_menu1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Restaurant%20wine%20list%20design%20with%20elegant%20layout%2C%20sophisticated%20typography%2C%20premium%20wine%20presentation%2C%20Italian%20restaurant%20branding&width=800&height=600&seq=restaurant_wine_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Restaurant%20promotional%20brochure%20with%20food%20photography%2C%20dining%20experience%20imagery%2C%20elegant%20design%2C%20Italian%20cuisine%20presentation&width=800&height=600&seq=restaurant_brochure_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Restaurant%20table%20tent%20cards%20with%20daily%20specials%2C%20elegant%20design%2C%20food%20photography%2C%20Italian%20restaurant%20branding&width=800&height=600&seq=restaurant_tent_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Restaurant%20business%20cards%20with%20elegant%20design%2C%20Italian%20restaurant%20branding%2C%20sophisticated%20typography%2C%20warm%20color%20palette&width=800&height=600&seq=restaurant_cards_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Restaurant%20catering%20menu%20with%20elegant%20layout%2C%20Italian%20cuisine%20photography%2C%20professional%20presentation%2C%20sophisticated%20design&width=800&height=600&seq=restaurant_catering_001&orientation=landscape'
      ],
      description: 'Appetite-inspiring designs that increased orders by 40%',
      fullDescription: 'Designed a complete set of restaurant materials including menus, brochures, and promotional materials for an upscale Italian restaurant. The design emphasized appetite appeal and premium dining experience.',
      client: 'Bella Vista Restaurant',
      duration: '4 weeks',
      services: ['Menu Design', 'Brochure Design', 'Food Photography Direction', 'Print Production'],
      results: '40% increase in average order value, 30% boost in repeat customers'
    },
    {
      id: 9,
      title: 'Fitness Influencer Content',
      category: 'social',
      image: 'https://readdy.ai/api/search-image?query=Fitness%20influencer%20social%20media%20content%20with%20motivational%20typography%2C%20energetic%20colors%2C%20workout-inspired%20graphics%2C%20Instagram%20stories%20and%20posts%20with%20dynamic%20layouts%20and%20inspiring%20fitness%20visuals&width=600&height=400&seq=fitness_content_001&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Fitness%20Instagram%20post%20with%20workout%20photography%2C%20motivational%20quotes%2C%20energetic%20design%2C%20fitness%20influencer%20branding&width=800&height=600&seq=fitness_post1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Fitness%20Instagram%20story%20template%20with%20workout%20tips%2C%20progress%20tracking%2C%20motivational%20design%2C%20fitness%20branding&width=800&height=600&seq=fitness_story1_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Fitness%20transformation%20post%20with%20before%2Fafter%20layout%2C%20motivational%20messaging%2C%20professional%20fitness%20photography&width=800&height=600&seq=fitness_transform_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Fitness%20workout%20guide%20infographic%20with%20exercise%20illustrations%2C%20step-by-step%20instructions%2C%20motivational%20design&width=800&height=600&seq=fitness_guide_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Fitness%20nutrition%20post%20with%20healthy%20meal%20photography%2C%20nutritional%20information%2C%20clean%20design%2C%20fitness%20branding&width=800&height=600&seq=fitness_nutrition_001&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Fitness%20community%20post%20with%20group%20workout%20photography%2C%20motivational%20messaging%2C%20inclusive%20fitness%20content%20design&width=800&height=600&seq=fitness_community_001&orientation=landscape'
      ],
      description: 'Motivational content that built a 100k+ community',
      fullDescription: 'Created a comprehensive social media content strategy for a fitness influencer, including post templates, story designs, and motivational graphics. The design focused on energy and inspiration to build community engagement.',
      client: 'FitLife Coach',
      duration: '12 weeks',
      services: ['Content Templates', 'Story Design', 'Motivational Graphics', 'Brand Development'],
      results: '100K+ follower growth, 300% engagement rate, successful course launch'
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

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-[\'Pacifico\'] text-2xl text-gray-900">
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
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openProjectModal(project)}
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
                      <span className="font-semibold">View Project Details</span>
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

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeProjectModal}>
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header with Image Slider */}
            <div className="relative">
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img 
                  src={selectedProject.images[currentSlide]}
                  alt={`${selectedProject.title} - Slide ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 shadow-lg cursor-pointer"
                >
                  <i className="ri-arrow-left-line text-2xl"></i>
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 shadow-lg cursor-pointer"
                >
                  <i className="ri-arrow-right-line text-2xl"></i>
                </button>

                {/* Close Button */}
                <button 
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 shadow-lg cursor-pointer"
                >
                  <i className="ri-close-fill text-xl"></i>
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                        index === currentSlide 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>

                {/* Slide Counter */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                  {currentSlide + 1} / {selectedProject.images.length}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{selectedProject.fullDescription}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Services Provided</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((service, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-2">Results Achieved</h3>
                    <p className="text-green-700">{selectedProject.results}</p>
                  </div>
                </div>

                {/* Project Details Sidebar */}
                <div className="md:col-span-1">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">CLIENT</div>
                        <div className="text-gray-900 font-medium">{selectedProject.client}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">DURATION</div>
                        <div className="text-gray-900 font-medium">{selectedProject.duration}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">CATEGORY</div>
                        <div className="text-gray-900 font-medium capitalize">{selectedProject.category.replace('_', ' ')}</div>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">GALLERY</div>
                        <div className="text-gray-900 font-medium">{selectedProject.images.length} Images</div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 text-gray-400">
                      <p>&copy; 2024 Harsh Suthar - Editz Block. All rights reserved.</p>
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="mt-6 bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Project Gallery</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedProject.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
                            index === currentSlide 
                              ? 'ring-2 ring-blue-600' 
                              : 'hover:opacity-75'
                          }`}
                        >
                          <img 
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {index === currentSlide && (
                            <div className="absolute inset-0 bg-blue-600/20"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
            <div className="font-[\'Pacifico\'] text-3xl mb-4">Editz Block</div>
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
