import "./Footer.css";
import { Mail } from "lucide-react";

const CONTACT_EMAIL = "comercial@axissolucao.com";

const links = [
  ["Serviços", "#servicos"],
  ["Como funciona", "#como-funciona"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <a className="brand" href="#inicio">
            <span>áxis</span>
            <small>SOLUÇÕES EMPRESARIAIS</small>
          </a>
        </div>
        <div className="footer-copy">
          <p>
            Orientação fiscal.
            <br />
            Mais clareza para o seu negócio.
          </p>
          {CONTACT_EMAIL && (
            <a className="footer-email" href={`mailto:${CONTACT_EMAIL}`}>
              <Mail size={14} aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          )}
        </div>
        <nav className="footer-nav" aria-label="Links do rodapé">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Áxis Soluções Empresariais.</span>
        <span>Atendimento 100% online.</span>
      </div>
    </footer>
  );
}
