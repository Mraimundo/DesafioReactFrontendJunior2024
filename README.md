# 💻 Teste front-end enContact

Bem-vindo ao teste para desenvolvimento front-end na enContact.

## O teste

Esse projeto foi desenvolvido para demostrar as minhas habilidades técnicas em React, TypeScript e folhas de estilos, e foi baseamos no projeto [Todo MVC](https://todomvc.com).

![Todo MVC](data/todos.png "Todo MVC")

Neste teste foi demostrado habilidades em gerênciamento de estados, listas utilizando `map`, `filter`, `find`, `reduce`, API, css, entre outros.

O foco deste teste é a implementação de uma lista de tarefas, onde você deve listar, criar, mudar o título, mudar o estado para concluído ou não, e remover uma tarefa, além das informações de quantas tarefas ainda estão pendentes, filtrar as ativas, completas, e poder limpar as tarefas completas (removendo da lista).

<hr/>

## 🎨 Layout
<img src="data/todos.gif" alt="Comportamento da lista de tarefas" width="750">

<hr/>

# Deploy da Aplicação :dash:

>  <a href="https://desafio-react-frontend-junior.vercel.app/" target='_blank'>Link do deploy da aplicação<a/>

<hr/>

# Features

- [x] **Recuperar as tarefas iniciais via GET**: Listar as tarefas com o uso da API [https://my-json-server.typicode.com/EnkiGroup/DesafioReactFrontendJunior2024/todos](https://my-json-server.typicode.com/EnkiGroup/DesafioReactFrontendJunior2024/todos)].

- [x] **Adicionar uma tarefa na lista**: 
      - Para adicionar, escrever o título da tarefa e pressionar Enter para registrar.
      - Apresentar a tarefa criada no início da lista.
      - A tarefa deve ser marcada como "não concluída" ao ser registrada.

- [x] **Listar as tarefas**: Listar as tarefas criadas.

- [x] **Marcar ou desmarcar uma tarefa como concluída**: Posso marcar ou desmarcar uma tarefa como concluída.

- [x] **Mouse hover e Remover Tarefa**: Ao passar o mouse em cima de uma tarefa podemos ver um ícone de remoção, ao clicar deve-se remover a tarefa.

- [x] **Editar uma tarefa ao clicar duas vezes no item**: Ao clicar duas vezes em um item, deve apresentar o modo de edição de uma tarefa..

- [x] **Marcar todas as tarefas como concluídas**: Ao clicar na seta (ao lado do campo de criação de tarefas no protótipo), posso marcar todas as tarefas como concluídas.

- [x] **Informações adicionais do protótipo**:
      - Canto inferior esquerdo: quantidade de **itens restantes** (não marcados como concluído).
      - Canto inferior direito: botão para limpar (remover) os itens já concluídos com contador.
      
- [x] **Filtrar**: Filtros "Todos", "Ativos" e "Completos", ao clicar deve filtrar a lista e marcar o botão como ativo. (Obs.: Utilize a URL para os filtros `react-router-dom`).
      - Todos: Mostra ativos e completos.
      - Ativos: Mostra apenas os ativos.
      - Completos: Mostra apenas os completos.

<hr/>
 
# Resolvendo Problemas :exclamation:

Um dos principais problemas que houve no desenvolvimento do projeto foi primeiramente na incopatibilidade da versão do nodejs na hora de installar as dependencias, podendo recuar algumas versões antiga, de especifico a versão 14^. 

<hr/>

# Tarefas em aberto

:memo: Aplicar Testes E2E


<hr/>

# :rocket: Tecnologias

-  [React](https://react.dev/learn)
-  [TypeScript](https://www.typescriptlang.org/)
-  [Styled-components](https://styled-components.com/docs/basics#getting-started)
-  [React-router](https://v5.reactrouter.com/web/guides/quick-start)
-  [Axios](https://github.com/axios/axios)
-  [Sonner](https://sonner.emilkowal.ski/getting-started)
-  [React-canvas-confetti](https://www.npmjs.com/package/react-canvas-confetti)

#  Instalação e execução


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) de preferência na versão 14^+. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## :notebook: Executando

O **README** mostra como executar as aplicação.

```bash
# Clone este repositório
$ [SSH] git clone git@github.com:Mraimundo/DesafioReactFrontendJunior2024.git
$ [HTTPS] git clone https://github.com/Mraimundo/DesafioReactFrontendJunior2024.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd desafio-react-frontend-junior-2024

Portanto depois de clonar o repositório digite em seu terminal para instalar as dependências:
$  pnpm install, npm install ou yarn add

# Execute a aplicação frontend
$ npm run dev, yarn dev

$ em seguida [localhost:3000](http://localhost:3000) em seu navegador para visualizar o aplicativo.


### Testes Unitários

- Os testes são organizados usando a biblioteca Jest e React Testing Library.
- Para executar os testes, utilize o comando `npm run test ou yarn test`.

```

Feito com horas em frente ao :computer: por [Mouzinho Raimundo](https://www.linkedin.com/in/mouzinho-raimundo/)
