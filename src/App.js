import React, { Component } from 'react';
import Navbar from './components/layout/NavBar';
import Services from './components/services/Services';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    services: [],
    loading: false
  }

  async componentDidMount(){
    this.setState({loading: true});

    const res = await axios.get('http://localhost:58117/api/service');

    this.setState({ services: res.data, loading: false });
  }
  render(){
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Services loading={this.state.loading} services={this.state.services} />  
        </div>           
      </div>
    );
  }
}

export default App;
