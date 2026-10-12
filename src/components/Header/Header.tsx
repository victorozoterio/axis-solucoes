import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppLink } from "../WhatsAppLink";
import "./Header.css";

const navigation = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Como funciona", "#como-funciona"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio">
          <span>áxis</span>
          <small>SOLUÇÕES EMPRESARIAIS</small>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav
          className={`header-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Navegação principal"
        >
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <WhatsAppLink className="header-contact">
            Fale com um especialista
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}
