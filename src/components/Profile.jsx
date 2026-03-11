import { useState } from "react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
  )},
  { label: "LinkedIn", href: "https://linkedin.com", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
  { label: "Twitter", href: "https://twitter.com", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
  { label: "Instagram", href: "https://instagram.com", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
  )},
];

const projects = [
  { title: "Myport", desc: "Portfólio pessoal com Vite + React", tag: "React", href: "https://github.com/jandsonanjos/Myport" },
  { title: "Projeto 2", desc: "Descrição do seu projeto aqui", tag: "Python", href: "#" },
  { title: "Projeto 3", desc: "Mais um projeto incrível", tag: "Node.js", href: "#" },
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
      + Seguir
    </button>
  </div>

            {/* Info */}
            <h1 className="text-xl font-bold text-white" style={{ fontFamily: "Arial, sans-serif" }} >Jandson Anjos</h1>
            <p className="text-indigo-400 text-sm mb-1"  style={{ fontFamily: "Arial, sans-serif" }}>@jandsonanjos</p>
            <p className="text-white-400 text-sm mb-4 font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
              Desenvolvedor Web · Estudante de TI · Apaixonado por tecnologia 🚀
            </p>

            {/* Stats */}
            <div className="flex gap-6 mb-5 text-center" style={{ fontFamily: "Arial, sans-serif" }}>
              {[["3", "Projetos"], ["12", "Commits"], ["4", "Repos"]].map(([n, l]) => (
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
                      <span className="text-white font-medium group-hover:text-indigo-400 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>{title}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-900 text-indigo-300 border border-indigo-700" style={{ fontFamily: "Arial, sans-serif" }}>{tag}</span>
                    </div>
                    <p className="text-white-500 text-xs" style={{ fontFamily: "Arial, sans-serif" }}>{desc}</p>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-white-700 text-xs mt-4" style={{ fontFamily: "Arial, sans-serif" }}>✦ portfólio pessoal ✦</p>
      </div>
    </div>
  );
}
