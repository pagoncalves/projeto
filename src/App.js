import React from "react";
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.cores = ["blue", "red", "yellow", "purple", "orange", "green", "lightgrey", "grey", "darkgrey", "black"]
    //estado inicial
    this.state = {
      quadrados: [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 0, 1], [2, 3, 4, 5]]

    }
  }



  handleTeclado = (event) => {
    if (event.code !== "ArrowLeft" && event.code !== "ArrowRight" &&
<<<<<<< HEAD
     event.code !== "ArrowUp" && event.code !== "ArrowDown")
    return
=======
      event.code !== "ArrowUp" && event.code !== "ArrowDown")
      return
>>>>>>> 832da30166be7cea9432ef4b70251a50d1b69930
    this.setState((state) => {
      var quadrados_novos = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

      for (var i = 0; i < 4; i++) {
        var k = 0
        for (var j = 0; j < 4; j++) {
          if (event.code === "ArrowLeft") {
            var linha_atual = i
            var linha_nova = i
            var coluna_atual = j
            var coluna_nova = k
          }
          if (event.code === "ArrowRight") {
            linha_atual = i
            linha_nova = i
            coluna_atual = 3 - j
            coluna_nova = 3 - k
          }
          if (event.code === "ArrowUp") {
            linha_atual = j
            linha_nova = k
            coluna_atual = i
            coluna_nova = i
          }
          if (event.code === "ArrowDown") {
            linha_atual = 3 - j
            linha_nova = 3 - k
            coluna_atual = i
            coluna_nova = i
          }

          var cor_atual = state.quadrados[linha_atual][coluna_atual]
          var cor_nova = quadrados_novos[linha_nova][coluna_nova]
          var cor_soma = cor_atual
<<<<<<< HEAD
          if (cor_nova > 0) {            
=======
          if (cor_atual > 0) {
>>>>>>> 832da30166be7cea9432ef4b70251a50d1b69930
            quadrados_novos[linha_nova][coluna_nova] = cor_soma
            k++
          }
        }
      }
      return { quadrados: quadrados_novos }
    })


  }
   




  

render() {

  return (
    <div className="App" onKeyDown={this.handleTeclado} tabIndex="0" >

      <div id="Quadrado">
        <div className="Qdentro">
          <div id="0.0" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[0][0]] }}>
            0.0
          </div>
          <div id="1.0" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[1][0]] }}>
            1.0
          </div>
          <div id="2.0" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[2][0]] }}>
            2.0
          </div>
          <div id="3.0" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[3][0]] }}>
            3.0
          </div>
        </div>
        <div className="Qdentro">
          <div id="0.1" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[0][1]] }}>
            0.1
          </div>
          <div id="1.1" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[1][1]] }}>
            1.1
          </div>
          <div id="2.1" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[2][1]] }}>
            2.1
          </div>
          <div id="3.1" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[3][1]] }}>
            3.1
          </div>
        </div>
        <div className="Qdentro">
          < div id="0.2" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[0][2]] }}>
            0.2
          </ div>
          <div id="1.2" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[1][2]] }}>
            1.2
          </div>
          <div id="2.2" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[2][2]] }}>
            2.2
          </div>
          <div id="3.2" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[3][2]] }}>
            3.2
          </div>
        </div>
        <div className="Qdentro">
          <div id="0.3" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[0][3]] }}>
            0.3
          </div>
          <div id="1.3" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[1][3]] }}>
            1.3
          </div>
          <div id="2.3" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[2][3]] }}>
            2.3
          </div>
          <div id="3.3" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[3][3]] }}>
            3.3
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default App;