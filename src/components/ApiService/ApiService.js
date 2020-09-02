import React from 'react';
import axios from 'axios'

const urlport = `${process.env.REACT_APP_BASEURL}:${process.env.REACT_APP_PORT}`

export const getAll = (params,query) => {
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