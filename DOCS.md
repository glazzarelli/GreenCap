# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3001`
opening the terminal in Backend>server> 

```bash
node index.js
```

now open another(or the same) terminal in Frontend>
to have a local version of the website run 

```bash
npm run dev
```
the website will be visibile at `http://localhost:3000/`

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deployment

Start the development server on `http://localhost:3001`
by opening the terminal in Backend>server>:

```bash
node index.js
```
in the nuxt.config.ts file change the baseURL: value in order to match the name of your repo,
then move from terminal(or open a new terminal) to Frontend>.
Nuxt has a command to automatically create the static pages.

```bash
npm run generate
```
this commands pre-renders every route of the 
application and stores the result in plain HTML files that can be
deploy on any static hosting services.
The result is stored in the .nuxt à public folder.
Additionally a dist folder is created in the root folder. This is a 
shortcut to the public folder.

to deploy the project to github pages run:

```bash
npm run deploy
```
this command will generate a new gh-pages branch on your current git folder;
in order to see the project deployed you have to enable github pages from 
the github repo >options>Pages>Deploy from a branch and select the gh-pages branch
(this operation has to be done only once).

the project then will be visible at:
   https://|githubRepoOwnerName|.github.io/|GithubRepoName|/

## Naming Convention

In Nuxt.js, the naming conventions for files, folders, variables, and methods are influenced by the underlying technologies such as Vue.js and JavaScript. Here are some guidelines for naming conventions in Nuxt:

1. Files and folders:
   - Use kebab-case for file and folder names, as it is the most common convention in the Vue.js community.
   - For example, if you have a component called `MyComponent`, the file should be named `my-component.vue`.

2. Variables:
   - Use camelCase for variable names, as it is the standard convention in JavaScript.
   - For example, `myVariable`.

3. Methods:
   - Use camelCase for method names, following the JavaScript convention.
   - For example, `myMethod()`.

4. Constants:
   - Use ALL_CAPS with underscores for constant names, as it is a common convention in many programming languages, including JavaScript.
   - For example, `MY_CONSTANT`.

5. Components:
   - Use PascalCase for component names, as it is the convention in Vue.js.
   - For example, `MyComponent`.

It is important to maintain consistency in naming conventions throughout your project. Using these conventions will help improve the readability and maintainability of your Nuxt.js codebase.



