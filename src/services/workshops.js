import axios from "axios"

const getWorkshops = async () => {
 
        const response = await axios.get('https://workshops-server.herokuapp.com/workshops/');{
            return response.data;
        
    }
    
}

const getWorkshopsById = async (id) => {
 
    const response = await axios.get(`https://workshops-server.herokuapp.com/workshops/${id}`,
    { //2nd argument - it will add a query string parameter
        params:{
            _embed: 'sessions'
        }
    });{
        return response.data;
    
}

}
export {
    getWorkshops,
    getWorkshopsById
}