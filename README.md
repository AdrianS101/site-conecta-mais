# Site IA Conecta+

Site estático da IA Conecta+ (Garde Inteligência Empresarial). HTML + CSS + JS puros, sem build.

- `index.html` — home
- `segmentos.html` — página de segmentos (`/segmentos`)
- `segmentos/<setor>.html` — saúde, franquias, varejo, imobiliário, educação, financeiro, logística e indústria (`/segmentos/saude` etc.)
- `assets/css/site.css` — estilos compartilhados por todas as páginas
- `assets/js/site.js` — header, menu mobile, carrossel, animações de scroll e botão flutuante do WhatsApp
- `assets/marca`, `assets/clientes`, `assets/hero` — logos e imagens

Deploy: importar o repositório na Vercel (framework "Other", sem comando de build). O `vercel.json` deixa as URLs sem `.html`.
