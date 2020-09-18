import axios from 'axios'

const urlport = `${process.env.REACT_APP_BASEURL}:${process.env.REACT_APP_PORT}`

//axios.get(url', { params: { ID: 12345 } }) 

export const get = (params,query) => {
    const URL = `${urlport}${params}${query}`;
      return axios.get(URL)
      .then(response => response.data)
      .catch(error => {
        console.log(error);
        throw error;
      });
 };

  export const del = (params,query) => {
      const URL = `${urlport}${params}${query}`;
      
        return axios.delete(URL)
        .then(response => response.data)
        .catch(error => {
          console.log(error);
          throw error;
        });
   };



 // TODO: POST method


 // TODO: Put method
