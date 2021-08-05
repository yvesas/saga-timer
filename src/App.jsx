import React, {Component} from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Timer from './Timer.jsx'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Provider store={store}>
                    <Timer/>
                </Provider>
            </div>
        );
    }
}

export default App;