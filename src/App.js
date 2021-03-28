import React from "react";
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.cores=["blue","red","yellow","purple","orange","green","lightgrey","grey","darkgrey","black"]
    //estado inicial
    this.state = {
     quadrados :[ [0,1,2,3],[4,5,6,7],[8,9,0,1],[2,3,4,5]]

    }
  }
  

  handleTeclado = (event) => { 
   
    
    if (event.code === "ArrowDown"){
      this.setState((state) => ({ 
     quadrados: [ [0,9,0,9],[1,1,1,1],[2,2,2,2],[3,3,3,3]]
      }))
  } else if (event.code === "ArrowUp"){
    this.setState((state) => ({ 
      quadrados: [ [1,1,1,1],[0,0,0,0],[2,2,2,2],[0,1,2,0]]
      }))

  }

}

render() {

  return (
    <div className="App" onKeyDown={this.handleTeclado} tabIndex="0" >
      
      <div id="Quadrado">
        <div className="Qdentro">
          <div id="0.0" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[0][0]]}}>
            0.0
          </div>
          <div id="1.0" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[1][0]]}}>
            1.0
          </div>
          <div id="2.0" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[2][0]]}}>
            2.0
          </div>
          <div id="3.0" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[3][0]]}}>
            3.0
          </div>
        </div>
        <div className="Qdentro">
          <div id="0.1" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[0][1]]}}>
            0.1
          </div>
          <div id="1.1" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[1][1]]}}>
            1.1
          </div>
          <div id="2.1" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[2][1]]}}>
            2.1
          </div>
          <div id="3.1" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[3][1]]}}>
            3.1
          </div>
        </div>
        <div className="Qdentro">
          < div id="0.2" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[0][2]]}}>
            0.2
          </ div>
          <div id="1.2" className="qq"style={{backgroundColor: this.cores[this.state.quadrados[1][2]]}}>
            1.2
          </div>
          <div id="2.2" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[2][2]]}}>
            2.2
          </div>
          <div id="3.2" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[3][2]]}}>
            3.2
          </div>
        </div>
        <div className="Qdentro">
          <div id="0.3" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[0][3]]}}>
            0.3
          </div>
          <div id="1.3" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[1][3]]}}>
            1.3
          </div>
          <div id="2.3" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[2][3]]}}>
            2.3
          </div>
          <div id="3.3" className="qq" style={{backgroundColor: this.cores[this.state.quadrados[3][3]]}}>
            3.3
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default App;

