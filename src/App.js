import React from "react";
import './App.css';
//qndo há duas cores e quer somar, cor1 com cor2
function soma_Cores(cor1, cor2) {
  var tipo = [0, 1, 1, 2, 1, 2, 2]//criada para 
  if (cor1 <= 6 && cor2 <= 6) {
    if (tipo[cor1] === tipo[cor2] && cor1 !== cor2) {
      return cor1 | cor2
    } else {
      return 0
    }
  } else if(cor1 === 7 && cor2 ===7){
    return 8
  } else if (cor1 === 8 && cor2 === 8){
    return 9
  }
}

function tabuleiro(i, j, tecla) {
  var linha
  var coluna
  if (tecla === "ArrowLeft") {
    linha = i
    coluna = j

  }
  if (tecla === "ArrowRight") {
    linha = i
    coluna = 3 - j

  }
  if (tecla === "ArrowUp") {
    linha = j
    coluna = i
  }
  if (tecla === "ArrowDown") {
    linha = 3 - j
    coluna = i
  }
  return [linha, coluna]
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.cores = ["white", "blue", "red", "purple", "yellow", "green", "orange", "lightgrey", "grey", "black"]
    //estado inicial
    this.state = {
      quadrados: [[0, 1, 2, 3], [4, 5, 6, 7], [8, 0, 0, 1], [2, 3, 4, 5]]

    }
  }




  handleTeclado = (event) => {
    if (event.code !== "ArrowLeft" && event.code !== "ArrowRight" &&
      event.code !== "ArrowUp" && event.code !== "ArrowDown")
      return
    this.setState((state) => {
      var quadrados_novos = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

      for (var i = 0; i < 4; i++) {
        var k = 0
        for (var j = 0; j < 4; j++) {
          var linha_atual, coluna_atual, coluna_nova, linha_nova
          [linha_atual, coluna_atual] = tabuleiro(i, j, event.code);
          [linha_nova, coluna_nova] = tabuleiro(i, k, event.code)

          var cor_atual = state.quadrados[linha_atual][coluna_atual]
          var cor_nova = quadrados_novos[linha_nova][coluna_nova]
          if (cor_atual > 0) {
            var cor_soma
            if (cor_nova === 0) {
              cor_soma = cor_atual
            } else {
              k++
              cor_soma = soma_Cores(cor_atual, cor_nova);
              if (cor_soma === 0) {
                cor_soma = cor_atual;
                [linha_nova, coluna_nova] = tabuleiro(i, k, event.code)

              }

            }

            quadrados_novos[linha_nova][coluna_nova] = cor_soma

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
              {this.state.quadrados[0][0]}
            </div>
            <div id="1.0" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[1][0]] }}>
              {this.state.quadrados[1][0]}
            </div>
            <div id="2.0" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[2][0]] }}>
              {this.state.quadrados[2][0]}

            </div>
            <div id="3.0" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[3][0]] }}>
              {this.state.quadrados[3][0]}
            </div>
          </div>
          <div className="Qdentro">
            <div id="0.1" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[0][1]] }}>
              {this.state.quadrados[0][1]}
            </div>
            <div id="1.1" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[1][1]] }}>
              {this.state.quadrados[1][1]}
            </div>
            <div id="2.1" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[2][1]] }}>
              {this.state.quadrados[2][1]}
            </div>
            <div id="3.1" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[3][1]] }}>
              {this.state.quadrados[3][1]}
            </div>
          </div>
          <div className="Qdentro">
            < div id="0.2" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[0][2]] }}>
              {this.state.quadrados[0][2]}
            </ div>
            <div id="1.2" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[1][2]] }}>
              {this.state.quadrados[1][2]}
            </div>
            <div id="2.2" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[2][2]] }}>
              {this.state.quadrados[2][2]}
            </div>
            <div id="3.2" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[3][2]] }}>
              {this.state.quadrados[3][2]}
            </div>
          </div>
          <div className="Qdentro">
            <div id="0.3" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[0][3]] }}>
              {this.state.quadrados[0][3]}
            </div>
            <div id="1.3" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[1][3]] }}>
              {this.state.quadrados[1][3]}
            </div>
            <div id="2.3" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[2][3]] }}>
              {this.state.quadrados[2][3]}
            </div>
            <div id="3.3" className="qq" style={{ backgroundColor: this.cores[this.state.quadrados[3][3]] }}>
              {this.state.quadrados[3][3]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;