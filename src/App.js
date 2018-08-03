import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Layout} from "element-react";
import {css} from "glamor"
import 'element-theme-default';
import WelcomePage from "./pages/Welcome";
import NavMenu from "./components/NavMenu";
import Header from "./components/Header";
import LoginPage from "./pages/Login";

class App extends Component {
  getUser = () => {
    fetch("/getuser", {credentials: "same-origin"}).then(r => r.json()).then(user => {
      if (user.userRole === "guest") {
        this.setState({page: this.state.login})
      }
      else if (user.userRole === "admin") {
        this.setState({page: this.state.admin})
      }
    })
  };

  constructor(props) {
    super(props);
    this.state = {
      admin: <div>
        <Layout.Row>
          <Layout.Col span="24" style={{position: "fixed", zIndex: 100}}>
            <Header style={{position: "fixed"}}/>
          </Layout.Col>
        </Layout.Row>
        <Layout.Row style={{marginTop: 60}}>
          <Layout.Col span="4" style={{position: "fixed"}}>
            <NavMenu/>
          </Layout.Col>
          <Layout.Col span="20" offset="4">
            <div {...bodyContentRule}>
              <Route exact path="/admin" component={WelcomePage}/>
              <Route path="/admin/about" component={WelcomePage}/>
              <Route path="/admin/topics" component={WelcomePage}/>
            </div>
          </Layout.Col>
        </Layout.Row>
      </div>,
      login: <LoginPage getUser={this.getUser}/>,
      page: <div>加载中...</div>
    }
  }

  componentDidMount() {
    this.getUser()
  }

  render() {
    return (
      <Router>
        {this.state.page}
      </Router>
    );
  }
}

const bodyContentRule = css({
  margin: 20,
});

export default App;
