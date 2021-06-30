import { useEffect, useState } from 'react';
import axios from 'axios';
import data from './data';

const BASE_URL = data.constants.base_url;
const APP_ID = data.constants.app_id;

const User = {
  Usuarios: () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
        .then(({ data }) => { setData(data) })
        .catch(console.error)
    }, []);
    return data;
  },
  Usuarios_2: () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(console.error)
    }, []);
    return data;
  }
};
export default User;