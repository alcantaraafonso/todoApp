import React, { Component } from 'react';

export default class Grid extends Component {
    /**
     * Converter um número no padrão de numeros de 12 colunas do Bootstrap
     * 1º número: Celular
     * 2º número: Dispositivos menores como Tablets
     * 3º número: Dispositivos médios
     * 4º número: dispositovos maiores
     * 
     * @param {*} numbers 
     */
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : [];
        let classes = '';

        if(cols[0]) {
            classes += `col-xs-${cols[0]}`;
        }
        if(cols[1]) {
            classes += `col-sm-${cols[1]}`;
        }
        if(cols[2]) {
            classes += `col-md-${cols[2]}`;
        }
        if(cols[3]) {
            classes += `col-lg-${cols[3]}`;
        } 
        
        return classes
    }

    render() {
        //No padrão bootstrap, 12 cols significa a tela inteira
        const gridClasses = this.toCssClasses(this.props.cols || 12)

        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}