export default function Hero() {
  return (
    <section className="text-center py-24">
      <h1 className="text-5xl font-bold mb-4">
        Jandson Anjos
      </h1>
      

      <p className="text-xl text-gray-400 mb-6">
        DevOps Engineer | Cloud | Infrastructure as Code
      </p>

      <p className="max-w-xl mx-auto text-gray-500">
        Building scalable infrastructure, CI/CD pipelines and modern cloud applications.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a href="https://github.com/Jandsonn" className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 text-white">
          View Projects
        </a>

        <a 
            href="https://wa.me/5583998578951?text=Ol%C3%A1%20Jandson%20queremos%20contrat%C3%A1-lo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border px-6 py-3 rounded-xl hover:bg-gray-800 hover:border-gray-700 transition-all duration-200">
            Contact
        </a>

        <a href="https://www.linkedin.com/in/jandsondosanjos/" className="border px-6 py-3 rounded-xl hover:bg-gray-800 hover:border-gray-700 transition-all duration-200">
          Profile
        </a>
      </div>
    </section>
  )
}
