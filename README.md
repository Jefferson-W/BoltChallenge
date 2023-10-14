# BoltChallenge

Challenge by Bolt
## Pré-requisitos

Para rodar esse projeto, faz-se necessário instalar o [Node.js](https://nodejs.org/en/download/) (que já inclui o NPM) e o [GIT](https://git-scm.com/downloads).

## Instalação

Instale as dependências do projeto com o comando:
```
npm install
```

Aguarde até finalizar.

### Execuções via interface gráfica

Para o primeiro caso, a aplicação gráfica do Cypress pode ser iniciada executando um dos comando abaixo no terminal:

```
npx cypress open
```
Atalho criado:

```
npm run cy:open
```

Em seguida, uma janela será aberta para que o usuário possa selecionar o navegador desejado para os testes (caso sejam testes de [GUI](https://pt.wikipedia.org/wiki/Interface_gr%C3%A1fica_do_utilizador)). 

Os resultados da execução com interface gráfica são apresentados em tempo real na aplicação do Cypress.

### Execuções sem interface gráfica (headless)

Caso deseje executar os testes sem interface gráfica, somente via linha de comando, digite um dos comandos abaixo no terminal:

```
npx cypress run
```
Atalho criado:

```
npm run cy:headless
```

Ao fim da execução sem interface gráfica serão apresentados os resultados no terminal.

## Report com Allure

Após finalizado a execução do cenário, execute o comando abaixo para geração do report:

```
npm run allure:report
```
Em seguida, para abrir report no navegador, execute o comando:

```
npm run allure:open
```
Para conservar o historico das ultimas execuções locais, substitua o comando acima pelo comando:

```
npm run allure:serve

```
## Evidencias

As evidencias em video estão na pasta cypress/videos

As screenshots estão no arquivo docs/documentacaoTestesAutomatizados.pdf, junto com os passos.

## Tecnologias utilizadas

Abaixo seguem as tecnologias utilizadas:

* [GIT](https://git-scm.com/) - Aplicação utilizada para controle de versionamento de código.
* [Node.js](https://nodejs.org/en/) - Ambiente de execução para JavaScript externamente de um navegador web.
* [NPM](https://www.npmjs.com/) - Gerenciador de pacotes/dependências.
* [cypress](https://www.cypress.io/) - Framework utilizado para automação de testes de GUI e API.
* [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) - Biblioteca responsável por gerar dados falsos que poderão ser utilizados nos testes.
* [moment](https://momentjs.com/) - Framework que permite gerar e manipular datas com facilidade no JS.

