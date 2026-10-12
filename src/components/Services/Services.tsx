import {
  Building2,
  FileBadge2,
  FileText,
  Landmark,
  ReceiptText,
  Scale,
} from "lucide-react";
import { WhatsAppLink } from "../WhatsAppLink";
import "./Services.css";

const services = [
  {
    icon: Building2,
    title: "Abertura e formalização",
    text: "Orientação para abrir e formalizar sua empresa no Simples Nacional, considerando sua atividade e suas necessidades.",
  },
  {
    icon: Landmark,
    title: "Consultoria e assessoria fiscal",
    text: "Apoio para entender obrigações fiscais e organizar a rotina do MEI e da empresa optante pelo Simples Nacional.",
  },
  {
    icon: Scale,
    title: "Parcelamento de débitos",
    text: "Orientação sobre as possibilidades de parcelamento, conforme a situação dos débitos da sua empresa.",
  },
  {
    icon: FileText,
    title: "Notas fiscais de serviço",
    text: "Apoio na emissão de notas fiscais de serviço, de acordo com as exigências aplicáveis à sua atividade.",
  },
  {
    icon: ReceiptText,
    title: "Emissão de NF-e",
    text: "Suporte na emissão da Nota Fiscal Eletrônica para as operações da sua empresa.",
  },
  {
    icon: FileBadge2,
    title: "Emissão de NFC-e",
    text: "Apoio na emissão da Nota Fiscal de Consumidor Eletrônica para operações de venda ao consumidor.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="services section">
      <div className="container">
        <div className="section-heading services-heading">
          <div>
            <p className="eyebrow">
              <span /> 01 / NOSSOS SERVIÇOS
            </p>
            <h2>
              Apoio que acompanha <em>a sua empresa.</em>
            </h2>
          </div>
          <p>
            Da formalização à rotina fiscal, encontre a orientação adequada para
            cada momento do seu negócio.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }, index) => (
            <article className="service-card" key={title}>
              <div className="service-card-top">
                <Icon size={20} strokeWidth={1.5} />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <WhatsAppLink className="service-link" variant="secondary">
                Falar no WhatsApp
              </WhatsAppLink>
            </article>
          ))}
        </div>
        <p className="services-note">
          O escopo e a disponibilidade dos serviços dependem da situação e das
          necessidades de cada empresa.
        </p>
      </div>
    </section>
  );
}
