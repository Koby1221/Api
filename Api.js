import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3050";
 
 const makeApiCall = async (path,method,databody) => {
    try{
        axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
        let options = {
        method: method,
        url: path,
        data:databody
      }
        let res = await axios(options);
        return res.data
    }
    catch(err){
        console.log(err);
        throw err;
    }
    
      
   
    





}
