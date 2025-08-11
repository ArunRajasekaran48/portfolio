import { TECHNOLOGIES } from "../constants/index.js"

const Skills = () => {
  const frontendTechs = TECHNOLOGIES.filter((tech) =>
    ["React", "JavaScript", "HTML5", "CSS3", "Tailwind css"].includes(tech.name),
  )

  const backendTechs = TECHNOLOGIES.filter((tech) =>
    ["Java", "Spring Boot", "Node.js", "Express.js"].includes(tech.name),
  )

  const databaseTechs = TECHNOLOGIES.filter((tech) => ["MongoDB", "MySQL", "PostgreSQL"].includes(tech.name))

  const toolsTechs = TECHNOLOGIES.filter((tech) => ["Git", "Docker", "AWS", "Postman"].includes(tech.name))

  const SkillCategory = ({ title, technologies, description }) => (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
          >
            <img
              src={tech.icon || "/placeholder.svg"}
              alt={tech.name}
              className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform"
              onError={(e) => {
                e.target.style.display = "none"
              }}
            />
            <span className="text-xs text-gray-300 text-center font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 px-4 bg-gray-850">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto -translate-y-1">
            I specialize in backend development with strong proficiency in Java Spring Boot and Node.js, while also
            maintaining expertise in modern frontend technologies and database management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 -translate-y-5">
          <SkillCategory
            title="Frontend Development"
            technologies={frontendTechs}
            description="Creating responsive and interactive user interfaces"
          />

          <SkillCategory
            title="Backend Development"
            technologies={backendTechs}
            description="Building robust server-side applications and APIs"
          />

          <SkillCategory
            title="Database Management"
            technologies={databaseTechs}
            description="Designing and managing both SQL and NoSQL databases"
          />

          <SkillCategory
            title="Tools & Technologies"
            technologies={toolsTechs}
            description="Development tools and cloud technologies"
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
