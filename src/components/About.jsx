import { GraduationCap, MapPin, User } from "lucide-react"
import { PERSONAL_INFO } from "../constants/index.js"

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <User className="text-blue-400 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate Full Stack Developer with expertise in MERN stack and Java Spring Boot. I love
                  creating efficient, scalable solutions and have a strong foundation in both frontend and backend
                  technologies.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <GraduationCap className="text-blue-400 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Education</h3>
                <p className="text-gray-300">
                  <span className="font-medium">{PERSONAL_INFO.college}</span>
                </p>
                <p className="text-gray-400 text-sm">Pursuing Computer Science Engineering</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Location</h3>
                <p className="text-gray-300">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">Experience & Achievements</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="text-lg font-medium text-white mb-2">Content Creator</h4>
                <p className="text-blue-400 text-sm mb-2">Program Professor YouTube Channel</p>
                <p className="text-gray-300 text-sm">
                  Built a YouTube channel with 950+ subscribers, creating beginner-friendly Java programming tutorials
                  that simplify complex concepts into engaging, easy-to-follow lessons.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="text-lg font-medium text-white mb-2">Full Stack Developer</h4>
                <p className="text-purple-400 text-sm mb-2">Personal Projects</p>
                <p className="text-gray-300 text-sm">
                  Developed full-stack applications using MERN stack and Java Spring Boot, focusing on scalable
                  architecture and user-centric design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
