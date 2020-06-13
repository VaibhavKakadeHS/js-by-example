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

  componentDidMount() {
    console.log("Header mount");
  }

  componentWillUpdate() {
    console.log("Header will update");
  }

  componentDidUpdate () {
    console.log("Header did update");
  }
}

class AppBody extends React.Component {
  render () {
    return (
      <div>{this.props.bodyText}</div>
    )
  }

  componentDidMount() {
    console.log("Body mount");
  }

  componentWillUpdate() {
    console.log("Body will update");
  }

  componentDidUpdate() {
    console.log("Body did update");
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      headingText: "This is page header",
      bodyText: "This is body"
    };

    this._updateBodyText = this._updateBodyText.bind(this);
  }

  render() {
    return (
      <div className="App">
        <AppHeader headingText={this.state.headingText} ></AppHeader>
        <AppBody bodyText={this.state.bodyText}></AppBody>
        <button onClick={this._updateBodyText}>Update</button>
      </div>
    );
  }

  _updateBodyText() {
    this.setState({
      bodyText: "This is body " + Date.now()
    });
  }

  componentDidMount() {
    console.log("App mount");
  }

  componentWillUpdate() {
    console.log("App will update");
  }

  componentDidUpdate() {
    console.log("App did update");
  }
}

export default App;
