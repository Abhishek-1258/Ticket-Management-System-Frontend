### Setup

1. Clone the repo. `git clone [git repo ssh/http url]`
2. `cd [repo]` and `npm install` to install dependencies.
3. `npm start` to run the dev build and open [http://localhost:3000/](http://localhost:3000/)

The page will reload if you make edits in the file while running dev server. No need to restart server.

---

### Local development pre-requisites

> Note: This is opinionated setting for ensuring code quality

1. Install Code Editor. Preferably [VS CODE](https://code.visualstudio.com/download).
2. Install important extensions for Linting and Formatting  
   2.1. `ESLint` from Microsoft  
   2.2. `Prettier - Code formatter` from Prettier.
3. Go to VSCode setting and enable `format on save`. Setting id = `editor.formatOnSave`
4. If formatting doesn't work. You may need to configure formatter to run on `ts` and `tsx` extensions.  
   4.1. Open file and hit `cmd/ctrl + shift + p` > `format document with` > `configure default` > Choose `prettier` from the available formatters

---

### Bundling and Distribution

run `npm run build` to create a build folder.

> Production build correctly bundles React in production mode, optimizes it for the best performance by minifying.

The artifact can be served from any server. If you want to test artifact locally, serve it using npm package `serve`. Run `npx serve -s build` from repo root.

---
