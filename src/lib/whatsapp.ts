export const WHATSAPP_NUMBER = "+5519996008906";

export const WHATSAPP_MESSAGE =
  "Olá! Conheci a Áxis pelo site e gostaria de saber mais sobre os serviços.";

export function getWhatsAppLink() {
  if (!WHATSAPP_NUMBER) return undefined;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
