[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
# Responsive Task List
 
Development of a custom and responsive layout of a dynamic task list (add and deletion functionalities), along with browser-level data persistence using [localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage).

# 1. Requirements

- Package manager for Node.JS [npm](https://docs.npmjs.com/):

      sudo apt-get install npm

- To install all dependencies according to each project, run the following command inside the project directory:

      npm i

# 2. Execution Options

 In this section, you'll find all the instructions to visualize and interact with the running project.

_Disclaimer: The layout contains fictitious informations._

![Main Screen](/public/assets/page.png)

## 2.1. HTML File

In this case, to visualize and interact with the page, just open the _index.html_ file in a browser of your choice.
 
## 2.2. Locally

- To execute the project locally as a server, run the following command inside the project's directory:

      npm start

 You should receive an URL as output (`http://localhost:<port number>`). To visualize and interact with the page, just open the URL in a browser of your choice.

# 3. Future Steps

- [ ] Add task editing funcionality;

- [ ] Implement data persistence for the _checkboxes_ (task statuses doesn't persist on page);

- [ ] Enhance elements alignment;

- [ ] Fix a bug in task deletion. Multiple tasks (same name and period) can be removed with a single operation, since these are filtered only by name and period;

- [ ] Refactor functions responsible for DOM modifications on adding and removing tasks;

- [ ] Analyze other colors for smaller page elements and improve stylization.
