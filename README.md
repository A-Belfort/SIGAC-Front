# SIGAC-Front

Sistema de Gestão de Atividades Complementares – Interface web.

## Funcionalidades

- Login com autenticação JWT
- Cadastro e listagem de alunos, coordenadores e cursos
- Submissão de certificados pelos alunos
- Validação de horas pelos coordenadores
- Relatórios com gráficos de evolução e distribuição
- Logs do sistema
- Interface responsiva e PWA

## Tecnologias

- HTML5, CSS3, JavaScript
- Chart.js (gráficos)
- Service Worker + Manifest (PWA)

## Estrutura
SIGAC-Front/
├── index.html
├── home.html
├── dashboard.html
├── listar-alunos.html
├── cadastrar-aluno.html
├── listar-coordenadores.html
├── cadastrar-coordenador.html
├── listar-cursos.html
├── cadastrar-curso.html
├── upload-certificado.html
├── validacao.html
├── relatorios.html
├── regras-curso.html
├── logs.html
├── style.css
├── dashboard.css
├── alunos.css
├── validacao.css
├── relatorios.css
├── auth.js
├── dashboard.js
├── home.js
├── email.js
├── manifest.json
├── sw.js
└── icon-*.png

## Integração com o Backend

A aplicação consome uma API REST (Flask). On backend está deployado no Render.
