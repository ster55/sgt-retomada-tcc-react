
import { useState } from 'react'
import './App.css'

const integrantes = [
  { nome: "Antônio Nunes de Souza",        rm: "RM 99080",  tipo: "dev", role: "Time de Desenvolvimento", iniciais: "AN", resp: ["Back-end", "Banco de dados"] },
  { nome: "Deryk Henry dos Santos Silva",  rm: "RM 99760",  tipo: "dev", role: "Time de Desenvolvimento", iniciais: "DH", resp: ["Desenvolvimento", "Testes"] },
  { nome: "Eloá Raquel Pereira Silva",     rm: "RM 95281",  tipo: "dev", role: "Time de Desenvolvimento", iniciais: "ER", resp: ["Mobile", "Documentação"] },
  { nome: "Ester Beserra dos Santos",      rm: "RM 99877",  tipo: "dev", role: "Time de Desenvolvimento", iniciais: "EB", resp: ["Documentação", "Back-end"] },
  { nome: "Ewerton Vagner da Silva",       rm: "RM 99750",  tipo: "po",  role: "Product Owner",           iniciais: "EV", resp: ["Gestão do produto", "UI/UX" ]},
  { nome: "Stephany dos Santos Bandeira", rm: "RM 100423", tipo: "sm",  role: "Scrum Master",             iniciais: "SS", resp: ["Metodologia Scrum", "Front-end"] },
]

const roleLabel = { dev: 'Dev', po: 'Product Owner', sm: 'Scrum Master' }
const cardClass  = { dev: '',   po: 'po-card',       sm: 'sm-card' }

function Card({ pessoa, index, aberto, onClick }) {
  const isOpen = aberto === index

  return (
    <div
      className={`card ${cardClass[pessoa.tipo]} ${isOpen ? 'active ' + pessoa.tipo : ''}`}
      style={{ animationDelay: `${0.4 + index * 0.07}s` }}
      onClick={onClick}
    >
      <div className="card-top">
        <div className={`avatar ${pessoa.tipo}`}>{pessoa.iniciais}</div>
        <div className="card-info">
          <div className={`card-role ${pessoa.tipo}`}>{roleLabel[pessoa.tipo]}</div>
          <div className="card-nome" title={pessoa.nome}>{pessoa.nome}</div>
          <div className="card-rm">{pessoa.rm}</div>
        </div>
        <span className={`chevron ${isOpen ? 'open' : ''}`}>▾</span>
      </div>

      <div className={`card-expand ${isOpen ? 'open' : ''}`}>
        <div className="expand-inner">
          <div className="expand-row"><span className="expand-icon"></span><span>{pessoa.role}</span></div>
          <div className="expand-row"><span className="expand-icon"></span><span>Turma INF2GM</span></div>
          <div className="expand-row expand-tags">
            <span className="expand-icon">🔧</span>
            {pessoa.resp.map((r, i) => (
              <span key={i} className={`expand-tag ${pessoa.tipo}`}>{r}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [aberto, setAberto] = useState(null)

  return (
    <div className="page">
      <div className="hero">
        <div className="hero-bg" />
        <div className="turma-badge"> Turma INF2GM</div>
        <span className="hero-icon"></span>
        <h1 className="titulo">SGT — Sistema de Gerenciamento de Tarefas</h1>
        <p className="subtitulo">Trabalho de Conclusão de Curso · 2025</p>
        <div className="tema-box">
          <p className="tema-label">Tema do projeto</p>
          <p className="tema-text">
            Plataforma integrada de gestão acadêmica para estudantes, com controle de tarefas,
            prazos, desempenho e comunicação em tempo real entre web e mobile.
          </p>
        </div>
        <div className="ods-badge"> Alinhado à ODS 4 — Educação de Qualidade</div>
      </div>

      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Integrantes do projeto</h2>
          <p className="section-sub">Clique em um integrante para ver mais informações</p>
        </div>
        <div className="grid">
          {integrantes.map((pessoa, i) => (
            <Card
              key={i}
              pessoa={pessoa}
              index={i}
              aberto={aberto}
              onClick={() => setAberto(prev => prev === i ? null : i)}
            />
          ))}
        </div>
      </div>

      <div className="footer">
        <p className="footer-text">ITB Brasílio Flores de Azevedo · Turma INF2GM · 2026</p>
      </div>
    </div>
  )
}

export default App