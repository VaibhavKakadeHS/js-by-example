import React from 'react';
import hsLogo from "./hsLogo.svg";
import './App.css';

class Header extends React.Component {
  render () {
    const {logo} = this.props;

    return (
      <header className="header">
        <img width={100} alt="" src={logo}></img>
      </header>
    );
  }
}

class Body extends React.Component {
  render () {
    const {news} = this.props;
    const newsEl = news.map((n) => {
      const {img, title, content, id, displayContent} = n;
      let newsContent = null;

      if (displayContent) {
        newsContent = (<p>{content}</p>);
      }

      return (
        <li className="news-item" key={id}>
          <img className="news-item-image" src={img} alt=""/>
          <h2>{title}</h2>
          <button onClick={this._onToggleBtnClick.bind(this, id)}>Toggle</button>
          {newsContent}
        </li>
      );
    });

    return (
      <div className="body">
        <ul className="news-list">
          {newsEl}
        </ul>
      </div>
    );
  }

  _onToggleBtnClick(id) {
    this.props.onToggleNewsContent(id);
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      logo: hsLogo,
      news: [
        {
          id: 1,
          img: "https://d33xqegognskaw.cloudfront.net/infinitelybeta/89e36344-48b9-43e4-9e57-bb11096ff230-t.jpeg?Expires=1590995578&Signature=WZX2IbuEr7NNWC5REMGFrw8L~jBBejFUbmVhuR5k0Df~~kDDYqGOlQwpPDsS2h8iLTW9oPx9fTEqRevj8ObE8mYaNPztKEPhiATNImWjrDGmdvKp5UWZO5dZs7Tt1Bmo9-DVc3QC3DLcrk~nUNNRfVGxkeS6ap1cIpIIEtLdgGajFxDc-4Uuzfbr0oCYWXsH72eIbAPzxcdgw0yadbnLz76b7LBaFV3RYFZ9TiQl-yI3fYA8g3M9mT~ZNX4SQ~KeFZX5DLpvQ9hppqHqXXY9jFwNOBM~dogNsUR6HBEa9vFX0wr~OK-Ls29D1w5KjBu~KHLzGP-8s6tE0JcNkl3-mQ__&Key-Pair-Id=APKAJJQELYVOQOQ3R7NA",
          title: "LG presents Front Load Washing Machines with Steam™ Technology",
          content: "LG's Front Load Washing Machines feature Steam™ Technology that pre-treat any stains or dirt before washing by applying intense heat of the steam. Steam wash helps wash clothes hygienically killing 99.9%* of the germs while Steam Refresh program refreshes cloths in just 20 minutes without any water & detergent. They're also equipped with other features like ThinQ™ and TurboWash™ 360˚.",
          displayContent: false
        },
        {
          id: 2,
          img: "https://d33xqegognskaw.cloudfront.net/infinitelybeta/c674325f-f472-47ce-a20d-d5947f3052a1-t.gif?Expires=1590995578&Signature=cfLOgJypyOnleFgFoMlLPI4~B1dlIzriGlztIz-Gpy6N-DaBDp~OaWIXEmiuXun1hKsCooAyunSmgDDLKRq00VSWgvRnuDxSDpdIofmLda~5~8Ge8h-x4Bf1~h5q5BPZ~D2N0CcXLh2pC3kgly72wheqPb1mYRtUj3qQlZFK3HFUp5e-giijtnJXPGtX~EzT4YocZFZX-dpYoGGDyPssRL1Uf~4u68QFlRa55QFdzjQ2oX6PQHdhhqL8kp~9EVYJ3sTa6osufR1mQ2BoWfZEVk4Y2KcX0hQi4KLVwsNfhJmrqclB1H28LSjEgXNgBM5FqYYjLmEBGgJKixCNvrjbsw__&Key-Pair-Id=APKAJJQELYVOQOQ3R7NA",
          title: "San Francisco-based Springboard offers UI/UX design course in India",
          content: "Online learning platform, Springboard is offering its 9-month job-guaranteed UI/UX design course in India. It aims to match participants with a top designer in India as their personal 1:1 mentor throughout, ensuring that they gain complete knowledge of UI/UX design. Through a personal career coach, Springboard also ensures that learners get a job or their money back.",
          displayContent: false
        }
      ]
    };

    this._toggleNewsContent = this._toggleNewsContent.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header logo={this.state.logo}></Header>
        <Body news={this.state.news} onToggleNewsContent={this._toggleNewsContent}></Body>
      </div>
    );
  }

  _toggleNewsContent(idOfNewsToChange) {
    const changedNews = this.state.news.map((n) => {
      const updatedNews = Object.assign({}, n);

      if (idOfNewsToChange === updatedNews.id) {
        updatedNews.displayContent = !updatedNews.displayContent;
      }

      return updatedNews;
    });

    console.log("idOfNewsToChange = %s changedNews = %o", idOfNewsToChange, changedNews);

    this.setState({
      news: changedNews
    });
  }
}

export default App;
