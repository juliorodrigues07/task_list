[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
# Processo Seletivo da Aceleradora Ágil - Exercício 2
 
Criação de um _layout_ personalizado e responsivo de uma lista de tarefas dinâmica, com funcionalidades de adição e remoção e persistência de dados a nível de navegador com [localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage).

# Requisitos (Opcional)

- Gerenciador de pacotes para Node.JS [npm](https://docs.npmjs.com/):

      sudo apt-get install npm

- Ferramenta [parcel](https://pt.parceljs.org/getting_started.html):

      npm install -g parcel-bundler

- Para instalar todas as dependências, execute o seguinte comando dentro do diretório do projeto:

      npm i

# Opções de Execução

Nesta seção, encontram-se todas as instruções e alternativas para visualizar e interagir com o projeto em execução.

## 1) URL

O _deploy_ do projeto foi realizado no GitHub Pages, logo para visualizar e interagir com a página hospedada, basta [clicar aqui](https://juliorodrigues07.github.io/task_list/). O _layout_ contém informações fictícias.

![Main Screen](/public/assets/page.png)

## 2) Arquivo HTML

Neste caso, para visualizar e interagir com a página, basta abrir o arquivo _index.html_ em um navegador de sua preferência.
 
## 3) Localmente

- Para executar a página localmente como um servidor, execute o seguinte comando dentro do diretório do projeto:

      npm start

 Você deve receber uma _URL_ como saída (`http://localhost:<número da porta>`). Para visualizar e interagir com a página, apenas abra a _URL_ em um navegador de sua preferência.

# Considerações Sobre a Solução

- Para implementar a responsividade, basicamente apenas foi utilizado _Flexbox_, com orientação em linha para janelas com maior largura (monitores), e em coluna para janelas cuja largura seja menor que um limiar pré-definido (celulares);
- Como na proposta da aplicação é improvável ter de lidar com dados sensíveis, a persistência de dados em ambiente de navegador foi implementada com _localStorage_, preservando todas as tarefas cadastradas em caso de recarregamento da página ou encerramento da sessão;
- Para aprender como manipular _localStorage_ em JavaScript, utilizei de um vídeo curto no YouTube como fonte, disponível [neste link](https://www.youtube.com/watch?v=hNTozXl-qJA);
- Vários elementos extras foram incluídos na página para aprimorar sua acessibilidade, entre eles estão ícones intuitivos para execução de ações, _feedbacks_ visuais e verbais na interação com diferentes elementos da página e entrada de dados.

# Futuros Passos 

- [ ] Correção de _bug_ na remoção de tarefas, pois múltiplas tarefas (mesmo nome e período) podem ser removidas em uma única operação, já que estas são filtradas apenas pelo nome e período;

- [ ] Adicionar funcionalidade de edição de tarefas;

- [x] Implementar persistência de dados para as _checkboxes_ (status da tarefa não persiste na página);

- [x] Refatorar funções responsáveis por alterações no DOM na adição e remoção de tarefas;

- [x] Aprimorar alinhamento dos elementos;

- [ ] Analisar outras cores para elementos menores da página e aprimorar estilização;

- [ ] Considerar uso de _frameworks_ (React, Vue, Bootstrap, ...) para facilitar a implementação de novas funcionalidades e melhorias visuais.

# Autor

**Julio Rodrigues**
<div>
 <a href="https://www.linkedin.com/in/julio-rodrigues-267b63255/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</div>
