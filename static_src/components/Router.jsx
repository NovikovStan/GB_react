import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./Profile";

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Layout />} />
        <Route exact path="/profile/" render={() => <Profile />} />
        <Route
          exact
          path="/chat/:chatId/"
          render={obj => <Layout chatId={Number(obj.match.params.chatId)} />}
        />
      </Switch>
    );
  }
}
