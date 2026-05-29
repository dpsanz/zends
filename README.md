# Zends - Soluções Tecnológicas

Site institucional da [Zends](https://zends.com.br), empresa especializada em segurança da informação e desenvolvimento de sistemas.

## Tecnologias

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## Páginas

- **Home** — Apresentação dos serviços
- **Security Suite** — Detalhes sobre o Zends Security Suite
- **Contato** — Informações de contato

## Desenvolvimento local

```bash
cd zends
npm install
npm run dev
```

O app estará disponível em `http://localhost:5173`.

## Build

```bash
cd zends
npm run build
```

Os arquivos de produção serão gerados em `zends/dist/`.

## Deploy

O deploy é feito automaticamente via GitHub Actions no push para a branch `main`. O site é publicado no GitHub Pages no domínio [zends.com.br](https://zends.com.br).
