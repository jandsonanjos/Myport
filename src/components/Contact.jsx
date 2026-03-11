export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>

        <p className="text-gray-400 mb-8">
          Interested in working together? Let's talk.
        </p>

        <div className="space-y-4">
          <p>Email: jandsonanjos@hotmail.com</p>
          <p>LinkedIn: linkedin.com/in/jandsonanjos</p>
          <p>GitHub: github.com/jandsonanjos</p>
        </div>
        <a 
          href="https://wa.me/5583998578951?text=Ol%C3%A1%20Jandson%20queremos%20contrat%C3%A1-lo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Send Message
        </a>
      </div>
    </section>
  )
}
