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
  constructor() {
    super();

    this._changeText = this._changeText.bind(this);
  }

  render () {
    return (
      <div>
        <input
          type="text"
          value={this.props.bodyText}
          onChange={this._changeText} />
        <h4>{this.props.bodyText}</h4>
      </div>
    );
  }

  _changeText(ev) {
    console.log("I am getting text change");
    this.props.onTextChange(ev.target.value);
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
        <AppBody onTextChange={this._updateBodyText} bodyText={this.state.bodyText}></AppBody>
      </div>
    );
  }

  _updateBodyText(value) {
    this.setState({
      bodyText: value
    });
  }
}

export default App;
