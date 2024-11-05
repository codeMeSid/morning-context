# The Morning Context

### Overview

`Morning Context` is an application that shows daily news update.

This repository contains the source code for the Morning Context app. Below are the instructions to set up the project locally and deploy it to your environment.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
- [Deployment Instructions](#deployment-instructions)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

# Prerequisites

Before setting up the project, ensure that the following tools and dependencies are installed:

- [Node.js](https://nodejs.org/en/) (version >= 14.x.x)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (for dependency management)

  To verify that Node.js and npm are installed, run the following commands in your terminal:

```bash
> node -v
> npm -v
```

If Node.js and npm are not installed, please follow the installation instructions on their official websites.

---

### Local Setup

### 1. Clone the repository

Start by cloning this repository to your local machine:

```bash
> git clone https://github.com/codeMeSid/morning-context.git
> cd morning-context
```

### 2. Install dependencies

Navigate into the project directory and install the necessary dependencies using npm (or yarn):

```bash
> npm install
```

or if you're using Yarn:

```bash
> yarn install
```

### 3. Run Locally

To run the application locally, use the following command:

```bash
> npm start
```
This will start the app on the default port, usually http://localhost:3000.
<br>
<br>
Alternatively, if you want to run the app in development mode, use:

```bash
> npm run dev
```

or alternatively

```bash
> yarn dev
```
<br>
This will start the app with live-reloading enabled, so any changes to the source code will automatically refresh the application.

---

### Deployment Instructions

To deploy the application to a production environment, you can follow these steps:

### 1. Build the application
If you're deploying a production build, you need to create a production-ready build. Run the following command to create a build of the application:

```bash
> npm run build
```
or alternatively

```bash
> yarn build
```
<br>
This will generate a build directory with all the static assets needed for deployment.

### 2. Deploying to a Cloud Platform
- Heroku: If you're deploying to Heroku, you can use the following steps:
    1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
    <br>
    <br>
    2. Log in to Heroku by running:
    ```bash
    > heroku login
    ```
    3. Initialize a new Git repository (if it isn't already a git repo):
    ```bash
    > git init
    ```
    4. Create a Heroku app:
    ```bash
    > heroku create
    ```
    5. Push your code to Heroku:
    ```bash
    > git push heroku master
    ```
    6. Open the app in your browser:
    ```bash
    > heroku open
    ```

### 3. Vercel Deployment

Use the vercel dashboard to link your repo to vercel project. 

---
### License
This project is licensed under the [MIT License]().

---