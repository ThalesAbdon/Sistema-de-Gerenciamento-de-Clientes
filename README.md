# Sistema de Gerenciamento de Clientes

Este projeto visa atender às necessidades de uma empresa especializada em limpeza residencial, que enfrenta desafios no gerenciamento de clientes.

---

## Índice

1. [Sobre o Projeto](#sobre-o-projeto)
    - 1.1 [Objetivo](#objetivo)
    - 1.2 [Funcionalidades](#funcionalidades)
2. [Começando](#começando)
3. [Ferramentas](#ferramentas)
    - 3.1 [Backend](#backend)
    - 3.2 [Frontend](#frontend)


---

## Sobre o Projeto



### Objetivo

Desenvolver uma aplicação de gestão de clientes destinada a uma empresa de limpeza domiciliar. 
O sistema precisa viabilizar o registro e a consulta de clientes, oferecendo funcionalidades como listagem, filtragem e adição de novos clientes. 

Adicionalmente, 
a aplicação deve aprimorar as rotas de atendimento, buscando calcular a trajetória mais eficaz para visitar todos os clientes registrados.

### Funcionalidades

* Realizar o Cadastro de clientes
* Listar os Clientes Cadastrados
* Filtrar os Clientes Cadastrados por algumas métricas
* Otimizar a rota de atendimento
* Listar os clientes na ordem que devem ser visitados do primeiro ao último cliente da rota.

---

## Começando

* 1° - Clonar o repositório, ele tem 2 pasta: backend e frontend
* 2° - Instalar as dependencias de back e front(utilizei npm)
        Acesse as pastas(backend e frontend) e execute:
        ```npm i``` ou ```yarn add```
* 3° - Trocar as variavéis de ambiente(do backend) no arquivo: ```.env```
        Acesse a pasta do backend e altere as variavéis
* 4° - Executar script do packjson para rodar a migration
        Acesse a pasta do backend e execute: ```npm run migration:run```
* 5° - Execute os 2 projetos
        Acesse as pastas(backend e frontend) e execute:    
        Para executar o backend, acesse o diretório do backend e digite: ```npm run start:dev```
        Para executar o frontend, acesse o diretório do frontend e digite: ```npm start```
---

## Ferramentas

### Backend:

* Node.js: v20.11.0
* Dependências:
* cors: ^2.8.5
* dotenv: ^16.3.2
* express: ^4.18.2
* nodemon: ^3.0.3
* permutations: ^0.0.1
* pg: ^8.11.3
* postgresql: ^0.0.1

### Frontend:

* React: 18.2.0

Dependências:
* @testing-library/jest-dom: ^5.17.0
* @testing-library/react: ^13.4.0
* @testing-library/user-event: ^13.5.0
* axios: ^1.6.5
* react-dom: ^18.2.0
* react-hook-form: ^7.49.3
* react-input-mask: ^2.0.4
* react-input-masked: ^1.0.4
* react-modal: ^3.16.1
* react-router-dom: ^6.21.3
* react-scripts: 5.0.1
* react-toastify: ^10.0.3
* web-vitals: ^2.1.4

Essas são as versões das principais dependências utilizadas no backend e frontend do projeto.
