import React, {Component} from 'react';
import ReactDom from 'react-dom';

const appDiv = document.getElementById('app');

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <h1>Test</h1>
    }
}

ReactDom.render(<App />, appDiv);
