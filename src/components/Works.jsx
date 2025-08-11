import { ExternalLink, Github, Youtube } from "lucide-react"
import { MY_WORKS } from "../constants/index.js"

const Works = () => {
  return (
    <section id="works" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Works</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects and contributions that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MY_WORKS.map((work, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{work.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{work.description}</p>

                {work.technologies && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-700 text-blue-400 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex space-x-4">
                  {work.github && (
                    <a
                      href={work.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      <Github size={16} className="mr-2 flex-shrink-0" />
                      Code
                    </a>
                  )}

                  {work.youtube && (
                    <a
                      href={work.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors translate-y-3"
                    >
                      <Youtube size={16} className="mr-2 flex-shrink-0" />
                      Channel
                    </a>
                  )}

                  {work.live && (
                    <a
                      href={work.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2 flex-shrink-0" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
