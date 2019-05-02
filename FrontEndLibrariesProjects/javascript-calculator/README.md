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

3. Create folders inside the src

- **Actions**, to have all the action-creator together.
- **Reducers**, to have defined reducers for all actions.
- **Components**, to have all the components inside it. Inside this      folder I create 2 folders:
    - Containers (called also smart or stateful)
    - Presentational component. (called also dumb or stateless)
- **Assets**
- **Styles**

4. The index.js root file:
```javascript
        import React from 'react';
        import ReactDOM from 'react-dom';
        import './index.css';
        import App from './App';
        import { Provider } from 'react-redux';
        import store from './store';
        import * as serviceWorker from './serviceWorker';

        ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));

        serviceWorker.unregister();
```
*__The provider__ is a react component that sits at the root level of your app, and allows any of its children access to the store (which we supply to it as a prop).  Provider wraps up your entire React application. Moreover it gets the store as a prop.*

5. the store/index.js:
```javascript
        import { createStore, applyMiddleware } from 'redux';
        import { composeWithDevTools } from 'redux-devtools-extension';
        import thunkMiddleware from 'redux-thunk';
        import reducer from '../reducers';
        import state from './initialState';

        export default createStore(
        reducer,
        state,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
        );
```

*__Middleware__ it allow to interact with actions that have been dispatched to the store before they reach the store's reducer. Examples of different uses for middleware include logging actions, reporting errors, making asynchronous requests, and dispatching new actions.*

*__redux-thunk:__ is a middleware that looks at every action that passes through the system, and if it’s a function, it calls that function. That’s all it does. If you want an action to do something, that code needs to live inside a function. That function (the “thunk”) is a bundle of work to be done.*

6. Create App.js (write the Components that we create in th next steps)

7. Create the Actions Types

8. Create Actions Creators
If you want to dispatch several actions, you must do it here.
```javascript
        import { ADD_NUMBER, DO_OPERATION } from "./actionTypes";

        export const calcAddNumber = dispatch => newDigit => {
        dispatch({
            type: ADD_NUMBER,
            payload: {
            digit: newDigit
            }
        })
        }

        export const calcOperation = dispatch => operation => {
        dispatch({
            type: DO_OPERATION,
            payload: {
            operation: operation
            }
        })
        }
```

9. Create the components and connecting.
``` javascript
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { calcAddNumber } from '../actions/calcActions';

class CalcButton extends Component {
  render(){
    return (
      <div onClick={()=>{this.props.addNumberToDisplay(this.props.calcNumber)}} style={{display:'inline-block', minWidth: 20, minHeight:20, backgroundColor:'aqua'}}>
        <p>{this.props.calcNumber}</p>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  ...state
});

const mapActionsToProps = dispatch => ({
  addNumberToDisplay : calcAddNumber(dispatch)
})
```
*What does __react-redux’s connect__ do? it connects a React component with the Redux store.You will use connect with two or three arguments depending on the use case:*

- __mapStateToProps__: connects a part of the Redux state to the props of a React component. By doing so a connected React component will have access to the exact part of the store it needs.
- __mapDispatchToProps__:  connects Redux actions to React props. This way a connected React component will be able to dispatch actions.

Finally you have to :
``` javascript
export default connect(
  mapStateToProps,
  mapActionToProps
)(CalcButton);
```
9. Create reducers for this app

10. Combine Reducers (Folder: reducers/index.js)

```import { combineReducers } from 'redux';```