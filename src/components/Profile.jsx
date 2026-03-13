import { useState } from "react";

const socialLinks = [

  { label: "GitHub-1", href: "https://github.com/Jandsonn", icon:(
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
  )},
  { label: "GitHub-2", href: "https://github.com/Jandsonanjos", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
  )},
  { label: "LinkedIn", href: "https://linkedin.com", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
  { label: "WhatsApp", href: "https://wa.me/5583998578951?text=Ol%C3%A1%20Jandson%20queremos%20contrat%C3%A1-lo", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
  )},
];

const projects = [
  { title: "Myport", desc: "Portfólio pessoal com Vite + React", tag: "React", href: "https://github.com/jandsonanjos/Myport" },
  { title: "Sistema bancário Microserviço", desc: "Descrição do seu projeto aqui", tag: "Angular", href: "https://github.com/jandsonanjos/Project-bank-with-api-microservices" },
  { title: "Sistema bancário com RabbitMQ", desc: "Mais um projeto incrível", tag: "Java", href: "https://github.com/jandsonanjos/dorotech" },
  { title: "Other Port Profile Jandson", desc: "Mais um projeto incrível", tag: "Java", href: "https://github.com/jandsonanjos/MeuPortfolioSkills" },
  { title: "Dashboard Styled Component", desc: "Mais um projeto incrível", tag: "React", href: "https://github.com/Jandsonn/DashboardStyledComponent" },
  { title: "Consumindo API", desc: "Mais um projeto incrível", tag: "React", href: "https://github.com/Jandsonn/consumindo-api" },
  { title: "My Wiki", desc: "Mais um projeto incrível", tag: "Documentation", href: "https://github.com/Jandsonn/my-wiki" }
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("sobre");

  return (
    <div style={{ fontFamily: "'Courier New', monospace" }} className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Card principal */}
        <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">

         {/* Banner */}
<div className="h-28 bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900 relative">
  <div className="absolute inset-0 opacity-20"
    style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "12px 12px" }} />
  
  {/* Avatar dentro do banner */}
  <div className="absolute -bottom-12 left-6">
    <div className="w-24 h-24 rounded-full border-4 border-gray-900 shadow-lg overflow-hidden">
      <img src="/profile-devops.jpg.jfif" alt="" className="w-full h-full object-cover" />
    </div>
  </div>
</div>

{/* Conteúdo */}
<div className="px-6 pb-6 pt-14">
  <div className="flex items-end justify-between mb-4">
    <div /> {/* espaço vazio onde estava o avatar */}
    <button className="px-4 py-1.5 rounded-full border border-indigo-500 text-indigo-400 text-sm hover:bg-indigo-500 hover:text-white transition-all duration-200">
      <a href="https://www.linkedin.com/in/jandsondosanjos/" target="_blank" rel="noopener noreferrer">
      + Seguir</a>
    </button>
  </div>

            {/* Info */}
            <h1 className="text-xl font-bold text-white" style={{ fontFamily: "Arial, sans-serif" }} >Jandson Anjos</h1>
            <p className="text-indigo-400 text-sm mb-1"  style={{ fontFamily: "Arial, sans-serif" }}>@jandsonanjos</p>
            <p className="text-white-400 text-sm mb-4 font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
              DevOps | Administração de Sistemas Linux | Redes & Segurança🚀
            </p>

            {/* Stats */}
            <div className="flex gap-6 mb-5 text-center" style={{ fontFamily: "Arial, sans-serif" }}>
              {[["15", "Projetos"], ["180", "Commits"], ["38", "Repos"]].map(([n, l]) => (
                <div key={l}>
                  <p className="text-white font-bold text-lg">{n}</p>
                  <p className="text-white-500 text-xs">{l}</p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 mb-5" >
              {socialLinks.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  title={label}
                  className="w-9 h-9 rounded-full bg-gray-800 border border-white-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 hover:bg-gray-700 transition-all duration-200">
                  {icon}
                </a>
              ))}
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-800 mb-5" style={{ fontFamily: "Arial, sans-serif" }}>
              {["sobre", "projetos"].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium capitalize transition-all duration-200 border-b-2 -mb-px  ${
                    activeTab === tab
                      ? "border-indigo-500 text-indigo-400"
                      : "border-transparent text-gray-500 hover:text-gray-300 "
                  }`}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab: Sobre */}
            {activeTab === "sobre" && (
              <div className="space-y-3 text-sm text-white-400">
                <div className="flex items-center gap-2" style={{ fontFamily: "Arial, sans-serif" }}>
                  <span>📍</span><span>João Pessoa, PB — Brasil</span>
                </div>
                <div className="flex items-center gap-2" style={{ fontFamily: "Arial, sans-serif" }}>
                  <span>🎓</span><span>Administração de Sistemas Linux</span>
                </div>
                <div className="flex items-center gap-2" style={{ fontFamily: "Arial, sans-serif" }}>
                  <span>💻</span><span>React · Python · Linux · Redes</span>
                </div>
                <div className="flex items-center gap-2" style={{ fontFamily: "Arial, sans-serif" }}>
                  <span>✉️</span><span>jandsonanjos@hotmail.com</span>
                </div>
              </div>
            )}

            {/* Tab: Projetos */}
            {activeTab === "projetos" && (
              <div className="space-y-3">
                {projects.map(({ title, desc, tag, href }) => (
                  <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                    className="block p-3 rounded-xl bg-white-800 border border-gray-700 hover:border-indigo-500 transition-all duration-200 group">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-me
                      dium group-hover:text-indigo-400 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>{title}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-900 text-indigo-300 border border-indigo-700" style={{ fontFamily: "Arial, sans-serif" }}>{tag}</span>
                    </div>
                    <p className="text-white-500 text-xs" style={{ fontFamily: "Arial, sans-serif" }}>{desc}</p>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
