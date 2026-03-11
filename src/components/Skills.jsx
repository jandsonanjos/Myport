export default function Skills() {
  const skills = [
    "Linux",
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "CI/CD",
    "React",
    "Node.js"
  ]

  return (
    <section id="skills" className="py-20">

      <h2 className="text-4xl font-bold mb-12 text-center">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">

        {skills.map(skill => (
          <span
            key={skill}
            className="bg-gray-800 px-4 py-2 rounded-xl"
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  )
}
