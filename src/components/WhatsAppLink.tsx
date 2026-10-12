import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { getWhatsAppLink } from "../lib/whatsapp";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "light";
};

export function WhatsAppLink({
  children,
  className = "",
  variant = "primary",
}: Props) {
  const href = getWhatsAppLink();
  const classes = `button button-${variant} ${className}`.trim();
  const content = (
    <>
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </>
  );

  if (!href)
    return (
      <span
        className={classes}
        aria-label="Configure o número do WhatsApp para ativar este contato"
      >
        {content}
      </span>
    );
  return (
    <a className={classes} href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}
