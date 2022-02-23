import React, { Component } from 'react';
import "./estilo.css";

class ListaDeCategorias extends Component {

    _handleEventoInput(e){
        
        if(e.key == "Enter"){
            console.log("adicionar categoria");
        }
    }
    state = {  } 
    render() { 
        return (
            <section className="lista-categorias">
            <ul className="lista-categorias_lista">
                <li className="lista-categorias_item">Categorias</li>
                <li className="lista-categorias_item">Categorias</li>
                <li className="lista-categorias_item">Categorias</li>
                <li className="lista-categorias_item">Categorias</li>
            </ul>
            <input className="lista-categorias_input" 
                    type="text" 
                    placeholder='Adicionar Categoria'
                    onKeyUp={this._handleEventoInput.bind(this)}/>
            </section>
        );
    }
}
 
export default ListaDeCategorias;