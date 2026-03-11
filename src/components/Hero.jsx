export default function Hero() {
  return (
    <section className="text-center py-24">
      <h1 className="text-5xl font-bold mb-4">
        Jandson Ferreira
      </h1>
      

      <p className="text-xl text-gray-400 mb-6">
        DevOps Engineer | Cloud | Infrastructure as Code
      </p>

      <p className="max-w-xl mx-auto text-gray-500">
        Building scalable infrastructure, CI/CD pipelines and modern cloud applications.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a href="Projetcts" className="bg-blue-600 px-6 py-3 rounded-xl">
          View Projects
        </a>

        <a href="contacts" className="border px-6 py-3 rounded-xl">
          Contact
        </a>

        <a href="Profile" className="border px-6 py-3 rounded-xl">
          Profile
        </a>
      </div>
    </section>
  )
}
