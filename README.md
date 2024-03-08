[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
# Responsive Task List
 
Development of a custom and responsive layout of a dynamic task list (add and deletion functionalities), along with browser-level data persistence using [localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage).

# 1. Requirements

- Package manager for Node.JS [npm](https://docs.npmjs.com/):

      sudo apt-get install npm

- [Parcel](https://parceljs.org/) tool and [ESLint](https://eslint.org/) linter.

# 2. Execution Options

 In this section, you'll find all the instructions to visualize and interact with the running project.

## 2.1. URL

The project was deployed on GitHub Pages, therefore, to visualize and interact with the hosted page, just [click here](https://juliorodrigues07.github.io/task_list/).

_Disclaimer: The layout contains fictitious informations._

![Main Screen](/public/assets/page.png)

## 2.2. HTML File

In this case, to visualize and interact with the page, just open the _index.html_ file in a browser of your choice.
 
## 2.3. Locally

To execute the project locally as a server, execute the following steps:

1. Clone the repository

       git clone https://github.com/juliorodrigues07/task_list.git

2. Enter the repository directory

       cd task_list

3. Install the dependencies

       npm i

4. Run the project

       npm start

You should receive an URL as output (`http://localhost:<port number>`). To visualize and interact with the page, just open the URL in a browser of your choice.

# 3. Project Structure

    .
    ├── README.md                      # Project's documentation
    ├── public                         # Directory containing project's static files
    |   ├── index.html                 <- Landing page base layout
    |   └── assets                     # Directory containing all images and icons used in the page
    |       ├── avatar.png
    |       ├── page.png
    |       └── todo.svg
    └── src                            # Directory containing the application source code
        ├── style                      # Directory containing all the page stylization
        |   ├── buttons.css
        |   ├── general.css
        |   ├── inputs.css
        |   ├── profile.css
        |   ├── responsiveness.css     <- File that applies responsiveness to the layout
        |   └── tasks_tables.css
        └── js                         # Directory containing script responsible for page's dynamicity
            └── crud.js                <- Add, deletion and marking functions with data persistence
        
# 4. Future Steps
      
- [ ] Fix a bug in task deletion. Multiple tasks (same name and period) can be removed with a single operation, since these are filtered only by name and period;

- [ ] Add edit functionality to profile photo, short-bio, social media and tasks;

- [x] Implement data persistence for the _checkboxes_ (task statuses doesn't persist on page);

- [x] Refactor functions responsible for DOM modifications on adding and removing tasks;

- [x] Enhance elements alignment;

- [ ] Analyze other colors for smaller page elements and improve stylization;

- [ ] Consider using _frameworks_ (React, Vue, Bootstrap, ...) to facilitate the implementation of new features and visual enhancements.
