import { Check, Globe2, Sparkle } from "lucide-react";
import { WhatsAppLink } from "../WhatsAppLink";
import "./Hero.css";

export function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> CONSULTORIA E ASSESSORIA FISCAL
          </p>
          <h1>
            Seu negócio em movimento. <em>O fiscal, em ordem.</em>
          </h1>
          <p className="hero-text">
            Apoio fiscal para MEI e empresas do Simples Nacional. Orientação
            clara para você cuidar do que faz seu negócio crescer.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#servicos">
              Conheça os serviços <span>↗</span>
            </a>
            <WhatsAppLink variant="secondary">Entre em contato</WhatsAppLink>
          </div>
          <p className="hero-online">
            <Globe2 size={14} /> Atendimento 100% online. Onde sua empresa
            estiver.
          </p>
        </div>
        <div className="hero-art" aria-label="Organização e orientação fiscal">
          <div className="hero-art-grid" />
          <p className="hero-art-label">
            CLAREZA PARA DECIDIR.
            <br />
            APOIO PARA SEGUIR.
          </p>
          <div className="hero-book">
            <small>ÁXIS · APOIO EMPRESARIAL</small>
            <strong>
              Organizar.
              <br />
              Orientar.
              <br />
              Simplificar.
            </strong>
            <span>PARA EMPRESAS DO SIMPLES</span>
          </div>
          <div className="hero-checklist">
            <div>
              <Sparkle size={15} />
              <span>100% online</span>
            </div>
            <b>
              Seu negócio,
              <br />
              com mais clareza.
            </b>
            <ul>
              <li>
                <Check size={12} /> Orientação fiscal
              </li>
              <li>
                <Check size={12} /> Emissão de notas
              </li>
              <li>
                <Check size={12} /> Acompanhamento
              </li>
            </ul>
            <small>ÁXIS EM CADA ETAPA</small>
          </div>
        </div>
      </div>
      <div className="container audience-bar">
        <span>PARA QUEM EMPREENDE</span>
        <b>Serviços</b>
        <i />
        <b>Comércio</b>
        <i />
        <b>Indústria</b>
      </div>
    </section>
  );
}
