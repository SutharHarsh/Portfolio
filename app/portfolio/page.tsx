"use client";

import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  type Project = (typeof projects)[number];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "EcoVibes Daily Brand Identity",
      category: "branding",
      image:
        "https://lh3.google.com/u/0/d/1OxDueLVSN5M3yr6sM6NFLqsR_JKW4oex=w1330-h912-iv1?auditContext=prefetch",
      images: [
        "https://lh3.google.com/u/0/d/1OxDueLVSN5M3yr6sM6NFLqsR_JKW4oex=w1330-h912-iv1?auditContext=prefetch",
        "https://lh3.google.com/u/0/d/1Si3pA0zOJScIU5M_mh3l_fHpC1Dsjbw-=w1330-h912-iv1?auditContext=prefetch",
        "https://lh3.google.com/u/0/d/1pdu7Z8EbGGaV2ko1Vk10PLBeOqvf4FhB=w1330-h912-iv1?auditContext=forDisplay",
        "https://lh3.google.com/u/0/d/1RRUeXkhq_dy-Qajn-KvCGgYbjTDrAn_L=w1330-h912-iv1?auditContext=forDisplay",
      ],
      description: "Complete brand identity for eco-conscious lifestyle brand",
      fullDescription:
        "A comprehensive brand identity project for EcoVibes Daily, an eco-conscious lifestyle brand focused on sustainable living. The project included logo design, color palette development, typography selection, business stationery, and brand guidelines. The design emphasizes natural elements with a modern twist, using earthy greens and organic shapes to communicate environmental responsibility.",
      client: "EcoVibes Daily",
      duration: "6 weeks",
      services: [
        "Logo Design",
        "Brand Guidelines",
        "Stationery Design",
        "Color Strategy",
      ],
      results:
        "Developed a cohesive brand identity for EcoVibes Daily that visually communicates sustainability through modern, nature-inspired design elements.",
    },
    {
      id: 2,
      title: "Viral YouTube Thumbnail Series",
      category: "youtube",
      image:
        "https://lh3.google.com/u/0/d/1kO-VJADTgb9z2XuHaIx31x25CxLcEqT8=w1920-h912-iv1?auditContext=prefetch",
      images: [
        "https://lh3.google.com/u/0/d/1kO-VJADTgb9z2XuHaIx31x25CxLcEqT8=w1920-h912-iv1?auditContext=prefetch",
        "https://lh3.google.com/u/0/d/11h23HY0mRtwr_EyTLRPvVAKmWvrVPnEB=w1920-h912-iv1?auditContext=prefetch",
        "https://lh3.google.com/u/0/d/1HA7aThn7tGqtP_jNfjq0yCj9rwqaj1wM=w1330-h912-iv1?auditContext=forDisplay",
        "https://lh3.google.com/u/0/d/1whdY3eGFGDSCXAkQxVUz9f7xc4Ll7tOU=w1330-h912-iv1?auditContext=forDisplay",
        "https://lh3.google.com/u/0/d/1schcsKPEcirnildiIB16VOlo4saCpvC-=w1330-h912-iv1?auditContext=forDisplay",
        "https://lh3.google.com/u/0/d/1clEsN04SII7YK6-DZIm7vutxHXo2vbO7=w1330-h912-iv1?auditContext=forDisplay",
      ],
      description: "High-converting thumbnails that increased CTR by 340%",
      fullDescription:
        "Created a series of high-impact YouTube thumbnails for a tech review channel. Each thumbnail was designed with psychological triggers, bold typography, and vibrant color schemes to maximize click-through rates. The project involved A/B testing different design approaches and analyzing performance metrics.",
      client: "TechReview Pro",
      duration: "1 Year",
      services: [
        "Thumbnail Design",
        "A/B Testing",
        "Performance Analysis",
        "Brand Consistency",
      ],
      results:
        "Designed eye-catching YouTube thumbnails that boosted click-through rates and helped the client attract more viewers organically.",
    },
    {
      id: 3,
      title: "BlueprintBay Corporate Suite",
      category: "branding",
      image:
        "https://lh3.google.com/u/0/d/1bhO8nwFYTyNiNZe290eQNPAgt5GcYclN=w1330-h912-iv1?auditContext=prefetch",
      images: [
        "https://lh3.google.com/u/0/d/1bhO8nwFYTyNiNZe290eQNPAgt5GcYclN=w1330-h912-iv1?auditContext=prefetch",
        "https://lh3.google.com/u/0/d/19T0UDU-Lhjsk9MCVS1fyScvoMMkK4skk=w1330-h912-iv1?auditContext=forDisplay",
        "https://lh3.google.com/u/0/d/1CjWuL9zJJHnucx2n-ZQM-ukEEpLsoSm5=w1330-h912-iv1?auditContext=prefetch",
      ],
      description: "Sophisticated corporate visual identity and materials",
      fullDescription:
        "Developed a complete corporate visual identity for BlueprintBay, a construction management software company. The project encompassed logo redesign, corporate stationery, presentation templates, and digital brand assets. The design reflects professionalism and innovation with clean geometric elements.",
      client: "BlueprintBay Inc. (Sample)",
      duration: "8 weeks",
      services: [
        "Corporate Identity",
        "Logo Redesign",
        "Stationery Suite",
        "Digital Assets",
      ],
      results:
        "70% improvement in brand perception, 25% increase in lead generation",
    },
    {
      id: 4,
      title: "Graffical",
      category: "social",
      image:
        "https://lh3.google.com/u/0/d/1l-ZaMWYduxAUQPzgShmQwr3rlfuDPzTG=w1330-h912-iv1?auditContext=prefetch",
      images: [
        "https://lh3.google.com/u/0/d/1l-ZaMWYduxAUQPzgShmQwr3rlfuDPzTG=w1330-h912-iv1?auditContext=prefetch",
        "https://lh3.google.com/u/0/d/1bVSEXAfjreQiUoavMU0CFzM4QSf5w4i4=w1330-h912-iv1?auditContext=forDisplay",
        "https://lh3.google.com/u/0/d/1AFHezy3sTCCqcBBrxIBCj8xvmlczzVvf=w1330-h912-iv1?auditContext=forDisplay",
        "https://lh3.google.com/u/0/d/1xgzGElOxDLmvC5Q6sy5szlCNGpI4gri1=w1330-h912-iv1?auditContext=forDisplay",
      ],
      description:
        "Designed visually engaging social media posts for Graffical to highlight their all-in-one event solutions and boost brand visibility.",
      fullDescription:
        "Designed a series of visually compelling social media posts for Graffical.ca to highlight their event services—from creative design and motion graphics to premium printing and promo items. The content was tailored to reflect their vibrant, professional identity and helped increase engagement, reinforce brand trust, and attract event organizers across various industries. The client appreciated the strong visual storytelling and on-brand execution.",
      client: "Graffical",
      duration: "4 weeks",
      services: [
        "Social Media Design",
        "Content Strategy",
        "Visual Storytelling",
        "Brand Consistency",
      ],
      results:
        "Created engaging social media posts for Graffical that elevated brand appeal and showcased their all-in-one event solutions.",
    },
    {
      id: 5,
      title: "Posters Doctor Clinic",
      category: "print",
      image:
        "https://lh3.google.com/u/0/d/14QSpDGxo8IXlyCJSBvJAtu5sDe7eydlw=w1330-h912-iv1?auditContext=prefetch",
      images: [
        "https://lh3.google.com/u/0/d/14QSpDGxo8IXlyCJSBvJAtu5sDe7eydlw=w1330-h912-iv1?auditContext=prefetch",
        "https://lh3.google.com/u/0/d/1hDzbyk9Ta5cNJcQ5F-OHXwDFY5jCzXn-=w1330-h912-iv1?auditContext=prefetch",
        "https://lh3.google.com/u/0/d/1IU5-4uqcfVrA1decepKi_DhEZXCdToOR=w1330-h912-iv1?auditContext=prefetch",
        "https://lh3.google.com/u/0/d/1NytfSHj6kki6Yk7hygKHYsz9Nlr1gfWl=w1330-h912-iv1?auditContext=prefetch",
      ],
      description:
        "Crafted an eye-catching poster that effectively communicated the message and attracted strong audience attention.",
      fullDescription:
        "Designed a high-impact poster for the client that combined bold visuals with clear, concise messaging to capture audience interest instantly. The layout was strategically balanced to highlight the main theme, essential details, and call-to-action, ensuring the message was both visually appealing and easy to understand. The poster was optimized for both digital and print formats, allowing flexible use across various platforms. The client was highly satisfied with the outcome, noting increased visibility, strong audience response, and how well the design aligned with their brand identity.",
      duration: "5 weeks",
      services: ["Poster Design", "Digital Marketing", "Print Materials"],
      results:
        "Designed a visually impactful poster that boosted visibility and clearly communicated the client’s message. The client appreciated its clean layout, brand alignment, and strong audience response.",
    },
    {
      id: 6,
      title: "Free Webinar Broucher",
      category: "print",
      image:
        "https://lh3.google.com/u/0/d/1AYtpnfkWXEsbyPh_tTDmkERFzsMD_9Xh=w1330-h912-iv1?auditContext=prefetch",
      images: [
        "https://lh3.google.com/u/0/d/1AYtpnfkWXEsbyPh_tTDmkERFzsMD_9Xh=w1330-h912-iv1?auditContext=prefetch",
        "https://lh3.google.com/u/0/d/1MgXVu_1bEGgq4NHnUg8hsTgbdIzyqa0R=w1330-h912-iv1?auditContext=prefetch",
        "https://lh3.google.com/u/0/d/1RHQxxPo-OecF656rws4nFwKaTz_RweC1=w1330-h912-iv1?auditContext=prefetch",
      ],
      description:
        "Designed a high-converting webinar brochure that boosted sign-ups and elevated the client’s brand image.",
      fullDescription:
        "I created a visually appealing and informative brochure for a free webinar, tailored to capture attention and drive registrations. The design strategically highlighted the topic, date, speaker profile, and a clear call-to-action, all while maintaining consistency with the client’s branding. As a result, the brochure helped increase sign-ups by over 40% compared to previous campaigns. It was well-optimized for both digital distribution and print, ensuring flexibility in promotion. The client praised the brochure for its clarity, professional look, and effectiveness in generating interest and engagement.",
      client: "Coach",
      duration: "10 weeks",
      services: [
        "Social Strategy",
        "Template Design",
        "Brand Guidelines",
        "Content Planning",
      ],
      results:
        "Successfully designed and delivered a compelling brochure for a free webinar campaign. The brochure effectively communicated key details—topic, date, speaker credentials, and registration CTA—while maintaining a professional and visually engaging layout aligned with the client’s branding.",
    },
  ];

  const categories = [
    { id: "all", label: "All Work" },
    { id: "branding", label: "Brand Identity" },
    { id: "youtube", label: "YouTube" },
    { id: "social", label: "Social Media" },
    { id: "print", label: "Print Design" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openProjectModal = (project: Project) => {
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
      setCurrentSlide(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated collection of design projects that transform ideas into
            compelling visual stories. Each piece represents strategic thinking
            meeting creative execution.
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
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                      <span className="font-semibold">
                        View Project Details
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeProjectModal}
        >
          <div
            className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image Slider */}
            <div className="relative">
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img
                  src={selectedProject.images[currentSlide]}
                  alt={`${selectedProject.title} - Slide ${currentSlide + 1}`}
                  className="w-full h-full object-contain"
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
                          ? "bg-white"
                          : "bg-white/50 hover:bg-white/75"
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
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Services Provided
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((service, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-2">
                      Results Achieved
                    </h3>
                    <p className="text-green-700">{selectedProject.results}</p>
                  </div>
                </div>

                {/* Project Details Sidebar */}
                <div className="md:col-span-1">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Project Details
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">
                          CLIENT
                        </div>
                        <div className="text-gray-900 font-medium">
                          {selectedProject.client}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">
                          DURATION
                        </div>
                        <div className="text-gray-900 font-medium">
                          {selectedProject.duration}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">
                          CATEGORY
                        </div>
                        <div className="text-gray-900 font-medium capitalize">
                          {selectedProject.category.replace("_", " ")}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-1">
                          GALLERY
                        </div>
                        <div className="text-gray-900 font-medium">
                          {selectedProject.images.length} Images
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 text-gray-400">
                      <p>
                        &copy; 2024 Harsh Suthar - Harsh Suthar. All rights
                        reserved.
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="mt-6 bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Project Gallery
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedProject.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
                            index === currentSlide
                              ? "ring-2 ring-blue-600"
                              : "hover:opacity-75"
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Photoshop
              </h3>
              <p className="text-gray-600">
                Skilled in Adobe Photoshop for advanced photo editing, digital
                artwork, and creating polished visual designs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-pencil-ruler-2-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Illustrator
              </h3>
              <p className="text-gray-600">
                Experienced in Adobe Illustrator for crafting vector graphics,
                logos, and scalable illustrations with precision.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-layout-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Canva</h3>
              <p className="text-gray-600">
                Proficient in using Canva to create visually appealing designs
                for social media, branding, and marketing materials.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-brain-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Design Thinking
              </h3>
              <p className="text-gray-600">
                Experienced in applying design thinking principles to solve
                complex problems creatively and develop user-centered solutions.
              </p>
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
              <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
              <div className="text-gray-600">Average CTR increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
              <div className="text-gray-600">Engagement boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">20%</div>
              <div className="text-gray-600">Subscriber growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15%</div>
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
            Let's create something amazing together. Your next project could be
            the one that changes everything.
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
