import React from 'react';
import Header from '../../../components/Header';
//import Card from '../../../components/Card';
import User from '../../../services/api/User'

const Home = () => {

  const Axios_array = User.Usuarios();
  const Fetch_array = User.Usuarios_2();

  const Axios_fn = () => {
    console.log(Axios_array);
  }  
  const Fetch_fn = () => {
    console.log(Fetch_array);
  }

  return (
    <div>
      <Header />
      <button onClick={ Axios_fn }> Axios</button><br/>
      <button onClick={ Fetch_fn }> Fetch</button>
    </div>
  );

};
export default Home;
