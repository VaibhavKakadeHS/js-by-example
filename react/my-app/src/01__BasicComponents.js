import React from 'react';

class AppHeader extends React.Component {
  render () {
    return (
      <header className="header">
        <h1>This is page header</h1>
      </header>
    );
  }
}

class AppBody extends React.Component {
  render () {
    return (
      <div>This is body</div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader></AppHeader>
        <AppBody></AppBody>
      </div>
    );
  }
}

export default App;
