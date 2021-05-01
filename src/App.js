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
  }else if (cor1 === 9 && cor2 === 9){
    return 9
  } 
  else {
    return 0
  }
}

function tabuleiro(i, j, direcao) {
  var linha
  var coluna
  if (direcao === "ArrowLeft") {
    linha = i
    coluna = j

  }
  if (direcao === "ArrowRight") {
    linha = i
    coluna = 3 - j

  }
  if (direcao === "ArrowUp") {
    linha = j
    coluna = i
  }
  if (direcao === "ArrowDown") {
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
      quadrados: [[3, 1, 2, 3], [4, 5, 6, 7], [8, 2, 4, 1], [2, 3, 4, 5]]
     // quadrados: [[0, 0, 0, 0], [7, 7, 0, 0], [0, 0, 0, 8], [0, 0, 0, 0]]
    }
  }

handleBnt = (event) => {
this.setState((state) => {
  var quadrados = [[3, 1, 2, 3], [4, 5, 6, 7], [8, 2, 4, 1], [2, 3, 4, 5]]
  return {quadrados}
})

}

handleTeclado = (direcao) => {
  const dirs = {CIMA:0, BAIXO:1, DIREITA:2, ESQUERDA:3}
  if (direcao.code !== dirs.ESQUERDA && direcao.code !== dirs.DIREITA &&
  direcao.code !== dirs.CIMA && direcao.code !== dirs.BAIXO)
  return

}

   handleTeclas = (event) => {
        
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

  componentDidMount() {
    document.querySelector(".App").focus()
  }

  render() {
    
    return (
     
      <div className="App" onKeyDown={this.handleTeclas tabIndex="0" >

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
        <button onClick={this.handleBnt} id='btn'>Reiniciar </button>
      </div>//fim div app 
     );
  }
  }

export default App;
//incluir um botão de reiniciar
//iniciar o jogo sem precisar clicar 
//instruções 
//incluir níveis
//gerar inicio aleatório para niveis de dificuldade