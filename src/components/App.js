import React, { Component } from 'react';
import jsonGhana from '../../factsheets_Ghana.json';
require('babel-polyfill');
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Search from './Search';
import Dashboard from './Dashboard';


class App extends Component {
    state = {
        data: null,
        panGhana: null
    };

    componentDidMount() {
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('./express_backend');
        const body = await response.json();

        if (response.status === 200) {
            throw Error(body.message);
        }
        return body;
    };

    render() {
        return (
            <Router>
                <div>
                 <Switch>
                    <Route exact path='/' component={(state) => <Search data={this.state.data} />} />
                    <Route path='/home' component={Dashboard} />
            {/* <Route path='/crop' component={Crop} />
            <Route path='/pest' component={Pest} />
            <Route path='/risk' component={Risk} />
            <Route path='/form' component={Form} />
            <Route path='/search' component={Search} />
            <Route component={404} /> */}
                </Switch>
            </div>
        </Router>
        );
    }
}

export default App;