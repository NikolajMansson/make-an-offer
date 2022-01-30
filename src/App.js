import React, { Component } from 'react';
import Navbar from './components/layout/NavBar';
import Services from './components/services/Services';
import Search from './components/services/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    services: [],
    sqmprice: null,
    sqm: 0,
    loading: false
  }

  searchServices = async (text, sqm) => {
    const resServices = await axios.get(`http://localhost:58117/api/service/department/${text}`);
    const resSqmPrice = await axios.get(`http://localhost:58117/api/department/${text}`);

    this.setState({ services: resServices.data, sqm: sqm, sqmprice: resSqmPrice.data[0].SQMPrice, loading: false });
  }

  render(){
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchServices={this.searchServices} getSqmPrice={this.getSqmPrice}/>
          <Services loading={this.state.loading} services={this.state.services} sqmprice={this.state.sqmprice} sqm={this.state.sqm}/>  
        </div>           
      </div>
    );
  }
}

export default App;
