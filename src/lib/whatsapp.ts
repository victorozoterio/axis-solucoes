// Configure o número comercial somente com DDI e DDD. Ex.: 5511999999999
export const WHATSAPP_NUMBER = "";

export const WHATSAPP_MESSAGE =
  "Olá! Conheci a Áxis pelo site e gostaria de saber mais sobre os serviços.";

export function getWhatsAppLink() {
  if (!WHATSAPP_NUMBER) return undefined;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
