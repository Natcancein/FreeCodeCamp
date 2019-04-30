# Build a JavaScript Calculator

This project was made with [React](https://reactjs.org/),[Redux](https://es.redux.js.org), and is part of [Free Code Camp](https://www.freecodecamp.org/)Projects.

## Steps for the project:

1. Install React and start the project

```npx create-react-app my-app```

2. Redux Setup, we install this:
- [Redux](https://redux.js.org/),The most important!
- [React-Redux](https://react-redux.js.org/) because React bindings are not included in Redux by default. You need to install them explicitly.
- [Redux-Thunk](https://daveceddia.com/what-is-a-thunk/) - is a middleware that allows you to write action creators that return a function. [More info](https://github.com/reduxjs/redux-thunk).

```npm install redux react-redux redux-thunk --save```

3. create folders inside the src

- **Actions**, to have all the action-creator together.
- **Reducers**, to have defined reducers for all actions.
- **Components**, to have all the components inside it. Inside this      folder I create 2 folders:
    - Containers (called also smart or stateful)
    - Presentational component. (called also dumb or stateless)
- **Assets**
- **Styles**