import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props){
        super(props);
        this.stare = {}
    }

    render(){
        return (
            <div>
                <header className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand" href="http://" target="_blank" rel="noopener noreferrer">Gestion de Personas</a></div>
                </header>
            </div>
        );
    }
}

export default HeaderComponent