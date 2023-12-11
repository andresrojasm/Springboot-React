import React, { Component } from "react";
import PersonaService from "../service/PersonaService";

class ListPersonaComponent extends Component{

    constructor(props){
        super(props) 
        this.state = {
            personas: []
        }
    }

    componentDidMount(){
        PersonaService.getPersonas().then((res) => {
            this.setState(
                {personas: res.data}
            );
        });
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Lista de Personas</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.personas.map(
                                    persona =>
                                    <tr key={persona.id}>
                                        <td>{persona.id}</td>
                                        <td>{persona.firstName}</td>
                                        <td>{persona.lastName}</td>
                                        <td>{persona.email}</td>
                                        <td>{}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}

export default ListPersonaComponent