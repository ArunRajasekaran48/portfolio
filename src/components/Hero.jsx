import { Download, Github, Linkedin, Mail, Code, Monitor, Smartphone, Database, Server, Globe, Zap } from "lucide-react"
import { PERSONAL_INFO, SOCIAL_LINKS } from "../constants/index.js"

const Hero = () => {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    email: Mail,
    leetcode: Code,
  }

  return (
    <section id="home" className="min-h-screen flex items-center px-4 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-2">{PERSONAL_INFO.title}</h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8">{PERSONAL_INFO.subtitle}</p>
              <p className="text-gray-400 max-w-2xl leading-relaxed">
                Passionate full-stack developer specializing in modern web technologies. I create scalable applications with
                clean code and exceptional user experiences.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mb-8">
              {Object.entries(SOCIAL_LINKS).map(([key, url]) => {
                if (key === "resume") return null
                const Icon = socialIcons[key]
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors hover:scale-110 transform"
                  >
                    <Icon size={24} className="text-gray-300 hover:text-blue-400" />
                  </a>
                )
              })}
            </div>

            {/* Resume Download */}
            <div className="flex">
              <a
                href={SOCIAL_LINKS.resume}
                download="Arun_Rajasekaran_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors hover:scale-105 transform"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side - Development SVGs */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-96 h-96">
              {/* Central Code Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl">
                <Code size={48} className="text-white" />
              </div>
              
              {/* Floating Icons */}
              <div className="absolute top-8 left-8 p-4 bg-gray-800 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0s'}}>
                <Monitor size={32} className="text-blue-400" />
              </div>
              
              <div className="absolute top-8 right-8 p-4 bg-gray-800 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                <Smartphone size={32} className="text-green-400" />
              </div>
              
              <div className="absolute bottom-8 left-8 p-4 bg-gray-800 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                <Database size={32} className="text-yellow-400" />
              </div>
              
              <div className="absolute bottom-8 right-8 p-4 bg-gray-800 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}>
                <Server size={32} className="text-red-400" />
              </div>
              
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 bg-gray-800 rounded-full shadow-lg animate-bounce" style={{animationDelay: '2s'}}>
                <Globe size={32} className="text-purple-400" />
              </div>
              
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 bg-gray-800 rounded-full shadow-lg animate-bounce" style={{animationDelay: '2.5s'}}>
                <Zap size={32} className="text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
