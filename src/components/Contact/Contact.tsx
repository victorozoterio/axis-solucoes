import { MessageCircle } from "lucide-react";
import { WhatsAppLink } from "../WhatsAppLink";
import "./Contact.css";

export function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow eyebrow-light">
            <span /> VAMOS CONVERSAR
          </p>
          <h2>
            Quer entender como podemos
            <br />
            ajudar a sua empresa?
          </h2>
          <p>
            Fale com a Áxis pelo WhatsApp para contar sobre a sua empresa e o
            apoio que você procura.
          </p>
        </div>
        <WhatsAppLink className="contact-button" variant="light">
          <MessageCircle size={17} /> Falar no WhatsApp
        </WhatsAppLink>
      </div>
    </section>
  );
}
