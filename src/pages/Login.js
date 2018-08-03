import React, {Component} from 'react';
import {css} from "glamor";
import {Form, Input, Button} from "element-react";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: '',
        password: '',
      }
    };
  }

  onSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.form)
    }).then(r => r.json()).then(user => {
      if (user.userRole === "admin") {
        this.props.getUser()
      }
    })

  }

  onChange(key, value) {
    this.state.form[key] = value;
    this.forceUpdate();
  }

  render() {
    return (
      <div {...pageRule}>
        <Form model={this.state.form} labelWidth="80" onSubmit={this.onSubmit.bind(this)}
              style={{width: 400}}>
          <Form.Item label="用户名">
            <Input value={this.state.form.username} onChange={this.onChange.bind(this, 'username')}></Input>
          </Form.Item>
          <Form.Item label="密码">
            <Input type="password" value={this.state.form.password}
                   onChange={this.onChange.bind(this, 'password')}></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" nativeType="submit">登录</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const pageRule = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh"
});


export default LoginPage;
