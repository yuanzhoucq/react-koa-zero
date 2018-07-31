import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Layout} from "element-react";
import {css} from "glamor"
import 'element-theme-default';
import WelcomePage from "./pages/Welcome";
import NavMenu from "./components/NavMenu";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout.Row>
            <Header/>
          </Layout.Row>
          <Layout.Row>
            <Layout.Col span="6">
              <NavMenu/>
            </Layout.Col>
            <Layout.Col span="18">
              <div {...bodyContentRule}>
                <Route exact path="/" component={WelcomePage}/>
                <Route path="/about" component={WelcomePage}/>
                <Route path="/topics" component={WelcomePage}/>
              </div>
            </Layout.Col>
          </Layout.Row>
        </div>
      </Router>
    );
  }
}

const bodyContentRule = css({
  "margin": 20,
});

export default App;
