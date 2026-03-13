export default function Projects() {
    <div className="bg-red-500 p-10">
</div>
  const projects = [
    {
      id: 1,
      title: "Portfolio Docker",
      description: "Containerized portfolio using Docker + Nginx."
    },
    {
      id: 2,
      title: "DevOps Dashboard",
      description: "Monitoring system with Kubernetes & Grafana."
    }
  ]
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
