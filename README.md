# LoveMatch

LoveMatch é uma calculadora de compatibilidade que estima a possibilidade de duas pessoas ficarem juntas a partir de seus nomes.

Ficou curioso? Acesse o LoveMatch e descubra se vocês dão match.

[Acesse Aqui] (lovematch-chi.vercel.app)

## Sobre o projeto

O LoveMatch foi desenvolvido como um projeto da disciplina de **Programação Web**, com o objetivo de aplicar conceitos de desenvolvimento front-end utilizando HTML, CSS e JavaScript.

A aplicação permite que o usuário informe os nomes de duas pessoas e, a partir de uma lógica de cálculo própria, gera uma porcentagem de compatibilidade entre elas.

Além da porcentagem, o sistema apresenta uma mensagem correspondente ao resultado obtido.

## Objetivos

- Praticar conceitos de desenvolvimento web;
- Trabalhar com estruturação de páginas utilizando HTML;
- Desenvolver uma interface utilizando CSS;
- Aplicar JavaScript para interação com os elementos da página;
- Manipular valores inseridos pelo usuário;
- Desenvolver uma lógica própria para geração do resultado.

## Funcionalidades

- Inserção do nome de duas pessoas;
- Validação dos campos antes do cálculo;
- Normalização dos nomes para evitar diferenças entre letras maiúsculas e minúsculas;
- Desconsideração de espaços presentes nos nomes;
- Cálculo de uma porcentagem de compatibilidade;
- Exibição do resultado na própria página;
- Exibição de uma mensagem de acordo com a porcentagem obtida.

## Como funciona

O cálculo da compatibilidade é realizado por meio de uma lógica desenvolvida especificamente para o LoveMatch.

Cada caractere do nome recebe um valor numérico baseado em sua posição no alfabeto. Esse valor é multiplicado pela posição que o caractere ocupa dentro do nome, e os valores são somados para gerar um resultado individual para cada pessoa.

Posteriormente, os resultados dos dois nomes são combinados para gerar a porcentagem final de compatibilidade.

A lógica foi desenvolvida de forma determinística, portanto, os mesmos nomes sempre produzirão o mesmo resultado.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Estrutura do projeto

```text
lovematch/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── logo.png
│   ├── logo_white.svg
│   ├── logo_github.png
│   └── favicon.png
└── index.html
