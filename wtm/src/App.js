import React from 'react';
import './App.css';
import Meme from './Meme';
import Stanley from './stanley.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div style={{backgroundColor: "red"}}>
        <header style={{fontSize: "xx-large", textAlign: "center", color: "cornsilk", backgroundColor: "navy", fontFamily: "lucida grande", padding: "20px"}}>Welcome to Who's that Meme?</header>
        {this.state.showComponent ?
           <Meme /> :
          //  <div style={{textAlign: "center", paddingTop: "50vh", paddingBottom: "40vh", backgroundColor: "yellow"}}>
            <button style={{height: "100%", width: "100%",paddingTop: "50vh", paddingBottom: "40vh", display: "block", fontSize: "500%", color: "red", backgroundImage: `url(${Stanley}`, backgroundRepeat: "overflow-x", backgroundSize: "auto"}} onClick={this._onButtonClick}>START</button>
          //  {/* </div> */}
        }
      </div>
    );
  }
}

export default App;
