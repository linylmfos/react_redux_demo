import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
import reducer from "./components/reducers/counter"
import { Provider } from "react-redux";

// 创建store仓库
const store = createStore(reducer);
// store.subscribe(() => console.log("state:", store.getState()));

// const render = () => {
//     ReactDOM.render(<App
//         onIncrement = { () => store.dispatch({ type: "INCREMENT" }) }
//         onDecrement = {() =>  store.dispatch({ type: "DECREMENT" })}
//         value = { store.getState() }
//         />,
//          document.getElementById('root'));
// };

// render();
// store.subscribe(render)

ReactDOM.render(
    <Provider store={ store } >  
        <App />
    </Provider>,
    document.getElementById('root'));


