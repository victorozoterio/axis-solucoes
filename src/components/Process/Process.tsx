import { MessageSquare, Search, Square } from "lucide-react";
import { WhatsAppLink } from "../WhatsAppLink";
import "./Process.css";

const steps = [
  {
    icon: MessageSquare,
    title: "Conte o que você precisa",
    text: "Entre em contato e compartilhe o momento da sua empresa e a sua necessidade.",
  },
  {
    icon: Search,
    title: "Vamos entender seu cenário",
    text: "A equipe avalia as informações e orienta sobre o serviço adequado para o seu negócio.",
  },
  {
    icon: Square,
    title: "Seguimos juntos, online",
    text: "O atendimento e o acompanhamento acontecem de forma remota, sem deslocamentos.",
  },
];

export function Process() {
  return (
    <section id="como-funciona" className="process section">
      <div className="container">
        <div className="process-heading">
          <div>
            <p className="eyebrow eyebrow-light">
              <span /> 02 / COMO FUNCIONA
            </p>
            <h2>
              À distância.
              <br />
              Mas perto do seu negócio.
            </h2>
          </div>
          <WhatsAppLink variant="light">Vamos conversar</WhatsAppLink>
        </div>
        <div className="process-steps">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article className="process-step" key={title}>
              <div className="process-step-head">
                <span>0{index + 1}</span>
                <Icon size={17} strokeWidth={1.4} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
