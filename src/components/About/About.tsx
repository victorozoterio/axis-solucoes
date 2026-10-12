import { Globe2 } from "lucide-react";
import "./About.css";

export function About() {
  return (
    <section id="sobre" className="about section">
      <div className="container about-grid">
        <div className="about-poster">
          <small>MENOS COMPLEXIDADE.</small>
          <strong>
            Mais
            <br />
            <em>direção.</em>
          </strong>
          <div>
            <b>áxis</b>
            <span>↗</span>
          </div>
        </div>
        <div className="about-content">
          <p className="eyebrow">
            <span /> 03 / SOBRE A ÁXIS
          </p>
          <h2>
            Clareza e orientação
            <br />
            para quem empreende.
          </h2>
          <p>
            A Áxis Soluções Empresariais presta serviços de consultoria e
            assessoria fiscal para MEI e empresas optantes pelo Simples
            Nacional, nos ramos de serviços, comércio e indústria.
          </p>
          <p>
            Nosso trabalho é ajudar você a entender as demandas fiscais da sua
            empresa, com uma comunicação acessível e orientação alinhada às suas
            necessidades.
          </p>
          <div className="about-online">
            <Globe2 size={19} />
            <div>
              <b>Uma empresa 100% online.</b>
              <span>
                Todo o atendimento é remoto. Não possuímos escritório físico nem
                atendimento presencial.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
