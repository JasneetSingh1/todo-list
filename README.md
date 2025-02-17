## Table of Contents

1. [Description](#description)
1. [Demo](#demo)
1. [Features](#features)
1. [Technologies Used](#technologies-used)
1. [Project Challenges](#project-challenges)
1. [Thoughts and Observations](#thoughts-and-observations)
1. [Future Enhancements](#future-enhancements)
1. [Installation](#installation)

## Description

This is a to-do list web application that allows users to create and manage tasks within different projects. The goal of this project was to practice modular JavaScript, event handling, and local storage for data persistence. The application provides an intuitive UI where users can add, edit, delete, and mark tasks as complete.

## Demo

Provide a link to a live demo. Use gh-pages, Netlify, or Vercel.

Click here: [https://link-to-your-demo-goes-here/](https://link-to-your-demo-goes-here/)


## Features

- Create multiple projects
- Add tasks to specific projects
- Edit, view, and delete tasks
- Mark tasks as complete (with a visual indication)
- Data persistence using localStorage
- Dropdown menu for task actions
- Responsive and clean UI

## Technologies Used

- JavaScript (ES6 modules)
- Webpack for bundling
- LocalStorage API for persistence
- HTML5 & CSS3 for structure and styling

## Project Challenges

- Managing dynamic event listeners for tasks and projects
- Ensuring localStorage correctly saves and retrieves class instances
- Handling UI state changes when modifying tasks and projects
- Implementing dropdown functionality without breaking event propagation

## Thoughts and Observations

- Modularizing the codebase improved maintainability and readability
- Using event delegation helped manage dynamically created elements efficiently
- Storing objects in localStorage required conversion back into class instances, which was an interesting challenge

## Future Enhancements

- Add due date sorting and priority filtering
- Implement drag-and-drop task reordering
- Sync tasks across devices using a backend database
- Improve UI with animations and additional styling

## Installation

1. Clone the GitHub repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-project-name.git
   ```

2. Navigate to the project's directory:

   ```bash
   cd your-project-name
   ```

3. Install the project's dependencies using npm:

   ```bash
   npm install
   ```

4. To build the project:

   ```bash
   npm run build
   ```

5. To start the development server:

   ```bash
   npm start
   ```

