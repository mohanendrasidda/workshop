import axios from "axios"

const getworkshops = async () => {
 
        const response = await axios.get('https://workshops-server.herokuapp.com/workshops/');{
            return response.data;
        
    }
    
}
export {
    getworkshops
}