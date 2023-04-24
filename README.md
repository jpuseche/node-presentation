# Node Presentation

This is the repository for Juan Useche's node.js file manage system presentation.

# Steps to run locally

1. Get in the folder where you are going to save your work through the CLI. You can create one with the command:
    ```
    mkdir <your-folder>
    ```
2. Pull the code to your machine with this command:
    ```
    git clone https://github.com/jpuseche/node-presentation.git
    ```
3. Run the command:
    ```
    npm install
    ```
    This is to load the necessary modules into your local project.
4. Run the command:
    ```
    npm run dev
    ```
    This is to run the server after the initial listening configuration is set.

With this you should be ready to attend the code along prepared for this repository. Happy coding!!!

# Used Tools

1. Node.js: The runtime (environment) where we run javascript.

2. Express.js: The framework to create node applications. Express itself is a module.

3. Node's body-parser module: This module parses an http request body, making it possible to read input data.
(This one needs to use the urlencoded() function to parse encoded bodies properly)

4. Node's fs (File System) module: This module is in charge of everything we need regarding the file management.

5. mustache-express module: This is the templating system to show dynamic information in the html views.