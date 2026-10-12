# Áxis Soluções Empresariais

Landing page estática institucional em React, TypeScript, Vite, Tailwind CSS e Lucide React. Não adicione backend, APIs, analytics, formulários funcionais ou bibliotecas sem necessidade clara.

## Estrutura

- `src/components/<Seção>/`: cada seção da página e seu CSS local.
- `src/components/WhatsAppLink.tsx`: CTA reutilizável para contato.
- `src/styles/globals.css`: reset, variáveis, tipografia e utilitários compartilhados apenas.
- `src/lib/whatsapp.ts`: número e mensagem padrão do WhatsApp.

## Convenções

- Mantenha dados estáticos junto ao componente que os usa.
- Use CSS por componente para layout e composição visual; deixe estilos globais mínimos.
- Formate CSS com uma declaração por linha e mantenha media queries próximas ao componente.
- Preserve a navegação por âncoras e o scroll suave.
- Todos os CTAs de contato usam `WhatsAppLink`. Configure `WHATSAPP_NUMBER` somente com dígitos antes de publicar.

## Comandos

```bash
npm run dev
npm run build
```
