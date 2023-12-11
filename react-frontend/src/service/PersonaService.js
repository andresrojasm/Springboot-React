import axios from "axios";

const PERSONA_BASE_API_URL = "http://localhost:8080/api/persona";

class PersonaService{

    getPersonas(){
        return axios.get(PERSONA_BASE_API_URL);
    }
}

export default new PersonaService()