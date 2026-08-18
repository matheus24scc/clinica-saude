# Clínica Saúde - Aplicação Full Stack

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwindcss)
![NestJS](https://img.shields.io/badge/NestJS-10.0-red?logo=nestjs)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-24.0-blue?logo=docker)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI-blue?logo=githubactions)

Aplicação completa para gestão de clínicas de saúde, construida com **React 18 + TypeScript + TailwindCSS** no frontend e **NestJS** no backend, utilizando **PostgreSQL** como banco de dados e **Docker + GitHub Actions** para DevOps.

## 📋 Sumário

- [📋 Sumário](#-sumário)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Usando Docker Compose (recomendado)](#usando-docker-compose-recomendado)
  - [Desenvolvimento Local](#desenvolvimento-local)
    - [Backend](#backend)
    - [Frontend](#frontend)
- [📖 Como Usar](#-como-usar)
- [📚 Documentação da API](#-documentação-da-api)
- [� contribution](#-contribuindo)
- [📄 Licença](#-licença)
- [📞 Contato](#-contato)

## ✨ Funcionalidades

- Agendamento de consultas
- Gestão de pacientes e médicos
- Prontuário eletrônico
- Controle de estoque de medicamentos
- Relatórios gerenciais
- Autenticação JWT e controle de acesso baseado em papéis (RBAC)
- Design responsivo com TailwindCSS
- Testes automatizados com Jest e E2E (Cypress)
- Integração contínua com GitHub Actions

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React 18, TypeScript, TailwindCSS, React Router, Axios
- **Backend:** NestJS, TypeORM, PostgreSQL, JWT, Passport, Class Validator
- **Banco de Dados:** PostgreSQL
- **DevOps:** Docker, Docker Compose, GitHub Actions
- **Testes:** Jest, Cypress, Supertest
- **Outros:** ESLint, Prettier, Husky, lint-staged

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (versão >= 18) - apenas para desenvolvimento local
- [Git](https://git-scm.com/)

### Usando Docker Compose (recomendado)

```bash
# Clone o repositório
git clone https://github.com/seusuario/clinica-saude.git
cd clinica-saude

# Inicie os containers
docker-compose up --build

# O sistema estará disponível em:
# Frontend: http://localhost:3000
# Backend API: http://localhost:4000
# PostgreSQL: localhost:5432 (usuario: postgres, senha: postgres, banco: clinica_saude)
```

### Desenvolvimento Local

#### Backend

```bash
cd backend
npm install
npm run start:dev   # Modo de desenvolvimento com hot-reload
```

#### Frontend

```bash
cd frontend
npm install
npm start           # Inicia o servidor de desenvolvimento em http://localhost:3000
```

## 📖 Como Usar

Após iniciar a aplicação:

1. Acesse o frontend em `http://localhost:3000`
2. Registre uma nova conta ou use credenciais de teste:
   - **Admin:** admin@clinica.com / admin123
   - **Médico:** medico@clinica.com / medico123
   - **Paciente:** paciente@clinica.com / paciente123
3. Navegue pelos módulos de agendamento, prontuário, estoque e relatórios.

## 📚 Documentação da API

A documentação interativa da API está disponível via Swagger quando o backend está em execução:

- URL: `http://localhost:4000/api`

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua branch de feature: `git checkout -b feature/minha-feature`
3. Commit suas alterações: `git commit -m 'feat: adicionar nova feature'`
4. Push para a branch: `git push origin feature/minha-feature`
5. Abra um Pull Request

**Por favor, siga o [Código de Conduta](CODE_OF_CONDUCT.md) e utilize [Conventional Commits](https://www.conventionalcommits.org/).**

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

Seu Nome - [seuemail@exemplo.com](mailto:seuemail@exemplo.com)

Link do Projeto: https://github.com/seusuario/clinica-saude
## Status (checkup 2026-08-18)
> Revisado na campanha de repo-checkup. Relatorio completo: `~/repo-checkup/reports/clinica-saude.md` (local do mantenedor, nao no repo).
- **Build/Install**: Backend `npm install` RC=0 + `npm run build` (nest build) RC=0 (compila vazio, sem `src/`); Frontend `npm ci` RC=0 + `npm run build` RC=0 ("Compiled successfully").
- **Smoke test**: Backend `npx jest --passWithNoTests` RC=0 (config valida, sem testes); Frontend `npm test -- --passWithNoTests` RC=0 (sem arquivos de teste). Nao ha app para rodar ponta-a-ponta (backend oco).
- **Para rodar de ponta-a-ponta precisa de**: PostgreSQL 15 (via Docker Compose).
- **Inconsistencias conhecidas (README vs codigo)**: README descreve backend NestJS completo (JWT, RBAC, testes Jest/Cypress) mas o backend e scaffold oco (sem `src/`, sem testes); credencial de DB hardcoded em `docker/database/init.sql` (`clinica_pass`).
- **Seguranca**: Backend 13 vulns (3 low/4 moderate/6 high) e Frontend 28 vulns (9 low/5 moderate/14 high) — exigem upgrades breaking (NestJS 9->11, react-scripts major); nao corrigido (decisao humana). Secret scan sem api keys/tokens reais.
- **Estado resumido**: build verde em frontend e backend (mas backend oco); smoke de config apenas; app nao roda ponta-a-ponta (precisa PostgreSQL + implementar backend).
