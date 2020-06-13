import React from 'react';
import './App.css';

class AppHeader extends React.Component {
  render () {
    return (
      <header className="header">
        <h1>{this.props.headingText}</h1>
      </header>
    );
  }
}

class AppBody extends React.Component {
  render () {
    return (
      <div>{this.props.bodyText}</div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      headingText: "This is page header",
      bodyText: "This is body"
    };
  }

  render() {
    return (
      <div className="App">
        <AppHeader headingText={this.state.headingText} ></AppHeader>
        <AppBody bodyText={this.state.bodyText}></AppBody>
      </div>
    );
  }
}

export default App;
