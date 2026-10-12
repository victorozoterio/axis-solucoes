import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  Check,
  FileCheck2,
  Menu,
  MessageCircle,
  ReceiptText,
  ShieldCheck,
  Sparkle,
  X,
} from 'lucide-react'
import { useState } from 'react'

// Configure o número comercial com DDI e DDD, somente dígitos. Ex.: 5511999999999
const WHATSAPP_NUMBER = ''
const WHATSAPP_MESSAGE = 'Olá! Conheci a Áxis pelo site e gostaria de saber mais sobre os serviços.'
const whatsappHref = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : undefined

const navItems = [
  ['Início', '#inicio'],
  ['Serviços', '#servicos'],
  ['Como funciona', '#como-funciona'],
  ['Sobre', '#sobre'],
  ['Contato', '#contato'],
]

const services = [
  { icon: BadgeCheck, title: 'Abertura e formalização', text: 'Orientação para começar com uma estrutura mais organizada desde o primeiro passo.' },
  { icon: BookOpenCheck, title: 'Orientação para MEI', text: 'Apoio para compreender a rotina e as obrigações do seu negócio como MEI.' },
  { icon: BarChart3, title: 'Apoio ao Simples Nacional', text: 'Clareza para acompanhar a rotina fiscal da sua empresa dentro do Simples Nacional.' },
  { icon: ReceiptText, title: 'Emissão de notas fiscais', text: 'Orientação prática para que esse processo faça parte da sua rotina com mais segurança.' },
  { icon: ShieldCheck, title: 'Regularização fiscal', text: 'Um olhar atento para organizar pendências e entender os próximos caminhos.' },
  { icon: FileCheck2, title: 'Assessoria e acompanhamento', text: 'Acompanhamento próximo, simples e online para as demandas fiscais do dia a dia.' },
]

function ContactButton({ children, secondary = false, className = '' }: { children: React.ReactNode; secondary?: boolean; className?: string }) {
  if (!whatsappHref) {
    return <span className={`contact-button ${secondary ? 'secondary' : ''} ${className}`} aria-label="Número de WhatsApp a configurar">{children}<ArrowUpRight size={16} /></span>
  }
  return <a className={`contact-button ${secondary ? 'secondary' : ''} ${className}`} href={whatsappHref} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={16} /></a>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Áxis Soluções Empresariais">
            <span>áxis</span>
            <small>SOLUÇÕES EMPRESARIAIS</small>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegação principal">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <ContactButton className="nav-contact">Fale com um especialista</ContactButton>
          </nav>
        </div>
      </header>

      <section id="inicio" className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> APOIO FISCAL DESCOMPLICADO</p>
            <h1>Seu negócio em movimento. <em>O fiscal, em ordem.</em></h1>
            <p className="hero-text">Apoio fiscal para MEI e empresas do Simples Nacional. Orientação clara para você cuidar do que faz seu negócio crescer.</p>
            <div className="hero-actions">
              <a className="contact-button" href="#servicos">Conheça os serviços <ArrowDownRight size={16} /></a>
              <ContactButton secondary>Entre em contato</ContactButton>
            </div>
          </div>
          <div className="hero-art" aria-label="Ilustração de organização fiscal">
            <div className="art-grid" />
            <div className="paper paper-main">
              <div className="paper-top"><span>RESUMO FISCAL</span><Check size={16} /></div>
              <div className="paper-title">Tudo em<br /><b>ordem.</b></div>
              <div className="paper-lines"><i /><i /><i /></div>
              <div className="paper-footer"><span>ÁXIS</span><span>2026</span></div>
            </div>
            <div className="paper paper-back"><span>ROTINA<br />EM DIA</span><div className="dot-row"><i /><i /><i /></div></div>
            <div className="art-tag"><Sparkle size={15} /> Clareza para decidir</div>
            <div className="art-ring" />
          </div>
        </div>
      </section>

      <section id="servicos" className="section services-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span /> SERVIÇOS</p><h2>Apoio que acompanha <em>a sua empresa.</em></h2></div>
            <p>Da formalização à rotina fiscal, encontre a orientação adequada para cada momento do seu negócio.</p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article className="service-card" key={title}>
                <div className="card-head"><span className="icon-wrap"><Icon size={21} strokeWidth={1.7} /></span><span className="card-number">0{index + 1}</span></div>
                <h3>{title}</h3><p>{text}</p>
                <ContactButton secondary className="service-link">Falar no WhatsApp</ContactButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section process-section">
        <div className="container">
          <div className="process-intro"><p className="eyebrow light"><span /> COMO FUNCIONA</p><h2>À distância. Mas perto <em>do seu negócio.</em></h2><p>Uma conversa clara, uma rotina mais simples e acompanhamento em cada etapa.</p></div>
          <div className="steps">
            {[
              ['01', 'Conte o que você precisa.', 'Você explica seu momento e o apoio que está procurando.'],
              ['02', 'Vamos entender seu cenário.', 'Ouvimos com atenção para orientar os próximos passos com clareza.'],
              ['03', 'Seguimos juntos, online.', 'Acompanhamos sua rotina fiscal de onde você estiver.'],
            ].map(([number, title, text]) => <article key={number} className="step"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={21} /></article>)}
          </div>
        </div>
      </section>

      <section id="sobre" className="section about-section">
        <div className="container about-grid">
          <div className="about-aside"><p className="eyebrow"><span /> SOBRE A ÁXIS</p><h2>Clareza e orientação para quem <em>empreende.</em></h2></div>
          <div className="about-content"><p className="lead">A Áxis Soluções Empresariais existe para simplificar o que costuma parecer complicado: a rotina fiscal de MEIs e empresas do Simples Nacional.</p><p>Nosso trabalho é oferecer orientação acessível, comunicação simples e atendimento 100% online, para estar próximo de quem empreende em qualquer lugar.</p><div className="values"><div><b>Missão</b><span>Oferecer orientação fiscal acessível e clara.</span></div><div><b>Visão</b><span>Ser referência em apoio fiscal online.</span></div><div><b>Valores</b><span>Clareza, proximidade, honestidade e respeito.</span></div></div></div>
        </div>
      </section>

      <section id="contato" className="contact-section">
        <div className="container contact-box"><div><p className="eyebrow light"><span /> CONTATO</p><h2>O próximo passo começa com uma <em>boa conversa.</em></h2><p>Conte um pouco sobre sua empresa e o apoio que você procura. Vamos entender como podemos ajudar.</p></div><ContactButton className="contact-large"><MessageCircle size={20} /> Conversar pelo WhatsApp</ContactButton></div>
      </section>

      <footer className="footer"><div className="container footer-grid"><div><a className="brand brand-inverse" href="#inicio"><span>áxis</span><small>SOLUÇÕES EMPRESARIAIS</small></a><p>Orientação fiscal clara para quem empreende.</p></div><div className="footer-links">{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><div className="online"><span>ATENDIMENTO</span><b>100% online</b></div></div><div className="container copyright">© {new Date().getFullYear()} Áxis Soluções Empresariais. Todos os direitos reservados.</div></footer>
    </main>
  )
}
