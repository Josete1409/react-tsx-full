import React, { Component } from 'react'

class PanelCodigoSecreto extends Component {
  render() {
    return (
      <div className="panel-codigo-secreto">
        <div className="display">
        </div>
        <div className="teclas">
          <div className="fila-teclas">
             <button type="button" className="tecla">1</button>
             <button type="button" className="tecla">2</button>
             <button type="button" className="tecla">3</button>
          </div>
          <div className="fila-teclas">
             <button type="button" className="tecla">4</button>
             <button type="button" className="tecla">5</button>
             <button type="button" className="tecla">6</button>
          </div>
          <div className="fila-teclas">
             <button type="button" className="tecla">7</button>
             <button type="button" className="tecla">8</button>
             <button type="button" className="tecla">9</button>
          </div>
          <div className="fila-teclas">
             <button type="button" className="tecla">CLD</button>
             <button type="button" className="tecla">0</button>
             <button type="button" className="tecla">DEL</button>
          </div>
        </div>
      </div>
    )
  }

export default PanelCodigoSecreto