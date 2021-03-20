import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cores:["azul","vermelho","amarelo","roxo","laranja","verde"],
     quadrados :[ [0,1,1,0],["vermelho","verde","azul","branco"],["verde","azul","branco","vermelho"],["azul","branco","vermelho","verde"]]
    }
  }

  handleTeclado = () => { 

  }

render() {

  return (
    <div className="App" onKeyPress={this.handleTeclado} >
      
      <div id="Quadrado">
        <div className="Qdentro">
          <div id="0.0" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>

            0.0
          </div>
          <div id="1.0" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            1.0
          </div>
          <div id="2.0" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            2.0
          </div>
          <div id="3.0" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            3.0
          </div>
        </div>
        <div className="Qdentro">
          <div id="0.1" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            0.1
          </div>
          <div id="1.1" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            1.1
          </div>
          <div id="2.1" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            2.1
          </div>
          <div id="3.1" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            3.1
          </div>
        </div>
        <div className="Qdentro">
          < div id="0.2" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            0.2
          </ div>
          <div id="1.2" className="qq"style={{backgroundColor: this.state.backgroundcolor}}>
            1.2
          </div>
          <div id="2.2" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            2.2
          </div>
          <div id="3.2" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            3.2
          </div>
        </div>
        <div className="Qdentro">
          <div id="0.3" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            0.3
          </div>
          <div id="1.3" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            1.3
          </div>
          <div id="2.3" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            2.3
          </div>
          <div id="3.3" className="qq" style={{backgroundColor: this.state.backgroundcolor}}>
            3.3
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default App;
