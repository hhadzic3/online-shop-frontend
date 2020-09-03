import axios from 'axios'

const urlport = `${process.env.REACT_APP_BASEURL}:${process.env.REACT_APP_PORT}`

// TODO: This would be more readable than putting url, params and query all together.
/* 
axios.get(url', { params: { ID: 12345 } }) 
    .then(function (response) { console.log(response); }) 
        .catch(function (error) { console.log(error); });
*/
export const get = (params,query) => {
    const URL = `${urlport}${params}${query}`;
    return axios(URL, {
      method: 'GET'
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
 };
 
 export const justAnAlert = () => {
    alert('hello');
 };