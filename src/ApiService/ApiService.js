import axios from 'axios'

const urlport = `${process.env.REACT_APP_BASEURL}:${process.env.REACT_APP_PORT}`

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

export const register = newUser => {
  
    return axios
    .post(`${urlport}/api/users/register`, {
      full_name: `${newUser.first_name} ${newUser.last_name}`,
      email: newUser.email,
      password: newUser.password,
      billing_address: newUser.billing_address,
      shipping_address: newUser.shipping_address,
      country: newUser.country,
      phone: newUser.phone
    })
    .then(response => {
      console.log('Registered')
  })
}

export const login = user => {
  return axios
    .post(`${urlport}/api/users/login`, {
      email: user.email,
      password: user.password
    })
    .then(response => {
      if (!response.data.includes('not'))
        localStorage.setItem('usertoken', response.data)
      return response.data;
    })
    .catch(err => {
      console.log(err)
  })
}
