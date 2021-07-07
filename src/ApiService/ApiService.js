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

export const postOrder = newOrder => {
    return axios
    .post(`${urlport}/api/order_details`, {
      price: newOrder.price,
      quantity: 1,
      product_id: newOrder.product_id,
      order: {   
        ammount: newOrder.ammount,
        customer_id: newOrder.order.customer_id,
        shipping_address: newOrder.order.shipping_address,
        order_address: newOrder.order.order_address,
        order_email: newOrder.order.order_email,
        order_date: new Date().toLocaleString(),
        order_status: 'unordered',
        payment_method: 'handover'
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
}


export const putProduct = id => {
    return axios
    .put(`${urlport}/api/products/${id}`, {
      label: "sold"
    })
    .then(response => {
      console.log(response)
      //return response.data;
    })
    .catch(err => {
      console.log(err)
    })
}

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
      return response;
    })
    .catch(err => {
      console.log(err)
    })
}

export const postProduct = newProduct => {
  return axios
  .post(`${urlport}/api/products`, newProduct)
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err)
  })
}

export const upload = data => {
    return axios
    .post(`${urlport}/api/product_images/upload`, data)
    .then(response => {
      console.log('Upload successful')
      return response
    })
    .catch(err => {
      console.log(err)
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
